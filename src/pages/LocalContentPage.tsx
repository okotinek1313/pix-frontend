import { useState } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import * as LucideIcon from 'lucide-react';

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL: string = "https://api.themoviedb.org/3/search/movie";

export default function LocalContentPage() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const myMedia = useQuery(api.userMedia.getMyMedia);
    const saveMediaMutation = useMutation(api.userMedia.saveMedia);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || files.length === 0) return;

        const newFileList: File[] = [];
        for (let i = 0; i < files.length; i++) {
            newFileList.push(files[i]);
        }

        setSelectedFiles(newFileList);
        handleAPIscanning(newFileList);
    };

    const handleAPIscanning = async (filesToScan: File[]) => {
        for (let i = 0; i < filesToScan.length; i++) {
            const file = filesToScan[i];
            const fileName = file.name;
            
            let movieTitle = fileName
                .replace(/\.[^/.]+$/, "")
                .replace(/[._]/g, " ")
                .replace(/\s+/g, " ")
                .trim();
            
            movieTitle = movieTitle.replace(/\b(19|20)\d{2}\b/, "").trim();
            
            try {
                const metadata = await searchTMDB(movieTitle);
                if (metadata) {
                    await saveMediaMutation({
                        fileName: fileName,
                        title: metadata.title,
                        posterPath: metadata.poster_path || undefined,
                        tmdbId: metadata.id,
                    });
                }
            } catch (error) {
                console.error("Error processing", fileName, error);
            }
        }
    };

    const searchTMDB = async (query: string) => {
        if (!TMDB_API_KEY) throw new Error("TMDB API key missing");

        const params = new URLSearchParams({
            api_key: TMDB_API_KEY,
            query: query
        });
        
        const url = `${TMDB_BASE_URL}?${params}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`TMDB API error: ${response.status} - ${errorData.status_message || 'Unknown error'}`);
        }
        
        const data = await response.json();
        return data.results[0] || null;
    };

    return(
        <div className="w-screen h-screen bg-grey-30 overflow-visible p-8">
            <input 
                type='file'
                id="fileUpload"
                accept="video/*,.mkv,.avi,.flv,.webm,.mov,.mp4"
                multiple
                onChange={handleFileSelect}
                hidden
            />

            <label className="text-white block mb-2 font-medium lucide-icon" htmlFor="fileUpload">
                <LucideIcon.Plus size={28}/>
            </label>

            {/* Display selected files temporarily */}
            {selectedFiles.length > 0 && (
                <div className="mt-4">
                    <h3 className="font-medium">New Files Selected:</h3>
                    <ul className="list-disc list-inside mt-2">
                        {selectedFiles.map((file, index) => (
                            <li key={index} className="text-sm text-gray-700">
                                {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Display persistent media library from database */}
            {myMedia && myMedia.length > 0 && (
                <div className="mt-8">
                    <h3 className="font-medium text-xl mb-4">Your Media Library</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {myMedia.map((item) => (
                            <div key={item._id} className="bg-white rounded-lg shadow-md p-3">
                                {item.posterPath ? (
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w200${item.posterPath}`} 
                                        alt={item.title}
                                        className="w-full h-auto rounded mb-2"
                                    />
                                ) : (
                                    <div className="w-full h-48 bg-gray-200 rounded mb-2 flex items-center justify-center">
                                        <LucideIcon.Film size={32} className="text-gray-400" />
                                    </div>
                                )}
                                <p className="font-medium text-sm truncate">{item.title}</p>
                                <p className="text-xs text-gray-500 truncate">{item.fileName}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {myMedia && myMedia.length === 0 && selectedFiles.length === 0 && (
                <div className="flex items-center justify-center h-3/4">
                    <p className="text-gray-500">Select video files to build your media library</p>
                </div>
            )}
        </div>
    );
}

import { useState } from 'react';
import * as LucideIcon from 'lucide-react';

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL: string = "https://api.themoviedb.org/3/search/movie";

export default function LocalContentPage() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || files.length === 0) return;

        // Grab All Files
        const newFileList: File[] = [];
        for (let i = 0; i < files.length; i++) {
            newFileList.push(files[i]);
        }

        // Update state with new files
        setSelectedFiles(newFileList);
        
        // Scan For MetaData
        handleAPIscanning(newFileList);
    };

    const handleAPIscanning = async (filesToScan: File[]) => {
        for (let i = 0; i < filesToScan.length; i++) {
            const file = filesToScan[i];
            const fileName = file.name;
            
            // Basic filename cleaning
            let movieTitle = fileName
                .replace(/\.[^/.]+$/, "") // Remove extension
                .replace(/[._]/g, " ")    // Replace dots/underscores with spaces
                .replace(/\s+/g, " ")     // Collapse multiple spaces
                .trim();
            
            // Try to remove year (e.g., "2023")
            movieTitle = movieTitle.replace(/\b(19|20)\d{2}\b/, "").trim();
            
            console.log("Searching TMDB for:", movieTitle);
            
            try {
                const metadata = await searchTMDB(movieTitle);
                if (metadata) {
                    console.log("✅ Found:", metadata.title);
                    // TODO: Store in Convex here
                } else {
                    console.log("❌ Not found:", movieTitle);
                }
            } catch (error) {
                console.error("Error searching for", movieTitle, error);
            }
        }
    };

    const searchTMDB = async (query: string) => {
        if (!TMDB_API_KEY) {
            throw new Error("TMDB API key is missing from environment variables.");
        }

        // Use URLSearchParams for proper URL encoding
        const params = new URLSearchParams({
            api_key: TMDB_API_KEY,
            query: query
        });
        
        const url = `${TMDB_BASE_URL}?${params}`;
        const response = await fetch(url);
        
        // Enhanced error handling to see TMDB's response
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`TMDB API error: ${response.status} - ${errorData.status_message || 'Unknown error'}`);
        }
        
        const data = await response.json();
        return data.results[0] || null;
    };

    return(
        <div className="w-screen h-screen bg-grey-30 overflow-hidden">
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

            {selectedFiles.length > 0 && (
                <div className="mt-4">
                    <h3 className="font-medium">Selected Files:</h3>
                    <ul className="list-disc list-inside mt-2">
                        {selectedFiles.map((file, index) => (
                            <li key={index} className="text-sm text-gray-700">
                                {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

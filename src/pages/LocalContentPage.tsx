import * as LucideIcon from 'lucide-react'
import { useState } from 'react'

let currentFileName: string = '';

// Export the filename variable and a getter function
export let selectedFileName: string = '';
export const getCurrentFileName = () => currentFileName;

export default function LocalContentPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            currentFileName = file.name;
            selectedFileName = file.name; // Update both variables
            console.log('Selected file:', selectedFileName);
        }
    };

    return(
        <>
            <div className="w-screen h-screen overflow-hidden">
                <input 
                    type="file" 
                    id="fileInput" 
                    accept="video/*" 
                    onChange={handleFileChange}
                    className="sr-only"
                />
                
                <label htmlFor="fileInput" className="cursor-pointer">
                    <LucideIcon.Plus className="lucide-icon text-white" size={36} />
                </label>

                {selectedFile && (
                    <div className="mt-4">
                        <p className="text-white">Selected: {selectedFile.name}</p>
                    </div>
                )}
            </div>
        </>
    )
}

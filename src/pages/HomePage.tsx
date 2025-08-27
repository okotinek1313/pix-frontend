import * as LucideIcon from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import { AppSelector } from '../components/AppSelector';
import { useAppSelector } from '../hooks/useAppSelector';

const normalLucideIconSize : number = 36

export default function HomePage() {
    const navigate = useNavigate()
    const { isVisible, open, close } = useAppSelector();

    const navigateHome = () => navigate('/')
    const navigateSettings = () => navigate('/settings')
    const navigateLocalContent = () => navigate('/local-content')

    return(
        <>
            <div className="w-screen h-screen !overflow-hidden">
                <div className="w-[75%] h-[75%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" id="appsGrid">
                    <div id="localContend" className="w-[56px] h-[56px] absolute top-[3%] left-[3%]">
                        <button className="width-full h-full rounded-md" onClick={navigateLocalContent}>
                            <LucideIcon.HardDrive size={128} className="cursor-pointer lucide-icon !rounded-3xl text-white !w-48 !h-48" />
                        </button>
                    </div>

                    <div id="apps">
                        <div id="appAddButton">
                            <button onClick={open} className="lucide-icon cursor-pointer text-white flex items-center justify-center absolute top-[60%]">
                                <LucideIcon.Plus size={36}/>
                            </button>
                        </div>
                        <AppSelector isVisible={isVisible} onClose={close} />
                    </div>
                </div>

                <Sidebar>
                    <div className="w-full h-16" id={"sidebarHeader"}>
                        <button 
                            onClick={navigateHome}
                            className="lucide-icon left-[1.5%] top-[1.5%] absolute p-2 z-10 flex items-center justify-center"
                        >
                            <LucideIcon.House 
                                className={"text-white pointer-events-none"} 
                                size={normalLucideIconSize} 
                            />
                        </button>

                        <button 
                            onClick={navigateSettings}
                            className="lucide-icon right-[1.5%] top-[1.5%] absolute p-2 z-10 flex items-center justify-center"
                        >
                            <LucideIcon.Settings 
                                className={"text-white pointer-events-none"} 
                                size={normalLucideIconSize}  
                            />
                        </button>
                    </div>

                    <div className="h-[calc(100%-16px)] absolute top-[16px] w-full"  id="sidebarContent">
                        
                    </div>
                    
                </Sidebar>
            </div>
        </>
    )
}

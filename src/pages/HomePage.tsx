import * as LucideIcon from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'



// Const Decleration
const normalLucideIconSize : number = 36

export default function HomePage() {
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate('/')
    }

    const navigateSettings = () => {
        navigate('/settings')
    }

    const navigateLocalContent = () => {
        navigate('/local-content')
    }

    return(
                <>
            <div className="w-screen h-screen !overflow-hidden">

                <div className="w-[75%] h-[75%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" id="appsGrid">
                    <div id="localContend" className="w-[56px] h-[56px] absolute top-[3%] left-[3%]">
                        <button className="width-full h-full rounded-md" onClick={navigateLocalContent}>
                            <LucideIcon.HardDrive size={56} className="text-white" />
                        </button>
                    </div>    
                </div>

                <Sidebar>
                    <div className="w-full h-16" id={"sidebarHeader"}>
                        <LucideIcon.House className={"cursor-pointer lucide-icon text-white left-[1.5%] top-[1.5%] absolute"} size={normalLucideIconSize} onClick={navigateHome}/>
                        <LucideIcon.Settings className={"cursor-pointer lucide-icon text-white right-[1.5%] top-[1.5%] absolute"} size={normalLucideIconSize} onClick={navigateSettings} />
                    </div>

                    <div className="h-[calc(100%-16px)] absolute top-[16px] w-full"  id="sidebarContent">
                        
                    </div>
                    
                </Sidebar>
            </div>
        </>
    )
}

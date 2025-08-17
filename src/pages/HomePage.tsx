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
                <Sidebar>
                    <div className="w-full h-16" id={"sidebarHeader"}>
                        <LucideIcon.House className={"cursor-pointer lucide-icon text-white left-[1.5%] top-[1.5%] absolute"} size={normalLucideIconSize} onClick={navigateHome}/>
                        <LucideIcon.Settings className={"cursor-pointer lucide-icon text-white right-[1.5%] top-[1.5%] absolute"} size={normalLucideIconSize} onClick={navigateSettings} />
                    </div>
                </Sidebar>
            </div>
        </>
    )
}

import * as LucideIcon from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'

// Const Decleration
const LucideIconSize : number = 36

export default function HomePage() {
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate('/')
    }

    return(
        <>
            <div className="w-screen h-screen !overflow-hidden">
                <Sidebar>
                    <LucideIcon.House className={"cursor-pointer lucide-icon text-white left-[1.5%] top-[1.5%] absolute"} size={LucideIconSize} onClick={navigateHome}/>
                </Sidebar>
            </div>
        </>
    )
}
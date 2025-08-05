import {Route, Routes} from 'react-router'

// Import Pages
import HomePage from './pages/HomePage'
import AppPage from './pages/AppPage'

// Paths
const HomePath: string = "/"
const AppPath: string = '/apps'

export default function AppRouter(){
    return(
        <Routes>
           <Route path={HomePath} element={<HomePage />} />
           <Route path={AppPath} element={<AppPage />} />
        </Routes>
    )
}
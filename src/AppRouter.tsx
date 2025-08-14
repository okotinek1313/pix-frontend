import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AppPage from './pages/AppPage';

// Paths
const HomePath : string = "/"
const AppPath : string = "apps"


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={HomePath} element={<HomePage />} />
          <Route path={AppPath} element={<AppPage />} />
      </Routes>
    </BrowserRouter>
  );
}
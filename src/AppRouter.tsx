import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import LocalContentPage from './pages/LocalContentPage';
import NotFoundPage from './pages/NotFoundPage'

// Paths
const HomePath : string = "/"
const SettingsPath : string = "/settings"
const LocalContentPath : string = "/local-content"
const NotFoundPath : string = "*"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={HomePath} element={<HomePage />} />
          <Route path={SettingsPath} element={<SettingsPage />} />
          <Route path={LocalContentPath} element={<LocalContentPage />} />
          <Route path={NotFoundPath} element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );
}

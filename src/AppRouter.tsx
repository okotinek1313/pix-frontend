import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import LocalContentPage from './pages/LocalContentPage';

// Paths
const HomePath : string = "/"
const SettingsPath : string = "/settings"
const LocalContentPath : string = "/local-content"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={HomePath} element={<HomePage />} />
          <Route path={SettingsPath} element={<SettingsPage />} />
          <Route path={LocalContentPath} element={<LocalContentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
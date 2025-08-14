import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

// Paths
const HomePath : string = "/"
const SettingsPath : string = "/settings"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={HomePath} element={<HomePage />} />
          <Route path={SettingsPath} element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
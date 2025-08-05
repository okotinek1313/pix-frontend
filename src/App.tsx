import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter' // adjust path if needed

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'          // 👈 change this line
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

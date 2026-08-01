import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// This is importan, it's how the app's desplayed

// 3. PRs
// 1. wtf is ^
// 2. tailwind
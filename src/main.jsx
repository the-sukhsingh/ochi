import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SmoothScrollClient from "./components/SmoothScroll";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrollClient>
      <App />
    </SmoothScrollClient>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactModule from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactModule/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CounterApp from './CounterApp.jsx'
import AccordionApp from './AccordionApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp />
    <AccordionApp />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Heading } from './components/Heading';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Heading />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import NavigationRoutes from './navigation/navigation-routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NavigationRoutes />
    </BrowserRouter>
  </StrictMode>,
)

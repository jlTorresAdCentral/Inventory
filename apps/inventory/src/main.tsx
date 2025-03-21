import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from "react-i18next";
import './index.css'
import { BrowserRouter } from 'react-router'
import NavigationRoutes from './navigation/navigation-routes'
import i18n from "../i18n"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <NavigationRoutes />
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
)

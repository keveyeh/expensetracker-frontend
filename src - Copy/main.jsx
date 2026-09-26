import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
 import ProviderContex from "./context/ThemeContex"
import ProviderTransaction from './context/Transaction.jsx'
createRoot(document.getElementById('root')).render(
 <ProviderTransaction>
  <ProviderContex>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>,
 </BrowserRouter>
 </ProviderContex>
 </ProviderTransaction>
)

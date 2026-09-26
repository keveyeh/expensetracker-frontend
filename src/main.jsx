import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Providerbudget from './context/budgetcontext.jsx'
import { BrowserRouter } from 'react-router-dom'
 import ProviderContex from "./context/ThemeContex"
import ProviderTransaction from './context/Transaction.jsx'
import UserProvider from './context/userInfoContext.jsx'
import CurrencyProvider from './context/currency.jsx'
createRoot(document.getElementById('root')).render(
  <CurrencyProvider>
    <UserProvider>
    <Providerbudget>
     <ProviderTransaction>
  <ProviderContex>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>,
 </BrowserRouter>
 </ProviderContex>
 </ProviderTransaction>
  </Providerbudget>
  </UserProvider>
  </CurrencyProvider>
  
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styles/globalStyles.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </StrictMode>
)

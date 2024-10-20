// Imports Bibliotecas
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Import Css
import './main.css'

// Imports Components
import App from './App.jsx'
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom/client'
import CostumProvider from './components/ContextAPI/context'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CostumProvider>
      <App />
    </CostumProvider>
  </BrowserRouter>



)

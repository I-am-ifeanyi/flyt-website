import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'

import { ContextApi } from './components/ContextApi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <ContextApi>
      <App />
      </ContextApi>
      </HashRouter>
  </React.StrictMode>,
)

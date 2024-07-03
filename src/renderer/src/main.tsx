import '@renderer/assets/global.sass'
import '@renderer/assets/tailwind.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

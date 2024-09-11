import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@/assets/scss/tailwind.scss'
import '@/assets/scss/App.scss'

const rootEl = document.getElementById('root')
if(rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}



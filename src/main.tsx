import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/@picocss/pico/css/pico.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Memo from './pages/memo/Memo'
import UseMemo from './pages/useMemo/UseMemo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/Memo" element={<Memo />}></Route>
        <Route path="/useMemo" element={<UseMemo />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

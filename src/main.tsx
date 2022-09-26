import React from 'react'
import App from './App'
import '../node_modules/@picocss/pico/css/pico.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Memo from './pages/memo/Memo'
import UseMemo from './pages/useMemo/UseMemo'
import NotFound from './pages/NotFound'
import { render } from 'react-dom'

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Memo" element={<Memo />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
)

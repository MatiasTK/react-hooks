import App from './App'
import '../node_modules/@picocss/pico/css/pico.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Memo from './pages/memo/Memo'
import UseMemo from './pages/useMemo/UseMemo'
import NotFound from './pages/NotFound'
import UseRef from './pages/useRef/UseRef'
import UseRef2 from './pages/useRef/UseRef2'
import UseRef3 from './pages/useRef/useRef3'
import UseContext from './pages/useContext/UseContext'
import UseCallback from './pages/useCallback/UseCallback'
import UseReducer from './pages/useReducer/UseReducer'

const rootElement = document.getElementById('root')

const root = createRoot(rootElement!)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Memo" element={<Memo />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/useRef2" element={<UseRef2 />} />
      <Route path="/useRef3" element={<UseRef3 />} />
      <Route path="/useContext" element={<UseContext />} />
      <Route path="/useCallback" element={<UseCallback />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

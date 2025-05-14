import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Merch from './Merch.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/merchandises/:id" element={<Merch />} />
    </Routes>
  </BrowserRouter>,
)

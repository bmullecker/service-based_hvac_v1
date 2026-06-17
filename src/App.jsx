import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlumbingDemo from './pages/PlumbingDemo'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PlumbingDemo />} />
      </Routes>
    </BrowserRouter>
  )
}

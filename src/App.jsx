import { HashRouter, Routes, Route } from 'react-router-dom'
import PlumbingDemo from './pages/PlumbingDemo'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<PlumbingDemo />} />
      </Routes>
    </HashRouter>
  )
}

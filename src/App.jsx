import { HashRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Heating from './pages/Heating'
import Cooling from './pages/Cooling'
import Plumbing from './pages/Plumbing'
import Emergency from './pages/Emergency'
import About from './pages/About'
import Contact from './pages/Contact'
import Maintenance from './pages/Maintenance'
import ThankYou from './pages/ThankYou'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heating" element={<Heating />} />
            <Route path="/cooling" element={<Cooling />} />
            <Route path="/plumbing" element={<Plumbing />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

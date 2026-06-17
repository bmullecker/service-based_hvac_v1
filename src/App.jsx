import { HashRouter, Routes, Route, Outlet } from 'react-router-dom'
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
import PlumbingDemo from './pages/PlumbingDemo'

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/plumbing-demo" element={<PlumbingDemo />} />
        <Route element={<MainLayout />}>
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
        </Route>
      </Routes>
    </HashRouter>
  )
}

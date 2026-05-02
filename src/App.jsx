import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import SleepPage from './pages/SleepPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import BlogPost1_SleepAlone from './pages/BlogPost1_SleepAlone'
import BlogPost2_ParentalAnger from './pages/BlogPost2_ParentalAnger'
import BlogPost3_Connection from './pages/BlogPost3_Connection'
import BlogPost4_AgeThree from './pages/BlogPost4_AgeThree'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/sleep"    element={<SleepPage />} />
          <Route path="/blog"     element={<BlogPage />} />
          <Route path="/blog/sleep-alone" element={<BlogPost1_SleepAlone />} />
          <Route path="/blog/parental-anger" element={<BlogPost2_ParentalAnger />} />
          <Route path="/blog/connection" element={<BlogPost3_Connection />} />
          <Route path="/blog/age-three" element={<BlogPost4_AgeThree />} />
          <Route path="/contact"  element={<ContactPage />} />
          <Route path="*"         element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

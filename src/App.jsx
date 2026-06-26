import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PasswordGenerator from './pages/PasswordGenerator'
import About from './pages/About'
import './index.css'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Router>
      {/* Light gray background */}
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <Navbar />
        <main className="container mx-auto px-4 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generator" element={<PasswordGenerator />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
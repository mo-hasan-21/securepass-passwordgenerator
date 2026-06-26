import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from "../assets/logo.png"

function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 hover-lift">
            <img 
              src={logo}
              alt="SecurePass logo"
              className="h-8 w-auto object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-900">SecurePass</h3>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/generator" active={isActive('/generator')}>Generator</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col gap-2">
              <MobileNavLink 
                to="/" 
                active={isActive('/')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </MobileNavLink>
              <MobileNavLink 
                to="/generator" 
                active={isActive('/generator')}
                onClick={() => setMobileMenuOpen(false)}
              >
                Generator
              </MobileNavLink>
              <MobileNavLink 
                to="/about" 
                active={isActive('/about')}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`relative text-sm font-medium transition-colors duration-200 pb-1 ${
        active 
          ? 'text-orange-600 border-b-2 border-orange-500' 
          : 'text-gray-500 hover:text-gray-900'
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ to, active, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
        active 
          ? 'bg-orange-50 text-orange-600' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  )
}

export default Navbar
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/logo.png"

function Navbar() {
  const location = useLocation()
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

          <div className="flex gap-8">
            <NavLink to="/" active={isActive('/')}>Home</NavLink>
            <NavLink to="/generator" active={isActive('/generator')}>Generator</NavLink>
            <NavLink to="/about" active={isActive('/about')}>About</NavLink>
          </div>
        </div>
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

export default Navbar
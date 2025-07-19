import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const location = useLocation();

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const NavLink = ({ to, children, className = "" }) => (
    <Link
      to={to}
      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        isActiveLink(to) 
          ? 'bg-white text-orange-600 shadow-lg border border-orange-200' 
          : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-white'
      } ${className}`}
    >
      {children}
      {isActiveLink(to) && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></div>
      )}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-red-500 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg group-hover:scale-110 transition-transform duration-200" 
                  src={LOGO_URL} 
                  alt="Foodie Logo"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden md:block">
                <h1 className="text-2xl font-bold text-white">Foodie</h1>
                <p className="text-xs text-orange-100">Delicious & Fast</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {/* Online Status */}
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-3 py-1 mr-4">
              <div className={`w-2 h-2 rounded-full ${onlineStatus ? 'bg-green-400' : 'bg-red-400'}`}></div>
              <span className="text-orange-500 text-sm font-medium">
                {onlineStatus ? 'Online' : 'Offline'}
              </span>
            </div>

            <NavLink to="/">
              <span className="flex items-center space-x-1">
                <span>🏠</span>
                <span>Home</span>
              </span>
            </NavLink>
            
            <NavLink to="/about">
              <span className="flex items-center space-x-1">
                <span>ℹ️</span>
                <span>About</span>
              </span>
            </NavLink>
            
            <NavLink to="/contact">
              <span className="flex items-center space-x-1">
                <span>📞</span>
                <span>Contact</span>
              </span>
            </NavLink>

            {/* Cart */}
            <NavLink to="/cart" className="relative">
              <span className="flex items-center space-x-1">
                <span>🛍️</span>
                <span>Cart</span>
              </span>
              {cartItems.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-orange-800 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-white">
                  {cartItems.length}
                </div>
              )}
            </NavLink>
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {/* User Info */}
            <div className="hidden md:flex items-center space-x-3 bg-white bg-opacity-20 rounded-full px-4 py-2">
              <div className="w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold text-sm">
                  {loggedInUser?.charAt(0)?.toUpperCase() || 'G'}
                </span>
              </div>
              <span className="text-orange-500 font-medium text-sm">{loggedInUser || 'Guest'}</span>
            </div>

            {/* Login/Logout Button */}
            <button
              onClick={() => {
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
              }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                btnNameReact === "Login"
                  ? 'bg-white text-orange-500 hover:bg-gray-100'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              {btnNameReact === "Login" ? (
                <span className="flex items-center space-x-1">
                  <span>🔐</span>
                  <span>Login</span>
                </span>
              ) : (
                <span className="flex items-center space-x-1">
                  <span>🚪</span>
                  <span>Logout</span>
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden bg-white bg-opacity-20 p-2 rounded-lg"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <nav className="space-y-2">
            {/* Online Status */}
            <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 rounded-lg px-3 py-2 mb-4">
              <div className={`w-2 h-2 rounded-full ${onlineStatus ? 'bg-green-400' : 'bg-red-400'}`}></div>
              <span className="text-orange-500 text-sm font-medium">
                {onlineStatus ? 'Online' : 'Offline'}
              </span>
            </div>

            <Link to="/" className="block bg-white bg-opacity-20 text-white rounded-lg px-4 py-3 hover:bg-opacity-30 transition-colors font-medium">
              🏠 Home
            </Link>
            <Link to="/about" className="block bg-white bg-opacity-20 text-white rounded-lg px-4 py-3 hover:bg-opacity-30 transition-colors font-medium">
              ℹ️ About Us
            </Link>
            <Link to="/contact" className="block bg-white bg-opacity-20 text-white rounded-lg px-4 py-3 hover:bg-opacity-30 transition-colors font-medium">
              📞 Contact Us
            </Link>
            <Link to="/cart" className="block bg-white bg-opacity-20 text-white rounded-lg px-4 py-3 hover:bg-opacity-30 transition-colors relative font-medium">
              🛍️ Cart ({cartItems.length})
            </Link>

            {/* Mobile User Info */}
            <div className="bg-white bg-opacity-20 rounded-lg px-4 py-3 text-center">
              <div className="text-orange-500 font-medium">{loggedInUser || 'Guest User'}</div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

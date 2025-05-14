
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if the navbar should change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-playfair font-bold text-primary">
          Portfolio
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className={cn("nav-link", location.pathname === "/" && "after:scale-x-100")}>
            Home
          </Link>
          {/* <Link to="/about" className={cn("nav-link", location.pathname === "/about" && "after:scale-x-100")}>
            About
          </Link> */}
          <Link to="/portfolio" className={cn("nav-link", location.pathname === "/portfolio" && "after:scale-x-100")}>
            Portfolio
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={cn("py-2 px-4", location.pathname === "/" ? "text-primary" : "text-cream-800")}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={cn("py-2 px-4", location.pathname === "/about" ? "text-primary" : "text-cream-800")}
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className={cn("py-2 px-4", location.pathname === "/portfolio" ? "text-primary" : "text-cream-800")}
            >
              Portfolio
            </Link>
            <a 
              href="mailto:contact@example.com" 
              className="py-2 px-4 bg-primary text-white rounded"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cream-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Portfolio</h3>
            <p className="text-cream-600 mb-4">
              Crafting beautiful digital experiences that make an impact.
            </p>
            <p className="text-cream-600">
              © {currentYear} All Rights Reserved
            </p>
          </div>
          
          {/* <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-600 hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-cream-600 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-cream-600 mb-2">kanzalkautsar@gmail.com</p>
              <p className="text-cream-600 mb-2">+62 812 8210 3522</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://x.com/KanzAlkautsar" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-opacity-80 transition-opacity">
                  Twitter
                </a>
                <a href="https://www.linkedin.com/in/kanz-abiyu-alkautsar-a3b4b4362/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-opacity-80 transition-opacity">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/alka_bro.kanz/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-opacity-80 transition-opacity">
                  Instagram
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

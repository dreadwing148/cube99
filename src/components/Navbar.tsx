
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-construction-800 font-display font-bold text-xl md:text-2xl">
                CUBE<span className="text-yellow-500">99</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-construction-700 hover:text-yellow-500 font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-construction-700 hover:text-yellow-500 font-medium transition-colors">
              About
            </a>
            <a href="#services" className="text-construction-700 hover:text-yellow-500 font-medium transition-colors">
              Services
            </a>
            <a href="#projects" className="text-construction-700 hover:text-yellow-500 font-medium transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-construction-700 hover:text-yellow-500 font-medium transition-colors">
              Contact
            </a>
            <Button 
              className="bg-yellow-500 hover:bg-yellow-600 text-construction-800 font-medium"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-construction-800"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6 bg-white">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-construction-700 hover:text-yellow-500 px-4 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-construction-700 hover:text-yellow-500 px-4 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="text-construction-700 hover:text-yellow-500 px-4 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#projects" 
                className="text-construction-700 hover:text-yellow-500 px-4 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-construction-700 hover:text-yellow-500 px-4 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="bg-yellow-500 hover:bg-yellow-600 text-construction-800 font-medium mx-4"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

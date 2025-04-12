
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-construction-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">
              EDIFICE<span className="text-yellow-500">WEB</span>WORKS
            </h3>
            <p className="text-construction-300 mb-6">
              Building excellence through innovation, quality craftsmanship, and dedicated service since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-construction-300 hover:text-yellow-500 transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-construction-300 hover:text-yellow-500 transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-construction-300 hover:text-yellow-500 transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-construction-300 hover:text-yellow-500 transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-construction-300 hover:text-yellow-500 transition-colors">
                  Commercial Construction
                </a>
              </li>
              <li>
                <a href="#services" className="text-construction-300 hover:text-yellow-500 transition-colors">
                  Residential Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-construction-300 hover:text-yellow-500 transition-colors">
                  Renovation & Remodeling
                </a>
              </li>
              <li>
                <a href="#services" className="text-construction-300 hover:text-yellow-500 transition-colors">
                  Infrastructure Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-construction-300 hover:text-yellow-500 transition-colors">
                  Design-Build Services
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-construction-300 hover:text-yellow-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-construction-300 hover:text-yellow-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-construction-300 hover:text-yellow-500 transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-construction-300 hover:text-yellow-500 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-construction-300 hover:text-yellow-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-construction-300">
                <span className="block font-medium text-white">Address:</span>
                1234 Construction Ave.
                <br />
                Building District, NY 10001
              </li>
              <li className="text-construction-300">
                <span className="block font-medium text-white">Phone:</span>
                +1 (555) 123-4567
              </li>
              <li className="text-construction-300">
                <span className="block font-medium text-white">Email:</span>
                info@edificewebworks.com
              </li>
              <li className="text-construction-300">
                <span className="block font-medium text-white">Hours:</span>
                Mon-Fri: 8AM - 6PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-construction-700 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-construction-400 mb-4 md:mb-0">
              &copy; {currentYear} Edifice Web Works. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-construction-400 hover:text-yellow-500 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-construction-400 hover:text-yellow-500 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-construction-400 hover:text-yellow-500 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

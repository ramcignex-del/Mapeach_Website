import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/logo.jpg';

export const Footer = () => {
  const location = useLocation();
  const handleLinkClick = (path) => {
        // Check if the current path matches the link's destination path
        if (location.pathname === path) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
  }
    
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
         {/* <div className="space-y-4">
           <div className="flex items-center">
              <img 
                src={logo}
                alt="Mapeach Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>

            <p className="text-sm text-slate-400">
              Smarter staffing. Faster talent. Zero agency fees.
            </p>
          </div>
           */}
          {/* Quick Links */}

          
         <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-emerald-400 transition-colors duration-200"  onClick={() => handleLinkClick('/about')}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/hire" className="text-sm hover:text-emerald-400 transition-colors duration-200"  onClick={() => handleLinkClick('/hire')}>
                  For Companies
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-sm hover:text-emerald-400 transition-colors duration-200" onClick={() => handleLinkClick('/join')}>
                  For Talents
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-sm hover:text-emerald-400 transition-colors duration-200"  onClick={() => handleLinkClick('/jobs')}>
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/MapeachFAQ" className="text-sm hover:text-emerald-400 transition-colors duration-200"  onClick={() => handleLinkClick('/MapeachFAQ')}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-emerald-400 transition-colors duration-200" onClick={() => handleLinkClick('/contact')}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/PrivacyPolicy" className="text-sm hover:text-emerald-400 transition-colors duration-200"  onClick={() => handleLinkClick('/PrivacyPolicy')}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          

          {/* Resources */}
          {/*<div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-emerald-400 transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          */}

          {/* Contact */}
         {/* <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="mailto:info@mapeach.com"
                className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm mt-4 text-slate-400">
              info@mapeach.com
            </p>
          </div>
*/}

        </div>
              

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Mapeach. All rights reserved.  | info@mapeach.com  | 
          </p>
        </div>
      </div>
    </footer>
  );
};

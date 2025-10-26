import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/logo.jpg';

export const Footer = () => {
  const location = useLocation();

  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* 1️⃣ Brand & Contact Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Mapeach Logo" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Smarter staffing. Faster talent. Zero agency fees.
            </p>

            <div className="flex space-x-3 mt-3">
              <a
                href="mailto:info@mapeach.com"
                className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* 2️⃣ Company Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  onClick={() => handleLinkClick('/about')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  onClick={() => handleLinkClick('/pricing')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  onClick={() => handleLinkClick('/jobs')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  to="/MapeachFAQ"
                  onClick={() => handleLinkClick('/MapeachFAQ')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* 3️⃣ For Companies */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wide uppercase mb-4">
              For Companies
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/companies/informationtechnology"
                  onClick={() => handleLinkClick('/companies/informationtechnology')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Information Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/companies/electronics"
                  onClick={() => handleLinkClick('/companies/electronics')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Electronics & Communications
                </Link>
              </li>
              <li>
                <Link
                  to="/companies/healthtech"
                  onClick={() => handleLinkClick('/companies/healthtech')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  HealthTech
                </Link>
              </li>
              <li>
                <Link
                  to="/companies/lifesciences"
                  onClick={() => handleLinkClick('/companies/lifesciences')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Lifesciences
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Mapeach. All rights reserved. |{" "}
            <a
              href="mailto:info@mapeach.com"
              className="text-emerald-400 hover:text-emerald-300"
            >
              info@mapeach.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

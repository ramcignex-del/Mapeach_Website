import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../assets/logo.jpg';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { path: '/', label: 'Home', type: 'link' },
    {
      label: 'Services',
      type: 'menu',
      subLinks: [
        { path: '/hire', label: 'For Companies' },
        { path: '/join', label: 'For Talents' },
      ],
    },
    { path: '/pricing', label: 'Pricing', type: 'link' },
    { path: '/jobs', label: 'Jobs', type: 'link' },
    {
      label: 'About',
      type: 'menu',
      subLinks: [
        { path: '/about', label: 'About Mapeach' },
        { path: '/MapeachFAQ', label: 'FAQ' },
      ],
    },
    { path: '/enquiry', label: 'Contact Us', type: 'link' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => handleLinkClick('/')}>
            <img src={logo} alt="Mapeach Logo" className="h-6 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) =>
              link.type === 'link' ? (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-200
                    ${isActive(link.path)
                      ? 'bg-[#00B7E8] text-white rounded-md shadow-sm'
                      : 'text-slate-700 hover:text-[#00B7E8]'
                    }`}
                >
                  {link.label}
                </Link>
              ) : (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div
                    className={`flex items-center px-3 py-2 text-sm font-semibold uppercase tracking-wide cursor-pointer transition-colors duration-200
                      ${openDropdown === link.label
                        ? 'bg-[#00B7E8] text-white rounded-md shadow-sm'
                        : 'text-slate-700 hover:text-[#00B7E8]'
                      }`}
                  >
                    {link.label}
                    {openDropdown === link.label ? (
                      <ChevronUp size={14} className="ml-1" />
                    ) : (
                      <ChevronDown size={14} className="ml-1" />
                    )}
                  </div>

                  {openDropdown === link.label && (
                    <div className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            onClick={() => {
                              handleLinkClick(subLink.path);
                              setOpenDropdown(null);
                            }}
                            className={`block px-4 py-2 text-sm uppercase transition-colors duration-200 ${
                              isActive(subLink.path)
                                ? 'bg-[#00B7E8]/10 text-[#00B7E8]'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-[#00B7E8]'
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) =>
              link.type === 'link' ? (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    handleLinkClick(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`block px-4 py-2 rounded-md text-sm font-semibold uppercase transition-colors duration-200
                    ${isActive(link.path)
                      ? 'bg-[#00B7E8]/10 text-[#00B7E8]'
                      : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  {link.label}
                </Link>
              ) : (
                <div key={link.label}>
                  <div
                    className="flex justify-between items-center px-4 py-2 cursor-pointer text-sm font-semibold uppercase"
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                  >
                    <span className="text-slate-700">{link.label}</span>
                    {openDropdown === link.label ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  {openDropdown === link.label && (
                    <div className="ml-4 border-l border-slate-200 pl-3">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.path}
                          to={subLink.path}
                          onClick={() => {
                            handleLinkClick(subLink.path);
                            setMobileMenuOpen(false);
                          }}
                          className="block py-2 text-xs uppercase text-slate-700 hover:text-[#00B7E8]"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

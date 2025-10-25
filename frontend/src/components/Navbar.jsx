import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/logo.jpg';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keep dropdown open when hovering over it or its trigger
  const openDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsDropdownOpen(true);
  };

  const closeDropdownWithDelay = (delay = 200) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
      closeTimeoutRef.current = null;
    }, delay);
  };

  const companyDropdownLinks = [
    { path: '/companies/informationtechnology', label: 'Information Technology' },
    { path: '/companies/healthtech', label: 'HealthTech' },
    { path: '/companies/healthcare', label: 'Healthcare' },
    { path: '/companies/lifesciences', label: 'Lifesciences' },
    { path: '/companies/electronics', label: 'Electronics & Communications' },
  ];

  const navLinks = [
    { path: '/', label: 'Home', type: 'link' },
    { path: '/hire', label: 'For Companies', type: 'menu', subLinks: companyDropdownLinks },
    { path: '/join', label: 'For Talents', type: 'link' },
    { path: '/about', label: 'About', type: 'link' },
    { path: '/contact', label: 'Contact', type: 'link' },
    { path: '/jobs', label: 'Jobs', type: 'link' },
    { path: '/MapeachFAQ', label: 'FAQ', type: 'link' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => handleLinkClick('/')}>
            <img src={logo} alt="Mapeach Logo" className="h-4 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.type === 'link') {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-emerald-600'
                        : 'text-slate-600 hover:text-emerald-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              // MENU (For Companies)
              if (link.type === 'menu') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={openDropdown}
                    onMouseLeave={() => closeDropdownWithDelay(150)}
                  >
                    <div className="flex items-center space-x-1">
                      {/* Clicking this navigates to /hire */}
                      <Link
                        to={link.path}
                        onClick={() => handleLinkClick(link.path)}
                        className={`text-sm font-medium transition-colors duration-200 ${
                          isActive(link.path)
                            ? 'text-emerald-600'
                            : 'text-slate-600 hover:text-emerald-600'
                        }`}
                      >
                        {link.label}
                      </Link>

                      {/* Clicking arrow toggles dropdown */}
                      <button
                        className="text-slate-600 hover:text-emerald-600 transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsDropdownOpen((prev) => !prev);
                        }}
                      >
                        {isDropdownOpen ? (
                          <ChevronUp size={16} className="transition-transform duration-200" />
                        ) : (
                          <ChevronDown size={16} className="transition-transform duration-200" />
                        )}
                      </button>
                    </div>

                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 mt-3 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 pointer-events-auto"
                        onMouseEnter={openDropdown}
                        onMouseLeave={() => closeDropdownWithDelay(150)}
                      >
                        <div className="py-1">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.path}
                              to={subLink.path}
                              onClick={() => {
                                handleLinkClick(subLink.path);
                                setIsDropdownOpen(false);
                              }}
                              className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                isActive(subLink.path)
                                  ? 'bg-emerald-50 text-emerald-600'
                                  : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-600'
                              }`}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* Mobile Menu Toggle */}
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
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => {
              if (link.type === 'link') {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => {
                      handleLinkClick(link.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              // Mobile dropdown
              if (link.type === 'menu') {
                return (
                  <div key={link.path}>
                    <div className="flex justify-between items-center">
                      <Link
                        to={link.path}
                        onClick={() => {
                          handleLinkClick(link.path);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          isActive(link.path)
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        className="px-2 text-slate-600 hover:text-emerald-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDropdownOpen(!isDropdownOpen);
                        }}
                      >
                        {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>

                    {isDropdownOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-slate-200 pl-4">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            onClick={() => {
                              handleLinkClick(subLink.path);
                              setIsDropdownOpen(false);
                              setMobileMenuOpen(false);
                            }}
                            className={`block px-4 py-2 rounded-lg text-sm transition-colors duration-200 ${
                              isActive(subLink.path)
                                ? 'bg-emerald-100 text-emerald-600'
                                : 'text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return null;
            })}
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

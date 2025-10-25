import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/logo.jpg';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State to manage the open/close state of the "For Companies" dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const location = useLocation();
  
  // Checks if the current path matches the given path
  const isActive = (path) => location.pathname === path;
  
  // Checks if the current path is *any* of the sub-menu paths
  const isParentActive = (subLinks) => subLinks.some(sub => isActive(sub.path));

  const handleLinkClick = (path) => {
    // Check if the current path matches the link's destination path
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Define the new sector-specific sub-menu links
  const companyDropdownLinks = [
    { path: '/companies/it', label: 'Information Technology' },
    { path: '/companies/healthtech', label: 'HealthTech' },
    { path: '/companies/healthcare', label: 'Healthcare' },
    { path: '/companies/lifesciences', label: 'Lifesciences' },
    { path: '/companies/electronics', label: 'Electronics & Communications' },
  ];

  const navLinks = [
    { path: '/', label: 'Home', type: 'link' },
    // Type 'menu' means it's a dropdown header, not a direct link
    { path: '#', label: 'For Companies', type: 'menu', subLinks: companyDropdownLinks }, 
    { path: '/join', label: 'For Talents', type: 'link' },
    { path: '/about', label: 'About', type: 'link' },
    { path: '/contact', label: 'Contact', type: 'link' },
    { path: '/jobs', label: 'Jobs', type: 'link' },
    { path: '/MapeachFAQ', label: 'FAQ', type: 'link' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => handleLinkClick('/')}>
            <img 
              src={logo}
              alt="Mapeach Logo" 
              className="h-4 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              // Regular Link Logic
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
              // Dropdown Menu Logic
              } else if (link.type === 'menu') {
                return (
                  <div 
                    key={link.path} 
                    className="relative"
                    // Open dropdown on hover for desktop
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    // Close dropdown on mouse leave for desktop
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {/* The "For Companies" button that toggles the dropdown */}
                    <button
                      className={`flex items-center text-sm font-medium transition-colors duration-200 cursor-pointer ${
                        isParentActive(link.subLinks)
                          ? 'text-emerald-600'
                          : 'text-slate-600 hover:text-emerald-600'
                      }`}
                      // Use onClick to maintain state on mobile or touch devices (desktop fallback)
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {link.label}
                      <ChevronDown size={16} className="ml-1 transition-transform duration-200" />
                    </button>

                    {/* Dropdown Menu (Desktop View) */}
                    {isDropdownOpen && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.path}
                              to={subLink.path}
                              onClick={() => {
                                handleLinkClick(subLink.path);
                                setIsDropdownOpen(false); // Close dropdown on link click
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
              } else if (link.type === 'menu') {
                return (
                  <div key={link.path}>
                    {/* Dropdown Toggle for Mobile */}
                    <button
                      className={`flex justify-between items-center w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        isParentActive(link.subLinks) || isDropdownOpen
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {link.label}
                      {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    
                    {/* Mobile Dropdown Links */}
                    {isDropdownOpen && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-slate-200 pl-4">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            onClick={() => {
                              handleLinkClick(subLink.path);
                              setMobileMenuOpen(false); // Close mobile menu
                              setIsDropdownOpen(false); // Close dropdown
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

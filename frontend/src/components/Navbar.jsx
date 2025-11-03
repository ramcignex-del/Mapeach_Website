import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assets/logo.jpg";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openDropdown = (menu) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsDropdownOpen(menu);
  };

  const closeDropdownWithDelay = (delay = 200) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(null);
      closeTimeoutRef.current = null;
    }, delay);
  };

  const servicesSubLinks = [
    { path: "/hire", label: "For Companies" },
    { path: "/join", label: "For Talents" },
  ];

  const aboutSubLinks = [
    { path: "/about", label: "About Mapeach" },
    { path: "/MapeachFAQ", label: "FAQ" },
  ];

  const navLinks = [
    { path: "/", label: "Home", type: "link" },
    { path: "/services", label: "Services", type: "menu", subLinks: servicesSubLinks },
    { path: "/pricing", label: "Pricing", type: "link" },
    { path: "/jobs", label: "Jobs", type: "link" },
    { path: "/aboutus", label: "About", type: "menu", subLinks: aboutSubLinks },
    { path: "/contact", label: "Contact Us", type: "link" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => handleLinkClick("/")}>
            <img src={logo} alt="Mapeach Logo" className="h-8 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {navLinks.map((link) => {
              if (link.type === "link") {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`px-3 py-1.5 rounded-md text-[13px] font-semibold tracking-wide uppercase transition-all duration-200 ${
                      isActive(link.path)
                        ? "bg-[#00CFFF] text-white"
                        : "text-slate-800 hover:text-[#00CFFF]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              if (link.type === "menu") {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => openDropdown(link.path)}
                    onMouseLeave={() => closeDropdownWithDelay(150)}
                  >
                    <div
                      className={`flex items-center px-3 py-1.5 rounded-md text-[13px] font-semibold tracking-wide uppercase cursor-pointer transition-all duration-200 ${
                        isActive(link.path) || isDropdownOpen === link.path
                          ? "bg-[#00CFFF] text-white"
                          : "text-slate-800 hover:text-[#00CFFF]"
                      }`}
                    >
                      {link.label}
                      {isDropdownOpen === link.path ? (
                        <ChevronUp size={14} className="ml-1" />
                      ) : (
                        <ChevronDown size={14} className="ml-1" />
                      )}
                    </div>

                    {isDropdownOpen === link.path && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        onMouseEnter={() => openDropdown(link.path)}
                        onMouseLeave={() => closeDropdownWithDelay(150)}
                      >
                        <div className="py-1">
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.path}
                              to={subLink.path}
                              onClick={() => {
                                handleLinkClick(subLink.path);
                                setIsDropdownOpen(null);
                              }}
                              className={`block px-4 py-2 text-[12px] font-medium uppercase transition-colors duration-150 ${
                                isActive(subLink.path)
                                  ? "bg-[#00CFFF] text-white"
                                  : "text-slate-700 hover:bg-[#E6F9FF] hover:text-[#00CFFF]"
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
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => {
              if (link.type === "link") {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => {
                      handleLinkClick(link.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-2 rounded-md text-sm font-semibold uppercase transition-all duration-200 ${
                      isActive(link.path)
                        ? "bg-[#00CFFF] text-white"
                        : "text-slate-700 hover:bg-[#E6F9FF] hover:text-[#00CFFF]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              if (link.type === "menu") {
                return (
                  <div key={link.path}>
                    <button
                      className={`w-full flex justify-between items-center px-4 py-2 rounded-md text-sm font-semibold uppercase transition-colors duration-200 ${
                        isDropdownOpen === link.path
                          ? "bg-[#00CFFF] text-white"
                          : "text-slate-700 hover:text-[#00CFFF]"
                      }`}
                      onClick={() =>
                        setIsDropdownOpen(isDropdownOpen === link.path ? null : link.path)
                      }
                    >
                      {link.label}
                      {isDropdownOpen === link.path ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>

                    {isDropdownOpen === link.path && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-slate-200 pl-4">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            onClick={() => {
                              handleLinkClick(subLink.path);
                              setIsDropdownOpen(null);
                              setMobileMenuOpen(false);
                            }}
                            className={`block px-3 py-2 rounded-md text-xs uppercase transition-colors duration-150 ${
                              isActive(subLink.path)
                                ? "bg-[#00CFFF] text-white"
                                : "text-slate-700 hover:bg-[#E6F9FF] hover:text-[#00CFFF]"
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
          </div>
        </div>
      )}
    </nav>
  );
};

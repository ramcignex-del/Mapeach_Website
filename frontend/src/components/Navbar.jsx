import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpg";
import "../Theme.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "For Companies", path: "/services/companies" },
        { name: "For Contractors", path: "/services/contractors" },
      ],
    },
    { name: "Pricing", path: "/pricing" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Our Story", path: "/about/our-story" },
        { name: "FAQ", path: "/about/faq" },
      ],
    },
    { name: "Jobs", path: "/jobs" },
    { name: "Contact", path: "/enquiry" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img
              src={logo}
              alt="Mapeach Logo"
              className="h-14 w-auto object-contain select-none"
              style={{ border: "none", boxShadow: "none" }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <div className="flex items-center">
                  <Link
                    to={item.path}
                    className={`px-5 py-2.5 rounded-md text-sm font-semibold flex items-center transition-all duration-200 ${
                      isActive(item.path)
                        ? "bg-[var(--color-primary)] text-white"
                        : "text-slate-700 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="ml-1 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </Link>
                </div>

                {/* Dropdown Menu */}
                {item.dropdown && hoveredMenu === item.name && (
                  <div className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-lg border border-slate-100 py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={closeMenu}
                        className={`block px-5 py-2 text-sm font-medium transition-colors duration-150 ${
                          isActive(subItem.path)
                            ? "bg-[var(--color-primary)] text-white"
                            : "text-slate-700 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-[var(--color-primary-dark)] transition-colors duration-200"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-slate-100">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-slate-100">
              <Link
                to={item.path}
                onClick={closeMenu}
                className={`block px-6 py-3 text-base font-medium ${
                  isActive(item.path)
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-slate-700 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]"
                }`}
              >
                {item.name}
              </Link>

              {item.dropdown && (
                <div className="bg-slate-50">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      onClick={closeMenu}
                      className={`block px-8 py-2.5 text-sm font-medium ${
                        isActive(subItem.path)
                          ? "bg-[var(--color-primary)] text-white"
                          : "text-slate-700 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]"
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

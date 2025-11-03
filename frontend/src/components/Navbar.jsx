import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpg";
import "../Theme.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        {
          name: "For Companies",
          path: "/services/companies",
          submenu: [
            { name: "Information Technology", path: "/companies/informationtechnology" },
            { name: "HealthTech", path: "/companies/healthtech" },
            { name: "LifeSciences", path: "/companies/lifesciences" },
            { name: "Electronics & Communication", path: "/companies/electronics" },
          ],
        },
        { name: "For Talents", path: "/join" },
      ],
    },
    { name: "Pricing", path: "/pricing" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Our Story", path: "/about" },
        { name: "FAQ", path: "/MapeachFAQ" },
      ],
    },
    { name: "Jobs", path: "/jobs" },
    { name: "Contact", path: "/enquiry" },
  ];

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
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => {
                  setHoveredMenu(null);
                  setHoveredSubmenu(null);
                }}
              >
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className={`block w-32 text-center py-2.5 text-sm font-semibold rounded-md transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-slate-700 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]"
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="inline-block ml-1 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </Link>

                {/* First-Level Dropdown */}
                {item.dropdown && hoveredMenu === item.name && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-100 py-2">
                    {item.dropdown.map((subItem) => (
                      <div
                        key={subItem.name}
                        className="relative group"
                        onMouseEnter={() => setHoveredSubmenu(subItem.name)}
                        onMouseLeave={() => setHoveredSubmenu(null)}
                      >
                        <Link
                          to={subItem.path}
                          onClick={closeMenu}
                          className={`flex justify-between items-center px-5 py-2 text-sm font-medium transition-colors duration-150 ${
                            isActive(subItem.path)
                              ? "bg-[var(--color-primary)] text-white"
                              : "text-slate-700 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]"
                          }`}
                        >
                          {subItem.name}
                          {subItem.submenu && <ChevronRight className="w-4 h-4 opacity-60" />}
                        </Link>

                        {/* Nested Dropdown */}
                        {subItem.submenu && hoveredSubmenu === subItem.name && (
                          <div className="absolute left-full top-0 ml-1 w-60 bg-white rounded-lg shadow-lg border border-slate-100 py-2">
                            {subItem.submenu.map((deepItem) => (
                              <Link
                                key={deepItem.name}
                                to={deepItem.path}
                                onClick={closeMenu}
                                className={`block px-5 py-2 text-sm font-medium transition-colors duration-150 ${
                                  isActive(deepItem.path)
                                    ? "bg-[var(--color-primary)] text-white"
                                    : "text-slate-700 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]"
                                }`}
                              >
                                {deepItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
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
    </nav>
  );
};

export default Navbar;

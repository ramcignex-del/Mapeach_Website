import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpg";
import "../Theme.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <nav className="fixed w-full bg-white/95 backdrop-blur-lg shadow-sm z-50 overflow-visible">
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
          <div className="hidden md:flex items-center h-full">
            {navItems.map((item) => (
              <div key={item.name} className="relative group h-full">
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center justify-center h-full px-5 text-sm font-bold uppercase tracking-wide border-b-2 transition-all duration-200 ${
                    isActive(item.path)
                      ? "text-[var(--color-primary-dark)] border-[var(--color-primary-dark)] bg-[var(--color-primary-light)]"
                      : "text-slate-700 border-transparent hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]"
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="ml-1 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </Link>

                {/* First-Level Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-0 top-full mt-0 hidden group-hover:block w-56 bg-white rounded-lg shadow-lg border border-slate-100 py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <div key={subItem.name} className="relative group/sub">
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
                        {subItem.submenu && (
                          <div className="absolute left-full top-0 hidden group-hover/sub:block ml-1 w-60 bg-white rounded-lg shadow-lg border border-slate-100 py-2 z-50">
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-md">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-slate-100">
              <Link
                to={item.path}
                onClick={closeMenu}
                className={`block px-6 py-3 text-sm font-semibold uppercase ${
                  isActive(item.path)
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-slate-700 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]"
                }`}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="pl-8 pb-2 bg-slate-50">
                  {item.dropdown.map((subItem) => (
                    <div key={subItem.name}>
                      <Link
                        to={subItem.path}
                        onClick={closeMenu}
                        className="block px-2 py-2 text-sm text-slate-600 hover:text-[var(--color-primary-dark)]"
                      >
                        {subItem.name}
                      </Link>
                      {subItem.submenu && (
                        <div className="pl-6">
                          {subItem.submenu.map((deepItem) => (
                            <Link
                              key={deepItem.name}
                              to={deepItem.path}
                              onClick={closeMenu}
                              className="block px-2 py-1 text-sm text-slate-500 hover:text-[var(--color-primary-dark)]"
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
      )}
    </nav>
  );
};

export default Navbar;

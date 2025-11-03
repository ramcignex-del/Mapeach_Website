import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../theme.css"; // ensure this path is correct

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
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img
              src="/logo192.png"
              alt="Mapeach Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-emerald-700">Mapeach</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  to={item.path}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-emerald-600 text-white"
                      : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && hoveredMenu === item.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-emerald-100 overflow-hidden">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={closeMenu}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                          isActive(subItem.path)
                            ? "bg-emerald-600 text-white"
                            : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
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

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-emerald-700 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-emerald-100">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-slate-100">
              <Link
                to={item.path}
                onClick={closeMenu}
                className={`block px-6 py-3 text-base font-medium ${
                  isActive(item.path)
                    ? "bg-emerald-600 text-white"
                    : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
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
                          ? "bg-emerald-600 text-white"
                          : "text-slate-700 hover:bg-emerald-100 hover:text-emerald-700"
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

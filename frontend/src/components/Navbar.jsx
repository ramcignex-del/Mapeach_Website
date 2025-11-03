import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* --- LOGO --- */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img
              src="/logo192.png"
              alt="Mapeach Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-[var(--color-primary-dark)]">
              Mapeach
            </span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  to={item.path}
                  className={`nav-item px-5 py-2.5 rounded-lg text-[15px] font-semibold transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white"
                      : "text-slate-700 hover:bg-[var(--color-highlight)] hover:text-[var(--color-primary-dark)]"
                  }`}
                >
                  {item.name}
                </Link>

                {/* --- DROPDOWN --- */}
                {item.dropdown && hoveredMenu === item.name && (
                  <div
                    className="absolute left-0 mt-3 w-52 bg-white border border-[var(--color-primary-light)] rounded-xl shadow-lg 
                               opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 
                               transition-all duration-300 ease-out overflow-hidden"
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        onClick={closeMenu}
                        className={`block px-4 py-2.5 text-[15px] font-medium transition-colors duration-200 ${
                          isActive(subItem.path)
                            ? "bg-[var(--color-primary-dark)] text-white"
                            : "text-slate-700 hover:bg-[var(--color-highlight)] hover:text-[var(--color-primary-dark)]"
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

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-[var(--color-primary-dark)] transition-colors duration-300"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-[var(--color-primary-light)]">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-slate-100">
              <Link
                to={item.path}
                onClick={closeMenu}
                className={`block px-6 py-3 text-base font-semibold ${
                  isActive(item.path)
                    ? "bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white"
                    : "text-slate-700 hover:bg-[var(--color-highlight)] hover:text-[var(--color-primary-dark)]"
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
                          ? "bg-[var(--color-primary-dark)] text-white"
                          : "text-slate-700 hover:bg-[var(--color-highlight)] hover:text-[var(--color-primary-dark)]"
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

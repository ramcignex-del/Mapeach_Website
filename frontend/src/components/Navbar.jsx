import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpg";
import "../Theme.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuTimers = useRef({});
  const submenuTimers = useRef({});

  // 🔹 Scroll detection for sticky visual change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (path) => location.pathname === path;

  const handleMenuEnter = (name) => {
    clearTimeout(menuTimers.current[name]);
    setHoveredMenu(name);
  };
  const handleMenuLeave = (name) => {
    menuTimers.current[name] = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  };
  const handleSubmenuEnter = (name) => {
    clearTimeout(submenuTimers.current[name]);
    setHoveredSubmenu(name);
  };
  const handleSubmenuLeave = (name) => {
    submenuTimers.current[name] = setTimeout(() => {
      setHoveredSubmenu(null);
    }, 200);
  };

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
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
      dropdown: [
        { name: "Our Story", path: "/about" },
        { name: "FAQ", path: "/MapeachFAQ" },
      ],
    },
    { name: "Jobs", path: "/jobs" },
    { name: "Contact", path: "/enquiry" },
  ];

  const toggleMobileSubmenu = (name) => {
    setExpandedMobileMenu(expandedMobileMenu === name ? null : name);
  };

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-50 overflow-visible ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/70 backdrop-blur-sm shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img
              src={logo}
              alt="Mapeach Logo"
              className="h-14 w-auto object-contain select-none"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center h-full">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group h-full"
                onMouseEnter={() => handleMenuEnter(item.name)}
                onMouseLeave={() => handleMenuLeave(item.name)}
              >
                {item.dropdown ? (
                  <span className="flex items-center justify-center h-full px-5 text-sm font-bold uppercase tracking-wide border-b-2 cursor-default text-slate-700 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]">
                    {item.name}
                    <ChevronDown className="ml-1 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                  </span>
                ) : (
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
                  </Link>
                )}

                {/* First-Level Dropdown */}
                {item.dropdown && hoveredMenu === item.name && (
                  <div
                    className="absolute left-0 top-full mt-0 w-56 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50
                               opacity-0 translate-y-2 animate-[fadeIn_0.2s_ease-out_forwards]"
                  >
                    {item.dropdown.map((subItem) => (
                      <div
                        key={subItem.name}
                        className="relative group/sub"
                        onMouseEnter={() => handleSubmenuEnter(subItem.name)}
                        onMouseLeave={() => handleSubmenuLeave(subItem.name)}
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
                          <div
                            className="absolute left-full top-0 ml-1 w-60 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-50
                                       opacity-0 translate-x-2 animate-[fadeInRight_0.2s_ease-out_forwards]"
                          >
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
        <div className="md:hidden bg-white border-t border-slate-200 shadow-md animate-slideDown">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-slate-100">
              {item.dropdown ? (
                <button
                  onClick={() => toggleMobileSubmenu(item.name)}
                  className="w-full flex justify-between items-center px-6 py-3 text-sm font-bold uppercase text-slate-700 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  {item.name}
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      expandedMobileMenu === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-6 py-3 text-sm font-semibold uppercase transition-colors ${
                    isActive(item.path)
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-slate-700 hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary-dark)]"
                  }`}
                >
                  {item.name}
                </Link>
              )}

              {item.dropdown && expandedMobileMenu === item.name && (
                <div className="pl-8 pb-2 bg-slate-50 animate-slideFade">
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

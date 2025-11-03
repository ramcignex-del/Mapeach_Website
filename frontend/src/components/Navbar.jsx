import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import logo from "../assets/logo.jpg";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Helper: check if any sublink under a menu is active
  const isParentActive = (subLinks) => {
    return subLinks?.some((sublink) => {
      if (sublink.path && isActive(sublink.path)) return true;
      if (sublink.subLinks) return isParentActive(sublink.subLinks);
      return false;
    });
  };

  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const companyDropdownLinks = [
    { path: "/companies/informationtechnology", label: "Information Technology" },
    { path: "/companies/electronics", label: "Electronics & Communications" },
    { path: "/companies/healthtech", label: "HealthTech" },
    { path: "/companies/lifesciences", label: "Lifesciences" },
  ];

  const navLinks = [
    { path: "/", label: "Home", type: "link" },
    {
      label: "Services",
      type: "menu",
      subLinks: [
        { label: "For Companies", type: "submenu", subLinks: companyDropdownLinks },
        { path: "/join", label: "For Talents" },
      ],
    },
    { path: "/pricing", label: "Pricing", type: "link" },
    { path: "/jobs", label: "Jobs", type: "link" },
    {
      label: "About",
      type: "menu",
      subLinks: [
        { path: "/about", label: "About Mapeach" },
        { path: "/MapeachFAQ", label: "FAQ" },
      ],
    },
    { path: "/enquiry", label: "Contact Us", type: "link" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => handleLinkClick("/")}>
            <img
              src={logo}
              alt="Mapeach Logo"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => {
              if (link.type === "link") {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`relative px-5 py-[28px] text-sm font-bold uppercase tracking-wide transition-all duration-200 rounded-none ${
                      isActive(link.path)
                        ? "bg-[#00CFFF]/15 text-[#00CFFF]"
                        : "text-slate-800 hover:bg-[#00CFFF]/15 hover:text-[#00CFFF]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              if (link.type === "menu") {
                const activeParent = isParentActive(link.subLinks);
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => {
                      setOpenDropdown(null);
                      setOpenSubDropdown(null);
                    }}
                  >
                    <div
                      className={`flex items-center px-5 py-[28px] text-sm font-bold uppercase tracking-wide cursor-pointer transition-colors duration-200 ${
                        openDropdown === link.label || activeParent
                          ? "bg-[#00CFFF]/15 text-[#00CFFF]"
                          : "text-slate-800 hover:bg-[#00CFFF]/15 hover:text-[#00CFFF]"
                      }`}
                    >
                      {link.label}
                      {openDropdown === link.label ? (
                        <ChevronUp size={14} className="ml-1" />
                      ) : (
                        <ChevronDown size={14} className="ml-1" />
                      )}
                    </div>

                    {/* Dropdown */}
                    {openDropdown === link.label && (
                      <div className="absolute left-0 mt-0 bg-white w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        {link.subLinks.map((subLink) =>
                          subLink.type === "submenu" ? (
                            <div
                              key={subLink.label}
                              className="relative group/submenu"
                              onMouseEnter={() => setOpenSubDropdown(subLink.label)}
                              onMouseLeave={() => setOpenSubDropdown(null)}
                            >
                              <div className="flex justify-between items-center px-4 py-2 text-sm font-semibold uppercase text-slate-800 hover:text-[#00CFFF] hover:bg-slate-50 cursor-pointer">
                                {subLink.label}
                                <ChevronRight size={14} />
                              </div>
                              {openSubDropdown === subLink.label && (
                                <div className="absolute left-full top-0 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                  {subLink.subLinks.map((sublink) => (
                                    <Link
                                      key={sublink.path}
                                      to={sublink.path}
                                      onClick={() => {
                                        handleLinkClick(sublink.path);
                                        setOpenDropdown(null);
                                        setOpenSubDropdown(null);
                                      }}
                                      className={`block px-4 py-2 text-xs uppercase transition-colors duration-200 ${
                                        isActive(sublink.path)
                                          ? "bg-[#00CFFF]/15 text-[#00CFFF]"
                                          : "text-slate-700 hover:bg-slate-50 hover:text-[#00CFFF]"
                                      }`}
                                    >
                                      {sublink.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              key={subLink.path}
                              to={subLink.path}
                              onClick={() => {
                                handleLinkClick(subLink.path);
                                setOpenDropdown(null);
                              }}
                              className={`block px-4 py-2 text-sm uppercase transition-colors duration-200 ${
                                isActive(subLink.path)
                                  ? "bg-[#00CFFF]/15 text-[#00CFFF]"
                                  : "text-slate-700 hover:bg-slate-50 hover:text-[#00CFFF]"
                              }`}
                            >
                              {subLink.label}
                            </Link>
                          )
                        )}
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
    </nav>
  );
};

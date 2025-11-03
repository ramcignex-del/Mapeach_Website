import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import logo from "../assets/logo.jpg";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    {
      path: "/services",
      label: "Services",
      subLinks: [
        {
          path: "/hire",
          label: "For Companies",
          subLinks: [
            { path: "/companies/informationtechnology", label: "Information Technology" },
            { path: "/companies/electronics", label: "Electronics & Communications" },
            { path: "/companies/healthtech", label: "HealthTech" },
            { path: "/companies/lifesciences", label: "Lifesciences" },
          ],
        },
        { path: "/join", label: "For Talents" },
      ],
    },
    { path: "/pricing", label: "Pricing" },
    { path: "/jobs", label: "Jobs" },
    {
      path: "/about",
      label: "About",
      subLinks: [
        { path: "/about", label: "About Mapeach" },
        { path: "/MapeachFAQ", label: "FAQ" },
      ],
    },
    { path: "/enquiry", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" onClick={() => handleLinkClick("/")} className="flex items-center">
            <img
              src={logo}
              alt="Mapeach Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => {
              const active =
                isActive(link.path) ||
                (link.subLinks &&
                  link.subLinks.some(
                    (sublink) =>
                      isActive(sublink.path) ||
                      (sublink.subLinks &&
                        sublink.subLinks.some((deep) => isActive(deep.path)))
                  ));

              if (!link.subLinks) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`w-32 text-center flex justify-center items-center h-20 text-[13px] font-semibold tracking-wide uppercase transition-all duration-200 ${
                      active
                        ? "bg-[#00B8E0] text-white"
                        : "text-[#1A2E46] hover:bg-[#00B8E0] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`w-32 text-center flex justify-center items-center space-x-1 h-20 text-[13px] font-semibold tracking-wide uppercase transition-all duration-200 ${
                      active
                        ? "bg-[#00B8E0] text-white"
                        : "text-[#1A2E46] hover:bg-[#00B8E0] hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {openDropdown === link.path ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === link.path && (
                    <div className="absolute left-0 mt-0 w-60 bg-white/80 backdrop-blur-md shadow-lg rounded-b-md ring-1 ring-cyan-100 z-50 border border-cyan-50">
                      {link.subLinks.map((subLink) => (
                        <div key={subLink.path} className="relative group">
                          <Link
                            to={subLink.path}
                            onClick={() => handleLinkClick(subLink.path)}
                            className={`flex justify-between items-center px-4 py-2 text-[13px] uppercase transition-colors duration-150 ${
                              isActive(subLink.path)
                                ? "bg-[#00B8E0]/90 text-white"
                                : "text-[#1A2E46] hover:bg-[#00B8E0] hover:text-white"
                            }`}
                          >
                            <span>{subLink.label}</span>
                            {subLink.subLinks && <ChevronRight size={14} />}
                          </Link>

                          {/* Nested subLinks */}
                          {subLink.subLinks && (
                            <div className="absolute top-0 left-full hidden group-hover:block w-64 bg-white/80 backdrop-blur-md shadow-xl rounded-md ring-1 ring-cyan-100 border border-cyan-50">
                              {subLink.subLinks.map((deepLink) => (
                                <Link
                                  key={deepLink.path}
                                  to={deepLink.path}
                                  onClick={() => handleLinkClick(deepLink.path)}
                                  className={`block px-4 py-2 text-[13px] uppercase transition-colors duration-150 ${
                                    isActive(deepLink.path)
                                      ? "bg-[#00B8E0]/90 text-white"
                                      : "text-[#1A2E46] hover:bg-[#00B8E0] hover:text-white"
                                  }`}
                                >
                                  {deepLink.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#1A2E46] hover:text-[#00B8E0]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.path}>
                {!link.subLinks ? (
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`block text-center px-4 py-2 rounded-md text-sm font-semibold uppercase transition-colors duration-200 ${
                      isActive(link.path)
                        ? "bg-[#00B8E0] text-white"
                        : "text-[#1A2E46] hover:bg-[#00B8E0] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.path ? null : link.path
                        )
                      }
                      className={`w-full text-left px-4 py-2 rounded-md text-sm font-semibold uppercase flex justify-between items-center transition-colors duration-200 ${
                        link.subLinks.some((s) => isActive(s.path))
                          ? "bg-[#00B8E0] text-white"
                          : "text-[#1A2E46] hover:bg-[#00B8E0] hover:text-white"
                      }`}
                    >
                      {link.label}
                      {openDropdown === link.path ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    {openDropdown === link.path && (
                      <div className="pl-6 mt-1 space-y-1 border-l border-slate-200">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            onClick={() => handleLinkClick(subLink.path)}
                            className={`block px-3 py-2 text-sm font-medium uppercase transition-colors duration-200 ${
                              isActive(subLink.path)
                                ? "bg-[#00B8E0] text-white"
                                : "text-[#1A2E46] hover:bg-[#00B8E0] hover:text-white"
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

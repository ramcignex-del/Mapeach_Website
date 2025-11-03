import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assets/logo.jpg";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = (path) => {
    if (path === "/enquiry") {
      navigate("/enquiry");
      setMobileMenuOpen(false);
      setOpenDropdown(null);
      return;
    }
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-1">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Mapeach Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-0">
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
                    className={`min-w-[130px] text-center flex justify-center items-center h-16 text-[13px] font-semibold tracking-wide uppercase transition-all duration-200 ${
                      active
                        ? "bg-[#00A9D6] text-white"
                        : "text-slate-800 hover:text-white hover:bg-gradient-to-r hover:from-[#00A9D6] hover:via-[#00CFFF] hover:to-[#00E0FF]"
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
                    className={`min-w-[130px] text-center flex justify-center items-center space-x-1 h-16 text-[13px] font-semibold tracking-wide uppercase transition-all duration-200 ${
                      active
                        ? "bg-[#00A9D6] text-white"
                        : "text-slate-800 hover:text-white hover:bg-gradient-to-r hover:from-[#00A9D6] hover:via-[#00CFFF] hover:to-[#00E0FF]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {openDropdown === link.path ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>

                  {/* Dropdown */}
                  {openDropdown === link.path && (
                    <div className="absolute left-0 mt-0 w-60 bg-white shadow-lg rounded-b-md ring-1 ring-slate-200 z-50">
                      {link.subLinks.map((subLink) => (
                        <div key={subLink.path} className="relative group">
                          <Link
                            to={subLink.path}
                            onClick={() => handleLinkClick(subLink.path)}
                            className={`block px-4 py-2 text-[13px] uppercase transition-colors duration-150 ${
                              isActive(subLink.path)
                                ? "bg-[#00A9D6] text-white"
                                : "text-slate-800 hover:bg-[#00A9D6] hover:text-white"
                            }`}
                          >
                            {subLink.label}
                          </Link>

                          {/* Nested dropdowns */}
                          {subLink.subLinks && (
                            <div className="absolute top-0 left-full hidden group-hover:block w-64 bg-white shadow-lg rounded-md ring-1 ring-slate-200">
                              {subLink.subLinks.map((deepLink) => (
                                <Link
                                  key={deepLink.path}
                                  to={deepLink.path}
                                  onClick={() =>
                                    handleLinkClick(deepLink.path)
                                  }
                                  className={`block px-4 py-2 text-[13px] uppercase transition-colors duration-150 ${
                                    isActive(deepLink.path)
                                      ? "bg-[#00A9D6] text-white"
                                      : "text-slate-800 hover:bg-[#00A9D6] hover:text-white"
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
            className="md:hidden p-2 text-slate-700 hover:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.path}>
                {!link.subLinks ? (
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`block text-center px-4 py-2 rounded-md text-sm font-semibold uppercase transition-colors duration-200 ${
                      isActive(link.path)
                        ? "bg-[#00A9D6] text-white"
                        : "text-slate-800 hover:bg-[#00A9D6] hover:text-white"
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
                          ? "bg-[#00A9D6] text-white"
                          : "text-slate-800 hover:bg-[#00A9D6] hover:text-white"
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
                                ? "bg-[#00A9D6] text-white"
                                : "text-slate-800 hover:bg-[#00A9D6] hover:text-white"
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

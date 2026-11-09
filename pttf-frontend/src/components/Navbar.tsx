import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  name: string;
  route: string;
}

const serviceItems: ServiceItem[] = [
  { name: 'Textiles & Apparel', route: '/services/textile-testing' },
  { name: 'Leather & Footwear', route: '/services/leather-footwear' },
  { name: 'Petroleum', route: '/services/petroleum-testing' },
  { name: 'PPE', route: '/services/ppe-testing' },
  { name: 'Environmental', route: '/services/environmental-testing' },
  { name: 'Inspection & Verification', route: '/services/inspection-verification' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="bg-primary-container text-on-primary-fixed w-full"></div>
      <div className="bg-surface-container-lowest/95 backdrop-blur-xl border-b border-outline-variant/20">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-lg">
          {/* Logo & Branding */}
          <Link to="/" className="flex items-center gap-space-md focus:outline-none">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiFkSsBl2JUjCMPRUVoytV_WmyDcM0QT6muYx1E1UhivgkL7dQ380JZq0n94bST6cVj6BnXzDGYk1dOzPUgrp923h6HmD3efc-fWqyk23_HR-yvar601v6rQTvSGQVHXXCF3Hlv6HRJLtI8H0fqo0r77ppUmuHJTJaYUxCrLtkIVQzg8N8yLROJ9uwX9PHbkc9wiPZ8AAfU4qAh3EMwJA7jedyngV_7Oo__ZFb0K3PLcr35jJNw2Hi"
              alt="PTTF Logo"
              className="h-10 w-auto object-contain rounded"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface uppercase">PTTF</span>
              <span className="font-label-caption text-label-caption text-on-surface-variant uppercase tracking-widest hidden sm:inline">Pakistan Textile Testing Foundation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-space-lg h-20">
            <a
              aria-current="page"
              className="transition-colors py-2 text-secondary font-bold border-b-2 border-secondary"
              href="/#home"
            >
              Home
            </a>

            {/* Our Services Dropdown Container */}
            <div
              ref={dropdownRef}
              className="relative h-20 flex items-center"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setServicesDropdownOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={servicesDropdownOpen}
                className={`flex items-center gap-space-xs font-title-sm text-title-sm transition-colors cursor-pointer py-2 focus:outline-none ${
                  servicesDropdownOpen ? 'text-secondary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span>Our Services</span>
                <span
                  className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-secondary' : 'text-on-surface-variant'
                  }`}
                >
                  expand_more
                </span>
              </button>

              {/* Desktop Floating Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-[72px] left-0 pt-1 z-50">
                  <div
                    role="menu"
                    aria-label="Our Services"
                    className="w-80 bg-white border border-outline-variant/30 rounded-xl shadow-[0_12px_36px_rgba(19,27,46,0.14)] py-2 border-t-2 border-t-secondary/90"
                  >
                    {serviceItems.map((service) => (
                      <Link
                        key={service.route}
                        to={service.route}
                        role="menuitem"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="group flex items-center justify-between px-4 py-2.5 text-sm font-medium text-on-surface hover:text-secondary hover:bg-surface-container/70 transition-colors rounded-lg mx-2"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform">{service.name}</span>
                        <span className="material-symbols-outlined text-[16px] text-outline opacity-40 group-hover:opacity-100 group-hover:text-secondary group-hover:translate-x-0.5 transition-all">
                          chevron_right
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a className="text-on-surface-variant hover:text-on-surface font-title-sm text-title-sm transition-colors py-2" href="/#services-grid">
              Industries
            </a>
            <Link className="text-on-surface-variant hover:text-on-surface font-title-sm text-title-sm transition-colors py-2" to="/about">
              About us
            </Link>
          </nav>

          <div className="flex items-center gap-space-md">
            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[28px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-container-lowest border-t border-outline-variant/20 px-6 py-4 flex flex-col gap-2 shadow-lg animate-in fade-in duration-150">
            <a
              href="/#home"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-secondary font-bold border-b border-outline-variant/10 font-title-sm text-title-sm"
            >
              Home
            </a>

            {/* Mobile "Our Services" Accordion with Indented Sub-items */}
            <div className="flex flex-col border-b border-outline-variant/10 py-1">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-2 text-on-surface font-title-sm text-title-sm text-left focus:outline-none"
              >
                <span className={mobileServicesOpen ? 'text-secondary font-semibold' : 'text-on-surface'}>Our Services</span>
                <span
                  className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180 text-secondary' : 'text-on-surface-variant'
                  }`}
                >
                  expand_more
                </span>
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 ml-1 border-l-2 border-secondary/40 flex flex-col gap-0.5 py-1.5 my-1">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.route}
                      to={service.route}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-2.5 text-sm text-on-surface-variant hover:text-secondary hover:bg-surface-container/60 rounded-lg transition-colors font-medium flex items-center justify-between"
                    >
                      <span>{service.name}</span>
                      <span className="material-symbols-outlined text-[16px] text-outline">
                        chevron_right
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/#services-grid"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-on-surface-variant hover:text-on-surface border-b border-outline-variant/10 font-title-sm text-title-sm"
            >
              Industries
            </a>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-on-surface-variant hover:text-on-surface border-b border-outline-variant/10 font-title-sm text-title-sm"
            >
              About us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

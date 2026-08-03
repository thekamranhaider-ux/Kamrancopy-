import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Spec Projects', href: '#spec-projects' },
    { name: 'Skills & Frameworks', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-soft-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="group flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-[#0F4C81] text-[#F7D64A] flex items-center justify-center font-heading text-lg font-bold shadow-soft-sm group-hover:bg-[#0A375E] transition-colors">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg text-slate-900 leading-none tracking-tight group-hover:text-[#0F4C81] transition-colors">
              Kamran Haider
            </span>
            <span className="text-[10px] text-slate-500 font-semibold tracking-widest uppercase mt-0.5">
              Copywriter Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-[#0F4C81] transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-lg bg-[#0F4C81] text-white hover:bg-[#0A375E] transition-all shadow-soft-sm"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4 text-[#F7D64A]" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-[#0F4C81] focus:outline-hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-soft-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-[#0F4C81] transition-colors border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 px-4 rounded-lg bg-[#0F4C81] text-white text-sm font-semibold tracking-wider uppercase shadow-soft-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

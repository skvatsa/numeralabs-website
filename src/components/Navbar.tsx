import React, { useState } from 'react';
import { Page } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';
import {
  Menu,
  X,
  Globe,
  Mail,
  ChevronRight,
  Layers,
  Briefcase,
  Users,
  Home,
  MessageSquare,
} from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenHostingGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenHostingGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { page: 'home' as Page, label: 'Home', icon: Home },
    { page: 'products' as Page, label: 'Product Portfolio', icon: Layers },
    { page: 'engagements' as Page, label: 'Projects & Engagements', icon: Briefcase },
    { page: 'about' as Page, label: 'About & Core Team', icon: Users },
    { page: 'contact' as Page, label: 'Contact', icon: MessageSquare },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0c1f38]/95 backdrop-blur-md border-b border-slate-700/60 text-white shadow-lg">
      {/* Top micro-bar for direct contact & domain status */}
      <div className="bg-[#071324] border-b border-slate-800/80 px-4 sm:px-8 py-1 text-[11px] sm:text-xs text-slate-300 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
          </span>
          <span className="hidden md:inline-block text-slate-500">•</span>
          <span className="hidden md:inline-block text-slate-300">
            Tel: <a href="tel:+919945486784" className="hover:text-amber-300">+91 9945486784</a>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenHostingGuide}
            className="group flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 font-medium transition-all"
            title="Setup instructions for thenumeralabs.com"
          >
            <Globe className="w-3 h-3 text-amber-400 group-hover:rotate-45 transition-transform" />
            <span>Host on <strong className="font-semibold underline decoration-amber-400/50">thenumeralabs.com</strong></span>
          </button>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer transition-opacity hover:opacity-95 py-2"
          >
            <Logo theme="dark" size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive =
                currentPage === item.page ||
                (item.page === 'products' && currentPage === 'product-detail');
              return (
                <button
                  key={item.page}
                  id={`nav-link-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white/15 text-amber-400 border border-amber-400/30 shadow-inner'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="header-cta-contact"
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r from-[#991b1b] to-[#881337] hover:from-[#b91c1c] hover:to-[#9f1239] text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 border border-red-500/30 flex items-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#0a192f] px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navItems.map((item) => {
            const isActive =
              currentPage === item.page ||
              (item.page === 'products' && currentPage === 'product-detail');
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-white/15 text-amber-400 border border-amber-400/40'
                    : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-amber-400" />
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                onOpenHostingGuide();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/30"
            >
              <Globe className="w-4 h-4" />
              Domain Setup: thenumeralabs.com
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-[#881337] text-white shadow"
            >
              Request R&D / Project Inquiries
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

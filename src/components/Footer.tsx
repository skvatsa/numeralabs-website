import React from 'react';
import { Page } from '../types';
import { Logo } from './Logo';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  Shield,
  Server,
  Lock,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/companyData';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onSelectProduct: (productId: string) => void;
  onOpenHostingGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectProduct,
  onOpenHostingGuide,
}) => {
  return (
    <footer className="bg-[#081526] text-slate-300 border-t border-slate-800">
      {/* Top Banner: Enterprise Consultation & Domain CTA */}
      <div className="bg-[#0f243f] border-b border-slate-700/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Shield className="w-4 h-4" />
              <span>Enterprise & Defense Grade AI/ML</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to deploy custom offline LLMs or AI signal tools?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Engage directly with our PhD-led R&D team for custom model architecture, privacy-first offline KMS, and quantum security protocols.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#881337] to-[#991b1b] hover:from-[#9f1239] hover:to-[#b91c1c] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Consult Our R&D Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenHostingGuide}
              className="px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <Globe className="w-4 h-4 text-amber-400" />
              <span>Host thenumeralabs.com</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo theme="dark" size="md" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-md pt-2">
              {COMPANY_INFO.aboutUsText}
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Specialized in 100% Offline, Privacy-Preserving AI & Defense Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Post-Quantum Cryptography (PQC) & Low/No-Code Simulation</span>
              </div>
            </div>
          </div>

          {/* Column 3: Products Portfolio */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Products</span>
              <span className="text-[11px] text-amber-400 font-mono">7 Systems</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {PRODUCTS_DATA.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onSelectProduct(p.id)}
                    className="text-slate-400 hover:text-amber-300 transition-colors text-left truncate block max-w-full"
                  >
                    {p.shortName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Key Engagements & Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Company & Work
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Overview & Highlights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Full Product Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('engagements')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Customer Engagements (DPSU, Navy, Energy)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Vision, Mission & Core Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact & Lead Submission
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenHostingGuide}
                  className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 transition-colors"
                >
                  <Globe className="w-3 h-3" />
                  <span>Domain DNS Setup Guide</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Direct Contact Details from Slide 21 */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Official Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-[11px]">Direct Email</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-white hover:text-amber-300 transition-colors font-medium break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-[11px]">Mobile / Tel</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-white hover:text-amber-300 transition-colors font-medium"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-[11px]">Web Domain</span>
                  <span className="text-white font-mono font-medium">
                    {COMPANY_INFO.domain}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400 text-[11px]">Headquarters</span>
                  <span className="text-slate-300 font-medium">{COMPANY_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer" onClick={() => onNavigate('about')}>
              Vision & Mission
            </span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer" onClick={() => onNavigate('engagements')}>
              Client Work
            </span>
            <span>•</span>
            <button
              onClick={onOpenHostingGuide}
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>Host on {COMPANY_INFO.domain}</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

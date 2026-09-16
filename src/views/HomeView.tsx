import React from 'react';
import numeraLogoMark from '../assets/images/numera_logo_mark_1789455185634.jpg';
import { Page, Product } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import { Logo } from '../components/Logo';
import {
  COMPANY_INFO,
  PRODUCTS_DATA,
  KEY_PROJECTS,
  CUSTOMER_ENGAGEMENTS,
  DIRECTORS,
  CONSULTANTS,
  ADVISORS,
} from '../data/companyData';
import {
  ArrowRight,
  Shield,
  WifiOff,
  Cpu,
  Lock,
  Globe,
  CheckCircle2,
  ChevronRight,
  Server,
  Zap,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: Page) => void;
  onSelectProduct: (productId: string) => void;
  onOpenHostingGuide: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProduct,
  onOpenHostingGuide,
}) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#0a192f] via-[#0c1f38] to-[#122b4d] text-white pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden border-b border-slate-700/60">
        {/* Subtle background circuit/grid decoration */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* 3D Company Logo Display */}
            <div className="flex justify-center mb-2">
              <div className="relative group p-2 rounded-2xl bg-gradient-to-b from-amber-400/40 via-white/10 to-transparent shadow-2xl border border-amber-400/50 backdrop-blur-sm">
                <img
                  src={numeraLogoMark}
                  alt="Numera.AI Labs Official 3D Logo"
                  referrerPolicy="no-referrer"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-xl object-contain bg-[#081528] shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Numera.AI Labs • Enterprise AI/ML Systems & R&D</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Unlocking Insights.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Unleashing Potential.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
              {COMPANY_INFO.aboutUsText}
            </p>

            {/* CTA Button Group */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                id="hero-explore-products"
                onClick={() => onNavigate('products')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#881337] to-[#991b1b] hover:from-[#9f1239] hover:to-[#b91c1c] text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Explore 8 Core Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-consult-rd"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Consult Our R&D Team</span>
              </button>

              <button
                onClick={onOpenHostingGuide}
                className="px-4 py-3.5 rounded-xl bg-amber-400/15 hover:bg-amber-400/25 text-amber-300 font-semibold text-xs sm:text-sm border border-amber-400/40 transition-all flex items-center gap-2"
              >
                <Globe className="w-4 h-4 text-amber-400" />
                <span>Hosting on thenumeralabs.com</span>
              </button>
            </div>

            {/* Key Value Points */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-slate-700/60 mt-10">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-amber-400 font-bold text-lg font-mono">100% Offline</div>
                <div className="text-xs text-slate-300">Air-gapped LLM models & zero data leakage</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-amber-400 font-bold text-lg font-mono">Defense DPSU</div>
                <div className="text-xs text-slate-300">Indian Navy & public sector proven systems</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-amber-400 font-bold text-lg font-mono">Post-Quantum</div>
                <div className="text-xs text-slate-300">PQC simulation & cryptographic modernization</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-amber-400 font-bold text-lg font-mono">PhD Physics & Math</div>
                <div className="text-xs text-slate-300">Raman Research Institute scientific heritage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Banner (Slide 3) */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border-l-4 border-amber-500 shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Enterprise Vision
              </span>
              <h3 className="text-xl font-extrabold text-[#881337] uppercase">
                V I S I O N
              </h3>
              <p className="text-base text-slate-800 font-medium leading-relaxed">
                &ldquo;{COMPANY_INFO.vision}&rdquo;
              </p>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border-l-4 border-[#881337] shadow-sm space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#881337]">
                Strategic Mission
              </span>
              <h3 className="text-xl font-extrabold text-[#881337] uppercase">
                M I S S I O N
              </h3>
              <p className="text-base text-slate-800 font-medium leading-relaxed">
                &ldquo;{COMPANY_INFO.mission}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Portfolio Showcase (Slides 13-20) */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <SectionHeader
                badge="Proprietary Technology Portfolio"
                title="AI/ML Products & Systems"
                subtitle="Engineered for high-security, low-connectivity, and domain-critical operations."
              />
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#881337] hover:text-[#9f1239] transition-colors self-start md:self-auto"
            >
              <span>View All {PRODUCTS_DATA.length} Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-amber-400"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                      Product #{product.slNo}
                    </span>
                    {product.offlineCapable && (
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1 border border-emerald-200">
                        <WifiOff className="w-3 h-3" />
                        100% Offline
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#881337] transition-colors leading-tight mb-2">
                    {product.shortName}
                  </h3>
                  <p className="text-xs text-amber-700 font-semibold mb-3">
                    {product.category}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProduct(product.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#881337] hover:text-[#9f1239] transition-colors group/btn"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <span className="text-[11px] text-slate-400">
                    Enterprise Ready
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Engagements & Track Record (Slides 6-12) */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <SectionHeader
                badge="Trusted by Defense & Industry Leaders"
                title="Client Engagements & Projects"
                subtitle="From Indian Navy offline database search to renewable energy grid forecasting."
              />
            </div>
            <button
              onClick={() => onNavigate('engagements')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#881337] hover:text-[#9f1239] transition-colors self-start md:self-auto"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Spotlight 1: Indian Navy */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  Defense Intelligence
                </span>
                <span className="text-xs font-bold text-[#881337]">Indian Navy</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">Voice Based DB Search</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Offline voice processing engine capable of generating real-time SQL queries for naval databases with zero cloud dependency.
              </p>
            </div>

            {/* Spotlight 2: Integrum Energy */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Clean Tech & Power
                </span>
                <span className="text-xs font-bold text-emerald-800">Integrum Energy</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">Renewable Energy Time-Series Forecasting</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-precision forecasting engine for wind farms and solar plants providing operational insights for energy trading and procurement.
              </p>
            </div>

            {/* Spotlight 3: Defense PSU Marine Vessel */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  Naval Architecture
                </span>
                <span className="text-xs font-bold text-amber-800">Defense PSU</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">Marine Vessel Design Assistant</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Offline LLM powered assistant verifying design compliance against maritime regulations, reducing shipyard errors and manual drafting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview (Slides 4-5) */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeader
              badge="Corporate Governance & Vision"
              title="Directors"
              subtitle="Founders and executive directors steering Numera.AI Labs' mission-critical AI/ML architectures, financial governance, and strategic direction."
              centered
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DIRECTORS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0c1f38] text-amber-400 font-bold text-lg flex items-center justify-center flex-shrink-0">
                      {member.avatarInitial}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{member.name}</h4>
                      <p className="text-xs text-amber-600 font-semibold">{member.role}</p>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1.5 mb-3">
                    {member.background && member.background[0] && (
                      <div className="font-semibold text-slate-800">{member.background[0]}</div>
                    )}
                    <div className="text-slate-500">{member.experience[0]}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs flex items-center justify-between">
                  <span className="text-slate-400 font-mono text-[11px]">Director</span>
                  <span className="text-[11px] font-semibold text-[#881337]">Numera.AI Labs</span>
                </div>
              </div>
            ))}
          </div>

          {/* Core Team Highlight Teaser */}
          <div className="mt-10 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 mb-1.5">
                <span>Multi-Disciplinary Core Team</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                Backed by 7 Senior Consultants & Advisors
              </h4>
              <p className="text-xs text-slate-600 max-w-xl">
                Domain authorities across technology development, instructional design, child psychology, Indian Navy combat systems, pedagogy, and enterprise strategy.
              </p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-[#881337] text-white font-semibold text-xs sm:text-sm whitespace-nowrap transition-colors flex items-center gap-2 shadow"
            >
              <span>Explore Core Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Domain Hosting Helper Callout Banner */}
      <section className="py-10 bg-[#0c1f38] text-white border-y border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 flex-shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Hosting this showcase on <span className="text-amber-400 underline">thenumeralabs.com</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  Looking to connect your custom domain? Follow our interactive DNS mapping and Google Cloud Run integration guide.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenHostingGuide}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <span>Open Domain & DNS Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ready to explore tailored AI/ML solutions for your organization?
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you need customized offline LLMs, signal extraction for sensor arrays, or specialized R&D consultancy, our team is ready to assist.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#881337] to-[#991b1b] hover:from-[#9f1239] hover:to-[#b91c1c] text-white font-bold text-base shadow-lg transition-all"
            >
              Submit Project Inquiry
            </button>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-base transition-colors"
            >
              Email contact@thenumeralabs.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

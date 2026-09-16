import React, { useState } from 'react';
import { KEY_PROJECTS, CUSTOMER_ENGAGEMENTS } from '../data/companyData';
import { SectionHeader } from '../components/SectionHeader';
import {
  ShieldCheck,
  Award,
  ArrowRight,
  Anchor,
  Zap,
  Activity,
  Cpu,
  FileSpreadsheet,
  Building,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface EngagementsViewProps {
  onNavigateToContact: () => void;
}

export const EngagementsView: React.FC<EngagementsViewProps> = ({ onNavigateToContact }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'customer' | 'founder'>('all');

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <SectionHeader
            badge="Proven Track Record"
            title="Projects & Engagements"
            subtitle="Demonstrated impact across defense organizations, energy utilities, healthcare research, cybersecurity, and public sector undertakings."
            centered
          />
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex gap-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#881337] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Engagements ({CUSTOMER_ENGAGEMENTS.length + KEY_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveTab('customer')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'customer'
                  ? 'bg-[#881337] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Customer Engagements ({CUSTOMER_ENGAGEMENTS.length})
            </button>
            <button
              onClick={() => setActiveTab('founder')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'founder'
                  ? 'bg-[#881337] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Founder Led Projects ({KEY_PROJECTS.length})
            </button>
          </div>
        </div>

        {/* Section 1: Customer Engagements */}
        {(activeTab === 'all' || activeTab === 'customer') && (
          <div className="mb-14">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#881337]" />
                  <span>Key Customer Engagements</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Enterprise-grade platforms and systems deployed for institutional clients
                </p>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-700">
                {CUSTOMER_ENGAGEMENTS.length} Production Systems
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CUSTOMER_ENGAGEMENTS.map((eng) => (
                <div
                  key={eng.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between group hover:border-amber-400"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                        {eng.domain}
                      </span>
                      <span className="text-xs font-bold text-slate-600 font-mono">
                        {eng.client}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#881337] transition-colors mb-2">
                      {eng.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {eng.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-4 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Outcomes:
                    </div>
                    {eng.keyOutcomes.map((ko, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{ko}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Key Projects Led by Founders */}
        {(activeTab === 'all' || activeTab === 'founder') && (
          <div className="mb-14">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span>Key Projects Led by the Founders</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  High-complexity R&D in quantum computing, naval voice databases, and medical screening
                </p>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800">
                {KEY_PROJECTS.length} Specialized R&D Projects
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {KEY_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between group hover:border-[#881337]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                        {proj.category}
                      </span>
                      <span className="text-xs font-bold text-[#881337] bg-red-50 px-2 py-0.5 rounded border border-red-200">
                        {proj.client}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#881337] transition-colors mb-2">
                      {proj.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {proj.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-4 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Technical Impact:
                    </div>
                    {proj.impacts.map((imp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{imp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client Collaboration CTA */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-slate-900">
              Have a specialized machine learning or defense requirement?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              We provide end-to-end mathematical modeling, architecture design, offline training, and edge hardware deployment.
            </p>
          </div>
          <button
            onClick={onNavigateToContact}
            className="px-6 py-3 rounded-xl bg-[#0c1f38] hover:bg-slate-800 text-white font-bold text-sm shadow transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

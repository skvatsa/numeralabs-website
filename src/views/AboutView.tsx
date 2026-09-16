import React from 'react';
import numeraLogoMark from '../assets/images/numera_logo_mark_1789455185634.jpg';
import { DIRECTORS, CONSULTANTS, ADVISORS, COMPANY_INFO } from '../data/companyData';
import { SectionHeader } from '../components/SectionHeader';
import {
  GraduationCap,
  Briefcase,
  Target,
  Compass,
  Award,
  Shield,
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
  Users,
} from 'lucide-react';

interface AboutViewProps {
  onNavigateToContact: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigateToContact }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <SectionHeader
            badge="Company Profile"
            title="About Numera.AI Labs"
            subtitle="Advancing enterprise and defense intelligence through mathematical rigor, customized offline LLMs, and quantum cryptography."
            centered
          />
        </div>

        {/* About Us Lead Card (Slide 2) */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 mb-12">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="flex justify-center mb-2">
              <div className="p-1.5 rounded-2xl bg-[#081528] border border-amber-400/40 shadow-md">
                <img
                  src={numeraLogoMark}
                  alt="Numera.AI Official Logo"
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#881337] tracking-wide uppercase">
              Our Identity & Purpose
            </h3>
            <div className="h-1 w-12 bg-amber-400 mx-auto rounded-full" />
            <p className="text-lg sm:text-2xl text-slate-800 font-medium leading-relaxed">
              &ldquo;{COMPANY_INFO.aboutUsText}&rdquo;
            </p>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Headquartered in Bangalore, the technology capital of India, Numera.AI Labs bridges cutting-edge fundamental physics and mathematical research with industrial and defense applications.
            </p>
          </div>
        </div>

        {/* Vision & Mission (Slide 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-[#0c1f38] text-white p-8 rounded-2xl shadow-md border border-slate-700 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center border border-amber-400/30 mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-wider uppercase mb-1">
                Vision
              </h3>
              <div className="h-1 w-12 bg-amber-400 rounded-full mb-4" />
              <p className="text-lg text-slate-200 leading-relaxed font-medium">
                {COMPANY_INFO.vision}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-700/60 mt-6 text-xs text-amber-300 font-medium">
              Enterprise Productivity • Air-Gapped Security • LLM Sovereignty
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-[#881337] to-[#5f0d26] text-white p-8 rounded-2xl shadow-md border border-red-900/40 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center border border-white/30 mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-wider uppercase mb-1">
                Mission
              </h3>
              <div className="h-1 w-12 bg-amber-400 rounded-full mb-4" />
              <p className="text-lg text-red-50 leading-relaxed font-medium">
                {COMPANY_INFO.mission}
              </p>
            </div>
            <div className="pt-6 border-t border-red-800/60 mt-6 text-xs text-amber-200 font-medium">
              Stakeholder Trust • Adaptive Intelligence • Mission-Critical Reliability
            </div>
          </div>
        </div>

        {/* Directors Section */}
        <div className="mb-16">
          <SectionHeader
            badge="Board of Directors"
            title="Directors"
            subtitle="Founders and executive directors driving Numera.AI Labs' corporate governance, product vision, and mission-critical execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DIRECTORS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between group hover:border-[#881337]"
              >
                <div>
                  {/* Avatar & Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0c1f38] to-[#1e3a8a] text-amber-400 font-extrabold text-xl flex items-center justify-center shadow-inner border border-amber-400/30 flex-shrink-0">
                      {member.avatarInitial}
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-[#881337] transition-colors leading-tight">
                        {member.name}
                      </h4>
                      <p className="text-xs font-bold text-amber-600 mt-1 uppercase tracking-wide">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Background (Degrees / Domain Tenure) */}
                  {member.background && member.background.length > 0 && (
                    <div className="mb-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-[#881337]" />
                        <span>Background & Credentials</span>
                      </div>
                      <ul className="space-y-1">
                        {member.background.map((bg, idx) => (
                          <li key={idx} className="text-xs font-semibold text-slate-800">
                            {bg}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Experience */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                      <span>Professional Experience</span>
                    </div>
                    <ul className="space-y-1.5">
                      {member.experience.map((exp, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Connect */}
                {member.id === 'srivatsa' && (
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-[#881337] font-semibold hover:underline flex items-center gap-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Contact Dr. Srivatsa</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Core Team Section */}
        <div className="mb-16">
          <SectionHeader
            badge="Domain Mastery & Technical Depth"
            title="Core Team"
            subtitle="Distinguished consultants and advisors bringing deep domain expertise across technology development, instructional design, psychology, defense systems, and brand strategy."
          />

          {/* Consultants Group */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
              <div className="px-3 py-1 rounded-lg bg-[#881337]/10 text-[#881337] font-bold text-xs uppercase tracking-wider">
                Consultants
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Technology, Instructional Design & Behavioral Consultants
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONSULTANTS.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between group hover:border-[#881337]"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 font-bold text-base flex items-center justify-center shadow-inner flex-shrink-0">
                          {member.avatarInitial}
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-900 group-hover:text-[#881337] transition-colors leading-snug">
                            {member.name}
                          </h4>
                          <span className="inline-block mt-1 font-mono text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            {member.qualification}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Role / Focus */}
                    <div className="mb-4 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Domain & Role
                      </div>
                      <p className="text-xs font-semibold text-slate-800 leading-snug">
                        {member.role}
                      </p>
                    </div>

                    {/* Experience Highlights */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-amber-600" />
                        <span>Experience & Highlights</span>
                      </div>
                      <ul className="space-y-1.5">
                        {member.experience.map((exp, idx) => (
                          <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisors Group */}
          <div>
            <div className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
              <div className="px-3 py-1 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider border border-amber-200">
                Advisors
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Technical, Brand, Pedagogy & Strategic Growth Advisors
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ADVISORS.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-5 flex flex-col justify-between group hover:border-[#881337]"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-[#0c1f38] text-amber-400 font-bold text-sm flex items-center justify-center shadow-inner flex-shrink-0">
                          {member.avatarInitial}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#881337] transition-colors leading-tight">
                            {member.name}
                          </h4>
                          <span className="inline-block mt-0.5 font-mono text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                            {member.qualification}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Role / Focus */}
                    <div className="mb-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                        Role
                      </div>
                      <p className="text-xs font-semibold text-slate-800 leading-tight">
                        {member.role}
                      </p>
                    </div>

                    {/* Experience Bullets */}
                    <div className="space-y-1.5">
                      <ul className="space-y-1.5">
                        {member.experience.map((exp, idx) => (
                          <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="leading-snug text-[11px] sm:text-xs">{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic & Defense Heritage */}
        <div className="bg-[#0c1f38] text-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-700 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Shield className="w-3.5 h-3.5" />
                <span>Foundational Heritage</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Engineering Solutions being rooted in fundamentals
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Leadership and Core team of consultants have niche experience in working on mission-critical environments. The team uniquely combines theoretical depth of the sciences and uncompromising rigor in deployment.
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center">
              <button
                onClick={onNavigateToContact}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#881337] to-[#991b1b] hover:from-[#9f1239] hover:to-[#b91c1c] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Engage for R&D Consultancy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

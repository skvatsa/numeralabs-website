import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Logo } from '../components/Logo';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/companyData';
import { ContactSubmission } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
  Building,
  User,
  MessageSquare,
  HelpCircle,
  FileText,
  Clock,
  Sparkles,
  ShieldCheck,
  Download,
  Copy,
} from 'lucide-react';

interface ContactViewProps {
  initialProductId?: string;
  onOpenHostingGuide: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  initialProductId,
  onOpenHostingGuide,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: (initialProductId === 'custom-tool'
      ? 'propose_tool'
      : initialProductId
      ? 'product_inquiry'
      : 'rd_consultancy') as ContactSubmission['inquiryType'],
    productId: initialProductId && initialProductId !== 'custom-tool' ? initialProductId : '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<ContactSubmission | null>(null);
  const [savedLeads, setSavedLeads] = useState<ContactSubmission[]>([]);
  const [showSavedLeads, setShowSavedLeads] = useState(false);
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('numera_ai_inquiries');
      if (stored) {
        setSavedLeads(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newLead: ContactSubmission = {
      id: `LEAD-${Date.now().toString(36).toUpperCase()}`,
      name: formData.name.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || undefined,
      inquiryType: formData.inquiryType,
      productId: formData.productId || undefined,
      comments: formData.comments.trim(),
      submittedAt: new Date().toLocaleString(),
    };

    const updated = [newLead, ...savedLeads];
    setSavedLeads(updated);
    setLastSubmission(newLead);
    setSubmitted(true);

    try {
      localStorage.setItem('numera_ai_inquiries', JSON.stringify(updated));
    } catch {
      // ignore
    }

    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      inquiryType: 'rd_consultancy',
      productId: '',
      comments: '',
    });
    setSubmitted(false);
  };

  const mailtoLink = lastSubmission
    ? `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
        `[Numera.AI Inquiry] ${lastSubmission.inquiryType.toUpperCase()} - ${lastSubmission.company}`
      )}&body=${encodeURIComponent(
        `Inquiry Ref: ${lastSubmission.id}\nName: ${lastSubmission.name}\nCompany: ${lastSubmission.company}\nEmail: ${lastSubmission.email}\nPhone: ${lastSubmission.phone || 'N/A'}\nInquiry Type: ${lastSubmission.inquiryType}\nProduct Interest: ${lastSubmission.productId || 'N/A'}\n\nProject Scope & Comments:\n${lastSubmission.comments}`
      )}`
    : `mailto:${COMPANY_INFO.email}`;

  const copyReceiptText = () => {
    if (!lastSubmission) return;
    const text = `NUMERA.AI LABS INQUIRY RECEIPT
Reference ID: ${lastSubmission.id}
Date: ${lastSubmission.submittedAt}
Name: ${lastSubmission.name}
Company: ${lastSubmission.company}
Email: ${lastSubmission.email}
Phone: ${lastSubmission.phone || 'N/A'}
Inquiry Type: ${lastSubmission.inquiryType}
Product: ${lastSubmission.productId || 'Custom/General'}
Comments:
${lastSubmission.comments}`;
    navigator.clipboard.writeText(text);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionHeader
            badge="Direct Client Engagement"
            title="Contact Numera.AI Labs"
            subtitle="Request product demonstrations, propose building a custom tool, or commission specialized R&D consultancy."
            centered
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Direct Contact Details (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Slide 21 Contact Card */}
            <div className="bg-[#0c1f38] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-700 relative overflow-hidden">
              <div className="pb-5 mb-5 border-b border-slate-700/70">
                <Logo theme="dark" size="md" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                Executive Leadership Contact
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Dr. Srivatsa S K
              </h3>
              <p className="text-xs text-slate-300 font-medium mb-6">
                CEO, Numera.AI Labs Private Limited
              </p>

              <div className="space-y-4 text-sm text-slate-200 border-t border-slate-700/60 pt-6">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-400/20 text-amber-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Direct Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-white hover:text-amber-300 font-semibold transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-400/20 text-amber-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Direct Mobile / Call</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-white hover:text-amber-300 font-semibold transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-400/20 text-amber-400 flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Official Web Domain</span>
                    <span className="text-white font-mono font-semibold">
                      {COMPANY_INFO.domain}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-400/20 text-amber-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Location</span>
                    <span className="text-slate-200 font-semibold">
                      Bangalore, Karnataka, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Air-gap Guarantee */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>NDA & Confidentiality Assurance</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All client proposals, proprietary data schemas, and technical inquiries are handled with strict non-disclosure compliance. We offer on-premise, air-gapped pilot evaluations for defense and enterprise teams.
              </p>
            </div>

            {/* Domain Hosting Helper Callout */}
            <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-2">
              <div className="font-bold flex items-center justify-between">
                <span>Looking to map thenumeralabs.com?</span>
                <Globe className="w-4 h-4 text-amber-700" />
              </div>
              <p className="text-slate-700">
                Need step-by-step DNS records to host this applet on your live domain?
              </p>
              <button
                onClick={onOpenHostingGuide}
                className="font-bold text-[#881337] hover:underline block pt-1"
              >
                View DNS & Hosting Instructions &rarr;
              </button>
            </div>

            {/* Saved Leads / Submissions toggle (Useful for review) */}
            {savedLeads.length > 0 && (
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
                <span className="text-slate-600">
                  Stored Inquiries: <strong>{savedLeads.length}</strong>
                </span>
                <button
                  onClick={() => setShowSavedLeads(!showSavedLeads)}
                  className="text-[#881337] font-semibold hover:underline"
                >
                  {showSavedLeads ? 'Hide History' : 'View Submitted Inquiries'}
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Structured Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            {submitted && lastSubmission ? (
              /* Success Confirmation Box */
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-200 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Inquiry Successfully Received!
                    </h3>
                    <p className="text-xs text-slate-500">
                      Reference ID: <strong className="font-mono text-slate-800">{lastSubmission.id}</strong> • Saved locally
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs space-y-2 text-slate-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-slate-400 block">Client Name</span>
                      <span className="font-semibold text-slate-900">{lastSubmission.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Company</span>
                      <span className="font-semibold text-slate-900">{lastSubmission.company}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Email</span>
                      <span className="font-semibold text-slate-900">{lastSubmission.email}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Inquiry Type</span>
                      <span className="font-semibold text-[#881337] uppercase">{lastSubmission.inquiryType.replace('_', ' ')}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-slate-400 block mb-1">Scope / Comments</span>
                    <p className="bg-white p-3 rounded-lg border border-slate-200 text-slate-800 whitespace-pre-wrap">
                      {lastSubmission.comments}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={mailtoLink}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#881337] to-[#991b1b] hover:from-[#9f1239] hover:to-[#b91c1c] text-white font-bold text-xs shadow flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client (Pre-filled)</span>
                  </a>

                  <button
                    onClick={copyReceiptText}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors flex items-center gap-1.5"
                  >
                    {copiedReceipt ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedReceipt ? 'Copied Receipt!' : 'Copy Summary'}</span>
                  </button>

                  <button
                    onClick={handleResetForm}
                    className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Contact Form */
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    Project Inquiry & Lead Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your organization details to connect with Numera&apos;s AI/ML architects.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Inquiry Type Radio / Pill selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Inquiry Category *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'rd_consultancy', label: 'R&D Consultancy' },
                        { id: 'propose_tool', label: 'Propose New Tool' },
                        { id: 'product_inquiry', label: 'Product Info / Demo' },
                      ].map((item) => (
                        <label
                          key={item.id}
                          className={`flex items-center justify-center p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-colors text-center ${
                            formData.inquiryType === item.id
                              ? 'bg-[#881337] text-white border-[#881337] shadow-sm'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={item.id}
                            checked={formData.inquiryType === item.id}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#881337] focus:bg-white text-slate-900"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                      >
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Bharat Dynamics / TechCorp"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#881337] focus:bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                      >
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@organization.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#881337] focus:bg-white text-slate-900"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                      >
                        Phone / Mobile
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#881337] focus:bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Specific Product of Interest */}
                  <div>
                    <label
                      htmlFor="productId"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Specific Tool of Interest (Optional)
                    </label>
                    <select
                      id="productId"
                      name="productId"
                      value={formData.productId}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#881337] focus:bg-white text-slate-900"
                    >
                      <option value="">General / Multiple Tools / Custom R&D</option>
                      {PRODUCTS_DATA.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.slNo}. {p.name}
                        </option>
                      ))}
                      <option value="custom_tool">Propose a brand new AI/ML tool</option>
                    </select>
                  </div>

                  {/* Comments / Project Scope */}
                  <div>
                    <label
                      htmlFor="comments"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Project Requirements & Comments *
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      required
                      rows={4}
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder="Please describe your objective, data modalities, security constraints (e.g., air-gapped on-premise vs hybrid), and project timeline..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#881337] focus:bg-white text-slate-900"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="submit-contact-form"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#881337] to-[#991b1b] hover:from-[#9f1239] hover:to-[#b91c1c] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Numera.AI Labs</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Saved Leads History Modal / Drawer */}
            {showSavedLeads && (
              <div className="mt-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Inquiry Submissions History (Stored Locally)
                  </h4>
                  <button
                    onClick={() => {
                      if (confirm('Clear all stored inquiries?')) {
                        localStorage.removeItem('numera_ai_inquiries');
                        setSavedLeads([]);
                      }
                    }}
                    className="text-xs text-red-600 hover:underline"
                  >
                    Clear History
                  </button>
                </div>

                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {savedLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1"
                    >
                      <div className="flex items-center justify-between font-semibold text-slate-900">
                        <span>{lead.name} ({lead.company})</span>
                        <span className="font-mono text-[10px] text-slate-400">{lead.id}</span>
                      </div>
                      <div className="text-slate-500">
                        Email: {lead.email} • {lead.submittedAt}
                      </div>
                      <div className="text-slate-700 italic">{lead.comments}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

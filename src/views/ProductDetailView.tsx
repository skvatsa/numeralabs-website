import React from 'react';
import { Product, Page } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import {
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  Lock,
  WifiOff,
  ArrowRight,
  Share2,
  Server,
  FileCheck,
  Zap,
} from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
  onNavigateToContactWithProduct: (productId: string) => void;
  onSelectOtherProduct: (productId: string) => void;
  allProducts: Product[];
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onBack,
  onNavigateToContactWithProduct,
  onSelectOtherProduct,
  allProducts,
}) => {
  const otherProducts = allProducts.filter((p) => p.id !== product.id);

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#881337] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Product Portfolio</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-mono">Product #{product.slNo} of {allProducts.length}</span>
            <span>•</span>
            <span className="font-semibold text-slate-700">{product.category}</span>
          </div>
        </div>

        {/* Product Hero Header */}
        <div className="bg-[#0c1f38] text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-700 relative overflow-hidden mb-10">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute right-10 top-10 opacity-10 font-mono text-8xl font-black text-amber-400 select-none">
            0{product.slNo}
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40">
                {product.category}
              </span>
              {product.offlineCapable && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                  <WifiOff className="w-3.5 h-3.5" />
                  100% Offline & Air-Gapped
                </span>
              )}
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/40">
                Defense & Enterprise Ready
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              {product.name}
            </h1>
            <p className="text-base sm:text-xl text-amber-300/95 font-medium leading-relaxed mb-6">
              {product.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                id="product-inquire-button"
                onClick={() => onNavigateToContactWithProduct(product.id)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#881337] to-[#991b1b] hover:from-[#9f1239] hover:to-[#b91c1c] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <span>Request Demo / Custom Implementation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: product.name,
                      text: product.tagline,
                      url: window.location.href,
                    }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  }
                }}
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Specifications</span>
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column Technical Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Detailed Content (2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Authoritative Slide Description */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
              <SectionHeader
                title="Product Description"
                subtitle="Official specification as documented in Numera.AI Labs portfolio"
              />
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base space-y-4">
                <p className="bg-slate-50 p-5 rounded-xl border-l-4 border-[#881337] text-slate-800 font-medium">
                  {product.description}
                </p>
                <p className="text-slate-600">
                  {product.extendedOverview}
                </p>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
              <SectionHeader
                title="Key Capabilities"
                subtitle="High-impact features engineered for mission-critical deployments"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.keyCapabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 hover:border-amber-400/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800 leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Architecture (Inputs -> Core Engine -> Outputs) */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
              <SectionHeader
                title="System Architecture"
                subtitle="Data flow and modular intelligence pipeline"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Inputs */}
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    Input Sources
                  </div>
                  <ul className="space-y-2 text-xs text-blue-950">
                    {product.systemArchitecture.inputs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Engine */}
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    Core AI Engine
                  </div>
                  <ul className="space-y-2 text-xs text-amber-950">
                    {product.systemArchitecture.coreEngine.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outputs */}
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    Outputs & Action
                  </div>
                  <ul className="space-y-2 text-xs text-emerald-950">
                    {product.systemArchitecture.outputs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (1 column) */}
          <div className="space-y-6">
            {/* Target Use Cases */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-1 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Target Industry Use Cases</span>
              </h3>
              <div className="h-1 w-10 bg-amber-400 rounded-full mb-4" />
              <ul className="space-y-2.5">
                {product.useCases.map((uc, idx) => (
                  <li key={idx} className="text-xs font-medium text-slate-700 flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#881337] flex-shrink-0 mt-1.5" />
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy & Air-Gap Posture */}
            <div className="bg-[#0f2744] text-white p-6 rounded-2xl shadow-md border border-slate-700">
              <h3 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Security & Air-Gap Profile</span>
              </h3>
              <div className="h-1 w-10 bg-amber-400 rounded-full mb-4" />
              <ul className="space-y-2 text-xs text-slate-300">
                {product.securityHighlights.map((sec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Action Box */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-6 rounded-2xl text-slate-800">
              <h4 className="font-bold text-[#881337] text-base mb-2">
                Interested in {product.shortName}?
              </h4>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                We can customize this engine to your proprietary database, sensor array, or air-gapped on-premise infrastructure.
              </p>
              <button
                onClick={() => onNavigateToContactWithProduct(product.id)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#881337] hover:bg-[#9f1239] text-white font-bold text-xs uppercase tracking-wider shadow transition-colors"
              >
                Inquire About This Product
              </button>
            </div>

            {/* Explore Other Systems */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-3">Other Portfolio Products</h4>
              <div className="space-y-2">
                {otherProducts.slice(0, 4).map((op) => (
                  <button
                    key={op.id}
                    onClick={() => onSelectOtherProduct(op.id)}
                    className="w-full text-left p-2 rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-between text-xs"
                  >
                    <span className="font-medium text-slate-700 truncate">{op.shortName}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

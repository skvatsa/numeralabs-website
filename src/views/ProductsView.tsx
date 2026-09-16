import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import {
  Layers,
  Search,
  Filter,
  ArrowRight,
  WifiOff,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface ProductsViewProps {
  products: Product[];
  onSelectProduct: (productId: string) => void;
  onNavigateToContactWithProduct: (productId: string) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  products,
  onSelectProduct,
  onNavigateToContactWithProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Defense & Signals',
    'Offline LLMs & KMS',
    'Document Intelligence',
    'Legal & IP',
    'Quantum Security',
    'Educational Intelligence',
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.keyCapabilities.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <SectionHeader
            badge="Enterprise & Defense Solutions"
            title="Product Portfolio"
            subtitle="Deep-tech AI/ML platforms, offline customized LLMs, and post-quantum cryptographic software engineered by Numera.AI Labs."
            centered
          />
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs sm:text-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl font-semibold transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#881337] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#881337] focus:bg-white text-slate-900"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <span>Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products</span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-[#881337] font-semibold hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group hover:border-amber-400/80"
            >
              <div>
                {/* Top card header */}
                <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200">
                      Product #{product.slNo}
                    </span>
                    {product.offlineCapable ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        <WifiOff className="w-3 h-3" />
                        100% Offline
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        Hybrid Engine
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#881337] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1 line-clamp-2">
                    {product.tagline}
                  </p>
                </div>

                {/* Card Description */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Capabilities Preview */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Highlights:
                    </div>
                    {product.keyCapabilities.slice(0, 2).map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  id={`read-more-${product.id}`}
                  onClick={() => onSelectProduct(product.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#881337] hover:text-[#9f1239] transition-colors group/btn"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigateToContactWithProduct(product.id)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 hover:bg-[#0c1f38] hover:text-white text-slate-800 transition-colors"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: Custom Tools Proposing */}
        <div className="bg-[#0c1f38] text-white p-8 rounded-2xl shadow-xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Need a Custom AI or Signal Architecture?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Propose building a new tool or commission specialized R&D
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Numera.AI Labs partners with defense contractors, enterprise software vendors, and research institutes to design tailor-made machine learning architectures from scratch.
            </p>
          </div>
          <button
            onClick={() => onNavigateToContactWithProduct('custom-tool')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#881337] to-[#991b1b] hover:from-[#9f1239] hover:to-[#b91c1c] text-white font-bold text-sm whitespace-nowrap shadow transition-all flex items-center gap-2"
          >
            <span>Propose a New Tool</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

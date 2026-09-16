import React, { useState } from 'react';
import {
  Globe,
  CheckCircle2,
  Copy,
  ExternalLink,
  ShieldCheck,
  Server,
  Terminal,
  FileCode2,
  X,
  Sparkles,
} from 'lucide-react';
import { DOMAIN_SETUP_GUIDE } from '../data/companyData';

interface DomainHostingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DomainHostingModal: React.FC<DomainHostingModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'cloudrun' | 'cloudflare' | 'vps' | 'dns'>('cloudrun');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleCopyAllDNS = () => {
    const tableText = DOMAIN_SETUP_GUIDE.dnsRecords
      .map((r) => `${r.type}\t${r.name}\t${r.value}\t(${r.description})`)
      .join('\n');
    navigator.clipboard.writeText(tableText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div
      id="domain-hosting-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0c1f38] text-white p-6 flex items-start justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">
                  Domain Hosting & DNS Guide
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  thenumeralabs.com
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Complete walkthrough to connect your custom domain to this application.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2 overflow-x-auto text-sm">
          <button
            onClick={() => setActiveTab('cloudrun')}
            className={`pb-3 px-3 font-semibold border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'cloudrun'
                ? 'border-[#881337] text-[#881337]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Server className="w-4 h-4" />
            1. Cloud Run / AI Studio (Direct)
          </button>
          <button
            onClick={() => setActiveTab('dns')}
            className={`pb-3 px-3 font-semibold border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'dns'
                ? 'border-[#881337] text-[#881337]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            2. DNS Records Table
          </button>
          <button
            onClick={() => setActiveTab('cloudflare')}
            className={`pb-3 px-3 font-semibold border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'cloudflare'
                ? 'border-[#881337] text-[#881337]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Globe className="w-4 h-4" />
            3. Cloudflare / Vercel Edge
          </button>
          <button
            onClick={() => setActiveTab('vps')}
            className={`pb-3 px-3 font-semibold border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'vps'
                ? 'border-[#881337] text-[#881337]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Terminal className="w-4 h-4" />
            4. Self-Hosted VPS / Nginx
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-700">
          {activeTab === 'cloudrun' && (
            <div className="space-y-5">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 items-start">
                <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900">
                  <span className="font-bold">Google Cloud Run Custom Domain:</span> Because your AI Studio app compiles to standard production build and runs on Google Cloud Run, mapping <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-xs font-bold">thenumeralabs.com</code> gives you zero-maintenance auto-scaling and free automatic Google SSL certificates!
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#0c1f38] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Open Google Cloud Console</h4>
                    <p className="text-sm text-slate-600">
                      Navigate to <strong>Cloud Run</strong> &rarr; Click <strong>Manage Custom Domains</strong> in the top toolbar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#0c1f38] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Add Custom Domain Mapping</h4>
                    <p className="text-sm text-slate-600">
                      Click <strong>Add Mapping</strong>, select your Cloud Run service (or Cloud Run domain integration), and specify:
                    </p>
                    <div className="mt-2 bg-slate-100 p-2.5 rounded-lg font-mono text-xs text-slate-800 space-y-1">
                      <div>Domain: <strong className="text-indigo-700">thenumeralabs.com</strong></div>
                      <div>Also add: <strong className="text-indigo-700">www.thenumeralabs.com</strong></div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#0c1f38] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Verify Ownership (One-Time)</h4>
                    <p className="text-sm text-slate-600">
                      If prompted by Google Search Console or Cloud Console, add the TXT verification record at your domain registrar (GoDaddy, Namecheap, Google Domains/Squarespace, etc.).
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#0c1f38] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Apply Google DNS Records</h4>
                    <p className="text-sm text-slate-600">
                      Google Cloud will provide 4 standard <code className="bg-slate-200 px-1 rounded text-xs">A</code> records for the apex domain and a <code className="bg-slate-200 px-1 rounded text-xs">CNAME</code> for <code className="bg-slate-200 px-1 rounded text-xs">www</code>. Once updated, Google issues a 100% free SSL certificate within 15–30 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'dns' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900">Required DNS Records for thenumeralabs.com</h4>
                  <p className="text-xs text-slate-500">Configure these in your DNS Provider (Cloudflare, GoDaddy, Namecheap, etc.)</p>
                </div>
                <button
                  onClick={handleCopyAllDNS}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
                >
                  {copiedAll ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedAll ? 'Copied Table!' : 'Copy All Records'}
                </button>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Type</th>
                      <th className="p-3">Host / Name</th>
                      <th className="p-3">Points To / Value</th>
                      <th className="p-3">Purpose</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-xs">
                    {DOMAIN_SETUP_GUIDE.dnsRecords.map((rec, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">
                            {rec.type}
                          </span>
                        </td>
                        <td className="p-3 font-semibold text-slate-900">{rec.name}</td>
                        <td className="p-3 text-slate-700 max-w-[200px] truncate">{rec.value}</td>
                        <td className="p-3 font-sans text-slate-500 text-[11px]">{rec.description}</td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => handleCopy(rec.value, idx)}
                            className="p-1 hover:bg-slate-200 rounded text-slate-500 hover:text-slate-800"
                            title="Copy value"
                          >
                            {copiedIndex === idx ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>Verify propagation once DNS is updated:</span>
                <a
                  href="https://dnschecker.org/#A/thenumeralabs.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[#881337] font-semibold hover:underline"
                >
                  Check DNS Propagation <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {activeTab === 'cloudflare' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900">Hosting via Cloudflare Pages or Vercel</h4>
              <p className="text-sm text-slate-600">
                You can export this project as a static bundle using <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs font-bold">npm run build</code> (which builds to the <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs font-bold">dist/</code> directory) and host it with worldwide CDN caching.
              </p>

              <div className="space-y-3 text-sm">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-slate-900">Cloudflare Pages Option:</strong>
                  <ol className="list-decimal list-inside mt-1.5 text-xs text-slate-600 space-y-1">
                    <li>Push your repository or upload the generated <code className="font-mono">dist</code> folder to Cloudflare Pages.</li>
                    <li>In Cloudflare Pages dashboard, go to <strong>Custom Domains</strong> &rarr; Add <code className="font-mono font-bold">thenumeralabs.com</code>.</li>
                    <li>Cloudflare automatically creates CNAME entries and provisions edge SSL instantly.</li>
                  </ol>
                </div>

                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <strong className="text-slate-900">Vercel Option:</strong>
                  <ol className="list-decimal list-inside mt-1.5 text-xs text-slate-600 space-y-1">
                    <li>Import git repository into Vercel. Framework preset: <strong>Vite</strong>.</li>
                    <li>Go to Project Settings &rarr; Domains &rarr; Add <code className="font-mono font-bold">thenumeralabs.com</code>.</li>
                    <li>Add CNAME to <code className="font-mono text-indigo-600">cname.vercel-dns.com</code>.</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vps' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900">Self-Hosted Linux VPS with Nginx & Certbot</h4>
              <p className="text-sm text-slate-600">
                If deploying on an enterprise Ubuntu/Debian server or on-premise hardware behind your reverse proxy:
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-xs space-y-2 overflow-x-auto">
                <div className="text-slate-400"># 1. Build and run production server</div>
                <div>npm run build</div>
                <div>NODE_ENV=production npm run start &</div>
                <div className="text-slate-400 mt-3"># 2. Sample Nginx server block (/etc/nginx/sites-available/thenumeralabs.com)</div>
                <div className="text-amber-300">server &#123;</div>
                <div className="pl-4">server_name thenumeralabs.com www.thenumeralabs.com;</div>
                <div className="pl-4">location / &#123;</div>
                <div className="pl-8">proxy_pass http://127.0.0.1:3000;</div>
                <div className="pl-8">proxy_set_header Host $host;</div>
                <div className="pl-8">proxy_set_header X-Real-IP $remote_addr;</div>
                <div className="pl-4">&#125;</div>
                <div className="text-amber-300">&#125;</div>
                <div className="text-slate-400 mt-3"># 3. Obtain free SSL certificate via Let&apos;s Encrypt</div>
                <div>sudo certbot --nginx -d thenumeralabs.com -d www.thenumeralabs.com</div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Target Domain: <strong>https://thenumeralabs.com</strong></span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0c1f38] text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

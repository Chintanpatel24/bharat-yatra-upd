
import React, { useState } from 'react';
import { Loader2, Fingerprint, ShieldCheck, QrCode, Cpu, ArrowRight } from 'lucide-react';

const IdentityVault: React.FC = () => {
  const [step, setStep] = useState<'view' | 'verify'>('verify');
  const [docType, setDocType] = useState<'aadhaar' | 'passport' | 'digilocker'>('aadhaar');
  const [idNumber, setIdNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedId, setVerifiedId] = useState('BY-8832-7721');

  const handleVerify = () => {
    if (!idNumber || !fullName) return;
    setIsVerifying(true);
    setTimeout(() => {
      const hash = Math.random().toString(36).substring(2, 10).toUpperCase();
      setVerifiedId(`BY-${hash.slice(0, 4)}-${hash.slice(4, 8)}`);
      setIsVerifying(false);
      setStep('view');
    }, 3500);
  };

  if (step === 'view') {
    return (
      <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-800 p-10 rounded-[3rem] shadow-2xl">
          <div className="flex justify-between items-start mb-12">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-800 flex items-center justify-center rounded-2xl text-white font-black text-2xl italic shadow-lg">BY</div>
              <div>
                <p className="text-[11px] font-black text-orange-500 uppercase tracking-[0.2em] mb-0.5">Global Protocol</p>
                <p className="text-lg font-bold text-white">Verified Travel ID</p>
              </div>
            </div>
            <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full border border-green-500/20 text-xs font-black shadow-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> VERIFIED
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mb-12">
            <div className="w-40 h-52 bg-slate-800 rounded-[2rem] overflow-hidden border-4 border-slate-700 shrink-0">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 space-y-6">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Full Name</p>
                <p className="text-2xl font-black text-white uppercase">{fullName || "ARJUN SHARMA"}</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Cpu className="w-3 h-3 text-orange-500" /> Blockchain Hash
                </p>
                <p className="text-[11px] font-mono font-bold text-slate-400 break-all leading-tight">
                  0x{Math.random().toString(16).substring(2, 40).toUpperCase()}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-10 border-t border-slate-800">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Protocol Number</p>
              <p className="text-2xl font-black text-white tracking-tighter tabular-nums">{verifiedId}</p>
            </div>
            <div className="bg-slate-800 p-3 rounded-2xl border border-slate-700">
              <QrCode className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
        <button onClick={() => setStep('verify')} className="w-full text-slate-500 font-bold text-sm hover:text-white transition-all underline">Update Records</button>
      </div>
    );
  }

  return (
    <div className="max-w-md md:max-w-4xl mx-auto flex flex-col md:flex-row bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500">
      <div className="md:w-1/2 p-8 md:p-12 space-y-8 flex flex-col justify-center">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>security</span>
            </div>
            <span className="text-primary text-sm font-bold tracking-wider uppercase">Secure Verification</span>
          </div>
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight text-left mb-3">Verify Your Identity</h1>
          <p className="text-text-secondary text-base font-normal leading-normal">
            To ensure your safety, we verify your identity using government databases secured by blockchain technology.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-white text-sm font-bold uppercase tracking-wide opacity-80">Select Document Type</h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              { id: 'aadhaar', label: 'Aadhaar Card', sub: 'Recommended for instant verification', icon: 'fingerprint' },
              { id: 'passport', label: 'Passport', sub: 'For international tourists', icon: 'public' },
              { id: 'digilocker', label: 'DigiLocker', sub: 'Connect your govt account', icon: 'cloud_download' },
            ].map((opt) => (
              <label key={opt.id} className={`group relative flex items-center justify-between rounded-xl border p-4 cursor-pointer transition-all ${docType === opt.id ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'border-border-color bg-surface-dark'}`}>
                <div className="flex items-center gap-4">
                  <div className={`flex items-center justify-center size-10 rounded-lg transition-colors ${docType === opt.id ? 'bg-primary text-white' : 'bg-input-bg text-white'}`}>
                    <span className="material-symbols-outlined">{opt.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-base">{opt.label}</span>
                    <span className="text-text-secondary text-xs">{opt.sub}</span>
                  </div>
                </div>
                <div className={`relative flex items-center justify-center size-5 rounded-full border ${docType === opt.id ? 'border-primary bg-primary' : 'border-gray-500'}`}>
                  <input type="radio" name="id_type" checked={docType === opt.id} onChange={() => setDocType(opt.id as any)} className="sr-only" />
                  {docType === opt.id && <span className="material-symbols-outlined text-white" style={{ fontSize: '14px' }}>check</span>}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="md:w-1/2 p-8 md:p-12 bg-slate-900/50 flex flex-col justify-center gap-6">
        <div className="space-y-5">
          <label className="flex flex-col w-full">
            <p className="text-white text-sm font-medium leading-normal pb-2">ID Number</p>
            <input value={idNumber} onChange={(e) => setIdNumber(e.target.value)} className="flex w-full rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-color bg-input-bg focus:border-primary h-14 px-4 text-base transition-all" placeholder="XXXX-XXXX-XXXX" />
          </label>
          <label className="flex flex-col w-full">
            <p className="text-white text-sm font-medium leading-normal pb-2">Full Name (as per ID)</p>
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="flex w-full rounded-xl text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-color bg-input-bg focus:border-primary h-14 px-4 text-base transition-all" placeholder="e.g. Rahul Sharma" />
          </label>
        </div>

        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-start gap-3">
          <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontSize: '20px' }}>lock</span>
          <div className="flex flex-col">
            <span className="text-white text-sm font-semibold">End-to-End Encrypted</span>
            <p className="text-xs text-text-secondary mt-1 leading-relaxed">Your personal data is hashed on the blockchain. We only verify validity without storing details.</p>
          </div>
        </div>

        <button onClick={handleVerify} disabled={isVerifying || !idNumber || !fullName} className="w-full h-14 bg-primary hover:bg-blue-600 disabled:opacity-50 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20">
          {isVerifying ? <Loader2 className="w-6 h-6 animate-spin" /> : <><span>Verify & Continue</span><span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span></>}
        </button>
      </div>
    </div>
  );
};

export default IdentityVault;

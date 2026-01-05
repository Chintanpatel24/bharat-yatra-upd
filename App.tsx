
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  User, 
  Users, 
  MessageSquare, 
  Camera, 
  Radio, 
  Settings as SettingsIcon, 
  Menu, 
  X,
  AlertTriangle,
  LayoutDashboard,
  ImageIcon,
  Radar,
  Moon,
  Sun
} from 'lucide-react';
import { AppView } from './types';
import Dashboard from './components/Dashboard';
import IdentityVault from './components/IdentityVault';
import GroupManager from './components/GroupManager';
import Chatbot from './components/Chatbot';
import VisionAI from './components/VisionAI';
import WalkieTalkie from './components/WalkieTalkie';
import SOSOverlay from './components/SOSOverlay';
import Settings from './components/Settings';
import Gallery from './components/Gallery';
import GeoRadar from './components/GeoRadar';

const Splash: React.FC = () => (
  <div className="fixed inset-0 z-[200] bg-background-dark flex flex-col items-center justify-between p-8 overflow-hidden">
    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1XGO9ArLwo_FLo4se-H4ZcUuX8Ax8x6Yg3rCwKO7gMlABMEeUv9WUMSEGHMF3utp413qx9SQ9NaOyRO99xb3f3dtyfB_e0g4FCNJAoVmzit0hpUyTZ33_ywd_ddY1QbouA3qcZoldogruhsU4DQVBCsMwWQ9B_SvaCwzzKN7prawBpnz_ff2qKrOUb5clSP6cHDnAHfIKGT5-sxiOhbE622pG26p3hXiRWLRCXEQ7QrQTRyl1LkHL_olVtBy7Wms_xj3_QHKvnAE')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-transparent to-background-dark"></div>
    </div>
    <div className="flex-1"></div>
    <div className="relative z-10 flex flex-col items-center gap-8 w-full text-center">
      <div className="relative group">
        <div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="relative h-32 w-32 bg-[#1a2332] rounded-full shadow-2xl flex items-center justify-center border border-slate-800 ring-1 ring-white/5">
          <span className="material-symbols-outlined text-primary text-[4rem]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>shield</span>
          <div className="absolute bottom-6 right-6 bg-primary text-white rounded-full p-1.5 border-[3px] border-[#1a2332] flex items-center justify-center">
            <span className="material-symbols-outlined text-sm font-bold">temple_hindu</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-white text-3xl font-bold tracking-tight mb-2">Bharat Yatra</h1>
        <p className="text-[#92a4c9] text-sm font-normal tracking-wide">Secure Journeys, Timeless Memories</p>
      </div>
      <div className="w-48 mt-8">
        <div className="h-1 w-full rounded-full bg-[#324467] overflow-hidden">
          <div className="h-full rounded-full bg-primary animate-[shimmer_2s_infinite]" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
    <div className="flex-1 flex flex-col items-center justify-end pb-8">
      <div className="flex items-center gap-4 text-primary/80 opacity-60">
        <span className="material-symbols-outlined text-xl">psychology</span>
        <span className="material-symbols-outlined text-xl">link</span>
        <span className="material-symbols-outlined text-xl">health_and_safety</span>
      </div>
      <p className="text-[#92a4c9] text-[10px] font-medium tracking-[0.2em] uppercase mt-3">AI • Blockchain • Safety</p>
    </div>
    <style>{`
      @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
    `}</style>
  </div>
);

const App: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSOS, setShowSOS] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSplashVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  if (isSplashVisible) return <Splash />;

  const primaryNav = [
    { id: AppView.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: AppView.IDENTITY, label: 'Identity Vault', icon: User },
    { id: AppView.GROUPS, label: 'My Yatra Group', icon: Users },
    { id: AppView.CHATBOT, label: 'AI Assistant', icon: MessageSquare },
  ];

  const overflowNav = [
    { id: AppView.RADAR, label: 'Geo-Radar', icon: Radar },
    { id: AppView.GALLERY, label: 'Heritage Gallery', icon: ImageIcon },
    { id: AppView.VISION, label: 'Vision AI', icon: Camera },
    { id: AppView.SETTINGS, label: 'Settings', icon: SettingsIcon },
  ];

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD: return <Dashboard setView={setCurrentView} />;
      case AppView.IDENTITY: return <IdentityVault />;
      case AppView.GROUPS: return <GroupManager />;
      case AppView.CHATBOT: return <Chatbot location={null} />;
      case AppView.VISION: return <VisionAI />;
      case AppView.WALKIE_TALKIE: return <WalkieTalkie />;
      case AppView.SETTINGS: return <Settings isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />;
      case AppView.GALLERY: return <Gallery />;
      case AppView.RADAR: return <GeoRadar />;
      default: return <Dashboard setView={setCurrentView} />;
    }
  };

  return (
    <div className={`flex h-screen overflow-hidden transition-colors duration-500 bg-background-dark`}>
      {/* Side Nav for Desktop */}
      <aside className="hidden lg:flex flex-col w-72 border-r border-slate-800 bg-slate-900 z-30 shrink-0">
        <div className="p-8 flex items-center gap-3">
          <div className="bg-primary p-2.5 rounded-xl">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-white">Bharat Yatra</span>
        </div>
        <nav className="flex-1 px-4 space-y-1.5 mt-4">
          {primaryNav.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                currentView === item.id ? 'bg-primary/10 text-primary border border-primary/20' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-bold">{item.label}</span>
            </button>
          ))}
          <div className="pt-8 px-5 mb-2 text-[10px] font-black text-slate-500 uppercase tracking-widest">Resources</div>
          {overflowNav.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${
                currentView === item.id ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="sticky top-0 z-20 flex items-center justify-between px-6 lg:px-10 py-5 border-b border-slate-800 bg-background-dark/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold capitalize text-white">{currentView.replace('-', ' ')}</h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-3 rounded-2xl bg-slate-800 text-yellow-400">
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button onClick={() => setIsMenuOpen(true)} className="p-3 rounded-2xl bg-slate-800 text-slate-400 lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-10">
          {renderView()}
        </main>

        <footer className="lg:hidden fixed bottom-6 left-6 right-6 z-40 h-20 bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] flex items-center px-4">
           <div className="flex-1 flex justify-around">
            {primaryNav.slice(0, 2).map((item) => (
              <button key={item.id} onClick={() => setCurrentView(item.id)} className={`p-3 rounded-2xl ${currentView === item.id ? 'text-primary' : 'text-slate-500'}`}>
                <item.icon className="w-6 h-6" />
              </button>
            ))}
          </div>
          <div className="flex justify-center -mt-10 mx-4 shrink-0">
            <button onClick={() => setShowSOS(true)} className="w-20 h-20 bg-red-600 rounded-full text-white flex items-center justify-center border-8 border-background-dark shadow-2xl animate-pulse">
              <AlertTriangle className="w-10 h-10" />
            </button>
          </div>
          <div className="flex-1 flex justify-around">
            {primaryNav.slice(2, 4).map((item) => (
              <button key={item.id} onClick={() => setCurrentView(item.id)} className={`p-3 rounded-2xl ${currentView === item.id ? 'text-primary' : 'text-slate-500'}`}>
                <item.icon className="w-6 h-6" />
              </button>
            ))}
          </div>
        </footer>
      </div>

      {showSOS && <SOSOverlay onClose={() => setShowSOS(false)} />}
    </div>
  );
};

export default App;

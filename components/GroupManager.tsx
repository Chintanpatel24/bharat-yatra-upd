
import React from 'react';

const GroupManager: React.FC = () => {
  const members = [
    { name: 'Priya', distance: '200m', steps: '5.2k', status: 'online', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJdDb3EghqUh0rsj5egI3U7q5WT5E2O22hzh6ILF3uVwlgOgHp9yU9cmvGjbZ9gYXd8znPTuDpxvzmtf4ZQVVdfuUnJAdAcj-gvyNWVrDKg2jdgHQJOJ9wAhW4oJ5Emqd3IrjR9fpl1YPJ1PRuSjyASUPNQMNfiFe0r_F8ubEBGoueEy5ADQpYsQZWpvE303xDx6sZMqdbodELxrVDe4qY6jP_dzsLy2prO-n_qiCj7s9tfL2URKyMDt9edI6LSgjbZ6_nbPfWKiQ" },
    { name: 'Amit', distance: '1.2km', steps: '3.1k', status: 'away', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5VwCJmHmaRfhBCvR88v8SwuHFDf5OYeFbG-dyMd-vbSggdzxWqlKf9JIuUtk4O92y23VevGsOs9GAYBPPpG5XD0UkHpRPgnU_bb2Nm-a4mfw8zgLk4bmt_5vorp75KGEDhR-aYauLiPKSc8jPRowFImI-ll5oEOyb4yhhGFz1NAMn7EVxTFFjts6rVMVBXFio_tSXFxl6oieQiLhHGfyP4ZCdf9VhNyW1WXWmyDE-_wfijV72zJVJdoIASLzFaD1dEjlWO6WbBuU" },
    { name: 'Sarah', distance: '50m', steps: '8.9k', status: 'online', img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQOqQPT6LhdgYE5Lde7OAlc25yT4YEqrlhKm-5fz86Lg_R7fPll2DeXHSDHHTwSNkNCpBBUcQ6jN6JEE6t1JrN-MvhBPNun97AzRZixD6RN3hrgLt28TZr7Ms32pJ0RYrWhTYw9Hqu6K0Sm8MfO4nX5NJwL8GxosPC9hfa-xUS59AePdB6VUZp9Fqd1iZRiGJ56L7pcpvu5Ov-_tUFAmeS39sOGnX64zQQuEszytvurgBbVZlZXLKUBi9OgGpTBsjCtMOIcUy7rwY" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      <header className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="size-12 rounded-full bg-cover bg-center ring-2 ring-primary/20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8MRPb8F1ewheByZSm8x4miwtgGsebcL4NjglSjpUtCK_i4VaaSAUzYg8oBPU5QG1Yednnp9OjWxsgJzFAl-Aig875epK9u4P15bF_VMuvqXj9cEuxtI1VjKomyYusYZKDSNaI32ZjaR7lXrCkA5VG3ldNwGXAc-I5KgMGD27UtR2bvwCutxKs3O_168V2DX-pJ9_PTotClxCw8Htu2UB8mgJ2wv-G3ntRWN1anT3Ncf-Fw5wGhnREly195T1TkuIabB8TipD4Eq8')" }}></div>
              <div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-background-dark"></div>
            </div>
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Group Admin</p>
              <h1 className="text-xl font-bold text-white leading-tight">Namaste, Rahul</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#1e2738] px-3 py-1.5 rounded-full border border-slate-700">
            <span className="material-symbols-outlined text-primary text-[16px]">fingerprint</span>
            <p className="text-[#92a4c9] text-xs font-mono font-bold tracking-wide">BY-8932</p>
          </div>
        </div>

        <div className="flex items-center justify-between bg-[#192233] p-4 rounded-2xl shadow-sm border border-[#2d3a54]">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-lg bg-[#232f48] text-primary size-10">
              <span className="material-symbols-outlined">share_location</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white mb-1">Live Tracking</p>
              <p className="text-xs text-slate-400">Visible to group & authorities</p>
            </div>
          </div>
          <label className="relative flex items-center cursor-pointer">
            <input type="checkbox" checked className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </header>

      <div className="relative overflow-hidden rounded-3xl bg-[#192233] border border-[#2d3a54] p-6">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQjTBuCt8NX21Vk3HJrt4JtpXqEKm0r0ht1lsNJBEQR_0XkoIfOfOnEmi2i7xBWKCvnD51UHHHc60UDJQ07-zmy6yCEl9QtG272yw23oCJIa5vauhdeXbvhQ7eckDATeWvVYX8g9v0Z1reQWTEGMlt-4EkaUGg2K2E293Ynp3d2w3xv6G6f-H_8Eq8VeiAdNsli7Pmy4hzNUeUXEv2jAR6lA3qoqO5JXugaMQ-yDEid1dSZAjlhZ8c2rOV3hxJZm0ngYiDb1H8Va4')" }}></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-[#92a4c9] text-xs font-bold uppercase tracking-wider mb-2">Current Zone Status</h3>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-green-500 fill-1 text-3xl">verified_user</span>
              <span className="text-3xl font-black text-white">Safe Zone</span>
            </div>
          </div>
          <div className="bg-green-900/30 text-green-400 px-5 py-2 rounded-xl text-sm font-bold border border-green-800">
            Level 1 Protection
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white tracking-tight">My Yatra Group</h3>
          <button className="text-primary text-sm font-bold">Manage</button>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x">
          {members.map((member, idx) => (
            <div key={idx} className="snap-start flex flex-col items-center justify-between p-6 rounded-[2rem] bg-[#1e2738] min-w-[180px] border border-[#2d3a54] shadow-xl">
              <div className="flex flex-col items-center gap-3 w-full">
                <div className="relative">
                  <div className="size-16 rounded-full bg-cover bg-center border-2 border-[#2d3a54]" style={{ backgroundImage: `url("${member.img}")` }}></div>
                  <div className={`absolute bottom-0 right-0 size-4 rounded-full border-4 border-[#1e2738] ${member.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                </div>
                <div className="text-center w-full">
                  <p className="text-white font-black text-lg truncate">{member.name}</p>
                  <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mt-1 font-bold">
                    <span className="material-symbols-outlined text-[14px]">near_me</span> {member.distance}
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-slate-700 my-4"></div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-center opacity-60">
                  <span className="material-symbols-outlined text-[16px]">footprint</span>
                  <span className="text-[10px] font-mono font-bold tracking-widest">{member.steps}</span>
                </div>
                <button className="size-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </button>
              </div>
            </div>
          ))}
          <div className="snap-start flex flex-col items-center justify-center p-6 rounded-[2rem] bg-slate-800/30 min-w-[120px] border-2 border-dashed border-[#2d3a54] group cursor-pointer hover:bg-slate-800 transition-all">
            <div className="size-12 rounded-full bg-[#232f48] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-slate-500">add</span>
            </div>
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Invite</p>
          </div>
        </div>
      </div>

      <button className="relative w-full overflow-hidden rounded-[2.5rem] bg-red-600 h-24 shadow-2xl active:scale-[0.98] transition-all group">
        <div className="absolute inset-0 bg-red-600 animate-pulse opacity-30"></div>
        <div className="relative flex items-center justify-between px-8 h-full z-10">
          <div className="flex items-center gap-5">
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm animate-bounce">
              <span className="material-symbols-outlined text-white text-[40px]">sos</span>
            </div>
            <div className="text-left text-white">
              <p className="text-2xl font-black tracking-widest">SOS ALERT</p>
              <p className="text-red-100 text-xs font-bold uppercase tracking-wider">Long press 3s for police</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-white/60 text-4xl group-hover:translate-x-2 transition-transform">keyboard_double_arrow_right</span>
        </div>
      </button>
    </div>
  );
};

export default GroupManager;

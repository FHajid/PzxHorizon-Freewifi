import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import LogoPzx from '../assets/logo-Pzx.png'; // Pastikan path logo kamu sudah benar

export default function Home() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Begitu form disubmit, langsung lempar ke halaman sukses login
    navigate('/login-success');
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#060910] px-4 overflow-hidden antialiased">
      
      {/* BACKGROUND DEKORASI: Lampu Sorot Ambient Khas PZX */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e2a862]/[0.03] blur-[120px]" />
      <div className="absolute -top-40 -right-40 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/[0.02] blur-[100px]" />

      {/* BRANDING LOGO DI ATAS BOX LOGIN */}
      <div className="mb-8 flex flex-col items-center gap-2 animate-fade-in text-center">
        <img src={LogoPzx} alt="PZX Horizon Logo" className="h-10 w-auto" />
        <div className="flex flex-col">
          <span className="text-base font-bold tracking-[0.25em] text-white leading-none">PZX HORIZON</span>
          <span className="text-[10px] tracking-wider text-gray-500 font-semibold uppercase mt-1">
            Coastal Connectivity Specialists
          </span>
        </div>
      </div>

      {/* BOX FORM LOGIN PREMIUM (GLASSMORPHISM) */}
      <div className="w-full max-w-md rounded-2xl border border-white/5 bg-[#0b111e]/40 p-8 shadow-2xl backdrop-blur-md">
        
        {/* JUDUL PORTAL */}
        <div className="mb-6 text-left">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#e2a862] uppercase block mb-1">
             Secure Access
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Vessel Login Portal
          </h2>
          <p className="text-xs text-gray-400 font-medium mt-1">
            Enter your credentials to connect with your coastal network.
          </p>
        </div>

        {/* FORM LOGIN */}
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          
          {/* USERNAME / EMAIL INPUT */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Vessel ID / Email
            </label>
            <input 
              type="text" 
              placeholder="e.g., captain@horizon-01"
              disabled
              value="captain@pzx-horizon.com" // Diisi otomatis biar tinggal klik
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-xs text-gray-400 cursor-not-allowed focus:outline-none"
            />
          </div>

          {/* PASSWORD INPUT */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Passcode
            </label>
            <input 
              type="password" 
              value="••••••••••••"
              disabled
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-xs text-gray-400 cursor-not-allowed focus:outline-none"
            />
          </div>

          {/* SIMULATE ACTION BUTTON */}
          <div className="pt-2">
            <button 
              type="submit"
              className="w-full bg-[#e2a862] hover:bg-[#d49953] text-[#060910] font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-lg shadow-[#e2a862]/5 transition-all duration-200 active:scale-[0.98]"
            >
              Simulate Secure Login →
            </button>
          </div>

        </form>
      </div>

      {/* FOOTER NOTE KECIL */}
      <div className="mt-8 text-center">
        <p className="text-[10px] font-medium text-gray-600 tracking-wide">
          PZX Horizon Communications © 2026. All systems calibrated.
        </p>
      </div>

    </div>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#060910] text-center px-4 overflow-hidden antialiased">
      
      {/* KONTEN UTAMA SUKSES */}
      <div className="h-16 w-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-4 border border-green-500/20 text-2xl">
        ✓
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">Login Successful!</h1>
      <p className="text-sm text-gray-400 max-w-sm mb-6 leading-relaxed">
        Welcome back, Captain. Your dashboard and vessel metrics are now calibrated and ready.
      </p>
      
      {/* ==========================================================
          [TEMPAT KODE BARU KAMU] 
          Silakan selipkan komponen atau element baru di dalam div ini.
          Jarak atas-bawah sudah diatur aman dengan py-8.
          ========================================================== */}
      <div className="w-full max-w-md py-8 my-2 border border-dashed border-white/5 rounded-2xl bg-white/[0.01]">
        
        {/* 
            👉 TARUH KODE BARU KAMU DI SINI 
            Contoh: <AeroSphereShowcase /> atau <MaterialInventory /> 
        */}
        <p className="text-[11px] font-mono text-gray-600 tracking-widest uppercase animate-pulse">
          [ INSERT YOUR CODE/PASSWORD/QR CODE HERE ]
        </p>

      </div>
      {/* ========================================================== */}


      {/* ==========================================================
          3 LINK UTAMA DI ATAS
          ========================================================== */}
      <div className="mt-4 mb-8 w-full max-w-md">
        <span className="text-[10px] font-mono font-bold tracking-widest text-[#e2a862] uppercase block mb-3 text-center">
          Main Resources
        </span>
        <div className="grid grid-cols-3 gap-3">
          <a 
            href="https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card" 
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 rounded-xl border border-white/5 bg-[#0b111e]/40 hover:border-[#e2a862]/30 hover:bg-white/5 transition-all text-xs font-semibold text-white tracking-wide"
          >
            Singapore Arrival
          </a>
          <a 
            href="https://allindonesia.imigrasi.go.id/" 
            className="block p-3 rounded-xl border border-white/5 bg-[#0b111e]/40 hover:border-[#e2a862]/30 hover:bg-white/5 transition-all text-xs font-semibold text-white tracking-wide"
            target="_blank"
            rel="noopener noreferrer"
          >
            Indonesia Arrival
          </a>
          <a 
            href="https://www.imi.gov.my/index.php/en/pengumuman/malaysia-digital-arrival-card-mdac//" 
            className="block p-3 rounded-xl border border-white/5 bg-[#0b111e]/40 hover:border-[#e2a862]/30 hover:bg-white/5 transition-all text-xs font-semibold text-white tracking-wide"
            target="_blank"
            rel="noopener noreferrer"
          >

            Malaysia Arrival
          </a>
        </div>
      </div>

      {/* TOMBOL UTAMA KEMBALI */}
      <button 
        onClick={() => navigate('/')}
        className="text-xs font-bold uppercase tracking-widest text-[#e2a862] hover:text-[#d49953] transition-colors py-2 px-4 rounded-lg border border-[#e2a862]/10 bg-[#e2a862]/5 hover:bg-[#e2a862]/10"
      >
        ← Back to Portal
      </button>

      {/* ==========================================================
          2 LINK TAMBAHAN DI BAWAH
          ========================================================== */}
      <div className="mt-10 pt-4 border-t border-white/5 w-full max-w-xs flex justify-center gap-6">
        <a 
          href="#link-4" 
          className="text-[11px] text-gray-500 hover:text-gray-300 font-medium transition-colors hover:underline"
        >
          Network Support
        </a>
        <a 
          href="#link-5" 
          className="text-[11px] text-gray-500 hover:text-gray-300 font-medium transition-colors hover:underline"
        >
          Privacy Policy
        </a>
      </div>

    </div>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoPzx from '../assets/logo-Pzx.png'; // Path logo tetap sama

export default function LoginSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#191628] text-center px-4 overflow-hidden antialiased">
      
      {/* WRAPPER UTAMA */}
      <div className="w-full max-w-md flex flex-col items-center space-y-16">
        
        {/* KONTEN UTAMA SUKSES */}
        <div className="flex flex-col items-center gap-2 text-center w-full max-w-[350px]">
          <img src={LogoPzx} alt="PZX Horizon Logo" className="h-18 w-auto mb-2" />
          <div className="flex flex-col space-y-1">
            <h1 className="text-xl font-medium tracking-wide text-white leading-none">
              Welcome to PZXHorizon Network
            </h1>
          </div>
        </div>

        {/* STATUS INDIKATOR (🛠️ mt-24 diganti ke mt-2 agar jaraknya padat & ideal) */}
        <div className="flex flex-col items-center mt-28">
          <div className="h-16 w-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-3 border border-green-500/20 text-2xl">
            ✓
          </div>
          <h1 className="text-2xl font-bold text-white">Login Successful!</h1>
        </div>

        {/* GRID TOMBOL ARRIVAL */}
        <div className="w-full pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a 
              href="https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card" 
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3.5 rounded-xl border border-white/5 bg-[#0b111e]/40 hover:bg-[#1E7F4E] transition-all text-xs font-semibold text-white tracking-wide text-center mx-16 sm:mx-0"
            >
              Singapore Arrival
            </a>
            <a 
              href="https://allindonesia.imigrasi.go.id/" 
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3.5 rounded-xl border border-white/5 bg-[#0b111e]/40 hover:bg-[#1E7F4E] transition-all text-xs font-semibold text-white tracking-wide text-center mx-16 sm:mx-0"
            >
              Indonesia Arrival
            </a>
            <a 
              href="https://www.imi.gov.my/index.php/en/pengumuman/malaysia-digital-arrival-card-mdac//" 
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3.5 rounded-xl border border-white/5 bg-[#0b111e]/40 hover:bg-[#1E7F4E] transition-all text-xs font-semibold text-white tracking-wide text-center mx-16 sm:mx-0"
            >
              Malaysia Arrival
            </a>
          </div>
        </div>

      </div>

      {/* FOOTER NOTE (Posisi di luar wrapper utama agar konsisten di paling bawah) */}
      <div className="mt-12 text-center max-w-xs">
        <p className="text-[10px] font-medium text-gray-500 tracking-wide leading-relaxed">
          © 2026 PZXHorizon. All rights reserved. Unauthorized use of this network is strictly prohibited.
        </p>
      </div>

    </div>
  );
}
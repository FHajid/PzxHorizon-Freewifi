import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import LogoPzx from '../assets/logo-Pzx.png'; // Path logo tetap sama

export default function Home() {
  const navigate = useNavigate(); 

  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFreeLogin = () => {
    if (isChecked) {
      navigate('/login-success');
    }
  };

  const handlePremiumLogin = () => {
    navigate('/login-success');
  };

  return (
    // 🎨 BG DIGANTI: Menggunakan base obsidian-purple (#12111A) sesuai image_0a22ff.jpg
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#191628] px-4 overflow-hidden antialiased">
      
      {/* BACKGROUND DEKORASI: Disesuaikan dengan pendaran ungu & gold tipis */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4bc96]/[0.02] blur-[120px]" />
      <div className="absolute -top-40 -right-40 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/[0.02] blur-[100px]" />

      {/* BRANDING LOGO */}
      <div className="flex flex-col items-center gap-2 mt-44 text-center w-[350px]">
        <img src={LogoPzx} alt="PZX Horizon Logo" className="h-18 w-auto mb-2" />
        <div className="flex flex-col space-y-1">
          <h1 className="text-xl font-medium tracking-wide text-white leading-none">
            Welcome to PZXHorizon Network
          </h1>
          <span className="text-[10px] tracking-widest text-gray-500 font-semibold  pt-1">
            Please Enter your Credentials to Access the Internet.for assistance, contact the ship's IT department.
          </span>
        </div>
      </div>

      {/* BOX PORTAL LOGIN (GLASSMORPHISM DEEPER TINT) */}
      <div className="w-full max-w-sm rounded-2xl mt-auto  p-6  ">
        {/* AREA TOMBOL LOGIN */}
        <div className="space-y-4">
          
          {/* TOMBOL 1: FREE WI-FI LOGIN (🎨 SEKARANG MENGGUNAKAN EMERALD GREEN SAAT ACTIVE) */}
          <button 
            onClick={handleFreeLogin}
            disabled={!isChecked}
            className={`w-full font-semibold text-xs tracking-wider py-3.5 rounded-xl transition-all duration-200 
              ${isChecked 
                ? 'bg-[#1E7F4E] text-white shadow-lg shadow-[#1E7F4E]/10 hover:bg-[#17663e] active:scale-[0.98] cursor-pointer' 
                : 'bg-white/5 text-gray-500 border border-white/5 cursor-not-allowed'
              }`}
          >
            Free Wi-Fi Login
          </button>

        </div>

        {/* AREA CHECKBOX & TERMS (🎨 AKSEN LINK DIUBAH KE HIJAU SEPERTI DI IMAGE) */}
        <div className="mt-6 flex items-start gap-2.5 text-left border-t border-white/5 pt-4">
          <input 
            type="checkbox" 
            id="terms"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="mt-0.5 h-3.5 w-3.5 accent-[#1E7F4E] bg-transparent border-white/20 rounded cursor-pointer"
          />
          <label htmlFor="terms" className="text-[11px] text-gray-400 leading-tight cursor-pointer select-none">
            I agree to the{' '}
            <button 
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-[#1E7F4E] underline hover:text-[#17663e] transition-colors font-medium focus:outline-none"
            >
              Terms & Conditions
            </button>{' '}
            for coastal connectivity service.
          </label>
        </div>

      </div>

      {/* FOOTER NOTE KECIL */}
      <div className="mt-8 mb-9 text-center max-w-xs">
        <p className="text-[10px] font-medium text-gray-500 tracking-wide leading-relaxed">
          © 2026 PZXHorizon. All rights reserved. Unauthorized use of this network is strictly prohibited.
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
          
          {/* Box Utama Modal (Ditambahkan `.animate-modal-pop` untuk efek transisi) */}
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#181622] p-6 sm:p-7 shadow-2xl text-left animate-modal-pop">
            
            {/* Header Modal */}
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#d4bc96] uppercase block mb-0.5">
                  Legal Policy
                </span>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Terms & Conditions
                </h3>
              </div>
              {/* Tombol X Kecil di sudut kanan atas untuk menutup */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Konten Aturan (Lineup diatur rapi menggunakan struktur flex) */}
            <div className="max-h-60 overflow-y-auto pr-2 space-y-4 text-xs text-gray-400 font-medium leading-relaxed scrollbar-thin">
              
              {/* Poin 1 */}
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-mono font-bold text-[#1E7F4E] bg-[#1E7F4E]/10 px-1.5 py-0.5 rounded mt-0.5 shrink-0">
                  01
                </span>
                <p className="text-gray-300">
                  By connecting to PZX Horizon Wi-Fi, you agree to comply with our fair usage policies within coastal boundary limits.
                </p>
              </div>

              {/* Poin 2 */}
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-mono font-bold text-[#1E7F4E] bg-[#1E7F4E]/10 px-1.5 py-0.5 rounded mt-0.5 shrink-0">
                  02
                </span>
                <p className="text-gray-300">
                  The free connectivity tier offers limited bandwidth tailored for basic messaging and standard vessel logging operations.
                </p>
              </div>

              {/* Poin 3 */}
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-mono font-bold text-[#1E7F4E] bg-[#1E7F4E]/10 px-1.5 py-0.5 rounded mt-0.5 shrink-0">
                  03
                </span>
                <p className="text-gray-300">
                  PZX Horizon holds no responsibility for temporary signal interference caused by offshore weather conditions or structural obstacles.
                </p>
              </div>

              {/* Poin 4 */}
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-mono font-bold text-[#1E7F4E] bg-[#1E7F4E]/10 px-1.5 py-0.5 rounded mt-0.5 shrink-0">
                  04
                </span>
                <p className="text-gray-300">
                  Users are prohibited from using the network for malicious activities or unauthorized high-volume data streaming on the free tier.
                </p>
              </div>

            </div>

            {/* Tombol Tutup (Menggunakan warna tema Emerald Green biar sinkron) */}
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:w-auto bg-[#1E7F4E] hover:bg-[#17663e] text-white font-semibold text-xs tracking-wider px-6 py-2.5 rounded-xl transition-all duration-200 active:scale-[0.98]"
              >
                Understood & Accept
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
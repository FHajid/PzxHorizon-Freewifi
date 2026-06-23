import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import LogoPzx from '../assets/logo-Pzx.png'; // Pastikan path logo kamu sudah benar

export default function Home() {
  const navigate = useNavigate(); 

  // State untuk melacak checkbox dan popup modal
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi navigasi saat sukses login
  const handleFreeLogin = () => {
    if (isChecked) {
      navigate('/login-success');
    }
  };

  const handlePremiumLogin = () => {
    // Premium login bisa langsung masuk atau diarahkan ke halaman pembayaran/login premium
    navigate('/login-success');
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#060910] px-4 overflow-hidden antialiased">
      
      {/* BACKGROUND DEKORASI: Lampu Sorot Ambient Khas PZX */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e2a862]/[0.03] blur-[120px]" />
      <div className="absolute -top-40 -right-40 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/[0.02] blur-[100px]" />

      {/* BRANDING LOGO DI ATAS BOX LOGIN */}
      <div className="mb-10 flex flex-col items-center gap-2 text-center"> {/* mb-8 dinaikkan ke mb-10 biar ada jarak ke box */}
        <img src={LogoPzx} alt="PZX Horizon Logo" className="h-12 w-auto mb-2" /> {/* Logo sedikit diperbesar dan dikasih mb-2 */}
        <div className="flex flex-col space-y-1"> {/* Dikasih space-y-1 biar teks atas-bawah gak terlalu rapat */}
          <span className="text-lg font-bold tracking-[0.3em] text-white leading-none">PZX HORIZON</span>
          <span className="text-[10px] tracking-widest text-gray-400 font-semibold uppercase">
            Coastal Connectivity Specialists
          </span>
          {/* TEKS TAMBAHAN BARU DI BAWAH LOGO UTAMA */}
          <span className="text-[11px] text-[#e2a862] font-medium tracking-wide pt-1 block">
            • Marine Wi-Fi Network Active •
          </span>
        </div>
      </div>

      {/* BOX PORTAL LOGIN (GLASSMORPHISM) */}
      <div className="w-full max-w-sm rounded-2xl border border-white/5 bg-[#0b111e]/40 p-6 shadow-2xl backdrop-blur-md">
        
        {/* JUDUL PORTAL */}
        <div className="mb-8 text-center"> {/* Jarak judul ke tombol dinaikkan ke mb-8 biar seimbang */}
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#e2a862] uppercase block mb-1.5">
            Wi-Fi Access
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Choose Your Connection
          </h2>
          {/* TEKS TAMBAHAN BARU DI DALAM BOX */}
          <p className="text-xs text-gray-400 mt-2 font-medium max-w-[280px] mx-auto leading-relaxed">
            Please select a connection tier below to activate your internet session.
          </p>
        </div>

        {/* AREA TOMBOL LOGIN */}
        <div className="space-y-4">
          
          {/* TOMBOL 1: FREE WI-FI LOGIN (Terkunci jika tidak dicentang) */}
          <button 
            onClick={handleFreeLogin}
            disabled={!isChecked}
            className={`w-full font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all duration-200 
              ${isChecked 
                ? 'bg-[#e2a862] text-[#060910] shadow-lg shadow-[#e2a862]/10 active:scale-[0.98] cursor-pointer' 
                : 'bg-white/5 text-gray-500 border border-white/5 cursor-not-allowed'
              }`}
          >
            Free Wi-Fi Login
          </button>

          {/* TOMBOL 2: PREMIUM LOGIN */}
          <button 
            onClick={handlePremiumLogin}
            className="w-full bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98]"
          >
            Premium Login
          </button>

        </div>

        {/* AREA CHECKBOX & TERMS AND CONDITIONS */}
        <div className="mt-6 flex items-start gap-2.5 text-left border-t border-white/5 pt-4">
          <input 
            type="checkbox" 
            id="terms"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="mt-0.5 h-3.5 w-3.5 accent-[#e2a862] bg-transparent border-white/20 rounded cursor-pointer"
          />
          <label htmlFor="terms" className="text-[11px] text-gray-400 leading-tight cursor-pointer select-none">
            I agree to the{' '}
            <button 
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-[#e2a862] underline hover:text-[#d49953] transition-colors font-medium focus:outline-none"
            >
              Terms and Conditions
            </button>{' '}
            for coastal connectivity service.
          </label>
        </div>

      </div>

      {/* FOOTER NOTE KECIL */}
      <div className="mt-8 text-center">
        <p className="text-[10px] font-medium text-gray-600 tracking-wide">
          PZX Horizon Communications © 2026. All systems calibrated.
        </p>
      </div>


      {/* ==========================================
          POPUP MODAL (TERMS AND CONDITIONS)
          ========================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          {/* Isi Box Popup */}
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0d1524] p-6 shadow-2xl text-left">
            
            {/* Header Popup */}
            <h3 className="text-base font-bold text-white mb-3">
              Terms & Conditions
            </h3>
            
            {/* Konten Aturan (Bisa di-scroll kalau panjang) */}
            <div className="max-h-48 overflow-y-auto pr-1 text-xs text-gray-400 space-y-2 font-medium scrollbar-thin">
              <p>1. By connecting to PZX Horizon Wi-Fi, you agree to comply with our fair usage policies within coastal boundary limits.</p>
              <p>2. The free connectivity tier offers limited bandwidth tailored for basic messaging and standard vessel logging operations.</p>
              <p>3. PZX Horizon holds no responsibility for temporary signal interference caused by offshore weather conditions or structural obstacles.</p>
              <p>4. Users are prohibited from using the network for malicious activities or unauthorized high-volume data streaming on the free tier.</p>
            </div>

            {/* Tombol Tutup Popup */}
            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-colors"
              >
                Understood
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
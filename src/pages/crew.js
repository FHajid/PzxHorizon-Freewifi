import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import LogoPzx from '../assets/logo-Pzx.png'; 

export default function Home() {
  const navigate = useNavigate(); 
   const [showPassword, setShowPassword] = useState(false);

  // State dasar
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State Tambahan untuk Fitur Crew Login
  const [showCrewInput, setShowCrewInput] = useState(false);
  const [crewCode, setCrewCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const crewLogin = () => {
    if (isChecked) {
      setShowCrewInput(true);
    }
  };

  // Fungsi memvalidasi Kode Kru
  const handleCrewSubmit = (e) => {
    e.preventDefault();
    
    // Contoh password/code kru yang simpel
    if (crewCode === 'CREW123') {
      setErrorMessage('');
      navigate('/login-success'); // Redirect jika sukses
    } else {
      setErrorMessage('Invalid Crew Access Code!');
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#060910] px-4 overflow-hidden antialiased">
      
      {/* BACKGROUND DEKORASI */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e2a862]/[0.03] blur-[120px]" />
      <div className="absolute -top-40 -right-40 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/[0.02] blur-[100px]" />

      {/* BRANDING LOGO */}
      <div className="mb-10 flex flex-col items-center gap-2 text-center">
        <img src={LogoPzx} alt="PZX Horizon Logo" className="h-12 w-auto mb-2" />
        <div className="flex flex-col space-y-1">
          <span className="text-lg font-bold tracking-[0.3em] text-white leading-none">PZX HORIZON</span>
          <span className="text-[10px] tracking-widest text-gray-400 font-semibold uppercase">
            Coastal Connectivity Specialists
          </span>
          <span className="text-[11px] text-[#e2a862] font-medium tracking-wide pt-1 block">
            • Crew Network Dashboard •
          </span>
        </div>
      </div>

      {/* BOX PORTAL LOGIN */}
      <div className="w-full max-w-sm rounded-2xl border border-white/5 bg-[#0b111e]/40 p-6 shadow-2xl backdrop-blur-md">
        
        <div className="mb-8 text-center">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#e2a862] uppercase block mb-1.5">
            Vessel Wi-Fi
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight">
            {showCrewInput ? 'Crew Authentication' : 'Choose Your Connection'}
          </h2>
          <p className="text-xs text-gray-400 mt-2 font-medium max-w-[280px] mx-auto leading-relaxed">
                {showCrewInput ? (
                    <>
                    {/* Deskripsi Utama */}
                    <span>Enter your authorized operational security pass to unlock full network privileges.</span>
                    
                    {/* Label Petunjuk Password yang Dipisah */}
                    <span className="block mt-3 text-[10px] font-mono text-[#e2a862]/80 bg-[#060910] py-1 px-2 rounded-md border border-white/5 tracking-wider">
                        SYSTEM HINT: PASS = CREW123
                    </span>
                    </>
                ) : (
                    'Please select a connection tier below to activate your internet session.'
                )}
        </p>
        </div>

        {/* KONDISI : JIKA TOMBOL CREW DIKLIK (MUNCUL INPUT BOX) */}
        {showCrewInput ? (
          <form onSubmit={handleCrewSubmit} className="space-y-4">
    <div>
      {/* Wrapper Input dengan Posisi Kursor Relative */}
      <div className="relative flex items-center">
        <input 
          // Tipe input berubah dinamis tergantung state showPassword
          type={showPassword ? "text" : "password"}
          placeholder="Enter CODE CREW123"
          value={crewCode}
          onChange={(e) => setCrewCode(e.target.value)}
          className="w-full bg-[#060910] border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#e2a862] transition-colors text-center font-mono tracking-widest"
          autoFocus
        />
        
        {/* Tombol Toggle View/Hide Password */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 p-1 text-gray-500 hover:text-gray-300 transition-colors focus:outline-none select-none text-[11px] font-bold uppercase tracking-wider"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      
      {errorMessage && (
        <p className="text-[11px] text-red-400 mt-1.5 text-center font-medium">
          ⚠️ {errorMessage}
        </p>
      )}
    </div>

    <div className="flex gap-2 pt-2">
      <button 
        type="button"
        onClick={() => { 
          setShowCrewInput(false); 
          setErrorMessage(''); 
          setShowPassword(false); // Reset mata jadi tertutup saat back
        }}
        className="w-1/3 bg-white/5 border border-white/5 hover:bg-white/10 text-gray-400 font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all"
      >
        Back
      </button>
      <button 
        type="submit"
        className="w-2/3 bg-[#e2a862] text-[#060910] font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg shadow-[#e2a862]/10 active:scale-[0.98]"
      >
        Verify Code
      </button>
    </div>
  </form>
  ) : (
          /* KONDISI: TAMPILAN MENU UTAMA UTK TAMU / NORMAL */
          <div className="space-y-4">
            

            {/* TOMBOL KHUSUS CREW */}
            <button 
              onClick={crewLogin}
              disabled={!isChecked}
              className={`w-full font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all duration-200 
                ${isChecked 
                  ? 'bg-[#e2a862] text-[#060910] shadow-lg shadow-[#e2a862]/10 active:scale-[0.98] cursor-pointer' 
                  : 'bg-white/5 text-gray-500 border border-white/5 cursor-not-allowed'
                }`}
            >
               Crew Access Only
            </button>

          </div>
        )}

        {/* AREA CHECKBOX & TERMS AND CONDITIONS */}
        {!showCrewInput && (
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
        )}

      </div>

      {/* FOOTER NOTE KECIL */}
      <div className="mt-8 text-center">
        <p className="text-[10px] font-medium text-gray-600 tracking-wide">
          PZX Horizon Communications © 2026. All systems calibrated.
        </p>
      </div>

      {/* POPUP MODAL (TERMS AND CONDITIONS) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0d1524] p-6 shadow-2xl text-left">
            <h3 className="text-base font-bold text-white mb-3">Terms & Conditions</h3>
            <div className="max-h-48 overflow-y-auto pr-1 text-xs text-gray-400 space-y-2 font-medium">
              <p>1. By connecting to PZX Horizon Wi-Fi, you agree to comply with our fair usage policies within coastal boundary limits.</p>
              <p>2. The free connectivity tier offers limited bandwidth tailored for basic messaging and standard vessel logging operations.</p>
              <p>3. PZX Horizon holds no responsibility for temporary signal interference caused by offshore weather conditions or structural obstacles.</p>
              <p>4. Users are prohibited from using the network for malicious activities or unauthorized high-volume data streaming on the free tier.</p>
            </div>
            <div className="mt-5 flex justify-end">
              <button onClick={() => setIsModalOpen(false)} className="bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl">
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
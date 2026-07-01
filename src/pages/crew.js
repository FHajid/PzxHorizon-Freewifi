import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import LogoPzx from '../assets/logo-Pzx.png'; 

export default function Crew() {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false);

  // State dasar
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [crewCode, setCrewCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fungsi memvalidasi Kode Kru langsung
  const handleCrewSubmit = (e) => {
    e.preventDefault();
    
    if (crewCode === 'CREW123') {
      setErrorMessage('');
      navigate('/login-success'); 
    } else {
      setErrorMessage('Invalid Crew Access Code!');
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#191628] px-4 overflow-hidden antialiased">
      
      {/* BACKGROUND DEKORASI */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e2a862]/[0.02] blur-[120px]" />

      {/* BRANDING LOGO */}
      <div className="mb-8 flex flex-col items-center gap-2 mt-44 text-center">
        <img src={LogoPzx} alt="PZX Horizon Logo" className="h-18 w-auto mb-2" />
        <div className="flex flex-col space-y-1">
          <h1 className="text-xl font-medium tracking-wide text-white leading-none">
            Welcome to PZXHorizon Network
          </h1>
          <p className="text-[11px] text-gray-400 max-w-[290px] mt-2 leading-relaxed">
            Please enter your credentials to access the internet. For assistance, contact your IT administrator.
          </p>
        </div>
      </div>

      {/* BOX PORTAL LOGIN */}
      <div className="w-full max-w-sm p-2 my-auto">
        
        <form onSubmit={handleCrewSubmit} className="space-y-4">
          <div>
            {/* FIELD INPUT PUTIH DENGAN IKON INTERNAL */}
            <div className="relative flex items-center">
              
              {/* Ikon Gembok (Sisi Kiri) */}
              <div className="absolute left-4 text-gray-400 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>

              <input 
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={crewCode}
                onChange={(e) => setCrewCode(e.target.value)}
                className="w-full bg-white border border-transparent rounded-xl pl-12 pr-12 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none font-sans"
                autoFocus
              />
              
              {/* Tombol Toggle Mata (Sisi Kanan) */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none select-none"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                )}
              </button>
            </div>
            
            {errorMessage && (
              <p className="text-[11px] text-red-400 mt-2 text-center font-medium">
                ⚠️ {errorMessage}
              </p>
            )}
          </div>

          {/* TOMBOL LOG IN */}
          <div className="pt-1">
            <button 
              type="submit"
              disabled={!isChecked}
              className={`w-full font-medium text-sm py-3.5 rounded-xl transition-all duration-200 active:scale-[0.99]
                ${isChecked 
                  ? 'bg-[#1E7F4E] hover:bg-[#165F3A] text-white cursor-pointer' 
                  : 'bg-[#1E7F4E]/40 text-white/40 cursor-not-allowed'
                }`}
            >
              Log In
            </button>
          </div>
        </form>

        {/* AREA CHECKBOX & TERMS AND CONDITIONS (Posisi di bawah tombol Log In) */}
        <div className="mt-5 flex items-start gap-2.5 text-left pt-2 justify-center">
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
              className="text-[#1E7F4E] underline hover:text-[#165F3A] transition-colors font-medium focus:outline-none"
            >
              Terms & Conditions
            </button>
          </label>
        </div>

        {/* System hint super samar */}
        <div className="text-center opacity-5 hover:opacity-30 transition-opacity pt-6">
          <span className="text-[9px] font-mono text-white tracking-widest uppercase">
            Hint: CREW123
          </span>
        </div>

      </div>

      {/* FOOTER NOTE KECIL */}
      <div className="my-12 text-center max-w-xs">
        <p className="text-[10px] font-medium text-gray-600 tracking-wide leading-relaxed">
          © 2026 PZXHorizon. All rights reserved. Unauthorized use of this network is strictly prohibited.
        </p>
      </div>

      {/* POPUP MODAL (TERMS AND CONDITIONS) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#181622] p-6 sm:p-7 shadow-2xl text-left animate-modal-pop">
            
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#d4bc96] uppercase block mb-0.5">
                  Legal Policy
                </span>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Terms & Conditions
                </h3>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="max-h-60 overflow-y-auto pr-2 space-y-4 text-xs text-gray-400 font-medium leading-relaxed scrollbar-thin">
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-mono font-bold text-[#1E7F4E] bg-[#1E7F4E]/10 px-1.5 py-0.5 rounded mt-0.5 shrink-0">01</span>
                <p className="text-gray-300">By connecting to PZX Horizon Wi-Fi, you agree to comply with our fair usage policies within coastal boundary limits.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-mono font-bold text-[#1E7F4E] bg-[#1E7F4E]/10 px-1.5 py-0.5 rounded mt-0.5 shrink-0">02</span>
                <p className="text-gray-300">The free connectivity tier offers limited bandwidth tailored for basic messaging and standard vessel logging operations.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-mono font-bold text-[#1E7F4E] bg-[#1E7F4E]/10 px-1.5 py-0.5 rounded mt-0.5 shrink-0">03</span>
                <p className="text-gray-300">PZX Horizon holds no responsibility for temporary signal interference caused by offshore weather conditions or structural obstacles.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[10px] font-mono font-bold text-[#1E7F4E] bg-[#1E7F4E]/10 px-1.5 py-0.5 rounded mt-0.5 shrink-0">04</span>
                <p className="text-gray-300">Users are prohibited from using the network for malicious activities or unauthorized high-volume data streaming on the free tier.</p>
              </div>
            </div>

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
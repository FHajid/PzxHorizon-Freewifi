import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginSuccess() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#060910] text-center px-4">
      <div className="h-16 w-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-4 border border-green-500/20 text-2xl">
        ✓
      </div>
      <h1 className="text-2xl font-bold text-white mb-2">Login Successful!</h1>
      <p className="text-sm text-gray-400 max-w-sm mb-6">
        Welcome back, Captain. Your dashboard and vessel metrics are now calibrated and ready.
      </p>
      
      {/* Tombol untuk kembali ke Home jika diperlukan */}
      <button 
        onClick={() => navigate('/')}
        className="text-xs font-bold uppercase tracking-wider text-[#e2a862] hover:underline"
      >
        ← Back to Dashboard
      </button>
    </div>
  );
}
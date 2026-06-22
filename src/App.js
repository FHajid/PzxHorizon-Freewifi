import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LoginSuccess from './pages/login-succes'; // <-- Import halaman sukses

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Alamat URL untuk halaman sukses login */}
        <Route path="/login-success" element={<LoginSuccess />} />
      </Routes>
    </Router>
  );
}
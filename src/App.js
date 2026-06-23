import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // atau sesuaikan dengan path file Home kamu
import LoginSuccess from './pages/login-succes'; // sesuaikan juga jika ada halaman sukses

function App() {
  return (
    // Tambahkan properti basename di bawah ini 👇
    <BrowserRouter basename="/PzxHorizon-Freewifi">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route lainnya tetap seperti biasa */}
        <Route path="/login-success" element={<LoginSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
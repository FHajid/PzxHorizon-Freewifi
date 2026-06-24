import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // atau sesuaikan dengan path file Home kamu
import LoginSuccess from './pages/login-succes'; // sesuaikan juga jika ada halaman sukses
import Crew from './pages/crew';

function App() {
  return (
    // Tambahkan properti basename di bawah ini 👇
    <BrowserRouter basename="/PzxHorizon-Freewifi">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/Crew" element={<Crew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
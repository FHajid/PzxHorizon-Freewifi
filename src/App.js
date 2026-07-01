import { HashRouter, Routes, Route } from 'react-router-dom'; // 🛠️ Ubah BrowserRouter menjadi HashRouter
import Home from './pages/home'; 
import LoginSuccess from './pages/login-succes'; 
import Crew from './pages/crew';

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/Crew" element={<Crew />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
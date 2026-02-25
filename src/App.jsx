import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import PdfModal from './components/PdfModal';

// Páginas
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardCliente from './pages/DashboardCliente';
import AgendarCita from './pages/AgendarCita';
import MisCitas from './pages/MisCitas';
import Historial from './pages/Historial';
import MiPerfil from './pages/MiPerfil';
import CentroAyuda from './pages/CentroAyuda';
import LoginMedico from './pages/LoginMedico';
import DashboardMedico from './pages/DashboardMedico';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 flex flex-col">
        <Header />
        <main className="flex-grow relative">
          <Routes>
            {/* Paciente */}
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/dashboard" element={<DashboardCliente />} />
            <Route path="/agendar-cita" element={<AgendarCita />} />
            <Route path="/mis-citas" element={<MisCitas />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/mi-perfil" element={<MiPerfil />} />
            <Route path="/ayuda" element={<CentroAyuda />} />

            {/* Médico */}
            <Route path="/medico/login" element={<LoginMedico />} />
            <Route path="/medico/dashboard" element={<DashboardMedico />} />
          </Routes>
        </main>
        <Footer />
        <PdfModal />
      </div>
    </AppProvider>
  );
}
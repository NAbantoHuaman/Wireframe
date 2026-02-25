import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { CalendarIcon, ListIconSvg, FileTextIcon, SettingsIcon, HelpCircleIcon, PlusCircleIcon } from '../components/Icons';

export default function DashboardCliente() {
  const navigate = useNavigate();
  const { currentUser, appointments, medicalHistory } = useAppContext();

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="border-4 border-gray-800 bg-gray-100 p-6 md:p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)]">
        <h2 className="text-3xl font-black mb-2">Hola, {currentUser.name ? currentUser.name.split(' ')[0] : 'Paciente'}</h2>
        <p className="text-gray-600 font-medium mb-6">¿Qué necesitas hacer hoy en la clínica?</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <button onClick={() => navigate('/agendar-cita')} className="group flex flex-col items-start p-6 border-4 border-gray-800 bg-white hover:bg-gray-50 hover:-translate-y-1 transition-transform rounded-xl">
            <CalendarIcon className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-bold text-xl mb-1">Agendar Cita</h3>
            <p className="text-sm text-gray-500 font-medium text-left">Reserva con un especialista.</p>
          </button>

          <button onClick={() => navigate('/mis-citas')} className="group flex flex-col items-start p-6 border-4 border-gray-800 bg-white hover:bg-gray-50 hover:-translate-y-1 transition-transform rounded-xl relative">
            {appointments.length > 0 && (
              <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full">{appointments.length}</span>
            )}
            <ListIconSvg className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-bold text-xl mb-1">Mis Citas</h3>
            <p className="text-sm text-gray-500 font-medium text-left">Revisa tus próximas visitas.</p>
          </button>

          <button onClick={() => navigate('/historial')} className="group flex flex-col items-start p-6 border-4 border-gray-800 bg-white hover:bg-gray-50 hover:-translate-y-1 transition-transform rounded-xl relative">
             {medicalHistory.length > 0 && (
              <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full">{medicalHistory.length}</span>
            )}
            <FileTextIcon className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-bold text-xl mb-1">Historial Médico</h3>
            <p className="text-sm text-gray-500 font-medium text-left">Resultados y reportes.</p>
          </button>
          
          <button onClick={() => navigate('/mi-perfil')} className="group flex flex-col items-start p-6 border-4 border-gray-800 bg-white hover:bg-gray-50 hover:-translate-y-1 transition-transform rounded-xl">
            <SettingsIcon className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-bold text-xl mb-1">Mi Perfil</h3>
            <p className="text-sm text-gray-500 font-medium text-left">Actualiza tus datos y ficha.</p>
          </button>

          <button onClick={() => navigate('/ayuda')} className="group flex flex-col items-start p-6 border-4 border-gray-800 bg-white hover:bg-gray-50 hover:-translate-y-1 transition-transform rounded-xl lg:col-span-2">
            <HelpCircleIcon className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-bold text-xl mb-1">Centro de Ayuda</h3>
            <p className="text-sm text-gray-500 font-medium text-left">Preguntas frecuentes y contacto directo con soporte de la clínica.</p>
          </button>
        </div>
      </div>
    </div>
  );
}

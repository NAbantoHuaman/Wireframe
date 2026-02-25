import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { StethoscopeIcon } from '../components/Icons';

export default function LoginMedico() {
  const navigate = useNavigate();
  const { setUserRole } = useAppContext();

  return (
    <div className="p-8 max-w-md mx-auto mt-12 animate-in fade-in duration-300">
      <div className="border-4 border-gray-800 bg-white p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] space-y-6 text-center">
        <div className="w-16 h-16 bg-gray-800 border-4 border-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <StethoscopeIcon className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-black">Portal Médico</h2>
        <p className="text-gray-600 font-medium text-sm">Acceso exclusivo para profesionales de la salud</p>
        
        <form className="space-y-4 text-left" onSubmit={(e) => { 
          e.preventDefault(); 
          setUserRole('doctor');
          navigate('/medico/dashboard'); 
        }}>
          <div>
            <label className="block font-bold text-gray-700 mb-2">DNI / Credencial Médica</label>
            <input type="text" placeholder="Ej. 12345678" required className="w-full border-2 border-gray-800 p-3 bg-gray-50 rounded-md outline-none focus:ring-4 focus:ring-gray-200" />
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-2">Contraseña</label>
            <input type="password" placeholder="••••••••" required className="w-full border-2 border-gray-800 p-3 bg-gray-50 rounded-md outline-none focus:ring-4 focus:ring-gray-200" />
          </div>
          <button type="submit" className="w-full py-3 bg-gray-800 text-white font-bold rounded-md border-2 border-gray-800 mt-4 shadow-[4px_4px_0px_0px_rgba(156,163,175,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            Ingresar al Sistema
          </button>
        </form>
        
        <div className="pt-4 border-t-2 border-gray-200">
          <button onClick={() => navigate('/')} className="text-sm font-bold text-gray-600 underline hover:text-gray-900">
            Volver al Portal de Pacientes
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { UserIcon, StethoscopeIcon } from '../components/Icons';

export default function Login() {
  const navigate = useNavigate();
  const { currentUser, setUserRole } = useAppContext();

  return (
    <div className="p-8 max-w-md mx-auto mt-12 animate-in fade-in duration-300">
      <div className="border-4 border-gray-800 bg-white p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] space-y-6 text-center">
        <div className="w-16 h-16 bg-gray-200 border-4 border-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <UserIcon className="w-8 h-8 text-gray-800" />
        </div>
        <h2 className="text-2xl font-black">Portal Paciente</h2>
        <p className="text-gray-600 font-medium text-sm">Ingresa a tu cuenta de SaluDable</p>
        
        <form className="space-y-4 text-left" onSubmit={(e) => { 
          e.preventDefault(); 
          if(!currentUser.name) {
            alert('Para probar el wireframe completo, por favor regístrate primero.');
            return;
          }
          setUserRole('patient');
          navigate('/dashboard'); 
        }}>
          <div>
            <label className="block font-bold text-gray-700 mb-2">Correo Electrónico</label>
            <input type="email" defaultValue={currentUser.email} required className="w-full border-2 border-gray-800 p-3 bg-gray-50 rounded-md outline-none focus:ring-4 focus:ring-gray-200" />
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-2">Contraseña</label>
            <input type="password" required className="w-full border-2 border-gray-800 p-3 bg-gray-50 rounded-md outline-none focus:ring-4 focus:ring-gray-200" />
          </div>
          <button type="submit" className="w-full py-3 bg-gray-800 text-white font-bold rounded-md border-2 border-gray-800 hover:bg-gray-700 transition-colors mt-4">
            Ingresar
          </button>
        </form>
        
        <div className="pt-4 border-t-2 border-gray-200 flex flex-col gap-3">
          <button onClick={() => navigate('/registro')} className="text-sm font-bold text-gray-600 underline hover:text-gray-900">
            ¿No tienes cuenta? Regístrate aquí
          </button>
          
          <button onClick={() => navigate('/medico/login')} className="mt-4 flex items-center justify-center gap-2 w-full py-2 bg-gray-100 border-2 border-dashed border-gray-400 rounded text-gray-600 font-bold hover:bg-gray-200 hover:border-gray-800 transition-all">
            <StethoscopeIcon className="w-5 h-5" />
            Acceso Personal Médico
          </button>
        </div>
      </div>
    </div>
  );
}

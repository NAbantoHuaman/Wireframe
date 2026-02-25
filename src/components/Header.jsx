import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { PlusCircleIcon, UserIcon, LogOutIcon, StethoscopeIcon } from './Icons';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUserRole } = useAppContext();
  const currentPath = location.pathname;

  // Derivar el rol desde la URL para que el plugin HTML→Figma muestre el navbar correcto
  const userRole = currentPath.startsWith('/medico') ? 'doctor' : 'patient';

  const isAuthPage = ['/', '/registro', '/medico/login'].includes(currentPath);

  if (isAuthPage) {
    return (
      <header className="border-b-4 border-gray-800 p-4 flex justify-center items-center bg-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 border-2 border-gray-800 rounded-full flex items-center justify-center">
            <PlusCircleIcon className="text-gray-800 w-5 h-5" />
          </div>
          <h1 className="text-2xl font-black text-gray-800 tracking-tighter">SaluDable</h1>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b-4 border-gray-800 p-4 flex justify-between items-center bg-white shadow-sm relative z-10">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(userRole === 'doctor' ? '/medico/dashboard' : '/dashboard')}>
        <div className="w-8 h-8 bg-gray-300 border-2 border-gray-800 rounded-full flex items-center justify-center">
          <PlusCircleIcon className="text-gray-800 w-5 h-5" />
        </div>
        <h1 className="text-xl md:text-2xl font-black text-gray-800 tracking-tighter hidden sm:block">
          SaluDable <span className="text-sm font-normal text-gray-500 tracking-normal ml-2">{userRole === 'doctor' ? '| Portal Médico' : ''}</span>
        </h1>
      </div>
      
      {userRole === 'patient' ? (
        <nav className="hidden md:flex gap-6 items-center">
          <button onClick={() => navigate('/dashboard')} className={`font-bold pb-1 ${currentPath === '/dashboard' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}>Inicio</button>
          <button onClick={() => navigate('/agendar-cita')} className={`font-bold pb-1 ${currentPath === '/agendar-cita' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}>Agendar</button>
          <button onClick={() => navigate('/mis-citas')} className={`font-bold pb-1 ${currentPath === '/mis-citas' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}>Mis Citas</button>
          <button onClick={() => navigate('/historial')} className={`font-bold pb-1 ${currentPath === '/historial' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}>Historial</button>
        </nav>
      ) : (
        <nav className="hidden md:flex gap-6 items-center">
          <button onClick={() => navigate('/medico/dashboard')} className={`font-bold pb-1 ${currentPath === '/medico/dashboard' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}>Agenda Diaria</button>
        </nav>
      )}

      <div className="flex gap-4 items-center">
        {userRole === 'patient' && (
          <button onClick={() => navigate('/mi-perfil')} className="text-gray-600 hover:text-gray-900 border-2 border-transparent hover:border-gray-800 p-1 rounded-full transition-all" title="Mi Perfil">
             <UserIcon className="w-6 h-6" />
          </button>
        )}
        <button onClick={() => { setUserRole('patient'); navigate('/'); }} className="text-gray-600 hover:text-gray-900 border-2 border-transparent hover:border-gray-800 p-1 rounded-full transition-all flex items-center gap-1" title="Cerrar Sesión">
           <LogOutIcon className="w-5 h-5" />
           {userRole === 'doctor' && <span className="text-xs font-bold uppercase">Salir</span>}
        </button>
      </div>
    </header>
  );
}

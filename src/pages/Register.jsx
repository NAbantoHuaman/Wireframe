import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { BLOOD_TYPES } from '../data/constants';
import { UserIcon, ActivityIcon, ChevronDownIcon } from '../components/Icons';

export default function Register() {
  const navigate = useNavigate();
  const { setCurrentUser, setUserRole } = useAppContext();

  const [regData, setRegData] = useState({ 
    name: '', document: '', email: '', password: '',
    birthDate: '', bloodType: '', weight: '', height: '', allergies: ''
  });

  return (
    <div className="p-4 md:p-8 max-w-2xl mx-auto animate-in fade-in duration-300">
      <div className="border-4 border-gray-800 bg-white p-6 md:p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)]">
        <h2 className="text-2xl font-black text-center mb-6">Crear Cuenta Clínica</h2>
        
        <form onSubmit={(e) => { 
          e.preventDefault(); 
          setCurrentUser({
            name: regData.name, document: regData.document, email: regData.email, phone: '', address: '',
            birthDate: regData.birthDate, bloodType: regData.bloodType, weight: regData.weight, height: regData.height, allergies: regData.allergies
          });
          setUserRole('patient');
          navigate('/dashboard'); 
        }}>
          
          <div className="mb-6">
             <h3 className="font-bold border-b-2 border-gray-200 pb-2 mb-4 flex items-center gap-2"><UserIcon className="w-5 h-5"/> Datos de Acceso</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 text-sm mb-1">Nombre Completo</label>
                  <input type="text" value={regData.name} onChange={(e) => setRegData({...regData, name: e.target.value})} required className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none" />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 text-sm mb-1">DNI / Documento</label>
                  <input type="text" value={regData.document} onChange={(e) => setRegData({...regData, document: e.target.value})} required className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none" />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 text-sm mb-1">Correo Electrónico</label>
                  <input type="email" value={regData.email} onChange={(e) => setRegData({...regData, email: e.target.value})} required className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none" />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 text-sm mb-1">Contraseña</label>
                  <input type="password" value={regData.password} onChange={(e) => setRegData({...regData, password: e.target.value})} required className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none" />
                </div>
             </div>
          </div>

          <div className="mb-6">
             <h3 className="font-bold border-b-2 border-gray-200 pb-2 mb-4 flex items-center gap-2"><ActivityIcon className="w-5 h-5"/> Ficha Médica Básica</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="col-span-2">
                  <label className="block font-bold text-gray-700 text-sm mb-1">F. de Nacimiento</label>
                  <input type="date" value={regData.birthDate} onChange={(e) => setRegData({...regData, birthDate: e.target.value})} required className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none text-sm" />
                </div>
                <div className="col-span-2">
                  <label className="block font-bold text-gray-700 text-sm mb-1">T. de Sangre</label>
                  <div className="relative">
                    <select required value={regData.bloodType} onChange={(e) => setRegData({...regData, bloodType: e.target.value})} className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md appearance-none outline-none text-sm">
                      <option value="">Seleccionar</option>
                      {BLOOD_TYPES.map(bt => <option key={bt} value={bt}>{bt}</option>)}
                    </select>
                    <ChevronDownIcon className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                <div className="col-span-2 md:col-span-2 relative">
                  <label className="block font-bold text-gray-700 text-sm mb-1">Peso</label>
                  <input type="number" placeholder="Ej. 70" value={regData.weight} onChange={(e) => setRegData({...regData, weight: e.target.value})} required className="w-full border-2 border-gray-800 p-2 pr-8 bg-gray-50 rounded-md outline-none" />
                  <span className="absolute right-3 top-[34px] text-gray-500 font-bold text-sm">kg</span>
                </div>
                <div className="col-span-2 md:col-span-2 relative">
                  <label className="block font-bold text-gray-700 text-sm mb-1">Altura</label>
                  <input type="number" placeholder="Ej. 175" value={regData.height} onChange={(e) => setRegData({...regData, height: e.target.value})} required className="w-full border-2 border-gray-800 p-2 pr-8 bg-gray-50 rounded-md outline-none" />
                  <span className="absolute right-3 top-[34px] text-gray-500 font-bold text-sm">cm</span>
                </div>
             </div>
             <div>
                <label className="block font-bold text-gray-700 text-sm mb-1">Alergias Conocidas (Opcional)</label>
                <input type="text" placeholder="Ej. Penicilina, Ibuprofeno..." value={regData.allergies} onChange={(e) => setRegData({...regData, allergies: e.target.value})} className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none" />
             </div>
          </div>

          <button type="submit" className="w-full py-3 bg-gray-800 text-white font-black text-lg rounded-md border-2 border-gray-800 mt-2 shadow-[4px_4px_0px_0px_rgba(156,163,175,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            Completar Registro
          </button>
        </form>
        
        <div className="text-center pt-6 mt-4 border-t-2 border-gray-200">
          <button onClick={() => navigate('/')} className="text-sm font-bold text-gray-600 underline">
            Ya tengo cuenta, volver al Login
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { BLOOD_TYPES } from '../data/constants';
import { UserIcon, FileTextIcon, ActivityIcon } from '../components/Icons';

export default function MiPerfil() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useAppContext();

  const [profData, setProfData] = useState(currentUser);

  useEffect(() => {
    setProfData(currentUser);
  }, [currentUser]);

  return (
    <div className="p-8 max-w-2xl mx-auto animate-in fade-in duration-300">
      <div className="mb-6 flex items-center gap-2">
        <button onClick={() => navigate('/dashboard')} className="text-gray-500 hover:text-gray-800 font-bold">Inicio</button>
        <span className="text-gray-400">/</span><span className="font-bold">Mi Perfil</span>
      </div>

      <div className="border-4 border-gray-800 bg-white p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)]">
        <div className="flex items-center gap-6 mb-8 pb-6 border-b-2 border-gray-200">
          <div className="w-24 h-24 bg-gray-200 border-4 border-gray-800 rounded-full flex items-center justify-center">
             <UserIcon className="w-12 h-12 text-gray-500" />
          </div>
          <div>
            <h2 className="text-2xl font-black">{currentUser.name || 'Invitado'}</h2>
            <p className="text-gray-600 font-medium">Paciente Registrado en SaluDable</p>
          </div>
        </div>

        <form onSubmit={(e) => { 
          e.preventDefault(); 
          setCurrentUser(profData);
          alert('Datos del perfil actualizados correctamente.'); 
        }}>
          
          <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b-2 border-gray-100 pb-2">
                 <FileTextIcon className="w-5 h-5"/> Datos de Contacto
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 text-sm mb-1">DNI</label>
                  <input type="text" disabled value={profData.document || ''} className="w-full border-2 border-gray-300 p-2 bg-gray-100 rounded-md text-gray-500" />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 text-sm mb-1">Teléfono</label>
                  <input type="text" value={profData.phone || ''} onChange={(e) => setProfData({...profData, phone: e.target.value})} className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block font-bold text-gray-700 text-sm mb-1">Correo Electrónico</label>
                <input type="email" value={profData.email || ''} onChange={(e) => setProfData({...profData, email: e.target.value})} className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none" />
              </div>
          </div>

          <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b-2 border-gray-100 pb-2">
                 <ActivityIcon className="w-5 h-5"/> Ficha Médica
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-gray-700 text-sm mb-1">F. de Nacimiento</label>
                  <input type="date" value={profData.birthDate || ''} onChange={(e) => setProfData({...profData, birthDate: e.target.value})} className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none" />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 text-sm mb-1">Tipo de Sangre</label>
                  <select value={profData.bloodType || ''} onChange={(e) => setProfData({...profData, bloodType: e.target.value})} className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none">
                     <option value="">Seleccionar</option>
                     {BLOOD_TYPES.map(bt => <option key={bt} value={bt}>{bt}</option>)}
                  </select>
                </div>
                <div className="relative">
                  <label className="block font-bold text-gray-700 text-sm mb-1">Peso (kg)</label>
                  <input type="number" value={profData.weight || ''} onChange={(e) => setProfData({...profData, weight: e.target.value})} className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none" />
                </div>
                <div className="relative">
                  <label className="block font-bold text-gray-700 text-sm mb-1">Altura (cm)</label>
                  <input type="number" value={profData.height || ''} onChange={(e) => setProfData({...profData, height: e.target.value})} className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none" />
                </div>
                <div className="col-span-2 mt-2">
                  <label className="block font-bold text-gray-700 text-sm mb-1">Alergias Conocidas</label>
                  <input type="text" value={profData.allergies || ''} onChange={(e) => setProfData({...profData, allergies: e.target.value})} className="w-full border-2 border-gray-800 p-2 bg-gray-50 rounded-md outline-none" />
                </div>
              </div>
          </div>

          <div className="pt-2 flex justify-end">
             <button type="submit" className="px-6 py-2 bg-gray-800 text-white font-bold rounded-md border-2 border-gray-800 hover:bg-gray-700 transition-colors">
              Guardar Ficha
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

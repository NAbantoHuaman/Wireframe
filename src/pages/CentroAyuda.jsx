import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircleIcon, PhoneIcon, MailIcon } from '../components/Icons';

export default function CentroAyuda() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-2xl mx-auto animate-in fade-in duration-300">
      <div className="mb-6 flex items-center gap-2">
        <button onClick={() => navigate('/dashboard')} className="text-gray-500 hover:text-gray-800 font-bold">Inicio</button>
        <span className="text-gray-400">/</span><span className="font-bold">Ayuda</span>
      </div>
      
      <div className="border-4 border-gray-800 bg-white p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] space-y-6">
        <h2 className="text-2xl font-black flex items-center gap-2">
          <HelpCircleIcon className="w-6 h-6" /> Centro de Ayuda
        </h2>
        
        <div className="space-y-4">
          <div className="border-2 border-gray-300 p-4 rounded-md bg-gray-50">
            <h3 className="font-bold text-lg mb-1">¿Cómo me atienden virtualmente?</h3>
            <p className="text-sm text-gray-600">Al agendar una cita, esta pasa a nuestra base de datos central. El médico la verá en su "Dashboard Médico" y podrá completar tu diagnóstico el día de la cita. Luego podrás ver el reporte en tu Historial.</p>
          </div>
          <div className="border-2 border-gray-300 p-4 rounded-md bg-gray-50">
            <h3 className="font-bold text-lg mb-1">¿Por qué me piden el peso y la altura?</h3>
            <p className="text-sm text-gray-600">Es vital para crear tu Ficha Médica. Cuando el doctor te atienda, podrá ver esta información en su pantalla para brindarte un diagnóstico más preciso.</p>
          </div>
        </div>

        <div className="pt-6 border-t-2 border-gray-200">
          <h3 className="font-bold text-lg mb-4">Contacto Directo</h3>
          <div className="flex items-center gap-2 mb-2">
            <PhoneIcon className="w-5 h-5 text-gray-600" />
            <p className="text-sm font-medium text-gray-800">Teléfono: (01) 555-1234</p>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="w-5 h-5 text-gray-600" />
            <p className="text-sm font-medium text-gray-800">Correo: soporte@saludable.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

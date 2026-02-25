import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { FileTextIcon } from '../components/Icons';

export default function Historial() {
  const navigate = useNavigate();
  const { medicalHistory, setPdfModalData } = useAppContext();

  return (
    <div className="p-8 max-w-4xl mx-auto animate-in fade-in duration-300">
      <div className="mb-6 flex items-center gap-2">
        <button onClick={() => navigate('/dashboard')} className="text-gray-500 hover:text-gray-800 font-bold">Inicio</button>
        <span className="text-gray-400">/</span><span className="font-bold">Historial</span>
      </div>
      <h2 className="text-3xl font-black mb-6">Historial Médico</h2>

      <div className="border-4 border-gray-800 bg-white rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] overflow-hidden">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-gray-200 border-b-4 border-gray-800">
              <th className="p-4 font-black">Fecha Atención</th>
              <th className="p-4 font-black">Especialidad</th>
              <th className="p-4 font-black">Diagnóstico Breve</th>
              <th className="p-4 font-black text-center">Resultados</th>
            </tr>
          </thead>
          <tbody>
            {medicalHistory.length === 0 ? (
               <tr>
               <td colSpan="4" className="p-12 text-center text-gray-500 font-medium bg-gray-50 border-b border-gray-200">
                 <FileTextIcon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                 Tu historial está limpio.<br/>
                 <span className="text-sm">Las citas aparecerán aquí después de ser atendidas por el doctor.</span>
               </td>
             </tr>
            ) : (
              medicalHistory.map((record) => (
                <tr key={record.id} className="border-b-2 border-gray-200 opacity-90 hover:bg-gray-50 hover:opacity-100 transition-all">
                  <td className="p-4 font-bold">{record.attentionDate}</td>
                  <td className="p-4">{record.specialty}</td>
                  <td className="p-4">{record.diagnosis}</td>
                  <td className="p-4 text-center">
                    <button onClick={() => setPdfModalData(record)} className="text-sm font-bold border-2 border-gray-800 px-3 py-1 rounded bg-white hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-2 mx-auto">
                      <FileTextIcon className="w-4 h-4" /> Ver PDF
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { StethoscopeIcon, ListIconSvg, CalendarIcon, ClockIcon, UserIcon, DropletIcon, ActivityIcon, CheckCircleIcon } from '../components/Icons';

export default function DashboardMedico() {
  const navigate = useNavigate();
  const { appointments, setAppointments, medicalHistory, setMedicalHistory } = useAppContext();

  const [subView, setSubView] = useState('home'); // 'home' or 'attention'
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [completionData, setCompletionData] = useState({ diagnosis: '', details: '' });

  const handleAttend = (apt) => {
    setSelectedAppointment(apt);
    setSubView('attention');
  };

  const handleCompleteConsultation = (e) => {
    e.preventDefault();
    if (completionData.diagnosis && completionData.details) {
      const newHistoryRecord = {
        ...selectedAppointment,
        diagnosis: completionData.diagnosis,
        details: completionData.details,
        attentionDate: new Date().toLocaleDateString()
      };
      
      setMedicalHistory([...medicalHistory, newHistoryRecord]);
      setAppointments(appointments.filter(apt => apt.id !== selectedAppointment.id));
      setCompletionData({ diagnosis: '', details: '' });
      
      alert('Atención registrada exitosamente en el historial del paciente.');
      setSubView('home');
      setSelectedAppointment(null);
    }
  };

  if (subView === 'attention' && selectedAppointment) {
    return (
      <div className="p-4 md:p-8 max-w-4xl mx-auto animate-in fade-in duration-300">
        <div className="mb-6 flex items-center gap-2">
          <button onClick={() => setSubView('home')} className="text-gray-500 hover:text-gray-800 font-bold">Agenda</button>
          <span className="text-gray-400">/</span><span className="font-bold">Atención Médica</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Lado Izquierdo: Ficha del Paciente */}
          <div className="md:col-span-1 space-y-6">
             <div className="border-4 border-gray-800 bg-white p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(31,41,55,1)]">
                <div className="flex flex-col items-center text-center border-b-2 border-gray-200 pb-4 mb-4">
                   <div className="w-16 h-16 bg-gray-100 border-2 border-gray-800 rounded-full flex items-center justify-center mb-3">
                      <UserIcon className="w-8 h-8 text-gray-500" />
                   </div>
                   <h3 className="font-black text-lg leading-tight">{selectedAppointment?.patientName}</h3>
                   <p className="text-sm text-gray-500 font-bold">DNI: {selectedAppointment?.patientDni}</p>
                </div>
                <div className="space-y-3 text-sm">
                   <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span className="text-gray-500 font-bold">Sangre:</span>
                      <span className="font-black flex items-center gap-1"><DropletIcon className="w-3 h-3"/> {selectedAppointment?.patientBlood}</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span className="text-gray-500 font-bold">Peso:</span>
                      <span className="font-bold">{selectedAppointment?.patientWeight} kg</span>
                   </div>
                   <div className="flex justify-between border-b border-gray-100 pb-1">
                      <span className="text-gray-500 font-bold">Altura:</span>
                      <span className="font-bold">{selectedAppointment?.patientHeight} cm</span>
                   </div>
                   <div className="flex flex-col border-b border-gray-100 pb-1">
                      <span className="text-gray-500 font-bold mb-1">Alergias:</span>
                      <span className="font-bold text-red-600 bg-red-50 p-1 rounded text-xs">{selectedAppointment?.patientAllergies || 'Ninguna'}</span>
                   </div>
                </div>
             </div>

             <div className="border-4 border-gray-800 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-sm text-gray-500 mb-2 uppercase">Detalles Cita</h4>
                <p className="font-black text-gray-800 mb-1">{selectedAppointment?.specialty}</p>
                <p className="text-sm font-bold flex items-center gap-1"><CalendarIcon className="w-4 h-4"/> {selectedAppointment?.date}</p>
                <p className="text-sm font-bold flex items-center gap-1"><ClockIcon className="w-4 h-4"/> {selectedAppointment?.time}</p>
             </div>
          </div>

          {/* Lado Derecho: Formulario Médico */}
          <div className="md:col-span-2">
             <form onSubmit={handleCompleteConsultation} className="border-4 border-gray-800 bg-white p-6 md:p-8 rounded-lg shadow-[6px_6px_0px_0px_rgba(31,41,55,1)] h-full flex flex-col">
                <h3 className="font-black text-xl mb-6 flex items-center gap-2 pb-4 border-b-2 border-gray-200">
                   <ActivityIcon className="w-6 h-6" /> Registro Clínico
                </h3>
                
                <div className="flex-grow space-y-5">
                  <div>
                    <label className="block font-bold text-gray-800 mb-2">Diagnóstico Preliminar</label>
                    <input type="text" required placeholder="Ej. Faringitis aguda, Chequeo normal, etc." className="w-full border-2 border-gray-800 p-3 rounded-md outline-none focus:bg-gray-50" value={completionData.diagnosis} onChange={e => setCompletionData({...completionData, diagnosis: e.target.value})} />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-800 mb-2">Tratamiento y Observaciones Médicas</label>
                    <textarea required placeholder="Escriba las notas clínicas, medicamentos recetados y recomendaciones para el paciente..." className="w-full border-2 border-gray-800 p-3 rounded-md outline-none h-40 resize-none focus:bg-gray-50 leading-relaxed" value={completionData.details} onChange={e => setCompletionData({...completionData, details: e.target.value})}></textarea>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t-2 border-gray-200 flex justify-end gap-4">
                   <button type="button" onClick={() => setSubView('home')} className="px-6 py-3 font-bold text-gray-600 border-2 border-transparent hover:bg-gray-100 rounded-md">Cancelar</button>
                   <button type="submit" className="px-6 py-3 bg-[#1e293b] text-white font-bold rounded-md hover:bg-black flex items-center gap-2">
                      <CheckCircleIcon className="w-5 h-5"/> Finalizar Consulta
                   </button>
                </div>
             </form>
          </div>
        </div>
      </div>
    );
  }

  // Default: Doctor Home / Dashboard
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto animate-in fade-in duration-300">
      <div className="mb-8">
        <h2 className="text-3xl font-black mb-2">Dashboard Médico</h2>
        <p className="text-gray-600 font-medium">Visualiza las citas de los pacientes que requieren atención el día de hoy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <div className="border-4 border-gray-800 bg-gray-800 text-white p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-300">Citas Pendientes</h3>
            <p className="text-4xl font-black mt-2">{appointments.length}</p>
         </div>
         <div className="border-4 border-gray-300 bg-white p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-600">Pacientes Atendidos</h3>
            <p className="text-4xl font-black mt-2 text-gray-800">{medicalHistory.length}</p>
         </div>
      </div>

      <div className="border-4 border-gray-800 bg-white rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] overflow-hidden">
        <div className="bg-gray-100 border-b-4 border-gray-800 p-4 font-black flex items-center gap-2">
           <ListIconSvg className="w-5 h-5"/> Agenda de Consultas
        </div>
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-gray-200 bg-gray-50">
              <th className="p-4 font-bold text-gray-600">Hora</th>
              <th className="p-4 font-bold text-gray-600">Paciente</th>
              <th className="p-4 font-bold text-gray-600">Motivo/Especialidad</th>
              <th className="p-4 font-bold text-gray-600 text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-12 text-center text-gray-500 font-medium">
                  <StethoscopeIcon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  No hay citas en cola de espera.
                </td>
              </tr>
            ) : (
              appointments.map((apt) => (
                <tr key={apt.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold"><span className="bg-gray-200 px-2 py-1 rounded text-sm">{apt.date}</span> <br/>{apt.time}</td>
                  <td className="p-4">
                     <span className="font-bold">{apt.patientName}</span>
                     <p className="text-xs text-gray-500">DNI: {apt.patientDni}</p>
                  </td>
                  <td className="p-4">{apt.specialty}</td>
                  <td className="p-4 text-center">
                    <button onClick={() => handleAttend(apt)} className="text-sm font-bold border-2 border-gray-800 px-4 py-2 rounded bg-gray-800 text-white hover:bg-black transition-colors">
                      Atender Paciente
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

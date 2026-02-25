import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { CalendarIcon, PlusCircleIcon, ActivityIcon, UserIcon, ClockIcon, ListIconSvg, FileTextIcon, AlertTriangleIcon } from '../components/Icons';

export default function MisCitas() {
  const navigate = useNavigate();
  const { appointments, setAppointments } = useAppContext();

  // Sub-views: 'list', 'detail', 'cancel'
  const [subView, setSubView] = useState('list');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleViewDetail = (apt) => {
    setSelectedAppointment(apt);
    setSubView('detail');
  };

  const handleCancelView = () => {
    setSubView('cancel');
  };

  const handleCancelAppointment = () => {
    setAppointments(appointments.filter(apt => apt.id !== selectedAppointment.id));
    setSubView('list');
    setSelectedAppointment(null);
  };

  if (subView === 'cancel' && selectedAppointment) {
    return (
      <div className="p-8 max-w-md mx-auto mt-10 animate-in fade-in duration-300">
        <div className="border-4 border-gray-800 bg-white p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] text-center">
          <AlertTriangleIcon className="w-16 h-16 mx-auto mb-4 text-gray-800" />
          <h2 className="text-2xl font-black mb-2">¿Cancelar Cita?</h2>
          <p className="text-gray-600 font-medium mb-6">
            Estás a punto de cancelar tu cita de <b>{selectedAppointment?.specialty}</b>. Esta acción no se puede deshacer.
          </p>
          
          <div className="flex flex-col gap-3">
            <button onClick={handleCancelAppointment} className="w-full py-3 bg-gray-800 text-white font-bold rounded-md border-2 border-gray-800 hover:bg-gray-700">
              Sí, cancelar cita
            </button>
            <button onClick={() => setSubView('detail')} className="w-full py-3 font-bold text-gray-600 border-2 border-transparent hover:bg-gray-100 rounded-md">
              No, mantener cita
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (subView === 'detail' && selectedAppointment) {
    return (
      <div className="p-8 max-w-2xl mx-auto animate-in fade-in duration-300">
        <div className="mb-6 flex items-center gap-2">
          <button onClick={() => setSubView('list')} className="text-gray-500 hover:text-gray-800 font-bold">Mis Citas</button>
          <span className="text-gray-400">/</span><span className="font-bold">Detalle</span>
        </div>
        
        <div className="border-4 border-gray-800 bg-white p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gray-800"></div>

          <div className="flex justify-between items-start border-b-2 border-gray-200 pb-4 mb-6 pt-2">
            <h2 className="text-2xl font-black flex items-center gap-2"><CalendarIcon className="w-6 h-6"/> Ficha de Reserva</h2>
            <span className="bg-gray-100 px-4 py-1 rounded-full text-sm font-bold border-2 border-gray-800 uppercase tracking-widest">{selectedAppointment?.status}</span>
          </div>
          
          <div className="space-y-5 mb-8 bg-gray-50 p-6 border-2 border-gray-200 rounded-lg">
            <div className="flex items-center gap-3"><ActivityIcon className="w-5 h-5 text-gray-500" /> <span className="font-bold w-28 text-gray-700">Especialidad:</span> <span className="text-lg">{selectedAppointment?.specialty}</span></div>
            <div className="flex items-center gap-3"><UserIcon className="w-5 h-5 text-gray-500" /> <span className="font-bold w-28 text-gray-700">Médico:</span> {selectedAppointment?.doctor}</div>
            <div className="flex items-center gap-3"><ClockIcon className="w-5 h-5 text-gray-500" /> <span className="font-bold w-28 text-gray-700">Fecha:</span> {selectedAppointment?.date}</div>
            <div className="flex items-center gap-3"><ListIconSvg className="w-5 h-5 text-gray-500" /> <span className="font-bold w-28 text-gray-700">Hora:</span> {selectedAppointment?.time}</div>
            <div className="flex items-center gap-3"><FileTextIcon className="w-5 h-5 text-gray-500" /> <span className="font-bold w-28 text-gray-700">Ubicación:</span> Consultorio Principal, Piso 2</div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-md mb-8 flex items-start gap-3">
             <AlertTriangleIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
             <p className="text-sm text-blue-800">
               Por favor, recuerda llegar 15 minutos antes. <b>El doctor te llamará a su consultorio</b> y, tras la atención, tu diagnóstico aparecerá en la sección "Historial".
             </p>
          </div>

          <div className="flex justify-end">
            <button onClick={handleCancelView} className="px-6 py-3 font-bold text-gray-800 border-2 border-gray-800 rounded-md hover:bg-gray-100 transition-colors">
              Cancelar Cita
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default: list view
  return (
    <div className="p-8 max-w-4xl mx-auto animate-in fade-in duration-300">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <button onClick={() => navigate('/dashboard')} className="text-gray-500 hover:text-gray-800 font-bold">Inicio</button>
            <span className="text-gray-400">/</span><span className="font-bold">Mis Citas</span>
          </div>
          <h2 className="text-3xl font-black">Citas Pendientes</h2>
        </div>
        <button onClick={() => navigate('/agendar-cita')} className="px-4 py-2 bg-white shadow-[4px_4px_0px_0px_rgba(31,41,55,1)] border-2 border-gray-800 font-bold rounded flex items-center gap-2 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          <PlusCircleIcon className="w-5 h-5" /> Nueva Cita
        </button>
      </div>

      <div className="border-4 border-gray-800 bg-white rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] overflow-hidden">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-gray-100 border-b-4 border-gray-800">
              <th className="p-4 font-black">Especialidad</th>
              <th className="p-4 font-black">Médico</th>
              <th className="p-4 font-black">Fecha y Hora</th>
              <th className="p-4 font-black text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-12 text-center text-gray-500 font-medium bg-gray-50 border-b border-gray-200">
                  <CalendarIcon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  No tienes citas pendientes.<br/>
                </td>
              </tr>
            ) : (
              appointments.map((apt) => (
                <tr key={apt.id} className="border-b-2 border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-bold">{apt.specialty}</td>
                  <td className="p-4">{apt.doctor}</td>
                  <td className="p-4">{apt.date} a las {apt.time}</td>
                  <td className="p-4 text-center">
                    <button onClick={() => handleViewDetail(apt)} className="text-sm font-bold border-2 border-gray-800 px-4 py-2 rounded bg-white hover:bg-gray-800 hover:text-white transition-colors">
                      Ver Detalle
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

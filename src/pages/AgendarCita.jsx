import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { DOCTORS_BY_SPECIALTY, ALL_TIMES } from '../data/constants';
import { CalendarIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon } from '../components/Icons';

export default function AgendarCita() {
  const navigate = useNavigate();
  const { currentUser, appointments, setAppointments, showSuccess, setShowSuccess } = useAppContext();

  const [formData, setFormData] = useState({ specialty: '', doctor: '', date: '', time: '' });
  const [calendarDate, setCalendarDate] = useState(new Date());

  const todayDate = new Date();
  const todayMonth = todayDate.getMonth();
  const todayYear = todayDate.getFullYear();
  const todayDay = todayDate.getDate();

  const currentMonth = calendarDate.getMonth();
  const currentYear = calendarDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const isPrevDisabled = currentYear === todayYear && currentMonth === todayMonth;
  const nextMonth = () => setCalendarDate(new Date(currentYear, currentMonth + 1, 1));
  const prevMonth = () => setCalendarDate(new Date(currentYear, currentMonth - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.specialty && formData.doctor && formData.date && formData.time) {
      const newAppointment = { 
        ...formData, 
        id: Date.now(), 
        status: 'Pendiente',
        patientName: currentUser.name || 'Paciente No Registrado',
        patientDni: currentUser.document || '---',
        patientBlood: currentUser.bloodType || 'N/A',
        patientWeight: currentUser.weight || 'N/A',
        patientHeight: currentUser.height || 'N/A',
        patientAllergies: currentUser.allergies || 'Ninguna'
      };
      
      setAppointments([...appointments, newAppointment]);
      setShowSuccess(true);
      setFormData({ specialty: '', doctor: '', date: '', time: '' });
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/mis-citas');
      }, 2000);
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  const daysArray = [];
  for (let i = 0; i < firstDayOfMonth; i++) daysArray.push(null);
  for (let i = 1; i <= daysInMonth; i++) daysArray.push(i);

  const availableDoctors = formData.specialty ? DOCTORS_BY_SPECIALTY[formData.specialty] : [];

  return (
    <div className="p-8 max-w-4xl mx-auto animate-in fade-in duration-300">
      <div className="mb-6 flex items-center gap-2">
        <button onClick={() => navigate('/dashboard')} className="text-gray-500 hover:text-gray-800 font-bold">Inicio</button>
        <span className="text-gray-400">/</span><span className="font-bold">Agendar Cita</span>
      </div>

      {showSuccess ? (
        <div className="border-4 border-gray-800 bg-gray-100 p-12 text-center rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)]">
          <CheckCircleIcon className="w-16 h-16 mx-auto mb-4 text-gray-800" />
          <h2 className="text-2xl font-black mb-2">¡Cita Registrada!</h2>
          <p className="text-gray-600 font-medium">Puedes verla en tu sección "Mis Citas". El doctor ya puede verla en su agenda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form id="booking-form" onSubmit={handleSubmit} className="border-4 border-gray-800 bg-white p-6 md:p-8 rounded-lg shadow-[6px_6px_0px_0px_rgba(31,41,55,1)] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-black pb-4 border-b border-gray-200 mb-6">Nueva Reserva</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block font-bold text-gray-800 text-sm mb-2">1. Especialidad</label>
                  <div className="relative">
                    <select required className="w-full border border-gray-800 p-3 bg-white rounded-md appearance-none outline-none focus:ring-2 focus:ring-gray-800 pr-10" value={formData.specialty} onChange={(e) => setFormData({...formData, specialty: e.target.value, doctor: ''})}>
                      <option value="">-- Seleccionar --</option>
                      {Object.keys(DOCTORS_BY_SPECIALTY).map(spec => (
                         <option key={spec} value={spec}>{spec}</option>
                      ))}
                    </select>
                    <ChevronDownIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block font-bold text-gray-800 text-sm mb-2">2. Médico Especialista</label>
                  <div className="relative">
                    <select required disabled={!formData.specialty} className="w-full border border-gray-800 p-3 bg-white rounded-md appearance-none outline-none focus:ring-2 focus:ring-gray-800 pr-10 disabled:bg-gray-100 disabled:text-gray-400" value={formData.doctor} onChange={(e) => setFormData({...formData, doctor: e.target.value})}>
                      <option value="">-- Seleccionar Médico --</option>
                      {availableDoctors.map(doc => (
                         <option key={doc} value={doc}>{doc}</option>
                      ))}
                    </select>
                    <ChevronDownIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 pointer-events-none" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-800 text-sm mb-2">3. Fecha Elegida</label>
                    <input type="text" readOnly placeholder="Selecciona en ->" required className="w-full border border-gray-800 p-3 bg-gray-50 rounded-md outline-none text-sm font-bold text-gray-800" value={formData.date} />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-800 text-sm mb-2">4. Hora</label>
                    <div className="relative">
                      <select required className="w-full border border-gray-800 p-3 bg-white rounded-md appearance-none outline-none focus:ring-2 focus:ring-gray-800 pr-10 text-sm" value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})}>
                        <option value="">-- Horario --</option>
                        {ALL_TIMES.map(time => <option key={time} value={time}>{time}</option>)}
                      </select>
                      <ChevronDownIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-800 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-gray-200 flex justify-end items-center gap-6">
              <button type="button" onClick={() => navigate('/dashboard')} className="font-bold text-sm text-gray-800 hover:text-gray-600">Cancelar</button>
              <button type="submit" form="booking-form" className="px-6 py-3 bg-[#1e293b] text-white font-bold rounded-md hover:bg-black transition-colors">Confirmar Cita</button>
            </div>
          </form>

          <div className="border-4 border-gray-800 bg-white p-6 md:p-8 rounded-lg shadow-[6px_6px_0px_0px_rgba(31,41,55,1)] flex flex-col">
            <h2 className="text-xl font-black pb-4 border-b border-gray-200 mb-6 text-center flex items-center justify-center gap-2">
               <CalendarIcon className="w-5 h-5" /> Disponibilidad
            </h2>
            
            <div className="mb-6 flex justify-between items-center bg-gray-100 p-2 rounded-lg border-2 border-gray-800">
              <button onClick={prevMonth} disabled={isPrevDisabled} className={`p-2 rounded-md transition-colors ${isPrevDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-800 hover:bg-white border-2 border-transparent hover:border-gray-800'}`}>
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <div className="text-center font-bold text-lg capitalize">
                {calendarDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}
              </div>
              <button onClick={nextMonth} className="p-2 rounded-md text-gray-800 hover:bg-white border-2 border-transparent hover:border-gray-800 transition-colors">
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-sm font-bold text-gray-500 mb-2">
              <div>Do</div><div>Lu</div><div>Ma</div><div>Mi</div><div>Ju</div><div>Vi</div><div>Sá</div>
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {daysArray.map((day, index) => {
                if (!day) return <div key={index} className="p-2"></div>;

                const isPast = (currentYear === todayYear && currentMonth === todayMonth && day < todayDay) || 
                               (currentYear < todayYear) || 
                               (currentYear === todayYear && currentMonth < todayMonth);
                               
                const isReserved = !isPast && (
                  (currentMonth === todayMonth && (day === todayDay + 2 || day === todayDay + 4)) ||
                  (currentMonth !== todayMonth && (day === 5 || day === 12 || day === 18))
                );

                const isAvailable = !isPast && !isReserved;
                const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const isSelected = formData.date === dateString;

                let buttonClass = "p-2 border-2 rounded-md font-bold text-sm transition-all ";

                if (isPast) {
                  buttonClass += "border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed";
                } else if (isReserved) {
                  buttonClass += "border-gray-300 bg-gray-200 text-gray-500 cursor-not-allowed diagonal-stripes";
                } else if (isSelected) {
                  buttonClass += "border-gray-800 bg-gray-800 text-white shadow-inner";
                } else {
                  buttonClass += "border-gray-800 bg-white text-gray-800 hover:bg-gray-100 cursor-pointer shadow-[2px_2px_0px_0px_rgba(31,41,55,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]";
                }

                return (
                  <button key={index} type="button" disabled={!isAvailable} onClick={() => setFormData({...formData, date: dateString})} className={buttonClass}>
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="mt-auto pt-6 border-t border-gray-200 text-xs font-bold text-gray-500 flex justify-around">
              <div className="flex items-center gap-1"><div className="w-3 h-3 border-2 border-gray-800 bg-white"></div> Disponible</div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 border-2 border-gray-300 bg-gray-200 diagonal-stripes"></div> Reservado</div>
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .diagonal-stripes {
              background-image: repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(156, 163, 175, 0.2) 5px, rgba(156, 163, 175, 0.2) 10px);
            }
          `}} />
        </div>
      )}
    </div>
  );
}

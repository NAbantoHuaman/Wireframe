import React, { useState } from 'react';

// --- ÍCONOS SVG INTEGRADOS (SIN DUPLICADOS) ---
const CalendarIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const UserIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const ClockIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const ChevronRightIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 18 15 12 9 6"></polyline></svg>;
const ChevronLeftIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="15 18 9 12 15 6"></polyline></svg>;
const ListIconSvg = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>;
const PlusCircleIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>;
const CheckCircleIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const LockIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>;
const FileTextIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const SettingsIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
const HelpCircleIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
const LogOutIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>;
const AlertTriangleIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
const PhoneIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const MailIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const ChevronDownIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="6 9 12 15 18 9"></polyline></svg>;
const XIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const DownloadIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>;
const ActivityIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;
const SignatureIconSvg = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M 10 40 C 20 10, 30 10, 40 40 S 60 10, 70 40 S 90 20, 100 30 S 110 10, 120 40 S 140 20, 150 30 S 170 10, 180 40" /></svg>;
const StethoscopeIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>;
const DropletIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>;


// --- DATOS MAESTROS ---
const DOCTORS_BY_SPECIALTY = {
  'Cardiología': ['Dr. Pérez', 'Dra. Villalobos'],
  'Dermatología': ['Dra. Gómez', 'Dr. Ruiz'],
  'Pediatría': ['Dr. López', 'Dra. Silva'],
  'Neurología': ['Dra. Castro', 'Dr. Mendoza'],
  'Traumatología': ['Dr. Ramírez', 'Dra. Torres'],
  'Gastroenterología': ['Dr. Herrera', 'Dra. Medina']
};

const ALL_TIMES = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];
const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export default function App() {
  const [currentView, setCurrentView] = useState('login'); 
  const [userRole, setUserRole] = useState('patient'); // 'patient' o 'doctor'
  
  // ESTADOS GLOBALES DE LA CLÍNICA (Compartidos entre doctor y paciente)
  const [appointments, setAppointments] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState([]);
  
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form States
  const [formData, setFormData] = useState({ specialty: '', doctor: '', date: '', time: '' });
  const [completionData, setCompletionData] = useState({ diagnosis: '', details: '' });

  // Estados de Usuario Paciente (Con datos físicos añadidos)
  const [currentUser, setCurrentUser] = useState({ 
    name: '', document: '', email: '', phone: '', address: '',
    birthDate: '', bloodType: '', weight: '', height: '', allergies: ''
  });
  
  const [regData, setRegData] = useState({ 
    name: '', document: '', email: '', password: '',
    birthDate: '', bloodType: '', weight: '', height: '', allergies: ''
  });
  
  const [profData, setProfData] = useState(currentUser);
  const [passData, setPassData] = useState({ current: '', new: '', confirm: '' });

  // Estado para el Modal del PDF
  const [pdfModalData, setPdfModalData] = useState(null);
  
  // Estado para el Mes actual del Calendario
  const [calendarDate, setCalendarDate] = useState(new Date());

  // --- LÓGICA DEL CALENDARIO ---
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

  // --- LÓGICA DE NOTAS DINÁMICAS (PDF) ---
  const getAdditionalNotes = (specialty) => {
    switch(specialty) {
      case 'Cardiología': return "Revisar presión arterial en casa diariamente durante una semana. Evitar consumo excesivo de sodio y grasas saturadas. Programar prueba de esfuerzo en la próxima visita si los síntomas persisten.";
      case 'Dermatología': return "Aplicar bloqueador solar FPS 50+ cada 4 horas, incluso en interiores. Evitar exposición directa al sol entre las 10:00 AM y 4:00 PM. Usar crema humectante libre de fragancias.";
      case 'Pediatría': return "Monitorear temperatura corporal en caso de que se presente fiebre nocturna. Mantener hidratación constante. Actualizar cartilla de vacunación en los próximos 15 días.";
      case 'Neurología': return "Descansar un mínimo de 8 horas diarias. Reducir el tiempo frente a pantallas al menos 2 horas antes de dormir para evitar fatiga visual y cefaleas tensionales.";
      case 'Traumatología': return "Evitar cargar peso mayor a 5kg. Usar compresas frías en la zona afectada por 15 minutos dos veces al día. Realizar ejercicios de estiramiento suaves al despertar.";
      case 'Gastroenterología': return "Mantener dieta blanda por los próximos 3 días. Beber al menos 2 litros de agua diarios. Evitar irritantes, picantes, café y bebidas carbonatadas.";
      default: return "Mantener reposo relativo durante las próximas 48 horas. Beber abundantes líquidos y agendar una cita de seguimiento de inmediato si las molestias no cesan.";
    }
  };

  const handleNavigate = (view, data = null) => {
    setCurrentView(view);
    if (data) setSelectedAppointment(data);
    setShowSuccess(false);
    if (view === 'profile') setProfData(currentUser);
  };

  const handleCancelAppointment = () => {
    setAppointments(appointments.filter(apt => apt.id !== selectedAppointment.id));
    handleNavigate('list');
  };

  // PACIENTE: Crear reserva
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.specialty && formData.doctor && formData.date && formData.time) {
      // Guardamos la cita atando los datos físicos del paciente actual para que el doctor los vea
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
        handleNavigate('list');
      }, 2000);
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  // DOCTOR: Completar atención médica
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
      handleNavigate('doctorHome');
    }
  };

  // --- COMPONENTES DE CABECERA ---
  const renderHeader = () => {
    if (currentView === 'login' || currentView === 'register' || currentView === 'doctorLogin') {
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
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate(userRole === 'doctor' ? 'doctorHome' : 'home')}>
          <div className="w-8 h-8 bg-gray-300 border-2 border-gray-800 rounded-full flex items-center justify-center">
            <PlusCircleIcon className="text-gray-800 w-5 h-5" />
          </div>
          <h1 className="text-xl md:text-2xl font-black text-gray-800 tracking-tighter hidden sm:block">
            SaluDable <span className="text-sm font-normal text-gray-500 tracking-normal ml-2">{userRole === 'doctor' ? '| Portal Médico' : ''}</span>
          </h1>
        </div>
        
        {userRole === 'patient' ? (
          <nav className="hidden md:flex gap-6 items-center">
            <button onClick={() => handleNavigate('home')} className={`font-bold pb-1 ${currentView === 'home' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}>Inicio</button>
            <button onClick={() => handleNavigate('form')} className={`font-bold pb-1 ${currentView === 'form' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}>Agendar</button>
            <button onClick={() => handleNavigate('list')} className={`font-bold pb-1 ${currentView === 'list' || currentView === 'detail' || currentView === 'cancel' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}>Mis Citas</button>
            <button onClick={() => handleNavigate('history')} className={`font-bold pb-1 ${currentView === 'history' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}>Historial</button>
          </nav>
        ) : (
          <nav className="hidden md:flex gap-6 items-center">
            <button onClick={() => handleNavigate('doctorHome')} className={`font-bold pb-1 ${currentView === 'doctorHome' || currentView === 'doctorAttention' ? 'border-b-2 border-gray-800 text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}>Agenda Diaria</button>
          </nav>
        )}

        <div className="flex gap-4 items-center">
          {userRole === 'patient' && (
            <button onClick={() => handleNavigate('profile')} className="text-gray-600 hover:text-gray-900 border-2 border-transparent hover:border-gray-800 p-1 rounded-full transition-all" title="Mi Perfil">
               <UserIcon className="w-6 h-6" />
            </button>
          )}
          <button onClick={() => { setUserRole('patient'); handleNavigate('login'); }} className="text-gray-600 hover:text-gray-900 border-2 border-transparent hover:border-gray-800 p-1 rounded-full transition-all flex items-center gap-1" title="Cerrar Sesión">
             <LogOutIcon className="w-5 h-5" />
             {userRole === 'doctor' && <span className="text-xs font-bold uppercase">Salir</span>}
          </button>
        </div>
      </header>
    );
  };

  // --- PANTALLAS COMPARTIDAS ---

  const renderLogin = () => (
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
          handleNavigate('home'); 
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
          <button onClick={() => handleNavigate('register')} className="text-sm font-bold text-gray-600 underline hover:text-gray-900">
            ¿No tienes cuenta? Regístrate aquí
          </button>
          
          <button onClick={() => handleNavigate('doctorLogin')} className="mt-4 flex items-center justify-center gap-2 w-full py-2 bg-gray-100 border-2 border-dashed border-gray-400 rounded text-gray-600 font-bold hover:bg-gray-200 hover:border-gray-800 transition-all">
            <StethoscopeIcon className="w-5 h-5" />
            Acceso Personal Médico
          </button>
        </div>
      </div>
    </div>
  );

  const renderDoctorLogin = () => (
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
          handleNavigate('doctorHome'); 
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
          <button onClick={() => handleNavigate('login')} className="text-sm font-bold text-gray-600 underline hover:text-gray-900">
            Volver al Portal de Pacientes
          </button>
        </div>
      </div>
    </div>
  );

  const renderRegister = () => (
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
          handleNavigate('home'); 
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
          <button onClick={() => handleNavigate('login')} className="text-sm font-bold text-gray-600 underline">
            Ya tengo cuenta, volver al Login
          </button>
        </div>
      </div>
    </div>
  );

  // --- PANTALLAS DEL DOCTOR ---
  const renderDoctorHome = () => (
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
                    <button onClick={() => handleNavigate('doctorAttention', apt)} className="text-sm font-bold border-2 border-gray-800 px-4 py-2 rounded bg-gray-800 text-white hover:bg-black transition-colors">
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

  const renderDoctorAttention = () => (
    <div className="p-4 md:p-8 max-w-4xl mx-auto animate-in fade-in duration-300">
      <div className="mb-6 flex items-center gap-2">
        <button onClick={() => handleNavigate('doctorHome')} className="text-gray-500 hover:text-gray-800 font-bold">Agenda</button>
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
                 <button type="button" onClick={() => handleNavigate('doctorHome')} className="px-6 py-3 font-bold text-gray-600 border-2 border-transparent hover:bg-gray-100 rounded-md">Cancelar</button>
                 <button type="submit" className="px-6 py-3 bg-[#1e293b] text-white font-bold rounded-md hover:bg-black flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5"/> Finalizar Consulta
                 </button>
              </div>
           </form>
        </div>
      </div>
    </div>
  );


  // --- PANTALLAS DEL PACIENTE ---

  const renderHome = () => (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="border-4 border-gray-800 bg-gray-100 p-6 md:p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(31,41,55,1)]">
        <h2 className="text-3xl font-black mb-2">Hola, {currentUser.name ? currentUser.name.split(' ')[0] : 'Paciente'}</h2>
        <p className="text-gray-600 font-medium mb-6">¿Qué necesitas hacer hoy en la clínica?</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <button onClick={() => handleNavigate('form')} className="group flex flex-col items-start p-6 border-4 border-gray-800 bg-white hover:bg-gray-50 hover:-translate-y-1 transition-transform rounded-xl">
            <CalendarIcon className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-bold text-xl mb-1">Agendar Cita</h3>
            <p className="text-sm text-gray-500 font-medium text-left">Reserva con un especialista.</p>
          </button>

          <button onClick={() => handleNavigate('list')} className="group flex flex-col items-start p-6 border-4 border-gray-800 bg-white hover:bg-gray-50 hover:-translate-y-1 transition-transform rounded-xl relative">
            {appointments.length > 0 && (
              <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full">{appointments.length}</span>
            )}
            <ListIconSvg className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-bold text-xl mb-1">Mis Citas</h3>
            <p className="text-sm text-gray-500 font-medium text-left">Revisa tus próximas visitas.</p>
          </button>

          <button onClick={() => handleNavigate('history')} className="group flex flex-col items-start p-6 border-4 border-gray-800 bg-white hover:bg-gray-50 hover:-translate-y-1 transition-transform rounded-xl relative">
             {medicalHistory.length > 0 && (
              <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full">{medicalHistory.length}</span>
            )}
            <FileTextIcon className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-bold text-xl mb-1">Historial Médico</h3>
            <p className="text-sm text-gray-500 font-medium text-left">Resultados y reportes.</p>
          </button>
          
          <button onClick={() => handleNavigate('profile')} className="group flex flex-col items-start p-6 border-4 border-gray-800 bg-white hover:bg-gray-50 hover:-translate-y-1 transition-transform rounded-xl">
            <SettingsIcon className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-bold text-xl mb-1">Mi Perfil</h3>
            <p className="text-sm text-gray-500 font-medium text-left">Actualiza tus datos y ficha.</p>
          </button>

          <button onClick={() => handleNavigate('help')} className="group flex flex-col items-start p-6 border-4 border-gray-800 bg-white hover:bg-gray-50 hover:-translate-y-1 transition-transform rounded-xl lg:col-span-2">
            <HelpCircleIcon className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="font-bold text-xl mb-1">Centro de Ayuda</h3>
            <p className="text-sm text-gray-500 font-medium text-left">Preguntas frecuentes y contacto directo con soporte de la clínica.</p>
          </button>
        </div>
      </div>
    </div>
  );

  const renderForm = () => {
    const daysArray = [];
    for (let i = 0; i < firstDayOfMonth; i++) daysArray.push(null);
    for (let i = 1; i <= daysInMonth; i++) daysArray.push(i);

    const availableDoctors = formData.specialty ? DOCTORS_BY_SPECIALTY[formData.specialty] : [];

    return (
      <div className="p-8 max-w-4xl mx-auto animate-in fade-in duration-300">
        <div className="mb-6 flex items-center gap-2">
          <button onClick={() => handleNavigate('home')} className="text-gray-500 hover:text-gray-800 font-bold">Inicio</button>
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
                <button type="button" onClick={() => handleNavigate('home')} className="font-bold text-sm text-gray-800 hover:text-gray-600">Cancelar</button>
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
                  let titleAttr = "";

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
                    <button key={index} type="button" disabled={!isAvailable} title={titleAttr} onClick={() => setFormData({...formData, date: dateString})} className={buttonClass}>
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
  };

  const renderList = () => (
    <div className="p-8 max-w-4xl mx-auto animate-in fade-in duration-300">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <button onClick={() => handleNavigate('home')} className="text-gray-500 hover:text-gray-800 font-bold">Inicio</button>
            <span className="text-gray-400">/</span><span className="font-bold">Mis Citas</span>
          </div>
          <h2 className="text-3xl font-black">Citas Pendientes</h2>
        </div>
        <button onClick={() => handleNavigate('form')} className="px-4 py-2 bg-white shadow-[4px_4px_0px_0px_rgba(31,41,55,1)] border-2 border-gray-800 font-bold rounded flex items-center gap-2 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
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
                    <button onClick={() => handleNavigate('detail', apt)} className="text-sm font-bold border-2 border-gray-800 px-4 py-2 rounded bg-white hover:bg-gray-800 hover:text-white transition-colors">
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

  const renderDetail = () => (
    <div className="p-8 max-w-2xl mx-auto animate-in fade-in duration-300">
      <div className="mb-6 flex items-center gap-2">
        <button onClick={() => handleNavigate('list')} className="text-gray-500 hover:text-gray-800 font-bold">Mis Citas</button>
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
          <button onClick={() => handleNavigate('cancel', selectedAppointment)} className="px-6 py-3 font-bold text-gray-800 border-2 border-gray-800 rounded-md hover:bg-gray-100 transition-colors">
            Cancelar Cita
          </button>
        </div>
      </div>
    </div>
  );

  const renderCancel = () => (
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
          <button onClick={() => handleNavigate('detail', selectedAppointment)} className="w-full py-3 font-bold text-gray-600 border-2 border-transparent hover:bg-gray-100 rounded-md">
            No, mantener cita
          </button>
        </div>
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="p-8 max-w-4xl mx-auto animate-in fade-in duration-300">
      <div className="mb-6 flex items-center gap-2">
        <button onClick={() => handleNavigate('home')} className="text-gray-500 hover:text-gray-800 font-bold">Inicio</button>
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

  const renderPdfModal = () => {
    if (!pdfModalData) return null;

    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
        <div className="bg-white border-4 border-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="border-b-4 border-gray-800 p-4 flex justify-between items-center bg-gray-100">
            <h3 className="font-black text-lg flex items-center gap-2">
              <FileTextIcon className="w-5 h-5" /> Reporte_Medico_{pdfModalData.date}.pdf
            </h3>
            <div className="flex gap-2">
              <button onClick={() => alert('Simulación de descarga...')} className="p-2 border-2 border-gray-800 rounded bg-white hover:bg-gray-200">
                <DownloadIcon className="w-5 h-5" />
              </button>
              <button onClick={() => setPdfModalData(null)} className="p-2 border-2 border-gray-800 rounded bg-white hover:bg-red-50 hover:text-red-600 hover:border-red-600">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-8 overflow-y-auto bg-gray-50">
            <div className="bg-white border-2 border-gray-300 p-8 shadow-sm min-h-[500px] font-serif">
              <div className="text-center border-b-2 border-gray-200 pb-6 mb-6">
                <h1 className="text-3xl font-black text-gray-800 uppercase tracking-widest mb-2">SaluDable</h1>
                <p className="text-gray-500 font-sans text-sm">REPORTE MÉDICO OFICIAL</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                <div>
                  <p><span className="font-bold">Paciente:</span> {pdfModalData.patientName}</p>
                  <p><span className="font-bold">DNI:</span> {pdfModalData.patientDni}</p>
                </div>
                <div className="text-right">
                  <p><span className="font-bold">Fecha:</span> {pdfModalData.attentionDate}</p>
                  <p><span className="font-bold">Médico:</span> {pdfModalData.doctor}</p>
                  <p><span className="font-bold">Especialidad:</span> {pdfModalData.specialty}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg border-b border-gray-300 mb-2">1. Diagnóstico Principal</h4>
                  <p className="text-gray-700 leading-relaxed">{pdfModalData.diagnosis}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg border-b border-gray-300 mb-2">2. Observaciones y Tratamiento</h4>
                  <p className="text-gray-700 leading-relaxed">{pdfModalData.details}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg border-b border-gray-300 mb-2">3. Notas Adicionales</h4>
                  <div className="mt-2 bg-gray-100 p-4 rounded border-l-4 border-gray-800">
                    <p className="text-gray-700 leading-relaxed italic">
                      "{getAdditionalNotes(pdfModalData.specialty)}"
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t-2 border-gray-200 text-center relative">
                <div className="w-48 mx-auto mb-1 text-gray-800">
                   <SignatureIconSvg className="w-full h-12" />
                </div>
                <div className="w-48 border-b-2 border-gray-800 mx-auto mb-2"></div>
                <p className="font-bold text-sm uppercase">{pdfModalData.doctor}</p>
                <p className="text-xs text-gray-500">Firma Electrónica Autorizada - {pdfModalData.specialty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProfile = () => (
    <div className="p-8 max-w-2xl mx-auto animate-in fade-in duration-300">
      <div className="mb-6 flex items-center gap-2">
        <button onClick={() => handleNavigate('home')} className="text-gray-500 hover:text-gray-800 font-bold">Inicio</button>
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

  const renderHelp = () => (
    <div className="p-8 max-w-2xl mx-auto animate-in fade-in duration-300">
      <div className="mb-6 flex items-center gap-2">
        <button onClick={() => handleNavigate('home')} className="text-gray-500 hover:text-gray-800 font-bold">Inicio</button>
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

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-gray-900 flex flex-col">
      {renderHeader()}
      <main className="flex-grow relative">
        {currentView === 'login' && renderLogin()}
        {currentView === 'doctorLogin' && renderDoctorLogin()}
        {currentView === 'register' && renderRegister()}
        {currentView === 'home' && renderHome()}
        {currentView === 'form' && renderForm()}
        {currentView === 'list' && renderList()}
        {currentView === 'detail' && renderDetail()}
        {currentView === 'cancel' && renderCancel()}
        {currentView === 'history' && renderHistory()}
        {currentView === 'profile' && renderProfile()}
        {currentView === 'help' && renderHelp()}
        
        {/* Rutas exclusivas del Doctor */}
        {currentView === 'doctorHome' && renderDoctorHome()}
        {currentView === 'doctorAttention' && renderDoctorAttention()}
      </main>
      <footer className="py-6 text-center text-gray-500 font-medium text-sm border-t-2 border-gray-200 mt-auto bg-white z-10">
        Wireframe / Prototipo Digital (SaluDable) - Diseño UI Interactivo
      </footer>
      
      {renderPdfModal()}
    </div>
  );
}
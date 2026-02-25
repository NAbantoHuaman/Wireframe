import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [userRole, setUserRole] = useState('patient');
  const [appointments, setAppointments] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const [currentUser, setCurrentUser] = useState({ 
    name: '', document: '', email: '', phone: '', address: '',
    birthDate: '', bloodType: '', weight: '', height: '', allergies: ''
  });

  const [pdfModalData, setPdfModalData] = useState(null);

  return (
    <AppContext.Provider value={{
      userRole, setUserRole,
      appointments, setAppointments,
      medicalHistory, setMedicalHistory,
      selectedAppointment, setSelectedAppointment,
      showSuccess, setShowSuccess,
      currentUser, setCurrentUser,
      pdfModalData, setPdfModalData,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const DOCTORS_BY_SPECIALTY = {
  'Cardiología': ['Dr. Pérez', 'Dra. Villalobos'],
  'Dermatología': ['Dra. Gómez', 'Dr. Ruiz'],
  'Pediatría': ['Dr. López', 'Dra. Silva'],
  'Neurología': ['Dra. Castro', 'Dr. Mendoza'],
  'Traumatología': ['Dr. Ramírez', 'Dra. Torres'],
  'Gastroenterología': ['Dr. Herrera', 'Dra. Medina']
};

export const ALL_TIMES = ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];

export const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const getAdditionalNotes = (specialty) => {
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

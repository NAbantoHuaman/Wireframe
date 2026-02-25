import React from 'react';
import { useAppContext } from '../context/AppContext';
import { getAdditionalNotes } from '../data/constants';
import { FileTextIcon, DownloadIcon, XIcon, SignatureIconSvg } from './Icons';

export default function PdfModal() {
  const { pdfModalData, setPdfModalData } = useAppContext();

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
}

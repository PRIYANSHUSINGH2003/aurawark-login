import React from "react";
import Status from "./Status";

interface PrescriptionData {
  id: string;
  name: string;
  birthdate: string;
  gender: string;
  sa: string;
  doctor: string;
  treatmentPeriod: string;
  registrationDate: string;
  lastPrescriptionDate: string;
  status: string;
}

interface PrescriptionTableRow {
  patient: PrescriptionData;
}

// Define column widths to ensure alignment - same as in PatientTable.tsx
const columnWidths = {
  id: "w-20 sm:w-24 md:w-28",
  name: "w-20 sm:w-24 md:w-28",
  birthdate: "w-20 sm:w-24 md:w-28",
  gender: "w-14 sm:w-16 md:w-20",
  sa: "w-20 sm:w-24 md:w-28",
  doctor: "w-20 sm:w-24 md:w-28",
  treatmentPeriod: "w-24 sm:w-32 md:w-42",
  registrationDate: "w-28 sm:w-36 md:w-40",
  lastPrescriptionDate: "w-24 sm:w-28 md:w-32",
  status: "w-24 sm:w-28 md:w-32 flex justify-center",
};


const PrescriptionTableRow: React.FC<PrescriptionTableRow> = ({ patient }) => {
  return (
    <div className="box-border flex items-center p-0 m-0 h-[68px] max-sm:min-w-[800px]">
      <div className={`box-border p-2.5 m-0 text-sm opacity-80 text-zinc-900 ${columnWidths.id}`}>
        {patient.id}
      </div>
      <div className={`box-border p-2.5 m-0 text-sm opacity-80 text-zinc-900 ${columnWidths.name}`}>
        {patient.name}
      </div>
      <div className={`box-border p-2.5 m-0 text-sm opacity-80 text-zinc-900 ${columnWidths.birthdate}`}>
        {patient.birthdate}
      </div>
      <div className={`box-border p-2.5 m-0 text-sm opacity-80 text-zinc-900 ${columnWidths.gender}`}>
        {patient.gender}
      </div>
      <div className={`box-border p-2.5 m-0 text-sm opacity-80 text-zinc-900 ${columnWidths.sa}`}>
        {patient.sa}
      </div>
      <div className={`box-border p-2.5 m-0 text-sm opacity-80 text-zinc-900 ${columnWidths.doctor}`}>
        {patient.doctor}
      </div>
      <div className={`box-border p-2.5 m-0 text-sm opacity-80 text-zinc-900 ${columnWidths.treatmentPeriod}`}>
        {patient.treatmentPeriod}
      </div>
      <div className={`box-border p-2.5 m-0 text-sm opacity-80 text-zinc-900 ${columnWidths.registrationDate}`}>
        {patient.registrationDate}
      </div>
      <div className={`box-border p-2.5 m-0 text-sm opacity-80 text-zinc-900 ${columnWidths.lastPrescriptionDate}`}>
        {patient.lastPrescriptionDate}
      </div>
      <div className={`box-border flex justify-center items-center p-2.5 m-0 text-sm opacity-80 text-zinc-900 ${columnWidths.status}`}>
        <Status status={patient.status} />
      </div>
    </div>
  );
};

export default PrescriptionTableRow;

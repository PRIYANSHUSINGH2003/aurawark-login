import React from "react";
import StatusBadge from "./StatusBadge";

interface PatientData {
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

interface PatientTableRowProps {
  patient: PatientData;
}

// Define column widths to ensure alignment - same as in PatientTable.tsx
const columnWidths = {
  id: "w-24",
  name: "w-24",
  birthdate: "w-24",
  gender: "w-16",
  sa: "w-24",
  doctor: "w-24",
  treatmentPeriod: "w-32",
  registrationDate: "w-36",
  lastPrescriptionDate: "w-28",
  status: "w-28 flex justify-center"
};

const PatientTableRow: React.FC<PatientTableRowProps> = ({ patient }) => {
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
        <StatusBadge status={patient.status} />
      </div>
    </div>
  );
};

export default PatientTableRow;

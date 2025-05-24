import React from "react";
import PatientTableRow from "./PatientTableRow";
import SortIcon from "./icons/SortIcon";

interface Patient {
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

interface Props {
  data: Patient[];
}

// Define column widths to ensure alignment
const columnWidths = {
  id: "w-24 sm:w-24",
  name: "w-24 sm:w-24",
  birthdate: "w-28 sm:w-24",
  gender: "w-20 sm:w-16",
  sa: "w-28 sm:w-24",
  doctor: "w-28 sm:w-24",
  treatmentPeriod: "w-40 sm:w-32",
  registrationDate: "w-44 sm:w-36",
  lastPrescriptionDate: "w-32 sm:w-28",
  status: "w-28 sm:w-28 flex justify-center"
};

// Sample data for demonstration
export const patientData = [
      {
      id: "82869",
      name: "박명수",
      birthdate: "980530",
      gender: "남",
      sa: "M/9m7d",
      doctor: "홍지원",
      treatmentPeriod: "2025.01.30 ~ 2025.01.30",
      registrationDate: "2025.01.30 (화)",
      lastPrescriptionDate: "2025.01.30 (화)",
      status: "completed" as const,
    },
    {
      id: "82870",
      name: "박명수",
      birthdate: "980530",
      gender: "남",
      sa: "M/9m7d",
      doctor: "-",
      treatmentPeriod: "-",
      registrationDate: "2025.01.30 (화)",
      lastPrescriptionDate: "-",
      status: "prescription" as const,
    },
    {
      id: "82866",
      name: "박명수",
      birthdate: "980530",
      gender: "남",
      sa: "M/9m7d",
      doctor: "김지희",
      treatmentPeriod: "2025.01.30 ~ 2025.01.30",
      registrationDate: "2025.01.30 (화)",
      lastPrescriptionDate: "2025.01.30 (화)",
      status: "prescription" as const,
    },
    {
      id: "82864",
      name: "박명수",
      birthdate: "980530",
      gender: "남",
      sa: "M/9m7d",
      doctor: "-",
      treatmentPeriod: "-",
      registrationDate: "2025.01.30 (화)",
      lastPrescriptionDate: "-",
      status: "waiting" as const,
    },
    {
      id: "82864",
      name: "박명수",
      birthdate: "980530",
      gender: "남",
      sa: "M/9m7d",
      doctor: "-",
      treatmentPeriod: "-",
      registrationDate: "2025.01.30 (화)",
      lastPrescriptionDate: "-",
      status: "waiting" as const,
    },
    {
      id: "82865",
      name: "최수현",
      birthdate: "980530",
      gender: "남",
      sa: "M/87d",
      doctor: "김지희",
      treatmentPeriod: "2025.01.30 ~ 2025.01.30",
      registrationDate: "2025.01.30 (화)",
      lastPrescriptionDate: "2025.01.30 (화)",
      status: "completed" as const,
    },
    {
      id: "82864",
      name: "박명수",
      birthdate: "980530",
      gender: "남",
      sa: "M/9m7d",
      doctor: "-",
      treatmentPeriod: "-",
      registrationDate: "2025.01.30 (화)",
      lastPrescriptionDate: "-",
      status: "completed" as const,
    },
    {
      id: "82864",
      name: "박명수",
      birthdate: "980530",
      gender: "남",
      sa: "M/9m7d",
      doctor: "-",
      treatmentPeriod: "-",
      registrationDate: "2025.01.30 (화)",
      lastPrescriptionDate: "-",
      status: "completed" as const,
    },
];

const PatientTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="box-border flex flex-col p-0 m-0 w-full overflow-x-auto">
      <div className="min-w-[900px]">
        <div className="box-border flex items-center p-0 m-0 h-12 rounded-xl bg-slate-100 bg-opacity-50 max-sm:min-w-[800px]">
          <div className={`box-border flex gap-2.5 justify-start items-center p-2.5 m-0 whitespace-nowrap ${columnWidths.id}`}>
            <h4 className="box-border p-0 m-0 text-sm font-bold opacity-80 text-zinc-900">
              등록번호
            </h4>
            <SortIcon />
          </div>
          <div className={`box-border flex gap-2.5 justify-start items-center p-0 m-0 ${columnWidths.name}`}>
            <h4 className="box-border p-0 m-0 text-sm font-bold opacity-80 text-zinc-900">
              환자명
            </h4>
            <SortIcon />
          </div>
          <div className={`box-border flex gap-2.5 justify-start items-center p-0 m-0 ${columnWidths.birthdate}`}>
            <h4 className="box-border p-0 m-0 text-sm font-bold opacity-80 text-zinc-900">
              생년월일
            </h4>
            <SortIcon />
          </div>
          <div className={`box-border flex gap-2.5 justify-start items-center p-0 m-0 ${columnWidths.gender}`}>
            <h4 className="box-border p-0 m-0 text-sm font-bold opacity-80 text-zinc-900">
              성별
            </h4>
            <SortIcon />
          </div>
          <div className={`box-border flex gap-2.5 justify-start items-center p-0 m-0 ${columnWidths.sa}`}>
            <h4 className="box-border p-0 m-0 text-sm font-bold opacity-80 text-zinc-900">
              S/A
            </h4>
            <SortIcon />
          </div>
          <div className={`box-border flex gap-2.5 justify-start items-center p-0 m-0 ${columnWidths.doctor}`}>
            <h4 className="box-border p-0 m-0 text-sm font-bold opacity-80 text-zinc-900">
              담당 의사
            </h4>
            <SortIcon />
          </div>
          <div className={`box-border flex gap-2.5 justify-start items-center p-2.5 m-0 whitespace-nowrap ${columnWidths.treatmentPeriod}`}>
            <h4 className="box-border p-0 m-0 text-sm font-bold opacity-80 text-zinc-900">
              치료 처방 기간
            </h4>
            <SortIcon />
          </div>
          <div className={`box-border flex gap-1.5 justify-start items-center m-0 ${columnWidths.registrationDate}`}>
            <h4 className="box-border p-0 m-0 text-sm font-bold opacity-80 text-zinc-900">
              환자 등록일
            </h4>
            <SortIcon />
          </div>
          <div className={`box-border flex gap-2.5 justify-start items-center m-0 whitespace-nowrap ${columnWidths.lastPrescriptionDate}`}>
            <h4 className="box-border p-0 m-0 text-sm font-bold opacity-80 text-zinc-900">
              최종 처방일
            </h4>
            <SortIcon />
          </div>
          <div className={`box-border flex gap-2.5 justify-center items-center m-0 ${columnWidths.status}`}>
            <h4 className="box-border p-0 m-0 text-sm font-bold opacity-80 text-zinc-900">
              처방 상태
            </h4>
            <SortIcon />
          </div>
        </div>

        <div className="box-border flex flex-col p-0 m-0 whitespace-nowrap">
          {data.map((patient, index) => (
            <React.Fragment key={index}>
              <PatientTableRow patient={patient} />
              {index < patientData.length - 1 && (
                <hr className="box-border p-0 m-0 w-full opacity-40 bg-slate-400 h-[0.4px]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientTable;

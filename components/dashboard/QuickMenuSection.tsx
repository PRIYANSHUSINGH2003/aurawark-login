import React from "react";
import QuickMenuCard from "./QuickMenuCard";
import PrescriptionCardIcon from "./icons/PrescriptionCardIcon";
import PatientRegistrationIcon from "./icons/PatientRegistrationIcon";

const QuickMenuSection: React.FC = () => {
  return (
    <section className="box-border p-0 m-0 mb-16">
      <h2 className="box-border p-0 m-0 mb-6 text-3xl font-bold leading-10 text-zinc-900 max-sm:text-2xl max-sm:leading-8">
        Quick Menu
      </h2>
      <div className="box-border flex gap-4 p-0 m-0 max-md:flex-col">
        <QuickMenuCard
          title="처방하기"
          subtitle="빠르고 간편하게"
          icon={<PrescriptionCardIcon />}
        />
        <QuickMenuCard
          title="환자 등록하기"
          subtitle="처음 진료 받는"
          icon={<PatientRegistrationIcon />}
        />
      </div>
    </section>
  );
};

export default QuickMenuSection;

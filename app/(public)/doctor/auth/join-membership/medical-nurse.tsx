import React from "react";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";

type Props = {
  label: string;
  cta: string;
  onClick?: () => void; // add this
};

const MedicalNurse = ({ label, cta, onClick }: Props) => {
  return (
    <div className="space-y-2 w-full">
      <Label className="text-sm font-medium text-[color:var(--aiortho-gray-500)] relative">
        <span className="-mr-2 -mb-1">{label}</span>
        <span className="inline-block text-[color:var(--aiortho-primary)]">*</span>
      </Label>
      <div
        onClick={onClick} // add onClick here
        className="border-[color:var(--aiortho-gray-200)] border-[1px] rounded-lg flex justify-center items-center h-10 gap-2 cursor-pointer"
      >
        <Plus size={18} color="#0054A6" />
        <p className="font-semibold text-base text-[color:var(--aiortho-primary)]">
          {cta}
        </p>
      </div>
    </div>
  );
};

export default MedicalNurse;

"use client";

import React from "react";

interface FormFieldProps {
  label: string;
  placeholder: string;
  required?: boolean;
  errorMessage?: string;
  children?: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  required = false,
  errorMessage,
  children,
}) => {
  return (
    <div className="mt-6 w-full max-md:max-w-full">
      <div className="text-sm leading-none text-slate-400 max-md:max-w-full">
        {label}
        {required && (
          <span style={{ color: "rgba(0,84,166,1)" }}> *</span>
        )}
      </div>
      <div className="mt-3 w-full max-md:max-w-full">
        {children || (
          <div className="flex-1 shrink gap-2.5 self-stretch px-4 py-4 w-full text-base rounded-xl border border-solid basis-0 border-[color:var(--Gray\_200,#DADFE9)] min-h-12 text-slate-400 max-md:max-w-full">
            {placeholder}
          </div>
        )}
        {errorMessage && (
          <div className="mt-2 text-sm leading-none text-rose-600 max-md:max-w-full">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormField;

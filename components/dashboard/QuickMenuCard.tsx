import React, { ReactNode } from "react";

interface QuickMenuCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

const QuickMenuCard: React.FC<QuickMenuCardProps> = ({ title, subtitle, icon }) => {
  return (
    <article className="box-border px-8 py-7 m-0 bg-white rounded-2xl shadow-2xl w-[560px] max-md:w-full">
      <div className="box-border flex justify-between items-center p-0 m-0">
        <div className="box-border flex flex-col gap-3 p-0 m-0">
          <p className="box-border p-0 m-0 text-base text-slate-400">
            {subtitle}
          </p>
          <h3 className="box-border p-0 m-0 text-2xl font-bold tracking-wider text-gray-700">
            {title}
          </h3>
        </div>
        <div>
          {icon}
        </div>
      </div>
    </article>
  );
};

export default QuickMenuCard;

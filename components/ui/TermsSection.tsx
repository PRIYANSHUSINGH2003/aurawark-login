import React from "react";

interface TermsSectionProps {
  number: number;
  title: string;
  content: string;
}

const TermsSection: React.FC<TermsSectionProps> = ({ number, title, content }) => {
  return (
    <article className="flex flex-col gap-5 items-start w-full">
      <h3 className="w-full h-4 text-xl font-bold leading-6 text-gray-600 max-md:text-lg max-md:leading-5 max-sm:text-base max-sm:leading-5">
        {number}. {title}
      </h3>
      <p className="w-full text-base leading-6 text-slate-500 max-md:text-base max-sm:text-sm max-sm:leading-5">
        {content}
      </p>
    </article>
  );
};

export default TermsSection;

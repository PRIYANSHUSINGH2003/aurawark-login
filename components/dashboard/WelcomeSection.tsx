import React from "react";

const WelcomeSection: React.FC = () => {
  return (
    <section className="box-border p-0 m-0 mb-10">
      <div className="box-border flex flex-col gap-3 p-0 m-0 mb-14">
        <div className="box-border flex gap-2 items-center p-0 m-0 max-sm:flex-col max-sm:items-start">
          <h2 className="box-border p-0 m-0 text-4xl font-bold leading-10 text-zinc-900 max-sm:text-3xl max-sm:leading-9">
            박의사님,
          </h2>
          <h2 className="box-border p-0 m-0 text-4xl font-bold leading-10 text-zinc-900 max-sm:text-3xl max-sm:leading-9">
            안녕하세요
          </h2>
        </div>
        <p className="box-border p-0 m-0 text-lg leading-6 text-slate-500 max-sm:text-base">
          의사 코드 - UH2406001
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;

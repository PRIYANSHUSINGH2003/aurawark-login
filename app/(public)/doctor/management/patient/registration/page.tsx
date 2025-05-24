"use client";
import React, { useState } from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import PatientRegistrationPageHeader from "@/components/dashboard/PatientRegistrationPageHeader";
import PatientRegistrationForm from "@/components/dashboard/PatientRegistrationForm";

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="box-border relative p-0 m-0 w-full min-h-screen bg-white">
      <Header />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <PatientRegistrationPageHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <section className="box-border px-8 pt-1 pb-8 m-0 mt-8 sm:mt-9 ml-60 max-md:mt-16 max-md:ml-0 max-md:w-full max-md:h-full max-md:min-h-[calc(100vh_-_120px)] max-sm:px-4 max-sm:pt-8 max-sm:pb-4">
        <div className="ml-5 w-[83%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-wrap grow gap-8 items-start py-px pr-20 w-full bg-white">
            <div className="flex flex-col items-start mt-3 max-md:max-w-full">
                <h1 className="gap-4 self-stretch mt-16 text-3xl font-bold leading-none text-zinc-900 max-md:mt-10">
                  환자 정보
                </h1>
                <p className="mt-5 text-lg leading-none text-slate-500">
                  환자 정보을 위해 아래 항목들을 입력해주세요.
                </p>
                <PatientRegistrationForm />
              </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

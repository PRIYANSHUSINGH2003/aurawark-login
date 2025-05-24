"use client";
import React, { useState } from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import PrescriptionPageHeader from "@/components/dashboard/PrescriptionPageHeader";
import PrescriptionSection from "@/components/dashboard/PrescriptionSection";

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="box-border relative p-0 m-0 w-full min-h-screen bg-slate-50">
      <Header />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <PrescriptionPageHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <section className="box-border px-8 pt-14 pb-8 m-0 mt-8 sm:mt-9 ml-60 max-md:mt-16 max-md:ml-0 max-md:w-full max-md:h-full max-md:min-h-[calc(100vh_-_120px)] max-sm:px-4 max-sm:pt-8 max-sm:pb-4">
        <PrescriptionSection />
      </section>
    </main>
  );
};

export default Dashboard;

"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

const PublicLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathname = usePathname();
  const isDoctorHome = pathname.startsWith("/doctor/home");
  const isDoctorManagementPatient = pathname.startsWith("/doctor/management/patient");

  const shouldShowFooter = !isDoctorHome && !isDoctorManagementPatient;

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">{children}</main>
      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default PublicLayout;

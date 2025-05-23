"use client";
import * as React from "react";
import Navbar from "../../components/Navbar";
import SeparatorLine from "../../components/ui/SeparatorLine";
import TermsContent from "../../components/ui/TermsContent";

function TermsOfServicePage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Pretendard+Variable:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <main className="relative w-full min-h-screen bg-white">
        <Navbar />
        <SeparatorLine />
        <TermsContent />
      </main>
    </>
  );
}

export default TermsOfServicePage;

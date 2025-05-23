import React from "react";
import Logo from "./Logo";
import { Separator } from "./ui/separator";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-7 py-0 bg-white h-[72px]">
        <Logo fontSize="text-3xl"/>
      </nav>
      <Separator className="w-full text-[color:var(--ortho-gray-200)]" />
    </>
  );
};

export default Navbar;

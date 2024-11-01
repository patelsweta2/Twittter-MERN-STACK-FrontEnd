import React from "react";
import { NavLink } from "react-router-dom";
import SearchInput from "../UserPage/SearchInputs";
import LogoText from "./LogoText";
import LogoutBtn from "./LogoutButtons";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="py-3 shadow-md px-[5%] md:px-[10%] md:flex md:items-center md:justify-between hidden bg-black w-full">
      <LogoText />

      <div className="w-full mx-4">
        <SearchInput />
      </div>
      <div className="w-[80%] text-2xl">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;

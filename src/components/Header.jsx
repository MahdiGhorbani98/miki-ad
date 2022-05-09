import React from "react";
import logo from "../assets/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  return (
    <header className="w-full h-20 bg-white shadow-md fixed top-0 flex justify-between items-center">
      <img className="w-32 h-16 ml-8" src={logo} alt="Logo" />
      <HiMenuAlt3 className="w-10 h-10 m-4 mr-8" />
    </header>
  );
};

export default Header;

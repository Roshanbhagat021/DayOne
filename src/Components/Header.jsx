import React, { useState } from "react";
import logo from "../assets/logo.png";
import MenuIcon from "../utilities/MenuIcon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between p-3 border-b border-[#f1f4f6] md:px-6 lg:px-8 xl:px-10">
        <img
          src={logo}
          alt="Logo"
          className="mr-4 sm:max-w-[180px] md:max-w-[220px] lg:max-w-[250px] max-[664px]:max-w-[150px] cursor-pointer"
        />

        <ul className="items-center text-[rgb(51,59,64)] text-xl md:gap-8 lg:gap-6 xl:gap-12 hidden min-[780px]:flex">
          <li className="hover:text-[#1e75ae] hover:underline underline-offset-8 decoration-[rgb(51,59,64)] cursor-pointer">
            Features
          </li>
          <li className="hover:text-[#1e75ae] hover:underline underline-offset-8 decoration-[rgb(51,59,64)] cursor-pointer">
            Premium
          </li>
          <li className="hover:text-[#1e75ae] hover:underline underline-offset-8 decoration-[rgb(51,59,64)] cursor-pointer">
            What's New
          </li>
          <li className="hover:text-[#1e75ae] hover:underline underline-offset-8 decoration-[rgb(51,59,64)] cursor-pointer">
            Paper Journals
          </li>
          <li className="border text-[#1e75ae] py-2.5 px-11 rounded-[5px] hover:text-[rgb(51,59,64)] cursor-pointer hidden min-[920px]:block">
            Get the App
          </li>
        </ul>

        <button
          className="max-[780px]:block hidden cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon />
        </button>
      </header>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-500 ease-in-out hidden max-[780px]:block ${
          menuOpen ? "translate-y-0" : "-translate-y-full "
        }`}
      >
        <button
          className="absolute top-5 right-5 text-2xl font-bold text-[#1e75ae] cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        
        <div className="mx-16 my-18"> 
        <ul className="items-center text-[rgb(51,59,64)] text-2xl gap-8  flex justify-center flex-col ">
          <li className="hover:text-[#1e75ae] hover:underline underline-offset-8 decoration-[rgb(51,59,64)] cursor-pointer">
            Features
          </li>
          <li className="hover:text-[#1e75ae] hover:underline underline-offset-8 decoration-[rgb(51,59,64)] cursor-pointer">
            Premium
          </li>
          <li className="hover:text-[#1e75ae] hover:underline underline-offset-8 decoration-[rgb(51,59,64)] cursor-pointer">
            What's New
          </li>
          <li className="hover:text-[#1e75ae] hover:underline underline-offset-8 decoration-[rgb(51,59,64)] cursor-pointer">
            Paper Journals
          </li>
        </ul>
        </div>
        
      </div>
    </>
  );
}

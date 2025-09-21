import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div
        className="bg-[#e8e8e8] fixed p-4 px-30 shadow-lg flex justify-between items-center montserrat text-lg z-10 w-full"
    >
      <div className="flex items-center space-x-4">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h1 className="text-[#37353E]">My Portfolio</h1>
      </div>
      <nav>
        <ul className="flex space-x-10 text-[#37353E]">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

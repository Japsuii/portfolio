import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div
        className="bg-[linear-gradient(to_right,#616161,#6D6D6D,#7D7D7D,#555555,#474747)] 
        p-4 px-30 shadow-lg flex justify-between items-center montserrat text-lg"
    >
      <div className="flex items-center space-x-4">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <h1 className="text=[#D3DAD9]">My Portfolio</h1>
      </div>
      <nav>
        <ul className="flex space-x-10">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
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

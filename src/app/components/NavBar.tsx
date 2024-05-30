import Image from "next/image";
import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="container pt-6">
      <div className="flex justify-between items-center">
        <Image src="/logo.png" width={80} height={80} alt="logo" />
        <ul className=" text-black md:flex gap-8 items-center font-semibold text-[14px] rounded-3xl hidden custom-list-item">
          <li>Home</li>
          <li>About</li>
          <li>Food Rececipes</li>
          <li>Contact</li>
          <button className="bg-red-500 text-white px-6 py-2 rounded-3xl">
            SignUp
          </button>
        </ul>

        <AiOutlineMenu className="md:hidden text-accent" size={30} />
      </div>
    </nav>
  );
};

export default Navbar;

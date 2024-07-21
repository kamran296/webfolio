import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="w-full h-10  bg-slate-100 flex items-center justify-between z-50 fixed top-0 left-0 right-0 shadow-lg ">
      <a href="" className="flex items-center px-2">
        <span>Portfolio</span>
      </a>
      <div className=" flex  justify-center">
        <button onClick={() => handleClick()}>
          {isMenuOpen ? (
            <IoMdClose className="text-xl mr-2 text-black-500 md:hidden" />
          ) : (
            <CiMenuBurger className="text-xl mr-2 text-black-500 md:hidden" />
          )}
        </button>

        <ul className="hidden  md:flex items-center  ">
          <li className="mr-2 border rounded-lg border-gray-400">
            <a href="" className="p-2">
              Home
            </a>
          </li>
          <li className="mr-2 border rounded-lg border-gray-400">
            <a href="" className="p-2">
              About
            </a>
          </li>
          <li className="mr-2 border rounded-lg border-gray-400">
            <a href="" className="p-2">
              Skills
            </a>
          </li>
          <li className="mr-2 border rounded-lg border-gray-400">
            <a href="" className="p-2">
              Projects
            </a>
          </li>
          <li className="mr-2 border rounded-lg border-gray-400">
            <a href="" className="p-2">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div
        id="nav-dialog"
        className={`fixed  bg-gray-500  z-50 inset-0 px-2 pt-2 h-screen ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <div className="flex justify-between">
          <a href="" className="flex items-center px-2">
            <span>Portfolio</span>
          </a>
          <button onClick={() => handleClick()}>
            <IoMdClose className="text-xl mr-2 text-black-500 md:hidden" />
          </button>
        </div>
        <div className=" mt-2 flex flex-col px-2">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <div className="flex items-center ">
            <button>
              <a href="">Contact</a>
            </button>
            <span className="ml-1">
              <a href="">
                <IoMdArrowForward />
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

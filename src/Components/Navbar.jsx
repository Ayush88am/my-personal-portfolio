// Navbar.js
import React, { useState } from "react";
import ToggleHeader from "./ToggleHeader";
import { MdOutlineClear, MdOutlineMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="flex h-20 items-center justify-between">
        <ul className="text-white cursor-pointer ml-6 list-none font-500 text-3xl">
          <li className="relative">
            <NavLink to="/" className="hover:text-purple-400">
              Ayush
            </NavLink>
            <br />
            <span className="absolute top-6 right-0 text-[1.3rem] text-purple-400">
              <NavLink to="/" className="hover:text-purple-400">
                web_dev
              </NavLink>
            </span>
          </li>
        </ul>
        <ul className="md:flex mt-8 cursor-pointer text-yellow-100 mr-20 gap-12 list-none font-500 text-2xl hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold text-purple-400" : ""
              }
            >
              _home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "font-bold text-purple-400" : ""
              }
            >
              _about
            </NavLink>
          </li>
          <li>
           
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "font-bold text-purple-400" : ""
              }
            >
              _resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "font-bold text-purple-400" : ""
              }
            >
              _contact
            </NavLink>
          </li>
        </ul>
        {!toggle ? (
          <button
            className="md:hidden"
            onClick={() => {
              setToggle(true);
            }}
          >
            <MdOutlineMenu className="mr-7 mt-3 transition-all delay-150 size-8 text-green-300" />
          </button>
        ) : (
          <button
            className="md:hidden"
            onClick={() => {
              setToggle(false);
            }}
          >
            <MdOutlineClear className="mr-7 text-green-300 mt-3 size-8" />
          </button>
        )}
      </nav>

      {toggle && <ToggleHeader />}
    </>
  );
};

export default Navbar;

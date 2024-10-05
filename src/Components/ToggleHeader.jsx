import React from "react";
import { NavLink } from "react-router-dom";

const ToggleHeader = ({ setToggle }) => {
  return (
    <ul className="flex flex-col mt-8 cursor-pointer text-yellow-100 list-none font-500 text-2xl bg-gray-800 p-4 pl-10 border-y border-gray-400 lg:hidden md:hidden">
      <li>
        <NavLink
          to="/"
          onClick={() => setToggle(false)} 
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
          onClick={() => setToggle(false)} 
          className={({ isActive }) =>
            isActive ? "font-bold text-purple-400" : ""
          }
        >
          _about
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/resume"
          onClick={() => setToggle(false)} 
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
          onClick={() => setToggle(false)} 
          className={({ isActive }) =>
            isActive ? "font-bold text-purple-400" : ""
          }
        >
          _contact
        </NavLink>
      </li>
    </ul>
  );
};

export default ToggleHeader;

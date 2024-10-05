import React from "react";
import { NavLink } from "react-router-dom";
const ToggleHeader = () => {
  return (
    <ul className="sm:flex mt-8 cursor-pointer  flex-col w-full  text-yellow-100  mr-20  list-none font-500 text-2xl md:hidden p-2 ">
      <li className=" hover:text-purple-400 border-1  h-20 pt-5 pl-4 bg-gray-600 border-b">
        {" "}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold text-purple-400" : ""
          }
        >
          _home
        </NavLink>
      </li>
      <li className="hover:text-purple-400 border-1  h-20 pt-5 pl-4 bg-gray-600 border-b">
        {" "}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-bold text-purple-400" : ""
          }
        >
          _about
        </NavLink>
      </li>
      <li className="hover:text-purple-400 border-1  h-20 pt-5 pl-4 bg-gray-600  border-b">
        {" "}
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "font-bold text-purple-400" : ""
          }
        >
          _portfolio
        </NavLink>
      </li>
      <li className="hover:text-purple-400 border-1  h-20 pt-5 pl-4 bg-gray-600 border-b">
        {" "}
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? "font-bold text-purple-400" : ""
          }
        >
          _resume
        </NavLink>
      </li>
      <li className="hover:text-purple-400 border-1  h-20 pt-5 pl-4 bg-gray-600  border-b">
        {" "}
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
  );
};

export default ToggleHeader;

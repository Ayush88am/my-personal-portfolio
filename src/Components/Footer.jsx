import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="conatainer mb-8 md:flex  border-t border-gray-600">
      <div>
        <ul className="flex mt-8 cursor-pointer flex-wrap mx-16 text-yellow-100 gap-10  list-none font-500 text-1xl ">
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
      </div>
      <div className="social">
        <ol className="flex mt-8 cursor-pointer flex-wrap mx-28  gap-10  list-none font-500 text-1xl justify-center">
          <li>
            <a href="https://leetcode.com/u/Ayush-Mishra-88/" target="_blank">
              <SiLeetcode />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ayush-mishra-b86064261/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/Ayush88am" target="_blank">
              <FaGithub />
            </a>
          </li>
        </ol>
      </div>
      <div className="text-yellow-100 mt-8 ">
        <p className="text-center">Copyright © 2024 Ayush Mishra Portfolio</p>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Botão do menu hambúrguer */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links do menu */}
          <div
            className={`${isOpen ? "block" : "hidden"
              } w-full h-full md:flex md:items-center md:justify-end`}
          >
            <ul className="md:flex md:space-x-4 md:items-center">
              <li>
                <NavLink to="about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="personalprojects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                  PERSONAL PROJECTS
                </NavLink>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <ul className="flex gap-4">
                  <li>Be</li>
                  <li>In</li>
                  <li>Ins</li>
                  <li>Fiv</li>
                  <li>GiT</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

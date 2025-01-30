import { useState } from "react";
import { NavLink } from "react-router-dom";
import behance from '../../public/behance.png'
import linkedin from '../../public/linkedin.png'
import instagram from '../../public/instagram.png'
import fiverr from '../../public/fiverr.jpg'
import github from '../../public/github.png'

function Navbar2() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav>
      <ul className="hidden lg:flex items-center gap-6">
        <li className="p-2 transition-all">
          <NavLink to="about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
            ABOUT
          </NavLink>
        </li>
        <li className="p-2 transition-all">
          <NavLink to="personalprojects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
            PERSONAL PROJECTS
          </NavLink>
        </li>
        <li className="p-2 transition-all">Contact</li>
        <li className="p-2 transition-all">
          <ul className="flex gap-4">
            <li>
              <img className="icon" src={behance} alt="Logo behance" />
            </li>
            <li>
              <img className="icon" src={linkedin} alt="Logo linkedin" />
            </li>
            <li>
              <img className="icon" src={instagram} alt="Logo instagram" />
            </li>
            <li>
              <img className="icon" src={fiverr} alt="Logo fiverr" />
            </li>
            <li>
              <img className="icon" src={github} alt="Logo github" />
            </li>
          </ul>
        </li>
      </ul>

      {/* Botão do menu hambúrguer */}
      <div className="flex items-center lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-300 hover:text-black focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
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

      <div className={`absolute xl:hidden top-24 left-0 w-full h-full bg-white flex flex-col items-center gap-6 text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <li className="list-none w-full text-center p-2 transition-all cursor-pointer">
          <NavLink to="about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
            ABOUT
          </NavLink>
        </li>
        <li className="list-none w-full text-center p-2 transition-all cursor-pointer">
          <NavLink to="personalprojects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
            PERSONAL PROJECTS
          </NavLink>
        </li>
        <li className="list-none w-full text-center p-2 transition-all cursor-pointer">
          Contact
        </li>
        <li>
          <ul className="flex gap-4">
          <li>
              <img className="icon" src={behance} alt="Logo behance" />
            </li>
            <li>
              <img className="icon" src={linkedin} alt="Logo linkedin" />
            </li>
            <li>
              <img className="icon" src={instagram} alt="Logo instagram" />
            </li>
            <li>
              <img className="icon" src={fiverr} alt="Logo fiverr" />
            </li>
            <li>
              <img className="icon" src={github} alt="Logo github" />
            </li>
          </ul>
        </li>
      </div>


    </nav>
  )
}

export default Navbar2;
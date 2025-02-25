import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Why Us", path: "/Why Us" },
    { name: "Our Features", path: "/academy" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact-Us", path: "/Contact-Us" },

   
  ];

  return (
    <nav className="bg-white shadow-md w-full top-0 z-50 fixed">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://png.pngtree.com/png-clipart/20230623/original/pngtree-school-logo-design-template-vector-png-image_9204124.png"
            alt="Logo"
            className="h-10"
          />
          <span className="ml-1 font-bold text-xl text-red-900">
            SARASWATI VIDHYALAY
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-red-800 font-semibold">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer hover:text-red-900 pb-1 ${
                    isActive ? "border-b-2 border-red-900" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white shadow-lg absolute w-full left-0 transition-all duration-300 ${
          isOpen ? "top-16" : "-top-96"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-center py-4 text-red-800 font-semibold">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `cursor-pointer hover:text-red-800 pb-2 ${
                    isActive ? "border-b-2 border-red-800" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

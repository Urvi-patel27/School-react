import React from "react";
import main from "../images/main.jpg"

function Header() {
  return (
    <div>
      <header className="relative w-full h-screen flex items-center justify-center bg-gray-900">
        <img
          src={main}
          alt="School Building"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10  text-center sm:text-left px-4">
          <h2 className="text-white text-lg sm:text-xl bg-red-700 px-4 py-2 w-max mx-auto sm:mx-0">
            We Provide Best
          </h2>
          <h1 className="text-3xl sm:text-5xl font-bold text-red-900 bg-white px-6 py-3 mt-2 w-max mx-auto sm:mx-0">
            QUALITY EDUCATION
          </h1>
          <button className="mt-4 bg-red-700 text-white px-6 py-3 font-semibold hover:bg-red-800 transition duration-300 rounded-lg w-max mx-auto sm:mx-0">
            READ MORE
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;

import React from "react";
import ahero from "../../images/ahero.jpg"

function AboutHero() {
  return (
    <div>
      <header className="relative w-full flex items-center justify-center bg-red-100 mt-[50px] h-[550px] opacity-80">
        {/* Background Image */}
        <img
          src={ahero}
          alt="School Building"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* White Overlay */}
        <div className="absolute inset-0 bg-gray-100 bg-opacity-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-orange-900 bg-white px-6 py-3  shadow-2xl">
            About Us
          </h1>
        </div>
      </header>
    </div>
  );
}

export default AboutHero;

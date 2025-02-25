import React from "react";
import { useState } from "react";
const features = [
    {
      title: "PRE-MEDICAL",
      description:
        "PRE-MEDICAL / NEET-UG Courses Consolidate Essential Skills for Medical Entrance Examination, 2 Year Classroom Program for State Boards (11-12 Science Stream), GUJCET and more.",
      icon: <i class="fa-solid fa-plus"></i>,
    },
    {
      title: "ENGINEERING",
      description:
        "JEE Main courses are designed to provide students with a significant competitive edge to realize their dreams of studying in NITs, IIITs, and equivalent colleges. 2 Year Classroom Program.",
      icon: <i class="fa-solid fa-gear"></i>,
    },
    {
      title: "IIT-JEE ( JEE ADVANCED)",
      description:
        "IIT-JEE courses make the subject matter strong and problem-solving adept. Due to which the aspirants get success in the exam for getting admission in IITs.",
      icon: <i class="fa-solid fa-circle-notch"></i>,
    },
    {
      title: "FOUNDATION",
      description:
        "Foundation courses for classes 6 to 10 make students subject-wise strong and skilled and lay a solid foundation for future competitive examinations.",
      icon: <i class="fa-solid fa-arrow-up-right-from-square"></i>,
    },
    
  ];
function Features() {
    const [active, setActive] = useState(null);

  return   <div className="py-10 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-[40px]">Our Features</h2>
  <div className="flex flex-wrap justify-center gap-6">
    {features.map((feature, index) => (
      <div
        key={index}
        onClick={() => setActive(index)}
        className={`relative w-64 p-9 rounded-lg shadow-lg transition-all duration-300 cursor-pointer 
          ${active === index ? "bg-red-900 text-white" : "bg-white hover:bg-red-900 hover:text-white"}`}
      >
        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center text-3xl bg-red-900 text-white rounded-md">
          {feature.icon}
        </div>
        <h3 className={`text-lg font-bold ${active === index ? "text-yellow-300" : "text-white-600"}`}>
          {feature.title}
        </h3>
        <p className="mt-2 text-sm">{feature.description}</p>
        {active === index && (
          <div className="absolute top-0 right-0 w-8 h-8 bg-red-900 clip-triangle"></div>
        )}
      </div>
    ))}
  </div>
</div>
}

export default Features;

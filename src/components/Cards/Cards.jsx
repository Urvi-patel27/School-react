import React, { useState } from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaUsers } from "react-icons/fa"; // Import Font Awesome icons

const cards = [
  {
    title: "Group Seminars",
    text: "Learning and discussing new concepts enhance mental, physical, and social aspects of students.",
    icon: <FaUsers className="text-white text-3xl" />, // Font Awesome icon
    color: "bg-green-500",
  },
  {
    title: "Trending Courses",
    text: "Course selection during applications is crucial. GPA matters, but academic rigor is also essential.",
    icon: <FaUserGraduate className="text-white text-3xl" />, // Font Awesome icon
    color: "bg-orange-500",
  },
  {
    title: "Expert Teachers",
    text: "Expert teachers provide useful feedback and develop effective learning strategies.",
    icon: <FaChalkboardTeacher className="text-white text-3xl" />, // Font Awesome icon
    color: "bg-red-500",
  },
];

function Cards() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex justify-center items-center min-h-screen space-x-6 m-0 flex-wrap gap-6 mb-[-120px] mt-[-120px]">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`w-80 p-6 bg-white rounded-xl transition-all duration-300 overflow-hidden shadow-md transform ${
            hovered === index ? "shadow-xl scale-105 -translate-y-2" : "shadow-md"
          }`}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className={`w-16 h-16 flex items-center justify-center rounded-full mx-auto ${card.color}`}>
            {card.icon}
          </div>
          <h3 className="text-lg font-semibold text-center mt-4">{card.title}</h3>
          <p className="text-center text-gray-600 mt-2">{card.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;

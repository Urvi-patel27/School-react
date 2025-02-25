import React from "react";
import { useState } from "react";
const features = [
    {
      title: "AITS",
      description:
        "(AITS- All India Test Series) An iconic test series program to boost students confidence in competitive exams like NEET-UG, JEE Main and JEE Advanced. These exams are computer..",
      icon:<i class="fa-solid fa-file-lines"></i>,
    },
    {
      title: "MATERIALS",
      description:
        "High quality material prepared by expert teachers is available to prepare for National Level Competitive Exams. Apart from this, Booster series of MCQs are also subject..",
      icon: <i class="fa-solid fa-book"></i>,
    },
    {
      title: "OUR DIGITAL",
      description:
        "All Subject's recorded Video lectures are helping to learners in quick Revision on the e -Learning platform of Ashadeep Digital..",
      icon: <i class="fa-solid fa-square-phone"></i>,
    },
    {
      title: "ASCET",
      description:
        "ASCET is a state level scholarship exam that helps students to get up to 100% Scholarship for std-11-12 science.",
      icon:<i class="fa-solid fa-indian-rupee-sign"></i>,
    },
    
  ];
  const results = [
    {
      number: "392",
      description: "A1 GRADE IN STATE BOARD EXAM (UP TO 2011)",
      icon: <i class="fa-solid fa-people-group"></i>,
    },
    {
      number: "122",
      description: "GOT ADMISSION IN M.B.B.S ( YEAR-2023 )",
      icon: <i class="fa-solid fa-plus"></i>,
    },
    {
      number: "310",
      description: "STUDENTS QUALIFIED FOR JEE ADVANCED-2024",
      icon: <i class="fa-solid fa-futbol"></i>,
    },
    {
      number: "514",
      description: "STUDENTS QUALIFIED IN NEET-2024",
      icon: <i class="fa-solid fa-star-of-life"></i>,
    },
  ];
function Features1() {
      const [active, setActive] = useState(null);
  return  <div className="py-10 bg-gray-100 text-center">
  {/* <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-[40px]">Our Features</h2> */}
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
          <div className="absolute top-0 right-0 w-8 h-8 bg-red-800 clip-triangle"></div>
        )}
      </div>
    ))}
  </div>
  <div> <h2 className="text-3xl font-bold text-red-950 mb-6 mt-24 ">OUR RESULT</h2></div>
  <div 
      className="relative py-20 bg-center bg-cover text-center text-white" 
      style={{ backgroundImage: "url('https://www.bain.com/contentassets/4685eb43a9ba4a58a30a48dff0c4b74e/the-net-promoter-systems-huddle-how-employees-16_9.jpg')" }}
    >
             <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="flex flex-wrap justify-center gap-6">
        {results.map((result, index) => (
          <div
            key={index}
            className="relative w-64 p-6 bg-[#6b3131ab] rounded-lg shadow-lg text-white text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center text-3xl bg-pink-100 text-gray-900 rounded-full">
              {result.icon}
            </div>
            <h3 className="text-4xl font-bold">{result.number}</h3>
            <p className="mt-2 text-sm">{result.description}</p>
          </div>
        ))}
      </div>
    </div>
</div>
}

export default Features1;

import React from "react";
import our from "../../images/ourf.jpg"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faFlask,
  faDesktop,
  faImage,
  faChessBoard,
  faCube,
} from "@fortawesome/free-solid-svg-icons";

const WelcomeSection = () => {
  return (
    <div className="bg-gray-10 py-10 px-5 md:px-20">
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        WELCOME TO <span className="text-red-800">SARSWATI GROUP OF SCHOOL</span>
      </h1>
      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
        We are proud to be pioneers in innovative pedagogy & unique curriculum
        for the past 24 years in Surat. We believe that Education should be
        fun, creative & challenging, so our unconventional approach strives to
        bring out the star in every child. We take pride in building well-rounded
        personalities who are able to take the world in their stride.
      </p>

      <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
        <img
          src={our}
          alt="School Kids"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-1/2">
          {features.map((feature, index) => (
            
            <div key={index} className="flex items-start gap-4">
              {/* <FontAwesomeIcon icon={feature.icon} className="text-red-700 text-2xl" /> */}
              <div>
                <h3 className="text-lg font-semibold text-start text-red-800">  
                    {feature.title}</h3>
                    
                <p className="text-gray-600 text-sm text-start">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: faAward,
    title: "Special Education",
    description:
      "Special education is the practice of educating students in a way that accommodates their individual differences and special needs.",
  },
  {
    icon: faFlask,
    title: "Events",
    description:
      "Ashadeep School organizes events, celebrates festivals, sports day & much more.",
  },
  {
    icon: faDesktop,
    title: "Full Day Session",
    description:
      "The standard full-time hours for the day, i.e., seven or eight hours, depending on staff classification.",
  },
  {
    icon: faImage,
    title: "Pre Classes",
    description:
      "Education imparted to children in 3-6 years age group. The first stage of organized education, also known as pre-primary education.",
  },
  {
    icon: faChessBoard,
    title: "Qualified Teachers",
    description:
      "We provide children with an education that develops open-minded thinkers with strong academic and interpersonal skills.",
  },
  {
    icon: faCube,
    title: "24/7 Support",
    description:
      "Education Support helpline is available 24/7 for everyone working in education including teachers, staff, lecturers, and administrators.",
  },
];

export default WelcomeSection;
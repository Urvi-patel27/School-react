import React from "react";
import h1 from "../../images/h1.jpg";
import h2 from "../../images/h2.jpg";
import h3 from "../../images/h3.jpg";

function HomeLast() {
  return (
    <div className="bg-white py-20 px-4 flex flex-col items-center space-y-16">
      <div className="flex flex-col md:flex-row items-center max-w-5xl">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={h1}
              alt="Mobile app"
              className="w-60 h-52 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/2 text-center md:text-left px-6">
          <h3 className="text-xl font-semibold text-red-950">
            Community of opportunities
          </h3>
          <p className="text-gray-600 mt-2">
            Center administrator says the goal is to offer the fellowship
            annualsion.ly. The fellowship is open to all graduate students who
            have an unpaid internship or field researc..
          </p>
          <p className="text-gray-600 mt-2">
            Center administrator says the goal is to offer the fellowship
            annualsion.ly. The fellowship is open to all graduate students who
            have an unpaid internship or field research in subject areas that
            align with the center’s mis.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center max-w-5xl">
        <div className="md:w-2/2 text-center md:text-left px-6">
          <h3 className="text-xl font-semibold text-red-950">
            Community of opportunities
          </h3>
          <p className="text-gray-600 mt-2">
            Center administrator says the goal is to offer the fellowship
            annually. The fellowship is open to all graduate students who have
            an unpaid internship or field research in subject areas that align
            with the center’s mission.
          </p>
          <p className="text-gray-600 mt-2">
            administrator says the goal is to offer the fellowship annually.
            Thld research in subject areas that align with the center’s mission.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={h2}
              alt="Mobile app"
              className="w-60 h-52 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center max-w-5xl">
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={h3}
              alt="Mobile app"
              className="w-60 h-52 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/2 text-center md:text-left px-6">
          <h3 className="text-xl font-semibold text-red-950">
            Community of opportunities
          </h3>
          <p className="text-gray-600 mt-2">
            Center administrator says the goal is to offer the fellowship
            annually. The fellowship is open to all graduate students who have
            an unpaid internship or field research in subject areas that align
            with the center’s mission.
          </p>
          <p className="text-gray-600 mt-2">
            Center administrator says the goal is to offer the fellowship
            annually. The fellowship is open to all graduate students who have
            an unpaid internship or field research in subject areas that align
            with the center’s mission.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeLast;

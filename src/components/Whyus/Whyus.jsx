import React from "react";
import whyus from "../../images/whyus.jpg";
import { motion } from "framer-motion";

function Whyus() {
  return (
    <div>
      <header className="relative w-full h-screen flex items-center justify-center bg-gray-900">
        <motion.img
          src={whyus}
          alt="School Building"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      </header>
      <div className="text-center py-12 px-6">
        <h2 className="text-3xl font-semibold text-red-900">
          Student's Journey
        </h2>
        <div className="w-16 h-1 bg-red-700 mx-auto my-3"></div>

        <div className="flex justify-center my-6">
          <img
            src="https://www.thoughtco.com/thmb/SKJS8lc62WIc2yp7UQ26-mBYdys=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/135538111-56a12ed33df78cf77268357b.jpg"
            alt="Students in school"
            className="rounded-lg shadow-lg w-full max-w-4xl h-[400px]"
          />
        </div>

        <p className="text-gray-700 max-w-3xl mx-auto">
          At our International School, our aim is not just to impart knowledge
          but to foster the growth of responsible, well-rounded, and lifelong
          learners who can contribute positively to society. We have developed a
          number of initiatives and programs to help achieve this goal.
        </p>
        <button className="text-red-950">Read More</button>
      </div>
      <div className="text-center py-12 px-6">
        <h2 className="text-3xl font-semibold text-red-900">
          Our Teacher Training Program
        </h2>
        <div className="w-16 h-1 bg-red-700 mx-auto my-3"></div>

        <div className="flex justify-center my-6">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5fc6966a116eb00e3c736a4a/1625760004428-JO4QNGRDIZ3NGY8X9UU7/Screen+Shot+2021-07-08+at+8.58.58+AM.jpg"
            alt="Students in school"
            className="rounded-lg shadow-lg w-full max-w-4xl"
          />
        </div>

        <p className="text-gray-700 max-w-3xl mx-auto">
          our Education Network firmly believes in the continuous professional
          development of all its employees right from the leaders of its various
          schools to their entire staff - whether teaching or non-teaching.
          Teachnique Trainings, the training wing of the our Innovation Center’s
          Teachnique vertical acts as the one-stop solution for all training
          needs of the network
        </p>
        <button className="text-red-950">Read More</button>
      </div>
      <div className="text-center py-12 px-6">
        <h2 className="text-3xl font-semibold text-red-900">
          The Right Faculty
        </h2>
        <div className="w-16 h-1 bg-red-700 mx-auto my-3"></div>

        <div className="flex justify-center my-6">
          <img
            src="https://i.pinimg.com/736x/dc/d3/06/dcd30696087cf2dfec43b59f26e0fa03.jpg"
            alt="Students in school"
            className="rounded-lg shadow-lg w-full max-w-4xl h-[400px]"
          />
        </div>

        <p className="text-gray-700 max-w-3xl mx-auto">
          At our International School, our aim is not just to impart knowledge
          but to foster the growth of responsible, well-rounded, and lifelong
          learners who can contribute positively to society. We have developed a
          number of initiatives and programs to help achieve this goal.
        </p>
        <button className="text-red-950">Read More</button>
      </div>
      <div className="text-center py-12 px-6">
        <h2 className="text-3xl font-semibold text-red-900">
          The Right Skills
        </h2>
        <div className="w-16 h-1 bg-red-700 mx-auto my-3"></div>

        <div className="flex justify-center my-6">
          <img
            src="https://images.theconversation.com/files/260276/original/file-20190221-195867-10fe3kf.jpg?ixlib=rb-1.1.0&amp;rect=0%2C186%2C4969%2C2481&amp;q=45&amp;auto=format&amp;w=1356&amp;h=668&amp;fit=crop"
            alt="Students in school"
            className="rounded-lg shadow-lg w-full max-w-4xl h-[400px]"
          />
        </div>

        <p className="text-gray-700 max-w-3xl mx-auto">
          Each extracurricular activity has a carefully constructed syllabus,
          which is taught in a scientific and planned manner to ensure the
          participants not only enjoy the sport, but also develop the nurture in
          the athletes.
        </p>
        <h1 className="text-red-950 text-xl">
          Let's explore the various events at our
        </h1>
        <br />
        <h2 className="text-2xl text-red-950">Sports Events</h2>
        <p className="text-gray-700 max-w-3xl mx-auto justify-start">
          We bring forth a team of carefully selected professional coaches in
          particular sports fields to motivate students to participate in
          national and state level tournaments and develop fundamental skills
          such as focus, strategic thinking and leadership through the practice
          of sporting discipline.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto ">
          Students are given a vast array of choices for sports including
          football, cricket, basketball, table tennis, carrom, yoga, skating and
          chess.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto justify-start">
          We bring forth a team of carefully selected professional coaches in
          particular sports fields to motivate students to participate in
          national and state level tournaments and develop fundamental skills
          such as focus, strategic thinking and leadership through the practice
          of sporting discipline.
        </p>
      </div>
      <div className="flex flex-col items-center p-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full max-w-4xl">
        <motion.div
          className="text-center relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-xs text-gray-500">BASKETBALL</p>
          <div className="relative">
            <img
              src="https://i.pinimg.com/originals/0c/95/75/0c95758db22443b8884f83992687c33a.jpg"
              alt="Basketball"
              className="rounded-md w-full max-w-xs sm:max-w-md md:max-w-lg h-[300px] sm:h-[350px] object-cover shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white font-semibold text-lg">Basketball</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-xs text-gray-500">CRICKET</p>
          <div className="relative">
            <img
              src="https://www.csp.org.uk/sites/default/files/styles/unstyled_max_width_1200px/public/media-image/2018-07/playing-cricket.png?itok=7MtBE-wA"
              alt="Cricket"
              className="rounded-md w-full max-w-xs sm:max-w-md md:max-w-lg h-[300px] sm:h-[350px] object-cover shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white font-semibold text-lg">Cricket</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
}

export default Whyus;

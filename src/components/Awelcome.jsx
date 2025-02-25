import React from "react";
import { useState } from "react"
import a from "../images/awelcome.jpg"
import ourm from "../images/ourm.jpg"

function Awelcome() {
    const [hover, setHover] = useState(false);
  return  <div className="container mx-auto px-4 py-12">
  <div className="flex flex-col lg:flex-row items-center gap-8">
    {/* Image Section */}
    <div
      className="relative w-full lg:w-1/2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={a} // Replace with actual image path
        alt="Saraswati Vidhyalay"
        className="w-full rounded-lg transition duration-300"
      />
      {/* Hover Overlay */}
      {hover && (
        <div className="absolute inset-0 bg-white bg-opacity-30 rounded-lg transition duration-300"></div>
      )}
    </div>

    {/* Text Section */}
    <div className="w-full lg:w-1/2">

      <h2 className="text-3xl font-bold text-red-950 mb-4 justify-start">
      Join Our Mission to Democratize Education
      </h2>
      <div className="border-b-2 border-red-300 w-24 mb-4 ml-2"></div>
      <p className="text-gray-700 leading-relaxed justify-start text-start">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi ut architecto beatae vitae
        dicta sunt explicabo.
      </p>
      <p className="text-gray-700 leading-relaxed mt-4 text-start">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt neque porro voluptatem tempor incidunt ut
        labore et dolore magna.
      </p>
      <p className="text-gray-700 leading-relaxed mt-4 text-start">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed 
      </p>
      <p className="text-gray-700 leading-relaxed mt-4 text-start">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt ........
      </p>
      <p className="text-start">fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi ........</p>
      <button className="justify-start text-start text-red-800" >Read more</button>
    </div>
    
  </div>
  <div className="bg-gray-00 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl bg-white shadow-lg rounded-lg p-10 flex flex-col md:flex-row items-center md:items-start">
        {/* Left Text Section */}
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-4xl font-bold text-red-950 mb-4">
            Our Mission is to Provide a World-class Education
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            The School of Education prepares highly qualified, caring, and effective educators to meet the needs of students in diverse settings within the State of New York and beyond. We do so by linking theory, scholarship, and social justice. Our programs emphasize equity, academic excellence, reflective practice, curriculum integration, and advocacy.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            The programs promote meaningful fieldwork in which pre-service and in-service teachers engage with students, families, and other educators within diverse communities. Our students conduct research, understand educational policies, and develop the skills required to meet the needs of all students. Through their courses and fieldwork, our students develop the dispositions that guide and support their teaching and leading.
          </p>
        </div>
        {/* Right Image Section */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={ourm}
            alt="Education Mission"
            className="w-full rounded-lg shadow-md "
          />
        </div>
      </div>
    </div>
</div>
}

export default Awelcome;

import React from "react";
import { useState } from "react"
import welcome from "../../images/welcome.jpg"

function Welcome() {
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
        src={welcome} // Replace with actual image path
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
        Welcome to Saraswati Vidhyalay
      </h2>
      <div className="border-b-2 border-red-400 w-24 mb-4 ml-2"></div>
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
  
</div>
}

export default Welcome;

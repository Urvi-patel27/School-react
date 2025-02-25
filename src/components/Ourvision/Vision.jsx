import React from "react";

function Vision() {
  return  <div className="flex flex-col items-center justify-center bg-gradient-to-r from-red-0 to-orange-50 px-6 p-11">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center text-red-900 font-semibold">
    
    {/* Years of Experience */}
    <div>
      <h2 className="text-4xl font-bold">82</h2>
      <p className="text-sm">Years Of Experience</p>
    </div>

    {/* Divider Icon */}
    <div className="hidden lg:flex items-center justify-center">
    {/* <span className="text-pink-950 text-3xl"><i class="fa-regular fa-star-half-stroke"></i></span> */}
    </div>

    {/* Podar International Schools */}
    <div>
      <h2 className="text-4xl font-bold">132</h2>
      <p className="text-sm">Our International Schools</p>
    </div>

    {/* Divider Icon */}
    <div className="hidden lg:flex items-center justify-center">
    {/* <span className="text-pink-950 text-3xl"><i class="fa-regular fa-star-half-stroke"></i></span> */}
    </div>

    {/* Podar Partner Schools */}
    <div>
      <h2 className="text-4xl font-bold">90</h2>
      <p className="text-sm">Our Partner Schools</p>
    </div>

    {/* Podar Preschools */}
    <div className="col-span-2 md:col-span-1 mt-6">
      <h2 className="text-4xl font-bold">350</h2>
      <p className="text-sm">Our Preschools</p>
    </div>

    {/* Divider Icon */}
    <div className="hidden lg:flex items-center justify-center">
    {/* <span className="text-pink-950 text-3xl"><i class="fa-regular fa-star-half-stroke"></i></span> */}
    </div>

    {/* Students */}
    <div className="col-span-2 md:col-span-1 mt-6">
      <h2 className="text-4xl font-bold">1,45,000</h2>
      <p className="text-sm">Students</p>
    </div>
    <div className="hidden lg:flex items-center justify-center">
      {/* <span className="text-pink-950 text-3xl"><i class="fa-regular fa-star-half-stroke"></i></span> */}
    </div>

    {/* Students */}
    <div className="col-span-2 md:col-span-1 mt-6">
      <h2 className="text-4xl font-bold">40+</h2>
      <p className="text-sm">Best Faculty</p>
    </div>
  </div>
  <div className="flex justify-center items-center mt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Vision Card */}
        <div className="relative bg-gradient-to-r from-red-50 to-purple-50 p-10 border border-red-50 rounded-lg text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <h2 className="text-red-900 text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the best and be recognised as raising the traditional standards of educational possibilities and outcomes for students, parents and society.
          </p>
        </div>

        {/* Purpose Card */}
        <div className="relative bg-gradient-to-r from-red-50 to-purple-50 p-10 border border-red-50 rounded-lg text-center shadow-md transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <h2 className="text-red-900 text-2xl font-semibold mb-4">Our Purpose</h2>
          <p className="text-gray-600">To nurture creative, critical, independent thinkers.</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center bg-white">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-900 text-4xl mt-[40px]">Our Values</h1>
      <div className="flex justify-around w-full max-w-4xl mt-14 gap-32">
        <div className="text-center gap-14">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-900 text-2xl">LEARNERS</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-900 text-2xl">FIRST</p>
        </div>
        <div className="text-center">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-900 text-2xl">TAKING</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-900 text-2xl">OWNERSHIP</p>
        </div>
        <div className="text-center">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-900 text-2xl">RELENTLESSLY</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-900 text-2xl">RESOURCEFUL</p>
        </div>
      </div>
    </div>
</div>
}

export default Vision;

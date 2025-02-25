import React from "react";
import bg from "../../images/bg.jpg"

function Schoolimg() {
  return (
<div
  className="relative w-full h-screen flex flex-col lg:flex-row justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed opacity-80"
  style={{
    backgroundImage: `url(${bg})`,
  }}
>
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black  opacity-40"></div>

      {/* Content Box */}
      <div className="relative w-full max-w-4xl px-6 text-center lg:text-left space-y-5  p-5 rounded-lg">
        <h1 className="text-white font-semibold text-4xl sm:text-5xl md:text-6xl">
        WE PROVIDE BEST
        </h1>
        <p className="text-white text-lg sm:text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          deleniti quae minima veniam eaque distinctio quis quia ut ab sint.
        </p>
        <div className="mt-5">
          {/* <Buttons title="Order Now" /> */}
        </div>
      </div>
    </div>
  );
}

export default Schoolimg;

import React from "react";
import { features } from "../constants";

const Features = () => {
  return (
    <div
      id="features"
      className="mx-auto px-6 max-w-8xl space-y-20 pt-12 lg:pt-20"
    >
      <p className="rounded-xl px-2 py-1 text-sm shadow-md text-amber-600 font-medium uppercase w-fit mx-auto bg-neutral-900">
        Features
      </p>

      <h2
        className="font-semibold text-center text-5xl lg:text-5xl
         text-white tracking-wider leading-normal"
      >
        Easily build{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800  drop-shadow-lg ">
          your code
        </span>
      </h2>
      <div className="flex flex-wrap gap-10 p-4 ">
        {features.map((feature) => (
          <div
            key={feature.text}
            className="w-96 h-60 lg:w-[400px] lg:h-[260px]  cursor-pointer border border-amber-800 mx-auto 
          shadow-md shadow-amber-600 hover:bg-gradient-to-tr from-amber-500 to-amber-800 
        group hover:translate-y-2 transition duration-300
          "
          >
            <div className="flex flex-col gap-12 p-4">
              <h4 className="text-lg text-amber-600 drop-shadow-lg group-hover:text-white">
                {feature.text}
              </h4>
              <p className="group-hover:text-white text-gray-600 ">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

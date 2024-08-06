import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="mx-auto px-6 max-w-7xl space-y-20 pt-12 lg:pt-20"
    >
      <h2
        className="font-semibold text-center text-5xl lg:text-5xl
         text-white tracking-wider leading-normal"
      >
        Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingOptions.map((options) => (
          <div
            key={options.title}
            className="shadow-lg  shadow-amber-500 flex flex-col justify-between 
            border p-8 rounded-md h-[500px] max-lg:w-96 max-lg:h-[380px] mx-auto border-amber-600 border-opacity-80
            lg:hover:-translate-y-14 cursor-pointer transition duration-300
            "
          >
            <p className=" text-3xl lg:text-4xl text-white tracking-wide font-normal">
              {options.title}
              <span className="text-md font-normal text-amber-600">
                {options.title === "Pro" && (
                  <span className="text-lg"> (Most Popular)</span>
                )}
              </span>
            </p>
            <p className="text-3xl lg:text-4xl text-white tracking-wide font-normal">
              <span>{options.price}</span>
              <span className="text-sm font-normal text-gray-300">/Month</span>
            </p>
            <ul>
              {options.features.map((feature) => (
                <li
                  className="text-md gap-3 flex items-center mb-2 lg:mb-6"
                  key={feature}
                >
                  <CheckCircle2 className="border-none" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className="w-full rounded-md p-3 border border-amber-600
            hover:bg-gradient-to-r from-amber-500 to-amber-800
            "
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

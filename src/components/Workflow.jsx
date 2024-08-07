import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div
      id="workflow"
      className="mx-auto px-6 max-w-7xl space-y-20 pt-12 lg:pt-20"
    >
      <h2
        className="font-semibold text-center text-5xl max-sm:text-2xl
         text-white tracking-wider leading-normal"
      >
        Accelerate Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800  drop-shadow-lg ">
          Coding flow
        </span>
      </h2>
      <div className="w-7xl flex flex-col items-center justify-around lg:flex-row gap-6">
        <img className="w-[600px] lg:w-[50%]" src={codeImg} alt="codeImg" />
        <ul className="mx-10">
          {checklistItems.map((listItems) => (
            <li className="flex gap-6 mb-8" key={listItems.title}>
              <CheckCircle2 color="#FFB300" size={36} />
              <div className="flex flex-col gap-4">
                <h4 className="text-lg lg:text-xl tracking-wide font-semibold">
                  {listItems.title}
                </h4>
                <p className="text-md lg:text-lg text-gray-600 ">
                  {listItems.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Workflow;

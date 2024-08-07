import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <main id="home" className="mx-auto px-6 max-w-7xl pt-12 lg:pt-20 mt-10">
      <div className="flex justify-center-items-center flex-col gap-12 lg:gap-20">
        <h1
          className="font-semibold text-center text-5xl max-sm:text-3xl
         text-white tracking-wide leading-normal max-sm:leading-relaxed"
        >
          <span className="border-b border-amber-600">
            Virtual<span className="text-amber-700">R</span>
          </span>{" "}
          build tools{" "}
          <span className=" drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 ">
            for developers
          </span>
        </h1>
        <p className="text-lg lg:text-xl max-w-5xl text-center mx-auto text-gray-500 tracking-normal leading-normal font-normal">
          Empower your creativity and bring your{" "}
          <span className="text-amber-600 font-semibold animate-pulse">VR</span>{" "}
          app ideas to life with our initiative development tools.{" "}
          <span className="text-amber-600 font-semibold border-b border-amber-600">
            <br />
            Get started
          </span>{" "}
          today and turn your{" "}
          <span className="text-amber-600 font-semibold animate-pulse">
            imagination
          </span>{" "}
          imagination into impressive reality
        </p>
        <div className="mx-auto space-x-8 flex flex-wrap gap-8 justify-center items-center">
          <button
            className="bg-amber-600 p-3 w-fit mx-auto rounded-md
             text-white hover:bg-black font-medium transition duration-300"
          >
            Start for free
          </button>
          <button
            className="bg-lack p-3 w-fit mx-auto rounded-md
             text-white hover:text-black hover:bg-white border font-medium
             transition duration-300
             "
          >
            Documentation
          </button>
        </div>
        <div className=" flex justify-center mx-10 items-center gap-6 flex-col lg:flex-row ">
          <video
            autoPlay
            loop
            muted
            className="transition duration-300 w-[500px] h-fit max-lg:w-[420px] 
            rounded-md border cursor-pointer border-amber-600 
            shadow-lg shadow-amber-600  "
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag
          </video>
          <video
            autoPlay
            loop
            muted
            className="transition duration-300 h-fit 
            max-lg:w-[420px] w-[500px] rounded-md border cursor-pointer
             border-amber-600 shadow-lg shadow-amber-600  "
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag
          </video>
        </div>
      </div>
    </main>
  );
};

export default Hero;

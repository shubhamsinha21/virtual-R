import React, { useState } from "react";

const SignIn = () => {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    e.preventDefault();
    setSubmit();
  };
  return (
    <form
      id="signIn"
      onSubmit={handleSubmit}
      className=" max-sm:w-[280px] md:max-w-md lg:max-w-lg h-[500px] flex flex-col mx-auto border
      border-amber-600 rounded-md p-6 mt-28
      shadow-md shadow-orange-500 max-sm:mb-48"
    >
      <h4 className="text-center text-2xl font-medium mb-20">
        Sign In <br />{" "}
        <span className="text-sm text-amber-600">/Ready to sign in/</span>
      </h4>
      <div className="flex flex-col gap-8 items-center justify-evenly">
        <div className="flex flex-wrap items-center gap-3 ">
          <label className="text-lg max-sm:text-md mr-5">Name</label>
          <input
            className="w-64 max-sm:w-48 p-2 border border-amber-500 outline-none rounded-md hover:border-amber-700"
            type="text"
            placeholder="Your first name .."
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <label className="text-lg mr-5 max-sm:text-md"> Email</label>
          <input
            className="w-64 max-sm:w-48  p-2 border border-amber-500 outline-none rounded-md hover:border-amber-700"
            type="text"
            placeholder="1234@gmail.com"
          />
        </div>

        <div className="flex max-sm:flex-col flex-row gap-8 mt-32 w-96 h-12">
          <button
            onClick={submit}
            className="bg-amber-600 p-2 w-36 mx-auto rounded-md
         text-white hover:bg-black font-medium"
          >
            Sign In
          </button>
          <button
            className="bg-amber-600 p-2 w-36 mx-auto rounded-md
         text-white hover:bg-black font-medium"
          >
            Create account
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignIn;

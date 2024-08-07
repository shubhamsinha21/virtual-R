import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { navItems } from "../constants";
import logo from "../assets/logo.png";

function Navbar({ signIn, setSignIn }) {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className="w-full top-0 backdrop-blur-lg z-50 scroll-smooth fixed">
      <nav
        className=" flex lg:justify-around justify-between shadow-amber-500 shadow-sm 
      items-center border-b border-gray-600  border-opacity-50 px-2 h-20"
      >
        <div className="flex items-center gap-6">
          <img className="w-10 h-10" src={logo} alt="logo" />
          <a href="#" className="text-xl font-semibold tracking-wide">
            Virtual<span className="text-amber-600 font-bold">R</span>
          </a>
        </div>
        <ul className="hidden lg:flex gap-12 items-center px-2">
          {navItems.map((items) => (
            <li key={items.label}>
              <a
                className="text-md font-medium hover:border-b-2 rounded-md p-1 hover:border-amber-600"
                href={items.href}
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block space-x-12">
          <a
            onClick={() => setSignIn(!signIn)}
            href="#signIn"
            className="bg-amber-600 p-2 w-fit mx-auto rounded-md
             text-white hover:bg-black font-medium"
          >
            Sign In
          </a>
          <a
            href="#createAccount"
            className="bg-amber-600 p-2 w-fit mx-auto rounded-md
             text-white hover:bg-black font-medium"
          >
            Create account
          </a>
        </div>

        <button className="lg:hidden block" onClick={handleToggle}>
          {toggle ? <X color="#FFB300" /> : <Menu color="#FFB300" />}
        </button>
      </nav>

      {toggle && (
        <div className="lg:hidden h-96 flex flex-col justify-center bg-neutral-900 items-center gap-6">
          <ul className="flex flex-col gap-5 items-center px-2">
            {navItems.map((items) => (
              <li key={items.label}>
                <a
                  className="text-md font-medium hover:border-b-2 rounded-md p-1 hover:border-amber-600"
                  href={items.href}
                >
                  {items.label}
                </a>
              </li>
            ))}
          </ul>
          <div className=" flex flex-col gap-6">
            <a
              href="#signIn"
              className="bg-amber-600 p-2 w-fit mx-auto rounded-md
             text-white hover:bg-black font-medium"
            >
              Sign In
            </a>
            <a
              href="#createAccount"
              className="bg-amber-600 p-2 w-fit mx-auto rounded-md
             text-white hover:bg-black font-medium"
            >
              Create account
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

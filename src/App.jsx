import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import { useState } from "react";
import CreateAccount from "./components/CreateAccount";

function App() {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className="overflow-hidden">
      <Navbar signIn={signIn} setSignIn={setSignIn} />
      <Hero />
      <Features />
      <div className="bg-gray-600 bg-opacity-50 p-[0.5px] w-full mt-40"></div>
      <Workflow />
      <Pricing />
      <Testimonials />
      {signIn ? (
        <SignIn signIn={signIn} setSignIn={setSignIn} />
      ) : (
        <CreateAccount />
      )}
      <div className="bg-gray-600 bg-opacity-50 p-[0.5px] w-full mt-20 "></div>
      <Footer />
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <div className="bg-gray-600 bg-opacity-50 p-[0.5px] w-full mt-40"></div>
      <Workflow />
    </>
  );
}

export default App;

import Link from "next/link";
import Navbar from "./components/Navbar"; // Adjust the path if necessary
import BackgroundAnimation from "./components/BackgroundAnimation";

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Animation */}
      <BackgroundAnimation />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Container with glassmorphism effect */}
      <div className="flex justify-center items-center min-h-screen pt-6 px-4 md:pt-10 z-10">
        <div className="w-full max-w-lg md:max-w-4xl bg-black/10 backdrop-blur-lg rounded-2xl shadow-lg border border-black/10 p-6 md:p-8 space-y-6">
          {/* Hero Section */}
          <h1 className="text-xl md:text-2xl font-semibold text-black leading-tight mb-4 md:mb-6 text-center">
            Link to Card
            <br />
          </h1>

          {/* URL Input Field with custom styles */}
          <input
            type="text"
            placeholder="Enter URL"
            className="w-full mb-4 border-none outline-none rounded-[12px] md:rounded-[15px] p-3 md:p-4 bg-gray-300 shadow-inner transition-all duration-300 ease-in-out focus:bg-white focus:scale-105 focus:shadow-[6px_6px_50px_#969696,-6px_-6px_50px_#ffffff] md:focus:shadow-[13px_13px_100px_#969696,-13px_-13px_100px_#ffffff]"
          />

          {/* Centered Button with proper spacing */}
          <div className="flex justify-center items-center mt-4">
            <button className="relative inline-block text-black bg-white rounded-full text-sm md:text-lg font-medium py-3 md:py-4 px-6 md:px-10 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              Submit URL
              <span className="absolute top-0 left-0 w-full h-full rounded-full bg-white transition-all duration-400 z-[-1]"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

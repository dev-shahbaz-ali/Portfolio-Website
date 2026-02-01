import { Link } from "react-router-dom";
import { useState } from "react";
import { HiSparkles } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative shadow-lg bg-gradient-to-r from-green-50 to-green-100 border-b-2 border-green-300">
      {/* Animated background elements */}
      <div className="absolute top-5 right-5 w-24 h-24 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-10 w-20 h-20 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center text-green-700 font-bold text-2xl md:text-3xl drop-shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <HiSparkles className="mr-3 text-green-600" />
              Portfolio
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-2 lg:gap-4 items-center">
            <li className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-all duration-300 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-all duration-300 cursor-pointer">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-all duration-300 cursor-pointer">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-all duration-300 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="text-white bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-700 hover:bg-green-200 p-2 rounded-full transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeInDown bg-green-50">
            <ul className="flex flex-col gap-2 space-y-2">
              <li className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-all duration-300 cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-all duration-300 cursor-pointer">
                <Link to="/skills">Skills</Link>
              </li>
              <li className="text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-all duration-300 cursor-pointer">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="text-green-700 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-all duration-300 cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <button className="w-full text-white bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full font-bold transition-all duration-300 cursor-pointer">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

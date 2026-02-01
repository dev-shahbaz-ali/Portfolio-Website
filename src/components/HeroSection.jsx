import React from "react";
import { FaArrowRight, FaEnvelopeOpenText } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Background blobs */}
      <div className="absolute top-16 right-10 w-80 h-80 bg-green-300 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-10 left-16 w-80 h-80 bg-green-400 rounded-full blur-3xl opacity-10 animate-pulse delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-10 animate-pulse delay-4000" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 bg-green-200/30 backdrop-blur-lg rounded-full border border-green-300/50 shadow-xl">
          <HiSparkles className="text-green-600 text-lg animate-pulse" />
          <p className="text-sm md:text-base font-semibold text-green-700 tracking-widest">
            Your All-in-One AI SaaS Platform
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-6 leading-tight drop-shadow-2xl">
          Creative Developer <br />
          <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            & Designer
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          I craft high-quality digital experiences using modern technologies,
          clean architecture, and pixel-perfect design.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-5 md:gap-7 justify-center items-center">
          <button className="group flex items-center gap-3 px-9 md:px-11 py-4 rounded-full bg-white text-green-600 font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            See My Work
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          <button className="group flex items-center gap-3 px-9 md:px-11 py-4 rounded-full bg-green-600/90 backdrop-blur text-white font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl hover:bg-green-700 hover:scale-105 transition-all duration-300 cursor-pointer">
            Get In Touch
            <FaEnvelopeOpenText className="group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

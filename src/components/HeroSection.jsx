import React from "react";
import { FaArrowRight, FaEnvelopeOpenText } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Background blobs */}
      <div className="absolute top-16 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-10 left-16 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-10 animate-pulse delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-10 animate-pulse delay-4000" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 bg-blue-200/30 backdrop-blur-lg rounded-full border border-blue-300/50 shadow-xl">
          <HiSparkles className="text-blue-600 text-lg animate-pulse" />
          <p className="text-sm md:text-base font-semibold text-blue-700 tracking-widest">
            Full Stack Web Developer | React | Next.js
          </p>
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-6">
          I Build Modern <br />
          <span className="text-blue-600">Web Applications</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          I help businesses and startups build fast, responsive, and scalable
          web applications using React, Next.js, and modern technologies.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-5 md:gap-7 justify-center items-center">
          <button className="group flex items-center gap-3 px-9 md:px-11 py-4 rounded-full bg-white text-blue-600 font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            View Portfolio
            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          <button className="group flex items-center gap-3 px-9 md:px-11 py-4 rounded-full bg-blue-600/90 backdrop-blur text-white font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 cursor-pointer">
            Get In Touch
            <FaEnvelopeOpenText className="group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-blue-600"
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

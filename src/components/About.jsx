import React from "react";
import { FaUserAstronaut, FaCode, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-green-100 flex items-center py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/10 rounded-full mb-4">
            <FaUserAstronaut className="text-green-500" />
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
              About Me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-green-600">
            Who I Am
          </h2>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-10">
            I am a passionate{" "}
            <span className="font-semibold text-green-600">
              Full-Stack Developer
            </span>{" "}
            with over <span className="font-semibold">5+ years</span> of
            experience building scalable and user-focused web applications. I
            love turning complex problems into clean, elegant, and intuitive
            solutions.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition">
              <FaCode className="text-3xl text-green-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">
                Clean Code
              </h4>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Writing maintainable, scalable, and performance-focused code.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition">
              <FaLightbulb className="text-3xl text-green-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">
                Problem Solving
              </h4>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Turning real-world problems into effective digital solutions.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition">
              <FaUserAstronaut className="text-3xl text-green-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">
                User Focus
              </h4>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Designing experiences that users actually enjoy using.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { MdOutlineSmartToy } from "react-icons/md";
import { VscVscodeInsiders } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, level: 90 },
      { name: "CSS", icon: <FaCss3Alt />, level: 85 },
      { name: "TailwindCSS", icon: <SiTailwindcss />, level: 88 },
      { name: "JavaScript", icon: <FaJs />, level: 80 },
      { name: "React.js", icon: <FaReact />, level: 85 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 80 },
      { name: "Express.js", icon: <SiExpress />, level: 75 },
      { name: "MongoDB", icon: <SiMongodb />, level: 78 },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 85 },
      { name: "GitHub", icon: <FaGithub />, level: 88 },
      { name: "AI Integration", icon: <MdOutlineSmartToy />, level: 70 },
      { name: "Vsto Expert", icon: <VscVscodeInsiders />, level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-green-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-500"
            >
              <h3 className="text-2xl font-semibold text-green-500 mb-4 text-center">
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-3 text-gray-700 font-medium">
                        <span className="text-xl text-green-500">
                          {skill.icon}
                        </span>
                        {skill.name}
                      </div>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-green-100 rounded-full h-2.5">
                      <div
                        className="bg-green-500 h-2.5 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

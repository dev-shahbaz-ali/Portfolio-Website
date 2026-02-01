import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with cart management, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and user notifications.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    tags: ["React", "Firebase", "Tailwind"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather forecasting app with location search and detailed analytics.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgOqPvqg5kZ6fhsZm1x7vvMxk3SyvB7qwWw&s",
    tags: ["Next.js", "API Integration", "Chart.js"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for managing multiple social media accounts with insights.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMPc-8MuUOwELzlGcyWmzuSLybNITCsP5HA&s",
    tags: ["React", "Redux", "TailwindCSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 5,
    title: "Video Streaming Platform",
    description:
      "A Netflix-like streaming platform with video playback and content recommendations.",
    image:
      "https://cdn.dribbble.com/userupload/9028314/file/original-61d2be6d54802a3eabbb01f2a99f1284.png?format=webp&resize=400x300&vertical=center",
    tags: ["Next.js", "WebRTC", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 6,
    title: "AI Chat Assistant",
    description:
      "An intelligent chatbot powered by AI with natural language processing capabilities.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzvGs-VciZJGLO8sWCOu5HR3Fb-qye4ovcrQ&s",
    tags: ["React", "OpenAI API", "Express"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/dev-shahbaz-ali",
  },
];

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById(`project-${index}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      id={`project-${index}`}
      className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:scale-105 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <FaExternalLinkAlt className="text-sm" />
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
              >
                <FaGithub className="text-sm" />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-green-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and
            expertise in web development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/dev-shahbaz-ali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <FaGithub className="text-xl" />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Online cinema",
      subtitle: "A feature-rich platform for streaming movies and TV shows with comprehensive user authentication, payment integration, and modern responsive UI. Built with React, Node.js, and MongoDB for scalable performance.",
      description: "",
      image: "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "E-shop",
      subtitle: "A modern online store with a clean interface for electronic devices with a clean UI and price calculator. Integrated with Stripe for secure payments and built with Next.js for optimal performance and SEO.",
      description: "",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      tags: ["Next.js", "Tailwind", "Stripe"]
    },
    {
      title: "Games forum",
      subtitle: "A community-driven forum for gamers to discuss, share, and connect. Includes real-time messaging, user authentication, and dynamic content management. Built with modern web technologies: Angular, Firebase, WebSocket.",
      description: "",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
      tags: ["Angular", "Firebase", "WebSocket"]
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-[1140px] mx-auto px-8">
        <h2 className="text-4xl font-bold text-white mb-16 font-sans">My projects</h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''} group`}>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-sans">{project.title}</h3>
                  <p className="text-[#CFCFCF] text-base leading-relaxed mb-6 font-sans">{project.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full border border-gray-700 font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(233,30,99,0.7)] hover:scale-105 transition-all duration-300 active:scale-95 font-sans">
                  See more
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';

// Import logo images
import typescriptLogo from './skillLogo/Typescript_logo_2020.svg.png';
import javascriptLogo from './skillLogo/JavaScript_logo_2.svg';
import reactLogo from './skillLogo/React-icon.svg.png';
import phpLogo from './skillLogo/PHP-logo.svg.png';
import laravelLogo from './skillLogo/Laravel.svg.png';
import mysqlLogo from './skillLogo/MySQL_textlogo.svg.png';
import firebaseLogo from './skillLogo/firebase.png';
import aspNetLogo from './skillLogo/asp.net_.webp';
import socketIoLogo from './skillLogo/Socket-io.svg.png';

interface Skill {
  name: string;
  logo: string;
  category: string;
  borderColor: string;
  shadowColor: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'TypeScript', logo: typescriptLogo, category: 'frontend', borderColor: 'border-blue-500', shadowColor: 'rgba(59,130,246,0.6)' },
    { name: 'JavaScript', logo: javascriptLogo, category: 'frontend', borderColor: 'border-yellow-400', shadowColor: 'rgba(245,158,11,0.6)' },
    { name: 'React', logo: reactLogo, category: 'frontend', borderColor: 'border-blue-400', shadowColor: 'rgba(59,130,246,0.6)' },
    { name: 'PHP', logo: phpLogo, category: 'backend', borderColor: 'border-purple-500', shadowColor: 'rgba(147,51,234,0.6)' },
    { name: 'Laravel', logo: laravelLogo, category: 'backend', borderColor: 'border-red-500', shadowColor: 'rgba(239,68,68,0.6)' },
    { name: 'MySQL', logo: mysqlLogo, category: 'database', borderColor: 'border-blue-600', shadowColor: 'rgba(59,130,246,0.6)' },
    { name: 'Firebase', logo: firebaseLogo, category: 'database', borderColor: 'border-orange-500', shadowColor: 'rgba(249,115,22,0.6)' },
    { name: 'ASP.NET', logo: aspNetLogo, category: 'backend', borderColor: 'border-purple-600', shadowColor: 'rgba(147,51,234,0.6)' },
    { name: 'Socket.IO', logo: socketIoLogo, category: 'backend', borderColor: 'border-gray-500', shadowColor: 'rgba(107,114,128,0.6)' }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">My skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className={`
                  w-28 h-28 rounded-xl bg-white
                  flex flex-col items-center justify-center
                  hover:scale-105
                  transition-all duration-300 cursor-pointer
                  border-2 ${skill.borderColor}
                  p-3
                  relative overflow-hidden
                `}>
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-20 h-16 object-contain mb-1"
                    style={{ zIndex: 1 }}
                  />
                  <p className="text-gray-800 text-xs font-medium text-center" style={{ zIndex: 1 }}>
                    {skill.name}
                  </p>
                  {/* Glowing shadow effect */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: `0 0 20px ${skill.shadowColor}`,
                      zIndex: -1
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
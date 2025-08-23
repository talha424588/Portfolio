import React from 'react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
  bgColor: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'TypeScript', icon: <span className="text-white font-bold text-lg">TS</span>, category: 'frontend', bgColor: 'bg-blue-600' },
    { name: 'Photoshop', icon: <span className="text-white font-bold text-lg">Ps</span>, category: 'design', bgColor: 'bg-blue-700' },
    { name: 'Premiere', icon: <span className="text-white font-bold text-lg">Pr</span>, category: 'design', bgColor: 'bg-purple-700' },
    { name: 'Lightroom', icon: <span className="text-white font-bold text-lg">Lr</span>, category: 'design', bgColor: 'bg-blue-500' },
    { name: 'Illustrator', icon: <span className="text-white font-bold text-lg">Ai</span>, category: 'design', bgColor: 'bg-orange-600' },
    { name: 'NodeJS', icon: <span className="text-white font-bold text-lg">N</span>, category: 'backend', bgColor: 'bg-green-600' },
    { name: 'React', icon: <span className="text-blue-400 font-bold text-lg">⚛</span>, category: 'frontend', bgColor: 'bg-gray-800' },
    { name: 'Svelte', icon: <span className="text-white font-bold text-lg">S</span>, category: 'frontend', bgColor: 'bg-orange-500' },
    { name: 'After Effects', icon: <span className="text-white font-bold text-lg">Ae</span>, category: 'design', bgColor: 'bg-purple-600' },
    { name: 'Figma', icon: <span className="text-white font-bold text-lg">F</span>, category: 'design', bgColor: 'bg-red-500' },
    { name: 'Sketch', icon: <span className="text-white font-bold text-lg">S</span>, category: 'design', bgColor: 'bg-yellow-500' },
    { name: 'PostgreSQL', icon: <span className="text-white font-bold text-lg">P</span>, category: 'database', bgColor: 'bg-blue-800' },
    { name: 'Next.js', icon: <span className="text-white font-bold text-lg">N</span>, category: 'frontend', bgColor: 'bg-black' },
    { name: 'JavaScript', icon: <span className="text-black font-bold text-lg">JS</span>, category: 'frontend', bgColor: 'bg-yellow-400' },
    { name: 'Redux', icon: <span className="text-white font-bold text-lg">R</span>, category: 'frontend', bgColor: 'bg-purple-600' },
    { name: 'Redis', icon: <span className="text-white font-bold text-lg">R</span>, category: 'database', bgColor: 'bg-red-600' },
    { name: 'Go', icon: <span className="text-white font-bold text-lg">Go</span>, category: 'backend', bgColor: 'bg-cyan-500' },
    { name: 'MongoDB', icon: <span className="text-white font-bold text-lg">M</span>, category: 'database', bgColor: 'bg-green-700' }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-[1140px] mx-auto px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">My skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`
                w-24 h-24 rounded-xl ${skill.bgColor}
                flex flex-col items-center justify-center
                hover:scale-105 hover:shadow-[0_0_20px_rgba(233,30,99,0.5)]
                transition-all duration-300 cursor-pointer
                border border-gray-700 hover:border-transparent
              `}>
                {skill.icon}
              </div>
              <p className="text-white text-sm font-medium mt-2 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
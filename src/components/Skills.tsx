import React from 'react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
  bgColor: string;
  glowColor: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'TypeScript', icon: <span className="text-white font-bold text-lg">TS</span>, category: 'frontend', bgColor: 'bg-blue-600', glowColor: 'shadow-[0_0_15px_rgba(59,130,246,0.7)]' },
    { name: 'Photoshop', icon: <span className="text-white font-bold text-lg">Ps</span>, category: 'design', bgColor: 'bg-blue-700', glowColor: 'shadow-[0_0_15px_rgba(6,182,212,0.7)]' },
    { name: 'Premiere', icon: <span className="text-white font-bold text-lg">Pr</span>, category: 'design', bgColor: 'bg-purple-700', glowColor: 'shadow-[0_0_15px_rgba(147,51,234,0.7)]' },
    { name: 'Lightroom', icon: <span className="text-white font-bold text-lg">Lr</span>, category: 'design', bgColor: 'bg-blue-500', glowColor: 'shadow-[0_0_15px_rgba(59,130,246,0.7)]' },
    { name: 'Illustrator', icon: <span className="text-white font-bold text-lg">Ai</span>, category: 'design', bgColor: 'bg-orange-600', glowColor: 'shadow-[0_0_15px_rgba(249,115,22,0.7)]' },
    { name: 'NodeJS', icon: <span className="text-white font-bold text-lg">N</span>, category: 'backend', bgColor: 'bg-green-600', glowColor: 'shadow-[0_0_15px_rgba(22,163,74,0.7)]' },
    { name: 'React', icon: <span className="text-blue-400 font-bold text-lg">⚛</span>, category: 'frontend', bgColor: 'bg-gray-800', glowColor: 'shadow-[0_0_15px_rgba(59,130,246,0.7)]' },
    { name: 'Svelte', icon: <span className="text-white font-bold text-lg">S</span>, category: 'frontend', bgColor: 'bg-orange-500', glowColor: 'shadow-[0_0_15px_rgba(249,115,22,0.7)]' },
    { name: 'After Effects', icon: <span className="text-white font-bold text-lg">Ae</span>, category: 'design', bgColor: 'bg-purple-600', glowColor: 'shadow-[0_0_15px_rgba(147,51,234,0.7)]' },
    { name: 'Figma', icon: <span className="text-white font-bold text-lg">F</span>, category: 'design', bgColor: 'bg-red-500', glowColor: 'shadow-[0_0_15px_rgba(239,68,68,0.7)]' },
    { name: 'Sketch', icon: <span className="text-white font-bold text-lg">S</span>, category: 'design', bgColor: 'bg-yellow-500', glowColor: 'shadow-[0_0_15px_rgba(234,179,8,0.7)]' },
    { name: 'PostgreSQL', icon: <span className="text-white font-bold text-lg">P</span>, category: 'database', bgColor: 'bg-blue-800', glowColor: 'shadow-[0_0_15px_rgba(30,64,175,0.7)]' },
    { name: 'Next.js', icon: <span className="text-white font-bold text-lg">N</span>, category: 'frontend', bgColor: 'bg-black', glowColor: 'shadow-[0_0_15px_rgba(255,255,255,0.4)]' },
    { name: 'JavaScript', icon: <span className="text-black font-bold text-lg">JS</span>, category: 'frontend', bgColor: 'bg-yellow-400', glowColor: 'shadow-[0_0_15px_rgba(250,204,21,0.7)]' },
    { name: 'Redux', icon: <span className="text-white font-bold text-lg">R</span>, category: 'frontend', bgColor: 'bg-purple-600', glowColor: 'shadow-[0_0_15px_rgba(147,51,234,0.7)]' },
    { name: 'Redis', icon: <span className="text-white font-bold text-lg">R</span>, category: 'database', bgColor: 'bg-red-600', glowColor: 'shadow-[0_0_15px_rgba(220,38,38,0.7)]' },
    { name: 'Go', icon: <span className="text-white font-bold text-lg">Go</span>, category: 'backend', bgColor: 'bg-cyan-500', glowColor: 'shadow-[0_0_15px_rgba(6,182,212,0.7)]' },
    { name: 'MongoDB', icon: <span className="text-white font-bold text-lg">M</span>, category: 'database', bgColor: 'bg-green-700', glowColor: 'shadow-[0_0_15px_rgba(21,128,61,0.7)]' }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="w-full max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">My skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`
                w-24 h-24 rounded-xl ${skill.bgColor}
                flex flex-col items-center justify-center
                hover:scale-105 ${skill.glowColor}
                transition-all duration-300 cursor-pointer
                backdrop-blur-sm bg-opacity-90
                border border-gray-700/50 hover:border-transparent
                relative overflow-hidden
              `}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
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
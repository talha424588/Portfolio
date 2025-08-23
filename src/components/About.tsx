import React from 'react';

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

const About: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      title: "Software Engineering",
      subtitle: "Designing, developing and maintaining industry solutions",
      period: "2020 - Now",
      description: "Professional work including backend and frontend development"
    },
    {
      title: "Fullstack training at IBA",
      subtitle: "Java, Spring boot 2, JA, Kotlin, NodeJS",
      period: "2020",
      description: "Comprehensive training program focused on modern development stack"
    },
    {
      title: "BSUIR",
      subtitle: "Bachelor of Computer systems and networks",
      period: "2020-2024",
      description: "Academic foundation in computer science and engineering"
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-[1140px] mx-auto px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Anton F. - About Me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full -z-10 opacity-20"></div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="md:col-span-3">
            <h2 className="text-4xl font-bold text-white mb-12">About me</h2>
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  {/* Timeline marker */}
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${
                      index === 0 ? 'bg-pink-500' : 
                      index === 1 ? 'bg-purple-500' : 
                      'bg-red-500'
                    }`}></div>
                    {index < timelineData.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-700 mt-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className="text-sm text-[#CFCFCF] font-medium">{item.period}</span>
                    </div>
                    <p className="text-[#CFCFCF] mb-2 text-sm">{item.subtitle}</p>
                    <p className="text-[#CFCFCF] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
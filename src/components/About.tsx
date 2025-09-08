import React from 'react';

import aboutMe from '../components/images/about_me_1.png';

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
    <section id="about" className="bg-[#0B0B12] text-white">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                {/* <div className="w-72 h-72 overflow-hidden shadow-lg"> */}
                <div className="w-72 h-72 overflow-hidden">
                  <img
                    src={aboutMe}
                    alt="Person with Cat - About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0">
                  <div className="absolute -inset-8 bg-white rounded-[50%_50%_30%_70%/60%_40%_60%_40%]  -z-10"></div>
                </div>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div className="md:col-span-3">
              <h2 className="text-4xl font-bold mb-12">About me</h2>
              <div className="relative">
                <div
                  style={{
                    position: 'absolute',
                    left: '0.25rem',
                    top: '0.375rem',
                    height: '20rem',
                    width: '0.125rem',
                    background: 'linear-gradient(to bottom, #0400FF, #FF0000)',
                  }}
                />
                <div className="space-y-8">
                  {timelineData.map((item, index) => (
                    <div key={index} className="flex items-start space-x-6 relative">
                      {/* Timeline marker */}
                      <div className="flex items-center relative z-10">
                        <div
                          className="w-3 h-3 rounded-full border-white shadow-lg mt-1.5"
                          style={{
                            background: index === 0 ? 'rgb(4, 0, 255)' :
                              index === 1 ? 'linear-gradient(to right, #FF1493, #FF0000)' :
                                'rgb(255, 0, 0)',
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <span className="text-sm font-medium px-3 py-1 rounded-full">{item.period}</span>
                        </div>
                        <p className="mb-2 text-gray-300 text-sm font-medium">{item.subtitle}</p>
                        <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
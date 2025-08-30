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
    <section id="about" className="bg-[#0B0B12] text-white">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className=" p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                    alt="Anton F. - About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full -z-10 opacity-30 blur-xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full -z-10 opacity-20"></div>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div className="md:col-span-3">
              <h2 className="text-4xl font-bold mb-12">About me</h2>
              <div className="relative">
                {/* Timeline line - extends from point 1 through point 2 to point 3 */}
                <div className="absolute left-1 top-0 h-[26rem] w-0.5 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500"></div>
                
                <div className="space-y-8">
                  {timelineData.map((item, index) => (
                    <div key={index} className="flex items-start space-x-6 relative">
                      {/* Timeline marker */}
                      <div className="flex flex-col items-center relative z-10">
                        <div className={`w-3 h-3 rounded-full  border-white shadow-lg ${
                          index === 0 ? 'bg-gradient-to-r from-purple-400 to-pink-500' : 
                          index === 1 ? 'bg-gradient-to-r from-pink-500 to-red-500' : 
                          'bg-gradient-to-r from-red-500 to-orange-500'
                        }`}></div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          <span className="text-sm text-purple-300 font-medium bg-purple-900/30 px-3 py-1 rounded-full">{item.period}</span>
                        </div>
                        <p className="text-purple-200 mb-2 text-sm font-medium">{item.subtitle}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
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
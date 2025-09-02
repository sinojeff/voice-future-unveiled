
import React from 'react';

const TimelineSection = () => {
  const milestones = [
    {
      date: "Q1 2025",
      title: "Beta Testing",
      description: "Closed beta for early adopters and voice artists",
      status: "completed"
    },
    {
      date: "Q2 2025",
      title: "Platform Development",
      description: "Core platform features and security implementation",
      status: "in-progress"
    },
    {
      date: "Dec 25, 2025",
      title: "Official Launch",
      description: "Public launch of VoiceNet.AI platform",
      status: "upcoming"
    },
    {
      date: "Q4 2025",
      title: "Global Expansion",
      description: "International markets and advanced AI features",
      status: "planned"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Launch <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our journey to revolutionize the voice economy
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500"></div>

            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-center mb-12 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  milestone.status === 'completed' ? 'bg-green-500 border-green-300' :
                  milestone.status === 'in-progress' ? 'bg-purple-500 border-purple-300 animate-pulse' :
                  milestone.status === 'upcoming' ? 'bg-yellow-500 border-yellow-300' :
                  'bg-gray-500 border-gray-300'
                }`}></div>

                {/* Content */}
                <div className="ml-16 bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                    <span className="text-sm text-purple-400 font-medium">{milestone.date}</span>
                  </div>
                  <p className="text-gray-300">{milestone.description}</p>
                  <div className="mt-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      milestone.status === 'in-progress' ? 'bg-purple-500/20 text-purple-400' :
                      milestone.status === 'upcoming' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {milestone.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

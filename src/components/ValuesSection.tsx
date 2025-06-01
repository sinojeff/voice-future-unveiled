
import React from 'react';
import { Users, Shield, TrendingUp, Globe, Cpu } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: <Users size={32} />,
      title: "Stakeholders First",
      description: "We prioritize the needs and success of our community members above all else"
    },
    {
      icon: <Shield size={32} />,
      title: "Trust & Integrity",
      description: "Building lasting relationships through transparency and ethical practices"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Scale",
      description: "Designed to grow with ambitious goals and unlimited potential"
    },
    {
      icon: <Globe size={32} />,
      title: "Born Global",
      description: "A platform built for the world, connecting voices across all borders"
    },
    {
      icon: <Cpu size={32} />,
      title: "Think Tech",
      description: "Innovation-driven approach with cutting-edge technology at our core"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Core Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The principles that guide everything we do at VoiceNet.AI
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 text-purple-400 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

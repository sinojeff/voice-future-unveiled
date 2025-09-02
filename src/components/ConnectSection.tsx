import React from 'react';
import { Mail, Mic, Brain, Hammer, TrendingUp } from 'lucide-react';

const ConnectSection = () => {
  const audiences = [
    {
      icon: <Mic size={24} />,
      title: "Voice Artists",
      description: "Transform your voice into digital assets and earn from your talent"
    },
    {
      icon: <Brain size={24} />,
      title: "AI Tech Enthusiasts",
      description: "Help shape the future of voice technology and AI innovation"
    },
    {
      icon: <Hammer size={24} />,
      title: "Builders & Founders",
      description: "Partner with us to revolutionize the voice economy"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Investors",
      description: "Join us in building the next generation voice marketplace"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Connect with <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">the Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the exciting times ahead and be part of the voice revolution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 text-purple-400 flex justify-center">
                {audience.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{audience.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <Mail size={32} className="text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Whether you're a voice artist, tech enthusiast, builder, or investor - we'd love to hear from you!
            </p>
            <a 
              href="mailto:hello@voicenet.ai"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <Mail size={20} />
              hello@voicenet.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
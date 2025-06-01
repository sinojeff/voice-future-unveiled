
import React from 'react';
import FeatureCard from './FeatureCard';
import { Mic, Banknote, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Mic size={48} />,
      title: "World's First Voice Market",
      description: "Trade, buy, and sell unique voice signatures in the first-ever decentralized voice marketplace. Your voice becomes a valuable digital asset.",
      delay: 0
    },
    {
      icon: <Banknote size={48} />,
      title: "Voice Bank",
      description: "Store and manage your voice portfolio securely. Earn passive income by licensing your voice samples to creators worldwide.",
      delay: 200
    },
    {
      icon: <Shield size={48} />,
      title: "Handy-Control",
      description: "Maintain complete ownership and control over your voice assets. Set usage rights, pricing, and licensing terms with blockchain-backed security.",
      delay: 400
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Voice Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of voice technology with our groundbreaking platform features
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

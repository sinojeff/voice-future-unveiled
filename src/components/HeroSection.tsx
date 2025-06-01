
import React from 'react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* VoiceNet.AI Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            VoiceNet.AI
          </h1>
        </div>

        {/* Main Banner */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            All New <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Voice Economy</span>
            <br />
            to Unveil Soon
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            The world's first decentralized voice marketplace where your voice becomes your digital asset
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Launch Countdown
          </h3>
          <CountdownTimer />
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

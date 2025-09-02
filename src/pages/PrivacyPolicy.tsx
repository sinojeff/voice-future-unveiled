import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Privacy Policy
        </h1>
        
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 text-gray-300 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="leading-relaxed">
              VoiceNet.AI collects information you provide directly to us, such as when you create an account, 
              upload voice content, or contact us. This may include your name, email address, voice recordings, 
              and other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, process transactions, 
              send you technical notices and support messages, and communicate with you about products, services, 
              and promotional offers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Voice Data Protection</h2>
            <p className="leading-relaxed">
              Your voice recordings and AI-generated voice models are treated with the highest level of security. 
              We implement industry-standard encryption and access controls to protect your voice data from 
              unauthorized access or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your 
              explicit consent, except as described in this policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access, update, or delete your personal information. You may also request 
              that we stop processing your voice data or delete your voice models at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@voicenet.ai" className="text-purple-400 hover:text-purple-300">
                hello@voicenet.ai
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-8">
            Last updated: December 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
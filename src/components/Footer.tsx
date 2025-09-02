
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            VoiceNet.AI
          </h3>
          <p className="text-gray-400 mb-6">
            Revolutionizing the voice economy, one voice at a time.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="mailto:hello@voicenet.ai" className="text-gray-400 hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 VoiceNet.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

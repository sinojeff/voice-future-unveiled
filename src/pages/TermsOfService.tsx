import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
          Terms of Service
        </h1>
        
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 text-gray-300 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using VoiceNet.AI, you accept and agree to be bound by the terms and provision 
              of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>
            <p className="leading-relaxed">
              Permission is granted to temporarily use VoiceNet.AI for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title, and under this license you may not modify 
              or copy the materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Voice Content Rights</h2>
            <p className="leading-relaxed">
              You retain ownership of your original voice recordings. By uploading voice content, you grant 
              VoiceNet.AI a license to process, store, and use your voice data to provide AI voice generation 
              services. You represent that you have the right to upload and use the voice content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Prohibited Uses</h2>
            <p className="leading-relaxed">
              You may not use VoiceNet.AI to create voice content that is illegal, harmful, threatening, abusive, 
              defamatory, or violates any person's rights. This includes creating unauthorized voice clones or 
              impersonating others without consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Service Availability</h2>
            <p className="leading-relaxed">
              VoiceNet.AI is provided "as is" and we make no warranties regarding service availability, 
              accuracy, or reliability. We reserve the right to modify or discontinue the service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
            <p className="leading-relaxed">
              In no event shall VoiceNet.AI or its suppliers be liable for any damages arising out of the use 
              or inability to use the service, even if VoiceNet.AI has been notified of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{' '}
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

export default TermsOfService;
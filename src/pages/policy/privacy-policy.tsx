// pages/PrivacyPolicy.tsx
import { useEffect } from "react";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    document.title = "LeadReachXpro | Privacy Policy";
  }, []);

  return (
      <div className="min-h-screen bg-gray-900 py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-10">
          <h1 className="text-4xl font-bold text-yellow-500 mb-6 text-center">
            Privacy Policy
          </h1>
          <p className="text-gray-300 mb-6 text-center">Last updated on Dec 12 2025</p>

          <section className="mb-6 text-gray-100 space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Introduction</h2>
            <p>
              LeadReachXpro values your privacy. This policy explains how we collect, use, and protect your personal data when you use our website and services.
            </p>
          </section>

          <section className="mb-6 text-gray-100 space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal information you provide during registration or payments.</li>
              <li>Email addresses and phone numbers for bulk campaigns.</li>
              <li>Technical data such as IP address, device type, and usage logs.</li>
            </ul>
          </section>

          <section className="mb-6 text-gray-100 space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and improve our services, including bulk email and SMS campaigns.</li>
              <li>To communicate important updates, offers, or account notifications.</li>
              <li>To ensure security and prevent misuse of our platform.</li>
            </ul>
          </section>

          <section className="mb-6 text-gray-100 space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Data Sharing & Security</h2>
            <p>
              We do not sell your personal data. Your information is stored securely and shared only when required for legal compliance or with trusted service providers who help us operate LeadReachXpro.
            </p>
          </section>

          <section className="mb-6 text-gray-100 space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Cookies & Tracking</h2>
            <p>
              Our website uses cookies to enhance your experience, track analytics, and maintain session information. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-6 text-gray-100 space-y-4">
            <h2 className="text-2xl font-semibold text-yellow-500">Your Rights</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You can request access to your personal data.</li>
              <li>You can request correction or deletion of your data.</li>
              <li>You can opt out of promotional communications at any time.</li>
            </ul>
          </section>

          <section className="text-gray-300 text-sm text-center mt-10">
            © {new Date().getFullYear()} <span className="text-yellow-500 font-semibold">LeadReachXpro</span>. All rights reserved.
          </section>
        </div>
      </div>
  );
};

export default PrivacyPolicy;

// pages/AboutUs.tsx
import { useEffect } from "react";

const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = "LeadReachXpro | About Us";
  }, []);

  return (
      <div className="min-h-screen bg-gray-900 py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-10 space-y-6">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4 text-center">
            About LeadReachXpro
          </h1>

          <p className="text-gray-100 text-lg">
            LeadReachXpro is a powerful platform designed to help you send bulk emails using your personal SMTP configuration and bulk SMS using your Android phone as a gateway. We give you complete control over your campaigns with maximum deliverability and zero monthly fees.
          </p>

          <p className="text-gray-100 text-lg">
            Our mission is to empower businesses and individuals to manage email and SMS campaigns efficiently while maintaining privacy, security, and personal account control. With our easy-to-use dashboard, you can monitor campaign performance, manage leads, and ensure your messages reach the inbox reliably.
          </p>

          <p className="text-gray-100 text-lg">
            LeadReachXpro offers unlimited personal accounts, high inbox rates, and zero monthly fees. Whether you are a small business or a large organization, our platform gives you the tools to run professional email and SMS campaigns effortlessly.
          </p>

          <p className="text-gray-300 text-sm text-center mt-6">
            © {new Date().getFullYear()} <span className="text-yellow-500 font-semibold">LeadReachXpro</span>. All rights reserved.
          </p>
        </div>
      </div>
  );
};

export default AboutUs;

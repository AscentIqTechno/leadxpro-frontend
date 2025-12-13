import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Lead<span className="text-yellow-500">Reach</span>
              <span className="text-white">Xpro</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              Send bulk emails using your personal SMTP and bulk SMS using your Android phone as a gateway. Complete control, maximum deliverability.
            </p>
            <div className="flex space-x-4">
              <a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">Bulk Email Campaigns</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">SMS Gateway</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">SMTP Configuration</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">Analytics Dashboard</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">Lead Management</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">SMTP Setup Guides</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">Android Gateway Tutorial</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">FAQ</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">API Documentation</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-yellow-500 transition-colors">Support Center</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-400 hover:text-yellow-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact-us" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-yellow-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-yellow-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} <span className="text-white font-semibold">LeadReachXpro</span>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms-of-service" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Terms</Link>
            <Link to="/privacy-policy" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Privacy</Link>
            <a href="#!" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

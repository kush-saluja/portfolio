import React from 'react';
import { Badge } from './ui/badge';
import { Mail, Linkedin, MapPin, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">
                {personal.name}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Technical Lead & Backend Engineer specializing in AI-driven solutions 
                and scalable cloud-native systems.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href={`mailto:${personal.email}`}
                  className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a 
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <div className="bg-slate-800 p-3 rounded-lg">
                  <MapPin size={18} />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-slate-400 text-sm">Email</div>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
                <div>
                  <div className="text-slate-400 text-sm">Phone</div>
                  <a 
                    href={`tel:${personal.phone}`}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
                <div>
                  <div className="text-slate-400 text-sm">Location</div>
                  <div className="text-slate-300">{personal.location}</div>
                </div>
              </div>
              <div className="mt-6">
                <Badge 
                  variant="secondary" 
                  className="bg-green-800 text-green-100 hover:bg-green-700"
                >
                  Available for Opportunities
                </Badge>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700 mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-slate-400 text-sm">
                © {new Date().getFullYear()} {personal.name}. All rights reserved.
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-sm">
                Built with <Heart className="text-red-500" size={14} /> and React
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
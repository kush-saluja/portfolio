import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowDown, Mail, Linkedin, MapPin } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge 
            variant="secondary" 
            className="mb-6 bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium"
          >
            Available for New Opportunities
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            {personal.name}
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600 mb-4">
            {personal.title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
            {personal.subtitle}
          </p>

          {/* Summary */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg text-slate-600 leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>{personal.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={18} />
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => scrollToSection('#experience')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              size="lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('#contact')}
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('#about')}
              className="text-slate-400 hover:text-blue-600 transition-colors"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
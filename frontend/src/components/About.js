import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Users, TrendingUp, Award, Target } from 'lucide-react';
import { portfolioData } from '../data/mock';

const About = () => {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: TrendingUp,
      title: "6+ Years Experience",
      description: "Building scalable SaaS platforms and AI-driven solutions"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led cross-functional teams and mentored junior engineers"
    },
    {
      icon: Award,
      title: "Technical Excellence",
      description: "Expert in Java, Spring Boot, AI technologies, and system design"
    },
    {
      icon: Target,
      title: "Business Impact",
      description: "Delivered solutions driving revenue growth and cost optimization"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
              About Me
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Passionate About Building Intelligent Systems
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I specialize in creating scalable backend systems and AI-powered solutions 
              that drive business growth and enhance user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Professional Summary */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Professional Journey
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  As a Technical Lead and Backend Engineer at Sirion, I've spent the last 6+ years 
                  building cloud-native, scalable SaaS platforms that serve enterprise clients globally.
                </p>
                <p>
                  My expertise spans from traditional backend development with Java and Spring Boot 
                  to cutting-edge AI technologies including LLMs, RAG systems, and knowledge graphs.
                </p>
                <p>
                  I'm particularly passionate about system design, distributed architectures, and 
                  mentoring the next generation of engineers. My work has consistently delivered 
                  measurable business impact, from driving revenue growth to optimizing operational costs.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <item.icon className="text-blue-600" size={24} />
                      </div>
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-16 bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50%+</div>
                <p className="text-slate-600">Development Time Reduction</p>
                <p className="text-sm text-slate-500 mt-1">Through CARGO platform</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
                <p className="text-slate-600">Team Velocity Increase</p>
                <p className="text-sm text-slate-500 mt-1">Through leadership optimization</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">20%</div>
                <p className="text-slate-600">Infrastructure Cost Reduction</p>
                <p className="text-sm text-slate-500 mt-1">Through system optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
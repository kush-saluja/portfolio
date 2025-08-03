import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Cloud, Cog, Brain, Server } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      items: skills.languages,
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Frameworks",
      icon: Server,
      items: skills.frameworks,
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Databases",
      icon: Database,
      items: skills.databases,
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      items: skills.cloud,
      color: "bg-orange-100 text-orange-700"
    },
    {
      title: "Tools & Technologies",
      icon: Cog,
      items: skills.tools,
      color: "bg-red-100 text-red-700"
    },
    {
      title: "Core Concepts & Expertise",
      icon: Brain,
      items: skills.concepts,
      color: "bg-teal-100 text-teal-700"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Technical Proficiencies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive toolkit spanning backend development, AI technologies, 
              and modern cloud-native architectures.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-slate-100 p-2 rounded-lg">
                      <category.icon className="text-slate-600" size={20} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className={`${category.color} text-xs font-medium hover:opacity-80 transition-opacity`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Highlights */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
              Technical Highlights
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">AI/ML</div>
                <p className="text-slate-600 text-sm">LLMs, RAG, Vector Search</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Microservices</div>
                <p className="text-slate-600 text-sm">Distributed Architecture</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Performance</div>
                <p className="text-slate-600 text-sm">20K+ Operations/Second</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Leadership</div>
                <p className="text-slate-600 text-sm">Team & Technical Mentoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
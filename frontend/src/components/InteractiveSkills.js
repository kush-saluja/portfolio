import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Cloud, Cog, Brain, Server, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/mock';

const InteractiveSkills = () => {
  const { skills } = portfolioData;
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [visibleCategories, setVisibleCategories] = useState(new Set());
  const categoryRefs = useRef([]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for section animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Intersection Observer for skill categories
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCategories(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      items: skills.languages,
      color: "bg-blue-100 text-blue-700",
      hoverColor: "bg-blue-200",
      description: "Core languages for backend development"
    },
    {
      title: "Frameworks & Libraries",
      icon: Server,
      items: skills.frameworks,
      color: "bg-green-100 text-green-700",
      hoverColor: "bg-green-200",
      description: "Production-ready frameworks and tools"
    },
    {
      title: "Databases & Storage",
      icon: Database,
      items: skills.databases,
      color: "bg-purple-100 text-purple-700",
      hoverColor: "bg-purple-200",
      description: "Data management and storage solutions"
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      items: skills.cloud,
      color: "bg-orange-100 text-orange-700",
      hoverColor: "bg-orange-200",
      description: "Enterprise cloud infrastructure"
    },
    {
      title: "Tools & Technologies",
      icon: Cog,
      items: skills.tools,
      color: "bg-red-100 text-red-700",
      hoverColor: "bg-red-200",
      description: "Development and monitoring tools"
    },
    {
      title: "AI & Advanced Concepts",
      icon: Brain,
      items: skills.concepts.filter(concept => 
        concept.includes('LLM') || concept.includes('RAG') || concept.includes('AI') || 
        concept.includes('Vector') || concept.includes('Prompt')
      ),
      color: "bg-teal-100 text-teal-700",
      hoverColor: "bg-teal-200",
      description: "Cutting-edge AI and ML technologies"
    }
  ];

  const systemDesignConcepts = skills.concepts.filter(concept => 
    !concept.includes('LLM') && !concept.includes('RAG') && !concept.includes('AI') && 
    !concept.includes('Vector') && !concept.includes('Prompt')
  );

  return (
    <section id="skills" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Animation */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const isCardVisible = visibleCategories.has(index);
              const isHovered = hoveredCategory === index;
              
              return (
                <Card 
                  key={index} 
                  ref={el => categoryRefs.current[index] = el}
                  data-index={index}
                  className={`group hover:shadow-2xl transition-all duration-500 cursor-pointer transform ${
                    isCardVisible 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-12 opacity-0 scale-95'
                  } ${isHovered ? 'scale-105' : 'hover:scale-105'}`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    background: isHovered 
                      ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' 
                      : 'linear-gradient(135deg, white 0%, #f8fafc 100%)'
                  }}
                  onMouseEnter={() => setHoveredCategory(index)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${category.color} ${isHovered ? category.hoverColor : ''} p-3 rounded-xl transition-all duration-300 group-hover:scale-110`}>
                        <category.icon className="transition-transform duration-300" size={24} />
                      </div>
                      <ChevronRight className={`text-slate-400 group-hover:text-blue-600 transform transition-all duration-300 ${
                        isHovered ? 'translate-x-1 text-blue-600' : ''
                      }`} size={20} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 mb-2">
                      {category.title}
                    </CardTitle>
                    <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                      {category.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className={`${category.color} text-xs font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-md ${
                            isHovered ? 'scale-105' : ''
                          }`}
                          style={{ 
                            transitionDelay: `${skillIndex * 50}ms` 
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Skill Count Indicator */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-slate-400 group-hover:text-slate-500 transition-colors">
                        {category.items.length} skills
                      </span>
                      <div className={`w-16 h-1 ${category.color.replace('text', 'bg')} rounded-full opacity-30 group-hover:opacity-60 transition-opacity`}></div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* System Design & Architecture Concepts */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-100 hover:shadow-xl transition-shadow duration-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-slate-200 p-3 rounded-xl">
                    <Brain className="text-slate-700" size={24} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    System Design & Architecture
                  </CardTitle>
                </div>
                <p className="text-slate-600">
                  Advanced concepts in distributed systems, scalability, and software architecture
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {systemDesignConcepts.map((concept, conceptIndex) => (
                    <Badge 
                      key={conceptIndex}
                      variant="secondary"
                      className="bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                      style={{ 
                        transitionDelay: `${conceptIndex * 30}ms` 
                      }}
                    >
                      {concept}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Highlights */}
          <div className={`mt-16 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
                Technical Highlights & Achievements
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: "AI/ML", desc: "LLMs, RAG, Vector Search", color: "text-purple-600" },
                  { label: "Performance", desc: "20K+ Operations/Second", color: "text-green-600" },
                  { label: "Architecture", desc: "Microservices Expert", color: "text-blue-600" },
                  { label: "Leadership", desc: "Team & Technical Mentoring", color: "text-orange-600" }
                ].map((highlight, index) => (
                  <div 
                    key={index}
                    className="text-center bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`text-2xl font-bold ${highlight.color} mb-2`}>
                      {highlight.label}
                    </div>
                    <p className="text-slate-600 text-sm">{highlight.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkills;
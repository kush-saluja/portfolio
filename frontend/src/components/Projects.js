import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronRight, TrendingUp, Zap, Users, Target, Code, Database, Brain } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Projects = () => {
  const { projects } = portfolioData;
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef([]);
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

  // Intersection Observer for project cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleProjects(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getProjectIcon = (projectName) => {
    if (projectName.includes('AI Agent')) return Brain;
    if (projectName.includes('CARGO')) return Code;
    if (projectName.includes('Management')) return Database;
    return Target;
  };

  return (
    <section id="projects" className="py-20 bg-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Animation */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
              Key Projects
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Featured Work & Innovations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Highlighting the most impactful projects that showcase technical leadership 
              and innovation in AI and distributed systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const ProjectIcon = getProjectIcon(project.name);
              const isCardVisible = visibleProjects.has(index);
              
              return (
                <Card
                  key={project.id}
                  ref={el => projectRefs.current[index] = el}
                  data-index={index}
                  className={`group hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer transform ${
                    isCardVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`,
                    background: 'linear-gradient(135deg, white 0%, #f8fafc 100%)'
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-100 group-hover:bg-blue-200 p-3 rounded-xl transition-colors duration-300">
                        <ProjectIcon className="text-blue-600 group-hover:scale-110 transition-transform duration-300" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                          {project.name}
                        </CardTitle>
                      </div>
                      <ChevronRight className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" size={20} />
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Impact Badge */}
                    <div className="bg-green-50 group-hover:bg-green-100 border border-green-200 rounded-lg p-3 transition-colors duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="text-green-600" size={16} />
                        <span className="font-semibold text-green-800 text-sm">Impact</span>
                      </div>
                      <p className="text-green-700 text-sm font-medium">{project.impact}</p>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Code className="text-slate-500" size={16} />
                        <span className="font-semibold text-slate-700 text-sm">Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary"
                            className="bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 transform hover:scale-105 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent rounded-lg pointer-events-none" />
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Projects Teaser */}
          <div className={`mt-16 text-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold text-slate-900">More Innovations</h3>
              </div>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                These represent just a few of the 7+ major features and systems I've architected. 
                Each project involved complex technical challenges, team coordination, and measurable business impact.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                  <Users className="text-blue-600 mb-2" size={20} />
                  <div className="text-lg font-bold text-slate-900">5+</div>
                  <div className="text-sm text-slate-600">Team Members Led</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                  <Target className="text-green-600 mb-2" size={20} />
                  <div className="text-lg font-bold text-slate-900">100+</div>
                  <div className="text-sm text-slate-600">Critical Bugs Resolved</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                  <TrendingUp className="text-purple-600 mb-2" size={20} />
                  <div className="text-lg font-bold text-slate-900">85%</div>
                  <div className="text-sm text-slate-600">Code Coverage Achieved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
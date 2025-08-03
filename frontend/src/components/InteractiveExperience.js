import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, ChevronDown, ChevronUp, Award, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/mock';

const InteractiveExperience = () => {
  const { experience } = portfolioData;
  const [expandedJobs, setExpandedJobs] = useState(new Set([0])); // First job expanded by default
  const [visibleJobs, setVisibleJobs] = useState(new Set());
  const jobRefs = useRef([]);
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

  // Intersection Observer for job cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleJobs(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    jobRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const toggleJobExpansion = (index) => {
    setExpandedJobs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const getRoleIcon = (role) => {
    if (role.includes('Technical Lead')) return '🚀';
    if (role.includes('Senior')) return '⭐';
    if (role.includes('Associate')) return '🎯';
    return '💼';
  };

  const extractMetrics = (achievements) => {
    const metrics = [];
    achievements.forEach(achievement => {
      const percentMatch = achievement.match(/(\d+)%/);
      const numberMatch = achievement.match(/(\d+(?:,\d+)*)/);
      if (percentMatch) {
        metrics.push({ value: percentMatch[1] + '%', type: 'percentage' });
      } else if (numberMatch && !percentMatch) {
        metrics.push({ value: numberMatch[1], type: 'number' });
      }
    });
    return metrics.slice(0, 2); // Show max 2 metrics
  };

  return (
    <section id="experience" className="py-20 bg-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Animation */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
              Experience
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              6+ years of progressive growth in backend engineering and technical leadership, 
              driving innovation in AI and distributed systems.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200 transform md:-translate-x-0.5"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experience.map((job, index) => {
                const isExpanded = expandedJobs.has(index);
                const isCardVisible = visibleJobs.has(index);
                const metrics = extractMetrics(job.achievements);
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={job.id}
                    ref={el => jobRefs.current[index] = el}
                    data-index={index}
                    className={`relative transform transition-all duration-700 ${
                      isCardVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-12 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 transition-all duration-300 ${
                      isCardVisible ? 'scale-100' : 'scale-0'
                    }`} style={{ transitionDelay: `${index * 200 + 300}ms` }}>
                      <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-25"></div>
                    </div>

                    {/* Card */}
                    <div className={`ml-16 md:ml-0 ${
                      isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'
                    } md:w-1/2 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <Card className="hover:shadow-xl transition-all duration-500 cursor-pointer group bg-white">
                        <CardHeader 
                          className="pb-4"
                          onClick={() => toggleJobExpansion(index)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="text-2xl">{getRoleIcon(job.role)}</div>
                              <div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                                  {job.role}
                                </h3>
                                <div className="text-lg font-semibold text-blue-600">
                                  {job.company}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {isExpanded ? 
                                <ChevronUp className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300" size={20} /> :
                                <ChevronDown className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300" size={20} />
                              }
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-slate-600 mt-3">
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span className="text-sm">{job.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span className="text-sm">{job.location}</span>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {index === 0 ? 'Current Role' : `Role ${index + 1}`}
                            </Badge>
                          </div>

                          {/* Quick Metrics */}
                          {metrics.length > 0 && (
                            <div className="flex gap-4 mt-4">
                              {metrics.map((metric, metricIndex) => (
                                <div key={metricIndex} className="bg-blue-50 px-3 py-2 rounded-lg">
                                  <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                                  <div className="text-xs text-blue-700">Impact</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </CardHeader>

                        {/* Expandable Content */}
                        <CardContent 
                          className={`transition-all duration-500 overflow-hidden ${
                            isExpanded ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
                          }`}
                        >
                          <div className="space-y-6">
                            {/* Key Achievements */}
                            <div>
                              <div className={`flex items-center gap-2 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                                <Award className="text-green-600" size={16} />
                                <h4 className="font-semibold text-slate-900">Key Achievements</h4>
                              </div>
                              <div className="space-y-3">
                                {job.achievements.slice(0, 3).map((achievement, achievementIndex) => (
                                  <div key={achievementIndex} className={`flex items-start gap-3 ${isEven ? 'md:flex-row-reverse md:text-right' : ''}`}>
                                    <TrendingUp className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                      {achievement}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className={`font-semibold text-slate-900 mb-3 ${isEven ? 'md:text-right' : ''}`}>
                                Technologies Used
                              </h4>
                              <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                                {job.technologies.slice(0, 6).map((tech, techIndex) => (
                                  <Badge 
                                    key={techIndex}
                                    variant="secondary" 
                                    className="bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs transform hover:scale-105 transition-all duration-300"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveExperience;
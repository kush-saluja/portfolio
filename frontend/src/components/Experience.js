import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
              Experience
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Over 6 years of experience building scalable systems and leading technical teams 
              at a leading SaaS company.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {job.role}
                      </h3>
                      <div className="text-xl font-semibold text-blue-600 mb-2">
                        {job.company}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-slate-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{job.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-xs">
                        {index === 0 ? 'Current Role' : `Role ${index + 1}`}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-3">
                          <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary" 
                          className="bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
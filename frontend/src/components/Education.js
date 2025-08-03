import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
              Education
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Academic Foundation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strong educational background in computer science and technology, 
              providing the foundation for technical excellence.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={edu.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <GraduationCap className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {edu.degree}
                        </h3>
                        <div className="text-xl font-semibold text-blue-600 mb-2">
                          {edu.institution}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-slate-600">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{edu.duration}</span>
                          </div>
                          {edu.location && (
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{edu.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                        <Award size={16} />
                        <span className="font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                {index === 0 && (
                  <CardContent>
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Academic Excellence</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Graduated with distinction from one of India's premier technical institutes, 
                        building a strong foundation in Information Technology, algorithms, data structures, 
                        and software engineering principles that continues to drive technical excellence.
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Continuous Learning
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Beyond formal education, I continuously stay updated with the latest technologies 
                and industry trends, particularly in AI, machine learning, and distributed systems. 
                My commitment to learning drives innovation in every project I undertake.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600 mb-2">NIT Graduate</div>
                <p className="text-slate-600 text-sm">Premier Technical Institute</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600 mb-2">9.1 CGPA</div>
                <p className="text-slate-600 text-sm">Academic Excellence</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600 mb-2">IT Specialization</div>
                <p className="text-slate-600 text-sm">Information Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
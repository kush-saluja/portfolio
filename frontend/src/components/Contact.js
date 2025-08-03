import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Mail, Phone, Linkedin, MapPin, CheckCircle, Copy, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: `${type} copied!`,
        description: `${text} has been copied to your clipboard.`,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard. Please copy manually.",
        variant: "destructive"
      });
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: personal.email,
      description: "Best way to reach me for opportunities",
      primaryAction: {
        label: "Send Email",
        href: `mailto:${personal.email}?subject=Professional Inquiry`,
        external: false
      },
      secondaryAction: {
        label: "Copy Email",
        action: () => copyToClipboard(personal.email, "Email")
      }
    },
    {
      icon: Phone,
      title: "Phone",
      value: personal.phone,
      description: "Available for calls during business hours",
      primaryAction: {
        label: "Call Now",
        href: `tel:${personal.phone}`,
        external: false
      },
      secondaryAction: {
        label: "Copy Number",
        action: () => copyToClipboard(personal.phone, "Phone number")
      }
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Professional Network",
      description: "Connect and view my professional updates",
      primaryAction: {
        label: "View Profile",
        href: personal.linkedin,
        external: true
      },
      secondaryAction: {
        label: "Copy Link",
        action: () => copyToClipboard(personal.linkedin, "LinkedIn URL")
      }
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700">
              Contact
            </Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I'm always interested in discussing new opportunities, technical challenges, 
              and innovative projects. Reach out through any of these channels.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="bg-blue-100 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <method.icon className="text-blue-600" size={32} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    {method.title}
                  </CardTitle>
                  <p className="text-slate-600 font-medium">{method.value}</p>
                  <p className="text-sm text-slate-500 mt-2">{method.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    asChild={!!method.primaryAction.href}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={!method.primaryAction.href ? method.primaryAction.action : undefined}
                  >
                    {method.primaryAction.href ? (
                      <a 
                        href={method.primaryAction.href}
                        target={method.primaryAction.external ? "_blank" : undefined}
                        rel={method.primaryAction.external ? "noopener noreferrer" : undefined}
                      >
                        {method.primaryAction.label}
                        {method.primaryAction.external && <ExternalLink className="ml-2" size={16} />}
                      </a>
                    ) : (
                      method.primaryAction.label
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={method.secondaryAction.action}
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <Copy className="mr-2" size={16} />
                    {method.secondaryAction.label}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Current Availability
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-slate-600">Available for new opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-slate-600">Open to consulting projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-slate-600">{personal.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-slate-900 mb-3 text-center">Preferred Contact Method</h4>
              <p className="text-slate-600 text-center leading-relaxed">
                For the fastest response, please reach out via <strong>email</strong>. I typically respond 
                within 24 hours during business days. For urgent matters, feel free to call directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
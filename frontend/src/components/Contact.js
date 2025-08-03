import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: personal.linkedin
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      href: null
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
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I'm always interested in discussing new opportunities, 
              technical challenges, and innovative projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <info.icon className="text-blue-600" size={18} />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 text-sm">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
                            target={info.label === 'LinkedIn' ? '_blank' : undefined}
                            rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-slate-600 text-sm">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="pt-6 border-t border-slate-200">
                    <h4 className="font-medium text-slate-900 mb-3">Availability</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="text-green-600" size={16} />
                      <span className="text-slate-600">Available for new opportunities</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-2">
                      <CheckCircle className="text-green-600" size={16} />
                      <span className="text-slate-600">Open to consulting projects</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What would you like to discuss?"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me more about your project or opportunity..."
                        required
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2" size={16} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
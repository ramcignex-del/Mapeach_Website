import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { faqData } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: 'demo',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    alert('Message sent! We will get back to you within 24 hours.');
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    /*
    {
      icon: Mail,
      title: "Email Us",
      content: "info@mapeach.com",
      link: "mailto:info@mapeach.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Tech Street, San Francisco, CA 94105",
      link: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM - 6PM PST",
      link: "#"
    }*/
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Let's Start a
              <span className="block text-emerald-600 mt-2">Conversation</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Have questions about our services? Ready to schedule a call? Our team is here to help.
            </p>
            <h3 className="text-lg font-bold text-slate-900 mb-2">info@mapeach.com</h3>
                  
                  <a href="mailto:info@mapeach.com">
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
                    Contact
                  </Button>
                  </a>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
     {/*} <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <Card key={idx} className="border-2 border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{info.title}</h3>
                    {info.link !== '#' ? (
                      <a href={info.link} className="text-sm text-emerald-600 hover:text-emerald-700">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-600">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    
      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              
              
              {/*<Card className="shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">How can we help? *</Label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="hiring">Hiring Inquiry</option>
                        <option value="talent">Join as Contractor</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us more about your needs..."
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-6"
                    >
                      Send Message
                    </Button>
                    
                  </form>
                </CardContent>
              </Card> 
              */}
            </div>
 
              
            
            {/* FAQ */}
           *<div>
              
             {/*} <h2 className="text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqData.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger className="text-left font-semibold text-slate-900">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
              */}
             {/* <Card className="mt-6 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Still have questions?</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Can't find the answer you're looking for? Our team is here to help.
                  </p>
                  <a href="mailto:info@mapeach.com">
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
                    Contact
                  </Button>
                  </a>
                </CardContent>
              </Card>
              */}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
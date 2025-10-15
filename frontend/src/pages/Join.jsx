import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { 
  DollarSign, Briefcase, Clock, TrendingUp, 
  CheckCircle, ArrowRight, Star
} from 'lucide-react';
import { talentProcess, talentTestimonials } from '../mock';

const Join = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    expertise: '',
    experience: '',
    portfolio: '',
    about: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    alert('Application submitted! We will review and get back to you within 48 hours.');
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Earn 30% More",
      description: "Keep more of what you earn. No agency taking 15-25% of your rate."
    },
    {
      icon: Briefcase,
      title: "Premium Projects",
      description: "Work with leading tech companies on high-impact, challenging projects."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Remote opportunities with flexible hours that fit your lifestyle."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Access to diverse projects that expand your skills and portfolio."
    },
    {
      icon: CheckCircle,
      title: "Hassle-Free Admin",
      description: "Automated timesheets, contracts, and payments—focus on what you do best."
    },
    {
      icon: Users,
      title: "Direct Client Relationships",
      description: "Build lasting connections with companies without agency intermediaries."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Keep More of What You Earn.
              <span className="block text-emerald-600 mt-2">Work with the Best.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Join Mapeach's elite network of IT professionals and earn <strong>higher rates</strong> while working on <strong>premium projects</strong> with top companies—no middleman taking a massive cut.
            </p>
            <a href="#apply">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Apply to Network
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Top Talent Chooses Mapeach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Better rates. Better projects. Better work-life balance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={idx} className="border-2 border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Earnings Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Take Home More of Your Rate
            </h2>
            <p className="text-xl text-slate-600">
              See how much more you earn by cutting out the middleman
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-red-900 mb-4">Traditional Agency</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Client pays per hour:</span>
                    <span className="font-semibold">$100</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Agency markup (20%):</span>
                    <span className="font-semibold">-$20</span>
                  </div>
                  <div className="border-t-2 border-red-300 pt-3 flex justify-between">
                    <span className="font-bold text-slate-900">You take home:</span>
                    <span className="text-2xl font-bold text-red-700">$80</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600">$64,000 annual take-home (40hrs/wk)</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-200 bg-emerald-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">Mapeach Platform</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Client pays per hour:</span>
                    <span className="font-semibold">$100</span>
                  </div>
                  <div className="flex justify-between text-emerald-600">
                    <span>Platform fee:</span>
                    <span className="font-semibold">-$1</span>
                  </div>
                  <div className="border-t-2 border-emerald-300 pt-3 flex justify-between">
                    <span className="font-bold text-slate-900">You take home:</span>
                    <span className="text-2xl font-bold text-emerald-700">$99</span>
                  </div>
                </div>
                <p className="text-sm text-emerald-700 font-semibold">$79,200 annual take-home—$15,200 more!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How to Join
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple 4-step process from application to first project
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {talentProcess.map((step, idx) => (
              <div key={step.step} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
                {idx < talentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 -ml-4" style={{ width: 'calc(100% - 4rem)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What Our Professionals Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {talentTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Apply to Join Our Network
            </h2>
            <p className="text-xl text-slate-600">
              We'll review your application and get back to you within 48 hours
            </p>
          </div>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
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
                  <div>
                    <Label htmlFor="expertise">Primary Expertise *</Label>
                    <Input
                      id="expertise"
                      name="expertise"
                      required
                      placeholder="e.g., Full-Stack Development, Cloud Architecture"
                      value={formData.expertise}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Input
                    id="experience"
                    name="experience"
                    required
                    placeholder="e.g., 5+ years"
                    value={formData.experience}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="portfolio">Portfolio/LinkedIn/GitHub URL</Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    placeholder="https://"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="about">Tell us about yourself and your skills *</Label>
                  <Textarea
                    id="about"
                    name="about"
                    required
                    rows={5}
                    placeholder="Share your technical skills, notable projects, and what you're looking for..."
                    value={formData.about}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-6"
                >
                  Submit Application
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Join;
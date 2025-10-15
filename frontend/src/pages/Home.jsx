import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Zap, DollarSign, CheckCircle, ShieldCheck, Clock, TrendingDown, 
  Users, Star, ArrowRight, TimerOff, TrendingUp, FileText, AlertCircle
} from 'lucide-react';
import { companyStats, clientLogos, testimonials, problems, solutions, techDomains } from '../mock';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Stop Paying Agency Markups.
              <span className="block text-emerald-600 mt-2">Start Hiring Top Tech Talent Directly.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Mapeach delivers highly vetted IT professionals in <strong>72 hours</strong>, not weeks—with transparent pricing that saves you up to <strong>20%</strong> compared to traditional staffing agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/hire">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Hire Talent Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold transition-all duration-300">
                  Join Our Network
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {companyStats.map((stat, idx) => (
              <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Sticking Points of Traditional Staffing
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Traditional agencies and marketplaces are broken. Here's why:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem) => {
              const IconComponent = problem.icon === 'timer-off' ? TimerOff : 
                                   problem.icon === 'trending-up' ? TrendingUp :
                                   problem.icon === 'file-text' ? FileText : AlertCircle;
              return (
                <Card key={problem.id} className="border-2 border-red-200 bg-red-50/50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="text-red-600" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                    <p className="text-slate-600 text-sm">{problem.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              The Mapeach Difference
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Speed. Cost transparency. Automation. Full control.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => {
              const IconComponent = solution.icon === 'zap' ? Zap : 
                                   solution.icon === 'dollar-sign' ? DollarSign :
                                   solution.icon === 'check-circle' ? CheckCircle : ShieldCheck;
              return (
                <Card key={solution.id} className="border-2 border-emerald-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold mb-3">
                      {solution.benefit}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{solution.title}</h3>
                    <p className="text-slate-600 text-sm">{solution.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Transparent Pricing You Can Trust</h2>
          <p className="text-xl text-emerald-50 mb-12">
            No hidden fees. No surprise markups. Just simple, honest pricing.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold mb-2">$10</div>
                <div className="text-lg text-emerald-100 mb-4">One-time per contractor</div>
                <p className="text-sm text-emerald-50">Simple onboarding fee—that's it</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold mb-2">$1/hr</div>
                <div className="text-lg text-emerald-100 mb-4">Recurring, billed bi-weekly</div>
                <p className="text-sm text-emerald-50">Transparent hourly platform fee</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-emerald-50">
            Compare this to 15-25% agency markups or 5-15% marketplace fees.
          </p>
        </div>
      </section>

      {/* Tech Domains */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access specialized talent across the most in-demand tech roles
            </p>
          </div>
          
          {/* Technical Roles */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Roles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {techDomains.technical.map((domain) => (
                <Card key={domain.id} className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
                  <CardContent className="p-5">
                    <h4 className="text-base font-bold text-slate-900 mb-2">{domain.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{domain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Management Roles */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Management Roles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {techDomains.management.map((domain) => (
                <Card key={domain.id} className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
                  <CardContent className="p-5">
                    <h4 className="text-base font-bold text-slate-900 mb-2">{domain.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{domain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership Roles */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Leadership Roles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {techDomains.leadership.map((domain) => (
                <Card key={domain.id} className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
                  <CardContent className="p-5">
                    <h4 className="text-base font-bold text-slate-900 mb-2">{domain.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{domain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Join hundreds of companies saving time and money with Mapeach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/hire">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Start Hiring Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold transition-all duration-300">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
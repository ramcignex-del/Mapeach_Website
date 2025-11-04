import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Zap, DollarSign, CheckCircle, ShieldCheck, Clock, TrendingDown,
  Users, Star, ArrowRight, TimerOff, TrendingUp, FileText, AlertCircle
} from 'lucide-react';
import { companyStats, clientLogos, testimonials, problems, solutions, techDomains } from '../mock';

// Import react-slick and styles
import Slider from "react-slick";
// Import slick-carousel styles from public folder (safe for CRA)


const Home = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
  };

  // Banner images
  const banners = [
  "/Banner_Companies_Slide_1.png",
  "/Banner_Companies_Slide_2.png",
  "/Banner_Companies_Slide_3.png",
  "/Banner_Companies_Slide_4.png",
  "/Banner_Companies_Slide_5.png",
  "/Banner_Companies_Slide_6.png",
  "/Banner_Companies_Slide_7.png",
];


  return (
    <div className="min-h-screen">

      {/* Hero Section with Slider */}
  
<section className="relative w-full overflow-hidden">
  <div className="mt-0">
    <Slider {...settings}>
      {banners.map((src, index) => (
        <div
          key={index}
          className="relative w-full h-[80vh] sm:h-[90vh] lg:h-[90vh] flex items-center justify-center bg-black"
        >
          <img
            src={src}
            alt={`banner-${index}`}
            className="w-full h-full object-contain sm:object-cover object-center"
            style={{ maxHeight: '90vh' }}
          />
        </div>
      ))}
    </Slider>
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
              Clients overpay, contractors under-earn, and processes waste time. Here’s why:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem) => {
              const IconComponent =
                problem.icon === 'timer-off' ? TimerOff :
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
              const IconComponent =
                solution.icon === 'zap' ? Zap :
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
                <p className="text-sm text-emerald-50">Transparent hourly service fee</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-emerald-50">
            Compare this to 15-25% Staffing Companies markups or 5-15% marketplace fees.
          </p>
        </div>
      </section>

      {/* Tech Domains */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Expertise</h2>
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Join hundreds of companies and contractors thriving with Mapeach — where clients save more and contractors earn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Start Hiring Smarter
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/join">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold transition-all duration-300">
                Start Earning More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

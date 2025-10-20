import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Target, Users, Zap, Award, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Transparency First",
      description: "No hidden fees, no surprise markups. Just honest, upfront pricing that puts you in control."
    },
    {
      icon: Zap,
      title: "Speed Matters",
      description: "In today's fast-paced world, waiting weeks for talent is unacceptable. We deliver in hours, not weeks."
    },
    {
      icon: Users,
      title: "Quality Over Quantity",
      description: "Every professional in our network is rigorously vetted. We prioritize excellence, not volume."
    },
    {
      icon: Award,
      title: "Fair Compensation",
      description: "Talent deserves to keep what they earn. We ensure professionals receive fair rates without excessive middleman fees."
    }
  ];

  const stats = [
    { value: "2019", label: "Founded" },
    { value: "5,000+", label: "Vetted Professionals" },
    { value: "500+", label: "Companies Served" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Disrupting Outdated
              <span className="block text-emerald-600 mt-2">Staffing Models</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              We're on a mission to eliminate the inefficiencies, high costs, and lack of transparency that plague traditional IT staffing—connecting companies directly with exceptional talent.
            </p>
          </div>
        </div>
      </section>

      {/* Stats 
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              For too long, traditional staffing agencies have charged exorbitant fees (15-25% markups) while delivering slow results and limited transparency. Meanwhile, talent is underpaid, and companies overpay.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mt-4">
              <strong>We believe there's a better way.</strong>
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mt-4">
              Mapeach leverages technology and automation to create a direct connection between companies and top IT professionals. Our services eliminates unnecessary overhead, reduces costs dramatically, and delivers talent at lightning speed—all while ensuring rigorous vetting and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <Card key={idx} className="border-2 border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              How We're Different
            </h2>
          </div>
          <div className="space-y-6">
            <Card className="border-l-4 border-emerald-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Technology-Driven</h3>
                <p className="text-slate-600">
                  We use advanced automation for vetting, compliance, contract management, and invoicing—eliminating the manual overhead that inflates costs.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-emerald-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Transparent Pricing</h3>
                <p className="text-slate-600">
                  Our simple pricing model ($10 onboarding + $1/hour) means no hidden fees and predictable costs. You know exactly what you're paying.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-emerald-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Engagement</h3>
                <p className="text-slate-600">
                  You work directly with the talent—no layers of account managers or middlemen. Complete control and visibility into your engagements.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-emerald-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Rigorous Vetting</h3>
                <p className="text-slate-600">
                  Despite our speed and low costs, we never compromise on quality. Every professional undergoes comprehensive technical and background verification.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Revolution
          </h2>
          <p className="text-xl text-emerald-50 mb-10">
            Whether you're a company seeking top talent or a professional looking for better opportunities, Mapeach is here to transform how you work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Start Hiring Smarter
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/join">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-6 text-lg font-semibold transition-all duration-300">
                Start Earning More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
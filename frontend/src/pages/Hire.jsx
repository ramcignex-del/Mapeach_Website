import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CostCalculator } from '../components/CostCalculator';
import { useLocation } from 'react-router-dom';
import { 
  Zap, ShieldCheck, CheckCircle, DollarSign, Clock, 
  ArrowRight, Users, FileCheck, TrendingDown
} from 'lucide-react';
import { hiringProcess, testimonials } from '../mock';

const Hire = () => {

  const benefits = [
    {
      icon: Zap,
      title: "Lightning-Fast Matching",
      description: "Get qualified candidate profiles within a short time. Average time-to-hire: less than a week."
    },
    {
      icon: DollarSign,
      title: "Massive Cost Savings",
      description: "Save up to 20% vs traditional staffing companies. Onetime $10 + Recurring $1/hour —no hidden markups."
    },
    {
      icon: ShieldCheck,
      title: "Rigorously Vetted Talent",
      description: "Every professional undergoes technical assessments, background checks, and reference verification."
    },
    {
      icon: CheckCircle,
      title: "Automated Compliance",
      description: "Seamless contract generation, timesheet tracking, and invoicing—no manual overhead."
    },
    {
      icon: Users,
      title: "Full Control & Transparency",
      description: "Direct engagement with contractors. Complete visibility into hours, progress, and costs."
    },
    {
      icon: FileCheck,
      title: "Quality Guarantee",
      description: "If a contractor doesn't meet expectations, we'll find a replacement at no additional cost."
    }
  ];

const topRef = useRef(null);

  const scrollToCalculator = () => {
        const calculatorSection = document.getElementById('calculator');
        if (calculatorSection) {
            calculatorSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Scrolls so the element starts at the top of the viewport
            });
        }
    };
  
// ...
const location = useLocation();
  
  useEffect(() => {
    // Scroll to top and focus the top container for accessibility on mount
    // Using setTimeout to guarantee it runs AFTER the render cycle completes
    const timer = setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
    }, 10); // 0ms delay runs it in the next micro-task cycle

       if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
            topRef.current.focus();
        }
        // Cleanup function (optional, but good practice)
    return () => clearTimeout(timer); 

  }, []); // The dependency array remains correct
// ...

  return (
    <div ref={topRef} tabIndex={-1} className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Skip the vetting wait and
              <span className="block text-emerald-600 mt-2">control your staffing spend</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Stop wasting weeks and overpaying for staffing. Mapeach connects you with pre-vetted, specialized IT talent in <strong>short time</strong>—with transparent pricing that puts you in control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Hiring Smarter
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold transition-all duration-300" onClick={scrollToCalculator}>
                  Calculate Your Savings
                </Button>
              </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Companies Choose Mapeach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The modern alternative to slow, expensive traditional staffing
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

      {/* Cost Calculator Section */}
      <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              See Your Potential Savings
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Calculate how much you'll save by switching from traditional staffing companies to Mapeach
            </p>
          </div>
          <div style={{minHeight: '800px'}}>
          <CostCalculator />
          </div>  
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From requirement to hire in 4 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringProcess.map((step, idx) => (
              <div key={step.step} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
                {idx < hiringProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 -ml-4" style={{ width: 'calc(100% - 4rem)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Mapeach vs Traditional Staffing
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Traditional Staffing Companies</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-emerald-700 bg-emerald-50">Mapeach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">Time to Hire</td>
                    <td className="px-6 py-4 text-sm text-center text-red-600">4 weeks</td>
                    <td className="px-6 py-4 text-sm text-center text-emerald-600 bg-emerald-50 font-semibold">less than a week</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">Cost Structure</td>
                    <td className="px-6 py-4 text-sm text-center text-red-600">15-25% markup</td>
                    <td className="px-6 py-4 text-sm text-center text-emerald-600 bg-emerald-50 font-semibold"> Onetime $10 + Recurring $1/hr</td>
                  </tr>
                 {/*} <tr>
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">Compliance & Admin</td>
                    <td className="px-6 py-4 text-sm text-center text-red-600">Manual process</td>
                    <td className="px-6 py-4 text-sm text-center text-emerald-600 bg-emerald-50 font-semibold">Fully automated</td>
                  </tr>*/}
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">Control & Visibility</td>
                    <td className="px-6 py-4 text-sm text-center text-red-600">Limited</td>
                    <td className="px-6 py-4 text-sm text-center text-emerald-600 bg-emerald-50 font-semibold">Complete</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">Hidden Fees</td>
                    <td className="px-6 py-4 text-sm text-center text-red-600">Common</td>
                    <td className="px-6 py-4 text-sm text-center text-emerald-600 bg-emerald-50 font-semibold">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Cut Staffing Cost?
          </h2>
          <p className="text-xl text-emerald-50 mb-10">
            Let's connect and build the high-performing team that will drive your business forward.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hire;

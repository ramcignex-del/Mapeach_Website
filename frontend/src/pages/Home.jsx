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
    <div className="min-h-screen font-sans text-[15px] text-[var(--color-text)]">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--color-primary-light)] via-white to-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-primary-dark)] leading-tight mb-6">
            Transparent staffing model with zero markups
            <span className="block text-[var(--color-primary)] mt-3 font-semibold">
              Clients pay less and Contractors earn more — no compromises.
            </span>
          </h1>

          <p className="text-xl text-[var(--color-text)] mb-10 leading-relaxed">
            Mapeach delivers highly vetted professionals in <strong>short time</strong>, not weeks — with transparent pricing that saves you up to <strong>20%</strong> compared to traditional Staffing Companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/hire">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] hover:opacity-90 text-white px-8 py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                Start Hiring Smarter
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/join">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[var(--color-primary)] text-[var(--color-primary-dark)] hover:bg-[var(--color-primary-light)] px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                Start Earning More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-primary-dark)] mb-4">The Sticking Points of Traditional Staffing</h2>
          <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
            Clients overpay, contractors under-earn, and processes waste time. Here’s why:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => {
            const IconComponent = problem.icon === 'timer-off' ? TimerOff :
              problem.icon === 'trending-up' ? TrendingUp :
              problem.icon === 'file-text' ? FileText : AlertCircle;
            return (
              <Card key={problem.id} className="border border-red-100 bg-red-50 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-primary-dark)] mb-2">{problem.title}</h3>
                  <p className="text-[var(--color-text)] text-sm">{problem.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-light)]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--color-primary-dark)] mb-4">The Mapeach Difference</h2>
          <p className="text-xl text-[var(--color-text)] max-w-3xl mx-auto">
            Speed. Cost transparency. Automation. Full control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => {
            const IconComponent = solution.icon === 'zap' ? Zap :
              solution.icon === 'dollar-sign' ? DollarSign :
              solution.icon === 'check-circle' ? CheckCircle : ShieldCheck;
            return (
              <Card key={solution.id} className="border border-[var(--color-primary-light)] bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="inline-block px-3 py-1 bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] rounded-full text-xs font-semibold mb-3">
                    {solution.benefit}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-primary-dark)] mb-2">{solution.title}</h3>
                  <p className="text-[var(--color-text)] text-sm">{solution.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Transparent Pricing You Can Trust</h2>
          <p className="text-lg opacity-90 mb-12">No hidden fees. No surprise markups. Just simple, honest pricing.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold mb-2">$10</div>
                <div className="text-lg opacity-90 mb-4">One-time per contractor</div>
                <p className="text-sm opacity-80">Simple onboarding fee—that's it</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold mb-2">$1/hr</div>
                <div className="text-lg opacity-90 mb-4">Recurring, billed bi-weekly</div>
                <p className="text-sm opacity-80">Transparent hourly service fee</p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 opacity-80">
            Compare this to 15-25% Staffing Companies markups or 5-15% marketplace fees.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--color-primary-dark)] to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Join hundreds of companies and contractors thriving with Mapeach — where clients save more and contractors earn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enquiry">
              <Button size="lg" className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] hover:opacity-90 text-white px-8 py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                Start Hiring Smarter
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/join">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary-dark)] px-8 py-6 text-lg font-semibold transition-all duration-300">
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

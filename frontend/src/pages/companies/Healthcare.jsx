import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
// Assuming CostCalculator is one level up in the components directory
import { CostCalculator } from '../../components/CostCalculator'; 
import { ArrowRight } from 'lucide-react';
// IMPORT ALL DATA, INCLUDING THE NEW pageText OBJECT
import { pageText, benefits, hiringProcess, comparisonData } from './data/Healthcare.js';

const Healthcare = () => {

  const topRef = useRef(null);

  // Function to smoothly scroll to the Cost Calculator section
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Scrolls so the element starts at the top of the viewport
      });
    }
  };
  
  // Scrolls to top on mount and set focus for accessibility
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    }, 10);
    
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
      topRef.current.focus();
    }
    return () => clearTimeout(timer); 
  }, []);

  // Split the Hero title to color the second line consistently
  const [titleLine1, titleLine2] = pageText.hero.title.split('Healthcare roles with confidence');

  return (
    <div ref={topRef} tabIndex={-1} className="min-h-screen outline-none">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {/* Display first part of title */}
              {titleLine1}
              {/* Display the rest, enforcing the color and line break */}
              <span className="block text-emerald-600 mt-2">Healthcare roles with confidence</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {pageText.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={pageText.hero.cta1.link}>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  {pageText.hero.cta1.label}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold transition-all duration-300" onClick={scrollToCalculator}>
                  {pageText.hero.cta2.label}
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
              {pageText.benefits.header}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {pageText.benefits.subheader}
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
              {pageText.calculator.header}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {pageText.calculator.subheader}
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
              {pageText.process.header}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {pageText.process.subheader}
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
                {/* Connector line for desktop view */}
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
              {pageText.comparison.header}
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">Traditional Agencies</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-emerald-700 bg-emerald-50">Mapeach</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparisonData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-slate-900 font-medium">{item.feature}</td>
                      <td className="px-6 py-4 text-sm text-center text-red-600">{item.traditional}</td>
                      <td className={`px-6 py-4 text-sm text-center ${item.mapeachClass}`}>{item.mapeach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {pageText.ctaSection.title}
          </h2>
          <p className="text-xl text-emerald-50 mb-10">
            {pageText.ctaSection.subtitle}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              {pageText.ctaSection.button}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;

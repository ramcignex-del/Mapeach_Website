import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CostCalculator } from '@/components/CostCalculator';
import { pageText, benefits, pricingOptions, comparisonData } from '@/data/Pricing.js';

const Pricing = () => {
  const [highlightedRow, setHighlightedRow] = useState(null);
  const [flashTrigger, setFlashTrigger] = useState(false);
  const comparisonRefs = useRef({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToComparison = (plan) => {
    const rowIndex = comparisonData.findIndex(item => item.plans.includes(plan));
    if (rowIndex !== -1 && comparisonRefs.current[rowIndex]) {
      comparisonRefs.current[rowIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });

      setHighlightedRow(rowIndex);
      setFlashTrigger(true);

      setTimeout(() => {
        setFlashTrigger(false);
        setHighlightedRow(null);
      }, 1000); // matches CSS animation duration
    }
  };

  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              {pageText.hero.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8">{pageText.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to={pageText.hero.cta1.link}>
                <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  {pageText.hero.cta1.label}
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold"
                onClick={() => scrollToComparison("Startup")}
              >
                {pageText.hero.cta2.label}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pricing Options Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Our Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((plan, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-emerald-600 mb-2">{plan.name}</h3>
                  <p className="text-xl text-slate-900 font-semibold mb-4">{plan.price}</p>
                  <p className="text-slate-600 mb-6">{plan.description}</p>
                  <ul className="text-slate-700 mb-6 space-y-2 text-left">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center">
                        <span className="mr-2 text-emerald-600">•</span>{feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 font-semibold"
                    onClick={() => scrollToComparison(plan.name)}
                  >
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Cost Calculator Section */}
      <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">{pageText.calculator.header}</h2>
          <p className="text-xl text-slate-600 mb-12">{pageText.calculator.subheader}</p>
          <CostCalculator />
        </div>
      </section>

      {/* 4. Market Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">{pageText.comparison.header}</h2>
          <div className="overflow-x-auto shadow-xl rounded-xl border border-slate-200">
            <table className="w-full text-sm divide-y divide-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-700">Traditional Agencies</th>
                  <th className="px-6 py-4 text-center font-semibold text-emerald-700 bg-emerald-50">Our Staffing Service</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, idx) => (
                  <tr
                    key={idx}
                    ref={el => comparisonRefs.current[idx] = el}
                    className={`${highlightedRow === idx && flashTrigger ? 'flash-highlight' : ''}`}
                  >
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">{item.feature}</td>
                    <td className="px-6 py-4 text-sm text-center text-red-600">{item.traditional}</td>
                    <td className={`px-6 py-4 text-sm text-center ${item.ourServiceClass}`}>
                      <div className="flex flex-col items-center space-y-1">
                        <span>{item.ourService}</span>
                        <div className="flex space-x-2 mt-1">
                          {item.plans.map((plan, pidx) => (
                            <span
                              key={pidx}
                              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                plan === "Startup"
                                  ? "bg-emerald-200 text-emerald-800"
                                  : "bg-teal-200 text-teal-800"
                              }`}
                            >
                              {plan}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">{pageText.benefits.header}</h2>
          <p className="text-xl text-center text-slate-600 mb-12">{pageText.benefits.subheader}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{pageText.ctaSection.title}</h2>
          <p className="text-xl text-emerald-50 mb-10">{pageText.ctaSection.subtitle}</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              {pageText.ctaSection.button}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

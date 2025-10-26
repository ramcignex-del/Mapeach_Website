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
      }, 1000); // animation duration
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
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

      {/* Benefits Section */}
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

      {/* Pricing Options Section */}
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
                    onClick={(

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CostCalculator } from '@/components/CostCalculator';
import {
  ArrowRight,
  Globe,
  Workflow,
  Binary,
  Cloud,
  Shield,
  Server,
  Network,
} from 'lucide-react';
import {
  pageText,
  benefits,
  hiringProcess,
  comparisonData,
  itRoles,
} from '../../data/InformationTechnology.js';

const InformationTechnology = () => {
  const topRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
    if (topRef.current) topRef.current.focus();
  }, []);

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div ref={topRef} tabIndex={-1} className="min-h-screen outline-none">
      {/* ========================================================== */}
      {/* HERO SECTION — “Digital Transformation & IT Excellence” */}
      {/* ========================================================== */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 via-emerald-50/40 to-blue-50/40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.15),_transparent_60%)]" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* LEFT VISUAL — Digital Transformation Graphic */}
          <div className="hidden md:flex justify-center lg:justify-start">
            <div className="w-full max-w-lg h-96 bg-gradient-to-br from-emerald-100 via-sky-100 to-teal-100 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-10 relative overflow-hidden">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-emerald-200 rounded-full opacity-40 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sky-300 rounded-full opacity-30 blur-3xl" />
              <div className="flex flex-col items-center space-y-6 relative z-10">
                <Globe className="w-16 h-16 text-emerald-600" />
                <Workflow className="w-12 h-12 text-sky-600" />
                <Binary className="w-12 h-12 text-emerald-500" />
                <span className="text-2xl font-bold text-emerald-700 text-center leading-snug">
                  Digital Transformation & IT Excellence
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-start-2 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              {pageText.hero.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8">{pageText.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link to={pageText.hero.cta1.link}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {pageText.hero.cta1.label}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold"
                onClick={scrollToCalculator}
              >
                {pageText.hero.cta2.label}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* BENEFITS SECTION */}
      {/* ========================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
            {pageText.benefits.header}
          </h2>
          <p className="text-xl text-center text-slate-600 mb-12">
            {pageText.benefits.subheader}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={idx}
                  className="shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
                >
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* EXPERTISE SECTION — “Digital & IT Excellence” */}
      {/* ========================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">
            Digital & IT Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {itRoles.map((category, idx) => (
              <Card
                key={idx}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4 border-b pb-2">
                    {category.category}
                  </h3>
                  <ul className="space-y-4 text-left">
                    {category.items.map((item, subIdx) => (
                      <li key={subIdx}>
                        <p className="font-medium text-slate-800">{item.role}</p>
                        <p className="text-sm text-slate-500">
                          Skills: {item.skills.join(', ')}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* COST CALCULATOR */}
      {/* ========================================================== */}
      <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            {pageText.calculator.header}
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            {pageText.calculator.subheader}
          </p>
          <CostCalculator />
        </div>
      </section>

      {/* ========================================================== */}
      {/* HIRING PROCESS */}
      {/* ========================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
            {pageText.process.header}
          </h2>
          <p className="text-xl text-center text-slate-600 mb-12">
            {pageText.process.subheader}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringProcess.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg border border-emerald-200"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-emerald-600 text-white rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* COMPARISON TABLE */}
      {/* ========================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            {pageText.comparison.header}
          </h2>
          <div className="overflow-x-auto shadow-xl rounded-xl border border-slate-200 max-w-5xl mx-auto">
            <table className="w-full text-sm divide-y divide-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-slate-700">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-slate-700">
                    Traditional Agencies
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-emerald-700 bg-emerald-50">
                    Mapeach
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-center text-red-600">
                      {row.traditional}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm text-center ${row.mapeachClass}`}
                    >
                      {row.mapeach}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* CTA SECTION */}
      {/* ========================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {pageText.ctaSection.title}
          </h2>
          <p className="text-xl text-emerald-50 mb-10">
            {pageText.ctaSection.subtitle}
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {pageText.ctaSection.button}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InformationTechnology;

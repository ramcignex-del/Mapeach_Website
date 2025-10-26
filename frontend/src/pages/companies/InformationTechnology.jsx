import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CostCalculator } from '@/components/CostCalculator';
import { ArrowRight } from 'lucide-react';

// ✅ Unified Data Imports
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

  // Hero Title Split (for same dynamic style as HealthTech)
  const titleParts = pageText.hero.title.split('talent with lightning speed');
  const titleLine1 = titleParts[0].trim();
  const coloredPhrase = 'talent with lightning speed';

  return (
    <div ref={topRef} tabIndex={-1} className="min-h-screen outline-none">
      {/* -------------------------------------------------------------- */}
      {/* HERO SECTION — Same layout as Clinical & Digital Excellence */}
      {/* -------------------------------------------------------------- */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/40 to-teal-50/40 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/10 pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            {titleLine1}
            <span className="block text-emerald-600 mt-2">{coloredPhrase}</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            {pageText.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={pageText.hero.cta1.link}>
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {pageText.hero.cta1.label}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold transition-all duration-300"
              onClick={scrollToCalculator}
            >
              {pageText.hero.cta2.label}
            </Button>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* BENEFITS GRID — Clinical & Digital Excellence style */}
      {/* -------------------------------------------------------------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {pageText.benefits.header}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {pageText.benefits.subheader}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={idx}
                  className="border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 rounded-2xl"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-md">
                      <IconComponent className="text-white" size={26} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* IT EXPERTISE SECTION — Aligned with "Clinical Excellence" style */}
      {/* -------------------------------------------------------------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            Digital & IT Excellence
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
            Our talent network covers every discipline across the IT spectrum,
            empowering organizations with digital innovation, cybersecurity,
            cloud-native solutions, and scalable enterprise systems.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {itRoles.map((category, idx) => (
              <Card
                key={idx}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8 text-left">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-4 border-b border-slate-200 pb-2">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, subIdx) => (
                      <li key={subIdx}>
                        <p className="font-medium text-slate-800">
                          {item.role}
                        </p>
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

      {/* -------------------------------------------------------------- */}
      {/* COST CALCULATOR — Consistent block from HealthTech */}
      {/* -------------------------------------------------------------- */}
      <section
        id="calculator"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {pageText.calculator.header}
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            {pageText.calculator.subheader}
          </p>
          <div style={{ minHeight: '800px' }}>
            <CostCalculator />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* HIRING PROCESS — Shared process visuals */}
      {/* -------------------------------------------------------------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
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
            {hiringProcess.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* COMPARISON TABLE */}
      {/* -------------------------------------------------------------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            {pageText.comparison.header}
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
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
                {comparisonData.map((item, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-red-600">
                      {item.traditional}
                    </td>
                    <td
                      className={`px-6 py-4 text-center ${item.mapeachClass}`}
                    >
                      {item.mapeach}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- */}
      {/* FINAL CTA — Same as “Clinical & Digital Excellence” footer CTA */}
      {/* -------------------------------------------------------------- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
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

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { CostCalculator } from '../../components/CostCalculator';
import { ArrowRight, Cpu, Radio, FlaskConical, Scale } from 'lucide-react';

// Corrected import path
import { pageText, benefits, hiringProcess, comparisonData, ecRoles } from '../../data/ElectronicsCommunications.js';

// Reusable Roles Section
const RolesSection = ({ rolesData }) => (
  <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Talent Focus: Electronics & Communications Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {rolesData.map((category, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4 border-b pb-2">{category.category}</h3>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <p className="font-medium text-slate-800 flex items-center mb-1">
                      <Cpu className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" />
                      {item.role}
                    </p>
                    <p className="text-sm text-slate-500 ml-7">Skills: {item.skills.join(', ')}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ElectronicsCommunications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">

      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">{pag

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { DollarSign, TrendingDown } from 'lucide-react';

export const CostCalculator = () => {
  const [contractors, setContractors] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(100);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);

  const weeksPerYear = 50; // accounting for holidays
  const totalHoursPerYear = contractors * hoursPerWeek * weeksPerYear;
  const totalCost = contractors * hourlyRate * hoursPerWeek * weeksPerYear;

  // Traditional agency: 20% markup
  const agencyCost = totalCost * 0.20;

  // Mapeach: $10 per contractor onboarding + $1/hour
  const mapeachOnboarding = contractors * 10;
  const mapeachHourly = totalHoursPerYear * 1;
  const mapeachTotal = mapeachOnboarding + mapeachHourly;

  const savings = agencyCost - mapeachTotal;
  const savingsPercent = ((savings / agencyCost) * 100).toFixed(1);

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
        <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <DollarSign className="text-emerald-600" />
          Cost Savings Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="contractors" className="text-slate-700 font-medium">
                Number of Contractors
              </Label>
              <Input
                id="contractors"
                type="number"
                min="1"
                value={contractors}
                onChange={(e) => setContractors(Math.max(1, parseInt(e.target.value) || 1))}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="hourlyRate" className="text-slate-700 font-medium">
                Average Hourly Rate ($)
              </Label>
              <Input
                id="hourlyRate"
                type="number"
                min="1"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Math.max(1, parseInt(e.target.value) || 1))}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="hoursPerWeek" className="text-slate-700 font-medium">
                Hours per Week
              </Label>
              <Input
                id="hoursPerWeek"
                type="number"
                min="1"
                max="40"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Math.max(1, Math.min(40, parseInt(e.target.value) || 1)))}
                className="mt-2"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-red-900 mb-2">Traditional Agency (20% markup)</h3>
              <p className="text-3xl font-bold text-red-700">
                ${agencyCost.toLocaleString()}
              </p>
              <p className="text-sm text-red-600 mt-1">Annual staffing fees</p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-emerald-900 mb-2">Mapeach Platform</h3>
              <p className="text-3xl font-bold text-emerald-700">
                ${mapeachTotal.toLocaleString()}
              </p>
              <p className="text-xs text-emerald-600 mt-1">
                ${mapeachOnboarding} onboarding + ${mapeachHourly.toLocaleString()} hourly fees
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold">Your Annual Savings</h3>
                <TrendingDown className="text-white" size={20} />
              </div>
              <p className="text-3xl font-bold">
                ${savings.toLocaleString()}
              </p>
              <p className="text-sm mt-1 text-emerald-100">
                Save {savingsPercent}% vs traditional agencies
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600">
            <strong>Note:</strong> Traditional agencies typically charge 15-25% markups. Marketplaces charge 5-15% platform fees. 
            Mapeach's transparent pricing: <strong>$10 one-time per contractor + $1/hour recurring</strong>.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { DollarSign, TrendingDown } from 'lucide-react';

export const CostCalculator = () => {
  const [contractors, setContractors] = useState(1);
  const [hourlyRate, setHourlyRate] = useState(60);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);

  const weeksPerYear = 50; // accounting for holidays
  const weeksPerMonth = 4.33 ;// average weeks per month
  
  // Monthly calculations
  const totalHoursPerMonth = contractors * hoursPerWeek * weeksPerMonth;
  const totalCostPerMonth = contractors * hourlyRate * hoursPerWeek * weeksPerMonth;
  
  // Yearly calculations
  const totalHoursPerYear = contractors * hoursPerWeek * weeksPerYear;
  const totalCostPerYear = contractors * hourlyRate * hoursPerWeek * weeksPerYear;

  // Traditional agency: 20% markup
  const agencyCostPerMonth = totalCostPerMonth * 0.20;
  const agencyCostPerYear = totalCostPerYear * 0.20;

  // Mapeach: $10 per contractor onboarding (one-time) + $1/hour
  const mapeachOnboarding = contractors * 10;
  const mapeachHourlyPerMonth = totalHoursPerMonth * 1;
  const mapeachHourlyPerYear = totalHoursPerYear * 1;
  const mapeachTotalPerMonth = mapeachHourlyPerMonth;
  const mapeachTotalPerYear = mapeachOnboarding + mapeachHourlyPerYear;

  // Consultant gross income
  const consultantGrossIncomePerMonth = totalCostPerMonth - agencyCostPerMonth;
  const consultantGrossIncomePerYear = totalCostPerYear - agencyCostPerYear;

  // Savings
  const savingsPerMonth = agencyCostPerMonth - mapeachTotalPerMonth;
  const savingsPerYear = agencyCostPerYear - mapeachTotalPerYear;
  const savingsPercent = agencyCostPerYear > 0 ? ((savingsPerYear / agencyCostPerYear) * 100).toFixed(1) : 0;

  return (
    <Card className="w-full max-w-6xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
        <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <DollarSign className="text-emerald-600" />
          Cost Savings Calculator <Label htmlFor="contractors" className="text-slate-700 font-medium">
                (50 weeks per year, 4.33 average weeks per month, Considered 2 Weeks Holiday)
              </Label>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <Label htmlFor="contractors" className="text-slate-700 font-medium">
                Number of Contractors
              </Label>
              <Input
                id="contractors"
                type="number"
                min="0"
                value={contractors}
                onChange={(e) => setContractors(Math.max(0, parseInt(e.target.value) || 0))}
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
                min="0"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Math.max(0, parseInt(e.target.value) || 0))}
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
                min="0"
                max="168"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Math.max(0, Math.min(168, parseInt(e.target.value) || 0)))}
                className="mt-2"
              />
            </div>
          </div>

          {/* Monthly Breakdown */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Monthly Costs</h3>
            
            <div className="bg-slate-50 rounded-lg p-4 space-y-2">
              <p className="text-sm text-slate-600">Total Cost/Month</p>
              <p className="text-2xl font-bold text-slate-900">${totalCostPerMonth.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-red-900 mb-2">Staffing Company Fees/Month</h4>
              <p className="text-2xl font-bold text-red-700">
                ${agencyCostPerMonth.toLocaleString(undefined, {maximumFractionDigits: 0})}
              </p>
              <p className="text-xs text-red-600 mt-1">20% markup</p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-emerald-900 mb-2">Mapeach Fees/Month</h4>
              <p className="text-2xl font-bold text-emerald-700">
                ${mapeachTotalPerMonth.toLocaleString(undefined, {maximumFractionDigits: 0})}
              </p>
              <p className="text-xs text-emerald-600 mt-1">$1/hour platform fee</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 space-y-2">
              <p className="text-sm text-slate-600">Consultant Gross Income/Month</p>
              <p className="text-xl font-bold text-slate-900">${consultantGrossIncomePerMonth.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
            </div>
          </div>

          {/* Yearly Breakdown */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Annual Costs</h3>
            
            <div className="bg-slate-50 rounded-lg p-4 space-y-2">
              <p className="text-sm text-slate-600">Total Cost/Year</p>
              <p className="text-2xl font-bold text-slate-900">${totalCostPerYear.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-red-900 mb-2">Staffing Company Fees/Year</h4>
              <p className="text-2xl font-bold text-red-700">
                ${agencyCostPerYear.toLocaleString(undefined, {maximumFractionDigits: 0})}
              </p>
              <p className="text-xs text-red-600 mt-1">20% markup annually</p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-emerald-900 mb-2">Mapeach Fees/Year</h4>
              <p className="text-2xl font-bold text-emerald-700">
                ${mapeachTotalPerYear.toLocaleString(undefined, {maximumFractionDigits: 0})}
              </p>
              <p className="text-xs text-emerald-600 mt-1">
                ${mapeachOnboarding} onboarding + ${mapeachHourlyPerYear.toLocaleString(undefined, {maximumFractionDigits: 0})} hourly
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 space-y-2">
              <p className="text-sm text-slate-600">Consultant Gross Income/Year</p>
              <p className="text-xl font-bold text-slate-900">${consultantGrossIncomePerYear.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
            </div>
          </div>
        </div>

        {/* Savings Summary */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Monthly Savings</h3>
              <TrendingDown className="text-white" size={24} />
            </div>
            <p className="text-4xl font-bold">
              ${savingsPerMonth.toLocaleString(undefined, {maximumFractionDigits: 0})}
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-700 to-teal-700 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">Annual Savings</h3>
              <TrendingDown className="text-white" size={24} />
            </div>
            <p className="text-4xl font-bold">
              ${savingsPerYear.toLocaleString(undefined, {maximumFractionDigits: 0})}
            </p>
            <p className="text-sm mt-2 text-emerald-100">
              Save {savingsPercent}% vs traditional Staffing Companies
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600">
            <strong>Note:</strong> Traditional Staffing Companies typically charge 15-25% markups. Marketplaces charge 5-15% platform fees. 
            Mapeach's transparent pricing: <strong>$10 one-time per contractor + $1/hour recurring</strong>.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

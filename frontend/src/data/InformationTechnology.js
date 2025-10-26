// frontend/src/data/InformationTechnology.js

import {
  Zap, ShieldCheck, CheckCircle, DollarSign, Users, FileCheck, Clock, TrendingDown
} from 'lucide-react';

// --- Page Text / Content Data ---
export const pageText = {
  hero: {
    title: "Hire pre-vetted IT talent with lightning speed",
    subtitle: "Stop wasting weeks and overpaying for staffing. Mapeach connects you with pre-vetted, specialized IT talent in short time—with transparent pricing that puts you in control.",
    cta1: { label: "Start Hiring Smarter", link: "/contact" },
    cta2: { label: "Calculate Your Savings" },
  },
  benefits: {
    header: "Why Companies Choose Mapeach for IT Staffing",
    subheader: "The modern alternative to slow, expensive traditional staffing.",
  },
  calculator: {
    header: "See Your Potential Savings",
    subheader: "Calculate how much you'll save by switching from traditional staffing companies to Mapeach for your IT needs.",
  },
  process: {
    header: "How It Works: Mapeach IT Staffing",
    subheader: "From requirement to hire in 4 simple steps.",
  },
  comparison: {
    header: "Mapeach vs Traditional IT Staffing",
  },
  ctaSection: {
    title: "Ready to Cut Staffing Cost?",
    subtitle: "Let's connect and build the high-performing IT team that will drive your business forward.",
    button: "Get Started Today",
  }
};

// --- Benefits Data ---
export const benefits = [
  {
    icon: Zap,
    title: "Lightning-Fast Matching",
    description: "Get qualified IT professional profiles within a short time. Average time-to-hire: less than a week."
  },
  {
    icon: DollarSign,
    title: "Massive Cost Savings",
    description: "Save up to 20% vs traditional staffing companies. Onetime $10 + Recurring $1/hour —no hidden markups."
  },
  {
    icon: ShieldCheck,
    title: "Rigorously Vetted Talent",
    description: "Every IT professional undergoes technical assessments, background checks, and reference verification."
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
    description: "If an IT contractor doesn't meet expectations, we'll find a replacement at no additional cost."
  }
];

// --- Hiring Process Data (copied from Hire.jsx mock, but should be imported if not defined) ---
export const hiringProcess = [
    {
        step: 1,
        title: "Submit Your Request",
        description: "Share the role and skills you need. Takes less than 5 minutes."
    },
    {
        step: 2,
        title: "Instant Matching",
        description: "Our AI immediately cross-references your need with our pre-vetted IT talent pool."
    },
    {
        step: 3,
        title: "Review & Interview",
        description: "Review top candidate profiles and schedule interviews directly."
    },
    {
        step: 4,
        title: "Contract & Start",
        description: "Seamlessly sign the automated contract and start your project in days."
    }
];

// --- Comparison Data ---
export const comparisonData = [
  {
    feature: "Time to Hire",
    traditional: "4 weeks",
    mapeach: "less than a week",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Cost Structure",
    traditional: "15-25% markup",
    mapeach: "Onetime $10 + Recurring $1/hr",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Control & Visibility",
    traditional: "Limited",
    mapeach: "Complete",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Hidden Fees",
    traditional: "Common",
    mapeach: "None",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  }
];

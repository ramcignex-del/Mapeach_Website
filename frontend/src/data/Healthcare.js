import { HeartPulse, DollarSign, ShieldCheck, CheckCircle, Users, FileCheck, ArrowRight, Stethoscope } from 'lucide-react';

// --- Page Text Content ---
export const pageText = {
  hero: {
    title: "Rapidly staff your critical Healthcare roles with confidence",
    subtitle: "Find licensed nurses, therapists, and administrative professionals with verified credentials in short time. Mapeach offers transparent, compliant staffing for clinics, hospitals, and facilities.",
    cta1: {
      label: "Start Staffing Smarter",
      link: "/contact"
    },
    cta2: {
      label: "Calculate Your Savings",
    }
  },
  benefits: {
    header: "Why Healthcare Providers Choose Mapeach",
    subheader: "Compliance-focused staffing for clinical excellence"
  },
  calculator: {
    header: "See Your Potential Staffing Savings",
    subheader: "Calculate how much you'll save by switching from high-markup staffing agencies to Mapeach"
  },
  process: {
    header: "Our Healthcare Staffing Process",
    subheader: "Verified clinical and administrative professionals in 4 simple steps"
  },
  comparison: {
    header: "Mapeach vs Traditional Healthcare Agencies",
  },
  ctaSection: {
    title: "Ready to Find Your Next Healthcare Professional?",
    subtitle: "Let's connect and ensure your facility is staffed for high-quality patient care.",
    button: "Get Started Today"
  }
};

// --- Benefits Data ---
// Icons from lucide-react are imported here and passed to the component
export const benefits = [
  {
    icon: HeartPulse,
    title: "Clinical & Non-Clinical Staffing",
    description: "Access to verified nurses, allied health professionals, and administrative staff ready for immediate deployment."
  },
  {
    icon: DollarSign,
    title: "Reduce Agency Fees",
    description: "Massive cost savings compared to traditional healthcare staffing agencies that charge high markups."
  },
  {
    icon: ShieldCheck,
    title: "License & Credential Verification",
    description: "Every professional is rigorously vetted for active licenses, certifications, and background compliance."
  },
  {
    icon: CheckCircle,
    title: "Rapid Deployment for Critical Roles",
    description: "Fast matching for hard-to-fill roles like specialized nursing, ensuring patient care standards are met quickly."
  },
  {
    icon: Users,
    title: "Flexible Staffing Models",
    description: "Cover short-term absences, long-term contracts, or permanent placements with ease and transparency."
  },
  {
    icon: FileCheck,
    title: "HIPAA and Regulatory Compliance",
    description: "Automated contract generation and admin processes designed to comply with strict healthcare regulations."
  }
];

// --- Hiring Process Data ---
export const hiringProcess = [
  {
    step: 1,
    title: "Define Clinical Needs",
    description: "Submit your specific requirement, including license requirements, duration, and patient load."
  },
  {
    step: 2,
    title: "Match & Interview",
    description: "Review a curated list of vetted healthcare professionals with verified credentials in short time."
  },
  {
    step: 3,
    title: "Compliance & Onboarding",
    description: "Mapeach handles all compliance checks (HIPAA, license, background) for rapid onboarding."
  },
  {
    step: 4,
    title: "Start Deployment",
    description: "The professional begins work immediately, integrated with automated timesheet tracking and invoicing."
  }
];

// --- Comparison Data ---
export const comparisonData = [
  {
    feature: "Time to Fill Critical Roles",
    traditional: "4+ weeks",
    mapeach: "less than a week",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Staffing Agency Markup",
    traditional: "25-40% markup",
    mapeach: "Onetime $10 + Recurring $1/hr",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "License Verification Speed",
    traditional: "Manual, slow",
    mapeach: "Automated & instant",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Regulatory Compliance (HIPAA)",
    traditional: "Client's responsibility",
    mapeach: "Fully supported & tracked",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Control over Staff Selection",
    traditional: "Limited by agency",
    mapeach: "Complete",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  }
];

import { Zap, ShieldCheck, CheckCircle, DollarSign, Users, TrendingDown, Heart, Stethoscope, BriefcaseMedical, Lightbulb, Activity, Scale } from 'lucide-react';

// --- Page Text Content ---
export const pageText = {
  hero: {
    title: "Hire elite HealthTech talent with deep industry expertise",
    subtitle: "Accelerate your digital health projects, from EMR integration to telemedicine platform development, with rigorously vetted contract talent.",
    cta1: {
      label: "Start Staffing Smarter",
      link: "/contact"
    },
    cta2: {
      label: "Calculate Your Savings",
    }
  },
  benefits: {
    header: "Why HealthTech Companies Choose Mapeach",
    subheader: "Compliance-first, cost-effective staffing for the future of healthcare technology"
  },
  calculator: {
    header: "See Your Potential Staffing Savings",
    subheader: "Calculate how much you'll save by switching from high-markup traditional HealthTech staffing agencies to Mapeach"
  },
  process: {
    header: "Our HealthTech Staffing Process",
    subheader: "Sourcing world-class developers and engineers with regulatory knowledge in 4 simple steps"
  },
  comparison: {
    header: "Mapeach vs Traditional HealthTech Staffing Agencies",
  },
  ctaSection: {
    title: "Ready to Accelerate Health Innovation?",
    subtitle: "Let's connect and build the high-performing team that will drive your business forward while maintaining strict compliance.",
    button: "Get Started Today"
  }
};

// --- Benefits Data ---
export const benefits = [
  {
    icon: Stethoscope,
    title: "Domain-Specific Expertise",
    description: "Talent experienced in FHIR, HL7, HIPAA, and industry-specific tools (e.g., Epic, Cerner)."
  },
  {
    icon: Scale,
    title: "HIPAA & Regulatory Compliance",
    description: "Every professional is vetted for understanding and adherence to critical healthcare regulations."
  },
  {
    icon: DollarSign,
    title: "Massive Cost Savings",
    description: "Save up to 20% vs traditional staffing companies. Onetime $10 + Recurring $1/hour—no hidden markups."
  },
  {
    icon: Lightbulb,
    title: "Innovation Acceleration",
    description: "Rapidly onboard experts in AI/ML for diagnostics or blockchain for secure data management."
  },
  {
    icon: Activity,
    title: "Focus on Clinical Outcomes",
    description: "Staffing focused on technology that directly improves patient care and operational efficiency."
  },
  {
    icon: BriefcaseMedical,
    title: "Flexible Scalability",
    description: "Easily scale teams up or down to match project phases, from R&D to deployment."
  }
];

// --- Hiring Process Data ---
export const hiringProcess = [
  {
    step: 1,
    title: "Define Clinical & Tech Needs",
    description: "Specify the exact regulatory knowledge (e.g., FDA, HIPAA) and technical skills (e.g., Python, Cloud) required."
  },
  {
    step: 2,
    title: "Vetted, Compliant Candidate Pool",
    description: "Review profiles of pre-assessed professionals with proven HealthTech experience and compliance history."
  },
  {
    step: 3,
    title: "Direct Interview & Selection",
    description: "Conduct interviews directly with the candidates you choose, ensuring clinical and cultural fit."
  },
  {
    step: 4,
    title: "Secure Onboarding & Start",
    description: "The professional starts work quickly, integrated with automated timesheet tracking and contract management."
  }
];

// --- Comparison Data ---
export const comparisonData = [
  {
    feature: "Industry Compliance Vetting",
    traditional: "Basic or None",
    mapeach: "HIPAA-Focused",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Access to Niche Experts (e.g., FHIR)",
    traditional: "Limited/Expensive",
    mapeach: "Immediate Access",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Average Markup",
    traditional: "20-35%",
    mapeach: "Onetime $10 + Recurring $1/hr",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Focus Area",
    traditional: "General IT",
    mapeach: "Clinical & Digital Health",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Time to Fill Specialized Roles",
    traditional: "6+ weeks",
    mapeach: "less than 2 weeks",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Hidden Fees",
    traditional: "Common",
    mapeach: "None",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  }
];

// --- Specific Healthcare Roles Data ---
export const healthcareRoles = [
  {
    category: "Digital Health / HealthTech",
    items: [
      { role: "Software Engineer", skills: ["Telemedicine Platforms", "Mobile Apps", "EHR Integration", "Cloud Solutions"] },
      { role: "UI/UX Designer", skills: ["Wireframing", "Prototyping", "User Research", "Accessibility"] },
      { role: "Product Manager", skills: ["Healthcare Product Strategy", "Roadmap Planning", "Stakeholder Management"] }
    ]
  },
  {
    category: "Clinical & Medical Support",
    items: [
      { role: "Medical Coder / Biller", skills: ["ICD Coding", "Billing Systems", "Claim Processing"] },
      { role: "Health Informatics Specialist", skills: ["EHR/EMR Management", "Data Quality", "Reporting"] }
    ]
  },
  {
    category: "Data & AI",
    items: [
      { role: "Data Scientist", skills: ["Predictive Analytics", "AI Diagnostics", "R/Python", "Healthcare Data"] },
      { role: "Machine Learning Engineer", skills: ["Model Deployment", "Image Analysis", "NLP in Healthcare"] }
    ]
  }
];

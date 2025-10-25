import { FlaskConical, Microscope, Beaker, Zap, ShieldCheck, DollarSign, Users, TrendingDown, Lightbulb, Activity, Scale } from 'lucide-react';

// --- Page Text Content ---
export const pageText = {
  hero: {
    title: "Access specialized Lifesciences talent for clinical trials and R&D",
    subtitle: "Source elite contract professionals with deep expertise in pharmaceuticals, biotech, and regulatory science to accelerate your pipeline.",
    cta1: {
      label: "Start Your R&D Team",
      link: "/contact"
    },
    cta2: {
      label: "Calculate Your ROI",
    }
  },
  benefits: {
    header: "Why Lifesciences Firms Partner with Mapeach",
    subheader: "Compliance-driven, focused staffing solutions that accelerate discovery and time-to-market."
  },
  calculator: {
    header: "See Your Potential Staffing Savings",
    subheader: "Calculate how much you'll save by bypassing traditional agencies and accessing specialized talent directly through Mapeach."
  },
  process: {
    header: "Our Lifesciences Staffing Process",
    subheader: "Matching you with Clinical Research, Regulatory, and R&D experts in 4 structured steps."
  },
  comparison: {
    header: "Mapeach vs General Staffing Agencies",
  },
  ctaSection: {
    title: "Ready to Accelerate Discovery?",
    subtitle: "Connect with us to find the niche experts you need to navigate regulatory hurdles and push scientific boundaries.",
    button: "Find Your Expert"
  }
};

// --- Benefits Data ---
export const benefits = [
  {
    icon: FlaskConical,
    title: "Niche Domain Focus",
    description: "Talent specialized in specific areas like CRISPR, Gene Therapy, Biostatistics, and FDA submissions."
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance (GxP)",
    description: "Professionals vetted for adherence to GLP, GCP, and GMP standards critical for drug development."
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Staffing",
    description: "Save on typical agency markups with our low-fee model: Onetime $10 + Recurring $1/hour."
  },
  {
    icon: Lightbulb,
    title: "Innovation in R&D",
    description: "Quickly onboard bioinformaticians and data scientists to enhance predictive modeling and research efficiency."
  },
  {
    icon: Activity,
    title: "Trial Management Expertise",
    description: "Access CRAs, CTAs, and Project Managers with experience managing multi-site global trials."
  },
  {
    icon: Scale,
    title: "Rapid Scalability",
    description: "Flexibly staff for the duration of a clinical phase, ensuring optimal resource utilization."
  }
];

// --- Hiring Process Data ---
export const hiringProcess = [
  {
    step: 1,
    title: "Define Scientific & Trial Needs",
    description: "We capture precise requirements for scientific roles (Ph.D., M.S.) and clinical trial phases."
  },
  {
    step: 2,
    title: "Vetted Specialist Profiles",
    description: "Review profiles of pre-assessed candidates with verified research backgrounds and regulatory experience."
  },
  {
    step: 3,
    title: "Direct Scientific Interview",
    description: "Interview candidates directly to confirm specialized expertise and cultural alignment with your lab/team."
  },
  {
    step: 4,
    title: "Onboard & Initiate Research",
    description: "Seamless contracting allows the expert to integrate and begin contributing to your research pipeline quickly."
  }
];

// --- Comparison Data ---
export const comparisonData = [
  {
    feature: "Niche Scientific Vetting",
    traditional: "Low",
    mapeach: "High (Domain-Specific)",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Access to Regulatory Experts",
    traditional: "Limited/Time-Consuming",
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
    traditional: "General Temp Staff",
    mapeach: "R&D and Clinical Science",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Time to Fill Specialized Roles",
    traditional: "8+ weeks",
    mapeach: "less than 2 weeks",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Contract Flexibility",
    traditional: "Rigid Terms",
    mapeach: "Highly Flexible",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  }
];

// --- Specific Lifesciences Roles Data (UPDATED) ---
export const lifesciencesRoles = [
  {
    category: "R&D / Laboratory",
    items: [
      { role: "Research Scientist", skills: ["Molecular Biology", "Cell Biology", "Biochemistry", "Drug Discovery"] },
      { role: "Lab Technician", skills: ["Sample Preparation", "PCR", "Chromatography", "Lab Safety"] },
      { role: "Biostatistician", skills: ["Clinical Data Analysis", "R / Python", "Statistical Modeling"] }
    ]
  },
  {
    category: "Clinical Trials / Regulatory",
    items: [
      { role: "Clinical Research Associate", skills: ["GCP", "Study Protocol", "Data Collection", "Monitoring Visits"] },
      { role: "Regulatory Affairs Specialist", skills: ["FDA/EMA Guidelines", "Submission Documentation", "Compliance"] },
      { role: "Medical Writer", skills: ["Clinical Protocols", "Regulatory Reports", "Scientific Communication"] }
    ]
  },
  {
    category: "Quality & Manufacturing",
    items: [
      { role: "QA Analyst", skills: ["GMP Compliance", "Auditing", "Documentation", "Process Improvement"] },
      { role: "Process Development Scientist", skills: ["Analytical Methods", "Formulation", "Process Optimization"] }
    ]
  },
  {
    category: "Bioinformatics / Data Science",
    items: [
      { role: "Bioinformatician", skills: ["Genomics", "Proteomics", "Python / R", "Machine Learning"] },
      { role: "Computational Biologist", skills: ["Data Analysis", "Modeling", "AI for Drug Discovery"] }
    ]
  }
];

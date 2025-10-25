import { Dna, Microscope, FlaskConical, ClipboardCheck, FileText, Users, DollarSign, Scale, Settings } from 'lucide-react';

// --- Page Text Content ---
export const pageText = {
  hero: {
    title: "Vetted Specialists for Clinical, Biotech, and Pharmaceutical R&D",
    subtitle: "Source elite contract professionals in clinical operations, regulatory affairs, quality assurance, and cutting-edge drug discovery.",
    cta1: {
      label: "Find Biopharma Experts Now",
      link: "/contact"
    },
    cta2: {
      label: "View Research Case Studies",
    }
  },
  benefits: {
    header: "Why Biotech & Pharma Firms Choose Mapeach",
    subheader: "Access compliant, high-caliber talent critical for meeting regulatory milestones and accelerating research."
  },
  calculator: {
    header: "Optimize Your Talent Acquisition Budget",
    subheader: "Calculate how much you'll save by bypassing expensive niche agencies and directly engaging specialized Lifesciences talent through Mapeach."
  },
  process: {
    header: "Our Lifesciences Staffing Process",
    subheader: "Connecting you with R&D, Clinical, and Regulatory experts in 4 structured steps."
  },
  comparison: {
    header: "Mapeach vs General Staffing Agencies",
  },
  ctaSection: {
    title: "Ready to Accelerate Your Clinical Pipeline?",
    subtitle: "Connect with us to find the expert scientists and regulatory specialists required for your next breakthrough.",
    button: "Contact an Expert"
  }
};

// --- Benefits Data ---
export const benefits = [
  {
    icon: ClipboardCheck,
    title: "Guaranteed GxP Compliance",
    description: "Talent is vetted for deep knowledge of GMP, GLP, and GCP standards to ensure audit readiness and quality."
  },
  {
    icon: Microscope,
    title: "Specialized R&D Skills",
    description: "Experts in molecular biology, bioinformatics, assay development, and complex laboratory protocols."
  },
  {
    icon: DollarSign,
    title: "Budget-Friendly Solutions",
    description: "Save on typical agency markups with our low-fee model: Onetime $10 + Recurring $1/hour."
  },
  {
    icon: FileText,
    title: "Regulatory Expertise",
    description: "Access specialists proficient in FDA, EMA, and international submission processes (e.g., IND, NDA, BLA)."
  },
  {
    icon: Settings,
    title: "Phase-Specific Scaling",
    description: "Quickly scale teams for distinct project phases: Preclinical, Phase I/II/III trials, and post-market surveillance."
  },
  {
    icon: Scale,
    title: "Flexible Contract Terms",
    description: "On-demand talent for short-term clinical trials, peak compliance periods, or long-term specialized needs."
  }
];

// --- Hiring Process Data ---
export const hiringProcess = [
  {
    step: 1,
    title: "Define Scientific & Compliance Needs",
    description: "We capture precise requirements for therapeutic area, clinical phase, required GxP experience, and target regulatory bodies."
  },
  {
    step: 2,
    title: "Vetted Specialist Profiles",
    description: "Review profiles of pre-assessed candidates with verified experience in relevant lab techniques, software (e.g., SAS, LIMS), and documentation."
  },
  {
    step: 3,
    title: "Direct Technical Interview",
    description: "Interview candidates directly to confirm domain knowledge in complex areas like clinical trial design or manufacturing QA."
  },
  {
    step: 4,
    title: "Onboard & Initiate Project",
    description: "Seamless contracting allows the expert to integrate and begin contributing to critical research or compliance tasks quickly."
  }
];

// --- Comparison Data ---
export const comparisonData = [
  {
    feature: "Niche Compliance Vetting",
    traditional: "Low",
    mapeach: "High (GxP, SOPs)",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Access to Clinical Experts",
    traditional: "Slow/Generic",
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
    traditional: "General Admin/HR",
    mapeach: "Clinical Operations, Regulatory, and R&D",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Time to Fill Specialized Roles",
    traditional: "10+ weeks",
    mapeach: "less than 3 weeks",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  },
  {
    feature: "Contract Flexibility",
    traditional: "Rigid Terms",
    mapeach: "Highly Flexible",
    mapeachClass: "text-emerald-600 bg-emerald-50 font-semibold"
  }
];

// --- Specific Lifesciences Roles Data (Consolidated) ---
export const lifesciencesRoles = [
  {
    category: "Research & Development (R&D)",
    items: [
      { role: "Research Scientist", skills: ["Molecular Biology", "Assay Development", "Cell Culture", "In Vivo/In Vitro Models"] },
      { role: "Lab Technician", skills: ["PCR/qPCR", "Chromatography (HPLC/GC)", "Sample Preparation", "GLP Compliance"] },
      { role: "Process Development Scientist", skills: ["Analytical Methods", "Bioreactor Optimization", "Cell Line Development", "Scale-up"] }
    ]
  },
  {
    category: "Clinical Trials & Operations",
    items: [
      { role: "Clinical Research Associate (CRA)", skills: ["GCP Monitoring", "Site Initiation", "Data Collection", "Study Protocol adherence"] },
      { role: "Clinical Trial Manager (CTM)", skills: ["Phase I-III Management", "Budgeting", "Vendor Oversight", "Timeline Management"] },
      { role: "Medical Writer", skills: ["Clinical Protocols", "CSRs (Clinical Study Reports)", "Regulatory Submissions"] }
    ]
  },
  {
    category: "Bioinformatics & Data Science",
    items: [
      { role: "Bioinformatician", skills: ["Genomic Data Analysis", "Python / R", "NGS (Next-Gen Sequencing)", "Data Visualization"] },
      { role: "Biostatistician", skills: ["Clinical Data Analysis (SAS)", "Statistical Modeling", "Trial Design", "CDISC Standards"] }
    ]
  },
  {
    category: "Regulatory & Quality Assurance (QA)",
    items: [
      { role: "Regulatory Affairs Specialist", skills: ["FDA Submissions (IND, NDA, BLA)", "EMA Compliance", "Technical File Preparation"] },
      { role: "Quality Assurance Analyst", skills: ["GMP/GLP Audits", "SOPs (Standard Operating Procedures)", "CAPA Management"] },
      { role: "Validation Specialist", skills: ["IQ/OQ/PQ", "CSV (Computer System Validation)", "Equipment Validation"] }
    ]
  },
  {
    category: "Manufacturing & Project Management",
    items: [
      { role: "Project Manager", skills: ["Clinical Project Management", "Resource Planning", "Risk Management", "Gantt Charts"] },
      { role: "Manufacturing Technician", skills: ["Aseptic Processing", "Batch Records", "Equipment Operation", "cGMP"] }
    ]
  },
  {
    category: "Sales & Commercial",
    items: [
      { role: "Medical Science Liaison (MSL)", skills: ["Key Opinion Leader (KOL) Engagement", "Scientific Communication", "Therapeutic Area Expertise"] },
      { role: "Pharma Sales Executive", skills: ["Product Knowledge", "Client Engagement", "Territory Management", "Forecasting"] }
    ]
  }
];

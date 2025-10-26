import { Zap, ShieldCheck, CheckCircle, DollarSign, Users, TrendingDown, Heart, Stethoscope, BriefcaseMedical, Lightbulb, Activity, Scale, Hospital, Brain, Code } from 'lucide-react';

// --- Page Text Content (Verified for JSX compatibility) ---
export const pageText = {
  hero: {
    title: "Accelerate HealthTech Innovation with Elite Talent",
    subtitle: "Source the specialized expertise needed for EHR integration, regulatory compliance (HIPAA, FDA), and advanced AI/ML in digital health.",
    cta1: { 
      label: "Start Hiring Now",
      link: "/contact" 
    },
    cta2: { 
      label: "Calculate Your Savings" 
    }
  },
  benefits: {
    header: "Why Partner for HealthTech Recruitment?",
    subheader: "Deep domain knowledge meets rapid global sourcing.",
  },
  calculator: {
    header: "Calculate Your Potential Savings",
    subheader: "See how Mapeach's flat-fee model reduces your cost-per-hire in this specialized field."
  },
  process: {
    header: "Our 4-Step Precision HealthTech Sourcing Process",
    subheader: "A transparent and efficient path to securing clinical, data, and software experts."
  },
  comparison: {
    header: "Mapeach vs. Traditional HealthTech Recruiters",
  },
  ctaSection: {
    title: "Ready to Scale Your Digital Health Team?",
    subtitle: "Stop compromising between clinical knowledge and technical skill. Hire full-stack HealthTech experts today.",
    button: "Contact Our HealthTech Team",
  }
};

// --- Benefits Data ---
export const benefits = [
  { icon: ShieldCheck, title: "Regulatory Compliance Focus", description: "Vetted talent with deep HIPAA, GDPR, and FDA regulatory affairs knowledge." },
  { icon: Stethoscope, title: "Clinical Workflow Integration", description: "We find Informatics specialists who bridge the gap between technology and patient care." },
  { icon: Code, title: "Interoperability Expertise", description: "Sourcing pros skilled in FHIR, HL7, and complex EHR/EHR system integrations." },
  { icon: Brain, title: "AI/ML for Diagnostics", description: "Access to Machine Learning Engineers specializing in medical imaging and clinical NLP." },
  { icon: Hospital, title: "Global Talent Pool", description: "Recruit specialized developers and clinicians globally to accelerate your roadmap." },
  { icon: Activity, title: "Reduced Time-to-Hire", description: "Our flat-fee model incentivizes speed, delivering key hires faster than agencies." },
];

// --- Hiring Process Data ---
export const hiringProcess = [
  { step: 1, title: "Scope & Compliance", description: "Define role requirements and mandatory compliance knowledge (e.g., ISO 13485, HITECH)." },
  { step: 2, title: "Targeted Sourcing", description: "Source candidates combining technical depth with clinical or regulatory experience." },
  { step: 3, title: "Technical & Clinical Vetting", description: "Assess skills in FHIR, EHR APIs, and domain-specific knowledge by senior HealthTech leaders." },
  { step: 4, title: "Placement & Onboarding", description: "Successful placement, followed by compliance verification and post-hire support." }
];

// --- Comparison Data ---
export const comparisonData = [
  { feature: "Fee Structure", traditional: "25-35% of salary", mapeach: "Flat, predictable fee", mapeachClass: "text-emerald-600" },
  { feature: "Regulatory Vetting", traditional: "Often superficial", mapeach: "Mandatory, in-depth compliance testing", mapeachClass: "text-emerald-600" },
  { feature: "Domain Focus", traditional: "General Tech or Clinical", mapeach: "Exclusive HealthTech/MedTech (Clinical & Technical)", mapeachClass: "text-emerald-600" },
  { feature: "Time-to-Hire", traditional: "8-16+ Weeks", mapeach: "3-8 Weeks on average", mapeachClass: "text-emerald-600" },
];

// --- EXTENSIVE HEALTHCARE ROLES DATA ---
export const healthcareRoles = [
  {
    category: "Digital & Software Engineering",
    items: [
      { role: "HealthTech Software Engineer", skills: ["Python/Django", "Java/Spring", "Go", "Cloud (AWS/Azure/GCP)", "REST/GraphQL"] },
      { role: "EHR/EHR Integrations Specialist", skills: ["Epic/Cerner/Meditech APIs", "FHIR/HL7/DICOM Standards", "Mirth Connect"] },
      { role: "Mobile Health (mHealth) Developer", skills: ["Native iOS/Android", "React Native", "HIPAA-compliant Data Storage", "Wearable Device Integration"] },
      { role: "Cybersecurity Analyst / Engineer", skills: ["HIPAA/HITECH Compliance", "Penetration Testing", "Encryption (e.g., PHI)", "Risk Assessment"] },
      { role: "Telemedicine Platform Engineer", skills: ["WebRTC", "Video/Audio Streaming", "Low-latency Communication", "Scalability"] },
      { role: "Quality Assurance (QA) Engineer", skills: ["Medical Device Testing (IEC 62304)", "Software Validation", "Test Automation"] }
    ]
  },
  {
    category: "Data Science & AI/ML",
    items: [
      { role: "Biomedical Data Scientist", skills: ["Predictive Modeling (Disease)", "Clinical Trial Analysis", "R/Python", "SQL"] },
      { role: "Machine Learning Engineer (Diagnostics)", skills: ["Deep Learning (TensorFlow/PyTorch)", "Medical Imaging (DICOM/PACS)", "NLP (Clinical Text)"] },
      { role: "Health Data Architect", skills: ["Data Governance", "Cloud Data Lakes", "Data Warehousing (Snowflake)", "Interoperability Design"] },
      { role: "Business Intelligence (BI) Analyst", skills: ["Tableau/Power BI", "Healthcare Metrics (KPIs)", "Cost/Efficacy Reporting"] }
    ]
  },
  {
    category: "Clinical & Regulatory Informatics",
    items: [
      { role: "Clinical Informaticist / Analyst", skills: ["Clinical Workflow Optimization", "EHR System Implementation", "Clinical Decision Support Systems (CDSS)"] },
      { role: "Regulatory Affairs Specialist", skills: ["FDA Submissions (510(k))", "CE Marking", "ISO 13485/IEC 62304", "Risk Management"] },
      { role: "Health IT Project Manager (PMP)", skills: ["Agile/Scrum in Healthcare", "Budget Management", "Stakeholder Communication (Clinical/IT)"] },
      { role: "Medical Coder & Billing Specialist", skills: ["ICD-10/CPT Coding", "Revenue Cycle Management (RCM)", "Claim Processing", "Compliance Auditing"] }
    ]
  }
];

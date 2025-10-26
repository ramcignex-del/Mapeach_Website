import { Zap, ShieldCheck, CheckCircle, DollarSign, Users, TrendingDown, Heart, Stethoscope, BriefcaseMedical, Lightbulb, Activity, Scale, Hospital, Brain, Code } from 'lucide-react';

// --- Page Text Content --- (Omitted for brevity, assumed unchanged)
export const pageText = {
  hero: { /* ... */ },
  benefits: { /* ... */ },
  calculator: { /* ... */ },
  process: { /* ... */ },
  comparison: { /* ... */ },
  ctaSection: { /* ... */ }
};

// --- Benefits Data --- (Omitted for brevity, assumed unchanged)
export const benefits = [ /* ... */ ];

// --- Hiring Process Data --- (Omitted for brevity, assumed unchanged)
export const hiringProcess = [ /* ... */ ];

// --- Comparison Data --- (Omitted for brevity, assumed unchanged)
export const comparisonData = [ /* ... */ ];


// --- EXTENSIVE HEALTHCARE ROLES DATA (UPDATED) ---
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

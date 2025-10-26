// frontend/src/data/InformationTechnology.js
import { Cpu, Cloud, Database, Shield, Code, Users, Network, Wrench } from "lucide-react";

// ----------------------
// HERO SECTION TEXT
// ----------------------
export const pageText = {
  hero: {
    title: "Hire pre-vetted IT talent with lightning speed",
    subtitle:
      "Access a curated pool of software engineers, cloud specialists, cybersecurity experts, and tech project managers — ready to drive your digital transformation.",
    cta1: {
      label: "Hire Top IT Talent",
      link: "/contact",
    },
    cta2: {
      label: "Estimate Hiring Costs",
    },
  },

  // ----------------------
  // BENEFITS SECTION
  // ----------------------
  benefits: {
    header: "Why Hire IT Professionals Through Mapeach?",
    subheader:
      "From full-stack developers to cloud engineers, we help companies scale with precision and efficiency.",
  },

  // ----------------------
  // COST CALCULATOR
  // ----------------------
  calculator: {
    header: "Estimate Your IT Hiring Costs Instantly",
    subheader:
      "Our cost calculator helps you project budget and timelines for building your technology teams.",
  },

  // ----------------------
  // HIRING PROCESS
  // ----------------------
  process: {
    header: "Streamlined Hiring Process for IT Professionals",
    subheader:
      "Our 4-step process ensures speed, quality, and precision in finding the right tech talent for your needs.",
  },

  // ----------------------
  // COMPARISON TABLE
  // ----------------------
  comparison: {
    header: "Why Mapeach is the Smarter Way to Hire IT Talent",
  },

  // ----------------------
  // CTA SECTION
  // ----------------------
  ctaSection: {
    title: "Build Your Dream Tech Team Today",
    subtitle:
      "From developers to DevOps, accelerate your growth with world-class IT professionals, vetted and ready to onboard.",
    button: "Start Hiring Now",
  },
};

// ----------------------
// BENEFITS DATA
// ----------------------
export const benefits = [
  {
    icon: Cpu,
    title: "Top Engineering Talent",
    description:
      "Access a global pool of pre-screened software developers and tech experts with proven track records.",
  },
  {
    icon: Cloud,
    title: "Cloud-Ready Workforce",
    description:
      "Hire AWS, Azure, and Google Cloud certified engineers to build and maintain scalable cloud infrastructures.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Experts",
    description:
      "Protect your organization with experienced professionals skilled in network security, risk management, and compliance.",
  },
  {
    icon: Database,
    title: "Data-Driven Specialists",
    description:
      "Leverage data scientists, analysts, and engineers to turn raw information into strategic insights.",
  },
  {
    icon: Users,
    title: "Agile Team Collaboration",
    description:
      "Our IT teams integrate seamlessly with your workflows — remote or hybrid — for rapid delivery.",
  },
  {
    icon: Wrench,
    title: "DevOps & Automation",
    description:
      "Automate deployments and improve delivery cycles with DevOps engineers experienced in CI/CD pipelines.",
  },
];

// ----------------------
// HIRING PROCESS
// ----------------------
export const hiringProcess = [
  {
    step: 1,
    title: "Define Requirements",
    description:
      "We understand your project scope, tech stack, and cultural fit to identify ideal IT candidates.",
  },
  {
    step: 2,
    title: "Curated Talent Shortlist",
    description:
      "Receive a shortlist of pre-vetted professionals with verified technical and soft skills.",
  },
  {
    step: 3,
    title: "Interview & Technical Assessment",
    description:
      "Engage directly with candidates for coding challenges or live interviews tailored to your stack.",
  },
  {
    step: 4,
    title: "Onboard & Support",
    description:
      "Hire confidently with post-placement support ensuring seamless integration into your teams.",
  },
];

// ----------------------
// COMPARISON TABLE
// ----------------------
export const comparisonData = [
  {
    feature: "Hiring Speed",
    traditional: "4–6 weeks",
    mapeach: "5–10 days",
    mapeachClass: "text-emerald-600 font-semibold",
  },
  {
    feature: "Candidate Vetting",
    traditional: "Manual screening only",
    mapeach: "AI-assisted technical vetting",
    mapeachClass: "text-emerald-600 font-semibold",
  },
  {
    feature: "Hiring Cost",
    traditional: "High placement fees",
    mapeach: "Transparent & affordable rates",
    mapeachClass: "text-emerald-600 font-semibold",
  },
  {
    feature: "Specialized IT Roles",
    traditional: "Limited exposure",
    mapeach: "Wide network of domain experts",
    mapeachClass: "text-emerald-600 font-semibold",
  },
];

// ----------------------
// IT ROLES / EXPERTISE SECTION
// ----------------------
export const itRoles = [
  {
    category: "Software Engineering",
    items: [
      { role: "Frontend Developer", skills: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind"] },
      { role: "Backend Developer", skills: ["Node.js", "Python", "Django", "Express", "REST APIs"] },
      { role: "Full Stack Engineer", skills: ["MERN", "MEAN", "GraphQL", "Docker", "AWS"] },
      { role: "Mobile Developer", skills: ["React Native", "Flutter", "Swift", "Kotlin"] },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { role: "DevOps Engineer", skills: ["AWS", "Azure", "GCP", "CI/CD", "Terraform", "Kubernetes"] },
      { role: "Cloud Solutions Architect", skills: ["AWS Architecture", "Serverless", "IaC", "Microservices"] },
      { role: "Site Reliability Engineer", skills: ["Monitoring", "Automation", "Infrastructure as Code"] },
    ],
  },
  {
    category: "Data Science & AI",
    items: [
      { role: "Data Scientist", skills: ["Python", "TensorFlow", "Pandas", "NLP", "Machine Learning"] },
      { role: "Data Engineer", skills: ["SQL", "ETL", "Airflow", "Spark", "BigQuery"] },
      { role: "AI Engineer", skills: ["Deep Learning", "OpenAI API", "LLMs", "Computer Vision"] },
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      { role: "Security Engineer", skills: ["Firewalls", "IDS/IPS", "SIEM", "Incident Response"] },
      { role: "Penetration Tester", skills: ["Ethical Hacking", "Burp Suite", "Metasploit"] },
      { role: "Compliance Analyst", skills: ["ISO 27001", "SOC 2", "GDPR", "NIST"] },
    ],
  },
  {
    category: "IT Infrastructure & Networking",
    items: [
      { role: "Network Engineer", skills: ["LAN/WAN", "Cisco", "Routing", "Switching", "VPN"] },
      { role: "System Administrator", skills: ["Linux", "Windows Server", "Active Directory", "VMware"] },
      { role: "IT Support Specialist", skills: ["Helpdesk", "Troubleshooting", "Ticketing Systems"] },
    ],
  },
  {
    category: "Project Management & QA",
    items: [
      { role: "Scrum Master", skills: ["Agile", "JIRA", "Sprint Planning", "Team Coordination"] },
      { role: "Technical Project Manager", skills: ["SDLC", "Stakeholder Management", "Risk Mitigation"] },
      { role: "QA Engineer", skills: ["Selenium", "Cypress", "Unit Testing", "Regression"] },
    ],
  },
];

export default {
  pageText,
  benefits,
  hiringProcess,
  comparisonData,
  itRoles,
};

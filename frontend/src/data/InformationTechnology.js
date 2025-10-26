import { Cloud, Shield, Database, Cpu, Code2, Layers } from 'lucide-react';

export const pageText = {
  hero: {
    title: 'Hire pre-vetted IT talent with lightning speed',
    subtitle:
      'From full-stack engineers to DevOps specialists and data scientists — we connect you with top-tier tech professionals ready to innovate and deliver.',
    cta1: { label: 'Hire IT Talent', link: '/contact' },
    cta2: { label: 'Estimate Cost', link: '#calculator' },
  },
  benefits: {
    header: 'Why choose Mapeach for IT hiring?',
    subheader:
      'We combine deep tech industry expertise with AI-driven candidate matching, ensuring you hire faster, smarter, and better.',
  },
  calculator: {
    header: 'IT Talent Cost Estimator',
    subheader:
      'Quickly calculate hiring costs for software developers, DevOps, designers, and more.',
  },
  process: {
    header: 'Our Tech Hiring Process',
    subheader:
      'A streamlined, transparent, and data-driven process to connect you with world-class IT talent.',
  },
  comparison: {
    header: 'Mapeach vs Traditional Tech Recruitment',
  },
  ctaSection: {
    title: 'Build Your Tech Team Today',
    subtitle:
      'Scale engineering, data, and design teams seamlessly with Mapeach. Let’s power your innovation.',
    button: 'Get Started',
  },
};

export const benefits = [
  {
    icon: Code2,
    title: 'Top 3% IT Professionals',
    description:
      'We rigorously vet engineers, architects, and designers with proven technical depth and soft skills.',
  },
  {
    icon: Cloud,
    title: 'Global Tech Talent Pool',
    description:
      'Access remote-ready candidates from over 30 countries across cloud, AI, and development disciplines.',
  },
  {
    icon: Shield,
    title: 'Secure & Compliant Hiring',
    description:
      'All candidates undergo background checks, NDA agreements, and data privacy compliance validation.',
  },
  {
    icon: Database,
    title: 'Data-Driven Matching',
    description:
      'AI algorithms match candidates to your project requirements based on real performance insights.',
  },
  {
    icon: Layers,
    title: 'Flexible Engagements',
    description:
      'Hire for short-term projects, contract-to-hire, or full-time roles with no hidden costs.',
  },
  {
    icon: Cpu,
    title: 'Industry-Specific Expertise',
    description:
      'We recruit experts specialized in fintech, SaaS, healthcare tech, eCommerce, and enterprise software.',
  },
];

export const hiringProcess = [
  { step: '1', title: 'Requirement Analysis', description: 'We align with your technical and cultural needs.' },
  { step: '2', title: 'Candidate Sourcing', description: 'AI-powered sourcing identifies top-matching talent.' },
  { step: '3', title: 'Technical Evaluation', description: 'Comprehensive tests and interviews by senior engineers.' },
  { step: '4', title: 'Final Onboarding', description: 'Fast-track contract signing and integration into your team.' },
];

export const comparisonData = [
  {
    feature: 'Time to Hire',
    traditional: '4–8 Weeks',
    mapeach: '5–10 Days',
    mapeachClass: 'text-emerald-700 font-semibold',
  },
  {
    feature: 'Candidate Quality',
    traditional: 'Unverified CVs',
    mapeach: 'Pre-vetted & Tested Engineers',
    mapeachClass: 'text-emerald-700 font-semibold',
  },
  {
    feature: 'Retention Rate',
    traditional: '60%',
    mapeach: '92%',
    mapeachClass: 'text-emerald-700 font-semibold',
  },
  {
    feature: 'Technical Vetting',
    traditional: 'Manual & Limited',
    mapeach: 'AI + Senior Engineer Assessment',
    mapeachClass: 'text-emerald-700 font-semibold',
  },
  {
    feature: 'Engagement Flexibility',
    traditional: 'Rigid Contracts',
    mapeach: 'Flexible & Scalable Hiring',
    mapeachClass: 'text-emerald-700 font-semibold',
  },
];

export const itRoles = [
  {
    category: 'Software Development',
    items: [
      { role: 'Frontend Developer', skills: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
      { role: 'Backend Developer', skills: ['Node.js', 'Django', 'Spring Boot', 'Express', 'PostgreSQL'] },
      { role: 'Full Stack Engineer', skills: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'Docker'] },
      { role: 'Mobile App Developer', skills: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'API Integration'] },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { role: 'DevOps Engineer', skills: ['AWS', 'Azure', 'CI/CD', 'Terraform', 'Kubernetes'] },
      { role: 'Cloud Architect', skills: ['GCP', 'AWS', 'IaC', 'Serverless', 'Cloud Security'] },
      { role: 'Site Reliability Engineer (SRE)', skills: ['Monitoring', 'Incident Response', 'Automation', 'Python'] },
    ],
  },
  {
    category: 'Data & AI',
    items: [
      { role: 'Data Engineer', skills: ['ETL', 'Snowflake', 'Airflow', 'SQL', 'Python'] },
      { role: 'Data Scientist', skills: ['Machine Learning', 'Pandas', 'TensorFlow', 'Model Deployment'] },
      { role: 'AI/ML Engineer', skills: ['PyTorch', 'MLOps', 'NLP', 'Deep Learning', 'OpenAI APIs'] },
    ],
  },
  {
    category: 'Cybersecurity',
    items: [
      { role: 'Security Analyst', skills: ['SIEM', 'Threat Detection', 'Incident Response'] },
      { role: 'Ethical Hacker', skills: ['Penetration Testing', 'OWASP', 'Metasploit', 'Burp Suite'] },
      { role: 'Cloud Security Engineer', skills: ['IAM', 'Zero Trust', 'Security Policies', 'SOC2 Compliance'] },
    ],
  },
  {
    category: 'Product, UI/UX & QA',
    items: [
      { role: 'UI/UX Designer', skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'] },
      { role: 'Product Manager', skills: ['Agile', 'JIRA', 'Roadmaps',

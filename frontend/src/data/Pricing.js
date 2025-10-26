import { Users, DollarSign, Settings, Scale, TrendingUp } from 'lucide-react';

// --- Page Text Content ---
export const pageText = {
  hero: {
    title: "Staffing Services Tailored for Your Business",
    subtitle: "Find expert talent quickly with flexible plans for startups and enterprises.",
    cta1: { label: "Contact Us", link: "/contact" },
    cta2: { label: "Compare Plans" }
  },
  benefits: {
    header: "Why Choose Our Staffing Services",
    subheader: "Quick, flexible, and cost-efficient hiring solutions for any scale."
  },
  calculator: {
    header: "Optimize Your Staffing Budget",
    subheader: "Calculate potential savings and choose the best plan for your team."
  },
  comparison: {
    header: "Market Comparison"
  },
  ctaSection: {
    title: "Ready to Scale Your Team?",
    subtitle: "Connect with us and onboard the best talent for your projects.",
    button: "Contact an Expert"
  }
};

// --- Benefits Data ---
export const benefits = [
  { icon: Users, title: "Vetted Talent", description: "Access pre-screened and verified professionals." },
  { icon: DollarSign, title: "Cost-Efficient", description: "Flexible pricing to fit any budget." },
  { icon: Settings, title: "Flexible Contracts", description: "Hourly, monthly, or project-based hiring." },
  { icon: Scale, title: "Scalable Teams", description: "Easily adjust team size as your project evolves." },
  { icon: TrendingUp, title: "Fast Onboarding", description: "Quickly integrate new hires with minimal delay." }
];

// --- Pricing Options ---
export const pricingOptions = [
  {
    name: "Startup",
    price: "$10 one-time + $1/hour recurring per contractor",
    description: "For small teams and early-stage projects",
    features: [
      "Access to pre-vetted professionals",
      "Flexible short-term contracts",
      "Dedicated support"
    ]
  },
  {
    name: "Enterprise",
    price: ""$20 one-time + $1/hour recurring per contractor"",
    description: "For larger teams and complex projects",
    features: [
      "Full access to talent pool",
      "Custom onboarding & scaling",
      "Priority support and consulting"
    ]
  }
];

// --- Market Comparison Data ---
export const comparisonData = [
  {
    feature: "Average Time to Hire",
    traditional: "6-8 weeks",
    ourService: "1-2 weeks",
    ourServiceClass: "text-emerald-600 bg-emerald-50 font-semibold",
    plans: ["Startup", "Enterprise"]
  },
  {
    feature: "Agency Markup",
    traditional: "20-35%",
    ourService: "Flat $499/month or $1499/month",
    ourServiceClass: "text-emerald-600 bg-emerald-50 font-semibold",
    plans: ["Startup", "Enterprise"]
  },
  {
    feature: "Flexibility of Contract",
    traditional: "Rigid Terms",
    ourService: "Flexible: Hourly, Monthly, Project-based",
    ourServiceClass: "text-emerald-600 bg-emerald-50 font-semibold",
    plans: ["Enterprise"]
  },
  {
    feature: "Quality of Talent",
    traditional: "Varies",
    ourService: "Pre-vetted and verified experts",
    ourServiceClass: "text-emerald-600 bg-emerald-50 font-semibold",
    plans: ["Startup", "Enterprise"]
  },
  {
    feature: "Scalability",
    traditional: "Limited",
    ourService: "Easily scale teams up or down",
    ourServiceClass: "text-emerald-600 bg-emerald-50 font-semibold",
    plans: ["Enterprise"]
  }
];

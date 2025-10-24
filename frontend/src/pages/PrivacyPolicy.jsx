export const contactDefaults = {
  companyName: '[Your Company Name]',
  websiteUrl: '[Your Website URL]',
  effectiveDate: 'October 23, 2025',
  contactEmail: '[your-email@example.com]',
  contactPhone: '[Your Phone Number]',
  address: '[Your Company Address]',
  dpoName: '[Data Protection Officer Name]',
  registeredCountry: 'India',
};

export function policyContent(overrides = {}) {
  return {
    ...contactDefaults,
    ...overrides,
  };
}

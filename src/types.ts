export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  techBadge?: string;
  accentColor: 'cyan' | 'violet' | 'emerald';
}

export interface TranslationDirection {
  id: string;
  title: string;
  description: string;
  iconName: string;
  examples: string[];
  features: string[];
}

export interface TechnologyStackItem {
  name: string;
  category: 'AI_Engine' | 'Quality_Assurance' | 'Layout_Engine' | 'Security';
  description: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  volume: string;
  format: string;
  details: string;
  agreeToNda: boolean;
}

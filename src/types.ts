export type Page =
  | 'home'
  | 'products'
  | 'product-detail'
  | 'engagements'
  | 'about'
  | 'contact'
  | 'hosting-guide';

export interface Product {
  id: string;
  slNo: number;
  name: string;
  shortName: string;
  category:
    | 'Defense & Signals'
    | 'Offline LLMs & KMS'
    | 'Document Intelligence'
    | 'Legal & IP'
    | 'Quantum Security'
    | 'Educational Intelligence';
  tagline: string;
  description: string;
  extendedOverview: string;
  keyCapabilities: string[];
  systemArchitecture: {
    inputs: string[];
    coreEngine: string[];
    outputs: string[];
  };
  useCases: string[];
  offlineCapable: boolean;
  securityHighlights: string[];
  badgeColor: string;
}

export interface KeyProject {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  impacts: string[];
}

export interface CustomerEngagement {
  id: string;
  title: string;
  client: string;
  domain: string;
  description: string;
  keyOutcomes: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualification?: string;
  background?: string[];
  experience: string[];
  avatarInitial: string;
  category?: 'director' | 'consultant' | 'advisor';
}

export interface ContactSubmission {
  id: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  inquiryType: 'product_inquiry' | 'propose_tool' | 'rd_consultancy' | 'general';
  productId?: string;
  comments: string;
  submittedAt: string;
}

export interface Service {
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Deliverable {
  title: string;
  description: string;
}

export interface AuditArea {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

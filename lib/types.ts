export interface Service {
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

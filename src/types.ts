export type SpecCategory = 'email' | 'ads';

export interface EmailPiece {
  id: string;
  stepNumber: number;
  label: string; // e.g. "EMAIL 1 — WELCOME EMAIL"
  objective: string;
  subjectLine: string;
  previewText?: string;
  body: string;
  primaryCta?: string;
  secondaryCta?: string;
  whyItConverts?: string;
  psychologyUsed?: string;
}

export interface AdVariation {
  id: string;
  versionName: string; // e.g. "Version 1 — Emotional"
  headline: string;
  primaryText: string;
  ctaButton: string;
  whyItWorks?: string;
}

export interface SpecProject {
  id: string;
  title: string;
  category: SpecCategory;
  industry: string;
  brandDescription: string;
  pieceCount: string; // e.g., "5-email welcome series" or "3 ad variations + Instagram version"
  goal: string;
  frameworkUsed: string; // e.g., "AIDA", "PAS", "BAB", "QUEST", "4Ps"
  targetAudience?: string;
  customerAvatar?: {
    name: string;
    role: string;
    frustration: string;
    dreamOutcome: string;
  };
  emailSequence?: EmailPiece[];
  adVariations?: AdVariation[];
  instagramCaption?: {
    headline: string;
    caption: string;
    ctaButton: string;
  };
  ctaLibrary?: string[];
  skillsDemonstrated: string[];
  isCustomUserProject?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefit: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface FrameworkItem {
  name: string;
  fullName: string;
  structure: string;
  bestUsedFor: string;
}

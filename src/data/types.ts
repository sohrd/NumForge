export interface ToolFaq {
  question: string;
  answer: string;
}

export type ToolEngineType =
  | 'base-converter'
  | 'arithmetic'
  | 'bitwise'
  | 'shift'
  | 'complement'
  | 'range'
  | 'encoding'
  | 'validator'
  | 'float'
  | 'quiz'
  | 'generator'
  | 'cheatsheet';

export interface ToolDefinition {
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  secondaryCategories?: string[];
  shortDesc: string;
  metaTitle: string;
  metaDesc: string;
  engineType: ToolEngineType;
  inputConfig: {
    primaryLabel: string;
    primaryPlaceholder: string;
    defaultValue?: string;
    helpText?: string;
    hasSecondaryInput?: boolean;
    secondaryLabel?: string;
    secondaryPlaceholder?: string;
    defaultSecondaryValue?: string;
    hasBaseSelector?: boolean;
    defaultBase?: number;
    hasTargetBaseSelector?: boolean;
    defaultTargetBase?: number;
    hasBitWidthSelector?: boolean;
    defaultBitWidth?: number;
    hasOperationSelector?: boolean;
    operations?: Array<{ value: string; label: string }>;
    defaultOperation?: string;
  };
  whatIs: string;
  howItWorks: string;
  formula: string;
  example: string;
  rules: string[];
  applications: string[];
  mistakes: string[];
  faqs: ToolFaq[];
  relatedSlugs: string[];
}

export interface CategoryDefinition {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  toolSlugs: string[];
}

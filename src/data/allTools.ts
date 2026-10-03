import type { ToolDefinition, CategoryDefinition } from './types';
import { CATEGORIES_LIST } from './categories';
import { NUMBER_SYSTEM_TOOLS } from './tools/numberSystem';
import { BINARY_TOOLS } from './tools/binaryTools';
import { DECIMAL_TOOLS } from './tools/decimalTools';
import { OCTAL_TOOLS } from './tools/octalTools';
import { HEX_TOOLS } from './tools/hexTools';
import { COMPLEMENT_TOOLS } from './tools/complementTools';
import { DIGITAL_ELECTRONICS_TOOLS } from './tools/digitalElectronics';
import { CODING_TOOLS } from './tools/codingTools';
import { BASE_CONVERSION_TOOLS } from './tools/baseConversion';
import { ARITHMETIC_TOOLS } from './tools/arithmeticTools';
import { REPRESENTATION_TOOLS } from './tools/representationTools';
import { EDUCATIONAL_TOOLS } from './tools/educationalTools';

export const ALL_TOOLS: ToolDefinition[] = [
  ...NUMBER_SYSTEM_TOOLS,
  ...BINARY_TOOLS,
  ...DECIMAL_TOOLS,
  ...OCTAL_TOOLS,
  ...HEX_TOOLS,
  ...COMPLEMENT_TOOLS,
  ...DIGITAL_ELECTRONICS_TOOLS,
  ...CODING_TOOLS,
  ...BASE_CONVERSION_TOOLS,
  ...ARITHMETIC_TOOLS,
  ...REPRESENTATION_TOOLS,
  ...EDUCATIONAL_TOOLS
];

export const TOOL_MAP = new Map<string, ToolDefinition>(
  ALL_TOOLS.map((t) => [t.slug, t])
);

export const CATEGORIES: CategoryDefinition[] = CATEGORIES_LIST;

export const CATEGORY_MAP = new Map<string, CategoryDefinition>(
  CATEGORIES.map((c) => [c.slug, c])
);

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return TOOL_MAP.get(slug);
}

export function getToolsByCategory(categorySlug: string): ToolDefinition[] {
  const cat = CATEGORY_MAP.get(categorySlug);
  if (!cat) return [];
  return cat.toolSlugs
    .map((slug) => TOOL_MAP.get(slug))
    .filter((t): t is ToolDefinition => Boolean(t));
}

export function getRelatedTools(tool: ToolDefinition): ToolDefinition[] {
  return tool.relatedSlugs
    .map((slug) => TOOL_MAP.get(slug))
    .filter((t): t is ToolDefinition => Boolean(t));
}

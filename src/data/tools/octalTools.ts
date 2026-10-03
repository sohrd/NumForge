import type { ToolDefinition } from '../types';

export const OCTAL_TOOLS: ToolDefinition[] = [
  {
    slug: 'octal-arithmetic-calculator',
    name: 'Octal Arithmetic Calculator',
    categorySlug: 'octal',
    categoryName: 'Octal Tools',
    secondaryCategories: ['number-system-arithmetic'],
    shortDesc: 'Perform addition, subtraction, multiplication, and division directly on base-8 octal numbers.',
    metaTitle: 'Octal Arithmetic Calculator – Add, Subtract, Multiply & Divide Octal Numbers',
    metaDesc: 'Calculate octal addition, subtraction, multiplication, and division online with step-by-step carries, borrows, and proofs.',
    engineType: 'arithmetic',
    inputConfig: {
      primaryLabel: 'First Octal Number (A)',
      primaryPlaceholder: 'e.g. 75',
      defaultValue: '75',
      hasSecondaryInput: true,
      secondaryLabel: 'Second Octal Number (B)',
      secondaryPlaceholder: 'e.g. 23',
      defaultSecondaryValue: '23',
      hasOperationSelector: true,
      operations: [
        { value: '+', label: 'Addition (+)' },
        { value: '-', label: 'Subtraction (-)' },
        { value: '*', label: 'Multiplication (×)' },
        { value: '/', label: 'Division (÷)' }
      ],
      defaultOperation: '+',
      helpText: 'Enter base-8 digits (0 through 7 only).'
    },
    whatIs: 'The Octal Arithmetic Calculator performs basic arithmetic operations (addition, subtraction, multiplication, and division) directly in base 8 without converting to base 10 first. Base 8 uses eight digits (0 through 7) and wraps columns at 8 rather than 10.',
    howItWorks: 'During addition, any column sum of 8 or more produces an octal carry (sum - 8 with carry 1). During subtraction, borrowing from a neighboring higher column adds 8 to the current column. During multiplication and division, base-8 place values (1, 8, 64, 512) govern column products and remainders.',
    formula: 'A_8 \\odot B_8 = R_8 \\quad (\\odot \\in \\{+, -, \\times, \\div\\}) \\quad \\text{where base } = 8',
    example: 'Add 75_8 + 23_8:\nColumn 0: 5 + 3 = 8 -> 8 mod 8 = 0, carry 1\nColumn 1: 7 + 2 + 1 (carry) = 10 -> 10 mod 8 = 2, carry 1\nColumn 2: 1 (carry)\nResult: 120_8 (which equals decimal 80).',
    rules: [
      'Only digits 0 through 7 are accepted.',
      'A column sum of 8 produces an output of 0 with a carry of 1.',
      'Division by zero is blocked.'
    ],
    applications: [
      'Performing permission arithmetic on Unix chmod file masks.',
      'Aviation transponder squawk code verification.',
      'Legacy computing firmware maintenance for 36-bit computers.'
    ],
    mistakes: [
      'Carrying at 10 instead of 8.',
      'Borrowing 10 instead of 8 during subtraction.',
      'Entering digits 8 or 9.'
    ],
    faqs: [
      {
        question: 'What is 7 + 1 in octal?',
        answer: '7 + 1 in octal is 10 (equal to decimal 8).'
      }
    ],
    relatedSlugs: ['octal-calculator', 'octal-to-binary', 'octal-to-decimal', 'hexadecimal-calculator']
  },
  {
    slug: 'octal-number-validator',
    name: 'Octal Number Validator',
    categorySlug: 'octal',
    categoryName: 'Octal Tools',
    secondaryCategories: ['base-conversion'],
    shortDesc: 'Verify if a number string is a valid base-8 octal representation and check for illegal digits (8 and 9).',
    metaTitle: 'Octal Number Validator – Check if a String is Valid Octal Online',
    metaDesc: 'Validate octal numbers online. Check for illegal digits 8 and 9, invalid characters, whitespace, and base-8 syntax.',
    engineType: 'validator',
    inputConfig: {
      primaryLabel: 'Candidate Octal String',
      primaryPlaceholder: 'e.g. 755 or 0o777',
      defaultValue: '755',
      helpText: 'Enter any number or text to verify if it is valid octal.'
    },
    whatIs: 'The Octal Number Validator inspects an input sequence to confirm it conforms strictly to base-8 rules, containing exclusively the digits 0, 1, 2, 3, 4, 5, 6, and 7 without illegal characters.',
    howItWorks: 'Scans every character of the string. Confirms each character belongs to the set {0, 1, 2, 3, 4, 5, 6, 7}. Flags any instances of 8, 9, or non-numeric symbols.',
    formula: '\\forall c \\in \\text{String}, \\quad c \\in \\{0, 1, 2, 3, 4, 5, 6, 7\\}',
    example: 'Validating "685":\nCharacter "8" detected at index 1!\nStatus: INVALID octal number (digits 8 and 9 are prohibited in base 8).',
    rules: [
      'Only digits 0 through 7 are permitted in octal.',
      'Digits 8 and 9 are strictly illegal.',
      'Standard language prefixes like 0o or 0 are recognized.'
    ],
    applications: [
      'Validating Unix file permission arguments (e.g. verifying chmod input before execution).',
      'Air traffic control input validation for aircraft transponder codes.',
      'Compiler parser verification for octal integer literals.'
    ],
    mistakes: [
      'Entering 8 or 9 (which are common in decimal, but illegal in octal).',
      'Leaving trailing letters or whitespace.'
    ],
    faqs: [
      {
        question: 'Why are 8 and 9 not allowed in octal?',
        answer: 'Because base 8 only has 8 unique symbols: 0, 1, 2, 3, 4, 5, 6, and 7. The value 8 is written as 10 in octal.'
      }
    ],
    relatedSlugs: ['octal-arithmetic-calculator', 'octal-to-decimal', 'base-n-number-validator']
  }
];

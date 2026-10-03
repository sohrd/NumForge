import type { CategoryDefinition } from './types';

export const CATEGORIES_LIST: CategoryDefinition[] = [
  {
    slug: 'number-system',
    name: 'Number System',
    shortDesc: 'Fundamental positional conversions between binary, decimal, octal, and hexadecimal.',
    longDesc: 'Master foundational radix transformations between the core bases of computational science: Base 2 (Binary), Base 8 (Octal), Base 10 (Decimal), and Base 16 (Hexadecimal). Each tool offers step-by-step mathematical proofs with zero-latency execution.',
    icon: '#',
    toolSlugs: [
      'decimal-to-binary',
      'binary-to-decimal',
      'decimal-to-octal',
      'octal-to-decimal',
      'decimal-to-hexadecimal',
      'hexadecimal-to-decimal',
      'binary-to-octal',
      'octal-to-binary',
      'binary-to-hexadecimal',
      'hexadecimal-to-binary',
      'octal-to-hexadecimal',
      'hexadecimal-to-octal'
    ]
  },
  {
    slug: 'binary',
    name: 'Binary Tools',
    shortDesc: 'Core binary arithmetic, bit validators, Gray code, BCD, and fraction converters.',
    longDesc: 'Specialized calculators and converters designed specifically for base-2 binary strings. Perform carries, borrows, bit counts, Gray code generation, and binary fractional conversions with exact precision.',
    icon: '01',
    toolSlugs: [
      'binary-addition-calculator',
      'binary-subtraction-calculator',
      'binary-multiplication-calculator',
      'binary-division-calculator',
      'binary-to-gray-code-converter',
      'gray-code-to-binary-converter',
      'binary-to-bcd-converter',
      'bcd-to-binary-converter',
      'binary-to-excess-3-converter',
      'excess-3-to-binary-converter',
      'binary-bit-calculator',
      'binary-fraction-converter',
      'binary-floating-point-converter',
      'binary-number-validator'
    ]
  },
  {
    slug: 'decimal',
    name: 'Decimal Tools',
    shortDesc: 'Tools for transforming base-10 decimal numbers and decimal fractions into binary and BCD.',
    longDesc: 'Specialized decimal utilities for converting continuous decimal fractional values into binary sequences and standard base-10 integers into Binary-Coded Decimal (BCD) nibbles.',
    icon: '10',
    toolSlugs: [
      'convert-decimal-fraction-to-binary',
      'decimal-to-bcd-converter'
    ]
  },
  {
    slug: 'octal',
    name: 'Octal Tools',
    shortDesc: 'Base-8 transformations, octal arithmetic calculators, and radix validators.',
    longDesc: 'Octal numeral tools for systems programming, file permissions, and legacy architecture analysis. Group bits into 3-bit triplets, compute octal arithmetic, and validate strings.',
    icon: '8',
    toolSlugs: [
      'octal-to-binary',
      'binary-to-octal',
      'octal-to-decimal',
      'decimal-to-octal',
      'octal-to-hexadecimal',
      'hexadecimal-to-octal',
      'octal-arithmetic-calculator',
      'octal-number-validator'
    ]
  },
  {
    slug: 'hexadecimal',
    name: 'Hexadecimal Tools',
    shortDesc: 'Hex conversions, base-16 arithmetic, nibble mappings, and hex validators.',
    longDesc: 'Complete suite of base-16 tools for embedded systems and memory inspection. Add, subtract, multiply, and divide hexadecimal numbers with 4-bit nibble breakdowns.',
    icon: '16',
    toolSlugs: [
      'hex-to-binary',
      'binary-to-hex',
      'hex-to-decimal',
      'decimal-to-hex',
      'hex-to-octal',
      'octal-to-hex',
      'hexadecimal-addition',
      'hexadecimal-subtraction',
      'hexadecimal-multiplication',
      'hexadecimal-division',
      'hexadecimal-number-validator'
    ]
  },
  {
    slug: 'complement',
    name: 'Complement Tools',
    shortDesc: '1’s, 2’s, 9’s, and 10’s complements, signed binary, and sign-magnitude calculators.',
    longDesc: 'Master computer arithmetic complements for signed integer representation. Invert bits, compute Two’s Complement addition/subtraction, inspect sign bits, and determine register limits.',
    icon: '±',
    toolSlugs: [
      '1s-complement-calculator',
      '2s-complement-calculator',
      '9s-complement-calculator',
      '10s-complement-calculator',
      '1s-to-2s-complement-converter',
      'signed-binary-calculator',
      'sign-magnitude-converter',
      '1s-complement-representation',
      '2s-complement-representation',
      'signed-integer-range-calculator'
    ]
  },
  {
    slug: 'digital-electronics',
    name: 'Digital Electronics Tools',
    shortDesc: 'Bitwise logic, shift registers, rotation engines, and elementary gate simulators.',
    longDesc: 'Simulate elementary hardware operations: bitwise AND, OR, XOR, NOT, NAND, NOR, XNOR, logical and arithmetic shifts, circular bit rotations, and bit-to-byte storage conversions.',
    icon: '⚡',
    toolSlugs: [
      'bit-calculator',
      'bit-to-byte-converter',
      'byte-to-kb-mb-gb-tb-converter',
      'binary-bit-shift-calculator',
      'left-shift-calculator',
      'right-shift-calculator',
      'arithmetic-shift-calculator',
      'logical-shift-calculator',
      'rotate-left-calculator',
      'rotate-right-calculator',
      'bitwise-and-calculator',
      'bitwise-or-calculator',
      'bitwise-xor-calculator',
      'bitwise-not-calculator',
      'nand-calculator',
      'nor-calculator',
      'xnor-calculator'
    ]
  },
  {
    slug: 'coding-computer-number',
    name: 'Coding & Computer Number Tools',
    shortDesc: 'ASCII, Unicode, RGB hex codes, IPv4, MAC address, and Unix timestamp converters.',
    longDesc: 'Tools for character encodings and network addressing. Translate text to ASCII binary/hex, convert IPv4 dotted-quads to 32-bit streams, inspect MAC addresses, and decode Unix timestamps.',
    icon: '</>',
    toolSlugs: [
      'ascii-to-binary-converter',
      'binary-to-ascii-converter',
      'ascii-to-hex-converter',
      'hex-to-ascii-converter',
      'unicode-to-hex-converter',
      'unicode-to-binary-converter',
      'rgb-to-hex-converter',
      'hex-to-rgb-converter',
      'ipv4-to-binary-converter',
      'binary-to-ipv4-converter',
      'mac-address-to-binary',
      'mac-address-to-hex',
      'unix-timestamp-to-binary-hex',
      'hex-color-converter',
      'character-to-ascii-to-binary',
      'character-to-ascii-to-hex'
    ]
  },
  {
    slug: 'base-conversion',
    name: 'Base Conversion Tools',
    shortDesc: 'Convert between any arbitrary bases from Base 2 up to Base 36 and custom radices.',
    longDesc: 'Universal radix engines supporting every base from ternary (Base 3) to duodecimal (Base 12) up to Base 36. Convert between any two bases with positional proofs and input validators.',
    icon: '∛',
    toolSlugs: [
      'base-2-converter',
      'base-3-converter',
      'base-4-converter',
      'base-5-converter',
      'base-6-converter',
      'base-7-converter',
      'base-8-converter',
      'base-9-converter',
      'base-10-converter',
      'base-11-converter',
      'base-12-converter',
      'base-13-converter',
      'base-14-converter',
      'base-15-converter',
      'base-16-converter',
      'any-base-to-any-base-converter',
      'base-n-number-validator',
      'custom-base-converter'
    ]
  },
  {
    slug: 'number-system-arithmetic',
    name: 'Number System Arithmetic',
    shortDesc: 'Multi-radix calculators for Base-N addition, subtraction, multiplication, division, modulo, and power.',
    longDesc: 'Perform arithmetic operations directly in non-decimal radices. Add, subtract, multiply, divide, take remainders (modulo), and raise numbers to powers in any base.',
    icon: '÷',
    toolSlugs: [
      'binary-calculator',
      'octal-calculator',
      'hexadecimal-calculator',
      'base-n-addition',
      'base-n-subtraction',
      'base-n-multiplication',
      'base-n-division',
      'base-n-modulo-calculator',
      'base-n-power-calculator'
    ]
  },
  {
    slug: 'number-representation',
    name: 'Number Representation Tools',
    shortDesc: 'Signed/unsigned register ranges, IEEE-754 Single/Double precision float tools.',
    longDesc: 'Analyze how numbers are represented in silicon hardware. Calculate exact limits for 4-bit, 8-bit, 16-bit, 32-bit, and 64-bit signed/unsigned integers and dissect IEEE-754 floats.',
    icon: '📐',
    toolSlugs: [
      'signed-number-calculator',
      'unsigned-number-calculator',
      'integer-range-calculator',
      '4-bit-number-range-calculator',
      '8-bit-number-range-calculator',
      '16-bit-number-range-calculator',
      '32-bit-number-range-calculator',
      '64-bit-number-range-calculator',
      'twos-complement-range-calculator',
      'floating-point-representation-calculator',
      'ieee-754-converter',
      'ieee-754-to-decimal',
      'decimal-to-ieee-754',
      'float32-converter',
      'float64-converter'
    ]
  },
  {
    slug: 'educational',
    name: 'Educational Number System Tools',
    shortDesc: 'Interactive quizzes, arithmetic practice solvers, random generators, formula & cheat sheets.',
    longDesc: 'Test your understanding, practice binary and hexadecimal arithmetic, generate random numbers for homework drills, and consult comprehensive formula and cheat sheets.',
    icon: '🎓',
    toolSlugs: [
      'number-system-quiz',
      'binary-conversion-quiz',
      'hexadecimal-quiz',
      'octal-quiz',
      'complement-quiz',
      'base-conversion-practice',
      'binary-arithmetic-practice',
      'random-number-system-generator',
      'step-by-step-conversion-solver',
      'number-system-formula-sheet',
      'number-system-cheat-sheet'
    ]
  }
];

export const CATEGORIES = CATEGORIES_LIST;

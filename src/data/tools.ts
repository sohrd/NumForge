export interface Tool {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  longDescription: string;
  popular?: boolean;
  colorTheme: 'brand-pink' | 'brand-teal' | 'brand-lavender' | 'brand-peach' | 'brand-ochre' | 'surface-card';
  badge?: string;
  tags: string[];
  url: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  colorTheme: 'brand-pink' | 'brand-teal' | 'brand-lavender' | 'brand-peach' | 'brand-ochre' | 'surface-card';
}

export const CATEGORIES: Category[] = [
  {
    name: 'Number Base Conversion',
    slug: 'base-conversion',
    description: 'Transform numbers between Binary (Base 2), Octal (Base 8), Decimal (Base 10), Hexadecimal (Base 16), and arbitrary bases (Base 2 through 36) with full step-by-step positional expansions.',
    colorTheme: 'brand-pink'
  },
  {
    name: 'Binary & Computer Arithmetic',
    slug: 'binary-arithmetic',
    description: 'Perform precise binary addition, subtraction, multiplication, division, and analyze One’s & Two’s complements across 8-bit, 16-bit, 32-bit, and 64-bit architectures.',
    colorTheme: 'brand-teal'
  },
  {
    name: 'Digital Logic & Gates',
    slug: 'digital-logic',
    description: 'Simulate elementary logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) and generate multi-variable truth tables dynamically.',
    colorTheme: 'brand-lavender'
  },
  {
    name: 'Bitwise Operations & Encodings',
    slug: 'bitwise-encodings',
    description: 'Compute bitwise shifts, masks, IEEE-754 floating point single/double precision bits, BCD (8421), Excess-3, ASCII text encodings, and Gray codes with interactive bit-flippers.',
    colorTheme: 'brand-peach'
  }
];

export const TOOLS: Tool[] = [
  // ==========================================
  // Number Base Conversion
  // ==========================================
  {
    id: 'binary-to-decimal',
    name: 'Binary to Decimal Converter',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Convert base-2 binary strings into standard base-10 decimal numbers with instant power-of-two positional expansion steps.',
    longDescription: 'The Binary to Decimal Converter by NumForge transforms binary digits (0 and 1) into standard decimal values. Each bit is multiplied by 2 raised to its positional exponent (weight) and summed, providing full educational steps, powers of 2 table, and bit breakdown.',
    popular: true,
    colorTheme: 'brand-pink',
    badge: 'Popular',
    tags: [
      'binary to decimal conversion',
      'convert binary to decimal',
      'binary decimal converter',
      'binary to decimal calculator',
      'base 2 to base 10',
      'binary converter',
      'powers of two',
      'binary number validator'
    ],
    url: '/tools/binary-to-decimal',
    metaTitle: 'Binary to Decimal Converter (Base 2 to Base 10) | NumForge',
    metaDescription: 'Convert binary to decimal online. Free binary to decimal conversion calculator, step-by-step base 2 to base 10 positional expansions, and powers of 2 tables.'
  },
  {
    id: 'decimal-to-binary',
    name: 'Decimal to Binary Converter',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Convert any base-10 integer into pure binary format with visual repeated division by 2 and remainder tracking.',
    longDescription: 'Our Decimal to Binary Converter breaks down decimal numbers using the successive division by 2 algorithm. See exactly how quotients and remainders align to forge your binary result, formatted in grouped nibbles and bytes with step-by-step proofs.',
    popular: true,
    colorTheme: 'brand-teal',
    badge: 'Popular',
    tags: [
      'decimal to binary conversion',
      'convert decimal to binary',
      'decimal binary converter',
      'decimal to binary calculator',
      'base 10 to base 2',
      'decimal number to binary',
      'successive division by 2',
      'remainder method'
    ],
    url: '/tools/decimal-to-binary',
    metaTitle: 'Decimal to Binary Converter with Steps (Base 10 to Base 2) | NumForge',
    metaDescription: 'Free decimal to binary conversion tool. Convert decimal to binary with step-by-step repeated division by 2, remainder tables, and grouped nibble bits.'
  },
  {
    id: 'hex-to-decimal',
    name: 'Hexadecimal to Decimal Converter',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Translate hexadecimal strings (0-9, A-F) into decimal with full power-of-16 positional breakdown.',
    longDescription: 'Convert hex code values into decimal integers seamlessly. Ideal for debugging memory addresses, CSS hex color values, assembly offsets, and low-level firmware data with powers-of-16 step-by-step expansions.',
    popular: true,
    colorTheme: 'brand-lavender',
    badge: 'Essential',
    tags: [
      'hexadecimal to decimal conversion',
      'hex to decimal converter',
      'convert hex to decimal',
      'base 16 to base 10',
      'hexadecimal decimal conversion',
      'hex decimal calculator',
      'hexadecimal validator',
      'check hex number'
    ],
    url: '/tools/hex-to-decimal',
    metaTitle: 'Hex to Decimal Converter (Base 16 to Base 10) | NumForge',
    metaDescription: 'Convert hexadecimal to decimal with step-by-step powers of 16. Fast hex to decimal converter and base 16 to base 10 calculator for memory and RGB values.'
  },
  {
    id: 'decimal-to-hex',
    name: 'Decimal to Hexadecimal Converter',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Turn decimal numbers into hexadecimal notation with continuous division by 16 and remainder-to-hex digit conversion.',
    longDescription: 'Convert standard decimal numbers to hexadecimal notation (base 16). Supports large integers, displays standard 0x prefix notation, and tracks remainders matching 0-9 and A-F character mappings.',
    popular: true,
    colorTheme: 'brand-peach',
    badge: 'Popular',
    tags: [
      'decimal to hexadecimal conversion',
      'convert decimal to hex',
      'decimal hex converter',
      'base 10 to base 16',
      'decimal to hex calculator',
      '0x prefix notation'
    ],
    url: '/tools/decimal-to-hex',
    metaTitle: 'Decimal to Hex Converter (Base 10 to Base 16) | NumForge',
    metaDescription: 'Convert decimal to hexadecimal easily. Online decimal to hex conversion calculator with step-by-step division by 16 and remainder-to-hex character mapping.'
  },
  {
    id: 'binary-to-hex',
    name: 'Binary to Hexadecimal Converter',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Direct 4-bit nibble mapping between binary strings and hexadecimal symbols without intermediate decimal conversions.',
    longDescription: 'Convert binary strings to hexadecimal using the direct 4-bit nibble grouping method. Visualize left-padding, 4-bit grouping tables, and direct hex character translation.',
    popular: false,
    colorTheme: 'brand-ochre',
    tags: [
      'binary to hex conversion',
      'convert binary to hexadecimal',
      'binary hex converter',
      'base 2 to base 16',
      'binary hexadecimal conversion',
      'binary to hex converter',
      '4-bit nibble grouping'
    ],
    url: '/tools/binary-to-hex',
    metaTitle: 'Binary to Hex Converter with 4-Bit Nibbles (Base 2 to Base 16) | NumForge',
    metaDescription: 'Convert binary to hexadecimal using direct 4-bit nibble grouping. Free binary to hex conversion calculator with padding steps and hex lookup tables.'
  },
  {
    id: 'hex-to-binary',
    name: 'Hexadecimal to Binary Converter',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Expand each hexadecimal digit into its corresponding 4-bit binary nibble instantly.',
    longDescription: 'Convert hexadecimal characters into binary bit patterns with 1-to-4 nibble expansion. Includes bit toggles, space-grouped bytes, and direct hex mapping charts.',
    popular: false,
    colorTheme: 'surface-card',
    tags: [
      'hex to binary conversion',
      'convert hexadecimal to binary',
      'hexadecimal binary converter',
      'base 16 to base 2',
      'hex binary conversion',
      'hexadecimal to binary converter'
    ],
    url: '/tools/hex-to-binary',
    metaTitle: 'Hex to Binary Converter (Base 16 to Base 2) | NumForge',
    metaDescription: 'Convert hexadecimal to binary online. Instant 4-bit expansion per hex digit, formatted nibbles and bytes, and base 16 to base 2 binary converter.'
  },
  {
    id: 'decimal-to-octal',
    name: 'Decimal to Octal Converter',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Convert base-10 decimal numbers to base-8 octal with step-by-step repeated division by 8.',
    longDescription: 'Transform decimal integers into octal strings using the successive division by 8 algorithm. View quotient remainders and formatted base-8 results.',
    popular: false,
    colorTheme: 'brand-teal',
    tags: [
      'decimal to octal conversion',
      'convert decimal to octal',
      'decimal octal converter',
      'base 10 to base 8',
      'decimal octal conversion',
      'decimal to octal converter'
    ],
    url: '/tools/decimal-to-octal',
    metaTitle: 'Decimal to Octal Converter (Base 10 to Base 8) | NumForge',
    metaDescription: 'Convert decimal to octal with step-by-step division by 8. Free online decimal to octal conversion calculator with remainder tracking.'
  },
  {
    id: 'octal-to-decimal',
    name: 'Octal to Decimal Converter',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Convert base-8 octal values into standard decimal numbers using powers of 8 positional expansions.',
    longDescription: 'Convert octal numbers to decimal representation. Step-by-step powers-of-eight weighting table explains how each octal digit translates into base 10.',
    popular: false,
    colorTheme: 'brand-pink',
    tags: [
      'octal to decimal conversion',
      'convert octal to decimal',
      'octal decimal converter',
      'base 8 to base 10',
      'octal decimal conversion',
      'octal to decimal converter',
      'octal number validator'
    ],
    url: '/tools/octal-to-decimal',
    metaTitle: 'Octal to Decimal Converter (Base 8 to Base 10) | NumForge',
    metaDescription: 'Convert octal to decimal with powers of 8. Free octal to decimal conversion calculator, base 8 to base 10 proofs, and positional expansions.'
  },
  {
    id: 'binary-to-octal',
    name: 'Binary to Octal Converter',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Convert binary strings into octal numbers using direct 3-bit triplet grouping.',
    longDescription: 'Convert binary to octal easily using 3-bit grouping (000 to 111). Visualize bit padding, Unix chmod permission mappings, and step-by-step octal outputs.',
    popular: false,
    colorTheme: 'brand-lavender',
    tags: [
      'binary to octal conversion',
      'convert binary to octal',
      'binary octal converter',
      'base 2 to base 8',
      'binary octal conversion',
      'binary to octal converter'
    ],
    url: '/tools/binary-to-octal',
    metaTitle: 'Binary to Octal Converter (Base 2 to Base 8) | NumForge',
    metaDescription: 'Convert binary to octal using 3-bit group triplets. Step-by-step base 2 to base 8 binary octal converter and Unix chmod permissions calculator.'
  },
  {
    id: 'octal-to-binary',
    name: 'Octal to Binary Converter',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Convert octal digits (0-7) directly into 3-bit binary triplets with grouped output formats.',
    longDescription: 'Translate each octal digit directly into its 3-bit binary equivalent without decimal intermediate steps. Includes bit pattern displays and formatted bytes.',
    popular: false,
    colorTheme: 'brand-ochre',
    tags: [
      'octal to binary conversion',
      'convert octal to binary',
      'octal binary converter',
      'base 8 to base 2',
      'octal binary conversion',
      'octal to binary converter'
    ],
    url: '/tools/octal-to-binary',
    metaTitle: 'Octal to Binary Converter (Base 8 to Base 2) | NumForge',
    metaDescription: 'Convert octal to binary with instant 3-bit expansion. Free octal binary converter, base 8 to base 2 calculator, and triplet mapping.'
  },
  {
    id: 'octal-to-hex',
    name: 'Octal to Hexadecimal Converter',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Convert octal numbers to hexadecimal using intermediate 3-bit to 4-bit binary regrouping.',
    longDescription: 'Convert base-8 octal strings to base-16 hexadecimal notation. Shows the binary bridging step: expand octal into 3-bit triplets, regroup into 4-bit nibbles, and map to hex symbols.',
    popular: false,
    colorTheme: 'brand-peach',
    tags: [
      'octal to hex conversion',
      'convert octal to hexadecimal',
      'octal hex converter',
      'base 8 to base 16',
      'octal hexadecimal conversion',
      'octal to hex converter',
      'octal hex calculator'
    ],
    url: '/tools/octal-to-hex',
    metaTitle: 'Octal to Hex Converter (Base 8 to Base 16) | NumForge',
    metaDescription: 'Convert octal to hexadecimal via 3-bit to 4-bit binary grouping. Free octal to hex conversion calculator with step-by-step intermediate nibbles.'
  },
  {
    id: 'hex-to-octal',
    name: 'Hexadecimal to Octal Converter',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Convert hexadecimal (base 16) to octal (base 8) via 4-bit to 3-bit binary restructuring.',
    longDescription: 'Convert hex code strings to octal notation with step-by-step binary restructuring. Each hex digit expands to a 4-bit nibble, regrouped into 3-bit octal triplets.',
    popular: false,
    colorTheme: 'surface-card',
    tags: [
      'hex to octal conversion',
      'convert hexadecimal to octal',
      'hex octal converter',
      'base 16 to base 8',
      'hexadecimal octal conversion',
      'hex to octal converter',
      'hex octal calculator'
    ],
    url: '/tools/hex-to-octal',
    metaTitle: 'Hex to Octal Converter (Base 16 to Base 8) | NumForge',
    metaDescription: 'Convert hexadecimal to octal online. Step-by-step hex to octal conversion calculator, base 16 to base 8 binary bridge, and 3-bit grouping.'
  },
  {
    id: 'base-converter',
    name: 'Universal Base-N Converter (Base 2 to 36)',
    category: 'Number Base Conversion',
    categorySlug: 'base-conversion',
    description: 'Convert numbers across any custom radix from Base 2 up to Base 36 with simultaneous multi-base outputs and arithmetic.',
    longDescription: 'An all-in-one universal number base converter. Convert between binary (base 2), ternary (base 3), quaternary (base 4), base 5, base 6, base 7, octal (base 8), base 9, decimal (base 10), base 11, duodecimal (base 12), base 13, 14, 15, hexadecimal (base 16), up to base 36 with custom radix validation and base N arithmetic.',
    popular: true,
    colorTheme: 'brand-pink',
    badge: 'Universal',
    tags: [
      'any base converter',
      'base conversion calculator',
      'arbitrary base converter',
      'number base converter',
      'base 2 converter',
      'base 3 converter',
      'ternary converter',
      'base 4 converter',
      'quaternary converter',
      'base 5 converter',
      'base 6 converter',
      'base 7 converter',
      'base 8 converter',
      'base 9 converter',
      'base 10 converter',
      'base 11 converter',
      'base 12 converter',
      'duodecimal converter',
      'base 16 converter',
      'base number validator',
      'base N validator',
      'custom base converter',
      'arbitrary base conversion',
      'base N addition',
      'base N subtraction',
      'base N multiplication',
      'base N division',
      'base N modulo'
    ],
    url: '/tools/base-converter',
    metaTitle: 'Any Base Converter (Base 2 to 36) & Radix Calculator | NumForge',
    metaDescription: 'Convert between any number bases from Base 2 to Base 36. Arbitrary base converter, custom radix calculator, base N addition, subtraction, division, and validator.'
  },

  // ==========================================
  // Binary & Computer Arithmetic
  // ==========================================
  {
    id: 'binary-calculator',
    name: 'Binary Arithmetic Calculator',
    category: 'Binary & Computer Arithmetic',
    categorySlug: 'binary-arithmetic',
    description: 'Add, subtract, multiply, and divide binary numbers with step-by-step carries, borrows, and column alignments.',
    longDescription: 'Perform full binary arithmetic calculations with interactive step-by-step column visualizers. Supports binary addition with carry propagation, binary subtraction with borrows, binary multiplication (partial products), and binary long division.',
    popular: true,
    colorTheme: 'brand-teal',
    badge: 'Interactive',
    tags: [
      'binary addition',
      'add binary numbers',
      'binary addition calculator online',
      'binary number addition',
      'binary subtraction',
      'subtract binary numbers',
      'binary subtraction calculator',
      'binary number subtraction',
      'binary multiplication',
      'multiply binary numbers',
      'binary multiplication calculator',
      'binary division',
      'divide binary numbers',
      'binary division calculator',
      'binary arithmetic practice',
      'binary math questions'
    ],
    url: '/tools/binary-calculator',
    metaTitle: 'Binary Calculator — Addition, Subtraction, Multiplication, Division | NumForge',
    metaDescription: 'Online binary calculator for binary addition, subtraction, multiplication, and division. Step-by-step carries, borrows, and column alignments.'
  },
  {
    id: 'twos-complement',
    name: 'Two’s & One’s Complement Calculator',
    category: 'Binary & Computer Arithmetic',
    categorySlug: 'binary-arithmetic',
    description: 'Calculate 1’s, 2’s, 9’s, and 10’s complements for signed integers across 8-bit, 16-bit, 32-bit, and 64-bit architectures.',
    longDescription: 'Understand how CPUs represent signed negative numbers. Calculate One’s Complement (bitwise NOT), Two’s Complement (+1), Nine’s Complement, and Ten’s Complement. Includes sign bit tracking, bit width selectors, and asymmetric range visualization.',
    popular: true,
    colorTheme: 'brand-lavender',
    badge: 'Essential',
    tags: [
      'twos complement calculator',
      '2s complement',
      'binary twos complement',
      'ones complement calculator',
      '1s complement',
      'binary ones complement',
      'nines complement calculator',
      '9s complement',
      'tens complement calculator',
      '10s complement',
      'ones to twos complement',
      '1s to 2s complement',
      'complement converter',
      'complement quiz'
    ],
    url: '/tools/twos-complement',
    metaTitle: 'Two’s Complement & 1’s Complement Calculator | NumForge',
    metaDescription: 'Calculate Two’s Complement and One’s Complement for signed integers in 8, 16, 32, and 64 bits. Includes 9’s complement, 10’s complement, and range analysis.'
  },
  {
    id: 'signed-magnitude-calculator',
    name: 'Signed Binary & Sign Magnitude Converter',
    category: 'Binary & Computer Arithmetic',
    categorySlug: 'binary-arithmetic',
    description: 'Compare Signed Magnitude, 1’s Complement, and 2’s Complement signed binary number representations side-by-side.',
    longDescription: 'Explore how early computers represented signed numbers versus modern machines. Contrast the dual-zero (+0 and -0) anomaly in signed magnitude with the clean single-zero asymmetry in Two’s Complement.',
    popular: false,
    colorTheme: 'brand-peach',
    tags: [
      'signed binary calculator',
      'signed binary numbers',
      'signed binary arithmetic',
      'sign magnitude converter',
      'sign magnitude representation',
      'binary sign magnitude',
      'ones complement representation',
      '1s complement representation',
      'twos complement representation',
      '2s complement representation',
      'signed binary representation'
    ],
    url: '/tools/signed-magnitude-calculator',
    metaTitle: 'Signed Binary & Sign Magnitude Converter | NumForge',
    metaDescription: 'Convert numbers to Signed Magnitude, 1’s Complement, and 2’s Complement representations. Compare signed binary numbers, sign bits, and negative binary.'
  },
  {
    id: 'integer-range-calculator',
    name: 'Signed & Unsigned Integer Range Calculator',
    category: 'Binary & Computer Arithmetic',
    categorySlug: 'binary-arithmetic',
    description: 'Calculate signed and unsigned integer ranges for 4-bit, 8-bit, 16-bit, 32-bit, and 64-bit architectures.',
    longDescription: 'Determine exact integer limits and representation boundaries for arbitrary bit widths. Computes signed range (-2^(n-1) to +2^(n-1)-1) and unsigned range (0 to 2^n - 1) for nibbles (4-bit), bytes (8-bit), words (16-bit), dwords (32-bit), and qwords (64-bit).',
    popular: false,
    colorTheme: 'brand-ochre',
    tags: [
      'signed integer range',
      'signed number range calculator',
      'integer range',
      'integer limits',
      'number range',
      '4 bit range',
      '4-bit integer range',
      '4 bit number calculator',
      '8 bit range',
      '8-bit integer range',
      '8 bit number calculator',
      '16 bit range',
      '16-bit integer range',
      '32 bit range',
      '32-bit integer range',
      '64 bit range',
      '64-bit integer range',
      'two\'s complement range',
      '2s complement range calculator',
      'signed number calculator',
      'signed integer calculator',
      'unsigned number calculator',
      'unsigned integer calculator'
    ],
    url: '/tools/integer-range-calculator',
    metaTitle: 'Integer Range Calculator (4, 8, 16, 32, 64-bit Limits) | NumForge',
    metaDescription: 'Calculate signed and unsigned integer ranges for 4-bit, 8-bit, 16-bit, 32-bit, and 64-bit architectures. View two’s complement range, min/max limits, and bit boundaries.'
  },

  // ==========================================
  // Digital Logic & Gates
  // ==========================================
  {
    id: 'logic-gates',
    name: 'Logic Gate Simulator (AND, OR, XOR, NOT, NAND, NOR, XNOR)',
    category: 'Digital Logic & Gates',
    categorySlug: 'digital-logic',
    description: 'Interactive simulator for AND, OR, NOT, NAND, NOR, XOR, and XNOR gates with live circuit toggles and full truth tables.',
    longDescription: 'Simulate elementary digital logic gates in real time. Toggle digital inputs (0 or 1), view output logic states, inspect ANSI/IEEE gate schematic symbols, and review complete formal Boolean truth tables and expressions.',
    popular: true,
    colorTheme: 'brand-pink',
    badge: 'Simulator',
    tags: [
      'bitwise AND',
      'AND calculator',
      'binary AND operation',
      'bitwise OR',
      'OR calculator',
      'binary OR operation',
      'bitwise XOR',
      'XOR calculator',
      'binary XOR operation',
      'bitwise NOT',
      'NOT calculator',
      'binary NOT operation',
      'NAND calculator',
      'NAND gate calculator',
      'binary NAND',
      'NOR calculator',
      'NOR gate calculator',
      'binary NOR',
      'XNOR calculator',
      'XNOR gate calculator',
      'binary XNOR'
    ],
    url: '/tools/logic-gates',
    metaTitle: 'Logic Gates Simulator & Truth Tables (AND, OR, XOR, NAND, NOR) | NumForge',
    metaDescription: 'Interactive Logic Gate Simulator. Test AND, OR, XOR, NOT, NAND, NOR, and XNOR gates with live circuit toggles, ANSI schematic diagrams, and truth tables.'
  },
  {
    id: 'boolean-truth-table',
    name: 'Boolean Logic Truth Table Generator',
    category: 'Digital Logic & Gates',
    categorySlug: 'digital-logic',
    description: 'Evaluate Boolean algebraic expressions and generate exhaustive multi-variable truth tables automatically.',
    longDescription: 'Input multi-variable Boolean expressions involving A, B, C, D with operators AND (·), OR (+), NOT (¬), and XOR (⊕). The generator evaluates all 2^n state permutations and highlights minterms and maxterms.',
    popular: true,
    colorTheme: 'brand-teal',
    tags: [
      'boolean algebra',
      'truth table generator',
      'minterms',
      'maxterms',
      'digital logic',
      'boolean expressions',
      'logic gate calculator'
    ],
    url: '/tools/boolean-truth-table',
    metaTitle: 'Boolean Expression Truth Table Generator | NumForge',
    metaDescription: 'Generate complete truth tables for custom Boolean expressions. Supports AND, OR, NOT, XOR, conditional logic, minterms, and step-by-step intermediate evaluations.'
  },

  // ==========================================
  // Bitwise Operations & Encodings
  // ==========================================
  {
    id: 'bitwise-calculator',
    name: 'Bitwise Operations & Bit Shift Calculator',
    category: 'Bitwise Operations & Encodings',
    categorySlug: 'bitwise-encodings',
    description: 'Calculate Bitwise AND, OR, XOR, NOT, Left Shift, Right Shift, and Zero-fill Right Shift with an interactive 32-bit click board and storage calculator.',
    longDescription: 'An interactive bitboard visualizer for programmers and embedded engineers. Compute bitwise AND, OR, XOR, NOT, shift left (<<), sign-propagating shift right (>>), arithmetic shift, and logical rotate left/right with bits-to-bytes conversions.',
    popular: true,
    colorTheme: 'brand-lavender',
    badge: 'Developer Tool',
    tags: [
      'binary bit shift',
      'bit shift calculator',
      'binary shift calculator',
      'left shift calculator',
      'bitwise left shift',
      'binary left shift',
      'right shift calculator',
      'bitwise right shift',
      'binary right shift',
      'arithmetic shift',
      'arithmetic shift calculator',
      'arithmetic bit shift',
      'logical shift',
      'logical shift calculator',
      'logical bit shifting',
      'rotate left calculator',
      'bit rotate left',
      'circular left shift',
      'rotate right calculator',
      'bit rotate right',
      'circular right shift',
      'bit calculator',
      'calculate bits',
      'bits to bytes',
      'bit byte converter',
      'convert bits to bytes',
      'bytes to KB',
      'bytes to MB',
      'bytes to GB',
      'bytes to TB',
      'byte size converter'
    ],
    url: '/tools/bitwise-calculator',
    metaTitle: 'Bitwise Operations & Bit Shift Calculator (AND, OR, XOR, Shifts) | NumForge',
    metaDescription: 'Calculate Bitwise AND, OR, XOR, NOT, Logical Left/Right Shift, Arithmetic Shift, and Circular Rotations with an interactive 32-bit clickboard and bits-to-bytes converter.'
  },
  {
    id: 'binary-fraction-converter',
    name: 'Binary Fraction & Decimal Converter',
    category: 'Bitwise Operations & Encodings',
    categorySlug: 'bitwise-encodings',
    description: 'Convert decimal fractions into binary fractions and binary floating fractional numbers into decimal with step-by-step proofs.',
    longDescription: 'Convert numbers with decimal fractions (e.g., 0.625 or 13.375) into binary format using repeated multiplication by 2. Understand fractional powers of two (2^-1 = 0.5, 2^-2 = 0.25, 2^-3 = 0.125) and detect non-terminating repeating binary fractions.',
    popular: true,
    colorTheme: 'brand-peach',
    badge: 'Math Precision',
    tags: [
      'binary fraction converter',
      'decimal fraction to binary',
      'binary fractional number converter',
      'fraction to binary converter',
      'decimal fractional binary',
      'convert decimal fraction',
      'binary floating point converter',
      'binary floating point calculator',
      'floating point binary'
    ],
    url: '/tools/binary-fraction-converter',
    metaTitle: 'Binary Fraction Converter (Decimal Fraction to Binary) | NumForge',
    metaDescription: 'Convert decimal fractions to binary and binary fractional numbers to decimal. Step-by-step repeated multiplication by 2 with fractional bit precision.'
  },
  {
    id: 'ieee-754-converter',
    name: 'IEEE-754 Floating-Point Converter (Float32 & Float64)',
    category: 'Bitwise Operations & Encodings',
    categorySlug: 'bitwise-encodings',
    description: 'Convert real decimal numbers into 32-bit Single Precision and 64-bit Double Precision IEEE-754 binary bit fields.',
    longDescription: 'Dissect real decimal numbers into IEEE-754 binary floating-point representation. View color-coded Sign Bit, Biased Exponent (bias 127/1023), and Normalized Significand/Mantissa with exact reconstructed decimal values and subnormal flags.',
    popular: true,
    colorTheme: 'brand-ochre',
    badge: 'Advanced CS',
    tags: [
      'ieee 754 converter',
      'ieee 754 calculator',
      'floating point converter',
      'ieee 754 to decimal',
      'float to decimal',
      'ieee decimal conversion',
      'decimal to ieee 754',
      'decimal floating point representation',
      'float32 converter',
      '32 bit floating point converter',
      'float64 converter',
      '64 bit floating point converter',
      'floating point representation',
      'floating point calculator'
    ],
    url: '/tools/ieee-754-converter',
    metaTitle: 'IEEE 754 Floating-Point Converter (32-bit & 64-bit) | NumForge',
    metaDescription: 'Convert decimal to IEEE-754 Single (Float32) and Double (Float64) precision. Dissect Sign bit, Biased Exponent, and Normalized Mantissa with step-by-step proofs.'
  },
  {
    id: 'gray-code-converter',
    name: 'Gray Code to Binary & Binary to Gray Converter',
    category: 'Bitwise Operations & Encodings',
    categorySlug: 'bitwise-encodings',
    description: 'Convert standard binary to Reflected Binary Gray Code and vice versa with XOR derivation algorithms.',
    longDescription: 'Convert between natural Binary and Reflected Gray Code (unit-distance code). Understand how rotary encoders and digital telecommunications prevent spurious switching transients using consecutive single-bit transitions.',
    popular: false,
    colorTheme: 'brand-pink',
    tags: [
      'binary to gray code',
      'binary gray code converter',
      'convert binary to gray code',
      'gray code to binary',
      'gray code binary converter',
      'convert gray code to binary',
      'gray code',
      'reflected binary',
      'unit distance code'
    ],
    url: '/tools/gray-code-converter',
    metaTitle: 'Gray Code to Binary & Binary to Gray Converter | NumForge',
    metaDescription: 'Convert Binary to Gray Code and Gray Code to Binary with XOR formulas, rotary encoder explanations, and step-by-step derivation tables.'
  },
  {
    id: 'bcd-converter',
    name: 'BCD (Binary Coded Decimal) & Excess-3 Converter',
    category: 'Bitwise Operations & Encodings',
    categorySlug: 'bitwise-encodings',
    description: 'Encode decimal integers into 8421 BCD nibbles and Excess-3 code, and decode raw bit sequences with packed/unpacked views.',
    longDescription: 'Binary Coded Decimal encodes each decimal digit (0 through 9) into its own 4-bit binary representation. Convert decimal numbers to 8421 BCD and Excess-3 (XS-3) code, inspect packed versus unpacked layouts, and detect invalid BCD states (1010-1111).',
    popular: false,
    colorTheme: 'brand-teal',
    tags: [
      'binary to bcd',
      'binary bcd converter',
      'convert binary to bcd',
      'bcd to binary',
      'bcd binary converter',
      'convert bcd to binary',
      'binary to excess 3',
      'binary excess-3 converter',
      'convert binary to excess-3',
      'excess-3 to binary',
      'excess 3 binary converter',
      'convert excess-3 to binary',
      'decimal to bcd',
      'decimal bcd converter',
      'convert decimal to bcd',
      'bcd calculator'
    ],
    url: '/tools/bcd-converter',
    metaTitle: 'BCD Converter & Excess-3 Code Calculator (8421 BCD) | NumForge',
    metaDescription: 'Convert decimal and binary to 8421 BCD and Excess-3 code. Packed and unpacked BCD layouts, invalid state detection, and Excess-3 to binary conversion.'
  },
  {
    id: 'ascii-converter',
    name: 'ASCII, Hex, Binary & Text Encoding Converter',
    category: 'Bitwise Operations & Encodings',
    categorySlug: 'bitwise-encodings',
    description: 'Convert ASCII text and characters into Binary bit patterns, Hexadecimal codes, Unicode codepoints, RGB hex colors, and IPv4 addresses.',
    longDescription: 'Comprehensive character and system encoding translator. Convert ASCII text to binary, binary to ASCII, ASCII to hex, hex to ASCII, Unicode codepoints, RGB colors to hex, and dotted-decimal IPv4 addresses to 32-bit binary representation.',
    popular: true,
    colorTheme: 'brand-lavender',
    badge: 'Multi-Encoder',
    tags: [
      'ascii to binary',
      'ascii binary converter',
      'character to binary',
      'binary to ascii',
      'binary ascii converter',
      'binary character converter',
      'ascii to hex',
      'ascii hexadecimal converter',
      'character to hex',
      'hex to ascii',
      'hexadecimal ascii converter',
      'unicode to hex',
      'unicode hexadecimal converter',
      'character unicode hex',
      'unicode to binary',
      'unicode binary converter',
      'rgb to hex',
      'rgb hexadecimal converter',
      'color rgb to hex',
      'hex to rgb',
      'hexadecimal rgb converter',
      'color hex to rgb',
      'ipv4 to binary',
      'ip address binary converter',
      'ipv4 binary',
      'binary to ipv4',
      'binary ip converter',
      'binary ip address',
      'mac address to binary',
      'mac binary converter',
      'mac address hex',
      'mac hexadecimal converter',
      'unix timestamp converter',
      'timestamp to binary',
      'timestamp to hexadecimal',
      'hex color converter',
      'hexadecimal color converter',
      'hex color tool',
      'character ascii binary converter'
    ],
    url: '/tools/ascii-converter',
    metaTitle: 'ASCII to Binary, Hex & Text Converter | NumForge',
    metaDescription: 'Convert ASCII text to binary, ASCII to hex, binary to ASCII, and hex to ASCII. Supports Unicode, RGB to hex color codes, and IPv4 address to binary.'
  }
];

import { ALL_FAQS, FAQ_SCHEMA } from './faqs';
export const FAQS = ALL_FAQS;
export { ALL_FAQS, FAQ_SCHEMA };

import { ARTICLES } from './articles';
export { ARTICLES };
export const LEARNING_GUIDES = ARTICLES;

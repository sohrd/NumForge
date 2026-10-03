import type { ToolDefinition } from '../types';

export const HEX_TOOLS: ToolDefinition[] = [
  {
    slug: 'hex-to-binary',
    name: 'Hex to Binary',
    categorySlug: 'hexadecimal',
    categoryName: 'Hexadecimal Tools',
    secondaryCategories: ['number-system', 'binary'],
    shortDesc: 'Convert hex characters into 4-bit binary nibbles instantly with zero latency.',
    metaTitle: 'Hex to Binary Converter – Convert Hexadecimal to Binary Online',
    metaDesc: 'Convert Hex to Binary online with 4-bit nibble expansion proofs, 0x prefix support, and instant calculations.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Hex String (0-9, A-F)',
      primaryPlaceholder: 'e.g. 2A or 0xFF',
      defaultValue: '2A',
      helpText: 'Enter hexadecimal characters.',
      defaultBase: 16,
      defaultTargetBase: 2
    },
    whatIs: 'Hex to binary conversion translates base-16 hexadecimal numbers into base-2 binary bit patterns. Every hexadecimal digit directly corresponds to exactly four binary bits (one nibble).',
    howItWorks: 'Take each hex character and replace it with its 4-bit binary representation: 0=0000, 1=0001, ..., A=1010, B=1011, C=1100, D=1101, E=1110, F=1111. Concatenate all nibbles.',
    formula: 'h_i \\rightarrow [b_3 b_2 b_1 b_0]_2 \\quad \\text{where } h_i = 8b_3 + 4b_2 + 2b_1 + b_0',
    example: 'Convert 2A to binary:\n2 -> 0010\nA -> 1010\nConcatenating: 00101010_2 (or 101010_2 without leading zeros).',
    rules: [
      'Each hex digit must expand into exactly 4 bits.',
      'Characters A through F represent values 10 through 15.',
      'Case does not matter (a=A).'
    ],
    applications: [
      'Translating memory addresses into binary cache lines and tag bits.',
      'Converting machine opcodes into FPGA logic control lines.',
      'Analyzing cryptography keys and digital signatures.'
    ],
    mistakes: [
      'Omitting leading zeros within a 4-bit group (e.g. writing 2 as 10 instead of 0010).',
      'Entering non-hex letters like G or H.'
    ],
    faqs: [
      {
        question: 'What is hex A in binary?',
        answer: 'Hex A equals binary 1010 (decimal 10).'
      }
    ],
    relatedSlugs: ['binary-to-hex', 'hex-to-decimal', 'hexadecimal-to-binary']
  },
  {
    slug: 'binary-to-hex',
    name: 'Binary to Hex',
    categorySlug: 'hexadecimal',
    categoryName: 'Hexadecimal Tools',
    secondaryCategories: ['number-system', 'binary'],
    shortDesc: 'Convert binary strings into hexadecimal notation by grouping into 4-bit nibbles.',
    metaTitle: 'Binary to Hex Converter – Convert Binary to Hexadecimal Online',
    metaDesc: 'Convert binary to hex online with 4-bit grouping steps, uppercase/lowercase formats, and instant results.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Binary String',
      primaryPlaceholder: 'e.g. 10111100',
      defaultValue: '10111100',
      helpText: 'Enter binary sequence (0 and 1).',
      defaultBase: 2,
      defaultTargetBase: 16
    },
    whatIs: 'Binary to hex conversion condenses lengthy binary bitstreams into compact, human-readable hexadecimal representation where each 4 bits represent a single hex digit.',
    howItWorks: 'Group binary bits into clusters of 4 starting from the rightmost bit. Pad the leftmost group with zeros if needed. Convert each group into its hex digit (0-9, A-F).',
    formula: '\\text{hex}_k = \\sum_{i=0}^3 b_i 2^i',
    example: 'Convert 10111100_2 to hex:\nGroup by 4s: 1011 | 1100\n1011_2 = 11 -> B\n1100_2 = 12 -> C\nResult: BC_{16}.',
    rules: [
      'Group bits from right to left.',
      'Pad leftmost group with zeros if fewer than 4 bits.'
    ],
    applications: [
      'Condensing 32-bit and 64-bit binary machine code into readable hex bytes.',
      'Inspecting network packet traces and socket memory dumps.',
      'Configuring microcontroller register bitmasks.'
    ],
    mistakes: [
      'Grouping from left to right.',
      'Grouping into 3 bits instead of 4 bits.'
    ],
    faqs: [
      {
        question: 'What is 1100 in hex?',
        answer: '1100 in binary equals C in hexadecimal (decimal 12).'
      }
    ],
    relatedSlugs: ['hex-to-binary', 'binary-to-hexadecimal', 'hex-to-decimal']
  },
  {
    slug: 'hex-to-decimal',
    name: 'Hex to Decimal',
    categorySlug: 'hexadecimal',
    categoryName: 'Hexadecimal Tools',
    secondaryCategories: ['number-system'],
    shortDesc: 'Convert hexadecimal strings into base-10 decimal numbers using positional powers of 16.',
    metaTitle: 'Hex to Decimal Converter – Convert Hexadecimal to Decimal Online',
    metaDesc: 'Convert hex to decimal numbers online with step-by-step power-of-16 expansion proofs and instant computation.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Hexadecimal String',
      primaryPlaceholder: 'e.g. 2F or 1A4',
      defaultValue: '2F',
      helpText: 'Enter hex characters (0-9, A-F).',
      defaultBase: 16,
      defaultTargetBase: 10
    },
    whatIs: 'Hex to decimal conversion calculates the base-10 numerical equivalent of a hexadecimal value by multiplying each digit by its power-of-16 positional weight.',
    howItWorks: 'Substitute letters A through F with their decimal values 10 through 15. Multiply each digit by 16^i where i is its 0-indexed position from right to left, and sum the products.',
    formula: 'V_{10} = \\sum_{i=0}^{n-1} h_i 16^i',
    example: 'Convert 2F_{16} to decimal:\n(2 × 16^1) + (15 × 16^0) = 32 + 15 = 47_{10}.',
    rules: [
      'Digits A, B, C, D, E, F represent 10, 11, 12, 13, 14, 15.',
      'Case-insensitive (2f is identical to 2F).'
    ],
    applications: [
      'Translating memory addresses into decimal byte offsets.',
      'Converting CSS hex colors into decimal RGB values.',
      'Debugging embedded systems registers.'
    ],
    mistakes: [
      'Treating letters as their alphabetical index (e.g. A as 1 instead of 10).',
      'Confusing base 16 with base 10.'
    ],
    faqs: [
      {
        question: 'What is 10 in hex in decimal?',
        answer: '10 in hexadecimal is 16 in decimal (1×16 + 0×1 = 16).'
      }
    ],
    relatedSlugs: ['decimal-to-hex', 'hexadecimal-to-decimal', 'hex-to-binary']
  },
  {
    slug: 'decimal-to-hex',
    name: 'Decimal to Hex',
    categorySlug: 'hexadecimal',
    categoryName: 'Hexadecimal Tools',
    secondaryCategories: ['number-system'],
    shortDesc: 'Convert decimal integers into hexadecimal strings with successive division by 16.',
    metaTitle: 'Decimal to Hex Converter – Convert Base 10 to Hexadecimal Online',
    metaDesc: 'Convert decimal numbers to hex online with repeated division by 16 proofs and letter mapping (A-F).',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Decimal Number',
      primaryPlaceholder: 'e.g. 255 or 1024',
      defaultValue: '255',
      helpText: 'Enter any non-negative base 10 integer.',
      defaultBase: 10,
      defaultTargetBase: 16
    },
    whatIs: 'Decimal to hex conversion transforms standard base-10 numbers into base-16 hexadecimal strings.',
    howItWorks: 'Divide the decimal number repeatedly by 16. Record remainders, mapping 10-15 to A-F. Read remainders bottom to top to assemble the hex string.',
    formula: 'Q_k = \\lfloor Q_{k-1} / 16 \\rfloor, \\quad r_k = Q_{k-1} \\pmod{16}',
    example: 'Convert 175 to hex:\n175 / 16 = 10 remainder 15 (F)\n10 / 16 = 0 remainder 10 (A)\nReading bottom to top gives: AF_{16}.',
    rules: [
      'Remainders from 10 to 15 map to A through F.',
      'Only valid base-10 digits 0-9 are accepted in input.'
    ],
    applications: [
      'Generating hex color codes from RGB decimal channels (0-255).',
      'Formatting pointer addresses in debugging logs.',
      'Writing binary firmware patch files.'
    ],
    mistakes: [
      'Writing remainders greater than 9 as numbers instead of letters (e.g. writing 1015 instead of AF).',
      'Dividing by 10 instead of 16.'
    ],
    faqs: [
      {
        question: 'What is 100 in hex?',
        answer: '100 in decimal equals 64 in hexadecimal (6×16 + 4 = 100).'
      }
    ],
    relatedSlugs: ['hex-to-decimal', 'decimal-to-hexadecimal', 'decimal-to-binary']
  },
  {
    slug: 'hex-to-octal',
    name: 'Hex to Octal',
    categorySlug: 'hexadecimal',
    categoryName: 'Hexadecimal Tools',
    secondaryCategories: ['octal', 'number-system'],
    shortDesc: 'Convert hexadecimal strings into octal format via 4-bit to 3-bit binary regrouping.',
    metaTitle: 'Hex to Octal Converter – Convert Hexadecimal to Octal Online',
    metaDesc: 'Convert hex to octal online with step-by-step binary bridging (4-bit nibbles to 3-bit triplets).',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Hexadecimal String',
      primaryPlaceholder: 'e.g. 7F or 1A',
      defaultValue: '7F',
      helpText: 'Enter hex digits (0-9, A-F).',
      defaultBase: 16,
      defaultTargetBase: 8
    },
    whatIs: 'Hex to octal conversion transforms base-16 strings into base-8 using binary as an intermediate bridge.',
    howItWorks: 'Expand each hex digit into a 4-bit binary nibble. Regroup the resulting binary string into 3-bit triplets from right to left. Map each 3-bit triplet to its octal digit (0-7).',
    formula: '\\text{Hex} \\xrightarrow{\\text{4-bit}} \\text{Binary} \\xrightarrow{\\text{3-bit}} \\text{Octal}',
    example: 'Convert 7F_{16} to octal:\n7 -> 0111\nF -> 1111\nBinary: 01111111_2\nGroup by 3s: 001 | 111 | 111\n001=1, 111=7, 111=7\nOctal: 177_8.',
    rules: [
      'Maintain leading zeros when expanding hex into 4-bit nibbles.',
      'Regroup bits from right to left.'
    ],
    applications: [
      'Translating memory permissions into octal file permission masks.',
      'Mainframe legacy system emulation and instruction decoding.',
      'Computer architecture lab coursework.'
    ],
    mistakes: [
      'Dropping zeros during 4-bit binary expansion.',
      'Regrouping from left to right.'
    ],
    faqs: [
      {
        question: 'What is 0xFF in octal?',
        answer: '0xFF equals 377 in octal (both equal 255 in decimal).'
      }
    ],
    relatedSlugs: ['octal-to-hex', 'hexadecimal-to-octal', 'hex-to-binary']
  },
  {
    slug: 'octal-to-hex',
    name: 'Octal to Hex',
    categorySlug: 'hexadecimal',
    categoryName: 'Hexadecimal Tools',
    secondaryCategories: ['octal', 'number-system'],
    shortDesc: 'Convert octal numbers into hexadecimal format using 3-bit to 4-bit binary regrouping.',
    metaTitle: 'Octal to Hex Converter – Convert Octal to Hexadecimal Online',
    metaDesc: 'Convert octal to hex online with step-by-step binary bridging (3-bit triplets to 4-bit nibbles).',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Octal Number',
      primaryPlaceholder: 'e.g. 177 or 755',
      defaultValue: '177',
      helpText: 'Enter octal digits (0 to 7).',
      defaultBase: 8,
      defaultTargetBase: 16
    },
    whatIs: 'Octal to hex conversion converts base-8 numbers to base-16 by expanding each octal digit to 3 binary bits and regrouping into 4-bit hex nibbles.',
    howItWorks: 'Convert each octal digit to a 3-bit binary triplet. Regroup the bits into 4-bit nibbles from right to left. Map each 4-bit group to its hex symbol (0-9, A-F).',
    formula: '\\text{Octal} \\xrightarrow{\\text{3-bit}} \\text{Binary} \\xrightarrow{\\text{4-bit}} \\text{Hex}',
    example: 'Convert 177_8 to hex:\n1 -> 001, 7 -> 111, 7 -> 111 => 001111111_2\nGroup by 4s from right: 0111 | 1111\n0111_2 = 7, 1111_2 = F\nHex: 7F_{16}.',
    rules: [
      'Each octal digit maps to exactly 3 binary bits.',
      'Regrouping into 4-bit nibbles must proceed from right to left.'
    ],
    applications: [
      'Converting chmod permissions into hexadecimal bitmasks.',
      'Systems programming and assembly firmware development.',
      'Legacy computing architecture emulation.'
    ],
    mistakes: [
      'Expanding octal digits into 4 bits instead of 3 bits.',
      'Entering digits 8 or 9 in octal input.'
    ],
    faqs: [
      {
        question: 'What is octal 377 in hex?',
        answer: 'Octal 377 equals FF in hexadecimal (decimal 255).'
      }
    ],
    relatedSlugs: ['hex-to-octal', 'octal-to-hexadecimal', 'octal-to-binary']
  },
  {
    slug: 'hexadecimal-addition',
    name: 'Hexadecimal Addition',
    categorySlug: 'hexadecimal',
    categoryName: 'Hexadecimal Tools',
    secondaryCategories: ['number-system-arithmetic'],
    shortDesc: 'Add hexadecimal numbers with column carries, base-16 wrapping, and step-by-step proofs.',
    metaTitle: 'Hexadecimal Addition Calculator – Add Hex Numbers Online with Steps',
    metaDesc: 'Add hexadecimal numbers online with base-16 carry tracking, step-by-step column addition, and decimal verification.',
    engineType: 'arithmetic',
    inputConfig: {
      primaryLabel: 'First Hex Number (A)',
      primaryPlaceholder: 'e.g. 1A4',
      defaultValue: '1A4',
      hasSecondaryInput: true,
      secondaryLabel: 'Second Hex Number (B)',
      secondaryPlaceholder: 'e.g. 2F',
      defaultSecondaryValue: '2F',
      helpText: 'Enter hex digits (0-9, A-F).'
    },
    whatIs: 'Hexadecimal addition computes the sum of two base-16 numbers. A column sum of 16 or greater produces a carry of 1 to the next column, leaving sum - 16 in the current column.',
    howItWorks: 'Add digits column by column from right to left in base 16. If column sum >= 16, subtract 16 and carry 1 to the next column. Map results >= 10 to A through F.',
    formula: 'A_{16} + B_{16} = \\text{Sum}_{16} \\quad \\text{with carry when } \\text{sum}_i \\ge 16',
    example: 'Add 1A4_{16} + 2F_{16}:\nColumn 0: 4 + F (15) = 19 -> 19 - 16 = 3, carry 1\nColumn 1: A (10) + 2 + 1 (carry) = 13 -> D\nColumn 2: 1\nResult: 1D3_{16} (decimal 467).',
    rules: [
      'Carries occur at 16, not 10.',
      'A=10, B=11, C=12, D=13, E=14, F=15.'
    ],
    applications: [
      'Calculating memory pointer offsets and address arithmetic in C/C++.',
      'Computing checksums and hash digest components.',
      'Adjusting hexadecimal color values in graphic software.'
    ],
    mistakes: [
      'Carrying at 10 instead of 16.',
      'Forgetting that F is 15.'
    ],
    faqs: [
      {
        question: 'What is F + 1 in hex?',
        answer: 'F (15) + 1 in hexadecimal equals 10 (decimal 16).'
      }
    ],
    relatedSlugs: ['hexadecimal-subtraction', 'hexadecimal-calculator', 'hex-to-decimal']
  },
  {
    slug: 'hexadecimal-subtraction',
    name: 'Hexadecimal Subtraction',
    categorySlug: 'hexadecimal',
    categoryName: 'Hexadecimal Tools',
    secondaryCategories: ['number-system-arithmetic'],
    shortDesc: 'Subtract hexadecimal numbers with column borrows of 16 and step-by-step proofs.',
    metaTitle: 'Hexadecimal Subtraction Calculator – Subtract Hex Numbers Online',
    metaDesc: 'Subtract hexadecimal numbers online with base-16 column borrow tracking and step-by-step worked solutions.',
    engineType: 'arithmetic',
    inputConfig: {
      primaryLabel: 'Minuend Hex (A)',
      primaryPlaceholder: 'e.g. 3B2',
      defaultValue: '3B2',
      hasSecondaryInput: true,
      secondaryLabel: 'Subtrahend Hex (B)',
      secondaryPlaceholder: 'e.g. 1F4',
      defaultSecondaryValue: '1F4',
      helpText: 'Enter hex values (0-9, A-F).'
    },
    whatIs: 'Hexadecimal subtraction finds the difference between two base-16 numbers. When subtracting a larger digit from a smaller one, a borrow from the next higher column provides 16.',
    howItWorks: 'Subtract digits column by column from right to left. If top digit < bottom digit, borrow 1 from the next non-zero column to the left (worth 16), add 16 to the top digit, then subtract.',
    formula: 'A_{16} - B_{16} = \\text{Diff}_{16} \\quad \\text{with borrow of 16}',
    example: 'Subtract 3B2_{16} - 1F4_{16}:\nColumn 0: 2 - 4 (borrow 1 from B -> B becomes A, 2 becomes 2+16=18) -> 18 - 4 = 14 (E)\nColumn 1: A (10) - F (15) (borrow 1 from 3 -> 3 becomes 2, A becomes 10+16=26) -> 26 - 15 = 11 (B)\nColumn 2: 2 - 1 = 1\nResult: 1BE_{16}.',
    rules: [
      'A borrow from the adjacent higher column adds 16 to the borrowing column.',
      'Only valid hex characters 0-9 and A-F are allowed.'
    ],
    applications: [
      'Determining memory buffer sizes and address spans (end_address - start_address).',
      'Calculating relative offsets in assembly code jump instructions.',
      'Low-level kernel memory management.'
    ],
    mistakes: [
      'Borrowing 10 instead of 16.',
      'Failing to decrement the column borrowed from.'
    ],
    faqs: [
      {
        question: 'What is 10 - 1 in hex?',
        answer: '10 - 1 in hexadecimal is F (16 - 1 = 15).'
      }
    ],
    relatedSlugs: ['hexadecimal-addition', 'hexadecimal-calculator', 'hexadecimal-multiplication']
  },
  {
    slug: 'hexadecimal-multiplication',
    name: 'Hexadecimal Multiplication',
    categorySlug: 'hexadecimal',
    categoryName: 'Hexadecimal Tools',
    secondaryCategories: ['number-system-arithmetic'],
    shortDesc: 'Multiply hexadecimal numbers with base-16 partial products and step-by-step proofs.',
    metaTitle: 'Hexadecimal Multiplication Calculator – Multiply Hex Numbers Online',
    metaDesc: 'Multiply hexadecimal numbers online with base-16 partial products, shift steps, and decimal verification.',
    engineType: 'arithmetic',
    inputConfig: {
      primaryLabel: 'First Hex Number (A)',
      primaryPlaceholder: 'e.g. 1A',
      defaultValue: '1A',
      hasSecondaryInput: true,
      secondaryLabel: 'Second Hex Number (B)',
      secondaryPlaceholder: 'e.g. 0B',
      defaultSecondaryValue: '0B',
      helpText: 'Enter hex values (0-9, A-F).'
    },
    whatIs: 'Hexadecimal multiplication calculates the product of two base-16 numbers using partial products computed in radix 16.',
    howItWorks: 'Multiply each digit of the multiplier by each digit of the multiplicand. Convert products >= 16 into a base-16 quotient (carry) and remainder. Sum partial products using hex addition.',
    formula: 'A_{16} \\times B_{16} = \\text{Product}_{16}',
    example: 'Multiply 1A_{16} (26) × 0B_{16} (11):\nB (11) × A (10) = 110 -> 110/16 = 6 remainder 14 (E) -> write E, carry 6\nB (11) × 1 + 6 (carry) = 17 -> 17/16 = 1 remainder 1 -> write 1, carry 1 -> 11E_{16}\nResult: 11E_{16} (decimal 286).',
    rules: [
      'Column products wrap at 16.',
      'Partial products shift left by one hex position (multiplication by 16) for each row.'
    ],
    applications: [
      'Multi-precision arithmetic in cryptographic key generators (ECC, RSA).',
      'Memory stride calculations in computer graphics rasterizers.',
      'Compiler loop unrolling and address indexing optimization.'
    ],
    mistakes: [
      'Multiplying digits in decimal without converting the intermediate product back to base 16.',
      'Forgetting carries from previous digit multiplications.'
    ],
    faqs: [
      {
        question: 'What is A × B in hex?',
        answer: 'A (10) × B (11) = 110 decimal = 6E in hex (6×16 + 14 = 110).'
      }
    ],
    relatedSlugs: ['hexadecimal-division', 'hexadecimal-addition', 'hexadecimal-calculator']
  },
  {
    slug: 'hexadecimal-division',
    name: 'Hexadecimal Division',
    categorySlug: 'hexadecimal',
    categoryName: 'Hexadecimal Tools',
    secondaryCategories: ['number-system-arithmetic'],
    shortDesc: 'Divide hexadecimal numbers with step-by-step base-16 long division, quotient, and remainder.',
    metaTitle: 'Hexadecimal Division Calculator – Divide Hex Numbers with Steps',
    metaDesc: 'Divide hexadecimal numbers online with base-16 long division steps, quotient, remainder, and decimal checks.',
    engineType: 'arithmetic',
    inputConfig: {
      primaryLabel: 'Dividend Hex (A)',
      primaryPlaceholder: 'e.g. 1A4',
      defaultValue: '1A4',
      hasSecondaryInput: true,
      secondaryLabel: 'Divisor Hex (B)',
      secondaryPlaceholder: 'e.g. 10',
      defaultSecondaryValue: '10',
      helpText: 'Enter dividend and non-zero divisor in hex.'
    },
    whatIs: 'Hexadecimal division performs base-16 long division, finding how many times a divisor fits into a dividend and calculating the exact quotient and remainder.',
    howItWorks: 'Execute long division directly in base 16. Estimate how many times the divisor fits into the leading hex digits, subtract the hex product, and bring down subsequent digits.',
    formula: 'A_{16} = (Q_{16} \\times B_{16}) + R_{16} \\quad \\text{where } 0 \\le R_{16} < B_{16}',
    example: 'Divide 1A4_{16} (420) by 10_{16} (16):\n10 goes into 1A -> 1 time, remainder A\nBring down 4 -> A4\n10 goes into A4 -> A (10) times, product A0, remainder 4\nQuotient: 1A_{16} (26), Remainder: 4.',
    rules: [
      'Division by 0 is undefined.',
      'The remainder must be strictly smaller than the divisor.'
    ],
    applications: [
      'Page offset and memory page frame index extraction in operating systems.',
      'Segmented memory calculations in real-mode x86 architecture.',
      'Cryptographic hash modulo operations.'
    ],
    mistakes: [
      'Dividing by zero.',
      'Miscalculating base-16 multiplication when estimating quotient digits.'
    ],
    faqs: [
      {
        question: 'What is 100 divided by 10 in hex?',
        answer: '100 / 10 in hexadecimal is 10 (decimal 256 / 16 = 16).'
      }
    ],
    relatedSlugs: ['hexadecimal-multiplication', 'hexadecimal-calculator', 'hex-to-decimal']
  },
  {
    slug: 'hexadecimal-number-validator',
    name: 'Hexadecimal Number Validator',
    categorySlug: 'hexadecimal',
    categoryName: 'Hexadecimal Tools',
    secondaryCategories: ['base-conversion'],
    shortDesc: 'Verify if a string is a valid base-16 hexadecimal representation and check allowable characters.',
    metaTitle: 'Hexadecimal Number Validator – Check if String is Valid Hex Online',
    metaDesc: 'Validate hexadecimal numbers online. Check for illegal characters, length, 0x prefix compliance, and formatting.',
    engineType: 'validator',
    inputConfig: {
      primaryLabel: 'Candidate Hex String',
      primaryPlaceholder: 'e.g. 0xDEADBEEF or 1A4',
      defaultValue: '0xDEADBEEF',
      helpText: 'Enter text to verify if it represents valid hexadecimal.'
    },
    whatIs: 'The Hexadecimal Number Validator analyzes an input string to confirm it complies with base-16 rules, containing exclusively digits 0-9 and letters A-F.',
    howItWorks: 'Strips optional prefixes (like 0x or #). Tests each character against the allowed set [0-9A-Fa-f]. Reports invalid characters, position of errors, and byte-alignment.',
    formula: '\\forall c \\in \\text{String}, \\quad c \\in \\{0..9, A..F, a..f\\}',
    example: 'Validating "0x1A4G":\nPrefix "0x" recognized.\nCharacter "G" at index 5 is INVALID (letters beyond F are not allowed in hex).\nStatus: INVALID.',
    rules: [
      'Only 0-9 and A-F (case-insensitive) are valid.',
      'Prefixes "0x" or "#" are recognized in programming and web color contexts.'
    ],
    applications: [
      'Input sanitization for memory address parameters in debuggers.',
      'Validating hex color codes before parsing in CSS stylesheets.',
      'Cryptographic hash integrity verification (MD5, SHA-1, SHA-256).'
    ],
    mistakes: [
      'Including letters like G, H, or O (confusing letter O with number 0).',
      'Including spaces inside continuous hex strings.'
    ],
    faqs: [
      {
        question: 'Is 0x prefix required for hexadecimal?',
        answer: 'No, but 0x is standard in programming languages to distinguish hex values from decimal numbers.'
      }
    ],
    relatedSlugs: ['hex-to-decimal', 'hexadecimal-addition', 'base-n-number-validator']
  }
];

import type { ToolDefinition } from '../types';

export const DECIMAL_TOOLS: ToolDefinition[] = [
  {
    slug: 'convert-decimal-fraction-to-binary',
    name: 'convert decimal fraction to binary',
    categorySlug: 'decimal',
    categoryName: 'Decimal Tools',
    secondaryCategories: ['binary', 'number-representation'],
    shortDesc: 'Convert continuous decimal fractions (e.g. 0.625) into binary fractions using repeated multiplication by 2.',
    metaTitle: 'convert decimal fraction to binary – Decimal Fractions to Binary Online',
    metaDesc: 'Convert decimal fractions to binary online with repeated multiplication by 2 proofs, repeating pattern detection, and exact bit output.',
    engineType: 'float',
    inputConfig: {
      primaryLabel: 'Decimal Fraction',
      primaryPlaceholder: 'e.g. 0.625 or 0.1',
      defaultValue: '0.625',
      helpText: 'Enter a decimal fractional value between 0 and 1.'
    },
    whatIs: 'Converting a decimal fraction to binary is the mathematical technique of representing non-integer quantities in base 2. In base 10, fractional positions represent tenths, hundredths, and thousandths (10^-1, 10^-2, 10^-3). In base 2, fractional positions represent halves, quarters, eighths, and sixteenths (2^-1 = 0.5, 2^-2 = 0.25, 2^-3 = 0.125, 2^-4 = 0.0625).',
    howItWorks: 'Multiply the fractional part by 2 repeatedly. The integer part of the product (which will be 0 or 1) becomes the next binary bit to the right of the radix point. Discard the integer part and repeat with the remaining fraction until the fraction reaches 0 or begins repeating infinitely.',
    formula: 'F_{k+1} = \\text{frac}(F_k \\times 2), \\quad b_{-k} = \\lfloor F_k \\times 2 \\rfloor',
    example: 'Convert 0.625_{10} to binary:\nStep 1: 0.625 × 2 = 1.25 -> record 1, remainder 0.25\nStep 2: 0.25 × 2 = 0.50 -> record 0, remainder 0.50\nStep 3: 0.50 × 2 = 1.00 -> record 1, remainder 0.00\nFraction reached 0.00!\nReading bits from top to bottom yields: 0.101_2.',
    rules: [
      'Read the generated bits in normal top-to-bottom order (unlike integer division which is read bottom-to-top).',
      'If the fraction does not terminate after repeated multiplications, it is an infinite repeating binary fraction.',
      'Input must be a valid real number with a decimal point.'
    ],
    applications: [
      'Synthesizing floating-point numbers in compiler lexers and parsers.',
      'Configuring digital-to-analog converters (DACs) and pulse-width modulation (PWM) duty cycles.',
      'Understanding floating-point arithmetic precision limits in financial algorithms.'
    ],
    mistakes: [
      'Reading the binary bits bottom-to-top instead of top-to-bottom.',
      'Expecting numbers like 0.1 or 0.2 to terminate in binary (they produce infinite periodic sequences in base 2).'
    ],
    faqs: [
      {
        question: 'Why does 0.1 decimal repeat infinitely in binary?',
        answer: 'A fraction terminates in base B only if all prime factors of its reduced denominator divide base B. Decimal base 10 has prime factors 2 and 5. Binary base 2 only has prime factor 2. Because 5 does not divide 2, any fraction with a factor of 5 in its denominator (like 1/10 = 0.1) produces an infinite repeating binary fraction (0.00011001100...).'
      },
      {
        question: 'What is 0.75 in binary?',
        answer: '0.75 in binary is 0.11: (1 × 0.5) + (1 × 0.25) = 0.75.'
      }
    ],
    relatedSlugs: ['binary-fraction-converter', 'decimal-to-binary', 'ieee-754-converter']
  },
  {
    slug: 'decimal-to-bcd-converter',
    name: 'Decimal to BCD Converter',
    categorySlug: 'decimal',
    categoryName: 'Decimal Tools',
    secondaryCategories: ['binary', 'coding-computer-number'],
    shortDesc: 'Convert standard base-10 decimal numbers into 8421 Binary-Coded Decimal (BCD) 4-bit nibbles.',
    metaTitle: 'Decimal to BCD Converter – Convert Decimal to 8421 BCD Online',
    metaDesc: 'Convert decimal integers to 8421 Binary-Coded Decimal (BCD) online with step-by-step nibble mapping and display code generation.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Decimal Number',
      primaryPlaceholder: 'e.g. 749',
      defaultValue: '749',
      helpText: 'Enter any non-negative base 10 integer.'
    },
    whatIs: 'Decimal to BCD conversion transforms standard decimal integers into Binary-Coded Decimal (8421 BCD). Rather than converting the entire number into a single binary integer, BCD independently translates each decimal digit (0 through 9) into its own 4-bit binary sequence (0000 to 1001).',
    howItWorks: 'Split the decimal number into its individual digits. Replace each decimal digit with its corresponding 4-bit binary representation: 0=0000, 1=0001, 2=0010, 3=0011, 4=0100, 5=0101, 6=0110, 7=0111, 8=1000, 9=1001.',
    formula: 'N = \\sum_{i=0}^{m-1} d_i 10^i \\xrightarrow{} [\\text{bin}_4(d_{m-1}) \\dots \\text{bin}_4(d_0)]',
    example: 'Convert decimal 749 to BCD:\nDigit 7 -> 0111_2\nDigit 4 -> 0100_2\nDigit 9 -> 1001_2\nBCD Result: 0111 0100 1001.',
    rules: [
      'Each decimal digit must be padded to exactly 4 bits.',
      'Only decimal digits 0 through 9 are allowed.',
      'Nibbles from 1010 to 1111 (10 to 15) are strictly illegal in BCD.'
    ],
    applications: [
      'Digital electronic clocks, timers, and multimeters using 7-segment LED/LCD display drivers.',
      'Financial software engines to avoid binary floating-point roundoff issues.',
      'Point-of-sale (POS) terminal displays and cash register firmware.'
    ],
    mistakes: [
      'Converting the whole number into pure binary instead of encoding digit by digit (e.g. converting 12 into 1100 instead of 0001 0010).',
      'Forgetting leading zeros on individual nibbles (e.g. writing 1 as 1 instead of 0001).'
    ],
    faqs: [
      {
        question: 'What is the difference between pure binary and BCD?',
        answer: 'In pure binary, the entire number is converted into base 2 as a single positional value (e.g. 15 is 1111). In BCD, each decimal digit is converted into its own 4-bit nibble (e.g. 15 is 0001 0101).'
      }
    ],
    relatedSlugs: ['bcd-to-binary-converter', 'binary-to-bcd-converter', 'decimal-to-binary']
  }
];

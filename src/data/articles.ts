import { whoInventedBinaryArticle } from './articles/whoInventedBinary';

export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface ArticleDefinition {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  metaTitle: string;
  metaDesc: string;
  summary: string;
  whatIs?: string;
  howItWorks?: string;
  formula?: string;
  stepByStepExample?: string;
  rules?: string[];
  applications?: string[];
  mistakes?: string[];
  faqs: ArticleFaq[];
  relatedToolSlugs: string[];
  contentHtml?: string;
  datePublished?: string;
  dateModified?: string;
}

export const ARTICLES: ArticleDefinition[] = [
  whoInventedBinaryArticle,
  {
    slug: 'how-to-convert-decimal-to-hexadecimal',
    title: 'How to convert decimal to hexadecimal?',
    subtitle: 'A step-by-step masterclass in base-10 to base-16 positional transformations, division algorithms, and 4-bit nibble mapping.',
    category: 'Radix Conversion',
    readTime: '6 min read',
    metaTitle: 'How to Convert Decimal to Hexadecimal – Step-by-Step Guide',
    metaDesc: 'Learn how to convert decimal (base 10) numbers to hexadecimal (base 16) using repeated division by 16 and binary nibble grouping with worked examples.',
    summary: 'Converting decimal integers and fractions to hexadecimal is a foundational skill in systems programming, reverse engineering, and digital circuit design. This guide details both the successive division-by-16 method and the fast binary-intermediate method.',
    whatIs: 'Decimal (Base 10) is the standard human counting system using ten positional digits (0–9). Hexadecimal (Base 16) is a compact base utilizing sixteen unique alphanumeric symbols: digits 0 through 9 followed by letters A through F (where A=10, B=11, C=12, D=13, E=14, and F=15). In computer science and digital electronics, hexadecimal serves as human-friendly shorthand for binary strings because exactly one hex digit represents four binary bits (one nibble), and two hex digits perfectly align with one 8-bit byte.',
    howItWorks: 'To convert a positive decimal integer into hexadecimal, apply the successive division by 16 algorithm: divide the integer by 16, record the integer quotient and the remainder, and continue dividing the resulting quotient until it reaches 0. If any remainder is between 10 and 15, convert it to its corresponding hex letter (10=A, 11=B, 12=C, 13=D, 14=E, 15=F). Finally, read the recorded remainders in reverse order—from the last division step (Most Significant Digit) to the first (Least Significant Digit). Alternatively, for mental math or quick validation, convert the decimal value into binary, pad to a multiple of 4 bits, and map each 4-bit block directly to its hex equivalent.',
    formula: 'Successive Division Algorithm:\nQ_0 = Decimal Number\nQ_1 = ⌊Q_0 ÷ 16⌋,  R_0 = Q_0 mod 16  (Mapped to 0–9, A–F)\nQ_2 = ⌊Q_1 ÷ 16⌋,  R_1 = Q_1 mod 16\n...\nQ_k = 0,          R_{k-1} = Q_{k-1} mod 16\nHex Result = (R_{k-1} R_{k-2} ... R_1 R_0)_16\n\nPositional Verification Check:\nN_10 = Σ (d_i × 16^i) for i = 0 to k-1',
    stepByStepExample: `Example Problem: Convert decimal 479 into hexadecimal.

Step 1: Divide 479 by 16
  479 ÷ 16 = 29 with remainder 15.
  Remainder 15 maps to hex digit 'F'.

Step 2: Divide quotient 29 by 16
  29 ÷ 16 = 1 with remainder 13.
  Remainder 13 maps to hex digit 'D'.

Step 3: Divide quotient 1 by 16
  1 ÷ 16 = 0 with remainder 1.
  Remainder 1 maps to hex digit '1'.

Quotient is now 0. Terminate division.
Read remainders from bottom to top (Step 3 to Step 1):
Result: 479_10 = 1DF_16.

Mathematical Proof / Verification:
  (1 × 16²) + (13 × 16¹) + (15 × 16⁰)
  = (1 × 256) + (13 × 16) + (15 × 1)
  = 256 + 208 + 15
  = 479 (Matches original decimal integer).`,
    rules: [
      'Always replace remainders from 10 to 15 with letters A to F (10=A, 11=B, 12=C, 13=D, 14=E, 15=F).',
      'Read the remainders from bottom to top (last remainder is the Most Significant Digit, first remainder is the Least Significant Digit).',
      'For decimal fractions, multiply repeatedly by 16 and record the integer portion from top to bottom (e.g. 0.625 × 16 = 10.0 -> 0.A_16).',
      'Zero in decimal is always represented as 0 in hexadecimal.',
      'Negative decimals require either an explicit minus sign (-1DF_16) or fixed-width Two’s Complement representation.'
    ],
    applications: [
      'Memory Addressing: Microprocessor memory dumps and RAM pointer addresses (e.g., 0x7FFF_FFFF).',
      'Web Colors: CSS hexadecimal color codes (#FFFFFF, #0066CC, #1D1D1F).',
      'Network Protocols: IPv6 addresses (2001:0db8::) and MAC hardware addresses (00:1A:2B:3C:4D:5E).',
      'Assembly & Disassembly: Machine opcode representations in x86, ARM, and RISC-V architectures.'
    ],
    mistakes: [
      'Writing remainders greater than 9 as numbers instead of letters (e.g., writing 11315 instead of 1DF).',
      'Reading remainders from top to bottom instead of bottom to top, producing inverted digit order (FD1 instead of 1DF).',
      'Forgetting that 16⁰ equals 1 when verifying positional weights.'
    ],
    faqs: [
      {
        question: 'Why do we divide by 16 when converting to hexadecimal?',
        answer: 'Because hexadecimal is a positional base-16 number system. Dividing by 16 isolates the least significant digit as the integer remainder, while the quotient represents the higher powers of 16.'
      },
      {
        question: 'What are the hexadecimal letters and their decimal values?',
        answer: 'A represents 10, B represents 11, C represents 12, D represents 13, E represents 14, and F represents 15.'
      },
      {
        question: 'How do you convert decimal fractions to hexadecimal?',
        answer: 'Multiply the fractional part by 16 repeatedly. The integer part of each multiplication becomes the next hex digit after the radix point, read top to bottom.'
      }
    ],
    relatedToolSlugs: [
      'decimal-to-hexadecimal',
      'hexadecimal-to-decimal',
      'decimal-to-binary',
      'binary-to-hexadecimal'
    ]
  },
  {
    slug: 'how-to-convert-a-decimal-to-binary',
    title: 'How to convert a decimal to binary?',
    subtitle: 'A foundational tutorial on the successive division-by-2 method, powers-of-two subtraction, and fractional binary precision.',
    category: 'Radix Conversion',
    readTime: '6 min read',
    metaTitle: 'How to Convert Decimal to Binary – Step-by-Step Guide',
    metaDesc: 'Master decimal to binary conversion using successive division by 2 and powers-of-two subtraction with detailed step-by-step proofs and fraction handling.',
    summary: 'Translating base-10 decimal numbers into base-2 binary strings is the core gateway between human mathematics and silicon hardware logic. Learn the mechanics of repeated division and positional weighting.',
    whatIs: 'Decimal (Base 10) uses ten digits (0–9) where each position represents an increasing power of 10 (1, 10, 100, 1000). Binary (Base 2) uses only two discrete binary digits or bits: 0 and 1. In digital computing, binary is the physical language of microprocessors because transistors act as bi-stable electrical switches: a transistor is either OFF (0 volts, logic 0) or ON (supply voltage, logic 1). Converting decimal to binary allows high-level numerical algorithms to run directly on physical semiconductor gates.',
    howItWorks: 'The standard algorithm is the successive division by 2 method. Take the decimal integer, divide by 2, and write down the integer quotient alongside the remainder (which will always be either 0 or 1). Continue dividing each resulting quotient by 2 until the quotient becomes 0. The binary equivalent is formed by reading the sequence of remainders in reverse order—starting with the last remainder computed (the Most Significant Bit, or MSB) and ending with the first remainder (the Least Significant Bit, or LSB). An alternative visual approach is the Powers-of-Two Subtraction method, where you identify the highest power of 2 less than or equal to the number, subtract it, place a 1, and repeat for all decreasing powers of two.',
    formula: 'Successive Division Algorithm:\nQ_0 = Decimal Integer\nQ_1 = ⌊Q_0 ÷ 2⌋,  R_0 = Q_0 mod 2  (LSB)\nQ_2 = ⌊Q_1 ÷ 2⌋,  R_1 = Q_1 mod 2\n...\nQ_n = 0,         R_{n-1} = Q_{n-1} mod 2  (MSB)\nBinary Result = (R_{n-1} R_{n-2} ... R_1 R_0)_2\n\nPositional Check Formula:\nDecimal Value = Σ (b_i × 2^i) for i = 0 to n-1',
    stepByStepExample: `Example Problem: Convert decimal 156 into binary.

Step 1: 156 ÷ 2 = 78, remainder 0  (LSB)
Step 2:  78 ÷ 2 = 39, remainder 0
Step 3:  39 ÷ 2 = 19, remainder 1
Step 4:  19 ÷ 2 =  9, remainder 1
Step 5:   9 ÷ 2 =  4, remainder 1
Step 6:   4 ÷ 2 =  2, remainder 0
Step 7:   2 ÷ 2 =  1, remainder 0
Step 8:   1 ÷ 2 =  0, remainder 1  (MSB)

Quotient is 0. Reading remainders from bottom to top:
Result: 156_10 = 10011100_2.

Verification via Powers of Two:
  156 = 128 + 16 + 8 + 4
      = (1 × 2⁷) + (0 × 2⁶) + (0 × 2⁵) + (1 × 2⁴) + (1 × 2³) + (1 × 2²) + (0 × 2¹) + (0 × 2⁰)
      = 10011100_2 (Confirmed).`,
    rules: [
      'Binary remainders can ONLY be 0 or 1. Any other remainder indicates an arithmetic error.',
      'The last remainder calculated is the Most Significant Bit (MSB); the first remainder is the Least Significant Bit (LSB).',
      'For decimal fractions (e.g. 0.625), multiply by 2 repeatedly and read the integer parts from top to bottom (0.625 × 2 = 1.25 -> 1; 0.25 × 2 = 0.5 -> 0; 0.5 × 2 = 1.0 -> 1 => 0.101_2).',
      'Leading zeros do not change the mathematical value of an unsigned binary number (00101_2 = 101_2 = 5_10), but fixed-width registers require zero-padding.',
      'Zero in decimal is always 0 in binary.'
    ],
    applications: [
      'Microprocessor Arithmetic Logic Units (ALUs): Adding and multiplying binary numbers in silicon.',
      'Networking Subnetting: Converting dotted-decimal IPv4 netmasks into 32-bit binary prefix masks.',
      'Firmware Bitmasking: Setting, clearing, and toggling hardware configuration registers.',
      'Data Compression: Huffman encoding and variable-length bitstream serialization.'
    ],
    mistakes: [
      'Reading remainders from top to bottom instead of bottom to top (writing 00111001 instead of 10011100).',
      'Stopping division before the quotient reaches zero.',
      'Confusing decimal fractional division with integer division.'
    ],
    faqs: [
      {
        question: 'Why do computers only understand binary?',
        answer: 'Electronic circuits are built with millions of transistors operating as simple on/off switches. Two stable voltage states (high vs. low) provide maximum noise immunity and physical reliability.'
      },
      {
        question: 'Can all decimal fractions be converted to exact binary fractions?',
        answer: 'No. Just as 1/3 produces a repeating decimal (0.333...), fractions like 0.1 produce an infinite repeating binary sequence (0.0001100110011...). This is the fundamental reason behind floating-point rounding errors in software.'
      },
      {
        question: 'What is the fastest mental way to convert small decimal numbers to binary?',
        answer: 'Memorize powers of 2 (1, 2, 4, 8, 16, 32, 64, 128). Subtract the largest power of 2 that fits into your number, place a 1 in that bit position, and repeat with the remainder.'
      }
    ],
    relatedToolSlugs: [
      'decimal-to-binary',
      'binary-to-decimal',
      'convert-decimal-fraction-to-binary',
      'binary-addition-calculator'
    ]
  },
  {
    slug: 'what-is-a-number-system',
    title: 'What is a number system?',
    subtitle: 'An engineering overview of positional notation, radix weightings, and computational number systems.',
    category: 'Computer Architecture',
    readTime: '7 min read',
    metaTitle: 'What Is a Number System? Positional Notation Explained',
    metaDesc: 'Explore what a number system is, how positional notation and radix weights work, and why binary, octal, decimal, and hex govern computer architecture.',
    summary: 'A number system is a structured mathematical framework for expressing quantities through a consistent set of symbols. Learn the distinction between non-positional and positional notation and how radix weights power modern computation.',
    whatIs: 'A number system (or numeral system) is a mathematical framework for representing quantities and values using a systematic set of symbols and syntax rules. Historically, early civilizations used non-positional number systems (such as Roman numerals, where \'X\' always meant ten regardless of position). Modern science, engineering, and digital computation universally employ positional number systems (also known as place-value systems). In a positional system, the actual value contributed by a digit depends not only on the symbol itself, but also on its position relative to the radix point.',
    howItWorks: 'Every positional number system is defined by its Base or Radix (denoted r). The radix dictates two fundamental properties: (1) the total count of unique digit symbols used in the system, which always ranges from 0 to r - 1, and (2) the multiplication multiplier between adjacent positional columns. In any base r, moving one column to the left multiplies the column weight by r, while moving one column to the right divides the weight by r. A real number N is evaluated by summing each digit multiplied by the base raised to its positional index.',
    formula: 'Universal Positional Expansion Formula:\nN_r = d_{n-1} r^{n-1} + d_{n-2} r^{n-2} + ... + d_1 r^1 + d_0 r^0 + d_{-1} r^{-1} + d_{-2} r^{-2} + ...\n\nWhere:\n• r is the Radix (Base), r ≥ 2\n• d_i is the digit at position i, where 0 ≤ d_i < r\n• r^i is the positional weight of column i\n• i = 0 corresponds to the units position immediately left of the radix point\n• i < 0 corresponds to fractional positions right of the radix point',
    stepByStepExample: `Example Problem: Compare how the digits "101" are evaluated across Base 10, Base 2, Base 8, and Base 16.

1. In Decimal (Base 10):
   101_10 = (1 × 10²) + (0 × 10¹) + (1 × 10⁰)
          = 100 + 0 + 1 = 101

2. In Binary (Base 2):
   101_2  = (1 × 2²) + (0 × 2¹) + (1 × 2⁰)
          = 4 + 0 + 1 = 5 (Decimal)

3. In Octal (Base 8):
   101_8  = (1 × 8²) + (0 × 8¹) + (1 × 8⁰)
          = 64 + 0 + 1 = 65 (Decimal)

4. In Hexadecimal (Base 16):
   101_16 = (1 × 16²) + (0 × 16¹) + (1 × 16⁰)
          = 256 + 0 + 1 = 257 (Decimal)

Conclusion: Although the symbol sequence "101" is identical in all four cases, its physical magnitude changes completely depending on the system's base!`,
    rules: [
      'The base r must be an integer greater than or equal to 2.',
      'A number system of base r uses exactly r unique digit symbols (e.g., base 2 has 2 digits: 0, 1; base 16 has 16 symbols: 0-9 and A-F).',
      'The highest single digit symbol in any base r is strictly r - 1 (e.g. In base 8, digits 8 and 9 are illegal).',
      'Column weights to the left of the radix point are positive integer powers (r⁰=1, r¹, r², r³); column weights to the right are negative powers (r⁻¹, r⁻², r⁻³).'
    ],
    applications: [
      'Hardware ALU Design: Designing binary registers, full adders, and multiplexers in silicon.',
      'Memory Management: Hexadecimal notation for virtual memory mapping and page tables.',
      'Network Engineering: Dotted decimal IPv4 addresses and 128-bit hexadecimal IPv6 addresses.',
      'File Permissions: Octal representation for POSIX file permissions in Linux/UNIX (chmod 755).'
    ],
    mistakes: [
      'Using a digit equal to or greater than the base (e.g., writing "182" in octal or "102" in binary).',
      'Assuming that the units position has weight r¹ instead of r⁰ (remember that r⁰ = 1 in every base).',
      'Forgetting that bases above 10 require letters to represent single-digit values from 10 upward.'
    ],
    faqs: [
      {
        question: 'What is the most widely used number system in the world?',
        answer: 'The Hindu-Arabic decimal system (Base 10) is the global standard for commerce, everyday arithmetic, and science.'
      },
      {
        question: 'Can a number system have an arbitrary base like 3 or 7?',
        answer: 'Yes! Number systems can be constructed with any integer base r ≥ 2, such as ternary (base 3), quaternary (base 4), or septenary (base 7). In computing, arbitrary base-N conversions are widely used in hash encoding (Base58, Base64).'
      },
      {
        question: 'Why did early humans settle on Base 10?',
        answer: 'Base 10 became universal because humans have ten fingers (digits) on two hands, providing a natural counting aid.'
      }
    ],
    relatedToolSlugs: [
      'any-base-to-any-base-converter',
      'base-n-number-validator',
      'number-system-cheat-sheet',
      'decimal-to-binary'
    ]
  },
  {
    slug: 'difference-between-binary-decimal-octal-hexadecimal',
    title: 'What is the difference between binary, decimal, octal, and hexadecimal?',
    subtitle: 'A comparative study of the four core radices of digital computing, their power-of-two relationships, and architectural roles.',
    category: 'Computer Architecture',
    readTime: '7 min read',
    metaTitle: 'Binary vs Decimal vs Octal vs Hexadecimal – Key Differences',
    metaDesc: 'Compare binary, decimal, octal, and hexadecimal number systems. Understand bases, digit sets, bit alignments, and why programmers use each radix.',
    summary: 'Binary, Decimal, Octal, and Hexadecimal form the quartet of number systems powering all computer hardware and software. Discover their technical differences, positional column weights, and direct bit-grouping shortcuts.',
    whatIs: 'Binary (Base 2), Octal (Base 8), Decimal (Base 10), and Hexadecimal (Base 16) are positional number systems differing primarily in their Radix (base), symbol sets, and computational roles. Decimal is the biological standard of human society. Binary is the physical language of silicon transistors. Octal and Hexadecimal serve as compact, human-readable representations of long binary strings because 8 and 16 are integer powers of 2 (2³ = 8, 2⁴ = 16), enabling lossless bit grouping without decimal math.',
    howItWorks: 'The relationship between these systems stems from binary: because 2³ = 8, every octal digit corresponds to exactly 3 binary bits. Because 2⁴ = 16, every hexadecimal digit corresponds to exactly 4 binary bits (one nibble). Consequently, converting between binary and hex (or binary and octal) requires zero arithmetic—simply partition binary bits into groups of 3 or 4 and substitute the corresponding symbol. Converting to or from decimal, however, requires full polynomial evaluation or successive division by the target base.',
    formula: 'Direct Radix Conversion Mappings:\n• Binary to Octal: Group bits in 3s -> [b_2 b_1 b_0]_2 = 1 Octal Digit (0–7)\n• Binary to Hex: Group bits in 4s -> [b_3 b_2 b_1 b_0]_2 = 1 Hex Digit (0–F)\n• 1 Byte (8 bits) = Exactly 2 Hex Digits (e.g. 11111111_2 = FF_16)\n• 1 Byte (8 bits) = Up to 3 Octal Digits (e.g. 11111111_2 = 377_8)',
    stepByStepExample: `Comprehensive Comparison Matrix: Decimal Value 255 represented across all four systems:

1. Decimal (Base 10):
   Value: 255
   Digits: 0-9
   Expansion: (2 × 10²) + (5 × 10¹) + (5 × 10⁰) = 200 + 50 + 5 = 255

2. Binary (Base 2):
   Value: 1111 1111
   Digits: 0, 1
   Expansion: 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255
   Bit Width: 8 bits (1 byte)

3. Octal (Base 8):
   Value: 377
   Digits: 0-7
   Bit Grouping: [011] [111] [111] -> 3 7 7
   Expansion: (3 × 64) + (7 × 8) + (7 × 1) = 192 + 56 + 7 = 255

4. Hexadecimal (Base 16):
   Value: FF
   Digits: 0-9, A-F
   Bit Grouping: [1111] [1111] -> F F
   Expansion: (15 × 16) + (15 × 1) = 240 + 15 = 255`,
    rules: [
      'Binary uses base 2: allowed digits are {0, 1}.',
      'Octal uses base 8: allowed digits are {0, 1, 2, 3, 4, 5, 6, 7}. Digits 8 and 9 are strictly illegal.',
      'Decimal uses base 10: allowed digits are {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}.',
      'Hexadecimal uses base 16: allowed digits are {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F}.',
      'Direct grouping shortcuts only work between bases that are powers of the same root (e.g., base 2, 4, 8, 16, 32).'
    ],
    applications: [
      'Binary: Gate-level logic, FPGA bitstreams, flip-flops, CPU microcode.',
      'Hexadecimal: Memory dump inspection, color codes, cryptographic hashes (SHA-256, MD5), byte inspection.',
      'Octal: UNIX file permission masks (chmod 0777, 0755, 0644), legacy avionics and aviation transponder codes.',
      'Decimal: Human UI displays, financial transactions, metrics, measurements.'
    ],
    mistakes: [
      'Assuming hex numbers are larger in value just because they contain letters.',
      'Treating 10_2, 10_8, 10_10, and 10_16 as equal (they equal 2, 8, 10, and 16 in decimal, respectively).',
      'Grouping binary bits from left to right instead of right to left from the radix point.'
    ],
    faqs: [
      {
        question: 'Why is hexadecimal preferred over octal in modern computing?',
        answer: 'Modern computer architectures are byte-oriented (8, 16, 32, 64 bits). Because one byte equals exactly two 4-bit hex nibbles, hexadecimal aligns seamlessly with hardware registers. Octal groups into 3 bits, which does not divide evenly into 8 or 16 bits.'
      },
      {
        question: 'How many bits does one hexadecimal character represent?',
        answer: 'Exactly 4 bits, commonly referred to as one nibble.'
      },
      {
        question: 'How many bits does one octal character represent?',
        answer: 'Exactly 3 bits.'
      }
    ],
    relatedToolSlugs: [
      'binary-to-hexadecimal',
      'hexadecimal-to-binary',
      'binary-to-octal',
      'octal-to-hexadecimal'
    ]
  },
  {
    slug: 'how-is-binary-addition-performed-in-digital-electronics',
    title: 'How is binary addition performed in digital electronics?',
    subtitle: 'From Boolean truth tables and half adders to ripple carry pipelines, carry lookahead ALUs, and overflow detection.',
    category: 'Digital Electronics',
    readTime: '8 min read',
    metaTitle: 'Binary Addition in Digital Electronics – Full Adder Circuits',
    metaDesc: 'Learn how binary addition works in digital electronics, including truth tables, Half Adders, Full Adders, Ripple Carry Adders, and hardware ALUs.',
    summary: 'Binary addition is the elemental operation of digital computing. Every subtraction, multiplication, and division operation in a microprocessor is ultimately built on adder circuits. Understand the silicon logic of addition.',
    whatIs: 'Binary addition is the hardware-level mathematical process of summing two or more base-2 numbers. In digital electronics, binary addition is executed directly by semiconductor logic gates inside the Arithmetic Logic Unit (ALU). Because binary numbers consist solely of 0 and 1, binary addition follows four fundamental rules governed by Boolean algebra, generating a Sum bit and a Carry-Out bit.',
    howItWorks: 'Binary addition begins at the Least Significant Bit (LSB) and propagates carries toward the Most Significant Bit (MSB). In hardware, this is accomplished via two hierarchical building blocks:\n1. Half Adder: Combines two 1-bit inputs (A and B). Uses an XOR gate for the Sum (S = A ⊕ B) and an AND gate for the Carry (C = A · B). It cannot accept a carry-in from a previous stage.\n2. Full Adder: Combines three 1-bit inputs (A, B, and Carry-In C_in). It produces Sum = A ⊕ B ⊕ C_in and Carry-Out = (A · B) + (C_in · (A ⊕ B)).\nTo add n-bit words, n Full Adders are chained together into a Ripple Carry Adder (RCA), where the Carry-Out of each bit slice connects to the Carry-In of the next higher bit slice.',
    formula: 'Binary Addition Truth Table:\n• 0 + 0 = Sum: 0, Carry: 0\n• 0 + 1 = Sum: 1, Carry: 0\n• 1 + 0 = Sum: 1, Carry: 0\n• 1 + 1 = Sum: 0, Carry: 1\n• 1 + 1 + 1 (with Carry-In) = Sum: 1, Carry: 1\n\nFull Adder Boolean Equations:\n• Sum = A ⊕ B ⊕ C_{in}\n• Carry_{out} = (A · B) + (C_{in} · (A ⊕ B))\n\nSigned Overflow Condition (Two’s Complement):\n• Overflow = C_{n} ⊕ C_{n-1}  (Carry into MSB ≠ Carry out of MSB)',
    stepByStepExample: `Example Problem: Add binary numbers A = 1011_2 (11 in decimal) and B = 1101_2 (13 in decimal).

Align the columns and trace carries from right (LSB) to left (MSB):

  Carries:   1 1 1 1 0   (Carries generated during steps)
  Operand A:     1 0 1 1  (11)
  Operand B: +   1 1 0 1  (13)
  ----------------------
  Sum:         1 1 0 0 0  (24)

Detailed Step-by-Step Column Execution:
• Column 0 (LSB): 1 + 1 = 0 with Carry-out 1. Sum bit = 0.
• Column 1:       1 + 0 + (Carry 1) = 0 with Carry-out 1. Sum bit = 0.
• Column 2:       0 + 1 + (Carry 1) = 0 with Carry-out 1. Sum bit = 0.
• Column 3 (MSB): 1 + 1 + (Carry 1) = 1 with Carry-out 1. Sum bit = 1.
• Column 4:       Carry-out brings down 1. Sum bit = 1.

Final 5-bit Result: 11000_2
Verification: (1 × 2⁴) + (1 × 2³) + (0 × 2²) + (0 × 2¹) + (0 × 2⁰) = 16 + 8 = 24.
11 + 13 = 24 (Matches decimal arithmetic perfectly).`,
    rules: [
      '1 + 1 produces 0 in the current column and a carry of 1 to the next higher column.',
      '1 + 1 + 1 (adding two 1s plus a carry-in) produces a sum of 1 and a carry of 1.',
      'Always start adding at the Least Significant Bit (column 0 on the far right).',
      'In fixed-width registers (e.g. 8-bit byte), a carry out of the most significant bit indicates an unsigned overflow.',
      'In signed Two’s complement arithmetic, an overflow occurs when adding two positive numbers yields a negative result, or adding two negatives yields a positive.'
    ],
    applications: [
      'Microprocessor ALUs: Core execution units in x86, ARM, and Apple Silicon chips.',
      'DSP Filters: Digital Signal Processing multiply-accumulate (MAC) hardware pipelines.',
      'Graphics Processing Units (GPUs): Parallel rasterization and floating-point shader cores.',
      'FPGA Synthesis: Hardware description language (Verilog/VHDL) arithmetic blocks.'
    ],
    mistakes: [
      'Writing 1 + 1 = 2 (remember binary has no digit "2"; write 0 and carry 1).',
      'Dropping or forgetting carry bits when cascading through consecutive columns.',
      'Ignoring overflow when the sum exceeds the fixed hardware register width.'
    ],
    faqs: [
      {
        question: 'What is the difference between a Half Adder and a Full Adder?',
        answer: 'A Half Adder adds two 1-bit inputs and produces Sum and Carry, but cannot accept a carry from a previous stage. A Full Adder adds three 1-bit inputs (A, B, and Carry-In), allowing multiple adders to be chained together.'
      },
      {
        question: 'How do computers perform subtraction using an adder?',
        answer: 'Computers compute A - B by calculating A + (~B + 1) using Two’s Complement. Inverting B and asserting the initial Carry-In bit (C_in = 1) allows standard adder circuitry to perform subtraction without extra subtractor hardware.'
      },
      {
        question: 'What is a Carry Lookahead Adder (CLA)?',
        answer: 'A CLA is a high-speed adder that calculates carries in parallel using Boolean logic (Generate and Propagate signals), eliminating the propagation delay of traditional Ripple Carry Adders.'
      }
    ],
    relatedToolSlugs: [
      'binary-addition-calculator',
      'binary-subtraction-calculator',
      'binary-calculator',
      'bitwise-and-calculator'
    ]
  },
  {
    slug: 'what-is-11111111-in-2s-complement',
    title: 'What is 11111111 in 2s complement?',
    subtitle: 'The definitive breakdown of 0xFF in signed 8-bit registers, negative weights, and sign extension principles.',
    category: 'Complements',
    readTime: '5 min read',
    metaTitle: 'What is 11111111 in 2’s Complement? Answer & Proof',
    metaDesc: 'Find out why 11111111 in 8-bit Two’s Complement equals -1 in decimal. Complete mathematical proof, positional weights, and sign extension explained.',
    summary: 'In an 8-bit Two’s Complement signed binary system, the bit pattern 11111111 represents decimal -1. Explore the mathematical proofs, MSB negative weighting, and modular arithmetic behind this fundamental value.',
    whatIs: 'In an 8-bit signed Two’s Complement system, the binary string 11111111 represents the decimal value -1. In contrast, in an 8-bit unsigned integer system, 11111111 represents the maximum possible value: +255. The interpretation of the exact same 8 bits depends entirely on whether the microprocessor register is treated as signed or unsigned.',
    howItWorks: 'There are three mathematically rigorous ways to prove why 11111111_2 equals -1:\n\nMethod 1: Negative MSB Weighting\nIn an 8-bit Two’s Complement system, the most significant bit (bit 7) carries a negative weight of -2⁷ = -128. All other bits carry positive powers of 2. Summing all weights:\n(-128) + 64 + 32 + 16 + 8 + 4 + 2 + 1 = -128 + 127 = -1.\n\nMethod 2: Inversion and Increment Algorithm\nTo find the decimal value of a negative Two’s complement number (where MSB = 1):\n1. Invert all bits (One’s complement): ~11111111 = 00000000.\n2. Add 1 to the result: 00000000 + 1 = 00000001 (Decimal magnitude 1).\n3. Apply the negative sign: -1.\n\nMethod 3: Modular Arithmetic\nAn 8-bit register operates modulo 256 (2⁸). The unsigned value is 255. In modular arithmetic: 255 - 256 = -1.',
    formula: 'Signed Positional Summation (8-bit):\nValue = (-b_7 × 2⁷) + Σ (b_i × 2^i) for i = 0 to 6\nValue = (-1 × 128) + (1 × 64) + (1 × 32) + (1 × 16) + (1 × 8) + (1 × 4) + (1 × 2) + (1 × 1)\nValue = -128 + 127 = -1\n\nSign Extension Rule (Expanding to 16 or 32 bits):\n• 8-bit:  1111 1111 (-1)\n• 16-bit: 1111 1111 1111 1111 (-1, 0xFFFF)\n• 32-bit: 1111 1111 1111 1111 1111 1111 1111 1111 (-1, 0xFFFFFFFF)',
    stepByStepExample: `Worked Proof: Verifying 11111111 = -1 by adding +1:

In computer arithmetic, if X = -1, then adding +1 must result in 0.

    1 1 1 1 1 1 1 1   (Carries generated)
      1 1 1 1 1 1 1 1   (Original value: -1)
  +   0 0 0 0 0 0 0 1   (Add positive 1)
  -------------------
  (1) 0 0 0 0 0 0 0 0   (Sum = 0 in 8-bit register)

Explanation:
Every column produces 1 + 1 = 0 with a carry of 1.
The final carry-out from bit 7 spills past the 8-bit register boundary and is discarded.
The 8-bit register retains 00000000 (0).
Because (-1) + 1 = 0, the bit pattern 11111111 is proven to equal -1!`,
    rules: [
      'In 8-bit signed Two’s complement, 11111111 is ALWAYS -1.',
      'In 8-bit unsigned integer arithmetic, 11111111 is ALWAYS +255.',
      'To represent -1 in wider bit widths (16-bit, 32-bit, 64-bit), you must sign-extend the MSB (replicate 1s all the way to the new register width).',
      'A 16-bit value of 00000000 11111111 is NOT -1; it is positive +255 because its sign bit (bit 15) is 0.'
    ],
    applications: [
      'Return Codes: C/C++ functions returning -1 (EOF or error status) encoded in memory as 0xFF or 0xFFFFFFFF.',
      'Bitwise Masks: Bitwise NOT of 0 (~0) produces all 1s (0xFF or -1), commonly used as an all-ones bitmask.',
      'ALU Comparisons: Evaluating negative flags in conditional branch instructions (B.LT, JL).'
    ],
    mistakes: [
      'Confusing signed Two’s complement with unsigned binary and assuming 11111111 is always 255.',
      'Thinking that 11111111 in signed magnitude is -1 (in signed magnitude, -1 is 10000001, where MSB is sign and remaining 7 bits are magnitude).',
      'Forgetting to sign-extend when casting an 8-bit signed byte to a 16-bit signed integer in C/C++.'
    ],
    faqs: [
      {
        question: 'Why is 11111111 not -127 in Two’s Complement?',
        answer: 'In One’s Complement, 11111111 is negative zero (-0), and in Signed Magnitude, 11111111 is -127. But Two’s Complement adds 1 to eliminate dual zeros, shifting values so that all ones represents -1.'
      },
      {
        question: 'What is 10000000 in 8-bit Two’s Complement?',
        answer: '10000000 represents -128, which is the most negative number representable in an 8-bit signed register.'
      },
      {
        question: 'How does hexadecimal 0xFF relate to 11111111?',
        answer: '0xFF is the exact hexadecimal representation of the binary byte 11111111. When interpreted as a signed 8-bit char/int8, 0xFF equals -1.'
      }
    ],
    relatedToolSlugs: [
      '2s-complement-calculator',
      '1s-complement-calculator',
      'signed-number-calculator',
      '8-bit-number-range-calculator'
    ]
  },
  {
    slug: 'what-do-you-mean-by-2s-complement',
    title: 'What do you mean by 2\'s complement?',
    subtitle: 'The universal mathematical system for representing signed integers in computer hardware, eliminates negative zero, and enables unified adder-subtractor ALUs.',
    category: 'Complements',
    readTime: '8 min read',
    metaTitle: 'What is 2’s Complement? Definition, Formula & Examples',
    metaDesc: 'Understand what Two’s Complement means in computer systems. Learn how it represents negative integers, eliminates dual zeros, and unifies addition and subtraction.',
    summary: 'Two’s Complement is the universal standard used by modern microprocessors to represent signed integers and execute subtraction. Discover why it replaced Signed Magnitude and One’s Complement.',
    whatIs: 'Two’s Complement is a mathematical technique and hardware encoding standard used in digital computing to represent signed (positive and negative) integers in binary. In an n-bit Two’s Complement system, the most significant bit (MSB) acts as a sign indicator (0 for positive or zero, 1 for negative) and simultaneously carries a negative weight of -2ⁿ⁻¹. Two’s Complement is universally employed in modern CPUs, GPUs, and microcontrollers because it eliminates the redundant representation of negative zero (-0) and allows subtraction to be performed using identical adder hardware without needing separate subtractor circuits.',
    howItWorks: 'To understand Two’s Complement, consider the limitations of older representation systems:\n1. Signed Magnitude: Uses the MSB strictly as a sign flag. It suffers from two representations for zero (+0 = 0000, -0 = 1000) and requires complex circuitry to compare magnitudes before subtracting.\n2. One’s Complement: Inverts every bit to negate a number. It also retains dual zeros (+0 = 0000, -0 = 1111) and requires an end-around carry step in addition.\n\nTwo’s Complement solves both problems by adding 1 to the One’s Complement: \nTwo’s Complement = ~X + 1.\nThis addition of 1 shifts negative values by exactly one position, eliminating negative zero and ensuring that A - B is mathematically identical to A + (~B + 1). Microprocessors execute subtraction simply by inverting the second operand and setting the adder’s initial Carry-In to 1!',
    formula: 'Mathematical Definition of Two’s Complement (n-bit):\nFor an integer X:\n• If X ≥ 0: Binary representation of X\n• If X < 0: 2^n - |X|  (or equivalently: (~|X| + 1))\n\nSigned Dynamic Range of n-bit Two’s Complement:\nRange: [-2^{n-1}, +2^{n-1} - 1]\n• 4-bit:  [-8, +7]\n• 8-bit:  [-128, +127]\n• 16-bit: [-32,768, +32,767]\n• 32-bit: [-2,147,483,648, +2,147,483,647]\n• 64-bit: [-9,223,372,036,854,775,808, +9,223,372,036,854,775,807]',
    stepByStepExample: `Example Problem: Calculate the 8-bit Two’s Complement of decimal -42.

Step 1: Write the positive magnitude (+42) in 8-bit binary
  42 = 32 + 8 + 2
  +42 in 8-bit binary = 0010 1010

Step 2: Find the One’s Complement (invert every bit)
  Invert 0010 1010:
  ~42 = 1101 0101

Step 3: Add 1 to the One’s Complement (least significant bit)
    1101 0101
  + 0000 0001
  -----------
    1101 0110

Result: -42 in 8-bit Two’s Complement is 11010110_2 (or 0xD6 in hex).

Verification via Positional Weighting:
  Bit 7 (MSB) weight is -128.
  Value = (-1 × 128) + (1 × 64) + (0 × 32) + (1 × 16) + (0 × 8) + (1 × 4) + (1 × 2) + (0 × 1)
        = -128 + 64 + 16 + 4 + 2
        = -128 + 86
        = -42 (Confirmed!).`,
    rules: [
      'The Most Significant Bit (MSB) indicates sign: 0 for positive or zero, 1 for negative.',
      'Positive numbers in Two’s complement have the exact same representation as standard unsigned binary.',
      'To negate any number (positive to negative or negative to positive): invert all bits and add 1.',
      'The range is asymmetric: there is always one more negative number than positive numbers (e.g. -128 exists in 8-bit, but +128 does not).',
      'Shortcut trick: Scan the bits from right to left (LSB to MSB). Keep all zeros and the very first 1 unchanged; then invert all remaining bits to the left!'
    ],
    applications: [
      'Microprocessor ALUs: Universal arithmetic standard in x86, ARM, RISC-V, and MIPS microarchitectures.',
      'Programming Languages: Signed primitive integer types in C, C++, Rust, Java (byte, short, int, long).',
      'Digital Signal Processing: Audio sample signed representations (16-bit and 24-bit PCM audio).',
      'Embedded Firmware: Sensor ADC readings with bipolar voltage ranges.'
    ],
    mistakes: [
      'Forgetting to specify bit width (Two’s complement is inherently dependent on a defined register width).',
      'Trying to negate the minimum negative number (e.g. negating -128 in 8-bit causes signed overflow because +128 cannot fit in 8 bits).',
      'Confusing One’s complement (just flipping bits) with Two’s complement (flipping bits and adding 1).'
    ],
    faqs: [
      {
        question: 'Why does Two’s Complement have one more negative number than positive?',
        answer: 'Because zero (00000000) uses one of the non-negative slots (where MSB is 0). In an 8-bit register with 256 total states, 128 states are negative (-128 to -1) and 128 states are non-negative (0 to +127).'
      },
      {
        question: 'How do you convert a negative Two’s Complement binary back to decimal?',
        answer: 'Either invert all bits, add 1, and convert the resulting magnitude to decimal with a negative sign; or sum the column weights directly using -2ⁿ⁻¹ for the MSB.'
      },
      {
        question: 'What is the fastest trick to find Two’s complement manually?',
        answer: 'Read bits from right to left: leave all trailing zeros and the first "1" exactly as they are. Then, invert every bit after that first 1.'
      }
    ],
    relatedToolSlugs: [
      '2s-complement-calculator',
      '1s-to-2s-complement-converter',
      'twos-complement-range-calculator',
      'signed-integer-range-calculator'
    ]
  }
];

export function getArticleBySlug(slug: string): ArticleDefinition | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

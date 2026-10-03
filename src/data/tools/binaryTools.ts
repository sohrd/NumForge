import type { ToolDefinition } from '../types';

export const BINARY_TOOLS: ToolDefinition[] = [
  {
    slug: 'binary-addition-calculator',
    name: 'Binary Addition Calculator',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['number-system-arithmetic'],
    shortDesc: 'Add two binary numbers with step-by-step column-by-column carry bits and sum bits.',
    metaTitle: 'Binary Addition Calculator – Add Binary Numbers Online with Steps',
    metaDesc: 'Add binary numbers online with carry bit tracking, step-by-step column addition proofs, and decimal verification.',
    engineType: 'arithmetic',
    inputConfig: {
      primaryLabel: 'First Binary Number (A)',
      primaryPlaceholder: 'e.g. 1011',
      defaultValue: '1011',
      hasSecondaryInput: true,
      secondaryLabel: 'Second Binary Number (B)',
      secondaryPlaceholder: 'e.g. 1101',
      defaultSecondaryValue: '1101',
      helpText: 'Enter valid binary numbers (0 and 1 only).'
    },
    whatIs: 'Binary addition is the fundamental arithmetic operation executed by digital hardware adders (such as half-adders and full-adders) inside a computer Arithmetic Logic Unit (ALU).',
    howItWorks: 'Add columns from right to left using binary addition rules: 0+0=0, 0+1=1, 1+0=1, 1+1=0 with a carry of 1, and 1+1+1=1 with a carry of 1.',
    formula: 'A_2 + B_2 = \\text{Sum}_2 \\quad \\text{with carry bits } c_{i+1} = (a_i \\cdot b_i) + (c_i \\cdot (a_i \\oplus b_i))',
    example: 'Add 1011_2 (11) + 1101_2 (13):\nCarries:  1 1 1 1 0\n      A:    1 0 1 1\n    + B:    1 1 0 1\n--------------------\n    Sum:  1 1 0 0 0_2 (24_{10}).',
    rules: [
      '1 + 1 produces 0 with carry 1.',
      '1 + 1 + 1 produces 1 with carry 1.',
      'Only digits 0 and 1 are permitted.'
    ],
    applications: [
      'Digital circuit design and ALU full-adder cascading.',
      'Assembly language instruction simulation (ADD and ADC).',
      'Checksum calculations in network protocol headers.'
    ],
    mistakes: [
      'Forgetting to propagate carry bits to the next higher column.',
      'Treating 1 + 1 as 2 instead of 0 with carry 1.'
    ],
    faqs: [
      {
        question: 'What is 1 + 1 in binary?',
        answer: '1 + 1 in binary is 10 (pronounced "one-zero", equal to decimal 2).'
      }
    ],
    relatedSlugs: ['binary-subtraction-calculator', 'binary-multiplication-calculator', 'binary-division-calculator', 'binary-calculator']
  },
  {
    slug: 'binary-subtraction-calculator',
    name: 'Binary Subtraction Calculator',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['number-system-arithmetic'],
    shortDesc: 'Subtract one binary number from another with column borrow tracking and Two’s Complement verification.',
    metaTitle: 'Binary Subtraction Calculator – Subtract Binary Numbers with Steps',
    metaDesc: 'Subtract binary numbers online with column borrows, Two’s Complement proof methods, and real-time computation.',
    engineType: 'arithmetic',
    inputConfig: {
      primaryLabel: 'Minuend Binary (A)',
      primaryPlaceholder: 'e.g. 1101',
      defaultValue: '1101',
      hasSecondaryInput: true,
      secondaryLabel: 'Subtrahend Binary (B)',
      secondaryPlaceholder: 'e.g. 0110',
      defaultSecondaryValue: '0110',
      helpText: 'Enter binary strings (0 and 1).'
    },
    whatIs: 'Binary subtraction finds the difference between two binary values. In physical computer circuits, subtraction is typically transformed into addition using Two’s Complement: A - B = A + (~B + 1).',
    howItWorks: 'Using the borrow method: 0-0=0, 1-0=1, 1-1=0, and 0-1=1 after borrowing 1 from the next higher non-zero column (where the borrow is worth 2 in base 2).',
    formula: 'A - B = A + (\\sim B + 1) \\quad \\text{in Two’s Complement}',
    example: 'Subtract 1101_2 (13) - 0110_2 (6):\n      1101\n    - 0110\n    ------\n      0111_2 (7_{10}).',
    rules: [
      'Borrowing from a neighboring 1 turns it into 0, giving a value of 2 to the borrowing column.',
      'If minuend < subtrahend, the result is negative, often represented in Two’s Complement.'
    ],
    applications: [
      'Microprocessor subtraction and comparison instructions (SUB, CMP).',
      'Delta calculations in motion sensors and digital timers.',
      'Implementing countdown loops and decrements in hardware.'
    ],
    mistakes: [
      'Borrowing across multiple zero columns without setting intermediate zeros to 1.',
      'Ignoring negative result signs.'
    ],
    faqs: [
      {
        question: 'How do computers subtract binary numbers without subtractor circuits?',
        answer: 'Computers invert the subtrahend’s bits (1’s complement), add 1 to form the 2’s complement, and add it to the first number using the standard adder circuit.'
      }
    ],
    relatedSlugs: ['binary-addition-calculator', 'twos-complement-calculator', 'binary-calculator']
  },
  {
    slug: 'binary-multiplication-calculator',
    name: 'Binary Multiplication Calculator',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['number-system-arithmetic'],
    shortDesc: 'Multiply binary numbers with partial products, shift-and-add rows, and step-by-step proofs.',
    metaTitle: 'Binary Multiplication Calculator – Multiply Binary Numbers Online',
    metaDesc: 'Multiply binary numbers online with step-by-step partial products, shift-and-add demonstration, and decimal verification.',
    engineType: 'arithmetic',
    inputConfig: {
      primaryLabel: 'First Binary (A)',
      primaryPlaceholder: 'e.g. 101',
      defaultValue: '101',
      hasSecondaryInput: true,
      secondaryLabel: 'Second Binary (B)',
      secondaryPlaceholder: 'e.g. 011',
      defaultSecondaryValue: '011',
      helpText: 'Enter binary multiplicand and multiplier.'
    },
    whatIs: 'Binary multiplication is the process of computing products of base-2 numbers. In digital hardware, it is executed through sequential shift-and-add operations or parallel Booth multipliers.',
    howItWorks: 'For each bit of the multiplier (B), if the bit is 1, write down the multiplicand (A) shifted left by that bit’s position; if 0, write zeros. Then add all partial products.',
    formula: 'P = A \\times B = \\sum_{i=0}^{m-1} (b_i \\cdot (A \\ll i))',
    example: 'Multiply 101_2 (5) × 011_2 (3):\n      101\n    × 011\n    -----\n      101  (A × 1)\n     101.  (A × 1, shifted)\n    000..  (A × 0, shifted)\n    -----\n    01111_2 (15_{10}).',
    rules: [
      '0 × 0 = 0, 0 × 1 = 0, 1 × 0 = 0, 1 × 1 = 1.',
      'Multiplying by 2 is equivalent to shifting left by 1 bit.'
    ],
    applications: [
      'Digital signal processing (DSP) filters and Fourier transforms (FFT).',
      '3D graphics rendering matrix multiplications in GPUs.',
      'Cryptography algorithms (RSA modular exponentiation).'
    ],
    mistakes: [
      'Misaligning partial product rows during manual addition.',
      'Making carry errors when adding three or more partial products simultaneously.'
    ],
    faqs: [
      {
        question: 'Why is binary multiplication simpler than decimal multiplication?',
        answer: 'Because binary digits are only 0 or 1, every partial product is either zero or an exact copy of the multiplicand shifted left.'
      }
    ],
    relatedSlugs: ['binary-division-calculator', 'binary-addition-calculator', 'binary-calculator']
  },
  {
    slug: 'binary-division-calculator',
    name: 'Binary Division Calculator',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['number-system-arithmetic'],
    shortDesc: 'Divide binary numbers with step-by-step long division, quotient, and remainder tracking.',
    metaTitle: 'Binary Division Calculator – Divide Binary Numbers with Steps',
    metaDesc: 'Divide binary numbers online with step-by-step long division table, quotient, remainder, and decimal verification.',
    engineType: 'arithmetic',
    inputConfig: {
      primaryLabel: 'Dividend Binary (A)',
      primaryPlaceholder: 'e.g. 11001',
      defaultValue: '11001',
      hasSecondaryInput: true,
      secondaryLabel: 'Divisor Binary (B)',
      secondaryPlaceholder: 'e.g. 101',
      defaultSecondaryValue: '101',
      helpText: 'Enter dividend and non-zero divisor.'
    },
    whatIs: 'Binary division calculates the quotient and remainder of two binary integers using restoring or non-restoring long division algorithms.',
    howItWorks: 'Compare the divisor to current bits of the dividend. If the divisor is smaller than or equal to the selected bits, place 1 in the quotient and subtract the divisor; otherwise place 0. Bring down the next bit and repeat.',
    formula: 'A = (Q \\times B) + R \\quad \\text{where } 0 \\le R < B',
    example: 'Divide 11001_2 (25) by 101_2 (5):\n101 goes into 110 -> 1 time, remainder 1\nBring down 0 -> 10, divisor does not go in -> 0\nBring down 1 -> 101, divisor goes in -> 1 time, remainder 0\nQuotient: 101_2 (5), Remainder: 0.',
    rules: [
      'Division by zero (divisor = 0) is mathematically undefined and blocked.',
      'The remainder must always be strictly less than the divisor.'
    ],
    applications: [
      'Hardware division instructions in ALUs (DIV, IDIV).',
      'Cyclic Redundancy Check (CRC) calculation in networking and storage error detection.',
      'Fixed-point and floating-point arithmetic engines.'
    ],
    mistakes: [
      'Attempting division by zero.',
      'Subtracting incorrectly during partial division steps.'
    ],
    faqs: [
      {
        question: 'What happens if you divide by zero in binary?',
        answer: 'Division by zero is undefined and triggers a divide-by-zero CPU trap or exception.'
      }
    ],
    relatedSlugs: ['binary-multiplication-calculator', 'binary-subtraction-calculator', 'binary-calculator']
  },
  {
    slug: 'binary-to-gray-code-converter',
    name: 'Binary to Gray Code Converter',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['coding-computer-number'],
    shortDesc: 'Convert natural binary numbers to reflected Gray code using bitwise shift and XOR logic.',
    metaTitle: 'Binary to Gray Code Converter – Convert Binary to Reflected Gray Code',
    metaDesc: 'Convert binary numbers to Gray code online with bitwise XOR formulas, bit charts, and instant step-by-step conversion.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Binary String',
      primaryPlaceholder: 'e.g. 1011',
      defaultValue: '1011',
      helpText: 'Enter binary digits (0 and 1).'
    },
    whatIs: 'Gray code (reflected binary code) is an unweighted numeral system where two consecutive values differ by only one single bit. This unit-distance property prevents false intermediate outputs in digital sensors.',
    howItWorks: 'The Most Significant Bit (MSB) remains identical: G_{n-1} = B_{n-1}. Every subsequent Gray bit is obtained by XORing the current binary bit with the bit to its left: G_i = B_{i+1} \\oplus B_i, or mathematically: G = B \\oplus (B \\gg 1).',
    formula: 'G = B \\oplus (B \\gg 1) \\quad \\text{or} \\quad g_i = b_{i+1} \\oplus b_i',
    example: 'Convert binary 1011 to Gray code:\nMSB: G3 = B3 = 1\nG2 = B3 ⊕ B2 = 1 ⊕ 0 = 1\nG1 = B2 ⊕ B1 = 0 ⊕ 1 = 1\nG0 = B1 ⊕ B0 = 1 ⊕ 1 = 0\nGray Code: 1110.',
    rules: [
      'The most significant bit of binary and Gray code is always identical.',
      'Two adjacent Gray code values differ by exactly 1 bit.'
    ],
    applications: [
      'Optical shaft encoders and mechanical rotary angle sensors.',
      'Clock domain crossing in asynchronous FIFO pointers to eliminate race conditions.',
      'Karnaugh map axis numbering (00, 01, 11, 10).'
    ],
    mistakes: [
      'XORing with the previous Gray bit instead of the previous binary bit.',
      'Altering the MSB.'
    ],
    faqs: [
      {
        question: 'Why is Gray code called a unit-distance code?',
        answer: 'Because transitioning from any integer N to N+1 changes only a single bit, preventing transient glitches in digital circuitry.'
      }
    ],
    relatedSlugs: ['gray-code-to-binary-converter', 'binary-to-bcd-converter', 'binary-to-excess-3-converter']
  },
  {
    slug: 'gray-code-to-binary-converter',
    name: 'Gray Code to Binary Converter',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['coding-computer-number'],
    shortDesc: 'Convert reflected Gray code back to standard natural binary using sequential XOR cascade.',
    metaTitle: 'Gray Code to Binary Converter – Convert Reflected Gray Code to Binary',
    metaDesc: 'Convert Gray code to natural binary online with sequential XOR cascade proofs and instant calculations.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Gray Code String',
      primaryPlaceholder: 'e.g. 1110',
      defaultValue: '1110',
      helpText: 'Enter Gray code bit sequence.'
    },
    whatIs: 'Gray code to binary conversion decodes reflected Gray codes back into natural positional binary integers so computers can perform standard arithmetic on sensor inputs.',
    howItWorks: 'The MSB stays the same: B_{n-1} = G_{n-1}. Each subsequent binary bit is obtained by XORing the newly computed previous binary bit with the current Gray bit: B_i = B_{i+1} \\oplus G_i.',
    formula: 'B_{n-1} = G_{n-1}, \\quad B_i = B_{i+1} \\oplus G_i \\quad (i = n-2 \\text{ down to } 0)',
    example: 'Convert Gray 1110 to binary:\nB3 = G3 = 1\nB2 = B3 ⊕ G2 = 1 ⊕ 1 = 0\nB1 = B2 ⊕ G1 = 0 ⊕ 1 = 1\nB0 = B1 ⊕ G0 = 1 ⊕ 0 = 1\nNatural Binary: 1011 (decimal 11).',
    rules: [
      'The MSB of Gray code equals the MSB of binary.',
      'Each step cascades the newly calculated binary bit forward.'
    ],
    applications: [
      'Decoding industrial absolute rotary encoder angles into microcontroller angles.',
      'Reading asynchronous FIFO read/write pointer counters.',
      'Digital communication error mitigation.'
    ],
    mistakes: [
      'Using the previous Gray bit instead of the calculated binary bit in the cascade.',
      'Starting from LSB instead of MSB.'
    ],
    faqs: [
      {
        question: 'What is Gray code 1111 in natural binary?',
        answer: 'Gray 1111 translates to binary 1010 (decimal 10).'
      }
    ],
    relatedSlugs: ['binary-to-gray-code-converter', 'bcd-to-binary-converter', 'binary-bit-calculator']
  },
  {
    slug: 'binary-to-bcd-converter',
    name: 'Binary to BCD Converter',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['coding-computer-number'],
    shortDesc: 'Convert binary integers into 8421 Binary-Coded Decimal (BCD) 4-bit nibbles.',
    metaTitle: 'Binary to BCD Converter – Convert Binary to 8421 BCD Online',
    metaDesc: 'Convert binary numbers to Binary-Coded Decimal (BCD 8421) online with shift-and-add-3 (double-dabble) breakdown.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Binary String',
      primaryPlaceholder: 'e.g. 10110',
      defaultValue: '10110',
      helpText: 'Enter binary sequence (e.g. 10110 for 22).'
    },
    whatIs: 'Binary to BCD conversion translates natural binary numbers into 8421 Binary-Coded Decimal format, where each individual decimal digit is encoded into a separate 4-bit nibble (0000 to 1001).',
    howItWorks: 'Convert the binary number to its decimal value, then replace each decimal digit with its 4-bit binary representation. In hardware, this is accomplished via the Double-Dabble (Shift-and-Add-3) algorithm.',
    formula: 'D = \\sum d_k 10^k \\xrightarrow{} \\text{BCD} = [\\text{nibble}_k \\dots \\text{nibble}_0] \\quad (0000_2 \\le \\text{nibble} \\le 1001_2)',
    example: 'Convert binary 10110_2 (decimal 22) to BCD:\nDecimal digits are 2 and 2.\n2 -> 0010_2\n2 -> 0010_2\nBCD: 0010 0010.',
    rules: [
      'Each decimal digit requires exactly 4 bits.',
      'Values 1010 through 1111 (10 to 15) are strictly invalid in 8421 BCD.'
    ],
    applications: [
      'Driving 7-segment LED and LCD numeric display controllers.',
      'Financial transaction processing and accounting microchips.',
      'Real-time clock (RTC) chips (e.g., DS1307).'
    ],
    mistakes: [
      'Confusing BCD with standard binary (e.g. thinking decimal 22 in BCD is 10110 instead of 0010 0010).',
      'Allowing nibbles greater than 1001 (9).'
    ],
    faqs: [
      {
        question: 'What is the BCD representation of 99?',
        answer: '99 in BCD is 1001 1001 (two 4-bit nibbles, each representing 9).'
      }
    ],
    relatedSlugs: ['bcd-to-binary-converter', 'decimal-to-bcd-converter', 'binary-to-excess-3-converter']
  },
  {
    slug: 'bcd-to-binary-converter',
    name: 'BCD to Binary Converter',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['coding-computer-number'],
    shortDesc: 'Convert 8421 Binary-Coded Decimal (BCD) nibbles back to standard positional binary.',
    metaTitle: 'BCD to Binary Converter – Convert 8421 BCD to Natural Binary',
    metaDesc: 'Convert BCD numbers to pure binary online with nibble validation and decimal conversion steps.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'BCD String (4-bit groups)',
      primaryPlaceholder: 'e.g. 0010 0101',
      defaultValue: '0010 0101',
      helpText: 'Enter 4-bit BCD nibbles (valid digits 0000-1001 only).'
    },
    whatIs: 'BCD to binary conversion decodes 4-bit BCD nibbles from electronic sensors or clock chips back into standard natural binary for CPU arithmetic.',
    howItWorks: 'Break the BCD string into 4-bit groups. Verify that no group exceeds 1001 (9). Convert each nibble to its decimal digit, reconstruct the decimal value, and convert the decimal number to binary.',
    formula: 'N_{10} = \\sum_{i=0}^{m-1} (\\text{nibble}_i \\times 10^i) \\xrightarrow{} N_2',
    example: 'Convert BCD 0010 0101 to binary:\nNibble 1: 0010 -> 2\nNibble 2: 0101 -> 5\nDecimal = 25\nConvert 25 to binary: 11001_2.',
    rules: [
      'Any nibble from 1010 to 1111 is illegal in 8421 BCD.',
      'Input length should be a multiple of 4 bits.'
    ],
    applications: [
      'Reading time registers from hardware Real-Time Clocks (RTC).',
      'Processing digital multimeter readings in embedded controllers.',
      'Interfacing legacy BCD thumbwheel switches.'
    ],
    mistakes: [
      'Entering invalid nibbles like 1011 or 1111.',
      'Treating the entire BCD string as a raw binary integer.'
    ],
    faqs: [
      {
        question: 'Why are nibbles greater than 1001 invalid in BCD?',
        answer: 'Because decimal digits only range from 0 to 9. The binary values 1010 to 1111 represent 10 to 15, which cannot fit into a single decimal digit.'
      }
    ],
    relatedSlugs: ['binary-to-bcd-converter', 'decimal-to-bcd-converter', 'excess-3-to-binary-converter']
  },
  {
    slug: 'binary-to-excess-3-converter',
    name: 'Binary to Excess-3 Converter',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['coding-computer-number'],
    shortDesc: 'Convert binary numbers into Excess-3 (XS-3 / Stibitz) self-complementing code.',
    metaTitle: 'Binary to Excess-3 Converter – Convert Binary to XS-3 Code Online',
    metaDesc: 'Convert binary numbers to Excess-3 code online with BCD + 0011 steps, self-complementing proofs, and instant results.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Binary String',
      primaryPlaceholder: 'e.g. 1001',
      defaultValue: '1001',
      helpText: 'Enter binary sequence (e.g. 1001 for 9).'
    },
    whatIs: 'Excess-3 code (XS-3 or Stibitz code) is an unweighted, self-complementing digital encoding formed by adding 3 (binary 0011) to each digit of an 8421 BCD number.',
    howItWorks: 'Convert the binary number to its decimal digits. Add 3 to each decimal digit (d + 3), then convert each resulting sum into a 4-bit binary nibble.',
    formula: '\\text{XS-3}_k = (d_k + 3)_{10} \\xrightarrow{} 4\\text{-bit binary}',
    example: 'Convert binary 1001_2 (decimal 9) to Excess-3:\nDigit = 9\n9 + 3 = 12\n12 in 4-bit binary is 1100_2\nExcess-3: 1100.',
    rules: [
      'Every decimal digit maps to a 4-bit nibble from 0011 (0+3) to 1100 (9+3).',
      'It is self-complementing: bitwise inverting an XS-3 code produces the 9’s complement of the decimal digit.'
    ],
    applications: [
      'Arithmetic simplification in early electromechanical and decimal computers.',
      'Fast decimal 9’s complement generation without borrow circuitry.',
      'Educational instruction in digital logic coding.'
    ],
    mistakes: [
      'Adding 3 to the total binary number instead of adding 3 to each individual decimal digit.',
      'Allowing nibble sums greater than 1100 (12).'
    ],
    faqs: [
      {
        question: 'Why is Excess-3 called a self-complementing code?',
        answer: 'Because taking the 1’s complement (inverting all bits) of an Excess-3 nibble automatically yields the Excess-3 code of that digit’s 9’s complement (e.g. inverting 0 gives 9).'
      }
    ],
    relatedSlugs: ['excess-3-to-binary-converter', 'binary-to-bcd-converter', 'binary-to-gray-code-converter']
  },
  {
    slug: 'excess-3-to-binary-converter',
    name: 'Excess-3 to Binary Converter',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['coding-computer-number'],
    shortDesc: 'Convert Excess-3 (XS-3) code nibbles back into standard natural binary.',
    metaTitle: 'Excess-3 to Binary Converter – Convert XS-3 to Natural Binary',
    metaDesc: 'Convert Excess-3 code back to binary online with nibble subtraction (minus 0011) and decimal verification.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Excess-3 String (4-bit groups)',
      primaryPlaceholder: 'e.g. 0101 1000',
      defaultValue: '0101 1000',
      helpText: 'Enter 4-bit Excess-3 nibbles.'
    },
    whatIs: 'Excess-3 to binary conversion translates XS-3 encoded values back into natural binary by subtracting 3 (0011) from each 4-bit nibble.',
    howItWorks: 'Split the input into 4-bit nibbles. Convert each nibble to decimal and subtract 3 (d = value - 3). Combine the decimal digits and convert the resulting number into binary.',
    formula: 'd_k = \\text{nibble}_k - 3 \\xrightarrow{} N_{10} \\xrightarrow{} N_2',
    example: 'Convert Excess-3 0101 1000 to binary:\nNibble 1: 0101 (5) - 3 = 2\nNibble 2: 1000 (8) - 3 = 5\nDecimal = 25\nConvert 25 to binary: 11001_2.',
    rules: [
      'Each valid XS-3 nibble must be between 0011 (3) and 1100 (12).',
      'Nibbles below 0011 or above 1100 are invalid.'
    ],
    applications: [
      'Decoding legacy computer memory stores and registers.',
      'Reverse-engineering arithmetic circuits in older digital controllers.',
      'Computer architecture lab exercises.'
    ],
    mistakes: [
      'Subtracting 3 from the entire number instead of from each individual 4-bit nibble.',
      'Entering nibbles with values less than 3 or greater than 12.'
    ],
    faqs: [
      {
        question: 'What is the minimum valid nibble in Excess-3?',
        answer: '0011 (decimal 3), which corresponds to the decimal digit 0.'
      }
    ],
    relatedSlugs: ['binary-to-excess-3-converter', 'bcd-to-binary-converter', 'binary-bit-calculator']
  },
  {
    slug: 'binary-bit-calculator',
    name: 'Binary Bit Calculator',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['digital-electronics'],
    shortDesc: 'Analyze binary strings: count set bits (Hamming weight), total length, leading/trailing zeros, and parity.',
    metaTitle: 'Binary Bit Calculator – Count Bits, Parity & Hamming Weight Online',
    metaDesc: 'Analyze binary strings online: compute bit count, set bits (population count), leading/trailing zeros, and even/odd parity.',
    engineType: 'bitwise',
    inputConfig: {
      primaryLabel: 'Binary String',
      primaryPlaceholder: 'e.g. 00101100',
      defaultValue: '00101100',
      helpText: 'Enter any binary bitstream.'
    },
    whatIs: 'The Binary Bit Calculator evaluates low-level bit properties of binary sequences, including total bit width, set bits (population count / Hamming weight), cleared bits, leading/trailing zeros, and parity flags.',
    howItWorks: 'Iterate through the bit pattern to tally 1s and 0s, determine parity (even or odd based on total 1s), and identify run lengths of leading and trailing zeros.',
    formula: '\\text{Hamming Weight} = \\sum_{i=0}^{n-1} b_i, \\quad \\text{Parity} = \\bigoplus_{i=0}^{n-1} b_i',
    example: 'Analyze 00101100:\nTotal length: 8 bits\nSet bits (1s): 3\nCleared bits (0s): 5\nLeading zeros: 2\nTrailing zeros: 2\nParity: Odd (3 is odd).',
    rules: [
      'Hamming weight is the number of 1s in the string.',
      'Even parity means the total count of 1s is an even number.'
    ],
    applications: [
      'Error detecting code generation (parity bits in serial communications like UART).',
      'Optimizing bitboard operations in chess engines and graph algorithms.',
      'Calculating Hamming distances in cryptography and bioinformatics.'
    ],
    mistakes: [
      'Confusing parity with odd/even value (parity depends on the count of 1s, not the LSB).',
      'Counting leading zeros when string is stripped.'
    ],
    faqs: [
      {
        question: 'What is population count (popcount)?',
        answer: 'Population count is a CPU instruction (POPCNT) that returns the total number of set bits (1s) in a register.'
      }
    ],
    relatedSlugs: ['bit-calculator', 'binary-number-validator', 'binary-fraction-converter']
  },
  {
    slug: 'binary-fraction-converter',
    name: 'Binary Fraction Converter',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['number-representation'],
    shortDesc: 'Convert fractional binary numbers into decimal fractions and vice versa with negative powers of 2.',
    metaTitle: 'Binary Fraction Converter – Convert Binary Fractions to Decimal Online',
    metaDesc: 'Convert fractional binary numbers to decimal and decimal fractions to binary online with step-by-step proofs.',
    engineType: 'float',
    inputConfig: {
      primaryLabel: 'Binary Fraction (with radix point)',
      primaryPlaceholder: 'e.g. 0.1011 or 11.01',
      defaultValue: '0.1011',
      helpText: 'Enter a binary number with an optional fractional point (e.g. 0.1011).'
    },
    whatIs: 'A binary fraction represents real numbers with fractional components in base 2. Digits to the right of the radix point represent successive negative powers of two: 2^-1 = 0.5, 2^-2 = 0.25, 2^-3 = 0.125, 2^-4 = 0.0625, and so on.',
    howItWorks: 'Multiply each bit to the right of the point by 2^-i and sum them: Value = b_1(0.5) + b_2(0.25) + b_3(0.125) + ...',
    formula: 'V = \\sum_{i=1}^{m} b_{-i} \\times 2^{-i}',
    example: 'Convert 0.1011_2 to decimal:\n1 × 2^-1 = 0.5\n0 × 2^-2 = 0.0\n1 × 2^-3 = 0.125\n1 × 2^-4 = 0.0625\nSum: 0.5 + 0.125 + 0.0625 = 0.6875_{10}.',
    rules: [
      'Each position to the right of the binary point is half the value of the previous position.',
      'Some decimal fractions (like 0.1) cannot be represented finitely in binary and repeat infinitely.'
    ],
    applications: [
      'Fixed-point arithmetic in digital audio signal processors (DSPs).',
      'Understanding floating-point roundoff errors in numerical software.',
      'Embedded microcontroller sensor calibration.'
    ],
    mistakes: [
      'Treating fractional bits as integers (e.g. thinking 0.1 is 0.1 in decimal instead of 0.5).',
      'Using powers of 10 instead of powers of 2.'
    ],
    faqs: [
      {
        question: 'What is 0.1 in binary equal to in decimal?',
        answer: '0.1 in binary equals 2^-1 = 0.5 in decimal.'
      },
      {
        question: 'Why does 0.1 decimal produce an infinite repeating binary fraction?',
        answer: 'Because 10 contains a prime factor of 5, which is not a factor of the binary base 2. In base 2, 0.1 is 0.0001100110011... repeating forever.'
      }
    ],
    relatedSlugs: ['convert-decimal-fraction-to-binary', 'binary-floating-point-converter', 'ieee-754-converter']
  },
  {
    slug: 'binary-floating-point-converter',
    name: 'Binary Floating-Point Converter',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['number-representation'],
    shortDesc: 'Dissect real decimal numbers into binary floating-point scientific notation (significand and exponent).',
    metaTitle: 'Binary Floating-Point Converter – Real Numbers to Binary Scientific Notation',
    metaDesc: 'Convert real numbers to binary floating-point representation with normalized scientific notation and binary fractional bits.',
    engineType: 'float',
    inputConfig: {
      primaryLabel: 'Real Number',
      primaryPlaceholder: 'e.g. 13.625 or -0.375',
      defaultValue: '13.625',
      helpText: 'Enter any real decimal number with optional decimal point.'
    },
    whatIs: 'Binary floating-point representation expresses real numbers in normalized binary scientific notation: (-1)^sign × 1.fraction × 2^exponent.',
    howItWorks: 'Convert the integer part to binary. Convert the fractional part by repeated multiplication by 2. Normalize the combined binary string so exactly one leading 1 appears before the binary point, and adjust the power of 2 accordingly.',
    formula: 'N = (-1)^S \\times (1.M)_2 \\times 2^E',
    example: 'Convert 13.625 to binary scientific notation:\n13 = 1101_2\n0.625 = 0.101_2 (0.625×2=1.25 -> 1, 0.25×2=0.5 -> 0, 0.5×2=1.0 -> 1)\nCombined: 1101.101_2\nNormalize: 1.101101_2 × 2^3\nSign = +, Exponent = 3, Mantissa = 101101.',
    rules: [
      'Normalized numbers always have an implicit leading 1 before the binary point.',
      'The exponent shifts the binary point left (negative) or right (positive).'
    ],
    applications: [
      'Bridging real mathematical numbers to IEEE-754 hardware float registers.',
      'Graphics shader mathematics in OpenGL and DirectX.',
      'Scientific computation simulation algorithms.'
    ],
    mistakes: [
      'Normalizing with a leading 0 instead of 1.',
      'Miscalculating the fractional multiplication remainders.'
    ],
    faqs: [
      {
        question: 'What is a normalized binary floating-point number?',
        answer: 'A normalized binary float has exactly one non-zero digit (always 1 in binary) immediately to the left of the binary point: 1.fraction × 2^exponent.'
      }
    ],
    relatedSlugs: ['ieee-754-converter', 'binary-fraction-converter', 'float32-converter']
  },
  {
    slug: 'binary-number-validator',
    name: 'Binary Number Validator',
    categorySlug: 'binary',
    categoryName: 'Binary Tools',
    secondaryCategories: ['base-conversion'],
    shortDesc: 'Verify if a string is a valid binary sequence and inspect character legality, length, and format.',
    metaTitle: 'Binary Number Validator – Check if a String is Valid Binary Online',
    metaDesc: 'Validate binary strings online. Instantly check for invalid characters, bit length, whitespace, and formatting compliance.',
    engineType: 'validator',
    inputConfig: {
      primaryLabel: 'Candidate Binary String',
      primaryPlaceholder: 'e.g. 10101100',
      defaultValue: '10101100',
      helpText: 'Enter any text to check if it represents valid binary.'
    },
    whatIs: 'The Binary Number Validator inspects an input string to ensure it strictly conforms to base-2 rules, containing exclusively the digits 0 and 1 without illegal characters, symbols, or unallowable radix notation.',
    howItWorks: 'Scans every character in the string against the allowable set {0, 1}. Flags any character outside this alphabet, checks whether leading prefixes (like 0b) are valid, and measures total length.',
    formula: '\\forall c \\in \\text{String}, \\quad c \\in \\{0, 1\\}',
    example: 'Validating "1010201":\nCharacter "2" detected at index 4!\nStatus: INVALID binary number.',
    rules: [
      'Only digits "0" and "1" are permitted in pure binary.',
      'Spaces, commas, and letters (except standard prefix 0b) render a number invalid.'
    ],
    applications: [
      'Input sanitization in web forms, CLI parsers, and compilers.',
      'Hardware verification testbenches for automated register validation.',
      'Educational testing of student submissions.'
    ],
    mistakes: [
      'Accidentally including letters like "O" or "l" instead of digits "0" or "1".',
      'Leaving trailing spaces or punctuation.'
    ],
    faqs: [
      {
        question: 'Is 0b1011 a valid binary number?',
        answer: 'Yes, "0b" is the standard language prefix denoting a binary literal in C, Python, JavaScript, and Rust.'
      }
    ],
    relatedSlugs: ['binary-bit-calculator', 'base-n-number-validator', 'binary-to-decimal']
  }
];

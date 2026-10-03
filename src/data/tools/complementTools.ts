import type { ToolDefinition } from '../types';

export const COMPLEMENT_TOOLS: ToolDefinition[] = [
  {
    slug: '1s-complement-calculator',
    name: "1's Complement Calculator",
    categorySlug: 'complement',
    categoryName: 'Complement Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Calculate the 1’s complement of binary numbers by inverting every bit (bitwise NOT).',
    metaTitle: "1's Complement Calculator – Compute One's Complement Online",
    metaDesc: "Calculate 1's complement of binary numbers online with bit inversion proofs, negative representation, and dual-zero analysis.",
    engineType: 'complement',
    inputConfig: {
      primaryLabel: 'Binary String or Decimal',
      primaryPlaceholder: 'e.g. 10110010 or -45',
      defaultValue: '10110010',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter a binary string or decimal signed number.'
    },
    whatIs: "One's Complement (1's complement) is a method for representing signed numbers in binary where negative values are obtained by inverting every bit (0 becomes 1, and 1 becomes 0).",
    howItWorks: "Perform a bitwise NOT on all bits of the fixed-width binary register. To represent a negative number -N, first write the binary value of +N padded to the specified bit width, then flip every 0 to 1 and every 1 to 0.",
    formula: "\\text{1's Complement of } X = (2^n - 1) - X = \\sim X",
    example: "Find the 8-bit 1's complement of +45 (binary 00101101):\nInvert every bit:\n0 -> 1, 0 -> 1, 1 -> 0, 0 -> 1, 1 -> 0, 1 -> 0, 0 -> 1, 1 -> 0\nResult: 11010010 (represents -45 in 1's complement).",
    rules: [
      "Every bit is flipped (0 <-> 1).",
      "Features two representations of zero: +0 (all zeros) and -0 (all ones).",
      "Addition requires an 'end-around carry' step if a carry out of the MSB occurs."
    ],
    applications: [
      "Internet Checksum calculation in IPv4 and TCP/UDP header verification.",
      "Legacy computer architectures (UNIVAC, CDC 6600).",
      "Educational foundation for understanding Two’s Complement."
    ],
    mistakes: [
      "Adding 1 to the result (adding 1 produces 2's complement, not 1's complement).",
      "Forgetting to pad with leading zeros to the full bit width before inverting."
    ],
    faqs: [
      {
        question: "Why does 1's complement have two zeros?",
        answer: "+0 is 00000000 and -0 is 11111111 (inverting all zeros gives all ones). This dual-zero redundancy is why modern microprocessors use 2's complement instead."
      }
    ],
    relatedSlugs: ['2s-complement-calculator', '1s-to-2s-complement-converter', '1s-complement-representation']
  },
  {
    slug: '2s-complement-calculator',
    name: "2's Complement Calculator",
    categorySlug: 'complement',
    categoryName: 'Complement Tools',
    secondaryCategories: ['binary', 'number-representation'],
    shortDesc: 'Compute the 2’s complement for signed binary numbers across 8, 16, 32, and 64-bit architectures.',
    metaTitle: "2's Complement Calculator – Compute Two's Complement with Steps",
    metaDesc: "Calculate 2's complement online for 8-bit, 16-bit, 32-bit, and 64-bit signed integers with step-by-step bit inversion (+1) proofs.",
    engineType: 'complement',
    inputConfig: {
      primaryLabel: 'Signed Decimal or Binary',
      primaryPlaceholder: 'e.g. -42 or 101010',
      defaultValue: '-42',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter a signed decimal integer or binary string.'
    },
    whatIs: "Two's Complement (2's complement) is the universal mathematical standard for representing signed integers in modern computing hardware. It is formed by taking the 1's complement (inverting all bits) and adding 1 to the least significant bit.",
    howItWorks: "1) Write the positive value in n-bit binary. 2) Invert all bits (~X). 3) Add 1 to the LSB (~X + 1). Alternatively, scan from right to left, keep all bits up to and including the first 1 unchanged, and flip all remaining bits to the left.",
    formula: "\\text{2's Complement} = 2^n - X = \\sim X + 1",
    example: "Compute 8-bit 2's complement of -42:\n1) +42 in 8-bit binary: 00101010\n2) Invert all bits: 11010101\n3) Add 1: 11010101 + 1 = 11010110_2\nResult: 11010110 represents -42.",
    rules: [
      "MSB is the sign bit: 0 for positive or zero, 1 for negative.",
      "An n-bit register represents range -2^(n-1) to +2^(n-1) - 1.",
      "Has a single, unambiguous zero: 00000000."
    ],
    applications: [
      "All modern CPU and GPU integer arithmetic units (x86, ARM, RISC-V).",
      "Allowing subtraction to be computed using standard addition circuits: A - B = A + (~B + 1).",
      "Signed integer data types in C, C++, Java, Rust (int8, int16, int32, int64)."
    ],
    mistakes: [
      "Forgetting to add 1 after flipping bits.",
      "Exceeding the signed range for the chosen bit width (overflow)."
    ],
    faqs: [
      {
        question: "Why do modern computers use 2's complement instead of 1's complement?",
        answer: "2's complement has only one representation for zero and allows addition and subtraction to use the exact same adder circuit without sign checks or end-around carry logic."
      }
    ],
    relatedSlugs: ['1s-complement-calculator', 'twos-complement-range-calculator', '2s-complement-representation']
  },
  {
    slug: '9s-complement-calculator',
    name: "9's Complement Calculator",
    categorySlug: 'complement',
    categoryName: 'Complement Tools',
    secondaryCategories: ['decimal'],
    shortDesc: 'Calculate the 9’s complement of decimal numbers by subtracting each digit from 9.',
    metaTitle: "9's Complement Calculator – Compute Nine's Complement Online",
    metaDesc: "Calculate 9's complement of decimal numbers online with step-by-step subtraction from 9 and decimal subtraction proofs.",
    engineType: 'complement',
    inputConfig: {
      primaryLabel: 'Decimal Number',
      primaryPlaceholder: 'e.g. 452 or 789',
      defaultValue: '452',
      helpText: 'Enter any positive base 10 integer.'
    },
    whatIs: "Nine's Complement (9's complement) is the radix-minus-one complement for the decimal (base 10) number system. It is calculated by subtracting each digit of a number from 9.",
    howItWorks: "For an m-digit number N, the 9's complement is obtained by subtracting N from (10^m - 1), which is a sequence of m nines (e.g. 999 - N for a 3-digit number).",
    formula: "\\text{9's Complement of } N = (10^m - 1) - N",
    example: "Find the 9's complement of 452 (3 digits):\n  999\n- 452\n-----\n  547.",
    rules: [
      "Every individual digit is subtracted from 9.",
      "Used in decimal subtraction to replace subtraction with addition.",
      "Requires an end-around carry when adding in 9's complement arithmetic."
    ],
    applications: [
      "Early mechanical and electromechanical decimal calculating machines.",
      "Decimal subtraction in BCD and Excess-3 hardware ALUs.",
      "Foundational theory of radix-minus-one complements."
    ],
    mistakes: [
      "Subtracting from 10 instead of 9 (subtracting from 10 produces 10's complement).",
      "Forgetting leading zeros when calculating for a fixed register width."
    ],
    faqs: [
      {
        question: "What is the relationship between 9's complement and Excess-3 code?",
        answer: "Excess-3 is self-complementing: taking the 1's complement (inverting bits) of an Excess-3 nibble automatically yields the Excess-3 code of that digit's 9's complement."
      }
    ],
    relatedSlugs: ['10s-complement-calculator', '1s-complement-calculator', 'decimal-to-bcd-converter']
  },
  {
    slug: '10s-complement-calculator',
    name: "10's Complement Calculator",
    categorySlug: 'complement',
    categoryName: 'Complement Tools',
    secondaryCategories: ['decimal'],
    shortDesc: 'Calculate the 10’s complement of decimal numbers by taking the 9’s complement and adding 1.',
    metaTitle: "10's Complement Calculator – Compute Ten's Complement Online",
    metaDesc: "Calculate 10's complement of decimal numbers online with step-by-step 9's complement + 1 proofs and decimal arithmetic.",
    engineType: 'complement',
    inputConfig: {
      primaryLabel: 'Decimal Number',
      primaryPlaceholder: 'e.g. 452',
      defaultValue: '452',
      helpText: 'Enter a base 10 integer.'
    },
    whatIs: "Ten's Complement (10's complement) is the true radix complement for decimal (base 10) numbers. It is formed by taking the 9's complement and adding 1 to the units digit.",
    howItWorks: "For an m-digit decimal number N, calculate (10^m - N), or take the 9's complement and add 1. In 10's complement subtraction, no end-around carry is needed—any carry past the most significant digit is simply discarded.",
    formula: "\\text{10's Complement of } N = 10^m - N = (\\text{9's Complement}) + 1",
    example: "Find the 10's complement of 452:\n1) 9's complement: 999 - 452 = 547\n2) Add 1: 547 + 1 = 548\nAlternatively: 1000 - 452 = 548.",
    rules: [
      "10's complement = 9's complement + 1.",
      "Discard any end carry when subtracting using 10's complement."
    ],
    applications: [
      "Decimal subtraction in hardware BCD processors without borrow circuits.",
      "Financial calculation accelerators in mainframe computing.",
      "Mathematical analysis of radix complements."
    ],
    mistakes: [
      "Forgetting to add 1 to the 9's complement.",
      "Using the wrong power of 10 for the number of digits."
    ],
    faqs: [
      {
        question: "How do you subtract using 10's complement?",
        answer: "To calculate A - B, find the 10's complement of B and add it to A. Discard the carry out of the most significant position."
      }
    ],
    relatedSlugs: ['9s-complement-calculator', '2s-complement-calculator', 'decimal-to-bcd-converter']
  },
  {
    slug: '1s-to-2s-complement-converter',
    name: "1's ↔ 2's Complement Converter",
    categorySlug: 'complement',
    categoryName: 'Complement Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Convert seamlessly between 1’s complement and 2’s complement representations with step-by-step proofs.',
    metaTitle: "1's ↔ 2's Complement Converter – Convert Between 1's and 2's Complement",
    metaDesc: "Convert between 1's and 2's complement binary numbers online with +1 / -1 carry proofs and architecture comparisons.",
    engineType: 'complement',
    inputConfig: {
      primaryLabel: 'Binary String',
      primaryPlaceholder: 'e.g. 11010110',
      defaultValue: '11010110',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter a binary string in 1’s or 2’s complement.'
    },
    whatIs: "This converter transitions binary representations between 1's complement and 2's complement formats. For negative numbers, 2's complement is exactly equal to 1's complement plus 1 (and 1's complement equals 2's complement minus 1).",
    howItWorks: "If positive (MSB=0), both representations are identical. If negative (MSB=1): to convert 1's to 2's, add 1; to convert 2's to 1's, subtract 1.",
    formula: "\\text{2's Complement} = \\text{1's Complement} + 1, \\quad \\text{1's Complement} = \\text{2's Complement} - 1",
    example: "Convert 1's complement 11010101 (-42) to 2's complement:\n  11010101 (1's comp)\n+        1\n----------\n  11010110 (2's comp).",
    rules: [
      "Positive numbers (MSB=0) are identical in both 1's and 2's complement.",
      "Negative numbers (MSB=1) differ by exactly 1 in the least significant bit."
    ],
    applications: [
      "Protocol conversion when interfacing legacy 1's complement systems with modern 2's complement architectures.",
      "Verification of ALU adder/subtractor logic designs.",
      "Academic coursework in computer systems."
    ],
    mistakes: [
      "Altering positive numbers (positive numbers are identical in both representations).",
      "Making carry errors when adding 1 to a sequence ending in 1s."
    ],
    faqs: [
      {
        question: "Are positive numbers different in 1's and 2's complement?",
        answer: "No. For positive numbers, both 1's complement and 2's complement use the exact same standard binary representation."
      }
    ],
    relatedSlugs: ['1s-complement-calculator', '2s-complement-calculator', 'signed-binary-calculator']
  },
  {
    slug: 'signed-binary-calculator',
    name: 'Signed Binary Calculator',
    categorySlug: 'complement',
    categoryName: 'Complement Tools',
    secondaryCategories: ['binary', 'number-representation'],
    shortDesc: 'Analyze signed binary numbers across Signed Magnitude, 1’s Complement, and 2’s Complement formats.',
    metaTitle: 'Signed Binary Calculator – Compare Signed Binary Formats Online',
    metaDesc: 'Calculate and compare signed binary numbers in Signed Magnitude, 1’s Complement, and 2’s Complement across 8/16/32/64 bits.',
    engineType: 'complement',
    inputConfig: {
      primaryLabel: 'Signed Decimal or Binary',
      primaryPlaceholder: 'e.g. -75 or 10110101',
      defaultValue: '-75',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter a decimal signed number or raw binary sequence.'
    },
    whatIs: 'The Signed Binary Calculator provides a side-by-side comparison of how a signed number is encoded across the three primary computer arithmetic conventions: Signed Magnitude, 1’s Complement, and 2’s Complement.',
    howItWorks: 'Evaluates the sign bit (MSB) and computes the exact bit pattern and decimal interpretation under all three systems for any selected bit width (8, 16, 32, or 64 bits).',
    formula: "\\text{Sign-Mag}: [s, \\text{mag}], \\quad \\text{1's Comp}: \\sim X, \\quad \\text{2's Comp}: \\sim X + 1",
    example: "Evaluate -5 in 8-bit registers:\nSigned Magnitude: 10000101 (sign bit 1 + magnitude 5)\n1's Complement: 11111010 (flip bits of 00000101)\n2's Complement: 11111011 (1's complement + 1).",
    rules: [
      "In all three systems, MSB = 0 denotes positive, and MSB = 1 denotes negative.",
      "Signed magnitude and 1's complement have two zeros; 2's complement has only one."
    ],
    applications: [
      "Understanding low-level hardware representation differences.",
      "Debugging binary serialization and cross-platform type casting bugs.",
      "Digital logic exam preparation."
    ],
    mistakes: [
      "Assuming all three systems produce the same bit pattern for negative numbers.",
      "Forgetting that 2's complement can represent one extra negative number."
    ],
    faqs: [
      {
        question: "Which signed system is used in everyday computers?",
        answer: "Two’s Complement is used almost exclusively in all modern CPU architectures, memory systems, and programming languages."
      }
    ],
    relatedSlugs: ['sign-magnitude-converter', '2s-complement-calculator', 'signed-integer-range-calculator']
  },
  {
    slug: 'sign-magnitude-converter',
    name: 'Sign-Magnitude Converter',
    categorySlug: 'complement',
    categoryName: 'Complement Tools',
    secondaryCategories: ['binary', 'number-representation'],
    shortDesc: 'Convert signed decimal numbers to Sign-Magnitude binary format and decode sign-magnitude bits.',
    metaTitle: 'Sign-Magnitude Converter – Convert Signed Magnitude Binary Online',
    metaDesc: 'Convert between decimal and Sign-Magnitude binary online with sign bit and magnitude separation proofs.',
    engineType: 'complement',
    inputConfig: {
      primaryLabel: 'Signed Decimal or Binary',
      primaryPlaceholder: 'e.g. -27 or 10011011',
      defaultValue: '-27',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter a signed decimal integer or binary string.'
    },
    whatIs: "Sign-Magnitude (or signed magnitude) representation dedicates the most significant bit (MSB) as a sign flag (0 for positive, 1 for negative) while the remaining bits encode the absolute magnitude of the number in standard binary.",
    howItWorks: "For an n-bit register: determine the sign (0 or 1). Convert the absolute magnitude |N| into an (n-1)-bit binary string. Combine the sign bit with the magnitude string.",
    formula: "X = (-1)^s \\times \\sum_{i=0}^{n-2} b_i 2^i \\quad \\text{where } s = b_{n-1}",
    example: "Convert -27 to 8-bit sign-magnitude:\n1) Sign is negative -> MSB = 1\n2) Magnitude |27| in 7-bit binary: 0011011\n3) Combine: 1 0011011 -> 10011011.",
    rules: [
      "MSB is strictly the sign bit (0 = positive, 1 = negative).",
      "Remaining n-1 bits represent magnitude.",
      "Has dual zeros: +0 is 00000000 and -0 is 10000000."
    ],
    applications: [
      "Mantissa representation in IEEE-754 floating-point numbers.",
      "Analog-to-digital converter (ADC) signed output codes.",
      "Audio sample sign encoding in early digital signal processors."
    ],
    mistakes: [
      "Confusing sign-magnitude with Two’s Complement (in sign-magnitude, the magnitude bits are NOT inverted).",
      "Overflowing the (n-1) magnitude bit limit."
    ],
    faqs: [
      {
        question: "Why was sign-magnitude abandoned for integer arithmetic in CPUs?",
        answer: "Because it requires separate circuits for addition and subtraction, and has two zeros (+0 and -0), which complicates zero-testing logic."
      }
    ],
    relatedSlugs: ['signed-binary-calculator', '1s-complement-calculator', '2s-complement-calculator']
  },
  {
    slug: '1s-complement-representation',
    name: "1's Complement Representation",
    categorySlug: 'complement',
    categoryName: 'Complement Tools',
    secondaryCategories: ['binary', 'number-representation'],
    shortDesc: 'Inspect how positive and negative numbers map to bit patterns under 1’s Complement notation.',
    metaTitle: "1's Complement Representation – Interactive Bit Mapping & Visualizer",
    metaDesc: "Explore 1's complement representation online with bit charts, sign inversion proofs, and end-around carry demonstrations.",
    engineType: 'complement',
    inputConfig: {
      primaryLabel: 'Value (Decimal or Binary)',
      primaryPlaceholder: 'e.g. -18 or 11101101',
      defaultValue: '-18',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter an integer to inspect its 1’s complement bit fields.'
    },
    whatIs: "1's Complement Representation is a signed binary coding system where the negative of any number is formed by taking its bitwise NOT. It maps both positive and negative values symmetrically around zero.",
    howItWorks: "Inspect the MSB to determine the sign. If 0, the remaining bits directly represent the positive value. If 1, the number is negative and its absolute value is found by inverting all bits.",
    formula: "\\text{Value} = -b_{n-1}(2^{n-1} - 1) + \\sum_{i=0}^{n-2} b_i 2^i",
    example: "Decode 8-bit 1's complement 11101101:\nMSB is 1 -> Negative number\nInvert all bits: ~11101101 = 00010010\n00010010_2 = 18 in decimal\nResult: -18.",
    rules: [
      "Range for n bits: -(2^(n-1) - 1) to +(2^(n-1) - 1).",
      "Two representations of zero (+0 and -0)."
    ],
    applications: [
      "TCP/IP header checksum calculation algorithm (RFC 791 and RFC 793).",
      "Historical computer systems (UNIVAC 1100 series).",
      "Teaching digital logic arithmetic fundamentals."
    ],
    mistakes: [
      "Decoding a negative 1's complement number by adding 1 before inverting.",
      "Misidentifying 11111111 as -1 (in 1's complement it represents -0; in 2's complement it represents -1)."
    ],
    faqs: [
      {
        question: "What does 11111111 represent in 1's complement?",
        answer: "In 1's complement, 11111111 represents negative zero (-0)."
      }
    ],
    relatedSlugs: ['1s-complement-calculator', '2s-complement-representation', 'signed-binary-calculator']
  },
  {
    slug: '2s-complement-representation',
    name: "2's Complement Representation",
    categorySlug: 'complement',
    categoryName: 'Complement Tools',
    secondaryCategories: ['binary', 'number-representation'],
    shortDesc: 'Visualize 2’s complement bit mappings, negative weighting of the MSB, and asymmetric range limits.',
    metaTitle: "2's Complement Representation – Bit Mapping & Arithmetic Visualizer",
    metaDesc: "Explore 2's complement representation online with negative MSB weighting proofs (-2^(n-1)), bit-level visualizers, and range analysis.",
    engineType: 'complement',
    inputConfig: {
      primaryLabel: 'Value (Decimal or Binary)',
      primaryPlaceholder: 'e.g. -128 or 10000000',
      defaultValue: '-128',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter an integer to inspect its Two’s Complement bit fields.'
    },
    whatIs: "Two's Complement Representation is the standard method for signed integers in computing. The most significant bit (MSB) carries a negative weight of -2^(n-1), while all other bits carry positive powers of two.",
    howItWorks: "Calculate the value as: Value = -b_{n-1}×2^{n-1} + sum(b_i×2^i for i=0 to n-2). This direct positional weighting formula allows any Two’s Complement number to be evaluated directly without separate sign branches.",
    formula: "\\text{Value} = -b_{n-1} 2^{n-1} + \\sum_{i=0}^{n-2} b_i 2^i",
    example: "Evaluate 8-bit Two's Complement 10000101:\nValue = -(1 × 2^7) + (0 × 2^6) + ... + (1 × 2^2) + (0 × 2^1) + (1 × 2^0)\n= -128 + 4 + 1 = -123_{10}.",
    rules: [
      "The MSB carries a weight of -2^(n-1).",
      "Range for n bits: -2^(n-1) to +2^(n-1) - 1.",
      "The absolute negative limit (-2^(n-1)) has no positive counterpart (e.g. -128 has no +128 in an 8-bit signed byte)."
    ],
    applications: [
      "All integer variables in modern languages (signed char, short, int, long).",
      "CPU condition flags (Zero flag ZF, Sign flag SF, Overflow flag OF).",
      "Microcontroller register arithmetic."
    ],
    mistakes: [
      "Assuming the range is symmetric (it is asymmetric: 8-bit is -128 to +127).",
      "Inverting bits of a positive number (only negative numbers undergo inversion + 1)."
    ],
    faqs: [
      {
        question: "Why is the negative range 1 larger than the positive range in 2's complement?",
        answer: "Because 0 uses one of the positive bit patterns (00000000), leaving 2^(n-1) - 1 positive values, while all 2^(n-1) negative patterns can represent negative values."
      }
    ],
    relatedSlugs: ['2s-complement-calculator', 'twos-complement-range-calculator', 'signed-integer-range-calculator']
  },
  {
    slug: 'signed-integer-range-calculator',
    name: 'Signed Integer Range Calculator',
    categorySlug: 'complement',
    categoryName: 'Complement Tools',
    secondaryCategories: ['number-representation'],
    shortDesc: 'Calculate exact minimum and maximum limits for signed integers across custom and standard bit widths.',
    metaTitle: 'Signed Integer Range Calculator – Min & Max Range for n-bit Integers',
    metaDesc: 'Calculate signed integer ranges online for 4-bit, 8-bit, 16-bit, 32-bit, 64-bit, and arbitrary bit widths with overflow detection.',
    engineType: 'range',
    inputConfig: {
      primaryLabel: 'Bit Width (n bits)',
      primaryPlaceholder: 'e.g. 8, 16, 32, 64',
      defaultValue: '8',
      helpText: 'Enter register bit width (1 to 128 bits).'
    },
    whatIs: "The Signed Integer Range Calculator determines the minimum and maximum numeric values that can be stored in an n-bit register formatted in Two's Complement notation.",
    howItWorks: "Applies the Two’s Complement range formula: Min = -2^(n-1), Max = +2^(n-1) - 1. Also displays the total number of unique states (2^n) and compares against unsigned range limits.",
    formula: "\\text{Range} = \\left[-2^{n-1}, \\; 2^{n-1} - 1\\right], \\quad \\text{Total Values} = 2^n",
    example: "Calculate range for an 8-bit signed integer (n = 8):\nMin = -2^(8-1) = -2^7 = -128\nMax = +2^(8-1) - 1 = +2^7 - 1 = +127\nTotal distinct values = 2^8 = 256.",
    rules: [
      "The minimum value is always -2^(n-1).",
      "The maximum value is always +2^(n-1) - 1.",
      "Values outside this range cause integer overflow or underflow."
    ],
    applications: [
      "Selecting appropriate integer data types (int8, int16, int32, int64) to prevent buffer overflows.",
      "Auditing smart contracts and cryptography code for integer wrapping vulnerabilities.",
      "FPGA bit-width allocation to minimize silicon area and gate count."
    ],
    mistakes: [
      "Assuming the maximum value is +2^(n-1) (forgetting to subtract 1 for zero).",
      "Confusing signed range with unsigned range (0 to 2^n - 1)."
    ],
    faqs: [
      {
        question: "What is the range of a 32-bit signed integer?",
        answer: "A 32-bit signed integer (standard int in C/C++/Java) ranges from -2,147,483,648 to +2,147,483,647."
      }
    ],
    relatedSlugs: ['integer-range-calculator', 'twos-complement-range-calculator', '8-bit-number-range-calculator']
  }
];

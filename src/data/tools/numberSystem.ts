import type { ToolDefinition } from '../types';

export const NUMBER_SYSTEM_TOOLS: ToolDefinition[] = [
  {
    slug: 'decimal-to-binary',
    name: 'Decimal to Binary',
    categorySlug: 'number-system',
    categoryName: 'Number System',
    shortDesc: 'Convert decimal integers (base 10) into pure binary bit patterns with repeated division by 2 steps.',
    metaTitle: 'Decimal to Binary Converter – Convert Base 10 to Base 2',
    metaDesc: 'Convert decimal numbers to binary online with step-by-step successive division by 2 proofs, grouped nibbles, and real-time calculation.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Decimal Number (Base 10)',
      primaryPlaceholder: 'e.g. 42 or 255',
      defaultValue: '42',
      helpText: 'Enter any positive or negative base-10 integer.',
      defaultBase: 10,
      defaultTargetBase: 2
    },
    whatIs: 'Decimal to binary conversion is the process of translating numbers from the human-standard decimal system (radix 10) into the fundamental machine language of computers: binary (radix 2). While decimal uses ten distinct digits (0 through 9), binary uses only two states (0 and 1).',
    howItWorks: 'The standard conversion method divides the integer quotient repeatedly by 2, recording each integer remainder (which must be 0 or 1). This process continues until the quotient reaches 0. The binary sequence is formed by reading the remainders in reverse order (bottom to top).',
    formula: 'N_{10} = \\sum_{i=0}^{n} (b_i \\times 2^i) \\quad \\text{via} \\quad Q_{k} = \\lfloor Q_{k-1} / 2 \\rfloor, \\; r_k = Q_{k-1} \\pmod 2',
    example: 'Convert 13 to binary:\n13 / 2 = 6 with remainder 1 (LSB)\n6 / 2 = 3 with remainder 0\n3 / 2 = 1 with remainder 1\n1 / 2 = 0 with remainder 1 (MSB)\nReading remainders bottom to top yields: 1101_2.',
    rules: [
      'Only valid decimal digits 0–9 are accepted.',
      'Negative numbers are handled via a sign flag or Two’s Complement notation depending on mode.',
      'The least significant bit (LSB) corresponds to the first division remainder.'
    ],
    applications: [
      'Translating high-level software numerical variables into physical CPU registers.',
      'Configuring low-level microcontrollers, GPIO pin masks, and peripheral registers.',
      'Analyzing memory dumps and understanding binary protocol packet payloads.'
    ],
    mistakes: [
      'Reading division remainders top-to-bottom instead of bottom-to-top.',
      'Forgetting that 0 in decimal is simply 0 in binary.',
      'Confusing fractional binary division with integer division.'
    ],
    faqs: [
      {
        question: 'How do you convert decimal to binary manually?',
        answer: 'Divide the decimal number by 2 repeatedly. Note the remainder (0 or 1) at each step. Continue until the quotient is 0, then read the remainders backwards from last to first.'
      },
      {
        question: 'What is 255 in binary?',
        answer: '255 in decimal equals 11111111 in binary (8 consecutive ones, representing an 8-bit unsigned byte).'
      }
    ],
    relatedSlugs: ['binary-to-decimal', 'decimal-to-hexadecimal', 'decimal-to-octal', 'convert-decimal-fraction-to-binary']
  },
  {
    slug: 'binary-to-decimal',
    name: 'Binary to Decimal',
    categorySlug: 'number-system',
    categoryName: 'Number System',
    shortDesc: 'Translate base-2 binary strings into standard base-10 decimal numbers using positional powers of 2.',
    metaTitle: 'Binary to Decimal Converter – Convert Base 2 to Base 10',
    metaDesc: 'Convert binary strings (0 and 1) to decimal numbers online with step-by-step positional power-of-two expansions and instant proofs.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Binary String (Base 2)',
      primaryPlaceholder: 'e.g. 101010 or 11110000',
      defaultValue: '101010',
      helpText: 'Enter binary digits (0 and 1 only).',
      defaultBase: 2,
      defaultTargetBase: 10
    },
    whatIs: 'Binary to decimal conversion calculates the real base-10 numerical value of a binary sequence. In base 2, each column represents an increasing power of two ($2^0, 2^1, 2^2, 2^3, \\dots$) moving from right to left.',
    howItWorks: 'To convert binary to decimal, multiply each binary digit by its corresponding positional weight ($2^i$, where $i$ is the 0-indexed column from right to left) and sum all the products.',
    formula: 'Value_{10} = \\sum_{i=0}^{n-1} (d_i \\times 2^i) \\quad \\text{where } d_i \\in \\{0, 1\\}',
    example: 'Convert 101010_2 to decimal:\n1×2^5 + 0×2^4 + 1×2^3 + 0×2^2 + 1×2^1 + 0×2^0\n= 32 + 0 + 8 + 0 + 2 + 0 = 42_{10}.',
    rules: [
      'Input must contain only 0 and 1 digits.',
      'Leading zeros do not change the numerical value (e.g., 00101 equals 101).',
      'Each position to the left doubles in mathematical weight.'
    ],
    applications: [
      'Reading raw digital sensor values and converting them to human-readable units.',
      'Translating CPU program counters and machine codes into decimal instruction numbers.',
      'Decoding bitwise flags and permission sets in system software.'
    ],
    mistakes: [
      'Starting positional powers from 1 instead of 0 for the rightmost bit.',
      'Confusing powers of 2 (e.g., calculating 2^3 as 6 instead of 8).',
      'Entering digits other than 0 and 1.'
    ],
    faqs: [
      {
        question: 'What is 1010 in decimal?',
        answer: '1010 in binary equals 10 in decimal: (1×8) + (0×4) + (1×2) + (0×1) = 10.'
      },
      {
        question: 'How do you check if a binary number is odd or even?',
        answer: 'Look at the least significant bit (rightmost bit). If it is 1, the number is odd; if it is 0, the number is even.'
      }
    ],
    relatedSlugs: ['decimal-to-binary', 'binary-to-hexadecimal', 'binary-to-octal', 'binary-calculator']
  },
  {
    slug: 'decimal-to-octal',
    name: 'Decimal to Octal',
    categorySlug: 'number-system',
    categoryName: 'Number System',
    shortDesc: 'Convert base-10 decimal numbers into octal notation (base 8) with successive division by 8.',
    metaTitle: 'Decimal to Octal Converter – Convert Base 10 to Base 8',
    metaDesc: 'Convert decimal integers to base-8 octal numbers online with full successive division by 8 tables and step-by-step proofs.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Decimal Value (Base 10)',
      primaryPlaceholder: 'e.g. 85 or 512',
      defaultValue: '85',
      helpText: 'Enter an integer value in base 10.',
      defaultBase: 10,
      defaultTargetBase: 8
    },
    whatIs: 'Decimal to octal conversion expresses a decimal quantity in base 8, using digits 0 through 7. Because 8 is 2^3, octal provides a compact representation of binary where every octal digit equals three binary bits.',
    howItWorks: 'Divide the decimal number repeatedly by 8, noting each remainder (0 to 7). Continue until the quotient is 0. Read the remainders from bottom to top to assemble the octal number.',
    formula: 'Q_k = \\lfloor Q_{k-1} / 8 \\rfloor, \\quad r_k = Q_{k-1} \\pmod 8',
    example: 'Convert 85 to octal:\n85 / 8 = 10 remainder 5\n10 / 8 = 1 remainder 2\n1 / 8 = 0 remainder 1\nReading from bottom to top: 125_8.',
    rules: [
      'Octal digits must only be between 0 and 7.',
      'Digits 8 and 9 never appear in valid octal numbers.'
    ],
    applications: [
      'Computing Unix/Linux file permissions (e.g., chmod 755 or 644).',
      'Configuring aviation transponder squawk codes (4 octal digits from 0000 to 7777).',
      'Working with legacy computer architectures like the PDP-8 and PDP-11.'
    ],
    mistakes: [
      'Using 8 or 9 in the octal result.',
      'Dividing by 2 instead of 8 during manual steps.'
    ],
    faqs: [
      {
        question: 'Why does octal only use digits 0 to 7?',
        answer: 'Because base 8 requires exactly 8 unique symbols. Counting starts at 0 and ends at 7 (0, 1, 2, 3, 4, 5, 6, 7).'
      }
    ],
    relatedSlugs: ['octal-to-decimal', 'decimal-to-binary', 'octal-to-binary', 'octal-arithmetic-calculator']
  },
  {
    slug: 'octal-to-decimal',
    name: 'Octal to Decimal',
    categorySlug: 'number-system',
    categoryName: 'Number System',
    shortDesc: 'Convert base-8 octal strings into standard decimal values using powers of 8.',
    metaTitle: 'Octal to Decimal Converter – Convert Base 8 to Base 10',
    metaDesc: 'Convert octal strings (0-7) to decimal numbers online with step-by-step positional power-of-8 expansion.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Octal Number (Base 8)',
      primaryPlaceholder: 'e.g. 125 or 755',
      defaultValue: '125',
      helpText: 'Enter valid octal digits (0 through 7 only).',
      defaultBase: 8,
      defaultTargetBase: 10
    },
    whatIs: 'Octal to decimal conversion evaluates a base-8 string into its base-10 numerical equivalent by expanding each digit with its power-of-eight weight.',
    howItWorks: 'Multiply each octal digit by 8^i, where i is its 0-indexed position from right to left, and sum the results.',
    formula: 'Value_{10} = \\sum_{i=0}^{n-1} (d_i \\times 8^i) \\quad \\text{where } d_i \\in \\{0..7\\}',
    example: 'Convert 125_8 to decimal:\n(1 × 8^2) + (2 × 8^1) + (5 × 8^0) = 64 + 16 + 5 = 85_{10}.',
    rules: [
      'Digits 8 and 9 are strictly invalid in octal.',
      'The column weight increases by a factor of 8 for each position to the left.'
    ],
    applications: [
      'Decoding Unix file permission modes (e.g. converting mode 0777 to decimal 511).',
      'Interpreting aviation transponder radar squawk codes.',
      'Decompiling legacy mainframe binary dumps.'
    ],
    mistakes: [
      'Treating the digits as base 10 directly.',
      'Including the digits 8 or 9 in input.'
    ],
    faqs: [
      {
        question: 'What is octal 77 in decimal?',
        answer: '77 in octal is (7×8) + (7×1) = 56 + 7 = 63 in decimal.'
      }
    ],
    relatedSlugs: ['decimal-to-octal', 'octal-to-binary', 'octal-to-hexadecimal', 'binary-to-octal']
  },
  {
    slug: 'decimal-to-hexadecimal',
    name: 'Decimal to Hexadecimal',
    categorySlug: 'number-system',
    categoryName: 'Number System',
    shortDesc: 'Convert base-10 decimal numbers into hexadecimal notation (0-9, A-F) with repeated division by 16.',
    metaTitle: 'Decimal to Hexadecimal Converter – Convert Base 10 to Base 16',
    metaDesc: 'Convert decimal numbers to hexadecimal online with repeated division by 16 steps, remainder mapping to A-F, and instant results.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Decimal Number (Base 10)',
      primaryPlaceholder: 'e.g. 254 or 4096',
      defaultValue: '254',
      helpText: 'Enter any non-negative base 10 integer.',
      defaultBase: 10,
      defaultTargetBase: 16
    },
    whatIs: 'Decimal to hexadecimal conversion transforms base-10 numbers into base-16 notation. Hexadecimal uses sixteen symbols: 0 to 9 followed by A (10), B (11), C (12), D (13), E (14), and F (15).',
    howItWorks: 'Repeatedly divide the decimal number by 16. Record the remainders (0-15), converting any remainder >= 10 into its corresponding letter (A-F). Continue until quotient is 0 and read remainders from bottom to top.',
    formula: 'Q_k = \\lfloor Q_{k-1} / 16 \\rfloor, \\quad r_k = Q_{k-1} \\pmod{16}',
    example: 'Convert 254 to hexadecimal:\n254 / 16 = 15 remainder 14 (E)\n15 / 16 = 0 remainder 15 (F)\nReading bottom to top gives: FE_{16}.',
    rules: [
      'Remainders 10, 11, 12, 13, 14, 15 map to A, B, C, D, E, F.',
      'Hex values are often prefixed with 0x in programming languages.'
    ],
    applications: [
      'Defining HTML and CSS color codes (e.g. RGB 255, 0, 128 -> #FF0080).',
      'Representing computer memory addresses and pointer values.',
      'Specifying machine codes in disassemblers and debugging tools.'
    ],
    mistakes: [
      'Leaving remainders greater than 9 as numbers instead of converting to letters (e.g., writing 1514 instead of FE).',
      'Dividing by 10 instead of 16.'
    ],
    faqs: [
      {
        question: 'What is 255 in hexadecimal?',
        answer: '255 in decimal is FF in hexadecimal (15×16 + 15 = 255).'
      }
    ],
    relatedSlugs: ['hexadecimal-to-decimal', 'decimal-to-binary', 'binary-to-hexadecimal', 'hexadecimal-addition']
  },
  {
    slug: 'hexadecimal-to-decimal',
    name: 'Hexadecimal to Decimal',
    categorySlug: 'number-system',
    categoryName: 'Number System',
    shortDesc: 'Convert hexadecimal strings (0-9, A-F) into decimal numbers using positional powers of 16.',
    metaTitle: 'Hexadecimal to Decimal Converter – Convert Base 16 to Base 10',
    metaDesc: 'Convert hexadecimal strings to decimal numbers online with step-by-step positional power-of-16 expansion and proof breakdown.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Hexadecimal String (Base 16)',
      primaryPlaceholder: 'e.g. 1A3 or FF',
      defaultValue: '1A3',
      helpText: 'Enter hex characters (0-9 and A-F, case-insensitive).',
      defaultBase: 16,
      defaultTargetBase: 10
    },
    whatIs: 'Hexadecimal to decimal conversion evaluates a base-16 number into standard base-10 decimal format by multiplying each hex character by its positional power of 16.',
    howItWorks: 'Substitute letters A through F with their decimal values (10 through 15). Multiply each digit by 16^i where i is the position index from the right, and add all terms together.',
    formula: 'Value_{10} = \\sum_{i=0}^{n-1} (h_i \\times 16^i) \\quad \\text{where } h_i \\in \\{0..15\\}',
    example: 'Convert 1A3_{16} to decimal:\n(1 × 16^2) + (10 × 16^1) + (3 × 16^0)\n= (1 × 256) + (10 × 16) + (3 × 1)\n= 256 + 160 + 3 = 419_{10}.',
    rules: [
      'Characters A-F represent values 10 through 15.',
      'Case does not matter: "1a3" and "1A3" are identical.'
    ],
    applications: [
      'Translating memory addresses into decimal offsets.',
      'Converting hex color channels to 0-255 RGB decimal values.',
      'Decoding cryptographic hashes and raw byte dumps.'
    ],
    mistakes: [
      'Treating A as 0 or 1 instead of 10.',
      'Entering invalid characters like G, H, or Z.'
    ],
    faqs: [
      {
        question: 'What is 0xFF in decimal?',
        answer: '0xFF equals 255 in decimal: (15 × 16) + 15 = 255.'
      }
    ],
    relatedSlugs: ['decimal-to-hexadecimal', 'hexadecimal-to-binary', 'hex-to-decimal', 'hexadecimal-calculator']
  },
  {
    slug: 'binary-to-octal',
    name: 'Binary to Octal',
    categorySlug: 'number-system',
    categoryName: 'Number System',
    shortDesc: 'Convert binary sequences into octal by grouping bits into 3-bit triplets from right to left.',
    metaTitle: 'Binary to Octal Converter – Convert Base 2 to Base 8',
    metaDesc: 'Convert binary strings to octal online with direct 3-bit grouping proofs and instant calculation.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Binary String (Base 2)',
      primaryPlaceholder: 'e.g. 11010111',
      defaultValue: '11010111',
      helpText: 'Enter binary bits (0 and 1).',
      defaultBase: 2,
      defaultTargetBase: 8
    },
    whatIs: 'Binary to octal conversion transforms binary numbers into base 8 by taking advantage of the mathematical fact that 8 = 2^3. Exactly three binary bits map directly to one octal digit.',
    howItWorks: 'Group the binary bits into clusters of 3 starting from the rightmost bit (pad the leftmost group with leading zeros if needed). Replace each 3-bit cluster with its equivalent octal digit (000=0 to 111=7).',
    formula: 'd_{\\text{oct}} = (b_2 \\times 4) + (b_1 \\times 2) + (b_0 \\times 1)',
    example: 'Convert 11010111_2 to octal:\nGroup by 3s: 011 | 010 | 111\n011_2 = 3\n010_2 = 2\n111_2 = 7\nResult: 327_8.',
    rules: [
      'Always group bits starting from the right (least significant bit).',
      'Pad the leftmost group with zeros if it has fewer than 3 bits.'
    ],
    applications: [
      'Simplifying binary instruction words into concise octal notation.',
      'Setting file permissions in Unix systems from raw binary masks.',
      'Interfacing with telecommunications and legacy instrumentation.'
    ],
    mistakes: [
      'Grouping bits from left to right instead of right to left.',
      'Grouping by 4 instead of 3 (4 is for hexadecimal, 3 is for octal).'
    ],
    faqs: [
      {
        question: 'Why do we group binary by 3 for octal?',
        answer: 'Because 2 raised to the power of 3 equals 8. Three binary bits produce exactly 8 combinations (000 to 111).'
      }
    ],
    relatedSlugs: ['octal-to-binary', 'binary-to-hexadecimal', 'binary-to-decimal', 'octal-arithmetic-calculator']
  },
  {
    slug: 'octal-to-binary',
    name: 'Octal to Binary',
    categorySlug: 'number-system',
    categoryName: 'Number System',
    secondaryCategories: ['octal'],
    shortDesc: 'Convert octal numbers into binary by expanding each octal digit into its 3-bit binary triplet.',
    metaTitle: 'Octal to Binary Converter – Convert Base 8 to Base 2',
    metaDesc: 'Convert octal numbers to binary online with 3-bit triplet expansion and instant zero-latency results.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Octal String (Base 8)',
      primaryPlaceholder: 'e.g. 327 or 755',
      defaultValue: '327',
      helpText: 'Enter valid octal digits (0 to 7).',
      defaultBase: 8,
      defaultTargetBase: 2
    },
    whatIs: 'Octal to binary conversion translates base-8 numbers into raw binary bits. Each octal digit maps directly to a 3-bit binary triplet without requiring any intermediate decimal conversion.',
    howItWorks: 'Expand each octal digit into its exact 3-bit binary pattern (0=000, 1=001, 2=010, 3=011, 4=100, 5=101, 6=110, 7=111) and concatenate them together.',
    formula: 'd_k \\in \\{0..7\\} \\rightarrow [b_2 b_1 b_0]_2 \\quad \\text{where } d_k = 4b_2 + 2b_1 + b_0',
    example: 'Convert 327_8 to binary:\n3 -> 011\n2 -> 010\n7 -> 111\nConcatenating yields: 011010111_2 (or 11010111_2 without leading zero).',
    rules: [
      'Each octal digit must expand into exactly 3 binary bits (e.g. 2 is 010, not just 10).',
      'Input can only contain digits 0 through 7.'
    ],
    applications: [
      'Converting chmod octal permissions (e.g., 755) into binary bitmasks (111 101 101).',
      'Configuring digital hardware multiplexers and bus selectors.',
      'Translating legacy microcode instructions into binary control lines.'
    ],
    mistakes: [
      'Omitting leading zeros inside individual 3-bit groups (e.g. expanding 1 as 1 instead of 001).',
      'Entering digits 8 or 9.'
    ],
    faqs: [
      {
        question: 'What is octal 7 in binary?',
        answer: 'Octal 7 is binary 111.'
      }
    ],
    relatedSlugs: ['binary-to-octal', 'octal-to-hexadecimal', 'octal-to-decimal', 'octal-number-validator']
  },
  {
    slug: 'binary-to-hexadecimal',
    name: 'Binary to Hexadecimal',
    categorySlug: 'number-system',
    categoryName: 'Number System',
    shortDesc: 'Convert binary bit patterns into hexadecimal format by grouping bits into 4-bit nibbles.',
    metaTitle: 'Binary to Hexadecimal Converter – Convert Base 2 to Base 16',
    metaDesc: 'Convert binary strings to hexadecimal online with direct 4-bit nibble grouping steps and instant calculation.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Binary String (Base 2)',
      primaryPlaceholder: 'e.g. 110111110010',
      defaultValue: '110111110010',
      helpText: 'Enter binary digits (0 and 1).',
      defaultBase: 2,
      defaultTargetBase: 16
    },
    whatIs: 'Binary to hexadecimal conversion condenses long binary bit sequences into compact hex characters. Because 16 = 2^4, each 4-bit nibble maps directly to a single hex digit.',
    howItWorks: 'Split the binary sequence into groups of 4 bits from right to left. Pad the leftmost group with leading zeros if necessary. Replace each group with its corresponding hex symbol (0-9, A-F).',
    formula: 'h_k = (b_3 \\times 8) + (b_2 \\times 4) + (b_1 \\times 2) + (b_0 \\times 1)',
    example: 'Convert 110111110010_2 to hex:\nGroup into nibbles: 1101 | 1111 | 0010\n1101_2 = D (13)\n1111_2 = F (15)\n0010_2 = 2\nResult: DF2_{16}.',
    rules: [
      'Group bits in sets of 4 from right to left.',
      '10=A, 11=B, 12=C, 13=D, 14=E, 15=F.'
    ],
    applications: [
      'Condensing 32-bit and 64-bit binary instructions into readable hex representations.',
      'Inspecting network packet traces and socket memory buffers.',
      'Color format conversion from bit registers to web hex codes.'
    ],
    mistakes: [
      'Grouping bits from left to right.',
      'Grouping into 3 bits instead of 4.'
    ],
    faqs: [
      {
        question: 'What is 1111 in hex?',
        answer: '1111 in binary equals F in hexadecimal (15 in decimal).'
      }
    ],
    relatedSlugs: ['hexadecimal-to-binary', 'binary-to-hex', 'binary-to-decimal', 'binary-to-octal']
  },
  {
    slug: 'hexadecimal-to-binary',
    name: 'Hexadecimal to Binary',
    categorySlug: 'number-system',
    categoryName: 'Number System',
    shortDesc: 'Translate hexadecimal characters (0-9, A-F) into pure 4-bit binary nibbles.',
    metaTitle: 'Hexadecimal to Binary Converter – Convert Base 16 to Base 2',
    metaDesc: 'Convert hexadecimal strings to binary online with 4-bit nibble expansion proofs and instant zero-latency processing.',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Hexadecimal String (Base 16)',
      primaryPlaceholder: 'e.g. 3FA or 0xDEAD',
      defaultValue: '3FA',
      helpText: 'Enter hex digits (0-9, A-F).',
      defaultBase: 16,
      defaultTargetBase: 2
    },
    whatIs: 'Hexadecimal to binary conversion turns base-16 strings into their fundamental binary bit patterns by substituting each hex symbol with its equivalent 4-bit binary nibble.',
    howItWorks: 'Expand every hex digit into its 4-bit binary equivalent (0=0000, 1=0001, ..., A=1010, ..., F=1111) and join them in sequence.',
    formula: 'h_k \\in \\{0..F\\} \\rightarrow [b_3 b_2 b_1 b_0]_2 \\quad \\text{where } h_k = 8b_3 + 4b_2 + 2b_1 + b_0',
    example: 'Convert 3FA_{16} to binary:\n3 -> 0011\nF -> 1111\nA -> 1010\nConcatenating: 001111111010_2 (or 1111111010_2 without leading zeros).',
    rules: [
      'Every hex digit must expand into exactly 4 bits (e.g. 5 is 0101, not 101).',
      'Allowed digits are 0-9 and A-F (case-insensitive).'
    ],
    applications: [
      'Converting machine code hex dumps into raw FPGA bitstreams.',
      'Unpacking byte streams in network packet analysis.',
      'Analyzing cryptography initialization vectors and keys.'
    ],
    mistakes: [
      'Dropping leading zeros in intermediate nibbles (e.g. converting 1 into 1 instead of 0001).',
      'Entering non-hex characters like G or X.'
    ],
    faqs: [
      {
        question: 'What is 0x0F in binary?',
        answer: '0x0F expands to 0000 1111 (or 1111 in binary).'
      }
    ],
    relatedSlugs: ['binary-to-hexadecimal', 'hex-to-binary', 'hexadecimal-to-decimal', 'hexadecimal-to-octal']
  },
  {
    slug: 'octal-to-hexadecimal',
    name: 'Octal to Hexadecimal',
    categorySlug: 'number-system',
    categoryName: 'Number System',
    secondaryCategories: ['octal'],
    shortDesc: 'Convert octal numbers to hexadecimal format using binary as an intermediate grouping bridge.',
    metaTitle: 'Octal to Hexadecimal Converter – Convert Base 8 to Base 16',
    metaDesc: 'Convert octal numbers to hexadecimal online using binary bridging steps (3-bit triplets to 4-bit nibbles).',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Octal Number (Base 8)',
      primaryPlaceholder: 'e.g. 752 or 177',
      defaultValue: '752',
      helpText: 'Enter octal digits (0 to 7).',
      defaultBase: 8,
      defaultTargetBase: 16
    },
    whatIs: 'Octal to hexadecimal conversion translates base-8 numbers into base-16. Because both 8 and 16 are powers of 2 (2^3 and 2^4), the most direct and accurate method uses binary as an intermediary.',
    howItWorks: 'First convert each octal digit into a 3-bit binary triplet. Then re-group the full binary string into 4-bit nibbles from right to left. Finally, convert each 4-bit nibble into its hex character.',
    formula: '\\text{Octal} \\xrightarrow{\\text{3-bit}} \\text{Binary} \\xrightarrow{\\text{4-bit}} \\text{Hexadecimal}',
    example: 'Convert 752_8 to hex:\n1) Octal to binary: 7 -> 111, 5 -> 101, 2 -> 010 => 111101010_2\n2) Regroup into 4-bit nibbles from right: 0001 | 1110 | 1010\n3) Map to hex: 0001=1, 1110=E, 1010=A => 1EA_{16}.',
    rules: [
      'Input can only contain digits 0 through 7.',
      'Re-grouping must strictly occur from right to left.'
    ],
    applications: [
      'Converting permissions and transponder codes into memory hex bytes.',
      'Cross-radix testing in compiler backend code generation.',
      'Legacy computer software emulation.'
    ],
    mistakes: [
      'Attempting complex direct division by 16 instead of using the 3-bit to 4-bit binary bridge.',
      'Regrouping from left to right.'
    ],
    faqs: [
      {
        question: 'What is the fastest way to convert octal to hex?',
        answer: 'Convert each octal digit to 3 binary bits, then regroup those bits into clusters of 4 to read the hex characters.'
      }
    ],
    relatedSlugs: ['hexadecimal-to-octal', 'octal-to-binary', 'octal-to-decimal', 'octal-to-hex']
  },
  {
    slug: 'hexadecimal-to-octal',
    name: 'Hexadecimal to Octal',
    categorySlug: 'number-system',
    categoryName: 'Number System',
    secondaryCategories: ['octal'],
    shortDesc: 'Convert hexadecimal strings into octal notation via 4-bit to 3-bit binary regrouping.',
    metaTitle: 'Hexadecimal to Octal Converter – Convert Base 16 to Base 8',
    metaDesc: 'Convert hexadecimal strings to octal online with binary bridging steps (4-bit nibbles to 3-bit triplets).',
    engineType: 'base-converter',
    inputConfig: {
      primaryLabel: 'Hexadecimal String (Base 16)',
      primaryPlaceholder: 'e.g. 1EA or 2BF',
      defaultValue: '1EA',
      helpText: 'Enter hex digits (0-9, A-F).',
      defaultBase: 16,
      defaultTargetBase: 8
    },
    whatIs: 'Hexadecimal to octal conversion converts base-16 strings to base-8. The optimal conversion uses binary as an intermediary by splitting hex digits into 4-bit nibbles and re-clustering them into 3-bit triplets.',
    howItWorks: 'Convert each hex character to its 4-bit binary equivalent. Re-partition the combined binary bitstream into groups of 3 bits starting from the right. Map each 3-bit group to its octal digit (0-7).',
    formula: '\\text{Hexadecimal} \\xrightarrow{\\text{4-bit}} \\text{Binary} \\xrightarrow{\\text{3-bit}} \\text{Octal}',
    example: 'Convert 1EA_{16} to octal:\n1) Hex to binary: 1 -> 0001, E -> 1110, A -> 1010 => 000111101010_2\n2) Regroup into 3-bit triplets from right: 000 | 111 | 101 | 010\n3) Map to octal: 000=0, 111=7, 101=5, 010=2 => 752_8.',
    rules: [
      'Only valid hex digits 0-9 and A-F are accepted.',
      'Re-grouping must proceed from right to left.'
    ],
    applications: [
      'Translating memory offsets into octal format for legacy simulators.',
      'Cross-architecture verification between 16-bit and 36-bit mainframe processors.',
      'Academic exercises in positional notation.'
    ],
    mistakes: [
      'Omitting leading zeros during 4-bit binary expansion.',
      'Regrouping from left to right.'
    ],
    faqs: [
      {
        question: 'Can you convert hex directly to octal without binary?',
        answer: 'Yes, by converting hex to decimal and then decimal to octal, but the binary bridge method is much faster and less error-prone.'
      }
    ],
    relatedSlugs: ['octal-to-hexadecimal', 'hex-to-octal', 'hexadecimal-to-binary', 'octal-to-binary']
  }
];

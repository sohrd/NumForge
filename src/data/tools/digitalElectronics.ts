import type { ToolDefinition } from '../types';

export const DIGITAL_ELECTRONICS_TOOLS: ToolDefinition[] = [
  {
    slug: 'bit-calculator',
    name: 'Bit Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Calculate storage sizes, bandwidth rates, bit combinations, and binary data units.',
    metaTitle: 'Bit Calculator – Calculate Bits, Bytes, Combinations & Storage',
    metaDesc: 'Calculate bits, bytes, data units, possible bit combinations (2^n), and storage sizes online with instant conversions.',
    engineType: 'bitwise',
    inputConfig: {
      primaryLabel: 'Number of Bits',
      primaryPlaceholder: 'e.g. 16 or 32',
      defaultValue: '16',
      helpText: 'Enter an integer number of bits.'
    },
    whatIs: 'The Bit Calculator computes data storage capacities, memory alignments, and total addressable state spaces ($2^n$) for any given quantity of bits.',
    howItWorks: 'Calculates the total possible permutations ($2^n$), equivalent bytes ($n / 8$), nibbles ($n / 4$), and standard unit conversions (KB, KiB, MB, MiB).',
    formula: '\\text{Combinations} = 2^n, \\quad \\text{Bytes} = \\frac{n}{8}',
    example: 'For 16 bits:\nTotal combinations: 2^16 = 65,536\nBytes: 16 / 8 = 2 Bytes\nNibbles: 16 / 4 = 4 Nibbles\nHex digits: 4 digits (0x0000 to 0xFFFF).',
    rules: [
      '1 Byte = 8 Bits.',
      '1 Nibble = 4 Bits.',
      'Decimal units use powers of 1000 (KB); binary units use powers of 1024 (KiB).'
    ],
    applications: [
      'Memory sizing and address bus width calculation in computer architecture.',
      'Network bandwidth throughput calculations (e.g. Megabits per second vs Megabytes per second).',
      'Determining key space entropy in cryptography (e.g. 128-bit vs 256-bit AES).'
    ],
    mistakes: [
      'Confusing Megabits (Mb) with Megabytes (MB).',
      'Confusing base-10 SI units (1000) with base-2 IEC units (1024).'
    ],
    faqs: [
      {
        question: 'How many unique values can 8 bits hold?',
        answer: '8 bits can hold 2^8 = 256 unique values.'
      }
    ],
    relatedSlugs: ['bit-to-byte-converter', 'byte-to-kb-mb-gb-tb-converter', 'integer-range-calculator']
  },
  {
    slug: 'bit-to-byte-converter',
    name: 'Bit to Byte Converter',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['coding-computer-number'],
    shortDesc: 'Convert data quantities between bits (b) and bytes (B) with exact fractions and decimal equivalents.',
    metaTitle: 'Bit to Byte Converter – Convert Bits to Bytes Online (b to B)',
    metaDesc: 'Convert bits to bytes and bytes to bits online. Accurate 8:1 ratio calculations with instant bandwidth conversions.',
    engineType: 'bitwise',
    inputConfig: {
      primaryLabel: 'Quantity of Bits',
      primaryPlaceholder: 'e.g. 64 or 1024',
      defaultValue: '64',
      helpText: 'Enter number of bits to convert to bytes.'
    },
    whatIs: 'The Bit to Byte Converter converts between bits (lowercase b) and bytes (uppercase B). In computing, 1 byte consists of 8 bits.',
    howItWorks: 'Divide the number of bits by 8 to obtain bytes (Bytes = Bits / 8). Conversely, multiply bytes by 8 to obtain bits (Bits = Bytes × 8).',
    formula: '\\text{Bytes (B)} = \\frac{\\text{Bits (b)}}{8}, \\quad \\text{Bits (b)} = \\text{Bytes (B)} \\times 8',
    example: 'Convert 64 bits to bytes:\n64 / 8 = 8 Bytes.\nConvert 100 Mbps download speed to MB/s:\n100 / 8 = 12.5 MB/s.',
    rules: [
      '8 bits = 1 byte.',
      'Lowercase "b" stands for bits; uppercase "B" stands for bytes.'
    ],
    applications: [
      'Converting internet service provider connection speeds (Mbps) into real file download speeds (MB/s).',
      'Calculating memory allocation sizes for struct fields in programming languages.',
      'Designing networking packet frame buffers.'
    ],
    mistakes: [
      'Confusing bits and bytes in ISP network speed measurements (e.g. expecting 100 Mbps to download 100 MB per second).',
      'Using 10 instead of 8 as the conversion factor.'
    ],
    faqs: [
      {
        question: 'Why are there 8 bits in a byte?',
        answer: 'The 8-bit byte became the computing standard in the 1960s with the IBM System/360 architecture, as it conveniently fits two 4-bit BCD digits, one ASCII character, and powers of two.'
      }
    ],
    relatedSlugs: ['byte-to-kb-mb-gb-tb-converter', 'bit-calculator', 'binary-bit-calculator']
  },
  {
    slug: 'byte-to-kb-mb-gb-tb-converter',
    name: 'Byte to KB/MB/GB/TB Converter',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['coding-computer-number'],
    shortDesc: 'Convert storage sizes across Bytes, Kilobytes, Megabytes, Gigabytes, and Terabytes (both 1000 and 1024 standards).',
    metaTitle: 'Byte to KB/MB/GB/TB Converter – Storage & Memory Unit Converter',
    metaDesc: 'Convert storage units across Bytes, KB, MB, GB, and TB with both decimal (1000) and binary (1024 IEC) conversions.',
    engineType: 'bitwise',
    inputConfig: {
      primaryLabel: 'Storage Size in Bytes',
      primaryPlaceholder: 'e.g. 1073741824',
      defaultValue: '1073741824',
      helpText: 'Enter byte count to view across all metric and binary units.'
    },
    whatIs: 'This tool converts digital storage capacity between bytes and higher orders of magnitude. It supports both SI decimal prefixes (1000^n: KB, MB, GB, TB) and IEC binary prefixes (1024^n: KiB, MiB, GiB, TiB).',
    howItWorks: 'Divides the byte count by powers of 1000 for standard drive manufacturer units, and by powers of 1024 (2^10, 2^20, 2^30, 2^40) for operating system RAM and filesystem units.',
    formula: '\\text{Binary (IEC)}: \\frac{\\text{Bytes}}{1024^k}, \\quad \\text{Decimal (SI)}: \\frac{\\text{Bytes}}{1000^k}',
    example: 'Convert 1,073,741,824 Bytes:\nIn IEC binary: 1,073,741,824 / 1024^3 = 1.0 GiB\nIn SI decimal: 1,073,741,824 / 1000^3 = 1.074 GB.',
    rules: [
      '1 KB = 1,000 Bytes (SI standard).',
      '1 KiB = 1,024 Bytes (IEC binary standard).',
      'Hard drive manufacturers use decimal 1000; operating systems like Windows report binary 1024.'
    ],
    applications: [
      'Understanding why a purchased "1 TB" drive shows only ~931 GB in Windows.',
      'Sizing cloud storage buckets, databases, and memory caches (Redis, Memcached).',
      'Capacity planning for data centers and embedded flash storage.'
    ],
    mistakes: [
      'Assuming 1 KB is always 1024 Bytes without considering the context (SI vs IEC).',
      'Forgetting that 1 TB equals 1,000,000,000,000 bytes in decimal.'
    ],
    faqs: [
      {
        question: 'Why does my 500GB hard drive only show 465GB in Windows?',
        answer: 'Drive manufacturers sell drives in decimal units (500 × 1000^3 = 500,000,000,000 bytes). Windows calculates capacity in binary gigabytes (500,000,000,000 / 1024^3 ≈ 465.66 GiB).'
      }
    ],
    relatedSlugs: ['bit-to-byte-converter', 'bit-calculator', 'binary-bit-calculator']
  },
  {
    slug: 'binary-bit-shift-calculator',
    name: 'Binary Bit Shift Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Simulate logical and arithmetic bit shifts (left, right, zero-fill) on binary registers.',
    metaTitle: 'Binary Bit Shift Calculator – Shift Left & Right Online',
    metaDesc: 'Simulate binary bit shifts online: Left Shift (<<), Right Shift (>>), and Unsigned Right Shift (>>>) with 8/16/32-bit registers.',
    engineType: 'shift',
    inputConfig: {
      primaryLabel: 'Binary String or Decimal',
      primaryPlaceholder: 'e.g. 00001101 or 13',
      defaultValue: '00001101',
      hasSecondaryInput: true,
      secondaryLabel: 'Shift Count (positions)',
      secondaryPlaceholder: 'e.g. 2',
      defaultSecondaryValue: '2',
      hasOperationSelector: true,
      operations: [
        { value: '<<', label: 'Logical Left Shift (<<)' },
        { value: '>>', label: 'Arithmetic Right Shift (>>)' },
        { value: '>>>', label: 'Logical Right Shift (>>>)' }
      ],
      defaultOperation: '<<',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter value, shift count, and shift type.'
    },
    whatIs: 'A bit shift moves all bits in a register left or right by a specified number of bit positions. Shifting is a core microprocessor primitive that performs fast integer multiplication or division by powers of two.',
    howItWorks: 'Left shift (<<) moves bits left and fills empty positions on the right with zeros (multiplying by 2^k). Right shift (>>) moves bits right: arithmetic shifts preserve the sign bit, while logical shifts fill with zeros.',
    formula: 'X \\ll k = X \\times 2^k, \\quad X \\gg k = \\lfloor X / 2^k \\rfloor',
    example: 'Shift 00001101_2 (13) left by 2 positions (<< 2):\nBits move left 2 spots, 2 zeros inserted on right:\nResult: 00110100_2 (52 in decimal, which is 13 × 4).',
    rules: [
      'Each 1-bit left shift multiplies the value by 2.',
      'Each 1-bit right shift divides the value by 2 (truncated).',
      'Bits shifted beyond the register width are discarded.'
    ],
    applications: [
      'Ultra-fast integer multiplication and division in compiler optimization.',
      'Bitmask manipulation and packing multiple sensor values into a single integer.',
      'Cryptographic hashing routines (SHA-256 rounds).'
    ],
    mistakes: [
      'Confusing logical right shift (>>>) with arithmetic right shift (>>).',
      'Over-shifting by more bits than the register width.'
    ],
    faqs: [
      {
        question: 'What is the difference between << and >>?',
        answer: '<< shifts bits to the left (multiplying by 2 for each step), while >> shifts bits to the right (dividing by 2 for each step).'
      }
    ],
    relatedSlugs: ['left-shift-calculator', 'right-shift-calculator', 'arithmetic-shift-calculator', 'logical-shift-calculator']
  },
  {
    slug: 'left-shift-calculator',
    name: 'Left Shift Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Compute bitwise left shifts (<<) to multiply binary numbers by powers of 2.',
    metaTitle: 'Left Shift Calculator – Compute Bitwise Left Shift (<<) Online',
    metaDesc: 'Calculate bitwise left shift (<<) online with register overflow detection, bit visualization, and power-of-2 multiplication proofs.',
    engineType: 'shift',
    inputConfig: {
      primaryLabel: 'Input Value (Binary or Decimal)',
      primaryPlaceholder: 'e.g. 5 or 0101',
      defaultValue: '5',
      hasSecondaryInput: true,
      secondaryLabel: 'Shift Amount (k)',
      secondaryPlaceholder: 'e.g. 3',
      defaultSecondaryValue: '3',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter integer and number of positions to shift left.'
    },
    whatIs: 'The Left Shift operator (<<) moves all bits in an operand to the left by the specified number of positions, inserting 0 bits into the vacant least significant bit positions on the right.',
    howItWorks: 'Every single position shifted left is mathematically equivalent to multiplying the operand by 2. Shifting by k positions multiplies by 2^k.',
    formula: 'X \\ll k = (X \\times 2^k) \\pmod{2^n}',
    example: 'Calculate 5 << 3 in an 8-bit register:\n5 in binary: 00000101\nShift left by 3: 00101000\n00101000_2 = 40 (which is 5 × 2^3 = 5 × 8 = 40).',
    rules: [
      'Zeros are always shifted in from the right.',
      'Bits shifted past the MSB boundary are truncated or trigger overflow flags.'
    ],
    applications: [
      'Constructing bitmasks (e.g., 1 << pinNumber).',
      'High-performance graphics color channel blending.',
      'Fixed-point scaling in DSP algorithms.'
    ],
    mistakes: [
      'Forgetting that left shifting can cause integer overflow if 1 bits cross the register boundary.',
      'Shifting negative numbers without considering signed integer semantics.'
    ],
    faqs: [
      {
        question: 'Does left shift work the same for signed and unsigned numbers?',
        answer: 'In unsigned numbers, left shift is pure multiplication by 2. In signed numbers, shifting a 1 into the sign bit flips the sign, causing signed overflow.'
      }
    ],
    relatedSlugs: ['binary-bit-shift-calculator', 'right-shift-calculator', 'logical-shift-calculator']
  },
  {
    slug: 'right-shift-calculator',
    name: 'Right Shift Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Compute bitwise right shifts (>>) to divide binary numbers by powers of 2.',
    metaTitle: 'Right Shift Calculator – Compute Bitwise Right Shift (>>) Online',
    metaDesc: 'Calculate bitwise right shift (>>) online with sign-extension preservation, zero-fill options, and division proofs.',
    engineType: 'shift',
    inputConfig: {
      primaryLabel: 'Input Value (Binary or Decimal)',
      primaryPlaceholder: 'e.g. 64 or 01000000',
      defaultValue: '64',
      hasSecondaryInput: true,
      secondaryLabel: 'Shift Amount (k)',
      secondaryPlaceholder: 'e.g. 2',
      defaultSecondaryValue: '2',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter integer and number of positions to shift right.'
    },
    whatIs: 'The Right Shift operator (>>) shifts all bits of a binary sequence to the right by k positions, discarding the bits that fall off the right edge (LSB).',
    howItWorks: 'Shifting right by k positions is mathematically equivalent to integer division by 2^k: floor(X / 2^k).',
    formula: 'X \\gg k = \\lfloor X / 2^k \\rfloor',
    example: 'Calculate 64 >> 2 in an 8-bit register:\n64 in binary: 01000000\nShift right by 2: 00010000\n00010000_2 = 16 (which is 64 / 4).',
    rules: [
      'Bits shifted off the right end are permanently discarded.',
      'In arithmetic right shift, the sign bit is replicated; in logical right shift, zeros are inserted.'
    ],
    applications: [
      'Fast integer division by powers of 2.',
      'Extracting low-order bitfields from encoded data words.',
      'Unpacking RGB color components from 32-bit pixel values.'
    ],
    mistakes: [
      'Assuming fractional values are retained (right shift truncates remainders towards zero or negative infinity).',
      'Confusing arithmetic (>>) and logical (>>>) shifts on negative values.'
    ],
    faqs: [
      {
        question: 'What happens to the bits shifted off the right?',
        answer: 'They are discarded into the bit bucket. The last shifted bit is often stored in the CPU carry flag (CF).'
      }
    ],
    relatedSlugs: ['left-shift-calculator', 'arithmetic-shift-calculator', 'logical-shift-calculator']
  },
  {
    slug: 'arithmetic-shift-calculator',
    name: 'Arithmetic Shift Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary', 'complement'],
    shortDesc: 'Compute arithmetic right shifts with sign-bit preservation (replicated MSB) for signed integers.',
    metaTitle: 'Arithmetic Shift Calculator – Arithmetic Shift Right & Left Online',
    metaDesc: 'Simulate arithmetic bit shifts online with sign-extension preservation, signed division proofs, and register visualizer.',
    engineType: 'shift',
    inputConfig: {
      primaryLabel: 'Signed Value (Decimal or Binary)',
      primaryPlaceholder: 'e.g. -16 or 11110000',
      defaultValue: '-16',
      hasSecondaryInput: true,
      secondaryLabel: 'Shift Amount',
      secondaryPlaceholder: 'e.g. 2',
      defaultSecondaryValue: '2',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter a signed number.'
    },
    whatIs: 'An Arithmetic Shift is a bit shift designed for signed Two’s Complement integers. Arithmetic Shift Right (ASR / SRA) preserves the sign of negative numbers by replicating the most significant bit (sign extension) into the vacant positions on the left.',
    howItWorks: 'During Arithmetic Right Shift, if the MSB is 1 (negative), 1s are shifted in from the left; if the MSB is 0 (positive), 0s are shifted in. This guarantees that negative numbers remain negative.',
    formula: '\\text{ASR}(X, k): \\quad \\text{MSB}_i = \\text{MSB}_{\\text{original}} \\quad \\text{for inserted bits}',
    example: 'Arithmetic right shift -16 >> 2 (8-bit register):\n-16 in 8-bit Two’s Complement: 11110000\nShift right by 2 with sign bit (1) replication:\n11111100\n11111100_2 represents -4 (which is -16 / 4).',
    rules: [
      'The sign bit (MSB) is copied into all newly opened positions on the left.',
      'Preserves the sign of negative integers during division by 2^k.'
    ],
    applications: [
      'Signed integer division in CPU compilers without division instructions.',
      'Audio processing volume scaling on signed PCM waveform samples.',
      'Fixed-point signed math in embedded DSPs.'
    ],
    mistakes: [
      'Inserting zeros on negative numbers (which turns negative numbers into positive numbers).',
      'Forgetting that arithmetic right shift floors toward negative infinity (-1 >> 1 = -1).'
    ],
    faqs: [
      {
        question: 'Why does -1 >> 1 equal -1 in arithmetic right shift?',
        answer: 'Because -1 is all 1s (11111111). Replicating the sign bit 1 produces 11111111 again, so -1 remains -1.'
      }
    ],
    relatedSlugs: ['logical-shift-calculator', 'right-shift-calculator', '2s-complement-calculator']
  },
  {
    slug: 'logical-shift-calculator',
    name: 'Logical Shift Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Compute logical bit shifts (left and zero-fill right) for unsigned integers and raw bit patterns.',
    metaTitle: 'Logical Shift Calculator – Logical Left & Zero-Fill Right Shift',
    metaDesc: 'Compute logical bit shifts online (SHL, SHR, >>>) with zero-fill vacant bit insertion and register diagrams.',
    engineType: 'shift',
    inputConfig: {
      primaryLabel: 'Binary String or Unsigned Decimal',
      primaryPlaceholder: 'e.g. 11001000 or 200',
      defaultValue: '11001000',
      hasSecondaryInput: true,
      secondaryLabel: 'Shift Amount',
      secondaryPlaceholder: 'e.g. 2',
      defaultSecondaryValue: '2',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter binary sequence.'
    },
    whatIs: 'A Logical Shift moves bits and always fills vacant bit positions with zeros (0), regardless of whether the operand is positive or negative. It treats the operand as an unsigned bit pattern.',
    howItWorks: 'In Logical Shift Right (SHR or >>> in JavaScript/Java), every bit moves right by k positions and k zeros are inserted into the most significant bits on the left.',
    formula: '\\text{LSR}(X, k): \\quad \\text{fill bits on left are strictly } 0',
    example: 'Logical right shift 11001000 >>> 2 (8-bit):\nShift right 2 positions, insert two 0s on left:\n00110010\nResult: 00110010_2 (decimal 50).',
    rules: [
      'Vacant positions are always filled with zeros (0).',
      'Does not preserve the sign bit of signed numbers.'
    ],
    applications: [
      'Manipulating unsigned integer bitmasks and hardware registers.',
      'Unpacking image color channels (RGBA) from unsigned 32-bit integers.',
      'Bitstream parsing in network packet decoders.'
    ],
    mistakes: [
      'Using logical right shift on signed negative numbers when division is intended (it turns negative numbers into large positive numbers).',
      'Confusing logical shift with circular rotation.'
    ],
    faqs: [
      {
        question: 'What is the symbol for logical right shift in JavaScript and Java?',
        answer: 'The triple greater-than symbol (>>>) denotes unsigned/logical right shift.'
      }
    ],
    relatedSlugs: ['arithmetic-shift-calculator', 'right-shift-calculator', 'rotate-right-calculator']
  },
  {
    slug: 'rotate-left-calculator',
    name: 'Rotate Left Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Compute circular bit rotation left (ROL) where bits falling off the MSB wrap around to the LSB.',
    metaTitle: 'Rotate Left Calculator – Circular Bit Rotation (ROL) Online',
    metaDesc: 'Simulate circular bit rotation left (ROL) online with bit wrap-around tracking across 8/16/32/64-bit registers.',
    engineType: 'shift',
    inputConfig: {
      primaryLabel: 'Binary String or Hex',
      primaryPlaceholder: 'e.g. 10010011 or 0x93',
      defaultValue: '10010011',
      hasSecondaryInput: true,
      secondaryLabel: 'Rotation Count',
      secondaryPlaceholder: 'e.g. 2',
      defaultSecondaryValue: '2',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter register value and rotation steps.'
    },
    whatIs: 'Rotate Left (ROL or circular left shift) shifts all bits to the left, but unlike a regular shift, bits that fall off the most significant end (MSB) wrap around and re-enter at the least significant bit (LSB). No bits are lost.',
    howItWorks: 'For an n-bit register rotated left by k positions: ROL(X, k) = (X << k) | (X >>> (n - k)).',
    formula: '\\text{ROL}(X, k) = (X \\ll (k \\pmod n)) \\mid (X \\gg (n - (k \\pmod n)))',
    example: 'Rotate left 10010011 by 2 positions (8-bit):\nLeftmost 2 bits are "10".\nRemaining bits shift left: 010011..\nWrap "10" to the right:\nResult: 01001110_2.',
    rules: [
      'No bits are destroyed; total set bits (Hamming weight) remains constant.',
      'Rotating by n positions returns the exact original value.'
    ],
    applications: [
      'Cryptographic ciphers (SHA-256, MD5, ChaCha20, AES).',
      'Pseudo-random number generators (Xorshift, PRNG).',
      'CPU rotation instructions (ROL in x86 assembly).'
    ],
    mistakes: [
      'Discarding bits instead of wrapping them around to the opposite end.',
      'Rotating without specifying the register bit width.'
    ],
    faqs: [
      {
        question: 'Why are bit rotations used heavily in cryptography?',
        answer: 'Rotations achieve rapid non-linear bit diffusion without losing any information, preventing cryptographic attacks from isolating individual bit changes.'
      }
    ],
    relatedSlugs: ['rotate-right-calculator', 'left-shift-calculator', 'bitwise-calculator']
  },
  {
    slug: 'rotate-right-calculator',
    name: 'Rotate Right Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Compute circular bit rotation right (ROR) where bits falling off the LSB wrap around to the MSB.',
    metaTitle: 'Rotate Right Calculator – Circular Bit Rotation (ROR) Online',
    metaDesc: 'Simulate circular bit rotation right (ROR) online with bit wrap-around tracking across 8/16/32/64-bit registers.',
    engineType: 'shift',
    inputConfig: {
      primaryLabel: 'Binary String or Hex',
      primaryPlaceholder: 'e.g. 10010011 or 0x93',
      defaultValue: '10010011',
      hasSecondaryInput: true,
      secondaryLabel: 'Rotation Count',
      secondaryPlaceholder: 'e.g. 2',
      defaultSecondaryValue: '2',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter register value and rotation steps.'
    },
    whatIs: 'Rotate Right (ROR or circular right shift) shifts all bits to the right, wrapping bits that fall off the least significant bit (LSB) around to re-enter at the most significant bit (MSB).',
    howItWorks: 'For an n-bit register rotated right by k positions: ROR(X, k) = (X >>> k) | (X << (n - k)).',
    formula: '\\text{ROR}(X, k) = (X \\gg (k \\pmod n)) \\mid (X \\ll (n - (k \\pmod n)))',
    example: 'Rotate right 10010011 by 2 positions (8-bit):\nRightmost 2 bits are "11".\nRemaining bits shift right: ..100100\nWrap "11" to the left:\nResult: 11100100_2.',
    rules: [
      'All bits are conserved; no bits are lost.',
      'Rotating right by k is identical to rotating left by (n - k).'
    ],
    applications: [
      'Cryptographic hash functions (SHA-1, SHA-256, BLAKE3).',
      'Circular buffer pointer management.',
      'Hardware barrel shifters.'
    ],
    mistakes: [
      'Discarding LSB bits instead of wrapping them to the MSB.',
      'Forgetting that bit width changes the rotation result.'
    ],
    faqs: [
      {
        question: 'Is ROR(X, 1) the reverse of ROL(X, 1)?',
        answer: 'Yes, rotating right by 1 position perfectly reverses a left rotation of 1 position.'
      }
    ],
    relatedSlugs: ['rotate-left-calculator', 'right-shift-calculator', 'bitwise-calculator']
  },
  {
    slug: 'bitwise-and-calculator',
    name: 'Bitwise AND Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Compute bitwise AND (&) between two binary numbers to mask, clear, and isolate specific bits.',
    metaTitle: 'Bitwise AND Calculator – Binary AND (&) Operation Online',
    metaDesc: 'Calculate Bitwise AND (&) online with bit-by-bit truth table breakdown, bitmasking examples, and interactive register board.',
    engineType: 'bitwise',
    inputConfig: {
      primaryLabel: 'First Value (A)',
      primaryPlaceholder: 'e.g. 11001100 or 204',
      defaultValue: '11001100',
      hasSecondaryInput: true,
      secondaryLabel: 'Second Value (B / Mask)',
      secondaryPlaceholder: 'e.g. 10101010 or 170',
      defaultSecondaryValue: '10101010',
      helpText: 'Enter binary or decimal numbers.'
    },
    whatIs: 'The Bitwise AND operator (&) compares corresponding bits of two operands. A bit in the result is 1 if and only if both input bits are 1; otherwise, the result bit is 0.',
    howItWorks: 'Apply the logical AND truth table column by column: 0 & 0 = 0, 0 & 1 = 0, 1 & 0 = 0, 1 & 1 = 1.',
    formula: 'C_i = A_i \\land B_i \\quad \\text{for all bit positions } i',
    example: 'Bitwise AND 11001100 & 10101010:\n    11001100\n  & 10101010\n  ----------\n    10001000_2 (decimal 136).',
    rules: [
      '1 & 1 = 1; all other combinations result in 0.',
      'ANDing with 0 clears a bit; ANDing with 1 preserves a bit.'
    ],
    applications: [
      'Masking out unwanted bits (e.g. extracting the low nibble: value & 0x0F).',
      'Checking if a number is even or odd (value & 1 == 0 -> even).',
      'Testing if a specific permission flag is enabled.'
    ],
    mistakes: [
      'Confusing bitwise AND (&) with logical AND (&&) in programming.',
      'Misaligning bits of different lengths.'
    ],
    faqs: [
      {
        question: 'How do you check if the 3rd bit of a variable is set?',
        answer: 'Use the bitwise AND expression: (value & (1 << 3)) != 0.'
      }
    ],
    relatedSlugs: ['bitwise-or-calculator', 'bitwise-xor-calculator', 'bitwise-not-calculator', 'nand-calculator']
  },
  {
    slug: 'bitwise-or-calculator',
    name: 'Bitwise OR Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Compute bitwise OR (|) between two binary numbers to set and combine bit flags.',
    metaTitle: 'Bitwise OR Calculator – Binary OR (|) Operation Online',
    metaDesc: 'Calculate Bitwise OR (|) online with step-by-step bit truth tables, flag setting examples, and interactive bit toggles.',
    engineType: 'bitwise',
    inputConfig: {
      primaryLabel: 'First Value (A)',
      primaryPlaceholder: 'e.g. 11000000 or 192',
      defaultValue: '11000000',
      hasSecondaryInput: true,
      secondaryLabel: 'Second Value (B / Flags)',
      secondaryPlaceholder: 'e.g. 00001100 or 12',
      defaultSecondaryValue: '00001100',
      helpText: 'Enter binary or decimal numbers.'
    },
    whatIs: 'The Bitwise OR operator (|) compares corresponding bits of two operands. A bit in the result is 1 if at least one of the input bits is 1. The result is 0 only when both input bits are 0.',
    howItWorks: 'Apply the logical OR truth table across all columns: 0 | 0 = 0, 0 | 1 = 1, 1 | 0 = 1, 1 | 1 = 1.',
    formula: 'C_i = A_i \\lor B_i \\quad \\text{for all bit positions } i',
    example: 'Bitwise OR 11000000 | 00001100:\n    11000000\n  | 00001100\n  ----------\n    11001100_2 (decimal 204).',
    rules: [
      '0 | 0 = 0; all other combinations result in 1.',
      'ORing with 1 sets a bit; ORing with 0 leaves a bit unchanged.'
    ],
    applications: [
      'Setting configuration flags (e.g. flags |= FLAG_READ_ONLY).',
      'Combining color channels into single pixel values.',
      'Activating peripheral hardware pins in microcontrollers.'
    ],
    mistakes: [
      'Confusing bitwise OR (|) with logical OR (||).',
      'Thinking 1 | 1 produces 0 with carry (that is addition, not OR).'
    ],
    faqs: [
      {
        question: 'How do you set a specific bit to 1 in a register?',
        answer: 'Use bitwise OR with a shifted bitmask: register |= (1 << bitIndex).'
      }
    ],
    relatedSlugs: ['bitwise-and-calculator', 'bitwise-xor-calculator', 'nor-calculator']
  },
  {
    slug: 'bitwise-xor-calculator',
    name: 'Bitwise XOR Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Compute bitwise XOR (^) to toggle bits, compute parity, and implement basic encryption.',
    metaTitle: 'Bitwise XOR Calculator – Binary XOR (^) Operation Online',
    metaDesc: 'Calculate Bitwise XOR (^) online with truth tables, bit-toggling demonstrations, swap algorithms, and proofs.',
    engineType: 'bitwise',
    inputConfig: {
      primaryLabel: 'First Value (A)',
      primaryPlaceholder: 'e.g. 10101010',
      defaultValue: '10101010',
      hasSecondaryInput: true,
      secondaryLabel: 'Second Value (B)',
      secondaryPlaceholder: 'e.g. 11110000',
      defaultSecondaryValue: '11110000',
      helpText: 'Enter binary or decimal numbers.'
    },
    whatIs: 'The Bitwise Exclusive OR operator (XOR, denoted ^ or ⊕) outputs 1 if and only if the input bits are different. If both bits are identical (both 0 or both 1), the result is 0.',
    howItWorks: 'Apply XOR truth table: 0 ^ 0 = 0, 0 ^ 1 = 1, 1 ^ 0 = 1, 1 ^ 1 = 0. A unique property is that X ^ X = 0 and X ^ 0 = X, making XOR fully self-reversing: (A ^ B) ^ B = A.',
    formula: 'C_i = A_i \\oplus B_i = (A_i \\land \\neg B_i) \\lor (\\neg A_i \\land B_i)',
    example: 'Bitwise XOR 10101010 ^ 11110000:\n    10101010\n  ^ 11110000\n  ----------\n    01011010_2 (decimal 90).',
    rules: [
      'Output is 1 when inputs differ; 0 when inputs are equal.',
      'Self-inverting: applying the same XOR mask twice restores the original value.'
    ],
    applications: [
      'XOR cipher encryption and one-time pad cryptosystems.',
      'Toggling bit states without conditional statements (flags ^= MASK).',
      'XOR swap algorithm (swapping two variables without a temporary buffer).'
    ],
    mistakes: [
      'Confusing bitwise XOR (^) with exponentiation in programming languages (e.g. in Python/C, ^ is XOR, not power).',
      'Thinking 1 ^ 1 equals 1.'
    ],
    faqs: [
      {
        question: 'Why is XOR used in encryption and RAID storage?',
        answer: 'Because XOR is completely reversible: if C = A ^ B, then A = C ^ B. In RAID 5, parity data is calculated with XOR, allowing any missing drive to be reconstructed.'
      }
    ],
    relatedSlugs: ['bitwise-and-calculator', 'bitwise-or-calculator', 'xnor-calculator']
  },
  {
    slug: 'bitwise-not-calculator',
    name: 'Bitwise NOT Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary', 'complement'],
    shortDesc: 'Compute bitwise NOT (~) to invert all bits in an operand across 8, 16, 32, and 64-bit registers.',
    metaTitle: 'Bitwise NOT Calculator – Binary Inversion (~) Online',
    metaDesc: 'Calculate Bitwise NOT (~) online with bit inversion proofs, Two’s Complement negative value analysis (~x = -x - 1).',
    engineType: 'bitwise',
    inputConfig: {
      primaryLabel: 'Value (Binary or Decimal)',
      primaryPlaceholder: 'e.g. 00001111 or 15',
      defaultValue: '00001111',
      hasBitWidthSelector: true,
      defaultBitWidth: 8,
      helpText: 'Enter an integer or binary string to invert.'
    },
    whatIs: 'The Bitwise NOT operator (unary operator ~) inverts every individual bit of an operand: all 1s become 0s, and all 0s become 1s. In signed Two’s Complement arithmetic, ~X is mathematically equal to -X - 1.',
    howItWorks: 'Takes each bit of the register and flips it: ~0 = 1, ~1 = 0. In an 8-bit register, ~00001111 becomes 11110000.',
    formula: '\\sim X = (2^n - 1) - X = -X - 1 \\quad \\text{in Two’s Complement}',
    example: 'Bitwise NOT of 15 (8-bit binary 00001111):\n~00001111 = 11110000\nIn unsigned decimal: 240\nIn signed Two’s Complement: -16 (since -15 - 1 = -16).',
    rules: [
      'Inverts every bit unconditionally.',
      'The result depends heavily on the selected register bit width.'
    ],
    applications: [
      'Creating inverted bitmasks (e.g. value &= ~MASK to clear bits).',
      'Calculating 1’s and 2’s complement representations.',
      'Hardware signal inversion in digital logic.'
    ],
    mistakes: [
      'Forgetting that in languages like C and JavaScript, ~5 evaluates to -6, not a positive byte, due to 32-bit sign extension.',
      'Omitting register bit width.'
    ],
    faqs: [
      {
        question: 'Why does ~0 equal -1 in programming languages?',
        answer: 'In Two’s Complement, 0 is 0000...0000. Inverting all bits gives 1111...1111, which represents -1 in signed Two’s Complement.'
      }
    ],
    relatedSlugs: ['1s-complement-calculator', 'bitwise-and-calculator', 'bitwise-calculator']
  },
  {
    slug: 'nand-calculator',
    name: 'NAND Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Compute the universal NAND logic operation (NOT AND) with full truth tables and proofs.',
    metaTitle: 'NAND Calculator – Binary NAND Gate Operation Online',
    metaDesc: 'Calculate NAND logic gate operations online with truth tables, universal gate synthesis proofs, and interactive circuits.',
    engineType: 'bitwise',
    inputConfig: {
      primaryLabel: 'First Input (A)',
      primaryPlaceholder: 'e.g. 11001100',
      defaultValue: '11001100',
      hasSecondaryInput: true,
      secondaryLabel: 'Second Input (B)',
      secondaryPlaceholder: 'e.g. 10101010',
      defaultSecondaryValue: '10101010',
      helpText: 'Enter binary bit patterns.'
    },
    whatIs: 'The NAND operation (NOT AND) outputs 0 if and only if all inputs are 1; otherwise, it outputs 1. NAND is a universal logic gate, meaning any Boolean logic circuit can be built entirely using only NAND gates.',
    howItWorks: 'Compute the AND of the inputs and invert the result: NAND(A, B) = NOT(A AND B). 0 NAND 0 = 1, 0 NAND 1 = 1, 1 NAND 0 = 1, 1 NAND 1 = 0.',
    formula: 'C_i = \\neg (A_i \\land B_i)',
    example: 'Compute 11001100 NAND 10101010:\n    11001100\nAND 10101010 = 10001000\nNOT(10001000) = 01110111_2 (decimal 119).',
    rules: [
      'Outputs 0 only when both inputs are 1.',
      'Serves as a functionally complete (universal) gate.'
    ],
    applications: [
      'Flash memory architecture (NAND Flash drives and SSDs).',
      'ASIC and FPGA silicon cell library synthesis.',
      'Building all elementary logic gates (NOT, AND, OR, XOR) with a single gate type.'
    ],
    mistakes: [
      'Confusing NAND with NOR.',
      'Assuming NAND outputs 1 when both inputs are 1.'
    ],
    faqs: [
      {
        question: 'Why is NAND called a universal gate?',
        answer: 'Because combinations of NAND gates alone can create every other logic gate (AND, OR, NOT, XOR, NOR, XNOR).'
      }
    ],
    relatedSlugs: ['nor-calculator', 'bitwise-and-calculator', 'xnor-calculator']
  },
  {
    slug: 'nor-calculator',
    name: 'NOR Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Compute the universal NOR logic operation (NOT OR) with full truth tables and circuit proofs.',
    metaTitle: 'NOR Calculator – Binary NOR Gate Operation Online',
    metaDesc: 'Calculate NOR logic gate operations online with truth tables, universal gate proofs, and interactive bitwise calculations.',
    engineType: 'bitwise',
    inputConfig: {
      primaryLabel: 'First Input (A)',
      primaryPlaceholder: 'e.g. 11000000',
      defaultValue: '11000000',
      hasSecondaryInput: true,
      secondaryLabel: 'Second Input (B)',
      secondaryPlaceholder: 'e.g. 00110000',
      defaultSecondaryValue: '00110000',
      helpText: 'Enter binary bit patterns.'
    },
    whatIs: 'The NOR operation (NOT OR) outputs 1 if and only if all inputs are 0; otherwise, it outputs 0. Like NAND, NOR is a universal logic gate capable of synthesizing any digital logic function.',
    howItWorks: 'Perform the OR of the inputs, then invert the result: NOR(A, B) = NOT(A OR B). 0 NOR 0 = 1, 0 NOR 1 = 0, 1 NOR 0 = 0, 1 NOR 1 = 0.',
    formula: 'C_i = \\neg (A_i \\lor B_i)',
    example: 'Compute 11000000 NOR 00110000:\n   11000000\nOR 00110000 = 11110000\nNOT(11110000) = 00001111_2 (decimal 15).',
    rules: [
      'Outputs 1 only when all input bits are 0.',
      'Universal gate capable of creating all Boolean expressions.'
    ],
    applications: [
      'NOR Flash memory chips (used in BIOS and microcontroller firmware bootloaders for fast random access).',
      'SR Latch memory cell design.',
      'CMOS logic circuitry.'
    ],
    mistakes: [
      'Confusing NOR with NAND.',
      'Thinking NOR outputs 1 if any input is 0 (that is NAND).'
    ],
    faqs: [
      {
        question: 'What is the difference between NAND Flash and NOR Flash?',
        answer: 'NOR Flash allows random access down to individual bytes (ideal for executing firmware in place), whereas NAND Flash reads in pages/blocks (providing much higher density and lower cost for file storage).'
      }
    ],
    relatedSlugs: ['nand-calculator', 'bitwise-or-calculator', 'xnor-calculator']
  },
  {
    slug: 'xnor-calculator',
    name: 'XNOR Calculator',
    categorySlug: 'digital-electronics',
    categoryName: 'Digital Electronics Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Compute the XNOR logic operation (Exclusive NOR / Equivalence gate) with complete truth tables.',
    metaTitle: 'XNOR Calculator – Binary XNOR (Equivalence Gate) Online',
    metaDesc: 'Calculate XNOR logic operations online with truth tables, bit equality checking, and digital circuit proofs.',
    engineType: 'bitwise',
    inputConfig: {
      primaryLabel: 'First Input (A)',
      primaryPlaceholder: 'e.g. 10101010',
      defaultValue: '10101010',
      hasSecondaryInput: true,
      secondaryLabel: 'Second Input (B)',
      secondaryPlaceholder: 'e.g. 11100010',
      defaultSecondaryValue: '11100010',
      helpText: 'Enter binary bit patterns.'
    },
    whatIs: 'The XNOR operation (Exclusive NOR, also called the Equivalence gate) outputs 1 if and only if both input bits are identical (both 0 or both 1). If the input bits differ, it outputs 0.',
    howItWorks: 'Computes NOT(A XOR B). 0 XNOR 0 = 1, 0 XNOR 1 = 0, 1 XNOR 0 = 0, 1 XNOR 1 = 1.',
    formula: 'C_i = \\neg (A_i \\oplus B_i) = (A_i \\land B_i) \\lor (\\neg A_i \\land \\neg B_i)',
    example: 'Compute 10101010 XNOR 11100010:\n  10101010\n  11100010\n----------\n  10110111_2 (bits match at indices 7, 5, 4, 2, 1, 0).',
    rules: [
      'Outputs 1 when inputs are equal; outputs 0 when inputs are unequal.',
      'Acts as a hardware 1-bit equality comparator.'
    ],
    applications: [
      'Hardware magnitude comparators and identity checkers (checking if A == B).',
      'Parity generation and checking circuits in communications.',
      'Arithmetic carry-lookahead generator circuits.'
    ],
    mistakes: [
      'Confusing XNOR with XOR (XNOR is the exact opposite / inversion of XOR).',
      'Assuming XNOR outputs 0 when both inputs are 0.'
    ],
    faqs: [
      {
        question: 'Why is XNOR called an equivalence gate?',
        answer: 'Because its output is 1 whenever its inputs are logically equivalent (A == B).'
      }
    ],
    relatedSlugs: ['bitwise-xor-calculator', 'nand-calculator', 'nor-calculator']
  }
];

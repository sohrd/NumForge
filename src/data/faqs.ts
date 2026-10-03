export interface FaqItem {
  question: string;
  answer: string;
  category?: 'Fundamentals' | 'Conversions' | 'Arithmetic & Complements' | 'Digital Logic & Architecture' | 'Encodings & Standards';
}

export const ALL_FAQS: FaqItem[] = [
  {
    question: 'What is a number system?',
    category: 'Fundamentals',
    answer: 'A number system (or numeral system) is a mathematical framework for representing numbers using a consistent set of symbols (digits) and defined rules. It establishes how numerical quantities are expressed, stored, and calculated. Most modern systems are positional number systems, where the numerical value of a digit is determined by both its face value and its position relative to the radix point (such as binary, octal, decimal, and hexadecimal).'
  },
  {
    question: 'What are the different types of number systems?',
    category: 'Fundamentals',
    answer: 'Number systems are broadly categorized into: 1) Positional Number Systems, where digit values depend on their position and base (Binary [Base 2], Octal [Base 8], Decimal [Base 10], Hexadecimal [Base 16], and arbitrary Base-N); 2) Non-Positional Systems, where symbols possess fixed values regardless of placement (such as Roman or Egyptian numerals); 3) Signed Systems for representing positive and negative numbers in computing (Signed Magnitude, 1’s Complement, and 2’s Complement); 4) Floating-Point Systems for real numbers (IEEE-754 Single and Double precision); and 5) Specialized Encodings (Gray code, BCD, Excess-3, and ASCII).'
  },
  {
    question: 'What is the difference between binary, decimal, octal, and hexadecimal?',
    category: 'Fundamentals',
    answer: 'The primary difference lies in their radix (base) and the number of distinct digit symbols they utilize: Binary (Base 2) uses only 2 symbols (0 and 1) and forms the basis of computer hardware. Octal (Base 8) uses 8 digits (0 through 7) and groups binary bits by threes (2^3 = 8). Decimal (Base 10) uses 10 digits (0 through 9) and is the universal standard for human mathematics. Hexadecimal (Base 16) uses 16 alphanumeric symbols (0–9 and A–F) and groups binary bits by fours (2^4 = 16), making it the primary shorthand for byte values and memory addresses in software engineering.'
  },
  {
    question: 'How do you convert decimal to binary?',
    category: 'Conversions',
    answer: 'To convert a decimal integer to binary, apply the successive division by 2 algorithm: 1) Divide the decimal number by 2; 2) Record the integer quotient and the remainder (0 or 1); 3) Repeat the division using the quotient until it equals 0; 4) Read the recorded remainders in reverse order (from bottom to top, least significant bit to most significant bit). For fractional decimal values, repeatedly multiply the fractional part by 2 and record the resulting integer bits (0 or 1) from top to bottom.'
  },
  {
    question: 'How do you convert binary to decimal?',
    category: 'Conversions',
    answer: 'To convert a binary number to decimal, use positional power-of-two expansion: 1) Write down the binary digits and assign each a positional weight starting with 2^0 = 1 for the rightmost bit, 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16, doubling for each step to the left; 2) Multiply each binary digit (0 or 1) by its respective power of two; 3) Sum all products together to obtain the decimal value. For fractional binary bits to the right of the radix point, multiply by negative powers of two (2^-1 = 0.5, 2^-2 = 0.25, 2^-3 = 0.125).'
  },
  {
    question: 'How do you convert decimal to hexadecimal?',
    category: 'Conversions',
    answer: 'To convert a decimal integer to hexadecimal, perform repeated division by 16: 1) Divide the decimal value by 16; 2) Record the remainder (0 through 15). For remainders from 10 to 15, replace them with hex characters A (10), B (11), C (12), D (13), E (14), or F (15); 3) Continue dividing the integer quotient by 16 until the quotient reaches 0; 4) Read the remainders from bottom to top to assemble the hexadecimal string.'
  },
  {
    question: 'How do you convert hexadecimal to decimal?',
    category: 'Conversions',
    answer: 'To convert hexadecimal to decimal, expand each character by its positional power of 16: 1) Convert any letter digits to their decimal numerical equivalents (A=10, B=11, C=12, D=13, E=14, F=15); 2) Assign weights starting from the rightmost digit with 16^0 = 1, 16^1 = 16, 16^2 = 256, 16^3 = 4,096, etc.; 3) Multiply each digit value by its corresponding power of 16; 4) Sum all products together to determine the decimal result.'
  },
  {
    question: 'How do you convert binary to octal?',
    category: 'Conversions',
    answer: 'Because 2^3 = 8, exactly three binary bits correspond to one octal digit: 1) Group the binary sequence into sets of 3 bits, starting from the right (least significant bit) toward the left; 2) Pad the leftmost group with leading zeros if it contains fewer than 3 bits; 3) Convert each 3-bit binary triplet into its single octal digit equivalent (000=0, 001=1, 010=2, 011=3, 100=4, 101=5, 110=6, 111=7); 4) Concatenate the octal digits.'
  },
  {
    question: 'How do you convert octal to binary?',
    category: 'Conversions',
    answer: 'To convert an octal number to binary: 1) Take each digit of the octal number individually; 2) Replace each octal digit with its exact 3-bit binary equivalent (0=000, 1=001, 2=010, 3=011, 4=100, 5=101, 6=110, 7=111); 3) Concatenate all 3-bit binary groups into a single binary string, discarding any non-essential leading zeros.'
  },
  {
    question: 'How do you convert binary to hexadecimal?',
    category: 'Conversions',
    answer: 'Because 2^4 = 16, exactly four binary bits (one nibble) correspond to one hexadecimal character: 1) Partition the binary bits into groups of 4 starting from the right (least significant bit) and moving left; 2) Add leading zeros to the leftmost nibble if it has fewer than 4 bits; 3) Map each 4-bit nibble into its corresponding hex symbol (0000=0 through 1001=9, 1010=A, 1011=B, 1100=C, 1101=D, 1110=E, 1111=F); 4) Join the hex symbols together.'
  },
  {
    question: 'How do you convert hexadecimal to binary?',
    category: 'Conversions',
    answer: 'To convert hexadecimal to binary: 1) Separate each hexadecimal digit in the string; 2) Replace each hex character with its direct 4-bit binary nibble (e.g., 3 = 0011, A = 1010, F = 1111), making sure to include leading zeros within each 4-bit group; 3) Combine the nibbles into a continuous binary bitstream.'
  },
  {
    question: 'How do you convert octal to hexadecimal?',
    category: 'Conversions',
    answer: 'The most direct and accurate approach to convert octal to hexadecimal is to use binary as an intermediate bridge: 1) Convert each octal digit into its 3-bit binary triplet (e.g., 75_8 -> 111 101_2); 2) Regroup the resulting binary bitstream into 4-bit nibbles starting from the rightmost bit (e.g., 0011 1101_2); 3) Convert each 4-bit nibble into its corresponding hexadecimal character (0011 = 3, 1101 = D -> 0x3D).'
  },
  {
    question: 'How do you convert hexadecimal to octal?',
    category: 'Conversions',
    answer: 'To convert hexadecimal to octal, bridge through binary: 1) Expand each hexadecimal digit into its 4-bit binary nibble (e.g., 2F_16 -> 0010 1111_2); 2) Re-partition the entire binary stream into 3-bit triplets starting from the right (e.g., 000 101 111_2); 3) Translate each 3-bit group into its equivalent octal digit (000=0, 101=5, 111=7 -> 57_8).'
  },
  {
    question: 'What is binary and why is it used in computers?',
    category: 'Fundamentals',
    answer: 'Binary is a base-2 numeral system that represents numeric values using only two symbols: 0 and 1. Computers utilize binary because physical electronic hardware (transistors, logic gates, and silicon memory cells) naturally operates with maximum reliability in two distinct electrical states: OFF (0 volts / low voltage) and ON (typically +3.3V or +5V / high voltage). Binary drastically simplifies circuit engineering, reduces vulnerability to electrical noise, and avoids the unreliability of distinguishing 10 separate analog voltage thresholds.'
  },
  {
    question: 'Why is hexadecimal used in computing?',
    category: 'Fundamentals',
    answer: 'Hexadecimal (base 16) is used in computer engineering as a human-readable shorthand for raw binary. Since 16 is 2^4, one hex digit corresponds to exactly 4 bits (a nibble), and two hex digits correspond to an 8-bit byte (from 0x00 to 0xFF). This makes memory addresses (such as 0x7FFF5FBFF), assembly instructions, color codes (#0066CC), MAC addresses, and UUIDs concise, readable, and far less prone to transcription errors than 32-bit or 64-bit binary strings.'
  },
  {
    question: 'What is the difference between a bit and a byte?',
    category: 'Fundamentals',
    answer: 'A bit (binary digit) is the smallest fundamental unit of data in computing, storing a single binary state: either 0 or 1. A byte is a group of 8 contiguous bits. A byte can represent 2^8 = 256 distinct permutations (from 0 to 255 unsigned, or -128 to +127 signed). The byte serves as the universal addressable unit of memory storage across modern computer hardware.'
  },
  {
    question: 'What is a base in a number system?',
    category: 'Fundamentals',
    answer: 'The base (or radix) of a number system specifies the total number of unique digit symbols, including zero, available to represent numbers. In a positional numeral system, the base also serves as the scaling factor for each positional column, where the i-th column has a weight of base^i.'
  },
  {
    question: 'What digits are used in binary, octal, decimal, and hexadecimal?',
    category: 'Fundamentals',
    answer: 'The allowable digits are: Binary (Base 2): 0, 1; Octal (Base 8): 0, 1, 2, 3, 4, 5, 6, 7; Decimal (Base 10): 0, 1, 2, 3, 4, 5, 6, 7, 8, 9; Hexadecimal (Base 16): 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, along with letters A (10), B (11), C (12), D (13), E (14), and F (15).'
  },
  {
    question: "What is 1's complement?",
    category: 'Arithmetic & Complements',
    answer: "One's Complement (1's complement) of a binary number is obtained by inverting every bit: swapping all 1s to 0s and all 0s to 1s (the bitwise NOT operation). In signed 1's complement arithmetic, negative numbers are represented by inverting all bits of their positive counterparts. However, 1's complement suffers from having two distinct zeros (+0 as all zeros and -0 as all ones), requiring end-around carry logic during arithmetic."
  },
  {
    question: "What is 2's complement?",
    category: 'Arithmetic & Complements',
    answer: "Two's Complement (2's complement) is the universal mathematical standard for representing signed integers in computer hardware. It is calculated by taking the 1's complement of a binary number (inverting every bit) and adding 1 to the least significant bit (LSB): Two's Complement = ~X + 1. It allows processors to execute subtraction using the identical digital adder circuitry as addition (A - B = A + (~B + 1))."
  },
  {
    question: "What is the difference between 1's complement and 2's complement?",
    category: 'Arithmetic & Complements',
    answer: "The critical differences are: 1) Calculation: 1's complement is pure bit inversion (~X), whereas 2's complement is bit inversion plus one (~X + 1); 2) Zero representation: 1's complement has dual zeros (+0 and -0), causing mathematical ambiguity, whereas 2's complement has a single, unique zero (00000000); 3) Hardware complexity: 2's complement eliminates the need for end-around carry correction during addition; 4) Range: An n-bit 2's complement register spans -2^(n-1) to +2^(n-1) - 1, representing one extra negative value than 1's complement."
  },
  {
    question: 'How do you perform binary addition?',
    category: 'Arithmetic & Complements',
    answer: 'Binary addition follows four fundamental column rules: 0 + 0 = 0; 0 + 1 = 1; 1 + 0 = 1; and 1 + 1 = 0 with a carry-out of 1 (10_2). When an incoming carry bit is present, 1 + 1 + 1 = 1 with a carry-out of 1 (11_2). Beginning at the least significant bit on the right, add corresponding bits column by column, propagating carry bits to the left.'
  },
  {
    question: 'How do you perform binary subtraction?',
    category: 'Arithmetic & Complements',
    answer: 'Binary subtraction can be performed using two methods: 1) Direct Borrow Method: 0 - 0 = 0, 1 - 0 = 1, 1 - 1 = 0, and 0 - 1 = 1 after borrowing 1 from the next higher non-zero column (where the borrowed bit has a weight of 2); 2) Two’s Complement Method (Standard ALU): Convert the subtrahend B into its Two’s Complement (~B + 1) and add it to the minuend A: A + (~B + 1). Any carry generated beyond the register size is ignored.'
  },
  {
    question: 'What are bitwise AND, OR, XOR, and NOT operations?',
    category: 'Digital Logic & Architecture',
    answer: 'Bitwise operations evaluate operands bit by bit in parallel: Bitwise AND (&) returns 1 only when both bits are 1 (used for masking and clearing bits); Bitwise OR (|) returns 1 if either bit is 1 (used for setting flags); Bitwise XOR (^) returns 1 if the input bits differ (used for toggling bits, parity checks, and cryptography); Bitwise NOT (~) inverts every bit (0 becomes 1, and 1 becomes 0).'
  },
  {
    question: 'What is Gray code?',
    category: 'Encodings & Standards',
    answer: 'Gray code (reflected binary code) is an unweighted binary numeral system in which two successive values differ by only one single bit position (known as the unit-distance property). This prevents race conditions and spurious intermediate switching states in digital encoders, optical shaft sensors, and asynchronous FIFO memory buffers.'
  },
  {
    question: 'What is BCD (Binary-Coded Decimal)?',
    category: 'Encodings & Standards',
    answer: 'Binary-Coded Decimal (BCD, specifically 8421 BCD) is a digital encoding scheme where each decimal digit (0 through 9) is represented by its own 4-bit binary nibble (0000 to 1001). Bit patterns from 1010 to 1111 (10 to 15) are invalid in BCD. BCD is widely used in electronic displays (digital clocks, voltmeters) and financial accounting systems to eliminate floating-point decimal rounding errors.'
  },
  {
    question: 'What is Excess-3 code?',
    category: 'Encodings & Standards',
    answer: 'Excess-3 (XS-3 or Stibitz code) is an unweighted, self-complementing digital code derived by adding 3 (binary 0011) to each decimal digit’s 8421 BCD representation. It is self-complementing because taking the 1’s complement of an Excess-3 number directly produces the 9’s complement of the decimal digit, simplifying subtraction circuits in early digital ALUs.'
  },
  {
    question: 'What is a signed number in binary?',
    category: 'Arithmetic & Complements',
    answer: 'A signed binary number is an encoding format designed to represent both positive and negative quantities. In fixed-width computer registers, the most significant bit (MSB, leftmost bit) indicates the sign: 0 denotes positive and 1 denotes negative. Modern processors format signed numbers in Two’s Complement representation.'
  },
  {
    question: 'What is the difference between signed and unsigned numbers?',
    category: 'Arithmetic & Complements',
    answer: 'Unsigned numbers treat all bits as pure numerical magnitude and can only represent non-negative integers (0 to 2^n - 1). Signed numbers allocate the most significant bit (MSB) as a sign flag and format negative values via Two’s Complement, spanning from -2^(n-1) to +2^(n-1) - 1. For an 8-bit byte, unsigned spans 0 to 255, while signed spans -128 to +127.'
  },
  {
    question: 'What is IEEE 754 floating-point representation?',
    category: 'Encodings & Standards',
    answer: 'IEEE 754 is the international technical standard for representing real (fractional) numbers in computer hardware. It splits bits into three fields: Sign bit (1 bit), Biased Exponent (8 bits for Single Precision Float32 with bias 127; 11 bits for Double Precision Float64 with bias 1023), and Normalized Significand/Mantissa (23 bits for Float32; 52 bits for Float64). The real value is evaluated as (-1)^Sign * (1.Mantissa) * 2^(Exponent - Bias).'
  },
  {
    question: 'How many values can an 8-bit number represent?',
    category: 'Arithmetic & Complements',
    answer: 'An 8-bit binary number can represent exactly 2^8 = 256 unique discrete states or values, regardless of whether it is interpreted as unsigned integer (0 to 255), signed Two’s Complement integer (-128 to +127), an ASCII character, or a bitfield.'
  },
  {
    question: 'What is the range of an 8-bit signed integer?',
    category: 'Arithmetic & Complements',
    answer: 'In standard Two’s Complement representation, an 8-bit signed integer ranges from -128 to +127 (inclusive). The negative limit is -2^(8-1) = -128, and the positive limit is +2^(8-1) - 1 = +127.'
  },
  {
    question: 'What is the range of an 8-bit unsigned integer?',
    category: 'Arithmetic & Complements',
    answer: 'An 8-bit unsigned integer ranges from 0 to 255 (inclusive). The minimum value is 0 (binary 00000000) and the maximum value is 2^8 - 1 = 255 (binary 11111111).'
  },
  {
    question: 'How are hexadecimal numbers related to binary numbers?',
    category: 'Conversions',
    answer: 'Hexadecimal and binary have an exact power-of-two mathematical relationship: 16 = 2^4. Consequently, each hexadecimal digit corresponds directly to a unique 4-bit binary group (nibble). For example, hex 0 is 0000, 9 is 1001, A is 1010, and F is 1111. Converting between them requires no arithmetic division, only 4-bit grouping.'
  },
  {
    question: 'How are octal numbers related to binary numbers?',
    category: 'Conversions',
    answer: 'Octal and binary share a direct power-of-two relationship: 8 = 2^3. Thus, each octal digit (0 through 7) maps exactly to a 3-bit binary triplet (e.g., octal 0 = 000, octal 4 = 100, octal 7 = 111). Conversion between octal and binary is executed by clustering bits into groups of three.'
  },
  {
    question: 'Can a number be converted between any two bases?',
    category: 'Conversions',
    answer: 'Yes. Any real number can be converted between any two integer radices A and B (where A, B >= 2). In computational mathematics, the universal procedure converts the base A number to decimal (base 10) by positional polynomial expansion, and then converts the decimal value to base B via repeated division (for the integer part) and repeated multiplication (for the fractional part).'
  },
  {
    question: 'How can I check whether a number is valid for a particular base?',
    category: 'Fundamentals',
    answer: 'A number string is valid in base N if and only if every single character belongs to the allowable alphabet for that base and its numeric value is strictly less than N (0 <= digit < N). For instance, 102 is invalid in binary (contains 2), 789 is invalid in octal (contains 8 and 9), and 1G is invalid in hexadecimal (G is outside A-F).'
  },
  {
    question: 'How are fractional numbers converted between different bases?',
    category: 'Conversions',
    answer: 'To convert fractional numbers: 1) From Base N to Decimal: Multiply each digit to the right of the radix point by negative powers of the base (sum of digit * N^-position); 2) From Decimal to Base N: Repeatedly multiply the fractional part by N. The integer part of each product forms the next fractional digit in base N, and the remaining fraction is multiplied again until it reaches zero or the desired precision.'
  },
  {
    question: 'Where are binary, octal, decimal, and hexadecimal numbers used?',
    category: 'Digital Logic & Architecture',
    answer: 'Binary is used in physical CPU registers, logic gates, memory storage, and network headers. Octal is used in Unix/Linux file permissions (e.g., chmod 755), legacy computer architectures, and aviation transponder codes. Decimal is used in human commerce, finance, and everyday science. Hexadecimal is used in computer memory addresses (pointers), assembly code, web color codes (#FFFFFF), MAC addresses, IPv6 addresses, and cryptographic hash digests.'
  },
  {
    question: 'Why are number systems important in computer science and digital electronics?',
    category: 'Digital Logic & Architecture',
    answer: 'Number systems bridge physical silicon hardware and abstract software computation. They govern how discrete voltage levels model logical data, how arithmetic logic units (ALUs) execute calculations at billions of operations per second, how memory addresses are referenced, and how floating-point numbers are approximated without precision loss. Mastering number systems is essential for embedded systems, compiler construction, low-level systems programming, networking, and cybersecurity.'
  }
];

export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': ALL_FAQS.map((faq) => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': `<p>${faq.answer}</p>`
    }
  }))
};

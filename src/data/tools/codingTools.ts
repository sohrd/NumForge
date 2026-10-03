import type { ToolDefinition } from '../types';

export const CODING_TOOLS: ToolDefinition[] = [
  {
    slug: 'ascii-to-binary-converter',
    name: 'ASCII to Binary Converter',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Convert plain text and ASCII characters into 8-bit binary byte sequences.',
    metaTitle: 'ASCII to Binary Converter – Convert Text to Binary Online',
    metaDesc: 'Convert ASCII text to binary online with 8-bit byte formatting, character code breakdown, and instant decoding.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Text String',
      primaryPlaceholder: 'e.g. Hello',
      defaultValue: 'Hello',
      helpText: 'Enter text to convert to binary.'
    },
    whatIs: 'ASCII to binary conversion translates readable text characters into the 8-bit binary codes used by computers to store text data.',
    howItWorks: 'Each character has an assigned numeric ASCII code (e.g., "A" = 65). The converter translates this integer into an 8-bit binary sequence (65 -> 01000001).',
    formula: '\\text{char} \\xrightarrow{} \\text{ASCII Code}_{10} \\xrightarrow{} [b_7 \\dots b_0]_2',
    example: 'Convert "Hi" to binary:\n"H" -> ASCII 72 -> 01001000\n"i" -> ASCII 105 -> 01101001\nBinary: 01001000 01101001.',
    rules: [
      'Standard ASCII covers codes 0 through 127.',
      'Extended ASCII and UTF-8 cover codes up to 255 and multi-byte sequences.'
    ],
    applications: [
      'Sending text data through serial hardware interfaces (UART, SPI, I2C).',
      'Data encoding in QR codes and barcode systems.',
      'Understanding string serialization in networking.'
    ],
    mistakes: [
      'Confusing uppercase and lowercase codes (e.g. "A" is 65, but "a" is 97).',
      'Forgetting that space (" ") has an ASCII code of 32 (00100000).'
    ],
    faqs: [
      {
        question: 'What is the binary code for letter A?',
        answer: '"A" is 01000001 (ASCII code 65).'
      }
    ],
    relatedSlugs: ['binary-to-ascii-converter', 'ascii-to-hex-converter', 'character-to-ascii-to-binary']
  },
  {
    slug: 'binary-to-ascii-converter',
    name: 'Binary to ASCII Converter',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Decode 8-bit binary byte sequences back into readable ASCII text characters.',
    metaTitle: 'Binary to ASCII Converter – Convert Binary to Text Online',
    metaDesc: 'Convert binary bytes (0 and 1) to ASCII text online with space-separated byte parsing and character lookup.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Binary String (8-bit bytes)',
      primaryPlaceholder: 'e.g. 01001000 01101001',
      defaultValue: '01001000 01101001',
      helpText: 'Enter binary bytes separated by spaces or continuous.'
    },
    whatIs: 'Binary to ASCII conversion decodes binary bit patterns into human-readable text by mapping each 8-bit byte to its corresponding ASCII character.',
    howItWorks: 'The binary stream is partitioned into 8-bit bytes. Each byte is evaluated as an integer from 0 to 255 and matched against the standard ASCII / UTF-8 character table.',
    formula: '[b_7 \\dots b_0]_2 \\xrightarrow{} \\text{Code}_{10} \\xrightarrow{} \\text{Character}',
    example: 'Decode 01001000 01101001:\n01001000_2 = 72 -> "H"\n01101001_2 = 105 -> "i"\nText: "Hi".',
    rules: [
      'Each character requires an 8-bit byte.',
      'Codes 0-31 are non-printing control characters (e.g. newline, tab).'
    ],
    applications: [
      'Decoding packet payload dumps from network sniffers (Wireshark).',
      'Reverse-engineering file headers and metadata.',
      'Binary puzzles and CTF cybersecurity competitions.'
    ],
    mistakes: [
      'Entering groups that are not 8 bits in length.',
      'Missing spaces between byte groups.'
    ],
    faqs: [
      {
        question: 'What does 00100000 mean in binary text?',
        answer: '00100000 is decimal 32, which is the ASCII code for a space character.'
      }
    ],
    relatedSlugs: ['ascii-to-binary-converter', 'hex-to-ascii-converter', 'binary-to-decimal']
  },
  {
    slug: 'ascii-to-hex-converter',
    name: 'ASCII to Hex Converter',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['hexadecimal'],
    shortDesc: 'Convert text characters into hexadecimal byte sequences (0x00 to 0xFF).',
    metaTitle: 'ASCII to Hex Converter – Convert Text to Hexadecimal Online',
    metaDesc: 'Convert ASCII text to hexadecimal bytes online with 2-digit hex formatting, prefixes (0x), and table proofs.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Text String',
      primaryPlaceholder: 'e.g. NumForge',
      defaultValue: 'NumForge',
      helpText: 'Enter plain text to convert to hex.'
    },
    whatIs: 'ASCII to hex conversion represents text as pairs of hexadecimal digits (1 byte = 2 hex digits), widely used in memory editors and hex viewers.',
    howItWorks: 'Find the ASCII integer code for each character and convert it into a 2-digit hexadecimal number.',
    formula: '\\text{char} \\xrightarrow{} \\text{ASCII}_{10} \\xrightarrow{} h_1 h_0',
    example: 'Convert "Cat" to hex:\n"C" -> 67 -> 43_{16}\n"a" -> 97 -> 61_{16}\n"t" -> 116 -> 74_{16}\nHex: 43 61 74.',
    rules: [
      'Each character produces exactly two hexadecimal characters.',
      'Standard ASCII values range from 0x00 to 0x7F.'
    ],
    applications: [
      'URL encoding (percent-encoding, e.g. space -> %20).',
      'Inspecting binary file formats in hex editors (HxD, 010 Editor).',
      'Database BLOB string storage.'
    ],
    mistakes: [
      'Omitting leading zeros for codes less than 16 (e.g. newline 0x0A written as A).',
      'Confusing decimal ASCII with hex ASCII.'
    ],
    faqs: [
      {
        question: 'What is the hex code for a space?',
        answer: 'Space is 0x20 in hexadecimal (32 in decimal).'
      }
    ],
    relatedSlugs: ['hex-to-ascii-converter', 'ascii-to-binary-converter', 'character-to-ascii-to-hex']
  },
  {
    slug: 'hex-to-ascii-converter',
    name: 'Hex to ASCII Converter',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['hexadecimal'],
    shortDesc: 'Convert hexadecimal byte strings back into readable ASCII text characters.',
    metaTitle: 'Hex to ASCII Converter – Convert Hexadecimal to Text Online',
    metaDesc: 'Convert hexadecimal strings to ASCII text online with automatic byte splitting, character decoding, and proofs.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Hexadecimal String',
      primaryPlaceholder: 'e.g. 48 65 6c 6c 6f',
      defaultValue: '48 65 6c 6c 6f',
      helpText: 'Enter hex byte pairs separated by spaces or continuous.'
    },
    whatIs: 'Hex to ASCII conversion translates pairs of hexadecimal digits back into readable text characters according to the ASCII/UTF-8 character specification.',
    howItWorks: 'Break the hex sequence into 2-digit pairs. Convert each hex pair to its decimal equivalent (0-255) and map to the corresponding ASCII character.',
    formula: 'h_1 h_0 \\xrightarrow{} \\text{decimal} \\xrightarrow{} \\text{character}',
    example: 'Convert 48 65 6C 6C 6F:\n48 -> 72 -> "H"\n65 -> 101 -> "e"\n6C -> 108 -> "l"\n6C -> 108 -> "l"\n6F -> 111 -> "o"\nText: "Hello".',
    rules: [
      'Hex input should consist of pairs of characters (0-9, A-F).',
      'Invalid hex characters are flagged.'
    ],
    applications: [
      'Decoding hex-encoded strings in malware analysis and digital forensics.',
      'Reading human-readable text strings embedded inside binary firmware.',
      'Deciphering web API URL-encoded strings.'
    ],
    mistakes: [
      'Providing an odd number of hex digits without padding.',
      'Including non-hex letters like G or Z.'
    ],
    faqs: [
      {
        question: 'What does hex 41 decode to in ASCII?',
        answer: 'Hex 41 is 65 in decimal, which decodes to uppercase letter "A".'
      }
    ],
    relatedSlugs: ['ascii-to-hex-converter', 'binary-to-ascii-converter', 'hex-to-decimal']
  },
  {
    slug: 'unicode-to-hex-converter',
    name: 'Unicode to Hex Converter',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['hexadecimal'],
    shortDesc: 'Convert Unicode characters, emojis, and symbols to hex codepoints (U+XXXX) and UTF-8 hex bytes.',
    metaTitle: 'Unicode to Hex Converter – Convert Unicode Characters to Hex Online',
    metaDesc: 'Convert Unicode characters and emojis to hexadecimal codepoints (U+XXXX) and UTF-8 byte encodings online.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Text / Symbols / Emojis',
      primaryPlaceholder: 'e.g. ⚡ NumForge or 🚀',
      defaultValue: '⚡ NumForge',
      helpText: 'Enter any Unicode characters or text.'
    },
    whatIs: 'Unicode to hex conversion reveals the exact numerical codepoint (e.g. U+26A1 for ⚡) and the multi-byte UTF-8 hexadecimal sequence used to store characters in modern software.',
    howItWorks: 'Extracts the 21-bit Unicode codepoint and calculates the 1, 2, 3, or 4-byte UTF-8 encoding scheme.',
    formula: '\\text{char} \\xrightarrow{} U+\\text{Codepoint}_{16} \\xrightarrow{} \\text{UTF-8 Bytes}_{16}',
    example: 'Convert "⚡" (High Voltage):\nUnicode Codepoint: U+26A1\nDecimal Codepoint: 9889\nUTF-8 Hex Bytes: E2 9A A1.',
    rules: [
      'ASCII characters (U+0000 to U+007F) use 1 byte in UTF-8.',
      'Symbols and accented letters use 2 to 3 bytes; emojis use 4 bytes.'
    ],
    applications: [
      'Debugging character encoding bugs (mojibake) in internationalized software.',
      'Configuring JSON escape sequences (\\uXXXX) and CSS content properties.',
      'Database charset collation verification (utf8mb4).'
    ],
    mistakes: [
      'Confusing the Unicode codepoint (U+26A1) with its UTF-8 byte encoding (E2 9A A1).',
      'Assuming all characters fit in 1 or 2 bytes.'
    ],
    faqs: [
      {
        question: 'What is the difference between a codepoint and UTF-8?',
        answer: 'A codepoint is an abstract numerical address in the Unicode standard (e.g. U+1F680), whereas UTF-8 is the variable-length byte format used to serialize that codepoint into computer memory.'
      }
    ],
    relatedSlugs: ['unicode-to-binary-converter', 'ascii-to-hex-converter', 'hex-to-ascii-converter']
  },
  {
    slug: 'unicode-to-binary-converter',
    name: 'Unicode to Binary Converter',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Convert Unicode characters into raw UTF-8 binary bit patterns with leading continuation markers.',
    metaTitle: 'Unicode to Binary Converter – Convert Unicode to UTF-8 Binary',
    metaDesc: 'Convert Unicode characters to UTF-8 binary bitstreams online with multi-byte continuation byte markers.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Unicode Text',
      primaryPlaceholder: 'e.g. π or ©',
      defaultValue: 'π',
      helpText: 'Enter text or international characters.'
    },
    whatIs: 'Unicode to binary conversion displays the exact binary bitstream of UTF-8 encoded text, highlighting the leading byte header bits (0xxxxxxx, 110xxxxx, 1110xxxx, 11110xxx) and continuation bits (10xxxxxx).',
    howItWorks: 'Encodes the Unicode codepoint into UTF-8 bytes and converts each byte into an 8-bit binary string.',
    formula: '\\text{UTF-8 Encoding}: [110x\\dots]_2 \\; [10xx\\dots]_2',
    example: 'Convert Greek letter "π" (Pi, U+03C0):\nUTF-8 Hex: CE B0\nBinary: 11001110 10110000_2.',
    rules: [
      'Multi-byte characters always have continuation bytes starting with 10.',
      'Single-byte ASCII characters always start with 0.'
    ],
    applications: [
      'Analyzing low-level text protocol serialization.',
      'Studying UTF-8 self-synchronizing variable-width bit architecture.',
      'Network socket packet debugging.'
    ],
    mistakes: [
      'Assuming binary is just the raw codepoint without UTF-8 framing bits.',
      'Truncating multi-byte characters.'
    ],
    faqs: [
      {
        question: 'How do you tell how many bytes a UTF-8 character uses from binary?',
        answer: 'Look at the first byte: if it starts with 0, it uses 1 byte; if it starts with 110, it uses 2 bytes; 1110 uses 3 bytes; 11110 uses 4 bytes.'
      }
    ],
    relatedSlugs: ['unicode-to-hex-converter', 'ascii-to-binary-converter', 'binary-to-ascii-converter']
  },
  {
    slug: 'rgb-to-hex-converter',
    name: 'RGB to Hex Converter',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['hexadecimal'],
    shortDesc: 'Convert Red, Green, and Blue decimal color channels (0-255) into web-standard 6-character hex color codes.',
    metaTitle: 'RGB to Hex Converter – Convert RGB Colors to Hex Online',
    metaDesc: 'Convert RGB color channels (0-255) to 6-digit hex color codes (#RRGGBB) online with instant color preview.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Red Channel (0-255)',
      primaryPlaceholder: '0',
      defaultValue: '0',
      hasSecondaryInput: true,
      secondaryLabel: 'Green & Blue Channels (G, B)',
      secondaryPlaceholder: '102, 204',
      defaultSecondaryValue: '102, 204',
      helpText: 'Enter R, G, B channels as integers from 0 to 255.'
    },
    whatIs: 'RGB to Hex conversion converts 24-bit RGB additive color values (Red, Green, Blue each from 0 to 255) into standard 6-digit hexadecimal color notation (#RRGGBB) used in CSS, HTML, and graphics software.',
    howItWorks: 'Convert each 8-bit color channel from decimal to a 2-digit hex string, padding with a leading zero if < 16, and concatenate with a leading # symbol.',
    formula: '\\text{Hex} = \\# \\text{hex}_2(R) \\; \\text{hex}_2(G) \\; \\text{hex}_2(B)',
    example: 'Convert RGB(0, 102, 204):\nR: 0 -> 00\nG: 102 -> 66\nB: 204 -> CC\nHex Color: #0066CC.',
    rules: [
      'Each channel must be an integer between 0 and 255.',
      'Single-digit hex channels must be padded with a leading zero (e.g. 5 -> 05).'
    ],
    applications: [
      'Web design, CSS stylesheets, and UI theme design.',
      'Graphic design software color palette synchronization.',
      'Digital image processing color channel manipulation.'
    ],
    mistakes: [
      'Omitting leading zeros (e.g. writing #066CC instead of #0066CC).',
      'Entering values outside the 0-255 range.'
    ],
    faqs: [
      {
        question: 'What is pure white in RGB and Hex?',
        answer: 'Pure white is RGB(255, 255, 255) and #FFFFFF in hexadecimal.'
      }
    ],
    relatedSlugs: ['hex-to-rgb-converter', 'hex-color-converter', 'decimal-to-hex']
  },
  {
    slug: 'hex-to-rgb-converter',
    name: 'Hex to RGB Converter',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['hexadecimal'],
    shortDesc: 'Convert 6-digit and 3-digit hex color strings into decimal RGB channels (0-255) with live color preview.',
    metaTitle: 'Hex to RGB Converter – Convert Hex Color to RGB Online',
    metaDesc: 'Convert hex color codes (#RRGGBB) to decimal Red, Green, and Blue color channels (0-255) online with color preview.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Hex Color Code',
      primaryPlaceholder: 'e.g. #0066CC or #FF5733',
      defaultValue: '#0066CC',
      helpText: 'Enter 3 or 6 character hex color code.'
    },
    whatIs: 'Hex to RGB conversion parses a 6-digit or shorthand 3-digit hexadecimal color code into its three constituent decimal color channels: Red, Green, and Blue (each ranging from 0 to 255).',
    howItWorks: 'Strips the leading # symbol. Extracts the first pair of hex digits for Red, second pair for Green, and third pair for Blue. Converts each pair from base 16 to base 10.',
    formula: 'R = \\text{dec}(h_1 h_2), \\quad G = \\text{dec}(h_3 h_4), \\quad B = \\text{dec}(h_5 h_6)',
    example: 'Convert #0066CC:\nRed: 00_{16} = 0\nGreen: 66_{16} = (6×16) + 6 = 102\nBlue: CC_{16} = (12×16) + 12 = 204\nResult: RGB(0, 102, 204).',
    rules: [
      '3-digit shorthand (#RGB) expands by doubling each digit (#RRGGBB).',
      'Allowed characters are 0-9 and A-F.'
    ],
    applications: [
      'Web styling and converting CSS hex colors to rgba() for opacity manipulation.',
      'Canvas 2D and WebGL shader color uniform configuration.',
      'Mobile application development (SwiftUI, Jetpack Compose).'
    ],
    mistakes: [
      'Treating 3-digit hex #123 as #010203 instead of #112233.',
      'Entering invalid characters like #ZZ0000.'
    ],
    faqs: [
      {
        question: 'How does shorthand 3-digit hex work?',
        answer: 'Each digit is repeated twice: #06C becomes #0066CC.'
      }
    ],
    relatedSlugs: ['rgb-to-hex-converter', 'hex-color-converter', 'hex-to-decimal']
  },
  {
    slug: 'ipv4-to-binary-converter',
    name: 'IPv4 to Binary Converter',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Convert dotted-decimal IPv4 addresses (e.g. 192.168.1.1) into 32-bit binary bitstreams.',
    metaTitle: 'IPv4 to Binary Converter – Convert IP Address to 32-Bit Binary',
    metaDesc: 'Convert IPv4 addresses to 32-bit binary octets online with subnet mask breakdown, CIDR notation, and network proofs.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'IPv4 Address',
      primaryPlaceholder: 'e.g. 192.168.1.1',
      defaultValue: '192.168.1.1',
      helpText: 'Enter standard dotted-quad IPv4 address.'
    },
    whatIs: 'IPv4 to binary conversion transforms a standard 4-octet dotted-decimal Internet Protocol address into the underlying 32-bit binary representation used by routers and network switches.',
    howItWorks: 'Split the IP address by periods into four decimal octets. Convert each octet (0 to 255) into an 8-bit binary string padded with leading zeros.',
    formula: 'A.B.C.D \\xrightarrow{} [\\text{bin}_8(A) \\; . \\; \\text{bin}_8(B) \\; . \\; \\text{bin}_8(C) \\; . \\; \\text{bin}_8(D)]',
    example: 'Convert 192.168.1.1 to binary:\n192 -> 11000000\n168 -> 10101000\n1   -> 00000001\n1   -> 00000001\n32-Bit Binary: 11000000.10101000.00000001.00000001.',
    rules: [
      'Must contain exactly 4 octets separated by periods.',
      'Each octet must be between 0 and 255.'
    ],
    applications: [
      'Subnetting and calculating network/broadcast addresses in CCNA/networking courses.',
      'Configuring router access control lists (ACLs) and wildcard masks.',
      'Firewall rule optimization.'
    ],
    mistakes: [
      'Omitting leading zeros in octets (e.g. converting 1 into 1 instead of 00000001).',
      'Entering octets greater than 255.'
    ],
    faqs: [
      {
        question: 'What is 255.255.255.0 in binary?',
        answer: '11111111.11111111.11111111.00000000 (a /24 subnet mask with 24 network bits).'
      }
    ],
    relatedSlugs: ['binary-to-ipv4-converter', 'mac-address-to-binary', 'decimal-to-binary']
  },
  {
    slug: 'binary-to-ipv4-converter',
    name: 'Binary to IPv4 Converter',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Convert 32-bit binary bitstreams back into standard dotted-decimal IPv4 addresses.',
    metaTitle: 'Binary to IPv4 Converter – Convert 32-Bit Binary to IP Address',
    metaDesc: 'Convert 32-bit binary strings to dotted-decimal IPv4 addresses online with octet parsing and decimal conversion.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: '32-Bit Binary IP',
      primaryPlaceholder: 'e.g. 11000000101010000000000100000001',
      defaultValue: '11000000101010000000000100000001',
      helpText: 'Enter 32 bits (with or without dots/spaces).'
    },
    whatIs: 'Binary to IPv4 conversion decodes a 32-bit continuous binary sequence from packet headers back into human-readable dotted-quad decimal format (A.B.C.D).',
    howItWorks: 'Divide the 32 bits into four 8-bit octets. Convert each 8-bit octet into a decimal integer from 0 to 255 and join with periods.',
    formula: '[b_{31}\\dots b_{24}] . [b_{23}\\dots b_{16}] . [b_{15}\\dots b_8] . [b_7\\dots b_0] \\xrightarrow{} A.B.C.D',
    example: 'Decode 11000000 10101000 00000001 00000001:\n11000000_2 = 192\n10101000_2 = 168\n00000001_2 = 1\n00000001_2 = 1\nIPv4 Address: 192.168.1.1.',
    rules: [
      'Must contain exactly 32 binary bits.',
      'Each octet translates to a decimal number from 0 to 255.'
    ],
    applications: [
      'Parsing raw network packet capture bytes (pcap).',
      'Router routing table lookup verification.',
      'Network engineering education.'
    ],
    mistakes: [
      'Providing fewer or more than 32 bits.',
      'Splitting octets into uneven sizes.'
    ],
    faqs: [
      {
        question: 'What is 01111111 00000000 00000000 00000001 in IPv4?',
        answer: '127.0.0.1 (the standard localhost loopback address).'
      }
    ],
    relatedSlugs: ['ipv4-to-binary-converter', 'mac-address-to-binary', 'binary-to-decimal']
  },
  {
    slug: 'mac-address-to-binary',
    name: 'MAC Address to Binary',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['binary', 'hexadecimal'],
    shortDesc: 'Convert 48-bit Ethernet hardware MAC addresses into binary bitstreams.',
    metaTitle: 'MAC Address to Binary Converter – Convert MAC to 48-Bit Binary',
    metaDesc: 'Convert hardware MAC addresses to 48-bit binary online with OUI vendor identification and individual byte parsing.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'MAC Address',
      primaryPlaceholder: 'e.g. 00:1A:2B:3C:4D:5E',
      defaultValue: '00:1A:2B:3C:4D:5E',
      helpText: 'Enter 12 hex digits separated by colons, hyphens, or dots.'
    },
    whatIs: 'A MAC (Media Access Control) address is a 48-bit unique hardware identifier for network adapters. This tool converts the 12 hexadecimal characters into their exact 48 binary bits.',
    howItWorks: 'Strips separators (: or -). Converts each of the 6 byte pairs from hexadecimal into 8 binary bits (4 bits per hex character).',
    formula: '\\text{MAC}_{16} = 6 \\times 8\\text{-bit bytes} \\xrightarrow{} 48\\text{ binary bits}',
    example: 'Convert 00:1A:2B:3C:4D:5E:\n00 -> 00000000\n1A -> 00011010\n2B -> 00101011\n3C -> 00111100\n4D -> 01001101\n5E -> 01011110.',
    rules: [
      'Standard MAC addresses have 48 bits (6 octets).',
      'The first 3 octets represent the OUI (Organizationally Unique Identifier / Vendor).'
    ],
    applications: [
      'Layer 2 Ethernet frame header analysis.',
      'Checking the I/G (Individual/Group) and U/L (Universal/Local) bit flags in networking.',
      'Hardware address filtering.'
    ],
    mistakes: [
      'Entering non-hex characters.',
      'Providing incorrect number of octets.'
    ],
    faqs: [
      {
        question: 'What is the broadcast MAC address in binary?',
        answer: 'FF:FF:FF:FF:FF:FF, which is 48 consecutive 1s.'
      }
    ],
    relatedSlugs: ['mac-address-to-hex', 'ipv4-to-binary-converter', 'hex-to-binary']
  },
  {
    slug: 'mac-address-to-hex',
    name: 'MAC Address to Hex',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['hexadecimal'],
    shortDesc: 'Normalize and format MAC address representations across colon, hyphen, Cisco dot, and raw hex formats.',
    metaTitle: 'MAC Address to Hex Converter – Normalize & Format MAC Addresses',
    metaDesc: 'Format MAC addresses across colon-separated, hyphenated, Cisco dotted (xxxx.xxxx.xxxx), and integer formats.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Raw or Formatted MAC',
      primaryPlaceholder: 'e.g. 001a2b3c4d5e or 001a.2b3c.4d5e',
      defaultValue: '001a2b3c4d5e',
      helpText: 'Enter MAC address in any common notation.'
    },
    whatIs: 'This tool standardizes MAC addresses across all networking conventions: IEEE standard colons (00:1A:2B:3C:4D:5E), Windows hyphens (00-1A-2B-3C-4D-5E), Cisco quad-dot notation (001a.2b3c.4d5e), and raw uppercase hex.',
    howItWorks: 'Extracts the 12 valid hexadecimal digits, capitalizes them, and re-formats them into all standard industry notations.',
    formula: '\\text{Raw 12-char Hex} \\xrightarrow{} \\text{Standard Formats}',
    example: 'Normalize "001a2b3c4d5e":\nColon notation: 00:1A:2B:3C:4D:5E\nHyphen notation: 00-1A-2B-3C-4D-5E\nCisco notation: 001a.2b3c.4d5e.',
    rules: [
      'Must contain exactly 12 hexadecimal characters.',
      'Separators can be :, -, or .'
    ],
    applications: [
      'Configuring DHCP server static IP reservations.',
      'Cisco switch configuration and port-security tables.',
      'Asset inventory management.'
    ],
    mistakes: [
      'Missing octets or entering 13 characters.',
      'Using letters past F.'
    ],
    faqs: [
      {
        question: 'What is Cisco MAC notation?',
        answer: 'Cisco uses three groups of four hexadecimal digits separated by dots, such as 001a.2b3c.4d5e.'
      }
    ],
    relatedSlugs: ['mac-address-to-binary', 'hex-to-binary', 'hex-color-converter']
  },
  {
    slug: 'unix-timestamp-to-binary-hex',
    name: 'Unix Timestamp to Binary/Hex',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['binary', 'hexadecimal'],
    shortDesc: 'Convert Unix epoch timestamps into 32-bit and 64-bit binary and hexadecimal representations with UTC date.',
    metaTitle: 'Unix Timestamp to Binary/Hex Converter – Epoch to Binary & Hex',
    metaDesc: 'Convert Unix epoch timestamps to 32/64-bit binary and hexadecimal online with Year 2038 overflow analysis and UTC dates.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Unix Timestamp (Seconds since Epoch)',
      primaryPlaceholder: 'e.g. 1775199600',
      defaultValue: '1775199600',
      helpText: 'Enter Unix epoch timestamp in seconds.'
    },
    whatIs: 'Unix time represents the number of non-leap seconds elapsed since January 1, 1970 00:00:00 UTC. This tool converts epoch timestamps into binary bit patterns and hexadecimal memory bytes.',
    howItWorks: 'Interprets the integer timestamp as a signed 32-bit and 64-bit integer, outputs its binary and hex encodings, and formats the equivalent ISO-8601 UTC date.',
    formula: 'T_{\\text{epoch}} \\xrightarrow{} \\text{bin}_{32}(T), \\; \\text{hex}_{32}(T), \\; \\text{UTC Date}',
    example: 'Convert Unix timestamp 1700000000:\nHex: 0x6553E100\n32-bit Binary: 01100101 01010011 11100001 00000000\nUTC Date: Tue, 14 Nov 2023 22:13:20 UTC.',
    rules: [
      '32-bit signed timestamps overflow on January 19, 2038 (the Year 2038 problem).',
      'Modern 64-bit timestamps will not overflow for hundreds of billions of years.'
    ],
    applications: [
      'Debugging file creation timestamps in filesystems (ext4, NTFS).',
      'Validating digital signatures and token expiration (JWT expiration timestamps).',
      'Database time column analysis.'
    ],
    mistakes: [
      'Entering milliseconds instead of seconds (or vice versa).',
      'Forgetting the 2038 overflow limit on 32-bit integers.'
    ],
    faqs: [
      {
        question: 'What is the Year 2038 problem (Y2038)?',
        answer: 'On January 19, 2038 at 03:14:07 UTC, 32-bit signed integer timestamps exceed 2,147,483,647 and wrap around to -2,147,483,648 (December 13, 1901), crashing legacy software.'
      }
    ],
    relatedSlugs: ['integer-range-calculator', '32-bit-number-range-calculator', 'decimal-to-hex']
  },
  {
    slug: 'hex-color-converter',
    name: 'Hex Color Converter',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['hexadecimal'],
    shortDesc: 'Convert hex colors to RGB, HSL, CMYK, and 24-bit integer values with live color palette swatch.',
    metaTitle: 'Hex Color Converter – Convert Hex Codes to RGB & HSL Online',
    metaDesc: 'Convert hex color codes to RGB, HSL, and integer values online with interactive color preview and brightness analysis.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Hex Color Code',
      primaryPlaceholder: 'e.g. #0066CC',
      defaultValue: '#0066CC',
      helpText: 'Enter 3, 6, or 8-digit hex color code.'
    },
    whatIs: 'The Hex Color Converter translates web hexadecimal color strings into decimal RGB channels, HSL (Hue, Saturation, Lightness), and 24-bit integer values.',
    howItWorks: 'Parses the hex string into Red, Green, Blue, and optional Alpha components. Computes normalized RGB ratios and calculates HSL color coordinates.',
    formula: 'R = \\text{hex}(0..2), \\; G = \\text{hex}(2..4), \\; B = \\text{hex}(4..6)',
    example: 'Convert #0066CC:\nRGB: rgb(0, 102, 204)\nHSL: hsl(210, 100%, 40%)\nDecimal Integer: 26316\nPerceived Luminance: 29.5%.',
    rules: [
      'Supports 3-digit shorthand (#RGB), 6-digit standard (#RRGGBB), and 8-digit alpha (#RRGGBBAA).',
      'Valid characters are 0-9 and A-F.'
    ],
    applications: [
      'CSS web styling and graphic design asset export.',
      'Checking WCAG color contrast compliance.',
      'Game development UI engine palette management.'
    ],
    mistakes: [
      'Entering invalid hex characters.',
      'Missing the leading # symbol.'
    ],
    faqs: [
      {
        question: 'What does the 8-digit hex color represent?',
        answer: 'The last two digits in an 8-digit hex code represent the alpha (transparency/opacity) channel from 00 (transparent) to FF (opaque).'
      }
    ],
    relatedSlugs: ['hex-to-rgb-converter', 'rgb-to-hex-converter', 'hex-to-decimal']
  },
  {
    slug: 'character-to-ascii-to-binary',
    name: 'Character to ASCII to Binary',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['binary'],
    shortDesc: 'Step-by-step conversion of single characters to decimal ASCII codes and 8-bit binary bytes.',
    metaTitle: 'Character to ASCII to Binary – Single Character Conversion Solver',
    metaDesc: 'Convert any character to its decimal ASCII code and 8-bit binary representation online with step-by-step proofs.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Single Character',
      primaryPlaceholder: 'e.g. A or ?',
      defaultValue: 'A',
      helpText: 'Enter any single character, symbol, or digit.'
    },
    whatIs: 'This educational tool visualizes the two-stage translation of a single typographic character into its decimal ASCII code number and its final 8-bit binary byte.',
    howItWorks: 'Reads the character’s ASCII decimal value and executes repeated division by 2 to generate its exact 8-bit binary representation.',
    formula: '\\text{char} \\xrightarrow{} \\text{ASCII}_{10} \\xrightarrow{\\div 2} [b_7 \\dots b_0]_2',
    example: 'Convert character "A":\nStage 1: ASCII decimal code is 65.\nStage 2: 65 / 2 repeated division yields 01000001_2.\nPowers of two: 64 + 1 = 65.',
    rules: [
      'Focuses on individual character analysis.',
      'Displays full power-of-two decomposition.'
    ],
    applications: [
      'Introductory computer science instruction on data representation.',
      'Understanding character encoding in microcontrollers.',
      'Debugging keyboard scan code mapping.'
    ],
    mistakes: [
      'Entering multiple characters when single-character breakdown is desired.',
      'Confusing the numeric digit "0" (ASCII 48) with the number 0.'
    ],
    faqs: [
      {
        question: 'What is the ASCII code for digit "0"?',
        answer: 'The character "0" has an ASCII decimal value of 48 (binary 00110000).'
      }
    ],
    relatedSlugs: ['character-to-ascii-to-hex', 'ascii-to-binary-converter', 'decimal-to-binary']
  },
  {
    slug: 'character-to-ascii-to-hex',
    name: 'Character to ASCII to Hex',
    categorySlug: 'coding-computer-number',
    categoryName: 'Coding & Computer Number Tools',
    secondaryCategories: ['hexadecimal'],
    shortDesc: 'Step-by-step conversion of single characters to decimal ASCII codes and 2-digit hexadecimal bytes.',
    metaTitle: 'Character to ASCII to Hex – Single Character Conversion Solver',
    metaDesc: 'Convert single characters to decimal ASCII codes and 2-digit hexadecimal representations online with division proofs.',
    engineType: 'encoding',
    inputConfig: {
      primaryLabel: 'Single Character',
      primaryPlaceholder: 'e.g. M',
      defaultValue: 'M',
      helpText: 'Enter a single character.'
    },
    whatIs: 'This tool provides a step-by-step demonstration of converting an individual character into its decimal ASCII value and then into its 2-digit hexadecimal representation.',
    howItWorks: 'Determines the ASCII code, divides by 16 to find the high nibble and low nibble, and maps remainders 10-15 to A-F.',
    formula: '\\text{char} \\xrightarrow{} \\text{ASCII}_{10} \\xrightarrow{\\div 16} h_1 h_0',
    example: 'Convert character "M":\nStage 1: ASCII decimal code is 77.\nStage 2: 77 / 16 = 4 remainder 13 (D).\nHex result: 0x4D.',
    rules: [
      'High nibble = floor(code / 16), Low nibble = code % 16.',
      'Remainders 10-15 map to A through F.'
    ],
    applications: [
      'Learning hex dump analysis.',
      'Understanding URL percent-encoding mechanisms (%4D for M).',
      'Computer systems educational curricula.'
    ],
    mistakes: [
      'Confusing uppercase and lowercase hex representations.',
      'Calculating remainder incorrectly.'
    ],
    faqs: [
      {
        question: 'What is the hex code for character "Z"?',
        answer: '"Z" is ASCII code 90, which equals 0x5A in hexadecimal (5×16 + 10 = 90).'
      }
    ],
    relatedSlugs: ['character-to-ascii-to-binary', 'ascii-to-hex-converter', 'hex-to-ascii-converter']
  }
];

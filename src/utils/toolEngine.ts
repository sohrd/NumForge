export interface CalculationParams {
  slug: string;
  engineType: string;
  val1: string;
  val2: string;
  base: number;
  targetBase: number;
  bitWidth: number;
  op: string;
}

export interface CalculationResult {
  primaryOutput: string;
  secondaryOutputs?: Array<{ label: string; value: string }>;
  derivation: string;
}

// Helper: parse string in any radix up to 36 to BigInt
function parseBigIntRadix(str: string, radix: number): bigint {
  let clean = str.trim().toLowerCase().replace(/^0[box]/, '');
  if (!clean) throw new Error('Empty input value.');

  let isNegative = false;
  if (clean.startsWith('-')) {
    isNegative = true;
    clean = clean.slice(1);
  } else if (clean.startsWith('+')) {
    clean = clean.slice(1);
  }
  if (!clean) throw new Error('Empty input value.');

  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
  let result = 0n;
  const bRadix = BigInt(radix);

  for (let i = 0; i < clean.length; i++) {
    const char = clean[i];
    const val = alphabet.indexOf(char);
    if (val === -1 || val >= radix) {
      throw new Error(`Invalid digit '${clean[i]}' for base ${radix}.`);
    }
    result = result * bRadix + BigInt(val);
  }
  return isNegative ? -result : result;
}

function formatBigIntRadix(num: bigint, radix: number): string {
  if (num === 0n) return '0';
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let n = num < 0n ? -num : num;
  const bRadix = BigInt(radix);
  let res = '';
  while (n > 0n) {
    const rem = Number(n % bRadix);
    res = alphabet[rem] + res;
    n = n / bRadix;
  }
  return num < 0n ? '-' + res : res;
}

export function executeCalculation(params: CalculationParams): CalculationResult {
  const { slug, engineType, val1, val2, base, targetBase, bitWidth, op } = params;

  // 1. BASE CONVERSIONS
  if (
    slug === 'decimal-to-binary' ||
    slug === 'binary-to-decimal' ||
    slug === 'decimal-to-octal' ||
    slug === 'octal-to-decimal' ||
    slug === 'decimal-to-hexadecimal' ||
    slug === 'hexadecimal-to-decimal' ||
    slug === 'binary-to-octal' ||
    slug === 'octal-to-binary' ||
    slug === 'binary-to-hexadecimal' ||
    slug === 'hexadecimal-to-binary' ||
    slug === 'octal-to-hexadecimal' ||
    slug === 'hexadecimal-to-octal' ||
    slug === 'hex-to-binary' ||
    slug === 'binary-to-hex' ||
    slug === 'hex-to-decimal' ||
    slug === 'decimal-to-hex' ||
    slug === 'hex-to-octal' ||
    slug === 'octal-to-hex' ||
    slug.startsWith('base-') ||
    slug === 'any-base-to-any-base-converter' ||
    slug === 'custom-base-converter' ||
    slug === 'step-by-step-conversion-solver'
  ) {
    let srcBase = base;
    let dstBase = targetBase;

    if (slug === 'decimal-to-binary') { srcBase = 10; dstBase = 2; }
    else if (slug === 'binary-to-decimal') { srcBase = 2; dstBase = 10; }
    else if (slug === 'decimal-to-octal') { srcBase = 10; dstBase = 8; }
    else if (slug === 'octal-to-decimal') { srcBase = 8; dstBase = 10; }
    else if (slug === 'decimal-to-hexadecimal' || slug === 'decimal-to-hex') { srcBase = 10; dstBase = 16; }
    else if (slug === 'hexadecimal-to-decimal' || slug === 'hex-to-decimal') { srcBase = 16; dstBase = 10; }
    else if (slug === 'binary-to-octal') { srcBase = 2; dstBase = 8; }
    else if (slug === 'octal-to-binary') { srcBase = 8; dstBase = 2; }
    else if (slug === 'binary-to-hexadecimal' || slug === 'binary-to-hex') { srcBase = 2; dstBase = 16; }
    else if (slug === 'hexadecimal-to-binary' || slug === 'hex-to-binary') { srcBase = 16; dstBase = 2; }
    else if (slug === 'octal-to-hexadecimal' || slug === 'octal-to-hex') { srcBase = 8; dstBase = 16; }
    else if (slug === 'hexadecimal-to-octal' || slug === 'hex-to-octal') { srcBase = 16; dstBase = 8; }
    else if (slug === 'base-2-converter') { srcBase = 2; dstBase = targetBase === 2 ? 10 : targetBase; }
    else if (slug === 'base-3-converter') { srcBase = 3; dstBase = 10; }
    else if (slug === 'base-4-converter') { srcBase = 4; dstBase = 10; }
    else if (slug === 'base-5-converter') { srcBase = 5; dstBase = 10; }
    else if (slug === 'base-6-converter') { srcBase = 6; dstBase = 10; }
    else if (slug === 'base-7-converter') { srcBase = 7; dstBase = 10; }
    else if (slug === 'base-8-converter') { srcBase = 8; dstBase = 10; }
    else if (slug === 'base-9-converter') { srcBase = 9; dstBase = 10; }
    else if (slug === 'base-10-converter') { srcBase = 10; dstBase = targetBase === 10 ? 16 : targetBase; }
    else if (slug === 'base-11-converter') { srcBase = 11; dstBase = 10; }
    else if (slug === 'base-12-converter') { srcBase = 12; dstBase = 10; }
    else if (slug === 'base-13-converter') { srcBase = 13; dstBase = 10; }
    else if (slug === 'base-14-converter') { srcBase = 14; dstBase = 10; }
    else if (slug === 'base-15-converter') { srcBase = 15; dstBase = 10; }
    else if (slug === 'base-16-converter') { srcBase = 16; dstBase = targetBase === 16 ? 10 : targetBase; }

    const num = parseBigIntRadix(val1, srcBase);
    const converted = formatBigIntRadix(num, dstBase);

    // Grouping for binary/hex
    let grouped = converted;
    if (dstBase === 2) {
      grouped = converted.replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
    } else if (dstBase === 16) {
      grouped = converted.replace(/\B(?=([0-9A-Fa-f]{2})+(?![0-9A-Fa-f]))/g, ' ');
    }

    // Derivation steps
    let steps = `Converting ${val1} (Base ${srcBase}) to Base ${dstBase}:\n\n`;
    if (srcBase !== 10) {
      steps += `1. Positional Expansion to Decimal:\n   ${val1}_${srcBase} = ${num.toString(10)} in base 10.\n\n`;
    }
    steps += `2. Successive Division by ${dstBase}:\n`;
    let temp = num;
    const bDst = BigInt(dstBase);
    let stepCount = 1;
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const rems: string[] = [];

    if (temp === 0n) {
      steps += `   0 ÷ ${dstBase} = 0, remainder 0\n`;
    } else {
      while (temp > 0n) {
        const q = temp / bDst;
        const r = Number(temp % bDst);
        rems.push(alphabet[r]);
        steps += `   Step ${stepCount}: ${temp} ÷ ${dstBase} = ${q} with remainder ${r} (${alphabet[r]})\n`;
        temp = q;
        stepCount++;
      }
      steps += `\n3. Reading remainders bottom to top: ${converted}_${dstBase}.`;
    }

    return {
      primaryOutput: grouped,
      secondaryOutputs: [
        { label: 'Binary (Base 2)', value: formatBigIntRadix(num, 2).replace(/\B(?=(\d{4})+(?!\d))/g, ' ') },
        { label: 'Octal (Base 8)', value: formatBigIntRadix(num, 8) },
        { label: 'Decimal (Base 10)', value: num.toString(10) },
        { label: 'Hexadecimal (Base 16)', value: '0x' + formatBigIntRadix(num, 16) }
      ],
      derivation: steps
    };
  }

  // 2. ARITHMETIC CALCULATORS
  if (
    engineType === 'arithmetic' ||
    slug === 'binary-calculator' ||
    slug === 'octal-calculator' ||
    slug === 'hexadecimal-calculator' ||
    slug === 'binary-addition-calculator' ||
    slug === 'binary-subtraction-calculator' ||
    slug === 'binary-multiplication-calculator' ||
    slug === 'binary-division-calculator' ||
    slug === 'octal-arithmetic-calculator' ||
    slug.endsWith('-addition') ||
    slug.endsWith('-subtraction') ||
    slug.endsWith('-multiplication') ||
    slug.endsWith('-division') ||
    slug.includes('modulo') ||
    slug.includes('power')
  ) {
    let arithBase = 10;
    let chosenOp = op || '+';

    if (slug.includes('binary')) { arithBase = 2; }
    else if (slug.includes('octal')) { arithBase = 8; }
    else if (slug.includes('hexadecimal')) { arithBase = 16; }
    else if (slug.startsWith('base-n-')) { arithBase = base; }

    if (slug.includes('addition')) chosenOp = '+';
    else if (slug.includes('subtraction')) chosenOp = '-';
    else if (slug.includes('multiplication')) chosenOp = '*';
    else if (slug.includes('division')) chosenOp = '/';
    else if (slug.includes('modulo')) chosenOp = '%';
    else if (slug.includes('power')) chosenOp = '**';

    const a = parseBigIntRadix(val1, arithBase);
    const b = val2 ? parseBigIntRadix(val2, arithBase) : 0n;
    let res = 0n;
    let rem = 0n;

    if (chosenOp === '+') res = a + b;
    else if (chosenOp === '-') res = a - b;
    else if (chosenOp === '*') res = a * b;
    else if (chosenOp === '/') {
      if (b === 0n) throw new Error('Division by zero is undefined.');
      res = a / b;
      rem = a % b;
    } else if (chosenOp === '%') {
      if (b === 0n) throw new Error('Modulo by zero is undefined.');
      res = a % b;
    } else if (chosenOp === '**') {
      if (b < 0n) throw new Error('Negative exponents not supported for integer powers.');
      res = a ** b;
    }

    const outFormatted = formatBigIntRadix(res, arithBase);
    let deriv = `Arithmetic in Base ${arithBase}:\n`;
    deriv += `Operand A: ${val1} (${a.toString(10)} in dec)\n`;
    deriv += `Operand B: ${val2 || '0'} (${b.toString(10)} in dec)\n`;
    deriv += `Operation: ${chosenOp}\n\n`;
    deriv += `Calculation: ${a} ${chosenOp} ${b} = ${res} (Decimal)\n`;
    deriv += `Converted back to Base ${arithBase}: ${outFormatted}`;
    if (chosenOp === '/' && rem !== 0n) {
      deriv += ` with remainder ${formatBigIntRadix(rem, arithBase)} (${rem.toString(10)} dec)`;
    }

    const sec: Array<{ label: string; value: string }> = [
      { label: `Base ${arithBase} Result`, value: outFormatted },
      { label: 'Decimal Equivalent', value: res.toString(10) }
    ];
    if (chosenOp === '/' && rem !== 0n) {
      sec.push({ label: 'Remainder', value: formatBigIntRadix(rem, arithBase) });
    }

    return {
      primaryOutput: outFormatted,
      secondaryOutputs: sec,
      derivation: deriv
    };
  }

  // 3. COMPLEMENTS
  if (
    engineType === 'complement' ||
    slug.includes('complement') ||
    slug.includes('sign-magnitude') ||
    slug.includes('signed-binary')
  ) {
    const w = BigInt(bitWidth);
    const maxSigned = (1n << (w - 1n)) - 1n;
    const minSigned = -(1n << (w - 1n));
    const mask = (1n << w) - 1n;

    // Handle 9's and 10's complement
    if (slug === '9s-complement-calculator') {
      const decClean = val1.trim().replace(/^[-+]/, '');
      const nines = decClean.split('').map(d => (9 - Number(d)).toString()).join('');
      return {
        primaryOutput: nines,
        secondaryOutputs: [{ label: "10's Complement", value: (Number(nines) + 1).toString() }],
        derivation: `9's Complement of ${decClean}:\nSubtract each digit from 9:\n${decClean.split('').map(d => `9 - ${d} = ${9 - Number(d)}`).join('\n')}\nResult: ${nines}.`
      };
    } else if (slug === '10s-complement-calculator') {
      const decClean = val1.trim().replace(/^[-+]/, '');
      const nines = decClean.split('').map(d => (9 - Number(d)).toString()).join('');
      const tens = (BigInt(nines) + 1n).toString();
      return {
        primaryOutput: tens,
        secondaryOutputs: [{ label: "9's Complement", value: nines }],
        derivation: `10's Complement of ${decClean}:\n1) 9's complement = ${nines}\n2) Add 1: ${nines} + 1 = ${tens}.`
      };
    }

    // Determine if input is a direct binary bit pattern or a signed/unsigned decimal integer
    const raw = val1.trim();
    const isDirectBinary = /^[01]+$/.test(raw) && (raw.startsWith('0b') || raw.length > 1 || slug.includes('1s-to-2s') || !raw.startsWith('-'));
    const isExplicitDecimal = raw.startsWith('-') || raw.startsWith('+') || /[2-9]/.test(raw);

    let bin1s: string;
    let bin2s: string;
    let labelVal = raw;

    if (!isExplicitDecimal && /^[01]+$/.test(raw)) {
      // Input is direct binary string
      const padded = raw.padStart(Number(w), '0').slice(-Number(w));
      bin1s = padded.split('').map(b => (b === '0' ? '1' : '0')).join('');
      const onesVal = BigInt('0b' + bin1s);
      bin2s = ((onesVal + 1n) & mask).toString(2).padStart(Number(w), '0');
    } else {
      // Input is decimal integer
      const numVal = BigInt(raw);
      labelVal = numVal.toString(10);
      let twosVal: bigint;
      let onesVal: bigint;
      if (numVal < 0n) {
        twosVal = (mask + 1n + numVal) & mask;
        onesVal = (mask + numVal) & mask;
      } else {
        twosVal = numVal & mask;
        onesVal = (mask ^ numVal) & mask;
      }
      bin2s = twosVal.toString(2).padStart(Number(w), '0');
      bin1s = onesVal.toString(2).padStart(Number(w), '0');
    }

    let pOut = bin2s;
    if (slug.includes('1s-complement')) {
      pOut = bin1s;
    } else if (slug.includes('1s-to-2s')) {
      // 1's complement -> 2's complement (add 1)
      pOut = bin2s;
    } else if (slug === 'sign-magnitude-converter') {
      const mag = BigInt('0b' + bin2s.slice(1));
      pOut = bin2s;
    }

    return {
      primaryOutput: pOut,
      secondaryOutputs: [
        { label: "Two's Complement (Binary)", value: bin2s },
        { label: "One's Complement (Binary)", value: bin1s },
        { label: 'Hex Representation', value: '0x' + BigInt('0b' + bin2s).toString(16).toUpperCase() },
        { label: `${bitWidth}-Bit Signed Range`, value: `${minSigned.toString()} to +${maxSigned.toString()}` }
      ],
      derivation: `Complement Analysis for ${labelVal} (${bitWidth}-bit register):\n` +
        `1. Register Width: ${bitWidth} bits (Mask: 0x${mask.toString(16).toUpperCase()})\n` +
        `2. One's Complement (Bit Inversion): ${bin1s}\n` +
        `3. Two's Complement (One's Complement + 1): ${bin2s}\n` +
        `4. Sign Bit (MSB): ${bin2s[0]} (${bin2s[0] === '1' ? 'Negative' : 'Positive / Zero'})\n` +
        `5. Permissible Signed Range: [${minSigned}, ${maxSigned}]`
    };
  }

  // 4. BITWISE & SHIFTS
  if (
    slug.includes('bitwise') ||
    slug.includes('shift') ||
    slug.includes('rotate') ||
    slug === 'nand-calculator' ||
    slug === 'nor-calculator' ||
    slug === 'xnor-calculator'
  ) {
    const w = BigInt(bitWidth);
    const mask = (1n << w) - 1n;
    const a = (parseBigIntRadix(val1, val1.includes('0b') || /^[01]+$/.test(val1) ? 2 : 10)) & mask;
    const b = val2 ? (parseBigIntRadix(val2, val2.includes('0b') || /^[01]+$/.test(val2) ? 2 : 10)) & mask : 0n;
    let res = 0n;

    if (slug.includes('and') && !slug.includes('nand')) res = a & b;
    else if (slug.includes('nand')) res = mask ^ (a & b);
    else if (slug.includes('nor')) res = mask ^ (a | b);
    else if (slug.includes('xnor')) res = mask ^ (a ^ b);
    else if (slug.includes('or')) res = a | b;
    else if (slug.includes('xor')) res = a ^ b;
    else if (slug.includes('not')) res = mask ^ a;
    else if (slug.includes('left-shift') || op === '<<') res = (a << BigInt(val2 || '1')) & mask;
    else if (slug.includes('right-shift') || op === '>>') res = (a >> BigInt(val2 || '1')) & mask;
    else if (slug.includes('rotate-left')) {
      const k = BigInt(val2 || '1') % w;
      res = ((a << k) | (a >> (w - k))) & mask;
    } else if (slug.includes('rotate-right')) {
      const k = BigInt(val2 || '1') % w;
      res = ((a >> k) | (a << (w - k))) & mask;
    }

    const binRes = res.toString(2).padStart(Number(w), '0');

    return {
      primaryOutput: binRes,
      secondaryOutputs: [
        { label: 'Decimal', value: res.toString(10) },
        { label: 'Hexadecimal', value: '0x' + res.toString(16).toUpperCase() }
      ],
      derivation: `Bitwise Evaluation (${bitWidth}-bit):\n` +
        `Operand A: ${a.toString(2).padStart(Number(w), '0')}\n` +
        (val2 ? `Operand B: ${b.toString(2).padStart(Number(w), '0')}\n` : '') +
        `Result:    ${binRes} (${res.toString(10)} dec)`
    };
  }

  // 5. ENCODINGS (ASCII, Unicode, Gray, BCD, Excess-3, IP, MAC, RGB)
  if (
    slug.includes('ascii') ||
    slug.includes('unicode') ||
    slug.includes('gray-code') ||
    slug.includes('bcd') ||
    slug.includes('excess-3') ||
    slug.includes('rgb') ||
    slug.includes('ipv4') ||
    slug.includes('mac-address') ||
    slug.includes('hex-color') ||
    slug.includes('timestamp')
  ) {
    if (slug === 'ascii-to-binary-converter') {
      const bytes = Array.from(val1).map(c => c.charCodeAt(0).toString(2).padStart(8, '0'));
      return {
        primaryOutput: bytes.join(' '),
        secondaryOutputs: [{ label: 'Total Bytes', value: bytes.length.toString() }],
        derivation: Array.from(val1).map(c => `'${c}' -> ASCII ${c.charCodeAt(0)} -> ${c.charCodeAt(0).toString(2).padStart(8, '0')}`).join('\n')
      };
    } else if (slug === 'binary-to-ascii-converter') {
      const groups = val1.trim().replace(/\s+/g, ' ').split(' ');
      const text = groups.map(g => String.fromCharCode(parseInt(g, 2))).join('');
      return {
        primaryOutput: text,
        derivation: groups.map(g => `${g} -> ${parseInt(g, 2)} -> '${String.fromCharCode(parseInt(g, 2))}'`).join('\n')
      };
    } else if (slug === 'ascii-to-hex-converter') {
      const hex = Array.from(val1).map(c => c.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0'));
      return {
        primaryOutput: hex.join(' '),
        derivation: Array.from(val1).map(c => `'${c}' -> ${c.charCodeAt(0)} -> 0x${c.charCodeAt(0).toString(16).toUpperCase()}`).join('\n')
      };
    } else if (slug === 'hex-to-ascii-converter') {
      const cleanHex = val1.replace(/[^0-9a-fA-F]/g, '');
      let txt = '';
      for (let i = 0; i < cleanHex.length; i += 2) {
        txt += String.fromCharCode(parseInt(cleanHex.substr(i, 2), 16));
      }
      return { primaryOutput: txt, derivation: `Decoded ${cleanHex.length / 2} hex bytes to ASCII.` };
    } else if (slug.includes('gray-code')) {
      const num = parseBigIntRadix(val1, 2);
      if (slug.includes('binary-to-gray')) {
        const gray = num ^ (num >> 1n);
        return {
          primaryOutput: gray.toString(2),
          derivation: `Gray Code Formula: G = B ^ (B >> 1)\nBinary: ${num.toString(2)}\nGray:   ${gray.toString(2)}`
        };
      } else {
        // Gray to Binary
        let mask = num;
        let b = 0n;
        while (mask > 0n) {
          b ^= mask;
          mask >>= 1n;
        }
        return {
          primaryOutput: b.toString(2),
          derivation: `Gray to Binary cascade: ${val1} -> ${b.toString(2)} (${b.toString(10)} decimal)`
        };
      }
    } else if (slug.includes('bcd')) {
      if (slug === 'decimal-to-bcd-converter') {
        const clean = val1.trim().replace(/[^0-9]/g, '');
        if (!clean) throw new Error('Please enter decimal digits.');
        const bcd = clean.split('').map(d => parseInt(d).toString(2).padStart(4, '0')).join(' ');
        return {
          primaryOutput: bcd,
          secondaryOutputs: [{ label: 'Decimal Input', value: clean }],
          derivation: clean.split('').map(d => `Decimal digit ${d} -> 8421 BCD nibble: ${parseInt(d).toString(2).padStart(4, '0')}`).join('\n')
        };
      } else if (slug === 'binary-to-bcd-converter') {
        const dec = parseBigIntRadix(val1, 2).toString(10);
        const bcd = dec.split('').map(d => parseInt(d).toString(2).padStart(4, '0')).join(' ');
        return {
          primaryOutput: bcd,
          secondaryOutputs: [{ label: 'Decimal Equivalent', value: dec }],
          derivation: `1. Convert Binary ${val1} to Decimal: ${dec}\n2. Convert each decimal digit to 4-bit 8421 BCD:\n` +
            dec.split('').map(d => `   Digit ${d} -> ${parseInt(d).toString(2).padStart(4, '0')}`).join('\n') +
            `\n3. Final BCD: ${bcd}`
        };
      } else if (slug === 'bcd-to-binary-converter') {
        const nibbles = val1.trim().replace(/\s+/g, ' ').split(' ');
        const decStr = nibbles.map(n => {
          const v = parseInt(n, 2);
          if (v > 9) throw new Error(`Invalid BCD nibble '${n}' (${v} > 9). BCD digits must be 0-9.`);
          return v.toString();
        }).join('');
        const bin = BigInt(decStr).toString(2);
        return {
          primaryOutput: bin,
          secondaryOutputs: [{ label: 'Decimal Equivalent', value: decStr }],
          derivation: `1. Decode each 4-bit nibble to decimal digit:\n` +
            nibbles.map(n => `   ${n} -> ${parseInt(n, 2)}`).join('\n') +
            `\n2. Decimal result: ${decStr}\n3. Convert decimal ${decStr} to Binary: ${bin}`
        };
      }
    } else if (slug.includes('excess-3')) {
      if (slug === 'binary-to-excess-3-converter') {
        const dec = parseBigIntRadix(val1, 2).toString(10);
        const xs3 = dec.split('').map(d => (parseInt(d) + 3).toString(2).padStart(4, '0')).join(' ');
        return {
          primaryOutput: xs3,
          secondaryOutputs: [{ label: 'Decimal Value', value: dec }],
          derivation: `1. Binary to Decimal: ${val1} = ${dec}\n2. Add 3 to each digit and convert to 4-bit binary:\n` +
            dec.split('').map(d => `   Digit ${d} + 3 = ${parseInt(d) + 3} -> ${(parseInt(d) + 3).toString(2).padStart(4, '0')}`).join('\n') +
            `\n3. Excess-3 Output: ${xs3}`
        };
      } else {
        // Excess-3 to Binary
        const nibbles = val1.trim().replace(/\s+/g, ' ').split(' ');
        const decStr = nibbles.map(n => {
          const v = parseInt(n, 2) - 3;
          if (v < 0 || v > 9) throw new Error(`Invalid Excess-3 nibble '${n}' (decoded digit ${v} is out of range 0-9).`);
          return v.toString();
        }).join('');
        const bin = BigInt(decStr).toString(2);
        return {
          primaryOutput: bin,
          secondaryOutputs: [{ label: 'Decimal Equivalent', value: decStr }],
          derivation: `1. Subtract 3 from each 4-bit nibble:\n` +
            nibbles.map(n => `   ${n} (${parseInt(n, 2)}) - 3 = ${parseInt(n, 2) - 3}`).join('\n') +
            `\n2. Decimal: ${decStr}\n3. Convert ${decStr} to Binary: ${bin}`
        };
      }
    } else if (slug.includes('ipv4')) {
      if (slug.includes('ipv4-to-binary')) {
        const octets = val1.trim().split('.');
        if (octets.length !== 4) throw new Error('IPv4 requires exactly 4 octets (e.g. 192.168.1.1).');
        const bin = octets.map(o => parseInt(o, 10).toString(2).padStart(8, '0')).join('.');
        return {
          primaryOutput: bin,
          derivation: octets.map(o => `Octet ${o} -> ${parseInt(o, 10).toString(2).padStart(8, '0')}`).join('\n')
        };
      } else {
        const clean = val1.replace(/[^01]/g, '');
        if (clean.length !== 32) throw new Error('Binary IPv4 requires 32 bits.');
        const octets = [
          parseInt(clean.substr(0, 8), 2),
          parseInt(clean.substr(8, 8), 2),
          parseInt(clean.substr(16, 8), 2),
          parseInt(clean.substr(24, 8), 2)
        ];
        return { primaryOutput: octets.join('.'), derivation: `Decoded 32-bit binary stream into 4 IPv4 octets.` };
      }
    } else if (slug.includes('rgb')) {
      if (slug.includes('rgb-to-hex')) {
        const parts = (val1 + ',' + (val2 || '')).split(',').map(p => parseInt(p.trim(), 10));
        const hex = '#' + parts.slice(0, 3).map(p => p.toString(16).padStart(2, '0').toUpperCase()).join('');
        return { primaryOutput: hex, derivation: `RGB (${parts[0]}, ${parts[1]}, ${parts[2]}) -> ${hex}` };
      } else {
        const clean = val1.replace('#', '');
        const r = parseInt(clean.substr(0, 2), 16);
        const g = parseInt(clean.substr(2, 2), 16);
        const b = parseInt(clean.substr(4, 2), 16);
        return { primaryOutput: `rgb(${r}, ${g}, ${b})`, derivation: `Hex #${clean} -> Red: ${r}, Green: ${g}, Blue: ${b}` };
      }
    } else if (slug.includes('timestamp')) {
      const ts = BigInt(val1.trim());
      const date = new Date(Number(ts) * 1000).toUTCString();
      return {
        primaryOutput: '0x' + ts.toString(16).toUpperCase(),
        secondaryOutputs: [
          { label: '32-Bit Binary', value: (ts & 0xFFFFFFFFn).toString(2).padStart(32, '0') },
          { label: 'UTC Date', value: date }
        ],
        derivation: `Unix Epoch Timestamp ${ts} -> ${date}`
      };
    }
  }

  // 6. FRACTIONS CONVERTERS
  if (slug.includes('fraction')) {
    const raw = val1.trim();
    if (!raw.includes('.')) {
      throw new Error('Please enter a number with a fractional dot (e.g. 0.625 or 10.101).');
    }

    if (slug === 'convert-decimal-fraction-to-binary' || (!/^[01.]+$/.test(raw) && /^\d+\.\d+$/.test(raw))) {
      // Decimal fraction to binary
      const [intPart, fracPart] = raw.split('.');
      const intNum = BigInt(intPart || '0');
      let intBin = intNum.toString(2);

      let fracVal = parseFloat('0.' + fracPart);
      let fracBin = '';
      let steps = `Converting Decimal Fraction ${raw} to Binary:\n\n`;
      steps += `1. Integer part: ${intPart} = ${intBin}_2\n\n2. Fractional part: 0.${fracPart} (Repeated multiplication by 2):\n`;

      let count = 0;
      while (fracVal > 0 && count < 16) {
        fracVal *= 2;
        const bit = Math.floor(fracVal);
        fracBin += bit;
        steps += `   Step ${count + 1}: ${(fracVal / 2).toFixed(4)} × 2 = ${fracVal.toFixed(4)} -> Bit ${bit}\n`;
        fracVal -= bit;
        count++;
      }
      const finalBin = `${intBin}.${fracBin || '0'}`;
      steps += `\n3. Assembled binary fraction: ${finalBin}_2`;

      return {
        primaryOutput: finalBin,
        secondaryOutputs: [
          { label: 'Binary Fraction', value: finalBin },
          { label: 'Decimal Input', value: raw }
        ],
        derivation: steps
      };
    } else {
      // Binary fraction to decimal
      const [intPart, fracPart] = raw.split('.');
      const intDec = parseInt(intPart || '0', 2);
      let fracDec = 0;
      let steps = `Converting Binary Fraction ${raw} to Decimal:\n\n`;
      steps += `1. Integer part: ${intPart}_2 = ${intDec}_10\n\n2. Fractional part .${fracPart}:\n`;

      for (let i = 0; i < (fracPart || '').length; i++) {
        const bit = parseInt(fracPart[i], 10);
        const weight = Math.pow(2, -(i + 1));
        fracDec += bit * weight;
        steps += `   Bit ${bit} × 2^(${-(i + 1)}) = ${bit * weight}\n`;
      }
      const totalDec = intDec + fracDec;
      steps += `\n3. Total Decimal value = ${totalDec}`;

      return {
        primaryOutput: totalDec.toString(),
        secondaryOutputs: [
          { label: 'Decimal Equivalent', value: totalDec.toString() },
          { label: 'Binary Input', value: raw }
        ],
        derivation: steps
      };
    }
  }

  // 7. FLOATING POINT & IEEE-754
  if (
    slug.includes('float') ||
    slug.includes('ieee-754')
  ) {
    if (slug === 'ieee-754-to-decimal') {
      const clean = val1.trim().replace(/^0x/i, '');
      const intVal = parseInt(clean, 16);
      const buf = new ArrayBuffer(4);
      const view = new DataView(buf);
      view.setUint32(0, intVal);
      const decFloat = view.getFloat32(0);
      return {
        primaryOutput: decFloat.toString(),
        secondaryOutputs: [
          { label: 'Decimal Float', value: decFloat.toString() },
          { label: '32-Bit Binary', value: intVal.toString(2).padStart(32, '0') }
        ],
        derivation: `Decoded IEEE-754 Hex 0x${clean.toUpperCase()} to Decimal: ${decFloat}`
      };
    }

    const num = parseFloat(val1);
    if (isNaN(num)) throw new Error('Invalid floating-point decimal number.');

    if (slug === 'float64-converter') {
      const buf = new ArrayBuffer(8);
      const view = new DataView(buf);
      view.setFloat64(0, num);
      const hi = view.getUint32(0);
      const lo = view.getUint32(4);
      const bin64 = hi.toString(2).padStart(32, '0') + lo.toString(2).padStart(32, '0');
      const hex64 = '0x' + hi.toString(16).padStart(8, '0').toUpperCase() + lo.toString(16).padStart(8, '0').toUpperCase();
      const sign = bin64[0];
      const exp = bin64.substr(1, 11);
      const mant = bin64.substr(12, 52);
      const unbiasedExp = parseInt(exp, 2) - 1023;

      return {
        primaryOutput: hex64,
        secondaryOutputs: [
          { label: 'Sign Bit (1 bit)', value: sign + (sign === '0' ? ' (Positive)' : ' (Negative)') },
          { label: 'Biased Exponent (11 bits)', value: `${exp} (${parseInt(exp, 2)} - 1023 = ${unbiasedExp})` },
          { label: 'Normalized Mantissa (52 bits)', value: mant.slice(0, 24) + '...' },
          { label: 'Full 64-Bit Binary', value: bin64 }
        ],
        derivation: `IEEE-754 Double Precision (Float64) for ${num}:\n` +
          `1. Sign bit S = ${sign}\n` +
          `2. Exponent E = ${exp} (Unbiased = ${unbiasedExp})\n` +
          `3. Significand M = 1.${mant}\n` +
          `4. Memory Hex: ${hex64}`
      };
    }

    // Default Float32 / Single Precision
    const buf = new ArrayBuffer(4);
    const view = new DataView(buf);
    view.setFloat32(0, num);
    const int32 = view.getUint32(0);
    const bin32 = int32.toString(2).padStart(32, '0');
    const hex32 = '0x' + int32.toString(16).toUpperCase().padStart(8, '0');

    const sign = bin32[0];
    const exp = bin32.substr(1, 8);
    const mant = bin32.substr(9, 23);
    const unbiasedExp = parseInt(exp, 2) - 127;

    return {
      primaryOutput: hex32,
      secondaryOutputs: [
        { label: 'Sign Bit (1 bit)', value: sign + (sign === '0' ? ' (Positive)' : ' (Negative)') },
        { label: 'Biased Exponent (8 bits)', value: `${exp} (${parseInt(exp, 2)} - 127 = ${unbiasedExp})` },
        { label: 'Normalized Mantissa (23 bits)', value: mant },
        { label: 'Full 32-Bit Binary', value: bin32 }
      ],
      derivation: `IEEE-754 Single Precision (Float32) for ${num}:\n` +
        `1. Sign bit S = ${sign}\n` +
        `2. Exponent E = ${exp} (Unbiased = ${unbiasedExp})\n` +
        `3. Significand M = 1.${mant}\n` +
        `4. Hex in memory: ${hex32}`
    };
  }

  // 7. RANGE CALCULATORS
  if (slug.includes('range')) {
    let w = BigInt(bitWidth);
    if (slug.includes('4-bit')) w = 4n;
    else if (slug.includes('8-bit')) w = 8n;
    else if (slug.includes('16-bit')) w = 16n;
    else if (slug.includes('32-bit')) w = 32n;
    else if (slug.includes('64-bit')) w = 64n;

    const minSigned = -(1n << (w - 1n));
    const maxSigned = (1n << (w - 1n)) - 1n;
    const maxUnsigned = (1n << w) - 1n;
    const totalStates = 1n << w;

    return {
      primaryOutput: `${minSigned} to +${maxSigned}`,
      secondaryOutputs: [
        { label: 'Signed Two’s Complement Range', value: `${minSigned.toLocaleString()} to +${maxSigned.toLocaleString()}` },
        { label: 'Unsigned Range', value: `0 to ${maxUnsigned.toLocaleString()}` },
        { label: 'Total Discrete States', value: totalStates.toLocaleString() },
        { label: 'Hex Max (Unsigned)', value: '0x' + maxUnsigned.toString(16).toUpperCase() }
      ],
      derivation: `Register Analysis for ${w} bits:\n` +
        `• Min Signed: -2^(${w}-1) = ${minSigned}\n` +
        `• Max Signed: +2^(${w}-1) - 1 = +${maxSigned}\n` +
        `• Max Unsigned: 2^${w} - 1 = ${maxUnsigned}\n` +
        `• Total Combinations: 2^${w} = ${totalStates}`
    };
  }

  // 8. VALIDATORS
  if (slug.includes('validator')) {
    let vBase = 10;
    if (slug.includes('binary')) vBase = 2;
    else if (slug.includes('octal')) vBase = 8;
    else if (slug.includes('hexadecimal')) vBase = 16;
    else if (slug.includes('base-n')) vBase = base;

    try {
      parseBigIntRadix(val1, vBase);
      return {
        primaryOutput: `VALID (Base ${vBase})`,
        derivation: `All characters in "${val1}" are strictly legal digits in base ${vBase}.`
      };
    } catch (e: any) {
      return {
        primaryOutput: `INVALID (Base ${vBase})`,
        derivation: e.message
      };
    }
  }

  // Default fallback
  const dNum = parseBigIntRadix(val1, 10);
  return {
    primaryOutput: dNum.toString(10),
    derivation: `Calculated value: ${dNum}`
  };
}

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export const addDigit = (num: string, digit: Digit): string => {
  return num.length === 0 ? String(digit) : num === '0' ? String(digit) : num + digit;
};

export const addPeriod = (num: string): string => {
  return num.length === 0 ? '0.' : num.includes('.') ? num : num + '.';
};

export const removeTail = (num: string): string => {
  return num.length === 0 ? '' : /^-\d$/.test(num) ? '0' : num.slice(0, -1) || '0';
};

export const negate = (num: string): string => {
  return num.length === 0 ? '' : num === '0' ? '0' : num.charAt(0) === '-' ? num.slice(1) : '-' + num;
};

import { Language } from '../types';

/**
 * Generates dynamic season year ranges (e.g. "2026–2027" or "২০২৬–২০২৭")
 * Automatically increments with current year without future manual code edits.
 */
export const getDynamicSeasonRange = (
  isBanglaOrLang: boolean | Language = false,
  delimiter: string = '–'
): string => {
  const isBangla = typeof isBanglaOrLang === 'string' ? isBanglaOrLang === 'bn' : isBanglaOrLang;
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const rangeEn = `${currentYear}${delimiter}${nextYear}`;

  if (!isBangla) return rangeEn;

  const banglaDigits: Record<string, string> = {
    '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
    '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯',
    '-': '-', '–': '–'
  };
  return rangeEn.split('').map((char) => banglaDigits[char] || char).join('');
};

/**
 * Generates dynamic single season year (e.g. "2026" or "২০২৬", or with offset e.g. offset=1 -> "2027" / "২০২৭")
 */
export const getDynamicSeasonYear = (
  offset: number = 0,
  isBanglaOrLang: boolean | Language = false
): string => {
  const isBangla = typeof isBanglaOrLang === 'string' ? isBanglaOrLang === 'bn' : isBanglaOrLang;
  const year = new Date().getFullYear() + offset;
  const yearStr = String(year);

  if (!isBangla) return yearStr;

  const banglaDigits: Record<string, string> = {
    '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
    '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
  };
  return yearStr.split('').map((char) => banglaDigits[char] || char).join('');
};

/**
 * Generates dynamic short seasonal range (e.g. "2026–27" or "২০২৬–২৭")
 */
export const getDynamicShortSeasonRange = (
  isBanglaOrLang: boolean | Language = false,
  delimiter: string = '–'
): string => {
  const isBangla = typeof isBanglaOrLang === 'string' ? isBanglaOrLang === 'bn' : isBanglaOrLang;
  const currentYear = new Date().getFullYear();
  const nextYearShort = String(currentYear + 1).slice(-2);
  const rangeEn = `${currentYear}${delimiter}${nextYearShort}`;

  if (!isBangla) return rangeEn;

  const banglaDigits: Record<string, string> = {
    '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
    '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯',
    '-': '-', '–': '–'
  };
  return rangeEn.split('').map((char) => banglaDigits[char] || char).join('');
};

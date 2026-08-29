import { Language } from '../types';
import { toBengaliNumber } from './dateFormatter';

export type Currency = 'BDT' | 'USD' | 'SAR';

export interface ExchangeRateConfig {
  bdtPerUsd: number; // 1 USD = 121.50 BDT
  bdtPerSar: number; // 1 SAR = 32.50 BDT
}

// Realistic current mock exchange rates
export const MOCK_EXCHANGE_RATES: ExchangeRateConfig = {
  bdtPerUsd: 121.5,
  bdtPerSar: 32.5,
};

/**
 * Extracts raw numeric price from package string or number
 */
export function extractNumericPrice(price: string | number | undefined): number {
  if (typeof price === 'number') return price;
  if (!price) return 0;
  const digitsOnly = price.replace(/[^\d]/g, '');
  const val = parseInt(digitsOnly, 10);
  return isNaN(val) ? 0 : val;
}

/**
 * Converts a BDT amount to the target currency
 */
export function convertFromBDT(
  amountInBdt: number,
  target: Currency,
  rates: ExchangeRateConfig = MOCK_EXCHANGE_RATES
): number {
  if (!amountInBdt || isNaN(amountInBdt)) return 0;
  if (target === 'BDT') return Math.round(amountInBdt);
  if (target === 'USD') return Math.round(amountInBdt / rates.bdtPerUsd);
  if (target === 'SAR') return Math.round(amountInBdt / rates.bdtPerSar);
  return Math.round(amountInBdt);
}

/**
 * Formats a BDT price converted to the target currency with localized numerals
 */
export function formatCurrencyPrice(
  amountInBdt: number,
  target: Currency,
  lang: Language,
  rates: ExchangeRateConfig = MOCK_EXCHANGE_RATES
): string {
  const converted = convertFromBDT(amountInBdt, target, rates);

  if (target === 'BDT') {
    const formatted = converted.toLocaleString('en-IN');
    return lang === 'bn' ? `৳ ${toBengaliNumber(formatted)}` : `৳ ${formatted}`;
  }

  if (target === 'USD') {
    const formatted = converted.toLocaleString('en-US');
    return lang === 'bn' ? `$ ${toBengaliNumber(formatted)}` : `$ ${formatted}`;
  }

  if (target === 'SAR') {
    const formatted = converted.toLocaleString('en-US');
    return lang === 'bn' ? `SAR ${toBengaliNumber(formatted)} (ر.س)` : `SAR ${formatted} (ر.س)`;
  }

  return `${converted}`;
}

/**
 * Returns metadata and labels for currency switcher options
 */
export function getCurrencyConfig(currency: Currency, lang: Language) {
  switch (currency) {
    case 'BDT':
      return {
        code: 'BDT' as Currency,
        symbol: '৳',
        name: lang === 'en' ? 'BDT (৳)' : 'টাকা (৳)',
        fullName: lang === 'en' ? 'Bangladeshi Taka' : 'বাংলাদেশি টাকা',
        rateSummary:
          lang === 'en'
            ? `1 USD ≈ ${MOCK_EXCHANGE_RATES.bdtPerUsd} BDT • 1 SAR ≈ ${MOCK_EXCHANGE_RATES.bdtPerSar} BDT`
            : `১ USD ≈ ${toBengaliNumber(MOCK_EXCHANGE_RATES.bdtPerUsd)} টাকা • ১ SAR ≈ ${toBengaliNumber(MOCK_EXCHANGE_RATES.bdtPerSar)} টাকা`,
      };
    case 'USD':
      return {
        code: 'USD' as Currency,
        symbol: '$',
        name: lang === 'en' ? 'USD ($)' : 'ডলার ($)',
        fullName: lang === 'en' ? 'US Dollar' : 'ইউএস ডলার',
        rateSummary:
          lang === 'en'
            ? `1 USD ≈ ${MOCK_EXCHANGE_RATES.bdtPerUsd} BDT (≈ ${(MOCK_EXCHANGE_RATES.bdtPerUsd / MOCK_EXCHANGE_RATES.bdtPerSar).toFixed(2)} SAR)`
            : `১ USD ≈ ${toBengaliNumber(MOCK_EXCHANGE_RATES.bdtPerUsd)} টাকা (≈ ${toBengaliNumber((MOCK_EXCHANGE_RATES.bdtPerUsd / MOCK_EXCHANGE_RATES.bdtPerSar).toFixed(2))} SAR)`,
      };
    case 'SAR':
      return {
        code: 'SAR' as Currency,
        symbol: 'ر.س',
        name: lang === 'en' ? 'SAR (ر.س)' : 'রিয়াল (ر.স)',
        fullName: lang === 'en' ? 'Saudi Riyal' : 'সৌদি রিয়াল',
        rateSummary:
          lang === 'en'
            ? `1 SAR ≈ ${MOCK_EXCHANGE_RATES.bdtPerSar} BDT (≈ ${(MOCK_EXCHANGE_RATES.bdtPerSar / MOCK_EXCHANGE_RATES.bdtPerUsd).toFixed(2)} USD)`
            : `১ SAR ≈ ${toBengaliNumber(MOCK_EXCHANGE_RATES.bdtPerSar)} টাকা (≈ ${toBengaliNumber((MOCK_EXCHANGE_RATES.bdtPerSar / MOCK_EXCHANGE_RATES.bdtPerUsd).toFixed(2))} USD)`,
      };
  }
}

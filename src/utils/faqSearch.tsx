import React from 'react';
import { FAQItem } from '../types';

/**
 * Multilingual Synonym & Dictionary Map for Smart Search (English <-> Bengali)
 */
const BILINGUAL_SYNONYM_DICTIONARY: Record<string, string[]> = {
  // Booking & Pre-registration
  preregistration: ['pre-registration', 'preregistration', 'প্রাক-নিবন্ধন', 'প্রাক নিবন্ধন', 'নিবন্ধন', 'সিরিয়াল', 'serial', 'ট্র্যাকিং', 'tracking', 'nid', 'জাতীয় পরিচয়পত্র', 'এনআইডি', 'রেজিস্ট্রেশন'],
  'pre-registration': ['pre-registration', 'preregistration', 'প্রাক-নিবন্ধন', 'প্রাক নিবন্ধন', 'নিবন্ধন', 'সিরিয়াল', 'serial', 'ট্র্যাকিং', 'tracking', 'nid', 'জাতীয় পরিচয়পত্র', 'এনআইডি'],
  'প্রাক-নিবন্ধন': ['pre-registration', 'preregistration', 'প্রাক-নিবন্ধন', 'প্রাক নিবন্ধন', 'নিবন্ধন', 'সিরিয়াল', 'serial', 'ট্র্যাকিং', 'tracking', 'nid'],
  'নিবন্ধন': ['registration', 'pre-registration', 'প্রাক-নিবন্ধন', 'নিবন্ধন', 'বুকিং', 'booking'],
  booking: ['booking', 'বুকিং', 'নিবন্ধন', 'আবেদন', 'apply', 'confirmation', 'নিশ্চিত'],
  'বুকিং': ['booking', 'বুকিং', 'নিবন্ধন', 'আবেদন', 'apply', 'confirmation'],

  // Visa & Passports & Nusuk
  visa: ['visa', 'ভিসা', 'নুসুক', 'nusuk', 'ই-ভিসা', 'evisa', 'বায়োমেট্রিক', 'biometrics', 'biometric', 'পাসপোর্ট', 'passport'],
  'ভিসা': ['visa', 'ভিসা', 'নুসুক', 'nusuk', 'ই-ভিসা', 'evisa', 'বায়োমেট্রিক', 'biometrics', 'পাসপোর্ট', 'passport'],
  passport: ['passport', 'পাসপোর্ট', 'মেয়াদ', 'validity', '৬ মাস', '6 months', 'nid', 'জাতীয় পরিচয়পত্র'],
  'পাসপোর্ট': ['passport', 'পাসপোর্ট', 'মেয়াদ', 'validity', '৬ মাস', '6 months', 'nid'],
  nusuk: ['nusuk', 'নুসুক', 'অ্যাপ', 'app', 'পারমিট', 'permit', 'রওজা', 'rawdah', 'ভিসা', 'visa'],
  'নুসুক': ['nusuk', 'নুসুক', 'অ্যাপ', 'app', 'পারমিট', 'permit', 'রওজা', 'rawdah', 'ভিসা', 'visa'],
  biometric: ['biometric', 'biometrics', 'বায়োমেট্রিক', 'বায়োমেট্রিক্স', 'ভিসা', 'visa'],
  'বায়োমেট্রিক': ['biometric', 'biometrics', 'বায়োমেট্রিক', 'বায়োমেট্রিক্স', 'ভিসা', 'visa'],

  // Cost, Installments, Refund
  cost: ['cost', 'price', 'fee', 'খরচ', 'টাকা', 'মূল্য', 'ফি', 'budget', 'বাজেট', 'কিস্তি', 'installment', 'payment'],
  'খরচ': ['cost', 'price', 'fee', 'খরচ', 'টাকা', 'মূল্য', 'ফি', 'budget', 'বাজেট', 'কিস্তি', 'installment', 'payment'],
  'টাকা': ['cost', 'price', 'money', 'টাকা', 'খরচ', 'মূল্য', 'কিস্তি', 'installment', 'পরিশোধ'],
  installment: ['installment', 'installments', 'কিস্তি', 'সহজ কিস্তি', 'পরিশোধ', 'পেমেন্ট', 'payment', 'bank draft', 'ব্যাংক ড্রাফট'],
  'কিস্তি': ['installment', 'installments', 'কিস্তি', 'সহজ কিস্তি', 'পরিশোধ', 'পেমেন্ট', 'payment', 'bank draft', 'ব্যাংক ড্রাফট'],
  refund: ['refund', 'রিফান্ড', 'ফেরত', 'cancel', 'cancellation', 'বাতিল', 'স্থগিত', 'হস্তান্তর', 'transfer'],
  'রিফান্ড': ['refund', 'রিফান্ড', 'ফেরত', 'cancel', 'cancellation', 'বাতিল', 'স্থগিত', 'হস্তান্তর', 'transfer'],
  cancel: ['cancel', 'cancellation', 'বাতিল', 'স্থগিত', 'রিফান্ড', 'refund', 'ফেরত'],
  'বাতিল': ['cancel', 'cancellation', 'বাতিল', 'স্থগিত', 'রিফান্ড', 'refund', 'ফেরত'],

  // Meals & Qurbani
  food: ['food', 'meal', 'meals', 'খাবার', 'খাদ্য', 'বুফে', 'buffet', 'বাবুর্চি', 'chef', 'চা-কফি', 'beverage', 'ডিনার', 'লাঞ্চ'],
  meal: ['food', 'meal', 'meals', 'খাবার', 'খাদ্য', 'বুফে', 'buffet', 'বাবুর্চি', 'chef', 'চা-কফি'],
  'খাবার': ['food', 'meal', 'meals', 'খাবার', 'খাদ্য', 'বুফে', 'buffet', 'বাবুর্চি', 'chef', 'চা-কফি', 'দেশীয়'],
  qurbani: ['qurbani', 'কুরবানী', 'কোরবানি', 'হাদি', 'hady', 'idb bank', 'দম', 'dam', 'কাফফারা', 'পশু'],
  'কুরবানী': ['qurbani', 'কুরবানী', 'কোরবানি', 'হাদি', 'hady', 'idb bank', 'দম', 'dam', 'কাফফারা'],
  'কোরবানি': ['qurbani', 'কুরবানী', 'কোরবানি', 'হাদি', 'hady', 'idb bank', 'দম', 'dam'],

  // Elderly, Women, Wheelchair Care
  wheelchair: ['wheelchair', 'হুইলচেয়ার', 'হুইল চেয়ার', 'সহকারী', 'assistant', 'প্রবীণ', 'elderly', 'senior', 'সাহায্য'],
  'হুইলচেয়ার': ['wheelchair', 'হুইলচেয়ার', 'হুইল চেয়ার', 'সহকারী', 'assistant', 'প্রবীণ', 'elderly', 'senior', 'সাহায্য'],
  elderly: ['elderly', 'senior', 'প্রবীণ', 'বয়স্ক', 'বৃদ্ধ', 'মহিলা', 'women', 'হুইলচেয়ার', 'wheelchair', 'যত্ন', 'care'],
  'প্রবীণ': ['elderly', 'senior', 'প্রবীণ', 'বয়স্ক', 'বৃদ্ধ', 'মহিলা', 'women', 'হুইলচেয়ার', 'wheelchair', 'যত্ন', 'care'],
  'বয়স্ক': ['elderly', 'senior', 'প্রবীণ', 'বয়স্ক', 'বৃদ্ধ', 'হুইলচেয়ার', 'wheelchair'],
  women: ['women', 'female', 'মহিলা', 'নারী', 'মহিলা হাজী', 'পর্দা', 'মাসআলা', 'মুফতী'],
  'মহিলা': ['women', 'female', 'মহিলা', 'নারী', 'মহিলা হাজী', 'পর্দা', 'মাসআলা', 'মুফতী'],

  // Tents & Locations: Mina, Arafat, Rawdah, Hotels
  tent: ['tent', 'tents', 'তাবু', 'তাঁবু', 'মিনা', 'mina', 'আরাফাত', 'arafat', 'ac', 'জোন ১', 'zone 1', 'সোফা বেড'],
  'তাবু': ['tent', 'tents', 'তাবু', 'তাঁবু', 'মিনা', 'mina', 'আরাফাত', 'arafat', 'ac', 'জোন ১', 'zone 1', 'সোফা বেড'],
  'তাঁবু': ['tent', 'tents', 'তাবু', 'তাঁবু', 'মিনা', 'mina', 'আরাফাত', 'arafat', 'ac'],
  mina: ['mina', 'মিনা', 'তাবু', 'tent', 'আরাফাত', 'arafat', 'মুজদালিফা', 'মুয়াইসিম', 'জামারাত', 'jamarat'],
  'মিনা': ['mina', 'মিনা', 'তাবু', 'tent', 'আরাফাত', 'arafat', 'মুজদালিফা', 'মুয়াইসিম', 'জামারাত', 'jamarat'],
  arafat: ['arafat', 'আরাফাত', 'ময়দান', 'খুতবা', 'তাবু', 'tent', 'মিনা', 'mina'],
  'আরাফাত': ['arafat', 'আরাফাত', 'ময়দান', 'খুতবা', 'তাবু', 'tent', 'মিনা', 'mina'],
  rawdah: ['rawdah', 'রওজা', 'রওজা শরীফ', 'জিয়ারত', 'ziyarah', 'মদিনা', 'madinah', 'পারমিট', 'permit', 'নুসুক', 'nusuk', 'সালাম'],
  'রওজা': ['rawdah', 'রওজা', 'রওজা শরীফ', 'জিয়ারত', 'ziyarah', 'মদিনা', 'madinah', 'পারমিট', 'permit', 'নুসুক', 'nusuk', 'সালাম'],
  hotel: ['hotel', 'হোটেল', 'থাকা', 'রুম', 'room', 'কাছে', 'হাটার দূরত্ব', 'walking distance', 'clock tower', 'মক্কা', 'মদিনা'],
  'হোটেল': ['hotel', 'হোটেল', 'থাকা', 'রুম', 'room', 'কাছে', 'হাটার দূরত্ব', 'walking distance', 'clock tower', 'মক্কা', 'মদিনা'],

  // Health, Vaccine
  vaccine: ['vaccine', 'vaccines', 'ভ্যাকসিন', 'টিকা', 'মেনিনজাইটিস', 'meningitis', 'ইনফ্লুয়েঞ্জা', 'influenza', 'স্বাস্থ্য', 'health', 'মেডিকেল', 'medical'],
  'ভ্যাকসিন': ['vaccine', 'vaccines', 'ভ্যাকসিন', 'টিকা', 'মেনিনজাইটিস', 'meningitis', 'ইনফ্লুয়েঞ্জা', 'influenza', 'স্বাস্থ্য', 'health', 'মেডিকেল', 'medical'],
  'টিকা': ['vaccine', 'vaccines', 'ভ্যাকসিন', 'টিকা', 'মেনিনজাইটিস', 'meningitis', 'ইনফ্লুয়েঞ্জা', 'স্বাস্থ্য', 'health'],
  health: ['health', 'medical', 'স্বাস্থ্য', 'ফিটনেস', 'fitness', 'টিকা', 'vaccine', 'হাসপাতাল'],
  'স্বাস্থ্য': ['health', 'medical', 'স্বাস্থ্য', 'ফিটনেস', 'fitness', 'টিকা', 'vaccine'],

  // Scholars & Shariah
  scholar: ['scholar', 'scholars', 'আলেম', 'মুফতী', 'মুফতি', 'আমানুল্লাহ', 'amanullah', 'শরিয়াহ', 'shariah', 'ফতোয়া', 'fatwa', 'মাসআলা', 'fiqh'],
  'আলেম': ['scholar', 'scholars', 'আলেম', 'মুফতী', 'মুফতি', 'আমানুল্লাহ', 'amanullah', 'শরিয়াহ', 'shariah', 'ফতোয়া', 'fatwa', 'মাসআলা'],
  'মুফতী': ['mufti', 'scholar', 'মুফতী', 'মুফতি', 'আমানুল্লাহ', 'amanullah', 'আলেম', 'ফতোয়া', 'মাসআলা'],
  'ফতোয়া': ['fatwa', 'fatawa', 'ফতোয়া', 'ফতোয়া', 'মাসআলা', 'বিধান', 'আলেম', 'scholar'],

  // Agency, License & Office in Khulna
  license: ['license', 'লাইসেন্স', 'মন্ত্রণালয়', 'ministry', 'অনুমোদিত', 'approved', 'haab', 'atab', 'হাব', 'আটাব', 'সরকারি'],
  'লাইসেন্স': ['license', 'লাইসেন্স', 'মন্ত্রণালয়', 'ministry', 'অনুমোদিত', 'approved', 'haab', 'atab', 'হাব', 'আটাব', 'সরকারি'],
  office: ['office', 'কার্যালয়', 'অফিস', 'ঠিকানা', 'address', 'খুলনা', 'khulna', 'পাওয়ার হাউজ', 'power house', 'মোবাইল', 'phone', 'হটলাইন', 'hotline'],
  'কার্যালয়': ['office', 'কার্যালয়', 'অফিস', 'ঠিকানা', 'address', 'খুলনা', 'khulna', 'পাওয়ার হাউজ', 'power house', 'মোবাইল', 'phone'],
  'অফিস': ['office', 'কার্যালয়', 'অফিস', 'ঠিকানা', 'address', 'খুলনা', 'khulna', 'পাওয়ার হাউজ', 'power house'],
  khulna: ['khulna', 'খুলনা', 'পাওয়ার হাউজ', 'power house', 'ঐক্য ভবন', 'oikko bhaban', 'কেসিসি', 'kcc market', 'অফিস', 'office'],
  'খুলনা': ['khulna', 'খুলনা', 'পাওয়ার হাউজ', 'power house', 'ঐক্য ভবন', 'oikko bhaban', 'কেসিসি', 'kcc market', 'অফিস', 'office'],

  // Custom Umrah & Transport
  custom: ['custom', 'customized', 'কাস্টম', 'পছন্দমতো', 'মেয়াদ', 'গাড়ি', 'transport', 'gmc', 'hiace', 'পরিবার', 'family'],
  'কাস্টম': ['custom', 'customized', 'কাস্টম', 'পছন্দমতো', 'মেয়াদ', 'গাড়ি', 'transport', 'gmc', 'hiace', 'পরিবার', 'family'],
  flight: ['flight', 'বিমান', 'টিকিট', 'ticket', 'এয়ারলাইন্স', 'airlines', 'জেদ্দা', 'মদিনা', 'ফ্লাইট'],
  'বিমান': ['flight', 'বিমান', 'টিকিট', 'ticket', 'এয়ারলাইন্স', 'airlines', 'জেদ্দা', 'মদিনা', 'ফ্লাইট'],
};

/**
 * Cleans and normalizes query strings for resilient fuzzy matching
 */
export function normalizeSearchString(str: string): string {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[।,\.!\?_=\+\-\/\\#\$%\^&\*\(\)\[\]\{\};:"'<>~`]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Remove Bengali grammatical suffixes to match word stems (e.g., ভিসার -> ভিসা, খরচের -> খরচ)
 */
export function stemBengaliWord(word: string): string {
  if (word.length <= 3) return word;
  const suffixes = [
    'গুলোতে', 'গুলো', 'দেরকে', 'দের', 'খানা', 'খানি', 
    'গুলোয়', 'সমূহ', 'টিতে', 'টির', 'টিকে', 'টি', 'টা',
    'য়ের', 'এর', 'কে', 'তে', 'য়ে', 'এ', 'র', 'ও'
  ];
  for (const suf of suffixes) {
    if (word.endsWith(suf) && word.length - suf.length >= 2) {
      return word.slice(0, word.length - suf.length);
    }
  }
  return word;
}

/**
 * Extracts and expands search tokens including bilingual equivalents
 */
export function getExpandedSearchTokens(rawQuery: string): string[] {
  const normalized = normalizeSearchString(rawQuery);
  if (!normalized) return [];

  const rawTokens = normalized.split(' ').filter((t) => t.length > 0);
  const tokenSet = new Set<string>();

  // Add the entire phrase
  tokenSet.add(normalized);

  rawTokens.forEach((tok) => {
    tokenSet.add(tok);

    // Try Bengali stem
    const stemmedBn = stemBengaliWord(tok);
    if (stemmedBn && stemmedBn !== tok) {
      tokenSet.add(stemmedBn);
    }

    // Lookup synonym dictionary (exact and stemmed)
    const directSyns = BILINGUAL_SYNONYM_DICTIONARY[tok] || [];
    directSyns.forEach((s) => tokenSet.add(s.toLowerCase()));

    if (stemmedBn && BILINGUAL_SYNONYM_DICTIONARY[stemmedBn]) {
      BILINGUAL_SYNONYM_DICTIONARY[stemmedBn].forEach((s) => tokenSet.add(s.toLowerCase()));
    }
  });

  return Array.from(tokenSet).filter((t) => t.length >= 2);
}

/**
 * Computes a smart bilingual relevance score for a given FAQ item
 */
export function calculateFaqRelevance(
  faq: FAQItem,
  rawQuery: string,
  expandedTokens: string[]
): { score: number; matchCount: number; matchedTokens: string[] } {
  if (!rawQuery.trim()) {
    return { score: 0, matchCount: 0, matchedTokens: [] };
  }

  const queryNorm = normalizeSearchString(rawQuery);
  const matchedTokensSet = new Set<string>();
  let score = 0;
  let matchCount = 0;

  const qEn = faq.questionEn.toLowerCase();
  const qBn = faq.questionBn.toLowerCase();
  const aEn = faq.answerEn.toLowerCase();
  const aBn = faq.answerBn.toLowerCase();
  const tagsStr = (faq.tags || []).join(' ').toLowerCase();
  const cat = faq.category.toLowerCase();
  const seg = (faq.segment || '').toLowerCase();

  // 1. Exact Full Phrase Match Bonus
  if (qEn.includes(queryNorm)) {
    score += 80;
    matchCount += 2;
    matchedTokensSet.add(rawQuery.trim());
  }
  if (qBn.includes(queryNorm)) {
    score += 80;
    matchCount += 2;
    matchedTokensSet.add(rawQuery.trim());
  }
  if (aEn.includes(queryNorm)) {
    score += 40;
    matchCount += 1;
    matchedTokensSet.add(rawQuery.trim());
  }
  if (aBn.includes(queryNorm)) {
    score += 40;
    matchCount += 1;
    matchedTokensSet.add(rawQuery.trim());
  }

  // 2. Token / Synonym Matches
  expandedTokens.forEach((token) => {
    const tLower = token.toLowerCase();
    let tokenHit = false;

    // Check Question En / Bn (Highest relevance)
    if (qEn.includes(tLower)) {
      score += 25;
      matchCount += 1;
      tokenHit = true;
    }
    if (qBn.includes(tLower)) {
      score += 25;
      matchCount += 1;
      tokenHit = true;
    }

    // Check Tags
    if (tagsStr.includes(tLower)) {
      score += 20;
      matchCount += 1;
      tokenHit = true;
    }

    // Check Category / Segment
    if (cat.includes(tLower) || seg.includes(tLower)) {
      score += 15;
      matchCount += 1;
      tokenHit = true;
    }

    // Check Answer En / Bn
    if (aEn.includes(tLower)) {
      score += 10;
      matchCount += 1;
      tokenHit = true;
    }
    if (aBn.includes(tLower)) {
      score += 10;
      matchCount += 1;
      tokenHit = true;
    }

    if (tokenHit) {
      matchedTokensSet.add(token);
    }
  });

  return {
    score,
    matchCount,
    matchedTokens: Array.from(matchedTokensSet)
  };
}

/**
 * Escapes regex special characters safely
 */
function escapeRegex(text: string): string {
  return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export interface HighlightTextProps {
  text: string;
  query: string;
  className?: string;
  highlightClassName?: string;
}

/**
 * Smart Highlight Component that highlights all query tokens and their bilingual equivalents
 */
export const HighlightText: React.FC<HighlightTextProps> = ({
  text,
  query,
  className = '',
  highlightClassName = 'bg-sky-200 text-sky-950 font-bold px-0.5 rounded-xs transition-colors'
}) => {
  if (!text) return null;
  if (!query || !query.trim()) {
    return <span className={className}>{text}</span>;
  }

  // Gather unique tokens sorted by length descending so longer phrases match first
  const tokens = getExpandedSearchTokens(query)
    .filter((t) => t.length >= 2)
    .sort((a, b) => b.length - a.length);

  if (tokens.length === 0) {
    return <span className={className}>{text}</span>;
  }

  try {
    const escapedTokens = tokens.map((t) => escapeRegex(t)).join('|');
    const regex = new RegExp(`(${escapedTokens})`, 'gi');

    const parts = text.split(regex);

    return (
      <span className={className}>
        {parts.map((part, index) => {
          if (!part) return null;
          const isMatch = tokens.some((t) => t.toLowerCase() === part.toLowerCase());
          if (isMatch) {
            return (
              <mark key={index} className={highlightClassName}>
                {part}
              </mark>
            );
          }
          return <React.Fragment key={index}>{part}</React.Fragment>;
        })}
      </span>
    );
  } catch {
    // Fallback if regex generation fails
    return <span className={className}>{text}</span>;
  }
};

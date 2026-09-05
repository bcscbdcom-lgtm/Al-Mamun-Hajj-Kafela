import { Language } from '../types';

export const WHATSAPP_PHONE = '8801712864077';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}?text=`;
export const WHATSAPP_TOAST_EVENT = 'almamun_whatsapp_toast_event';

export interface WhatsAppToastPayload {
  packageNameEn?: string;
  packageNameBn?: string;
  customMessageEn?: string;
  customMessageBn?: string;
}

/**
 * Triggers the subtle 'Opening WhatsApp for your inquiry...' toast notification.
 */
export function triggerWhatsAppToast(payload?: WhatsAppToastPayload): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent(WHATSAPP_TOAST_EVENT, {
      detail: payload || {},
    })
  );
}

/**
 * Encodes a message safely and returns the official WhatsApp direct URL.
 * Automatically wraps content with encodeURIComponent to guarantee compatibility across
 * desktop WhatsApp Web and native mobile WhatsApp apps.
 */
export function createWhatsAppLink(message: string): string {
  return `${WHATSAPP_BASE_URL}${encodeURIComponent(message.trim())}`;
}

/**
 * Dynamic Context: Floating Action Button, Navbar & Footer.
 * Bangla: "আসসালামু আলাইকুম, আল মামুন হজ কাফেলা থেকে হজ্জ ও ওমরাহ সেবা সংক্রান্ত সার্বিক তথ্য ও পরামর্শ জানতে আগ্রহী।"
 */
export function getGeneralWhatsAppLink(lang: Language = 'bn'): string {
  const text =
    lang === 'en'
      ? 'Assalamu Alaikum, I am interested in general information and consultation regarding Hajj and Umrah services from Al Mamun Hajj Kafela.'
      : 'আসসালামু আলাইকুম, আল মামুন হজ কাফেলা থেকে হজ্জ ও ওমরাহ সেবা সংক্রান্ত সার্বিক তথ্য ও পরামর্শ জানতে আগ্রহী।';
  return createWhatsAppLink(text);
}

/**
 * Dynamic Context: Hajj Package Cards.
 * Injects package title and price dynamically.
 * Bangla: "আসসালামু আলাইকুম, আমি আল মামুন হজ কাফেলার '[pkg.title] ([pkg.price])' সম্পর্কে বিস্তারিত বুকিং তথ্য ও সুবিধা জানতে আগ্রহী।"
 */
export function getHajjPackageWhatsAppLink(
  pkg: {
    title?: string;
    nameBn?: string;
    nameEn?: string;
    price?: string;
    priceBn?: string;
    priceEn?: string;
  },
  lang: Language = 'bn'
): string {
  const title =
    pkg.title ||
    (lang === 'en' ? pkg.nameEn || pkg.nameBn : pkg.nameBn || pkg.nameEn) ||
    '';
  const price =
    pkg.price ||
    (lang === 'en' ? pkg.priceEn || pkg.priceBn : pkg.priceBn || pkg.priceEn) ||
    '';

  const text =
    lang === 'en'
      ? `Assalamu Alaikum, I am interested in booking details and benefits for Al Mamun Hajj Kafela's '${title} (${price})'.`
      : `আসসালামু আলাইকুম, আমি আল মামুন হজ কাফেলার '${title} (${price})' সম্পর্কে বিস্তারিত বুকিং তথ্য ও সুবিধা জানতে আগ্রহী।`;

  return createWhatsAppLink(text);
}

/**
 * Dynamic Context: Umrah Package Cards.
 * Injects package title dynamically.
 * Bangla: "আসসালামু আলাইকুম, আল মামুন কাফেলার '[pkg.title]' ওমরাহ প্যাকেজের ফ্লাইট শিডিউল ও বুকিং তথ্য জানতে চাচ্ছি।"
 */
export function getUmrahPackageWhatsAppLink(
  pkg: {
    title?: string;
    nameBn?: string;
    nameEn?: string;
  },
  lang: Language = 'bn'
): string {
  const title =
    pkg.title ||
    (lang === 'en' ? pkg.nameEn || pkg.nameBn : pkg.nameBn || pkg.nameEn) ||
    '';

  const text =
    lang === 'en'
      ? `Assalamu Alaikum, I would like to know the flight schedule and booking details for Al Mamun Kafela's '${title}' Umrah package.`
      : `আসসালামু আলাইকুম, আল মামুন কাফেলার '${title}' ওমরাহ প্যাকেজের ফ্লাইট শিডিউল ও বুকিং তথ্য জানতে চাচ্ছি।`;

  return createWhatsAppLink(text);
}

/**
 * Dynamic Context: Scholar Section ("আলেমদের সাথে সরাসরি কথা বলুন").
 * Bangla: "আসসালামু আলাইকুম, সম্মানিত মুফতী আমানুল্লাহ সাহেবের সরাসরি তত্ত্বাবধানে হজ্জ/ওমরাহর শরীয়াহ রাহবারি ও কাফেলা সম্পর্কে পরামর্শ নিতে চাচ্ছি।"
 */
export function getScholarWhatsAppLink(lang: Language = 'bn'): string {
  const text =
    lang === 'en'
      ? 'Assalamu Alaikum, I would like to seek Shariah guidance and consultation regarding Hajj/Umrah directly supervised by respected Mufti Amanullah.'
      : 'আসসালামু আলাইকুম, সম্মানিত মুফতী আমানুল্লাহ সাহেবের সরাসরি তত্ত্বাবধানে হজ্জ/ওমরাহর শরীয়াহ রাহবারি ও কাফেলা সম্পর্কে পরামর্শ নিতে চাচ্ছি।';
  return createWhatsAppLink(text);
}

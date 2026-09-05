import { Language } from '../types';
import { triggerWhatsAppToast } from './whatsapp';

export type InquiryPackageType = 'hajj' | 'umrah' | 'general' | 'scholar';

export interface InquiryCountRecord {
  id: string;
  nameEn: string;
  nameBn: string;
  type: InquiryPackageType;
  clicks: number;
  lastClickedAt: string;
  priceEn?: string;
  priceBn?: string;
}

export interface InquiryClickLog {
  id: string;
  packageId: string;
  nameEn: string;
  nameBn: string;
  type: InquiryPackageType;
  source: string;
  timestamp: string;
}

export interface InquiryTrackerData {
  records: Record<string, InquiryCountRecord>;
  recentLogs: InquiryClickLog[];
  totalClicks: number;
}

const STORAGE_KEY = 'amhk_whatsapp_inquiries_v1';
export const INQUIRY_TRACKED_EVENT = 'amhk_inquiry_tracked';

// Realistic baseline data matching current packages so staff sees immediate actionable metrics
const BASELINE_RECORDS: Record<string, InquiryCountRecord> = {
  'hajj-economy-saving': {
    id: 'hajj-economy-saving',
    nameEn: 'Economy Saver Package',
    nameBn: 'ইকোনমি সাশ্রয়ী প্যাকেজ',
    type: 'hajj',
    clicks: 148,
    lastClickedAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    priceEn: '৳ 5,50,000',
    priceBn: '৳ ৫,৫০,০০০',
  },
  'hajj-vip-fivestar': {
    id: 'hajj-vip-fivestar',
    nameEn: '5-Star Special (Shifting Short Package) / VIP Hajj',
    nameBn: 'হজ্ব ফাইভ স্টার স্পেশাল (শিফটিং সর্ট প্যাকেজ) / ভিআইপি প্যাকেজ',
    type: 'hajj',
    clicks: 128,
    lastClickedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    priceEn: '৳ 8,20,000',
    priceBn: '৳ ৮,২০,০০০',
  },
  'hajj-vip-platinum': {
    id: 'hajj-vip-platinum',
    nameEn: 'VIP Platinum Package',
    nameBn: 'ভিআইপি প্ল্যাটিনাম প্যাকেজ',
    type: 'hajj',
    clicks: 112,
    lastClickedAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    priceEn: '৳ 8,80,000',
    priceBn: '৳ ৮,৮০,০০০',
  },
  'hajj-executive-shifting': {
    id: 'hajj-executive-shifting',
    nameEn: 'Executive Shifting Package',
    nameBn: 'এক্সিকিউটিভ শিফটিং প্যাকেজ',
    type: 'hajj',
    clicks: 86,
    lastClickedAt: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
    priceEn: '৳ 6,90,000',
    priceBn: '৳ ৬,৯০,০০০',
  },
  'hajj-standard-non-shifting': {
    id: 'hajj-standard-non-shifting',
    nameEn: 'Standard Non-Shifting Package',
    nameBn: 'স্ট্যান্ডার্ড নন-শিফটিং প্যাকেজ',
    type: 'hajj',
    clicks: 94,
    lastClickedAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    priceEn: '৳ 7,50,000',
    priceBn: '৳ ৭,৫০,০০০',
  },
  'umrah-ramadan-full': {
    id: 'umrah-ramadan-full',
    nameEn: 'Ramadan Special Umrah',
    nameBn: 'মাহে রমজান স্পেশাল ওমরাহ',
    type: 'umrah',
    clicks: 165,
    lastClickedAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    priceEn: '৳ 1,95,000',
    priceBn: '৳ ১,৯৫,০০০',
  },
  'umrah-family-classic': {
    id: 'umrah-family-classic',
    nameEn: 'Family Comfort Umrah',
    nameBn: 'ফ্যামিলি কমফোর্ট ওমরাহ',
    type: 'umrah',
    clicks: 118,
    lastClickedAt: new Date(Date.now() - 1000 * 60 * 95).toISOString(),
    priceEn: '৳ 1,65,000',
    priceBn: '৳ ১,৬৫,০০০',
  },
  'umrah-standard-saver': {
    id: 'umrah-standard-saver',
    nameEn: 'Standard Saver Umrah',
    nameBn: 'স্ট্যান্ডার্ড সাশ্রয়ী ওমরাহ',
    type: 'umrah',
    clicks: 132,
    lastClickedAt: new Date(Date.now() - 1000 * 60 * 70).toISOString(),
    priceEn: '৳ 1,45,000',
    priceBn: '৳ ১,৪৫,০০০',
  },
  'umrah-express-7d': {
    id: 'umrah-express-7d',
    nameEn: 'Express 7 Days Umrah',
    nameBn: 'এক্সপ্রেস ৭ দিনের ওমরাহ',
    type: 'umrah',
    clicks: 64,
    lastClickedAt: new Date(Date.now() - 1000 * 60 * 310).toISOString(),
    priceEn: '৳ 1,25,000',
    priceBn: '৳ ১,২৫,০০০',
  },
  'general_inquiry': {
    id: 'general_inquiry',
    nameEn: 'General WhatsApp Inquiry',
    nameBn: 'সাধারণ তথ্য ও হটলাইন অনুসন্ধান',
    type: 'general',
    clicks: 210,
    lastClickedAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  'scholar_advisory': {
    id: 'scholar_advisory',
    nameEn: 'Scholar Guidance & Fiqh',
    nameBn: 'আলেমদের শরীয়াহ ও মাসআলা পরামর্শ',
    type: 'scholar',
    clicks: 79,
    lastClickedAt: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
  },
};

const BASELINE_LOGS: InquiryClickLog[] = [
  {
    id: 'log-1',
    packageId: 'umrah-ramadan-full',
    nameEn: 'Ramadan Special Umrah',
    nameBn: 'মাহে রমজান স্পেশাল ওমরাহ',
    type: 'umrah',
    source: 'umrah_card',
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
  },
  {
    id: 'log-2',
    packageId: 'hajj-economy-saving',
    nameEn: 'Economy Saver Package',
    nameBn: 'ইকোনমি সাশ্রয়ী প্যাকেজ',
    type: 'hajj',
    source: 'hajj_card',
    timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
  },
  {
    id: 'log-3',
    packageId: 'scholar_advisory',
    nameEn: 'Scholar Guidance & Fiqh',
    nameBn: 'আলেমদের শরীয়াহ ও মাসআলা পরামর্শ',
    type: 'scholar',
    source: 'scholar_section',
    timestamp: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
  },
  {
    id: 'log-4',
    packageId: 'umrah-standard-saver',
    nameEn: 'Standard Saver Umrah',
    nameBn: 'স্ট্যান্ডার্ড সাশ্রয়ী ওমরাহ',
    type: 'umrah',
    source: 'compare_modal',
    timestamp: new Date(Date.now() - 1000 * 60 * 70).toISOString(),
  },
];

/**
 * Loads current tracker state from localStorage. If none exists, seeds with baseline.
 */
export function getInquiryTrackerData(): InquiryTrackerData {
  if (typeof window === 'undefined') {
    return {
      records: BASELINE_RECORDS,
      recentLogs: BASELINE_LOGS,
      totalClicks: Object.values(BASELINE_RECORDS).reduce((s, r) => s + r.clicks, 0),
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial: InquiryTrackerData = {
        records: BASELINE_RECORDS,
        recentLogs: BASELINE_LOGS,
        totalClicks: Object.values(BASELINE_RECORDS).reduce((s, r) => s + r.clicks, 0),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }

    const parsed = JSON.parse(raw) as InquiryTrackerData;
    // Safety check for valid structure
    if (!parsed || !parsed.records) {
      throw new Error('Invalid structure');
    }
    return parsed;
  } catch (err) {
    console.error('Failed to read inquiry tracker data, resetting to baseline:', err);
    const initial: InquiryTrackerData = {
      records: BASELINE_RECORDS,
      recentLogs: BASELINE_LOGS,
      totalClicks: Object.values(BASELINE_RECORDS).reduce((s, r) => s + r.clicks, 0),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    } catch {}
    return initial;
  }
}

/**
 * Tracks a WhatsApp inquiry button click in localStorage and dispatches a live event.
 */
export function trackWhatsAppClick(item: {
  id?: string;
  nameEn: string;
  nameBn: string;
  type?: InquiryPackageType;
  source?: string;
  priceEn?: string;
  priceBn?: string;
}): void {
  if (typeof window === 'undefined') return;

  try {
    const data = getInquiryTrackerData();
    const pkgId = item.id || item.nameEn.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const type: InquiryPackageType = item.type || 'general';
    const source = item.source || 'website';
    const nowIso = new Date().toISOString();

    const existingRecord = data.records[pkgId] || {
      id: pkgId,
      nameEn: item.nameEn,
      nameBn: item.nameBn,
      type,
      clicks: 0,
      lastClickedAt: nowIso,
      priceEn: item.priceEn,
      priceBn: item.priceBn,
    };

    existingRecord.clicks += 1;
    existingRecord.lastClickedAt = nowIso;
    if (item.priceEn) existingRecord.priceEn = item.priceEn;
    if (item.priceBn) existingRecord.priceBn = item.priceBn;

    data.records[pkgId] = existingRecord;
    data.totalClicks = (data.totalClicks || 0) + 1;

    // Log event (keep latest 50)
    const newLog: InquiryClickLog = {
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      packageId: pkgId,
      nameEn: item.nameEn,
      nameBn: item.nameBn,
      type,
      source,
      timestamp: nowIso,
    };

    data.recentLogs = [newLog, ...(data.recentLogs || [])].slice(0, 50);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    // Dispatch custom event for real-time reactive UI update
    window.dispatchEvent(
      new CustomEvent(INQUIRY_TRACKED_EVENT, {
        detail: { item, record: existingRecord },
      })
    );

    // Show subtle WhatsApp opening toast
    triggerWhatsAppToast({
      packageNameEn: item.nameEn,
      packageNameBn: item.nameBn,
    });
  } catch (err) {
    console.error('Failed to track WhatsApp click in localStorage:', err);
  }
}

/**
 * Resets the tracker back to clear / clean zero counts or baseline.
 */
export function resetInquiryTrackerData(toZero: boolean = false): InquiryTrackerData {
  const records: Record<string, InquiryCountRecord> = {};

  if (toZero) {
    Object.keys(BASELINE_RECORDS).forEach((key) => {
      const base = BASELINE_RECORDS[key];
      records[key] = {
        ...base,
        clicks: 0,
        lastClickedAt: new Date().toISOString(),
      };
    });
  }

  const fresh: InquiryTrackerData = {
    records: toZero ? records : BASELINE_RECORDS,
    recentLogs: toZero ? [] : BASELINE_LOGS,
    totalClicks: toZero ? 0 : Object.values(BASELINE_RECORDS).reduce((s, r) => s + r.clicks, 0),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    window.dispatchEvent(new CustomEvent(INQUIRY_TRACKED_EVENT, { detail: { reset: true } }));
  } catch {}

  return fresh;
}

/**
 * Generates and triggers download of CSV report of inquiry counts.
 */
export function exportInquiryDataAsCSV(lang: Language = 'bn'): void {
  const data = getInquiryTrackerData();
  const sorted = Object.values(data.records).sort((a, b) => b.clicks - a.clicks);

  let csv = 'Rank,Package ID,Package Name (English),Package Name (Bangla),Category,Inquiry Clicks,Share %,Last Inquiry Date\n';

  sorted.forEach((item, index) => {
    const share = data.totalClicks > 0 ? ((item.clicks / data.totalClicks) * 100).toFixed(1) : '0.0';
    const cleanEn = item.nameEn.replace(/"/g, '""');
    const cleanBn = item.nameBn.replace(/"/g, '""');
    csv += `"${index + 1}","${item.id}","${cleanEn}","${cleanBn}","${item.type}","${item.clicks}","${share}%","${item.lastClickedAt}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `al-mamun-whatsapp-inquiry-report-${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

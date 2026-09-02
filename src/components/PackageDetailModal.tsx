import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  XCircle,
  MapPin,
  Plane,
  Hotel,
  Calendar,
  Clock,
  Star,
  MessageCircle,
  ArrowRight,
  DollarSign,
  Repeat,
  Printer,
  Sparkles,
  QrCode,
  Copy,
  Check,
  Smartphone,
  Download,
  FileText,
  Flame,
  Users,
  AlertCircle,
  Coins,
  TrendingUp,
  Info
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Language, PackageItem } from '../types';
import { toBengaliNumber } from '../utils/dateFormatter';
import {
  Currency,
  convertFromBDT,
  formatCurrencyPrice,
  getCurrencyConfig,
  extractNumericPrice,
  MOCK_EXCHANGE_RATES,
} from '../utils/currency';

interface PackageDetailModalProps {
  lang: Language;
  pkg: PackageItem | null;
  onClose: () => void;
  onBookNow: (pkgName: string) => void;
  onOpenPrintModal?: (pkg: PackageItem) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  lang,
  pkg,
  onClose,
  onBookNow,
  onOpenPrintModal,
}) => {
  if (!pkg) return null;

  // Currency Converter state: converts between BDT, USD, and SAR
  const [currency, setCurrency] = useState<Currency>('BDT');
  const [showQrCode, setShowQrCode] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const bdtAmount = pkg.priceNumeric || extractNumericPrice(pkg.priceEn);
  const currentFormattedPrice = formatCurrencyPrice(bdtAmount, currency, lang);
  const currentConfig = getCurrencyConfig(currency, lang);

  // Generate direct booking URL with package ID prefilled
  const bookingUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}?pkg=${encodeURIComponent(pkg.id)}#preregistration`
      : `https://almamunhajjkafela.com/?pkg=${encodeURIComponent(pkg.id)}#preregistration`;

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(bookingUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleDownloadPdf = () => {
    if (onOpenPrintModal) {
      onOpenPrintModal(pkg);
    } else {
      window.print();
    }
  };

  const renderAvailabilityBadge = () => {
    const availability = pkg.availability || 'open';
    const badgeText = lang === 'en' ? pkg.availabilityBadgeEn : pkg.availabilityBadgeBn;

    if (availability === 'limited') {
      return (
        <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-300 text-amber-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
          <Flame className="w-3 h-3 text-amber-600 fill-amber-500 animate-pulse" />
          <span>{badgeText || (lang === 'en' ? 'Limited Seats' : 'সীমিত আসন')}</span>
        </span>
      );
    }

    if (availability === 'fast_filling') {
      return (
        <span className="inline-flex items-center gap-1 bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
          <Clock className="w-3 h-3 text-[#0284C7]" />
          <span>{badgeText || (lang === 'en' ? 'Filling Fast' : 'দ্রুত পূরণ হচ্ছে')}</span>
        </span>
      );
    }

    if (availability === 'sold_out') {
      return (
        <span className="inline-flex items-center gap-1 bg-rose-50 border border-rose-200 text-rose-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
          <AlertCircle className="w-3 h-3 text-rose-600" />
          <span>{badgeText || (lang === 'en' ? 'Sold Out' : 'আসন পূর্ণ')}</span>
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
        <Users className="w-3 h-3 text-emerald-700" />
        <span>{badgeText || (lang === 'en' ? 'Open for Booking' : 'বুকিং উন্মুক্ত')}</span>
      </span>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-backdrop-fade">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto border border-[#E5E7EB] text-[#334155] animate-modal-slide-up">
        {/* Top Action Bar: PDF Print, QR Code & Close */}
        <div className="absolute top-5 right-5 flex items-center gap-2">
          {/* PDF Download Button */}
          <button
            onClick={handleDownloadPdf}
            title={lang === 'en' ? 'Download PDF Brochure' : 'PDF ব্রোশিউর ডাউনলোড করুন'}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#0369A1] bg-slate-100 hover:bg-emerald-50 px-3 py-1.5 rounded-full transition cursor-pointer border border-[#E5E7EB]"
          >
            <Download className="w-3.5 h-3.5 text-[#0369A1]" />
            <span className="hidden sm:inline">{lang === 'en' ? 'PDF Brochure' : 'PDF ব্রোশিউর'}</span>
          </button>

          <button
            onClick={() => setShowQrCode(!showQrCode)}
            title={lang === 'en' ? 'Package Booking QR Code' : 'বুকিং কিউআর কোড'}
            className={`p-2 rounded-full transition cursor-pointer border ${
              showQrCode
                ? 'bg-[#0284C7] text-white border-[#0284C7]'
                : 'text-slate-400 hover:text-[#0369A1] bg-slate-100 hover:bg-emerald-50 border-[#E5E7EB]'
            }`}
          >
            <QrCode className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition cursor-pointer border border-[#E5E7EB]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Top Header */}
        <div className="mb-6 pr-32">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              {lang === 'en' ? pkg.badgeEn : pkg.badgeBn}
            </span>
            {renderAvailabilityBadge()}
            <span className="text-xs text-slate-500 font-semibold flex items-center gap-1 font-mono">
              <Clock className="w-3 h-3 text-slate-400" />
              {lang === 'en' ? pkg.durationEn : pkg.durationBn}
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-[#0369A1] leading-tight">
            {lang === 'en' ? pkg.nameEn : pkg.nameBn}
          </h2>

          {(pkg.subtitleEn || pkg.subtitleBn) && (
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              {lang === 'en' ? pkg.subtitleEn : pkg.subtitleBn}
            </p>
          )}

          {/* Pricing & Interactive Currency Converter */}
          <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB] shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {lang === 'en' ? 'Package Price (Per Person)' : 'প্যাকেজ মূল্য (জনপ্রতি)'}
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]">
                    {currency}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#0369A1] font-mono tracking-tight transition-all duration-200">
                  {currentFormattedPrice}
                </div>
              </div>

              {/* Currency Converter Toggle Switch: BDT, USD, SAR */}
              <div className="flex items-center p-1 bg-white rounded-xl border border-[#E5E7EB] shadow-2xs">
                {(['BDT', 'USD', 'SAR'] as Currency[]).map((curr) => {
                  const isActive = currency === curr;
                  return (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setCurrency(curr)}
                      className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                        isActive
                          ? 'bg-[#0284C7] text-white shadow-2xs'
                          : 'text-slate-600 hover:text-[#0369A1] hover:bg-emerald-50'
                      }`}
                      aria-pressed={isActive}
                      title={getCurrencyConfig(curr, lang).fullName}
                    >
                      {curr === 'BDT' && <span>৳ BDT</span>}
                      {curr === 'USD' && <span>$ USD</span>}
                      {curr === 'SAR' && <span>ر.س SAR</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Exchange Rate Details & Indicator */}
            <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Repeat className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0" />
                <span>
                  {currency === 'BDT'
                    ? lang === 'en'
                      ? `Mock Base Rates: 1 USD ≈ ৳${MOCK_EXCHANGE_RATES.bdtPerUsd} • 1 SAR ≈ ৳${MOCK_EXCHANGE_RATES.bdtPerSar}`
                      : `আনুমানিক হার: ১ USD ≈ ৳${toBengaliNumber(MOCK_EXCHANGE_RATES.bdtPerUsd)} • ১ SAR ≈ ৳${toBengaliNumber(MOCK_EXCHANGE_RATES.bdtPerSar)}`
                    : currentConfig.rateSummary}
                </span>
              </span>
              <span className="font-medium text-slate-400 sm:text-right">
                {lang === 'en' ? 'Includes flights & visa' : 'বিমান ও ভিসা সহ'}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#334155] mt-3 leading-relaxed">
            {lang === 'en' ? pkg.itinerarySummaryEn : pkg.itinerarySummaryBn}
          </p>
        </div>

        {/* QR Code Booking Drawer */}
        {showQrCode && (
          <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-[#F8FAF9] to-emerald-50 border-2 border-[#0284C7]/30 animate-in slide-in-from-top-2">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="bg-white p-3 rounded-2xl shadow-md border border-[#E5E7EB] flex-shrink-0">
                <QRCodeSVG
                  value={bookingUrl}
                  size={120}
                  level="H"
                  includeMargin={false}
                />
              </div>

              <div className="space-y-2 text-center sm:text-left flex-1">
                <div className="inline-flex items-center gap-1.5 bg-[#E0F2FE] text-[#0369A1] px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide border border-[#BAE6FD]">
                  <Smartphone className="w-3 h-3" />
                  <span>{lang === 'en' ? 'Instant Mobile Booking QR' : 'মোবাইল বুকিং কিউআর কোড'}</span>
                </div>
                <h4 className="text-sm font-extrabold text-[#0369A1]">
                  {lang === 'en' ? 'Scan to Pre-Fill Booking Form' : 'স্ক্যান করে সরাসরি বুকিং ফর্ম পূরণ করুন'}
                </h4>
                <p className="text-xs text-slate-500">
                  {lang === 'en'
                    ? 'Scan with your mobile camera or copy the direct link below to share this package with family.'
                    : 'স্মার্টফোনের ক্যামেরা দিয়ে স্ক্যান করুন অথবা পরিবারের সাথে শেয়ার করতে নিচের লিংকটি কপি করুন।'}
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="text"
                    readOnly
                    value={bookingUrl}
                    className="flex-1 bg-white border border-[#E5E7EB] rounded-xl px-3 py-1.5 text-[11px] font-mono text-slate-600 select-all"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-1 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold px-3 py-1.5 rounded-xl transition cursor-pointer flex-shrink-0"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>
                      {copiedLink
                        ? lang === 'en'
                          ? 'Copied!'
                          : 'কপি হয়েছে!'
                        : lang === 'en'
                        ? 'Copy Link'
                        : 'লিংক কপি'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Accommodations and Logistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
          <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E5E7EB]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0369A1] mb-1">
              <Hotel className="w-4 h-4 text-[#0369A1]" />
              <span>{lang === 'en' ? 'Makkah Accommodation' : 'মক্কা আবাসন'}</span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-snug">
              {lang === 'en' ? pkg.hotelMakkahEn : pkg.hotelMakkahBn}
            </p>
            <p className="text-[11px] text-[#0369A1] mt-1.5 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
              <span>{lang === 'en' ? pkg.distanceMakkahEn : pkg.distanceMakkahBn}</span>
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E5E7EB]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0369A1] mb-1">
              <Hotel className="w-4 h-4 text-[#0369A1]" />
              <span>{lang === 'en' ? 'Madinah Accommodation' : 'মদিনা আবাসন'}</span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-snug">
              {lang === 'en' ? pkg.hotelMadinahEn : pkg.hotelMadinahBn}
            </p>
            <p className="text-[11px] text-[#0369A1] mt-1.5 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
              <span>
                {lang === 'en'
                  ? (pkg.distanceMadinahEn || pkg.hotelMadinahEn)
                  : (pkg.distanceMadinahBn || pkg.hotelMadinahBn)}
              </span>
            </p>
          </div>

          {/* Mina & Arafat Logistics */}
          <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E5E7EB]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0369A1] mb-1">
              <Sparkles className="w-4 h-4 text-[#0369A1]" />
              <span>{lang === 'en' ? 'Mina & Arafat Service' : 'মিনা ও আরাফাত ব্যবস্থাপনা'}</span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-snug">
              {lang === 'en'
                ? (pkg.minaArafatEn || 'Mina Category-C Zone-5 AC Tents & Moallem Guidance')
                : (pkg.minaArafatBn || 'মিনা সার্ভিস Category-C (Zone-5 তাবু ও মুয়াল্লেম গাইড)')}
            </p>
            <p className="text-[11px] text-[#0369A1] mt-1.5 font-semibold flex items-center gap-1">
              <Plane className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
              <span>{lang === 'en' ? pkg.airlinesEn : pkg.airlinesBn}</span>
            </p>
          </div>

          {/* Food & Catering */}
          <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E5E7EB]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0369A1] mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>{lang === 'en' ? 'Food & Catering Plan' : 'খাবার ও ক্যাটারিং'}</span>
            </div>
            <p className="text-xs text-slate-700 font-medium leading-snug">
              {lang === 'en'
                ? (pkg.foodEn || '3 daily authentic Bengali meals & Mina catering included')
                : (pkg.foodBn || 'প্রতিদিন ৩ বেলা সুস্বাদু দেশীয় খাবার ও মিনায় ক্যাটারিং')}
            </p>
            <p className="text-[11px] text-emerald-800 mt-1.5 font-semibold flex items-center gap-1">
              <span>✓ {lang === 'en' ? 'Bengali Cook / Catering' : 'দেশি বাবুর্চি ও ফ্রেশ খাবার'}</span>
            </p>
          </div>
        </div>

        {/* Inclusions */}
        <div className="mb-6">
          <h4 className="font-bold text-[#0369A1] text-xs sm:text-sm uppercase tracking-wider mb-3">
            {lang === 'en' ? '✓ What is Included in this Package' : '✓ প্যাকেজে যা যা অন্তর্ভুক্ত'}
          </h4>
          <ul className="space-y-2 text-xs text-slate-700 bg-[#F8FAFC] p-4 rounded-2xl border border-[#E5E7EB]">
            {(lang === 'en' ? pkg.inclusionsEn : pkg.inclusionsBn).map((inc, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{inc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div className="mb-6">
          <h4 className="font-bold text-slate-500 text-xs sm:text-sm uppercase tracking-wider mb-3">
            {lang === 'en' ? '✕ Exclusions & Optional Costs' : '✕ প্যাকেজে যা অন্তর্ভুক্ত নয়'}
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-500 bg-[#F8FAFC] p-4 rounded-2xl border border-[#E5E7EB]">
            {(lang === 'en' ? pkg.exclusionsEn : pkg.exclusionsBn).map((exc, i) => (
              <li key={i} className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{exc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA Strip */}
        <div className="pt-4 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onBookNow(lang === 'en' ? pkg.nameEn : pkg.nameBn);
            }}
            className="w-full sm:flex-1 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold py-3.5 rounded-xl shadow-2xs transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{lang === 'en' ? 'Book / Pre-Register for this Package' : 'এই প্যাকেজে বুকিং আবেদন করুন'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleDownloadPdf}
            className="w-full sm:w-auto bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 text-xs font-bold px-4 py-3.5 rounded-xl transition flex items-center justify-center gap-1.5 border border-[#E5E7EB] cursor-pointer"
            title={lang === 'en' ? 'Print or Save as PDF' : 'প্রিন্ট বা PDF হিসেবে সংরক্ষণ করুন'}
          >
            <Printer className="w-4 h-4 text-[#0369A1]" />
            <span>{lang === 'en' ? 'Print PDF' : 'PDF প্রিন্ট'}</span>
          </button>

          <a
            href={`https://wa.me/8801712864077?text=${encodeURIComponent(
              `Assalamu Alaikum, I would like more details and itinerary for "${lang === 'en' ? pkg.nameEn : pkg.nameBn}" (${lang === 'en' ? pkg.priceEn : pkg.priceBn}).`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#F8FAFC] hover:bg-slate-100 text-slate-700 text-xs font-bold px-4 py-3.5 rounded-xl transition flex items-center justify-center gap-1.5 border border-[#E5E7EB]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

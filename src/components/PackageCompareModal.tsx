import React, { useState } from 'react';
import { X, Check, CheckCircle2, Minus, Star, ArrowRight, MessageCircle, Layers, Trash2 } from 'lucide-react';
import { Language, PackageItem } from '../types';
import { localizeDuration } from '../utils/dateFormatter';
import { Currency, formatCurrencyPrice, getCurrencyConfig, extractNumericPrice } from '../utils/currency';

interface PackageCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  packages: PackageItem[];
  lang: Language;
  onRemovePackage: (pkgId: string) => void;
  onClearAll: () => void;
  onBookPackage: (pkgName: string) => void;
}

export const PackageCompareModal: React.FC<PackageCompareModalProps> = ({
  isOpen,
  onClose,
  packages,
  lang,
  onRemovePackage,
  onClearAll,
  onBookPackage,
}) => {
  const [currency, setCurrency] = useState<Currency>('BDT');

  if (!isOpen || packages.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-backdrop-fade overflow-hidden"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white w-full max-w-6xl max-h-[92vh] rounded-3xl border border-[#E5E7EB] shadow-2xl flex flex-col overflow-hidden animate-modal-slide-up text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b border-[#E5E7EB] flex-shrink-0 bg-[#F8FAFC] gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center shadow-xs flex-shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-extrabold text-[#0369A1]">
                  {lang === 'en' ? 'Side-by-Side Package Comparison' : 'প্যাকেজসমূহের তুলনামূলক বিশ্লেষণ'}
                </h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]">
                  {packages.length} {lang === 'en' ? 'Selected' : 'নির্বাচিত'}
                </span>
              </div>
              <p className="text-xs text-[#334155]">
                {lang === 'en'
                  ? 'Compare pricing, hotel distances, flights, meals and amenities in one view'
                  : 'এক নজরে প্যাকেজের মূল্য, হোটেলের দূরত্ব, ফ্লাইট ও অন্যান্য সুযোগ-সুবিধা তুলনা করুন'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-end sm:self-auto">
            {/* Currency Switcher in Comparison Modal */}
            <div className="flex items-center p-1 bg-white rounded-xl border border-[#E5E7EB] shadow-2xs">
              {(['BDT', 'USD', 'SAR'] as Currency[]).map((curr) => {
                const isActive = currency === curr;
                return (
                  <button
                    key={curr}
                    type="button"
                    onClick={() => setCurrency(curr)}
                    className={`px-2 sm:px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      isActive
                        ? 'bg-[#0284C7] text-white shadow-xs'
                        : 'text-slate-600 hover:text-[#0369A1] hover:bg-slate-100'
                    }`}
                  >
                    {curr === 'BDT' && '৳ BDT'}
                    {curr === 'USD' && '$ USD'}
                    {curr === 'SAR' && 'SAR'}
                  </button>
                );
              })}
            </div>

            <button
              onClick={onClearAll}
              className="text-xs font-semibold text-rose-600 hover:bg-rose-50 px-3 py-1.5 rounded-xl transition flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Clear All' : 'সব মুছুন'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Table Body (Scrollable) */}
        <div className="flex-1 overflow-x-auto overflow-y-auto p-4 sm:p-6">
          <div className="min-w-[680px]">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-44 sm:w-56 p-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 rounded-l-2xl border-y border-l border-[#E5E7EB]">
                    {lang === 'en' ? 'Comparison Matrix' : 'তুলনামূলক মানদণ্ড'}
                  </th>
                  {packages.map((pkg) => {
                    const bdtPrice = pkg.priceNumeric || extractNumericPrice(pkg.priceEn);
                    const convertedPriceStr = formatCurrencyPrice(bdtPrice, currency, lang);
                    return (
                      <th
                        key={pkg.id}
                        className="p-4 text-left bg-white border border-[#E5E7EB] min-w-[220px] max-w-[280px] align-top relative first:border-l-0 last:rounded-r-2xl"
                      >
                        <button
                          onClick={() => onRemovePackage(pkg.id)}
                          className="absolute top-3 right-3 text-slate-400 hover:text-rose-600 p-1 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                          title={lang === 'en' ? 'Remove from comparison' : 'তুলনা থেকে বাদ দিন'}
                        >
                          <X className="w-4 h-4" />
                        </button>

                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD] inline-block mb-2">
                          {lang === 'en' ? pkg.badgeEn : pkg.badgeBn}
                        </span>
                        <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                          {lang === 'en' ? pkg.nameEn : pkg.nameBn}
                        </h4>
                        <div className="text-lg font-black text-[#0369A1] mt-1 font-mono">
                          {convertedPriceStr}
                        </div>
                        <div className="text-[11px] font-medium text-slate-400 font-mono">
                          {currency !== 'BDT' && (
                            <span>
                              {lang === 'en' ? `Base: ${pkg.priceEn}` : `মূল: ${pkg.priceBn}`}
                            </span>
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody className="text-xs divide-y divide-slate-100">
                {/* 1. Pilgrimage Type */}
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3.5 font-bold text-slate-700 bg-slate-50/40">
                    {lang === 'en' ? 'Category / Type' : 'ক্যাটাগরি / ধরন'}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="p-3.5 text-slate-700 capitalize font-medium">
                      <span className="inline-flex items-center gap-1 font-bold text-[#0369A1]">
                        {pkg.type === 'hajj' ? '🕋 Hajj' : '🌙 Umrah'}
                      </span>
                      <span className="text-slate-400 ml-1">({pkg.category.toUpperCase()})</span>
                    </td>
                  ))}
                </tr>

                {/* 2. Duration */}
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3.5 font-bold text-slate-700 bg-slate-50/40">
                    {lang === 'en' ? 'Duration / Stay' : 'মেয়াদ / সময়সীমা'}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="p-3.5 font-semibold text-slate-900">
                      {localizeDuration(lang === 'en' ? pkg.durationEn : pkg.durationBn, lang)}
                    </td>
                  ))}
                </tr>

                {/* 3. Makkah Hotel & Distance */}
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3.5 font-bold text-slate-700 bg-slate-50/40">
                    {lang === 'en' ? 'Makkah Hotel & Distance' : 'মক্কা হোটেল ও দূরত্ব'}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="p-3.5 text-slate-700">
                      <div className="font-bold text-slate-900">
                        {lang === 'en' ? pkg.hotelMakkahEn : pkg.hotelMakkahBn}
                      </div>
                      <div className="text-[11px] text-[#0369A1] mt-0.5 font-medium">
                        📍 {lang === 'en' ? pkg.distanceMakkahEn : pkg.distanceMakkahBn}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* 4. Madinah Hotel */}
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3.5 font-bold text-slate-700 bg-slate-50/40">
                    {lang === 'en' ? 'Madinah Hotel & Distance' : 'মদিনা হোটেল ও দূরত্ব'}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="p-3.5 text-slate-700">
                      <div className="font-bold text-slate-900">
                        {lang === 'en' ? pkg.hotelMadinahEn : pkg.hotelMadinahBn}
                      </div>
                      {(pkg.distanceMadinahEn || pkg.distanceMadinahBn) && (
                        <div className="text-[11px] text-[#0369A1] mt-0.5 font-medium">
                          📍 {lang === 'en' ? pkg.distanceMadinahEn : pkg.distanceMadinahBn}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>

                {/* 5. Mina & Arafat Tent Service */}
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3.5 font-bold text-slate-700 bg-slate-50/40">
                    {lang === 'en' ? 'Mina & Arafat Tent' : 'মিনা ও আরাফাত তাবু'}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="p-3.5 text-slate-700 text-xs">
                      <div className="font-semibold text-slate-900">
                        {pkg.type === 'hajj'
                          ? (lang === 'en'
                              ? (pkg.minaArafatEn || 'Category-C Zone-5 Tents')
                              : (pkg.minaArafatBn || 'Category-C (Zone-5 তাবু)'))
                          : (lang === 'en' ? 'N/A (Umrah)' : 'প্রযোজ্য নয়')}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* 6. Flights & Airlines */}
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3.5 font-bold text-slate-700 bg-slate-50/40">
                    {lang === 'en' ? 'Airlines & Flights' : 'এয়ারলাইন্স ও ফ্লাইট'}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="p-3.5 text-slate-700">
                      <span className="font-semibold text-slate-900">
                        {lang === 'en' ? pkg.airlinesEn : pkg.airlinesBn}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* 7. Food & Catering */}
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3.5 font-bold text-slate-700 bg-slate-50/40">
                    {lang === 'en' ? 'Food & Catering' : 'খাবার ও ক্যাটারিং'}
                  </td>
                  {packages.map((pkg) => {
                    const foodText = lang === 'en' ? (pkg.foodEn || '3x Daily Bengali Meals') : (pkg.foodBn || '৩ বেলা দেশীয় খাবার');
                    return (
                      <td key={pkg.id} className="p-3.5 text-slate-700">
                        <div className="flex items-start gap-1.5 text-emerald-700 font-semibold text-xs">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{foodText}</span>
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* 7. Bullet Train (Haramain Express) */}
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3.5 font-bold text-slate-700 bg-slate-50/40">
                    {lang === 'en' ? 'Haramain Bullet Train' : 'হারামাইন বুলেট ট্রেন'}
                  </td>
                  {packages.map((pkg) => {
                    const hasTrain =
                      pkg.highlightsEn.some((h) => h.toLowerCase().includes('bullet') || h.toLowerCase().includes('train')) ||
                      pkg.inclusionsEn.some((i) => i.toLowerCase().includes('train'));
                    return (
                      <td key={pkg.id} className="p-3.5">
                        {hasTrain ? (
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                            <Check className="w-4 h-4" />
                            <span>{lang === 'en' ? 'Included (VIP Train)' : 'অন্তর্ভুক্ত (বুলেট ট্রেন)'}</span>
                          </span>
                        ) : (
                          <span className="text-slate-400 font-medium">
                            {lang === 'en' ? 'AC Luxury Coach' : 'এসি লাক্সারি কোচ'}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>

                {/* 8. Qurbani Included (for Hajj) */}
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3.5 font-bold text-slate-700 bg-slate-50/40">
                    {lang === 'en' ? 'Qurbani (Hady)' : 'কুরবানী (হাদি)'}
                  </td>
                  {packages.map((pkg) => {
                    if (pkg.type !== 'hajj') {
                      return (
                        <td key={pkg.id} className="p-3.5 text-slate-400">
                          {lang === 'en' ? 'N/A (Umrah)' : 'প্রযোজ্য নয় (ওমরাহ)'}
                        </td>
                      );
                    }
                    const hasQurbani =
                      pkg.inclusionsEn.some((i) => i.toLowerCase().includes('qurbani')) ||
                      pkg.highlightsEn.some((h) => h.toLowerCase().includes('qurbani'));
                    return (
                      <td key={pkg.id} className="p-3.5">
                        {hasQurbani ? (
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>{lang === 'en' ? 'Included (IDB Verified)' : 'অন্তর্ভুক্ত (ইসলামিক ব্যাংক)'}</span>
                          </span>
                        ) : (
                          <span className="text-[#0284C7] font-medium">
                            {lang === 'en' ? 'Optional Add-on' : 'ঐচ্ছিক অ্যাড-অন'}
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>

                {/* 9. Key Highlights */}
                <tr className="hover:bg-slate-50/50 transition">
                  <td className="p-3.5 font-bold text-slate-700 bg-slate-50/40">
                    {lang === 'en' ? 'Top Features' : 'প্রধান সুবিধাসমূহ'}
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="p-3.5 align-top">
                      <ul className="space-y-1.5 text-[11px] text-[#334155]">
                        {(lang === 'en' ? pkg.highlightsEn : pkg.highlightsBn).slice(0, 4).map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* 10. CTAs */}
                <tr>
                  <td className="p-4 bg-slate-50/40 font-bold text-slate-700">
                    {lang === 'en' ? 'Direct Actions' : 'বুকিং ও যোগাযোগ'}
                  </td>
                  {packages.map((pkg) => {
                    const name = lang === 'en' ? pkg.nameEn : pkg.nameBn;
                    const price = lang === 'en' ? pkg.priceEn : pkg.priceBn;
                    return (
                      <td key={pkg.id} className="p-4">
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => {
                              onClose();
                              onBookPackage(name);
                            }}
                            className="w-full py-2.5 px-3 bg-[#0284C7] hover:bg-[#0369A1] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition cursor-pointer"
                          >
                            <span>{lang === 'en' ? 'Book This Package' : 'প্যাকেজ বুক করুন'}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <a
                            href={`https://wa.me/8801712864077?text=${encodeURIComponent(
                              `Assalamu Alaikum, I compared and am interested in "${name}" (${price}) at Al Mamun Hazz Kafela.`
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full py-2 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1.5 transition cursor-pointer"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E5E7EB] bg-[#F8FAFC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            💡 {lang === 'en' ? 'Tip: You can select up to 4 packages simultaneously for a complete breakdown.' : 'টিপস: আপনি একসাথে সর্বোচ্চ ৪টি প্যাকেজ সিলেক্ট করে বিস্তারিত তুলনা দেখতে পারেন।'}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold transition cursor-pointer"
          >
            {lang === 'en' ? 'Close Comparison' : 'তুলনা বন্ধ করুন'}
          </button>
        </div>
      </div>
    </div>
  );
};

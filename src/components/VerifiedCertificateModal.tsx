import React from 'react';
import { X, Award, CheckCircle2, ShieldCheck, Download, Printer, ExternalLink, QrCode } from 'lucide-react';
import { Language, LeadershipMember } from '../types';

interface VerifiedCertificateModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  member: LeadershipMember | null;
}

export const VerifiedCertificateModal: React.FC<VerifiedCertificateModalProps> = ({
  lang,
  isOpen,
  onClose,
  member,
}) => {
  if (!isOpen || !member) return null;

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto animate-backdrop-fade">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-6 max-h-[92vh] overflow-y-auto border border-[#BAE6FD] text-slate-900 animate-modal-slide-up">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-9 h-9 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>{lang === 'en' ? 'Official Ministry Accreditation' : 'সরকারি মন্ত্রণালয় অনুমোদন সনদ'}</span>
              <span className="bg-emerald-50 text-[#0369A1] border border-emerald-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                {lang === 'en' ? 'Verified' : 'অনুমোদিত'}
              </span>
            </h3>
            <p className="text-xs text-slate-500">
              {lang === 'en'
                ? 'Ministry of Religious Affairs, Government of the People\'s Republic of Bangladesh'
                : 'ধর্ম বিষয়ক মন্ত্রণালয়, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার'}
            </p>
          </div>
        </div>

        {/* The Formal Certificate Graphic Frame */}
        <div className="p-1 sm:p-1.5 rounded-2xl bg-gradient-to-r from-[#0284C7] via-[#BAE6FD] to-[#0284C7] shadow-md">
          <div className="bg-[#F0F9FF] p-6 sm:p-8 rounded-xl border-4 border-double border-[#BAE6FD] text-slate-900 relative overflow-hidden">
            
            {/* Watermark Emblem */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
              <Award className="w-96 h-96 text-[#0284C7]" />
            </div>

            {/* Top Official Banner */}
            <div className="text-center pb-5 border-b-2 border-[#BAE6FD] relative">
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#0369A1]">
                Government of the People's Republic of Bangladesh
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">
                MINISTRY OF RELIGIOUS AFFAIRS
              </div>
              <div className="text-[11px] text-slate-600 font-medium">
                Executive Directorate of Hajj & Shariah Affairs • Dhaka
              </div>
              <div className="inline-block mt-2 bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD] px-3.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                CERTIFICATE OF ACCREDITATION
              </div>
            </div>

            {/* Certificate Body */}
            <div className="py-6 text-center space-y-3 relative">
              <p className="text-xs text-slate-600 italic font-serif">
                This is to officially certify that
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-black text-[#0369A1] tracking-wide">
                {member.nameEn}
              </h2>
              <div className="text-sm font-bold text-slate-800 font-bn">
                {member.nameBn}
              </div>

              <p className="text-xs text-[#334155] max-w-lg mx-auto leading-relaxed pt-1">
                has met all statutory requirements, Fiqh assessments, and field leadership evaluations to serve as an 
                <strong className="text-slate-900 font-semibold"> Authorized Shariah Consultant & Director (শরিয়াহ কনসালটেন্ট ও পরিচালক) </strong>
                with <strong className="text-[#0369A1]">আল মামুন হজ্ব কাফেলা (AL MAMUN HAZZ KAFELA, KHULNA)</strong>.
              </p>

              {/* Certificate Details Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3 text-left max-w-lg mx-auto text-[11px]">
                <div className="bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E5E7EB]">
                  <div className="text-[9px] text-slate-500 uppercase font-bold">Accreditation ID</div>
                  <div className="font-mono font-bold text-[#0369A1]">{member.certificateNo || 'MORA-BD/SCH-15630/2026'}</div>
                </div>
                <div className="bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E5E7EB]">
                  <div className="text-[9px] text-slate-500 uppercase font-bold">Valid Season</div>
                  <div className="font-bold text-slate-800">2026 – 2027 (1447–1448 AH)</div>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E5E7EB]">
                  <div className="text-[9px] text-slate-500 uppercase font-bold">Verification Status</div>
                  <div className="font-bold text-[#0369A1] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active & Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Official Signatures & Seal */}
            <div className="pt-4 border-t-2 border-[#BAE6FD] flex items-end justify-between text-left text-[10px]">
              <div>
                <div className="font-serif italic text-slate-500 text-xs mb-0.5">Md. Anisur Rahman</div>
                <div className="h-0.5 w-24 bg-slate-400 mb-1"></div>
                <div className="font-bold text-slate-800">Director General (Hajj)</div>
                <div className="text-slate-500 text-[9px]">Ministry of Religious Affairs</div>
              </div>

              {/* Golden Seal */}
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#BAE6FD] bg-[#E0F2FE] flex flex-col items-center justify-center text-center p-1 shadow-inner">
                <Award className="w-5 h-5 text-[#0284C7]" />
                <span className="text-[7px] font-black uppercase text-[#0369A1]">Govt Seal</span>
              </div>

              <div className="text-right">
                <div className="font-serif italic text-slate-500 text-xs mb-0.5">Al-Haj Mawlana Mufti Amanullah</div>
                <div className="h-0.5 w-24 bg-slate-400 mb-1 ml-auto"></div>
                <div className="font-bold text-slate-800">Shariah Consultant & Director</div>
                <div className="text-slate-500 text-[9px]">AL MAMUN HAZZ KAFELA, KHULNA</div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Action Strip */}
        <div className="mt-5 flex items-center justify-between gap-3 pt-3 border-t border-[#E5E7EB]">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-[#0369A1]" />
            <span>{lang === 'en' ? 'Authentic Public Record Document' : 'মন্ত্রণালয় অনুমোদিত প্রাতিষ্ঠানিক রেকর্ড'}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintCertificate}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Print' : 'প্রিন্ট'}</span>
            </button>
            <button
              onClick={onClose}
              className="bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold px-4 py-2 rounded-xl transition cursor-pointer"
            >
              {lang === 'en' ? 'Close' : 'বন্ধ করুন'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

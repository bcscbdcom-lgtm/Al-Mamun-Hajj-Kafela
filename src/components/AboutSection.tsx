import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  HeartHandshake, 
  Shield, 
  Sparkles, 
  Award, 
  Calendar, 
  Users, 
  MessageSquare, 
  Mail, 
  Phone, 
  ExternalLink,
  ShieldCheck,
  Compass,
  GraduationCap,
  Clock
} from 'lucide-react';
import { Language, LeadershipMember } from '../types';
import { agencyLeadershipData } from '../data/leadership';
import { VerifiedCertificateModal } from './VerifiedCertificateModal';

interface AboutSectionProps {
  lang: Language;
  onOpenPreReg: (packageName?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenPreReg }) => {
  const [selectedCertMember, setSelectedCertMember] = useState<LeadershipMember | null>(null);
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);

  const handleDirectInquiry = (member: LeadershipMember) => {
    const title = lang === 'en' 
      ? `Consultation with ${member.nameEn} (${member.roleEn})`
      : `${member.nameBn}-এর সাথে পরামর্শ ও সাক্ষাৎ`;
    onOpenPreReg(title);
  };

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        
        {/* Left Decorative & Info Card */}
        <div className="lg:col-span-5 relative">
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-[#E5E7EB] relative z-10">
            <div className="bg-[#0284C7] text-white rounded-2xl p-8 sm:p-10 text-center shadow-inner">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 border border-[#BAE6FD] rounded-2xl shadow-sm flex items-center justify-center text-[#0284C7] text-3xl">
                <HeartHandshake className="w-9 h-9 text-[#0284C7]" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {lang === 'en' ? 'AL MAMUN HAZZ KAFELA' : 'আল মামুন হজ্ব কাফেলা'}
              </h4>
              <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
                {lang === 'en'
                  ? 'Dedicated to your spiritual peace, safety, and comfortable holy journey in Khulna.'
                  : 'পবিত্র মক্কা ও মদিনায় হাজীদের আত্মিক প্রশান্তি ও নির্ভরযোগ্য সুন্নাহভিত্তিক সেবায় নিবেদিত।'}
              </p>
              <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-center gap-6 text-left">
                <div>
                  <div className="text-lg font-extrabold text-[#0284C7] font-mono">খুলনা</div>
                  <div className="text-[10px] text-emerald-100">
                    {lang === 'en' ? 'Power House More' : 'পাওয়ার হাউজ মোড়'}
                  </div>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div>
                  <div className="text-lg font-extrabold text-[#0284C7] font-mono">100%</div>
                  <div className="text-[10px] text-emerald-100">
                    {lang === 'en' ? 'Sunnah Guided' : 'সুন্নাহ সম্মত'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-white rounded-2xl p-4 shadow-md border border-[#E5E7EB] flex items-center gap-3 z-20">
            <div className="w-11 h-11 rounded-xl bg-[#0284C7] text-[#0284C7] font-extrabold text-lg flex items-center justify-center shadow-sm font-mono">
              11+
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-[#0369A1]">
                {lang === 'en' ? 'Years of Excellence' : 'বছরের নির্ভরযোগ্য সেবা'}
              </div>
              <div className="text-[10px] text-slate-500">
                {lang === 'en' ? 'Khulna, Bangladesh' : 'পাওয়ার হাউজ মোড়, খুলনা'}
              </div>
            </div>
          </div>
        </div>

        {/* Right Descriptive Content */}
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-1.5 bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5 text-[#0284C7]" />
            {lang === 'en' ? 'About Al Mamun Hazz Kafela' : 'আল মামুন হজ্ব কাফেলা পরিচিতি'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0369A1] tracking-tight leading-tight mb-6">
            {lang === 'en'
              ? 'Guiding thousands of families to the Two Holy Mosques with honour and care.'
              : 'পবিত্র দুই মসজিদে হাজীদের বিশ্বস্ত, সুন্নাহসম্মত ও নির্ভরযোগ্য পথপ্রদর্শক।'}
          </h2>
          <p className="text-[#334155] leading-relaxed text-sm mb-8">
            {lang === 'en'
              ? 'From the first consultation in our Khulna office to your safe return home, we provide transparent and compassionate support for every single step of your Hajj or Umrah journey. Under the continuous guidance of Shariah Consultant Mufti Amanullah, we ensure full Sunnah compliance, comfortable accommodations, and personalized care.'
              : 'খুলনার পাওয়ার হাউজ মোড় অফিসে প্রথম পরামর্শ সভা ও নিবন্ধন থেকে শুরু করে পবিত্র সফর সম্পন্ন করে দেশে নিরাপদে ফেরা পর্যন্ত প্রতিটি ধাপে আমরা নিশ্চিত করি নির্ভরযোগ্য সেবা। শরিয়াহ কনসালটেন্ট আলহাজ্ব হযরত মাওলানা মুফতী আমানুল্লাহ সাহেবের সরাসরি তত্ত্বাবধানে সহীহ তরিকায় হজ ও ওমরাহ পালনে আমরা বদ্ধপরিকর।'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-semibold text-[#334155] mb-8">
            <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#E5E7EB] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#0369A1] flex-shrink-0" />
              <span>{lang === 'en' ? 'Ministry Verified Visa & Direct Flights' : 'মন্ত্রণালয় অনুমোদিত ভিসা ও সরাসরি বিমান টিকিট'}</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#E5E7EB] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#0369A1] flex-shrink-0" />
              <span>{lang === 'en' ? 'Premium Close-to-Haram Hotels' : 'হারামের কাছে উন্নতমানের হোটেল আবাসন'}</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#E5E7EB] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#0369A1] flex-shrink-0" />
              <span>{lang === 'en' ? 'In-depth Pre-departure Training' : 'হজপূর্ব বিশেষ প্রশিক্ষণ কর্মশালা ও সহীহ বই'}</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#E5E7EB] shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-[#0369A1] flex-shrink-0" />
              <span>{lang === 'en' ? '24/7 Dedicated Mu\'allim & Doctor Team' : 'সার্বক্ষণিক অভিজ্ঞ মুয়াল্লিম ও চিকিৎসা সহায়তা'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenPreReg('General Inquiry')}
              className="bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-sm transition cursor-pointer"
            >
              {lang === 'en' ? 'Speak with our Advisor' : 'আমাদের উপদেষ্টার সাথে কথা বলুন'}
            </button>
            <a
              href="#leadership"
              className="text-xs font-bold text-[#0369A1] hover:text-[#0369A1] hover:underline flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              {lang === 'en' ? 'Meet Agency Leadership →' : 'সংস্থার পরিচালনা পর্ষদ দেখুন →'}
            </a>
          </div>
        </div>

      </div>

      {/* Agency Leadership & Key Personnel Gallery Section */}
      <div id="leadership" className="pt-10 border-t border-[#E5E7EB]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#0284C7]" />
            {lang === 'en' ? 'Agency Leadership & Key Personnel' : 'সংস্থার পরিচালনা ও বিজ্ঞ আলেম পর্ষদ'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0369A1] tracking-tight">
            {lang === 'en' 
              ? 'Experienced Leadership, Spiritual Authority & Dedicated Care'
              : 'অভিজ্ঞ পরিচালনা, শরিয়াহ বিশেষজ্ঞ ও নিবেদিত দিকনির্দেশনা'}
          </h3>
          <p className="text-xs sm:text-sm text-[#334155] mt-2 leading-relaxed">
            {lang === 'en'
              ? 'Meet the seasoned scholars, healthcare practitioners, and aviation logistics directors steering every caravan with utmost integrity and Sunnah authenticity.'
              : 'হজ ও ওমরাহর প্রতিটি ধাপকে সুন্নাহসম্মত ও নিখুঁত করতে আমাদের সার্বক্ষণিক অভিজ্ঞ পরিচালক, বিজ্ঞ আলেম ও বিশেষজ্ঞ চিকিৎসকদের পরিচিতি।'}
          </p>
        </div>

        {/* Leadership Cards Grid with Staggered Entrance Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {agencyLeadershipData.map((member, index) => {
            const isHovered = hoveredMemberId === member.id;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-[#E5E7EB] p-6 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-[#BAE6FD] transition-all duration-300 relative group"
              >
                <div>
                  {/* Photo Container with Hover-card / Popup Effect */}
                  <div 
                    className="relative mb-5"
                    onMouseEnter={() => setHoveredMemberId(member.id)}
                    onMouseLeave={() => setHoveredMemberId(null)}
                  >
                    <div className="relative w-full aspect-square max-h-56 rounded-2xl overflow-hidden bg-slate-50 border border-[#E5E7EB]">
                      <img
                        src={member.image}
                        alt={member.nameEn}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/images/scholars/khalilur-rahman.svg';
                        }}
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                      {/* Floating Experience Tag inside photo */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="bg-[#0284C7]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg border border-[#BAE6FD] flex items-center gap-1 shadow-xs">
                          <Clock className="w-3 h-3 text-[#0284C7]" />
                          <span>{member.yearsOfService}+ {lang === 'en' ? 'Yrs Service' : 'বছরের অভিজ্ঞতা'}</span>
                        </span>

                        <span className="bg-[#0284C7] text-[#0369A1] text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-xs font-mono">
                          <Users className="w-3 h-3 text-[#0369A1]" />
                          <span>{member.hajjCaravansLed}+ {lang === 'en' ? 'Caravans' : 'কাফেলা'}</span>
                        </span>
                      </div>
                    </div>

                    {/* Interactive Hover-Card Popup */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-30 inset-x-2 -bottom-2 sm:-bottom-4 bg-[#0369A1]/95 backdrop-blur-md border border-[#BAE6FD] text-white p-3.5 rounded-2xl shadow-2xl pointer-events-none"
                        >
                          <div className="flex items-center justify-between pb-2 border-b border-emerald-800 mb-2">
                            <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#0284C7] flex items-center gap-1">
                              <Compass className="w-3 h-3" />
                              {lang === 'en' ? 'Guiding Profile & Record' : 'অভিজ্ঞতা ও খিদমত রেকর্ড'}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-300 font-bold">
                              {member.hajjCaravansLed}+ {lang === 'en' ? 'Hajj Groups' : 'হজ কাফেলা'}
                            </span>
                          </div>

                          <p className="text-[11px] text-emerald-100 leading-tight mb-2">
                            {lang === 'en'
                              ? `${member.yearsOfService}+ continuous years serving Bangladeshi pilgrims directly in Makkah, Mina & Madinah.`
                              : `টানা ${member.yearsOfService}+ বছর ধরে মক্কা, মিনা ও মদিনায় হাজীদের সার্বক্ষণিক সেবা প্রদানে নিয়োজিত।`}
                          </p>

                          <div className="flex flex-wrap gap-1">
                            {(lang === 'en' ? member.specialtiesEn : member.specialtiesBn).slice(0, 2).map((spec, i) => (
                              <span key={i} className="text-[9px] bg-[#0284C7] border border-[#BAE6FD] text-emerald-100 px-2 py-0.5 rounded-md font-medium">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Header & Badges */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {lang === 'en' ? member.nameEn : member.nameBn}
                      </h4>
                      <p className="text-xs font-semibold text-[#0369A1] mt-0.5">
                        {lang === 'en' ? member.roleEn : member.roleBn}
                      </p>
                    </div>

                    {/* Verified Credentials Badge */}
                    {member.hasVerifiedCertificate && (
                      <button
                        onClick={() => setSelectedCertMember(member)}
                        title={lang === 'en' ? 'View Official MORA Certificate' : 'মন্ত্রণালয় সনদ দেখুন'}
                        className="flex-shrink-0 bg-[#F0F9FF] hover:bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] text-[10px] font-extrabold px-2.5 py-1 rounded-xl transition flex items-center gap-1 shadow-2xs cursor-pointer"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                        <span>{lang === 'en' ? 'Verified Credential' : 'অনুমোদিত সনদ'}</span>
                      </button>
                    )}
                  </div>

                  {/* Short Bio */}
                  <p className="text-xs text-[#334155] leading-relaxed mb-4 line-clamp-3">
                    {lang === 'en' ? member.bioEn : member.bioBn}
                  </p>

                  {/* Credentials / Accreditations Bullet List */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-5">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#0369A1] mb-1.5 flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 text-[#0284C7]" />
                      <span>{lang === 'en' ? 'Key Credentials & Certifications' : 'যোগ্যতা ও অনুমোদনসমূহ'}</span>
                    </div>
                    {(lang === 'en' ? member.credentialsEn : member.credentialsBn).slice(0, 3).map((cred, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-[#334155]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleDirectInquiry(member)}
                    className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold py-2.5 px-3 rounded-xl transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Direct Inquiry' : 'সরাসরি পরামর্শ'}</span>
                  </button>

                  {member.hasVerifiedCertificate && (
                    <button
                      onClick={() => setSelectedCertMember(member)}
                      className="bg-[#F0F9FF] hover:bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] text-xs font-bold p-2.5 rounded-xl transition flex items-center justify-center cursor-pointer"
                      title={lang === 'en' ? 'View Certificate' : 'সনদপত্র দেখুন'}
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#0284C7]" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Official Verified Certificate Modal */}
      <VerifiedCertificateModal
        lang={lang}
        isOpen={Boolean(selectedCertMember)}
        onClose={() => setSelectedCertMember(null)}
        member={selectedCertMember}
      />
    </section>
  );
};

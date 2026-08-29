import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Video, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  MapPin, 
  X, 
  ShieldCheck, 
  Users, 
  Share2, 
  ArrowRight, 
  Quote,
  Film,
  Award,
  Clock
} from 'lucide-react';
import { Language, VideoTestimonial } from '../types';
import { videoTestimonialsData } from '../data/videoTestimonials';

interface PilgrimVideoTestimonialSectionProps {
  lang: Language;
  onOpenPreReg: (packageName?: string) => void;
}

export const PilgrimVideoTestimonialSection: React.FC<PilgrimVideoTestimonialSectionProps> = ({
  lang,
  onOpenPreReg,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const categories = [
    { id: 'all', nameEn: 'All Video Testimonials', nameBn: 'সকল ভিডিও অভিজ্ঞতা' },
    { id: 'hajj_vip', nameEn: 'VIP Hajj Caravans', nameBn: 'ভিআইপি হজ কাফেলা' },
    { id: 'hajj_family', nameEn: 'Family & Groups', nameBn: 'পারিবারিক হজ গ্রুপ' },
    { id: 'elderly_care', nameEn: 'Senior Pilgrim Care', nameBn: 'প্রবীণ হাজীদের সেবা' },
    { id: 'umrah', nameEn: 'Umrah & Ziyarah', nameBn: 'ওমরাহ ও জিয়ারত' },
  ];

  const filteredVideos = activeCategory === 'all'
    ? videoTestimonialsData
    : videoTestimonialsData.filter((v) => v.category === activeCategory);

  const featuredVideo = videoTestimonialsData[0];

  const handleShareVideo = (video: VideoTestimonial, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedId(video.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#F0F9FF]/40 to-[#F8FAFC] border-t border-b border-[#BAE6FD]/60 relative overflow-hidden">
      <span id="video-testimonials" className="absolute -top-24 left-0 pointer-events-none opacity-0" aria-hidden="true" />
      {/* Background motif */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E0F2FE] border border-[#BAE6FD] px-3.5 py-1 rounded-full text-xs font-bold text-[#0369A1] shadow-xs mb-3">
            <Film className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>
              {lang === 'en'
                ? '🎥 Authentic Social Proof & Pilgrim Stories'
                : '🎥 হাজীদের বাস্তব ভিডিও সাক্ষাৎকার ও অভিজ্ঞতা'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0369A1] tracking-tight leading-tight mb-3">
            {lang === 'en'
              ? 'Hear directly from our respected pilgrims'
              : 'আমাদের সম্মানিত হাজীদের মুখে শুনুন সরাসরি অভিজ্ঞতা'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'en'
              ? 'Real recorded video interviews from Makkah, Madinah, Mina, and Khulna detailing hotel stays, scholar guidance, Bengali catering, and senior citizen assistance.'
              : 'মক্কা, মদিনা, মিনা তাঁবু ও খুলনায় রেকর্ডকৃত প্রত্যক্ষ ভিডিও বার্তা — আবাসন, সার্বক্ষণিক আলেমদের দিকনির্দেশনা, দেশীয় খাবার ও প্রবীণদের সেবার বাস্তব প্রমাণ।'}
          </p>

          {/* Google Review and Trust Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-4 pt-3 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1 text-[#0284C7]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#0284C7] text-[#0284C7]" />
              ))}
              <span className="text-slate-800 font-bold ml-1">4.9 / 5.0</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-[#0369A1]">
              <Users className="w-4 h-4 text-[#0284C7]" />
              <span>{lang === 'en' ? '50+ Recorded Group Reviews' : '৫০+ ধারণকৃত গ্রুপ ভিডিও'}</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 text-emerald-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'en' ? '100% Genuine & Unscripted' : '১০০% বাস্তব ও অকৃত্রিম প্রতিক্রিয়া'}</span>
            </div>
          </div>
        </div>

        {/* 1. SPOTLIGHT FEATURED VIDEO HERO BANNER */}
        <div className="mb-12 bg-white rounded-3xl border border-[#BAE6FD] shadow-md hover:shadow-lg transition-all overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left/Top: High-Impact Video Thumbnail & Play Trigger */}
            <div 
              onClick={() => setSelectedVideo(featuredVideo)}
              className="lg:col-span-7 relative min-h-[280px] sm:min-h-[360px] bg-slate-900 cursor-pointer group overflow-hidden"
            >
              <img 
                src={featuredVideo.thumbnailUrl} 
                alt={featuredVideo.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

              {/* Top Video Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 bg-red-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-xs">
                  <Video className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Featured Video Testimony' : 'বিশেষ ভিডিও সাক্ষ্য'}</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border border-white/20">
                  <Clock className="w-3 h-3 text-sky-400" />
                  <span>{featuredVideo.duration} min</span>
                </span>
              </div>

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#0284C7] opacity-60"></span>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0284C7] group-hover:bg-[#0369A1] text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all border-2 border-white">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1 text-white" />
                  </div>
                </div>
              </div>

              {/* Bottom Video Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-bold text-sky-300 flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{lang === 'en' ? featuredVideo.locationEn : featuredVideo.locationBn}</span>
                  <span className="text-white/40">•</span>
                  <span>{lang === 'en' ? featuredVideo.groupEn : featuredVideo.groupBn}</span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold line-clamp-1">
                  {featuredVideo.name}
                </h3>
              </div>
            </div>

            {/* Right/Bottom: Story Highlights & Quote Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#F0F9FF]/50 to-white">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-[#E0F2FE] text-[#0369A1] text-xs font-bold px-3 py-1 rounded-lg border border-[#BAE6FD]">
                    {lang === 'en' ? featuredVideo.verifiedBadgeEn : featuredVideo.verifiedBadgeBn}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(featuredVideo.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="w-7 h-7 text-[#0284C7]/30 mb-2" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{lang === 'en' ? featuredVideo.quoteEn : featuredVideo.quoteBn}"
                  </p>
                </div>

                {/* Key Highlight Pills */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {lang === 'en' ? 'Package Highlights Experienced:' : 'প্যাকেজের মূল অভিজ্ঞতা:'}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {(lang === 'en' ? featuredVideo.keyHighlightsEn : featuredVideo.keyHighlightsBn).map((hl, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center gap-1 bg-white border border-[#BAE6FD] text-[#0369A1] text-[11px] font-medium px-2.5 py-1 rounded-md shadow-2xs"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#0284C7] flex-shrink-0" />
                        <span>{hl}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedVideo(featuredVideo)}
                  className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{lang === 'en' ? 'Watch Full Interview' : 'সম্পূর্ণ সাক্ষাৎকার দেখুন'}</span>
                </button>

                <button
                  onClick={() => onOpenPreReg(featuredVideo.groupEn)}
                  className="bg-white hover:bg-slate-50 text-[#0369A1] border border-[#BAE6FD] font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>{lang === 'en' ? 'Inquire This Group' : 'এই গ্রুপ সম্পর্কে জানুন'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0284C7]" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2. CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-[#F0F9FF] border border-[#BAE6FD]/70 hover:text-[#0369A1]'
                }`}
              >
                <span>{lang === 'en' ? cat.nameEn : cat.nameBn}</span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white ml-1 animate-pulse" />}
              </button>
            );
          })}
        </div>

        {/* 3. RESPONSIVE GRID OF VIDEO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              className="bg-white rounded-3xl border border-[#BAE6FD]/70 hover:border-[#0284C7] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
            >
              {/* Card Thumbnail Box with Play Overlay */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                <img
                  src={item.thumbnailUrl}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30"></div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/70 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border border-white/20 flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5 text-sky-400" />
                    {item.duration}
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#0284C7]/90 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                    {lang === 'en' ? item.categoryLabelEn : item.categoryLabelBn}
                  </span>
                </div>

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#0284C7]/90 group-hover:bg-[#0284C7] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all border border-white/60">
                    <Play className="w-5 h-5 fill-white ml-0.5 text-white" />
                  </div>
                </div>

                {/* Group Year Tag at Bottom */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px]">
                  <span className="font-semibold text-sky-300 truncate max-w-[200px]">
                    {lang === 'en' ? item.groupEn : item.groupBn}
                  </span>
                  <span className="font-mono bg-white/20 px-1.5 py-0.5 rounded text-[10px]">
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Pilgrim Name & Verified Check */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-[#0284C7] transition-colors flex items-center gap-1.5">
                        <span>{item.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                      </h4>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{lang === 'en' ? item.locationEn : item.locationBn}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-0.5 text-amber-500 flex-shrink-0">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Pilgrim Quote Preview */}
                  <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-3 mb-4">
                    "{lang === 'en' ? item.quoteEn : item.quoteBn}"
                  </p>

                  {/* Highlight Chips */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {(lang === 'en' ? item.keyHighlightsEn : item.keyHighlightsBn).slice(0, 2).map((hl, i) => (
                      <span 
                        key={i}
                        className="bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] text-[10px] font-medium px-2 py-0.5 rounded-md"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0284C7] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>{lang === 'en' ? 'Watch Interview' : 'ভিডিও দেখুন'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>

                  <button
                    type="button"
                    onClick={(e) => handleShareVideo(item, e)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-[#0284C7] hover:bg-[#F0F9FF] transition"
                    title={copiedId === item.id ? (lang === 'en' ? 'Link Copied!' : 'লিংক কপি হয়েছে!') : (lang === 'en' ? 'Share Video' : 'ভিডিও শেয়ার করুন')}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. BOTTOM TRUST BADGES / CONSULTATION CALLOUT */}
        <div className="mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-[#BAE6FD] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                {lang === 'en'
                  ? 'Want to speak with previous pilgrims from your area?'
                  : 'আপনার এলাকার সাবেক হাজীদের সাথে সরাসরি কথা বলতে চান?'}
              </h4>
              <p className="text-xs text-slate-500">
                {lang === 'en'
                  ? 'Visit our Khulna Power House More office to meet past group coordinators and view complete caravan photo & video archives.'
                  : 'খুলনা পাওয়ার হাউজ মোড় অফিসে এসে সাবেক কাফেলা লিডারদের সাথে সরাসরি দেখা করুন ও তথ্য নিন।'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenPreReg('Pilgrim Testimony Direct Consultation')}
            className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>{lang === 'en' ? 'Talk to a Pilgrim Advisor' : 'হজ পরামর্শকের সাথে কথা বলুন'}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

      </div>

      {/* 5. INTERACTIVE VIDEO PLAYBACK MODAL */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="bg-slate-900 border border-white/20 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl text-white relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-slate-950/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white flex items-center gap-1.5">
                    <span>{selectedVideo.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  </h3>
                  <p className="text-xs text-slate-400">
                    {lang === 'en' ? selectedVideo.locationEn : selectedVideo.locationBn} • {lang === 'en' ? selectedVideo.groupEn : selectedVideo.groupBn} ({selectedVideo.year})
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded 16:9 Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                title={selectedVideo.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Footer with Story Note & CTA */}
            <div className="p-4 sm:p-5 bg-slate-950/90 space-y-3">
              <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{lang === 'en' ? selectedVideo.quoteEn : selectedVideo.quoteBn}"
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-sky-300">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span>{lang === 'en' ? selectedVideo.verifiedBadgeEn : selectedVideo.verifiedBadgeBn}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => handleShareVideo(selectedVideo, e)}
                    className="bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-xs px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>
                      {copiedId === selectedVideo.id 
                        ? (lang === 'en' ? 'Copied!' : 'কপি হয়েছে!') 
                        : (lang === 'en' ? 'Share Video' : 'শেয়ার করুন')}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const group = selectedVideo.groupEn;
                      setSelectedVideo(null);
                      onOpenPreReg(group);
                    }}
                    className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs px-4 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>{lang === 'en' ? 'Book Similar Package' : 'প্যাকেজ বুকিং করুন'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

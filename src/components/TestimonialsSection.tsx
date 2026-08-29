import React, { useState, useEffect } from 'react';
import { Quote, Star, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { testimonialsData } from '../data/blogArticles';
import { TestimonialCardSkeleton } from './skeletons/TestimonialCardSkeleton';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-[#F8FAFC] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {lang === 'en' ? 'Verified Reviews' : 'হাজীদের মতামত ও রিভিউ'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0369A1] mt-2 tracking-tight">
            {lang === 'en' ? 'What our pilgrims say' : 'আমাদের সম্মানিত হাজীদের অভিজ্ঞতা'}
          </h2>
          <div className="flex items-center justify-center gap-1.5 text-[#0284C7] text-sm mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#0284C7] text-[#0284C7]" />
            ))}
            <span className="text-slate-600 text-xs font-semibold ml-1.5">
              {lang === 'en' ? '4.9 ★ based on 250+ Google Reviews' : '৪.৯ ★ ২৫০টিরও বেশি গুগল রিভিউ ভিত্তিক'}
            </span>
          </div>
        </div>

        {/* Testimonials Cards Grid or Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading ? (
            <TestimonialCardSkeleton count={4} />
          ) : (
            testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-7 rounded-3xl border border-[#E5E7EB] shadow-2xs flex flex-col justify-between hover:border-[#0284C7] transition duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#0284C7]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#0284C7] text-[#0284C7]" />
                      ))}
                    </div>
                    <span className="bg-[#F0F9FF] text-[#0369A1] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#BAE6FD]">
                      {lang === 'en' ? item.packageTypeEn : item.packageTypeBn} • {item.year}
                    </span>
                  </div>

                  <Quote className="w-7 h-7 text-[#0284C7]/40 mb-3" />

                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic mb-6">
                    "{lang === 'en' ? item.textEn : item.textBn}"
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-4">
                  <div>
                    <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0369A1]" />
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {lang === 'en' ? item.locationEn : item.locationBn}
                    </div>
                  </div>

                  <div className="text-[11px] font-bold text-[#0369A1] bg-[#F0F9FF] border border-[#BAE6FD] px-2.5 py-1 rounded-lg">
                    {lang === 'en' ? 'Verified Haji' : 'যাচাইকৃত হাজী'}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};


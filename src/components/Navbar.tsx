import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, PhoneCall, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { BrandLogo } from './BrandLogo';
import { getGeneralWhatsAppLink } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/inquiryTracker';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenPreReg: (pkg?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenPreReg }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { href: '#home', labelEn: 'Home', labelBn: 'হোম' },
    { href: '#about', labelEn: 'About Us', labelBn: 'আমাদের পরিচিতি' },
    { href: '#hajj-packages', labelEn: 'Hajj Packages', labelBn: 'হজ প্যাকেজ' },
    { href: '#umrah-packages', labelEn: 'Umrah Packages', labelBn: 'ওমরাহ প্যাকেজ' },
    { href: '#gallery', labelEn: 'Gallery', labelBn: 'গ্যালারি' },
    { href: '#blog', labelEn: 'Blog', labelBn: 'ব্লগ' },
    { href: '#contact', labelEn: 'Contact', labelBn: 'যোগাযোগ' },
  ];

  // Track active section for indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const targetId = navLinks[i].href.replace('#', '');
        const section = document.getElementById(targetId);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setActiveSection(href);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-40 border-b border-[#E2E8F0] shadow-xs transition-colors text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand Logo & Title */}
          <a href="#home" className="flex items-center gap-3.5 group shrink-0 py-1">
            <BrandLogo className="h-14 md:h-16 w-auto object-contain shrink-0" />
            <div>
              <div className="text-lg sm:text-xl font-black text-[#0369A1] tracking-tight leading-none">
                {lang === 'en' ? (
                  <>AL MAMUN<span className="text-[#0284C7] ml-1.5 font-bold">HAJJ KAFELA</span></>
                ) : (
                  <>আল মামুন<span className="text-[#0284C7] ml-1.5 font-bold">হজ্ব কাফেলা</span></>
                )}
              </div>
              <div className="text-[11px] font-bold text-slate-500 tracking-wider uppercase mt-1">
                {lang === 'en' ? 'Khulna, Bangladesh' : 'পাওয়ার হাউজ মোড়, খুলনা'}
              </div>
            </div>
          </a>

          {/* Center: Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 2xl:gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors py-1.5 px-0.5 relative whitespace-nowrap font-medium text-sm ${
                    isActive 
                      ? 'text-[#0284C7] font-semibold' 
                      : 'text-slate-700 hover:text-sky-600'
                  }`}
                >
                  {lang === 'en' ? link.labelEn : link.labelBn}
                  {/* Active / Hover subtle bottom indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#0284C7] rounded-full transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Right: Controls & CTAs */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              id="langToggleBtn"
              className="flex items-center gap-1.5 text-xs font-bold text-[#0369A1] bg-[#F0F9FF] hover:bg-[#0284C7] hover:text-white border border-[#BAE6FD] px-3 py-2 rounded-xl transition-colors cursor-pointer"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#0284C7] group-hover:text-white" />
              <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            {/* Direct WhatsApp Quick Link */}
            <a
              href={getGeneralWhatsAppLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick({
                  id: 'navbar_general_inquiry',
                  nameEn: 'Navbar Direct Inquiry',
                  nameBn: 'ন্যাভবার সরাসরি অনুসন্ধান',
                  type: 'general',
                  source: 'navbar_desktop',
                });
              }}
              className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-2 rounded-xl transition cursor-pointer"
              title={lang === 'en' ? 'WhatsApp 01712-864077' : 'হোয়াটসঅ্যাপে যোগাযোগ (০১৭১২-৮৬৪০৭৭)'}
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden md:inline">{lang === 'en' ? 'WhatsApp' : 'হোয়াটসঅ্যাপ'}</span>
            </a>

            {/* Book Consultation CTA Button */}
            <button
              onClick={() => onOpenPreReg()}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-xs hover:shadow-md transition cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-200" />
              <span>{lang === 'en' ? 'Book Consultation' : 'পরামর্শের আবেদন'}</span>
            </button>

            {/* Mobile Menu Toggle (Visible only on mobile/tablet < lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-[#0284C7] hover:bg-slate-100 rounded-lg transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2 text-slate-800">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm transition ${
                  isActive 
                    ? 'bg-[#E0F2FE] text-[#0369A1] font-bold' 
                    : 'font-medium text-slate-700 hover:bg-[#F0F9FF] hover:text-sky-600'
                }`}
              >
                {lang === 'en' ? link.labelEn : link.labelBn}
              </a>
            );
          })}
          <div className="pt-3 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPreReg();
              }}
              className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold py-3 rounded-xl shadow-sm text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-sky-200" />
              <span>{lang === 'en' ? 'Book Consultation / Pre-Register' : 'পরামর্শের আবেদন / প্রাক-নিবন্ধন'}</span>
            </button>
            <a
              href={getGeneralWhatsAppLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick({
                  id: 'navbar_mobile_inquiry',
                  nameEn: 'Mobile Menu Direct Inquiry',
                  nameBn: 'মোবাইল মেনু সরাসরি অনুসন্ধান',
                  type: 'general',
                  source: 'navbar_mobile',
                });
                setMobileMenuOpen(false);
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 rounded-xl shadow-xs text-center flex items-center justify-center gap-2 cursor-pointer transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'en' ? 'WhatsApp (01712-864077)' : 'হোয়াটসঅ্যাপে যোগাযোগ (০১৭১২-৮৬৪০৭৭)'}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};


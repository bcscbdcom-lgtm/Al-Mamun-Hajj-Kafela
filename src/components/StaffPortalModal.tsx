import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  CheckCircle2,
  Megaphone,
  Key,
  LogOut,
  TrendingUp,
  BarChart3,
  Flame,
  Download,
  RotateCcw,
  Plus,
  MessageCircle,
  Clock,
  Filter,
  Check,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from 'recharts';
import { Language, NoticeItem } from '../types';
import { getDynamicSeasonRange } from '../utils/dateUtils';
import {
  getInquiryTrackerData,
  trackWhatsAppClick,
  resetInquiryTrackerData,
  exportInquiryDataAsCSV,
  INQUIRY_TRACKED_EVENT,
  InquiryTrackerData,
  InquiryPackageType,
  InquiryCountRecord,
} from '../utils/inquiryTracker';
import { toBengaliNumber } from '../utils/dateFormatter';

interface StaffPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  currentNotice: NoticeItem | null;
  onSaveNotice: (notice: NoticeItem | null) => void;
}

const BAR_COLORS = [
  '#0284C7',
  '#10B981',
  '#3B82F6',
  '#F59E0B',
  '#8B5CF6',
  '#EC4899',
  '#06B6D4',
  '#14B8A6',
  '#6366F1',
  '#84CC16',
];

export const StaffPortalModal: React.FC<StaffPortalModalProps> = ({
  isOpen,
  onClose,
  lang,
  currentNotice,
  onSaveNotice,
}) => {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState<'analytics' | 'logs' | 'broadcast'>('analytics');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'hajj' | 'umrah' | 'general'>('all');
  const [trackerData, setTrackerData] = useState<InquiryTrackerData>(getInquiryTrackerData);
  const [confirmResetOpen, setConfirmResetOpen] = useState(false);
  const [justSimulatedId, setJustSimulatedId] = useState<string | null>(null);

  const [noticeEn, setNoticeEn] = useState(
    currentNotice?.textEn || `Hajj ${getDynamicSeasonRange('en')} Pre-Registration is now open! Limited slots available.`
  );
  const [noticeBn, setNoticeBn] = useState(
    currentNotice?.textBn || `হজ ${getDynamicSeasonRange('bn')} এর প্রাক-নিবন্ধন চলছে! সীমিত আসন সংখ্যা।`
  );
  const [isActive, setIsActive] = useState(currentNotice ? currentNotice.active : true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Synchronize tracker state live from localStorage and custom events
  useEffect(() => {
    const handleUpdate = () => {
      setTrackerData(getInquiryTrackerData());
    };
    window.addEventListener(INQUIRY_TRACKED_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener(INQUIRY_TRACKED_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.trim() === 'staff123' || pin.trim() === 'admin123') {
      setIsAuthenticated(true);
      setErrorMsg('');
      setTrackerData(getInquiryTrackerData());
    } else {
      setErrorMsg(
        lang === 'en'
          ? 'Incorrect PIN! Try "admin123" or "staff123"'
          : 'ভুল পিন নম্বর! (admin123 বা staff123 ব্যবহার করুন)'
      );
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: NoticeItem = {
      id: 'staff-notice-' + Date.now(),
      textEn: noticeEn,
      textBn: noticeBn,
      active: isActive,
      type: 'urgent',
      date: new Date().toISOString(),
    };
    onSaveNotice(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleDisableNotice = () => {
    onSaveNotice(null);
    setIsActive(false);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPin('');
    onClose();
  };

  const handleSimulateClick = (pkgId: string, nameEn: string, nameBn: string, type: InquiryPackageType) => {
    trackWhatsAppClick({
      id: pkgId,
      nameEn,
      nameBn,
      type,
      source: 'staff_test_simulation',
    });
    setJustSimulatedId(pkgId);
    setTimeout(() => setJustSimulatedId(null), 1500);
  };

  const handleResetData = (toZero: boolean = false) => {
    resetInquiryTrackerData(toZero);
    setTrackerData(getInquiryTrackerData());
    setConfirmResetOpen(false);
  };

  // Derive filtered and sorted data
  const allRecords: InquiryCountRecord[] = Object.values(trackerData.records || {});
  const filteredRecords = allRecords.filter((rec) => {
    if (categoryFilter === 'all') return true;
    if (categoryFilter === 'general') return rec.type === 'general' || rec.type === 'scholar';
    return rec.type === categoryFilter;
  });

  const sortedRecords = [...filteredRecords].sort((a, b) => b.clicks - a.clicks);

  const totalClicks = trackerData.totalClicks || 0;
  const hajjClicks = allRecords.filter((r) => r.type === 'hajj').reduce((s, r) => s + r.clicks, 0);
  const umrahClicks = allRecords.filter((r) => r.type === 'umrah').reduce((s, r) => s + r.clicks, 0);
  const topRecord: InquiryCountRecord | undefined = [...allRecords].sort((a, b) => b.clicks - a.clicks)[0];

  // Chart data formatting
  const chartData = sortedRecords.slice(0, 8).map((rec, index) => ({
    id: rec.id,
    name: lang === 'en' ? rec.nameEn : rec.nameBn,
    inquiries: rec.clicks,
    color: BAR_COLORS[index % BAR_COLORS.length],
    type: rec.type,
    lastClickedAt: rec.lastClickedAt,
  }));

  const formatTimeAgo = (isoString?: string) => {
    if (!isoString) return lang === 'en' ? 'Never' : 'কখনো নয়';
    const diffMs = Date.now() - new Date(isoString).getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    if (diffMins < 1) return lang === 'en' ? 'Just now' : 'এইমাত্র';
    if (diffMins < 60) {
      return lang === 'en'
        ? `${diffMins}m ago`
        : `${toBengaliNumber(diffMins)} মিনিট আগে`;
    }
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) {
      return lang === 'en'
        ? `${diffHours}h ago`
        : `${toBengaliNumber(diffHours)} ঘণ্টা আগে`;
    }
    const days = Math.floor(diffHours / 24);
    return lang === 'en'
      ? `${days}d ago`
      : `${toBengaliNumber(days)} দিন আগে`;
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-backdrop-fade">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-5 sm:p-7 shadow-2xl relative my-6 max-h-[92vh] overflow-y-auto border border-[#E5E7EB] text-slate-900 animate-modal-slide-up">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!isAuthenticated ? (
          <div className="max-w-md mx-auto py-6">
            <div className="w-12 h-12 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center mx-auto mb-4 shadow-xs">
              <Lock className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-extrabold text-[#0369A1] text-center">
              {lang === 'en' ? 'Staff & Admin Portal' : 'অফিস স্টাফ ও অ্যাডমিন প্যানেল'}
            </h3>
            <p className="text-xs text-[#334155] text-center mt-1 mb-6">
              {lang === 'en'
                ? 'Enter PIN to view WhatsApp Package Inquiry Analytics & live broadcast manager.'
                : 'প্যাকেজ অনুসন্ধান ট্র্যাকার ও জরুরি নোটিশ ম্যানেজ করতে সিকিউরিটি পিন দিন।'}
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'en' ? 'Security PIN Code' : 'সিকিউরিটি পিন কোড'}
                </label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={pin}
                    onChange={(e) => {
                      setPin(e.target.value);
                      setErrorMsg('');
                    }}
                    placeholder="Enter PIN (admin123)"
                    className="w-full border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:ring-2 focus:ring-[#0284C7] outline-none bg-[#F8FAFC]"
                  />
                  <Key className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                </div>
                {errorMsg && <p className="text-[11px] text-rose-500 mt-1 font-semibold">{errorMsg}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold py-3 rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-white" />
                <span>{lang === 'en' ? 'Unlock Portal' : 'লগইন করুন'}</span>
              </button>

              <div className="text-[10px] text-slate-400 text-center">
                Hint: Use <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-600">admin123</code> or <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-600">staff123</code>
              </div>
            </form>
          </div>
        ) : (
          <div>
            {/* Authenticated Header & Navigation Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E7EB] pb-4 mb-5 pr-8">
              <div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-[#0369A1] text-lg">
                    {lang === 'en' ? 'Staff Command & WhatsApp Tracker' : 'স্টাফ কমান্ড ও হোয়াটসঅ্যাপ ট্র্যাকার'}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === 'en'
                    ? 'Track real-time package inquiries logged via WhatsApp buttons stored in localStorage.'
                    : 'ওয়েবসাইটের হোয়াটসঅ্যাপ বাটনের মাধ্যমে প্রাপ্ত রিয়েল-টাইম প্যাকেজ অনুসন্ধানের লাইভ হিসাব।'}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {/* Tab Switcher */}
                <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-[#E5E7EB]">
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                      activeTab === 'analytics'
                        ? 'bg-[#0284C7] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Popularity' : 'জনপ্রিয়তা'}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('logs')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                      activeTab === 'logs'
                        ? 'bg-[#0284C7] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Click Stream' : 'লাইভ লগ'}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('broadcast')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                      activeTab === 'broadcast'
                        ? 'bg-[#0284C7] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Megaphone className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Notice' : 'নোটিশ'}</span>
                  </button>
                </div>

                <button
                  onClick={handleLogout}
                  className="text-xs text-rose-500 hover:text-rose-700 p-2 rounded-xl hover:bg-rose-50 transition cursor-pointer flex items-center gap-1"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* TAB 1: Real-time Inquiry Analytics & Leaderboard */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                
                {/* Key Metric KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {/* Total Clicks */}
                  <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-[#E5E7EB]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                      <span>{lang === 'en' ? 'Total WhatsApp Clicks' : 'মোট হোয়াটসঅ্যাপ ক্লিক'}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </span>
                    <div className="text-2xl font-black text-[#0369A1] font-mono mt-0.5">
                      {lang === 'bn' ? toBengaliNumber(totalClicks) : totalClicks}
                    </div>
                    <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5 mt-0.5">
                      <TrendingUp className="w-3 h-3" />
                      {lang === 'en' ? 'Live localStorage tracker' : 'লাইভ লোকালস্টোরেজ ট্র্যাকার'}
                    </span>
                  </div>

                  {/* Hajj Package Inquiries */}
                  <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-[#E5E7EB]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {lang === 'en' ? 'Hajj Inquiries' : 'হজ প্যাকেজ আগ্রহ'}
                    </span>
                    <div className="text-2xl font-black text-sky-700 font-mono mt-0.5">
                      {lang === 'bn' ? toBengaliNumber(hajjClicks) : hajjClicks}
                    </div>
                    <span className="text-[10px] text-slate-500">
                      {totalClicks > 0 ? `${Math.round((hajjClicks / totalClicks) * 100)}% ${lang === 'en' ? 'of inquiries' : 'অংশ'}` : '0%'}
                    </span>
                  </div>

                  {/* Umrah Package Inquiries */}
                  <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-[#E5E7EB]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {lang === 'en' ? 'Umrah Inquiries' : 'ওমরাহ প্যাকেজ আগ্রহ'}
                    </span>
                    <div className="text-2xl font-black text-emerald-700 font-mono mt-0.5">
                      {lang === 'bn' ? toBengaliNumber(umrahClicks) : umrahClicks}
                    </div>
                    <span className="text-[10px] text-slate-500">
                      {totalClicks > 0 ? `${Math.round((umrahClicks / totalClicks) * 100)}% ${lang === 'en' ? 'of inquiries' : 'অংশ'}` : '0%'}
                    </span>
                  </div>

                  {/* Top Demanded Package */}
                  <div className="bg-[#F8FAFC] p-3.5 rounded-2xl border border-[#E5E7EB]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Flame className="w-3 h-3 text-amber-500" />
                      <span>{lang === 'en' ? '#1 Top Inquired' : 'শীর্ষ চাহিদাসম্পন্ন'}</span>
                    </span>
                    <div className="text-xs font-black text-[#0284C7] truncate mt-1">
                      {topRecord ? (lang === 'en' ? topRecord.nameEn : topRecord.nameBn) : '—'}
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {topRecord
                        ? `${lang === 'bn' ? toBengaliNumber(topRecord.clicks) : topRecord.clicks} ${lang === 'en' ? 'clicks' : 'ক্লিক'} (${formatTimeAgo(topRecord.lastClickedAt)})`
                        : '—'}
                    </span>
                  </div>
                </div>

                {/* Filter and Quick Action Toolbar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#F0F9FF] p-3 rounded-2xl border border-[#BAE6FD]">
                  {/* Category Filter */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1 mr-1">
                      <Filter className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{lang === 'en' ? 'Filter:' : 'ফিল্টার:'}</span>
                    </span>
                    {(
                      [
                        { id: 'all', en: 'All Items', bn: 'সকল প্যাকেজ' },
                        { id: 'hajj', en: 'Hajj Packages', bn: 'হজ প্যাকেজ' },
                        { id: 'umrah', en: 'Umrah Packages', bn: 'ওমরাহ প্যাকেজ' },
                        { id: 'general', en: 'General / Scholar', bn: 'সাধারণ / আলেম' },
                      ] as const
                    ).map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setCategoryFilter(f.id)}
                        className={`text-xs px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                          categoryFilter === f.id
                            ? 'bg-[#0284C7] text-white shadow-xs'
                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-[#BAE6FD]'
                        }`}
                      >
                        {lang === 'en' ? f.en : f.bn}
                      </button>
                    ))}
                  </div>

                  {/* Actions: Export CSV & Reset */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() => exportInquiryDataAsCSV(lang)}
                      className="bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-300 transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
                      title={lang === 'en' ? 'Export CSV Spreadsheet' : 'সিএসভি ডাউনলোড'}
                    >
                      <Download className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{lang === 'en' ? 'Export CSV' : 'এক্সপোর্ট CSV'}</span>
                    </button>

                    <button
                      onClick={() => setConfirmResetOpen(!confirmResetOpen)}
                      className="bg-white hover:bg-rose-50 text-rose-600 text-xs font-bold px-3 py-1.5 rounded-xl border border-rose-200 transition flex items-center gap-1.5 shadow-2xs cursor-pointer"
                      title={lang === 'en' ? 'Reset Tracking Data' : 'রিসেট অপশন'}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Reset' : 'রিসেট'}</span>
                    </button>
                  </div>
                </div>

                {/* Confirm Reset Dropdown Banner */}
                {confirmResetOpen && (
                  <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-xs text-rose-800 space-y-2 animate-modal-slide-up">
                    <p className="font-bold">
                      {lang === 'en'
                        ? 'Do you want to reset the WhatsApp inquiry counters stored in localStorage?'
                        : 'আপনি কি লোকালস্টোরেজে সংরক্ষিত হোয়াটসঅ্যাপ অনুসন্ধানের হিসাব রিসেট করতে চান?'}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleResetData(false)}
                        className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-3 py-1.5 rounded-xl cursor-pointer"
                      >
                        {lang === 'en' ? 'Reset to Default Baseline' : 'ডিফল্ট বেইসলাইনে ফিরুন'}
                      </button>
                      <button
                        onClick={() => handleResetData(true)}
                        className="bg-white hover:bg-rose-100 text-rose-700 font-bold px-3 py-1.5 rounded-xl border border-rose-300 cursor-pointer"
                      >
                        {lang === 'en' ? 'Clear All to Zero' : 'সব শূন্য (০) করুন'}
                      </button>
                      <button
                        onClick={() => setConfirmResetOpen(false)}
                        className="text-slate-500 hover:text-slate-700 px-3 py-1.5 font-semibold cursor-pointer"
                      >
                        {lang === 'en' ? 'Cancel' : 'বাতিল'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Interactive Recharts Popularity Chart */}
                <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl border border-[#E5E7EB]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-2">
                        <span>{lang === 'en' ? 'Package Popularity by WhatsApp Inquiries' : 'হোয়াটসঅ্যাপ অনুসন্ধানের ভিত্তিতে প্যাকেজের চাহিদা'}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {lang === 'en' ? 'Live' : 'লাইভ'}
                        </span>
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {lang === 'en'
                          ? 'Real-time click counts from pilgrims clicking WhatsApp booking and inquiry buttons'
                          : 'গ্রাহকদের হোয়াটসঅ্যাপ বাটন ক্লিকের উপর ভিত্তি করে প্যাকেজের আগ্রহের তুলনামূলক চিত্র'}
                      </p>
                    </div>

                    <span className="text-[11px] font-mono font-bold text-slate-500 hidden sm:inline-block">
                      {lang === 'en' ? 'Top Inquiries' : 'সর্বোচ্চ আগ্রহ'}
                    </span>
                  </div>

                  <div className="w-full h-64 sm:h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 35 }}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                        <XAxis
                          dataKey="name"
                          interval={0}
                          tick={({ x, y, payload }) => (
                            <g transform={`translate(${x},${y})`}>
                              <text
                                x={0}
                                y={0}
                                dy={12}
                                textAnchor="end"
                                fill="#475569"
                                transform="rotate(-25)"
                                fontSize={10}
                                fontWeight={600}
                              >
                                {payload.value.length > 16 ? payload.value.slice(0, 16) + '…' : payload.value}
                              </text>
                            </g>
                          )}
                        />
                        <YAxis tick={{ fontSize: 10, fill: '#64748b' }} allowDecimals={false} />
                        <Tooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              const share = totalClicks > 0 ? ((data.inquiries / totalClicks) * 100).toFixed(1) : '0';
                              return (
                                <div className="bg-white text-slate-900 p-3 rounded-xl border border-[#E5E7EB] shadow-xl text-xs space-y-1">
                                  <div className="font-extrabold text-[#0369A1]">
                                    {data.name}
                                  </div>
                                  <div className="text-slate-600 flex items-center justify-between gap-4">
                                    <span>{lang === 'en' ? 'Inquiry Clicks:' : 'অনুসন্ধান ক্লিক:'}</span>
                                    <strong className="text-slate-900 font-mono">
                                      {lang === 'bn' ? toBengaliNumber(data.inquiries) : data.inquiries}
                                    </strong>
                                  </div>
                                  <div className="text-slate-600 flex items-center justify-between gap-4">
                                    <span>{lang === 'en' ? 'Share of Inquiries:' : 'মোট আগ্রহের অংশ:'}</span>
                                    <strong className="text-emerald-700 font-mono">{share}%</strong>
                                  </div>
                                  <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-100 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{formatTimeAgo(data.lastClickedAt)}</span>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar dataKey="inquiries" radius={[6, 6, 0, 0]}>
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Package Leaderboard Table */}
                <div className="bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] overflow-hidden">
                  <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {lang === 'en' ? 'Inquiry Leaderboard & Rankings' : 'প্যাকেজ অনুসন্ধান লিডারবোর্ড'}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {lang === 'en'
                          ? 'Ranked list of packages generating the highest pilgrim interest'
                          : 'সর্বাধিক গ্রাহক অনুসন্ধান অনুযায়ী প্যাকেজের ক্রম'}
                      </p>
                    </div>

                    <span className="text-[11px] font-semibold text-slate-500">
                      {lang === 'en'
                        ? `Showing ${sortedRecords.length} items`
                        : `${toBengaliNumber(sortedRecords.length)}টি প্যাকেজ`}
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100/80 text-slate-600 uppercase text-[10px] font-bold tracking-wider border-b border-slate-200">
                        <tr>
                          <th className="py-2.5 px-3.5">{lang === 'en' ? 'Rank' : 'র‍্যাংক'}</th>
                          <th className="py-2.5 px-3">{lang === 'en' ? 'Package Name' : 'প্যাকেজের নাম'}</th>
                          <th className="py-2.5 px-3">{lang === 'en' ? 'Category' : 'ধরণ'}</th>
                          <th className="py-2.5 px-3 text-right">{lang === 'en' ? 'Inquiries' : 'ক্লিক সংখ্যা'}</th>
                          <th className="py-2.5 px-3">{lang === 'en' ? 'Share %' : 'চাহিদার হার'}</th>
                          <th className="py-2.5 px-3">{lang === 'en' ? 'Last Inquiry' : 'সর্বশেষ আগ্রহ'}</th>
                          <th className="py-2.5 px-3 text-center">{lang === 'en' ? 'Test Action' : 'টেস্ট'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {sortedRecords.map((item, index) => {
                          const sharePct = totalClicks > 0 ? (item.clicks / totalClicks) * 100 : 0;
                          const isTop = index === 0 && item.clicks > 0;
                          return (
                            <tr
                              key={item.id}
                              className={`hover:bg-sky-50/50 transition ${
                                justSimulatedId === item.id ? 'bg-emerald-50' : ''
                              }`}
                            >
                              {/* Rank */}
                              <td className="py-3 px-3.5 font-bold">
                                {index === 0 ? (
                                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-black shadow-2xs">
                                    🥇
                                  </span>
                                ) : index === 1 ? (
                                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-black">
                                    🥈
                                  </span>
                                ) : index === 2 ? (
                                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-50 text-amber-900 text-xs font-black">
                                    🥉
                                  </span>
                                ) : (
                                  <span className="font-mono text-slate-400 text-xs pl-1.5">
                                    #{index + 1}
                                  </span>
                                )}
                              </td>

                              {/* Name */}
                              <td className="py-3 px-3">
                                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                  <span>{lang === 'en' ? item.nameEn : item.nameBn}</span>
                                  {isTop && (
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                                      {lang === 'en' ? 'Most Popular' : 'শীর্ষ চাহিদা'}
                                    </span>
                                  )}
                                </div>
                                {item.priceEn && (
                                  <div className="text-[10px] text-slate-400 font-mono">
                                    {lang === 'en' ? item.priceEn : item.priceBn}
                                  </div>
                                )}
                              </td>

                              {/* Category */}
                              <td className="py-3 px-3">
                                <span
                                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize ${
                                    item.type === 'hajj'
                                      ? 'bg-sky-100 text-sky-800 border border-sky-200'
                                      : item.type === 'umrah'
                                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                      : item.type === 'scholar'
                                      ? 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                                  }`}
                                >
                                  {item.type}
                                </span>
                              </td>

                              {/* Inquiries */}
                              <td className="py-3 px-3 text-right">
                                <span className="font-black text-slate-900 font-mono text-sm">
                                  {lang === 'bn' ? toBengaliNumber(item.clicks) : item.clicks}
                                </span>
                              </td>

                              {/* Share % Progress bar */}
                              <td className="py-3 px-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-16 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                    <div
                                      className="bg-[#0284C7] h-full rounded-full transition-all duration-500"
                                      style={{ width: `${Math.min(100, Math.max(0, sharePct))}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-[10px] font-mono text-slate-500">
                                    {sharePct.toFixed(1)}%
                                  </span>
                                </div>
                              </td>

                              {/* Last Clicked */}
                              <td className="py-3 px-3 text-slate-500 text-[11px] whitespace-nowrap">
                                {formatTimeAgo(item.lastClickedAt)}
                              </td>

                              {/* Test Click Simulation button */}
                              <td className="py-3 px-3 text-center">
                                <button
                                  onClick={() =>
                                    handleSimulateClick(
                                      item.id,
                                      item.nameEn,
                                      item.nameBn,
                                      item.type
                                    )
                                  }
                                  className="text-[10px] font-bold px-2 py-1 bg-slate-100 hover:bg-[#E0F2FE] hover:text-[#0284C7] text-slate-600 rounded-lg transition cursor-pointer border border-slate-200"
                                  title={lang === 'en' ? 'Simulate +1 inquiry click' : '+১ টেস্ট ইনকোয়ারি যোগ করুন'}
                                >
                                  +1 {lang === 'en' ? 'Test' : 'টেস্ট'}
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: Click Activity Stream / Audit Log */}
            {activeTab === 'logs' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-[#0284C7]" />
                      <span>{lang === 'en' ? 'Live WhatsApp Inquiry Click Stream' : 'লাইভ হোয়াটসঅ্যাপ ক্লিক স্ট্রিম'}</span>
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      {lang === 'en'
                        ? 'Chronological list of recent inquiry button triggers recorded across the website.'
                        : 'ওয়েবসাইটে ভিজিটরদের সাম্প্রতিক হোয়াটসঅ্যাপ বাটনে ক্লিক করার ধারাবাহিক হিস্টোরি।'}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-xl border border-slate-200 font-bold">
                    {lang === 'en'
                      ? `${trackerData.recentLogs?.length || 0} Recent Events`
                      : `${toBengaliNumber(trackerData.recentLogs?.length || 0)}টি ইভেন্ট`}
                  </span>
                </div>

                {(!trackerData.recentLogs || trackerData.recentLogs.length === 0) ? (
                  <div className="text-center py-12 bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] text-slate-400">
                    <MessageCircle className="w-8 h-8 mx-auto mb-2 opacity-40" />
                    <p className="text-xs font-semibold">
                      {lang === 'en' ? 'No inquiry clicks recorded yet.' : 'এখনো কোনো ক্লিক রেকর্ড হয়নি।'}
                    </p>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-[#E5E7EB] divide-y divide-slate-100 max-h-96 overflow-y-auto">
                    {trackerData.recentLogs.map((log) => (
                      <div
                        key={log.id}
                        className="p-3.5 flex items-center justify-between gap-3 hover:bg-slate-50/80 transition text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                              log.type === 'hajj'
                                ? 'bg-sky-100 text-sky-700'
                                : log.type === 'umrah'
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-indigo-100 text-indigo-700'
                            }`}
                          >
                            <MessageCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900">
                              {lang === 'en' ? log.nameEn : log.nameBn}
                            </div>
                            <div className="text-[10px] text-slate-400 flex items-center gap-2 mt-0.5">
                              <span className="capitalize font-medium">{log.type}</span>
                              <span>•</span>
                              <span>
                                {lang === 'en' ? 'Source:' : 'উৎস:'}{' '}
                                <code className="bg-slate-100 px-1 py-0.2 rounded font-mono text-slate-600">
                                  {log.source}
                                </code>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1 justify-end">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>{new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {formatTimeAgo(log.timestamp)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: Live Notice Broadcast */}
            {activeTab === 'broadcast' && (
              <div>
                {savedSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-12 h-12 text-[#0369A1] mx-auto mb-2" />
                    <p className="text-sm font-bold text-slate-900">
                      {lang === 'en' ? 'Announcement Updated Successfully!' : 'নোটিশ সফলভাবে সংরক্ষিত ও লাইভ হয়েছে!'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSave} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {lang === 'en' ? 'Notice Text (English)' : 'নোটিশের বিবরণ (ইংরেজি)'}
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={noticeEn}
                        onChange={(e) => setNoticeEn(e.target.value)}
                        className="w-full border border-[#E5E7EB] rounded-xl p-3 text-xs text-slate-900 focus:ring-2 focus:ring-[#0284C7] outline-none bg-[#F8FAFC]"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {lang === 'en' ? 'Notice Text (Bangla)' : 'নোটিশের বিবরণ (বাংলা)'}
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={noticeBn}
                        onChange={(e) => setNoticeBn(e.target.value)}
                        className="w-full border border-[#E5E7EB] rounded-xl p-3 text-xs text-slate-900 focus:ring-2 focus:ring-[#0284C7] outline-none bg-[#F8FAFC]"
                      ></textarea>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                        className="w-4 h-4 text-[#0369A1] rounded cursor-pointer accent-[#0369A1]"
                      />
                      <span className="text-xs font-semibold text-slate-700">
                        {lang === 'en' ? 'Keep Banner Visible on Website Header' : 'ওয়েবসাইটের শীর্ষে ব্যানার প্রদর্শন সক্রিয় রাখুন'}
                      </span>
                    </label>

                    <div className="flex gap-2 pt-2">
                      <button
                        type="submit"
                        className="flex-1 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold py-3 rounded-xl shadow-xs transition cursor-pointer"
                      >
                        {lang === 'en' ? 'Save & Publish Live' : 'লাইভ সেভ করুন'}
                      </button>
                      <button
                        type="button"
                        onClick={handleDisableNotice}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3 py-3 rounded-xl transition cursor-pointer"
                      >
                        {lang === 'en' ? 'Clear' : 'মুছে ফেলুন'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};


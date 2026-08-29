import { PackageItem, UmrahSchedule } from '../types';

export const umrahPackages: PackageItem[] = [
  {
    id: 'umrah-october-2026',
    type: 'umrah',
    category: 'budget',
    badgeEn: '★ Special Low Cost: BDT 1,35,000',
    badgeBn: '★ বিশেষ অফার: ১,৩৫,০০০ ৳',
    categoryTagsEn: ['Low Cost', 'October 2026', 'Transit Flight', 'All Inclusive'],
    categoryTagsBn: ['স্বল্প খরচ', 'অক্টোবর ২০২৬', 'ট্রানজিট ফ্লাইট', 'খাবারসহ'],
    isPopular: true,
    nameEn: 'Low Cost Umrah Package (October 2026)',
    nameBn: 'স্বল্প খরচে উমরাহ (অক্টোবর ২০২৬)',
    durationEn: '10 Days • 01–10 October 2026',
    durationBn: '১০ দিন • ০১–১০ অক্টোবর ২০২৬',
    priceEn: '৳ 135,000',
    priceBn: '৳ ১,৩৫,০০০',
    priceNumeric: 135000,
    hotelMakkahEn: 'Standard Clean Hotel (500m–800m to Haram)',
    hotelMakkahBn: 'মানসম্মত পরিচ্ছন্ন হোটেল (হারাম থেকে ৫০০–৮০০ মি.)',
    hotelMadinahEn: 'Hotel in Central Markaziyah (500m–800m to Masjid Nabawi)',
    hotelMadinahBn: 'মসজিদে নববীর নিকটে মারকাজিয়া হোটেল (৫০০–৮০০ মি.)',
    distanceMakkahEn: '500–800 meters',
    distanceMakkahBn: '৫০০–৮০০ মিটার',
    airlinesEn: 'Transit Scheduled Airline (Dhaka - Jeddah / Madinah - Dhaka)',
    airlinesBn: 'ট্রানজিট শিডিউল ফ্লাইট (ঢাকা - জেদ্দা / মদিনা - ঢাকা)',
    availability: 'limited',
    seatsRemaining: 12,
    totalSeats: 40,
    availabilityBadgeEn: 'Booking Open (Limited Seats)',
    availabilityBadgeBn: 'বুকিং চলছে (সীমিত আসন)',
    itinerarySummaryEn: '01 to 10 October 2026 special low-cost Umrah caravan by Al Mamun Hazz Kafela with complete visa, air ticket, 500-800m hotel, transport, 3 meals daily, and historical Ziyarah.',
    itinerarySummaryBn: '০১ থেকে ১০ অক্টোবর ২০২৬ আল মামুন হজ্ব কাফেলা পরিচালিত স্বল্প খরচে বিশেষ উমরাহ প্যাকেজ — ভিসা, ট্রানজিট এয়ার টিকিট, ৫০০-৮০০ মিটার হোটেল, খাবার ও জিয়ারাহ অন্তর্ভুক্ত।',
    highlightsEn: [
      'Journey Dates: 01 October 2026 to 10 October 2026 (10 Days)',
      'Budget-friendly price: Only ৳ 1,35,000 all-inclusive',
      'Hotels within 500m–800m walking distance to Haram in Makkah & Madinah',
      'Daily authentic 3-time meals included in package',
      'Complete historical Ziyarah in Makkah & Madinah led by Mufti Amanullah'
    ],
    highlightsBn: [
      'সফরের তারিখ: ০১ অক্টোবর ২০২৬ থেকে ১০ অক্টোবর ২০২৬ (১০ দিন)',
      'স্বল্প খরচে মাত্র ১,৩৫,০০০ টাকায় সম্পূর্ণ প্যাকেজ',
      'মক্কা ও মদিনায় ৫০০ থেকে ৮০০ মিটারের মধ্যে মানসম্মত হোটেল',
      'প্রতিদিন ৩ বেলা সুস্বাদু দেশি খাবার অন্তর্ভুক্ত',
      'মুফতী আমানুল্লাহ সাহেবের সার্বক্ষণিক ধর্মীয় দিকনির্দেশনা ও ঐতিহাসিক স্থান জিয়ারাহ'
    ],
    inclusionsEn: [
      'Saudi Umrah Electronic Visa with Medical Insurance',
      'Round-trip Transit Air Ticket (Dhaka – KSA – Dhaka)',
      'Hotel accommodation in Makkah & Madinah (500–800m)',
      'AC bus transportation for all airport & intercity transfers',
      '3-time daily meals (Breakfast, Lunch, Dinner)',
      'Comprehensive historical Ziyarah in Makkah & Madinah',
      'Direct on-ground guidance by Shariah Consultant Mufti Amanullah'
    ],
    inclusionsBn: [
      'সৌদি ওমরাহ ই-ভিসা ও পূর্ণাঙ্গ হেলথ ইন্স্যুরেন্স',
      'রিটার্ন ট্রানজিট বিমান টিকিট (ঢাকা - সৌদি আরব - ঢাকা)',
      'মক্কা ও মদিনায় ৫০০-৮০০ মিটারে পরিচ্ছন্ন হোটেলে থাকার ব্যবস্থা',
      'জেদ্দা-মক্কা-মদিনা সকল যাতায়াতে শীতাতপ নিয়ন্ত্রিত (AC) বাস',
      'প্রতিদিন ৩ বেলা মানসম্মত পুষ্টিকর খাবার',
      'মক্কা ও মদিনার সকল দর্শনীয় ও ঐতিহাসিক স্থান জিয়ারাহ',
      'শরিয়াহ কনসালটেন্ট মুফতী আমানুল্লাহ সাহেবের সরাসরি তত্ত্বাবধান'
    ],
    exclusionsEn: [
      'Personal shopping and personal laundry costs',
      'Any additional baggage weight outside airline quota'
    ],
    exclusionsBn: [
      'ব্যক্তিগত কেনাকাটা ও লন্ড্রি খরচ',
      'এয়ারলাইন্স নির্ধারিত ওজনের অতিরিক্ত ব্যাগেজ ফি'
    ]
  },
  {
    id: 'umrah-august',
    type: 'umrah',
    category: 'economy',
    badgeEn: '★ 15-Day Standard',
    badgeBn: '★ ১৫ দিন স্ট্যান্ডার্ড',
    categoryTagsEn: ['Standard', 'Popular', '15-Day', 'Direct Flight'],
    categoryTagsBn: ['স্ট্যান্ডার্ড', 'জনপ্রিয়', '১৫ দিন', 'সরাসরি ফ্লাইট'],
    isPopular: true,
    nameEn: '15-Day Regular Umrah Package',
    nameBn: '১৫ দিনের নিয়মিত ওমরাহ প্যাকেজ',
    durationEn: '15 Days • 2026-2027',
    durationBn: '১৫ দিন • ২০২৬-২০২৭',
    priceEn: '৳ 160,000',
    priceBn: '৳ ১৬০,০০০',
    priceNumeric: 160000,
    hotelMakkahEn: 'Quality 3★ Hotel (400m–600m to Haram)',
    hotelMakkahBn: 'মানসম্মত ৩★ হোটেল (হারাম থেকে ৪০০–৬০০ মি.)',
    hotelMadinahEn: 'Central Hotel in Markaziyah (300m)',
    hotelMadinahBn: 'মদিনায় মারকাজিয়ায় হোটেল (৩০০ মি.)',
    distanceMakkahEn: '400–600 meters',
    distanceMakkahBn: '৪০০–৬০০ মিটার',
    airlinesEn: 'Saudia Airlines / Biman Bangladesh Scheduled Flight',
    airlinesBn: 'সৌদি এয়ারলাইন্স / বাংলাদেশ বিমান শিডিউল ফ্লাইট',
    availability: 'fast_filling',
    seatsRemaining: 14,
    totalSeats: 45,
    availabilityBadgeEn: 'Fast Filling (14 Left)',
    availabilityBadgeBn: 'দ্রুত পূরণ হচ্ছে (১৪টি বাকি)',
    itinerarySummaryEn: 'The perfect economical 15-day spiritual retreat with scheduled flights, close hotels, food, and guided ziyarah.',
    itinerarySummaryBn: '১৫ দিনের সাশ্রয়ী ও আরামদায়ক ওমরাহ কাফেলা — শিডিউল ফ্লাইট, নিকটে হোটেল ও অভিজ্ঞ আলেম দ্বারা পরিচালিত।',
    highlightsEn: [
      'Scheduled flight from Dhaka',
      'Makkah hotel 400-600 m to Haram courtyard',
      'Madinah quality hotel in central Markaziyah',
      'Full visa processing & 1-year multiple entry option',
      'Complete historical Ziyarah in Makkah & Madinah'
    ],
    highlightsBn: [
      'ঢাকা থেকে শিডিউল ফ্লাইট সুবিধা',
      'মক্কায় ৪০০-৬০০ মিটারের মধ্যে হাঁটা দূরত্বের হোটেল',
      'মদিনায় মারকাজিয়ায় পরিচ্ছন্ন আধুনিক হোটেল',
      'সম্পূর্ণ ওমরাহ ভিসা ও নুসুক অ্যাপ স্লট বুকিং সাপোর্ট',
      'মক্কা ও মদিনার ঐতিহাসিক স্থানসমূহের তথ্যবহুল জিয়ারাহ'
    ],
    inclusionsEn: [
      'Umrah Electronic Tourist / Umrah Visa + Insurance',
      'Return Airfare (Dhaka - Jeddah / Madinah - Dhaka)',
      '7 Nights Makkah + 7 Nights Madinah hotel accommodation',
      'AC Group Transport (Airport - Makkah - Madinah - Airport)',
      'Bengali speaking guide for all Tawaf & Umrah rituals',
      'Ziyarah to Jabal al-Nour, Thawr, Mina, Arafat, Quba, Qiblatain & Uhud'
    ],
    inclusionsBn: [
      'ওমরাহ ই-ভিসা ও মেডিকেল ইন্স্যুরেন্স ফি',
      'সরাসরি রিটার্ন এয়ার টিকিট',
      'মক্কায় ৭ রাত ও মদিনায় ৭ রাত আরামদায়ক আবাসন',
      'এসি বাসে সকল ইন্টারসিটি ও এয়ারপোর্ট ট্রান্সফার',
      'অভিজ্ঞ আলেম দ্বারা তাওয়াফ ও ওমরাহর রোকন পালনে নির্দেশনা',
      'জাবালে নূর, সাওর, মিনা, আরাফাত, কুবা মসজিদ ও ওহুদ পাহাড় জিয়ারাহ'
    ],
    exclusionsEn: [
      'Personal shopping and baggage excess fees'
    ],
    exclusionsBn: [
      'ব্যক্তিগত খরচ ও অতিরিক্ত ব্যাগেজ চার্জ'
    ]
  },
  {
    id: 'umrah-comfort',
    type: 'umrah',
    category: 'standard',
    badgeEn: '★ Family Comfort',
    badgeBn: '★ ফ্যামিলি স্পেশাল',
    categoryTagsEn: ['Family', '4-Star', 'Taif Tour', 'Buffet Meals'],
    categoryTagsBn: ['ফ্যামিলি', '৪-তারকা', 'তায়েফ ভ্রমণ', 'বুফে খাবার'],
    isPopular: false,
    nameEn: 'Umrah Comfort (Family Special)',
    nameBn: 'ওমরাহ কমফোর্ট (ফ্যামিলি স্পেশাল)',
    durationEn: '14 Nights • 15 Days',
    durationBn: '১৪ রাত • ১৫ দিন',
    priceEn: '৳ 215,000',
    priceBn: '৳ ২১৫,০০০',
    priceNumeric: 215000,
    hotelMakkahEn: '4★ Hotel within 200m–300m of Haram Piazza',
    hotelMakkahBn: 'হারামের ২০০–৩০০ মিটারের মধ্যে ৪★ হোটেল',
    hotelMadinahEn: '4★ Hotel in Markaziyah Central (150m)',
    hotelMadinahBn: 'মদিনায় মারকাজিয়া সেন্ট্রালে ৪★ হোটেল (১৫০ মি.)',
    distanceMakkahEn: '200–300 meters (Very close to prayer courtyards)',
    distanceMakkahBn: '২০০–৩০০ মিটার (হারামের মার্বেল চত্বরের ঠিক পাশেই)',
    airlinesEn: 'Saudia Airlines / Biman Scheduled Flight',
    airlinesBn: 'সৌদি এয়ারলাইন্স / বাংলাদেশ বিমান শিডিউল ফ্লাইট',
    availability: 'limited',
    seatsRemaining: 8,
    totalSeats: 35,
    availabilityBadgeEn: 'Limited Seats (8 Left)',
    availabilityBadgeBn: 'সীমিত আসন (৮টি বাকি)',
    itinerarySummaryEn: 'Premium family-oriented pilgrimage with 4-star hotels steps away from the Haram, daily breakfast & dinner, plus a scenic Taif excursion.',
    itinerarySummaryBn: 'পরিবার ও পিতা-মাতার জন্য প্রিমিয়াম ৪★ হোটেল, সুস্বাদু সকাল ও রাতের খাবার এবং ঐতিহাসিক তায়েফ সফরসহ বিশেষ আয়োজন।',
    highlightsEn: [
      '4★ walking-distance luxury hotels in both holy cities',
      'Daily breakfast & dinner buffet included',
      'Special Day Tour to mountainous Taif (Masjid Abdullah Ibn Abbas & cable car)',
      'Wheelchair and elderly support assistance',
      '24/7 dedicated local tour coordinator'
    ],
    highlightsBn: [
      'উভয় পবিত্র শহরে ৪★ ওয়াকিং ডিসটেন্স হোটেল',
      'প্রতিদিন সুস্বাদু ও পুষ্টিকর সকালের নাস্তা ও রাতের ডিনার',
      'ঐতিহাসিক তায়েফ সফর (মসজিদে আব্দুল্লাহ ইবনে আব্বাস ও কেবল কার)',
      'বয়োজ্যেষ্ঠদের জন্য হুইলচেয়ার ও বিশেষ সহায়তা ব্যবস্থা',
      'সৌদিতে সার্বক্ষণিক স্থানীয় কো-অর্ডিনেটরের সেবা'
    ],
    inclusionsEn: [
      'Full VIP Umrah Visa & Ground approvals',
      'Direct scheduled flight with 2x23kg baggage allowance',
      '7 Nights in Makkah (4★) + 7 Nights in Madinah (4★)',
      'Daily Breakfast & Dinner',
      'Private/VIP AC Bus for all transfers',
      'Complete Ziyarah in Makkah, Madinah and Full Day Taif tour'
    ],
    inclusionsBn: [
      'পূর্ণাঙ্গ ভিআইপি ওমরাহ ভিসা ও মোফা প্রসেসিং',
      'সরাসরি ফ্লাইট ও ২x২৩ কেজি ব্যাগেজ সুবিধা',
      'মক্কায় ৭ রাত (৪★) ও মদিনায় ৭ রাত (৪★) আবাসন',
      'প্রতিদিন পুষ্টিকর সকালের নাস্তা ও রাতের বুফে খাবার',
      'উন্নত এসি কোচে ইন্টারসিটি ও তায়েফ ভ্রমণ',
      'মক্কা, মদিনা ও তায়েফের সকল ঐতিহাসিক স্থান জিয়ারাহ'
    ],
    exclusionsEn: [
      'Lunch meals',
      'Taif cable car ticket (optional personal entry)'
    ],
    exclusionsBn: [
      'দুপুরের খাবার',
      'তায়েফ কেবল কার রাইডের ঐচ্ছিক এন্ট্রি টিকিট'
    ]
  },
  {
    id: 'umrah-royal',
    type: 'umrah',
    category: 'vip',
    badgeEn: 'VIP Luxury 5★',
    badgeBn: 'ভিআইপি লাক্সারি ৫★',
    categoryTagsEn: ['Luxury', 'VIP', '5-Star', 'Clock Tower', 'Private GMC'],
    categoryTagsBn: ['লাক্সারি', 'ভিআইপি', '৫-তারকা', 'ক্লক টাওয়ার', 'প্রাইভেট কার'],
    nameEn: 'Umrah Royal Luxury',
    nameBn: 'ওমরাহ রয়েল লাক্সারি',
    durationEn: '15 Nights • 16 Days',
    durationBn: '১৫ রাত • ১৬ দিন',
    priceEn: '৳ 325,000',
    priceBn: '৳ ৩২৫,০০০',
    priceNumeric: 325000,
    hotelMakkahEn: '5★ Clock Tower / Fairmont / Swissotel (Haram View)',
    hotelMakkahBn: '৫★ ক্লক টাওয়ার / ফেয়ারমন্ট / সুইসোটেল (হারাম ভিউ)',
    hotelMadinahEn: '5★ The Oberoi / Dar Al Taqwa / Pullman Zamzam Madinah',
    hotelMadinahBn: '৫★ দ্য ওবেরয় / দার আল তাকওয়া / পুলম্যান জমজম মদিনা',
    distanceMakkahEn: '0 meters (Direct elevator to Haram courtyard)',
    distanceMakkahBn: '০ মিটার (লিফটে নেমে সরাসরি হারামের চত্বর)',
    airlinesEn: 'Saudia Airlines (Business / Premium Economy)',
    airlinesBn: 'সৌদি এয়ারলাইন্স (বিজনেস / প্রিমিয়াম ইকোনমি)',
    availability: 'limited',
    seatsRemaining: 5,
    totalSeats: 20,
    availabilityBadgeEn: 'Strictly Limited (5 Left)',
    availabilityBadgeBn: 'অতি সীমিত (৫টি বাকি)',
    itinerarySummaryEn: 'A lavish 5-star experience with Haram-view rooms, private GMC transfers, Haramain High-Speed train, and personalized attention.',
    itinerarySummaryBn: 'হারাম ভিউ লাক্সারি রুম, প্রাইভেট জিএমসি গাড়ি, হারামাইন বুলেট ট্রেন ও ব্যক্তিগত মুয়াল্লিম সমৃদ্ধ রাজকীয় ওমরাহ সফর।',
    highlightsEn: [
      '5★ Luxury front-row Haram view hotels in Makkah & Madinah',
      'Haramain High-Speed Bullet Train between Makkah & Madinah',
      'Private GMC Yukon / Mercedes transfer for family',
      'Full Board international breakfast & fine dining',
      'Private scholar for exclusive family rituals & Rawdah entrance'
    ],
    highlightsBn: [
      'মক্কা ও মদিনায় সরাসরি হারাম ভিউ ৫★ বিশ্বমানের হোটেল',
      'মক্কা-মদিনায় দ্রুতগতির বিলাসবহুল হারামাইন এক্সপ্রেস বুলেট ট্রেন',
      'পরিবারের জন্য সার্বক্ষণিক নিজস্ব প্রাইভেট জিএমসি / মার্সিডিজ কার',
      'প্রতিদিন আন্তর্জাতিক মানের স্বাস্থ্যসম্মত বুফে খাবার',
      'রওজা শরিফ জিয়ারত ও তাওয়াফে ব্যক্তিগত আলেমের আন্তরিক তত্ত্বাবধান'
    ],
    inclusionsEn: [
      'VIP Umrah Visa & priority fast-track clearance',
      'Premium direct flight tickets',
      'Luxury 5★ accommodations overlooking Kaaba & Prophet\'s Mosque',
      'High-Speed Train First Class tickets',
      'Private VIP GMC / Luxury Van for all city transport',
      'VIP Ziyarah to Makkah, Madinah, Taif and Historic Badr battleground',
      '5-liter sealed Zamzam water box & executive Umrah gifts'
    ],
    inclusionsBn: [
      'ভিআইপি ওমরাহ ভিসা ও এয়ারপোর্টে ফার্স্ট-ট্র্যাক সেবা',
      'প্রিমিয়াম এয়ারলাইন্সের সরাসরি টিকিট',
      'কাবা ও মসজিদে নববীর সরাসরি ভিউসহ ৫★ লাক্সারি স্যুট/রুম',
      'বুলেট ট্রেনের বিজনেস ক্লাস টিকিট',
      'সকল যাতায়াতে ব্যক্তিগত বিলাসবহুল গাড়ি',
      'মক্কা, মদিনা, তায়েফ ও ঐতিহাসিক বদর প্রান্তর বিশেষ জিয়ারাহ',
      'সৌদি সিল করা ৫ লিটার জমজম পানির জার ও বিশেষ উপহার'
    ],
    exclusionsEn: [
      'Personal laundry and telephone charges'
    ],
    exclusionsBn: [
      'ব্যক্তিগত লন্ড্রি ও রুম টেলিফোন বিল'
    ]
  }
];

export const upcomingUmrahSchedules: UmrahSchedule[] = [
  {
    monthEn: 'OCTOBER 2026 (SPECIAL GROUP)',
    monthBn: '০১–১০ অক্টোবর ২০২৬ (স্বল্প খরচে বিশেষ কাফেলা)',
    datesEn: '01/10/2026 TO 10/10/2026 (10 Days)',
    datesBn: '০১/১০/২০২৬ থেকে ১০/১০/২০২৬ (১০ দিন)',
    statusEn: 'Seats Available (৳ 1,35,000)',
    statusBn: 'বুকিং চলছে (১,৩৫,০০০ ৳)',
    badgeColor: 'bg-emerald-600 text-white'
  },
  {
    monthEn: 'OCTOBER 2026 (REGULAR)',
    monthBn: 'অক্টোবর ২০২৬ (নিয়মিত কাফেলা)',
    datesEn: '15/10/2026 TO 29/10/2026',
    datesBn: '১৫/১০/২০২৬ থেকে ২৯/১০/২০২৬',
    statusEn: 'Filling Fast',
    statusBn: 'সীমিত আসন',
    badgeColor: 'bg-amber-500 text-white'
  },
  {
    monthEn: 'NOVEMBER 2026',
    monthBn: 'নভেম্বর ২০২৬',
    datesEn: '12/11/2026 TO 26/11/2026',
    datesBn: '১২/১১/২০২৬ থেকে ২৬/১১/২০২৬',
    statusEn: 'Booking Open',
    statusBn: 'বুকিং উন্মুক্ত',
    badgeColor: 'bg-emerald-500 text-white'
  },
  {
    monthEn: 'DECEMBER 2026',
    monthBn: 'ডিসেম্বর ২০২৬ (শীতকালীন ছুটি)',
    datesEn: '15/12/2026 TO 29/12/2026',
    datesBn: '১৫/১২/২০২৬ থেকে ২৯/১২/২০২৬',
    statusEn: 'Winter Holiday Special',
    statusBn: 'শীতকালীন স্পেশাল',
    badgeColor: 'bg-teal-600 text-white'
  },
  {
    monthEn: 'JANUARY 2027',
    monthBn: 'জানুয়ারি ২০২৭',
    datesEn: '16/01/2027 TO 30/01/2027',
    datesBn: '১৬/০১/২০২৭ থেকে ৩০/০১/২০২৭',
    statusEn: 'Booking Open',
    statusBn: 'বুকিং উন্মুক্ত',
    badgeColor: 'bg-emerald-500 text-white'
  },
  {
    monthEn: 'RAMADAN 2027',
    monthBn: 'পবিত্র রমজান ১৪৪৮ হিজরী',
    datesEn: 'First 15 Days & Last 10 Days (Laylatul Qadr)',
    datesBn: 'প্রথম ১৫ দিন ও শেষ দশকের বিশেষ কাফেলা',
    statusEn: 'Pre-Booking Active',
    statusBn: 'প্রাক-বুকিং চলছে',
    badgeColor: 'bg-purple-600 text-white'
  }
];

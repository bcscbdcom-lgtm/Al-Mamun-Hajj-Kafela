import { FAQItem } from '../types';

export const faqsData: FAQItem[] = [
  // --- Category: Registration & Booking (প্রাক-নিবন্ধন ও বুকিং) ---
  {
    id: 'faq-prereg',
    category: 'registration',
    isPopular: true,
    questionBn: 'আল মামুন হজ্ব কাফেলার মাধ্যমে ২০২৭ হজের প্রাক-নিবন্ধন করার নিয়ম কী?',
    questionEn: 'How do I pre-register for Hajj 2027 through Al Mamun Hajj Kafela?',
    answerBn: 'প্রাক-নিবন্ধনের জন্য আপনার মূল পাসপোর্ট (কমপক্ষে ৬ মাস মেয়াদসহ) এবং জাতীয় পরিচয়পত্র (NID) বা জন্ম নিবন্ধনের কপি প্রয়োজন। আমাদের খুলনার পাওয়ার হাউজ মোড় অফিসে সরাসরি এসে বা ফোনে যোগাযোগ করে সরকারি ফি জমা দিলে সরকারি সার্ভারে তাত্ক্ষণিক সিরিয়াল বরাদ্দ করা হয় এবং অফিশিয়াল ট্র্যাকিং নম্বর বা পিলগ্রিম আইডি প্রদান করা হয়।',
    answerEn: 'Pre-registration requires your original passport (minimum 6 months validity) and National ID (NID/Birth Certificate). By visiting our Power House More office in Khulna or contacting us directly to deposit the official government fee, a serial number is allocated immediately on the government portal along with an official tracking ID.'
  },
  {
    id: 'faq-office-location',
    category: 'registration',
    isPopular: true,
    questionBn: 'খুলনায় আপনাদের অফিস কোথায় এবং সরাসরি সাক্ষাতের সময় কখন?',
    questionEn: 'Where is your office in Khulna and what are the visiting hours?',
    answerBn: 'আমাদের অফিস খুলনার পাওয়ার হাউজ মোড়ে অবস্থিত: কে সি সি মার্কেট (৩য় তলা, মিষ্টি মহলের উপরে), পাওয়ার হাউজ মোড়, খুলনা। প্রতিদিন সকাল ৯টা থেকে রাত ৯টা পর্যন্ত আমাদের অফিস খোলা থাকে এবং সরাসরি এসে কাফেলার পরিচালক ও অভিজ্ঞ আলেমদের সাথে পরামর্শ করতে পারেন।',
    answerEn: 'Our Khulna office is located at: KCC Market (3rd Floor, above Misti Mahal), Power House More, Khulna. Open daily from 9:00 AM to 9:00 PM where you can consult directly with our directors and scholars.'
  },
  {
    id: 'faq-umrah-visa',
    category: 'registration',
    isPopular: false,
    questionBn: 'ওমরাহ ভিসার প্রসেসিং ও বায়োমেট্রিক নিবন্ধনে কতদিন সময় লাগে?',
    questionEn: 'How long does Umrah visa processing and biometric registration take?',
    answerBn: 'বর্তমানে নুসুক ই-ভিসা সিস্টেমের আওতায় পাসপোর্ট ও বায়োমেট্রিক জমা দেওয়ার ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ভিসা ইস্যু হয়ে যায়। তবে স্বাচ্ছন্দ্যময় ভ্রমণ ও পছন্দসই সেরা হোটেল পেতে যাত্রার অন্তত ১৫-২০ দিন পূর্বে বুকিং সম্পন্ন করা উত্তম।',
    answerEn: 'Under current Nusuk e-visa processing, Umrah visas are processed within 24 to 48 hours once passport copies and biometric registration are submitted. We recommend confirming your booking at least 15–20 days prior to departure.'
  },
  {
    id: 'faq-installments',
    category: 'registration',
    isPopular: false,
    questionBn: 'হজ ও ওমরাহ প্যাকেজের ফি কি কিস্তিতে পরিশোধ করা যায়?',
    questionEn: 'Can Hajj and Umrah package costs be paid in flexible installments?',
    answerBn: 'হ্যাঁ, সরকারি প্রাক-নিবন্ধনের পর মূল প্যাকেজের অবশিষ্ট টাকা চূড়ান্ত ভিসা ও বিমান টিকিট ইস্যু হওয়ার পূর্বে ২ থেকে ৪টি সহজ সুদমুক্ত কিস্তিতে ব্যাংক পে-অর্ডার বা অ্যাকাউন্টের মাধ্যমে পরিশোধের সুব্যবস্থা রয়েছে।',
    answerEn: 'Yes, after initial government pre-registration, remaining package payments can be scheduled in 2 to 4 interest-free milestone installments prior to final ticket and visa issuance.'
  },

  // --- Category: Packages & Hotels (প্যাকেজ ও আবাসন) ---
  {
    id: 'faq-hotel-distance',
    category: 'packages',
    isPopular: true,
    questionBn: 'মক্কা ও মদিনায় কাফেলার হোটেলের মান ও হারাম শরীফ থেকে দূরত্ব কেমন?',
    questionEn: 'What are the hotel standards and distances from Haram Sharif in Makkah and Madinah?',
    answerBn: 'আমাদের কাফেলায় প্যাকেজভেদে ১০০ মিটার থেকে ৮০০ মিটারের মধ্যে মানসম্মত, শীতাতপ নিয়ন্ত্রিত ও লিফট সুবিধাসম্পন্ন ৩-স্টার থেকে ৫-স্টার হোটেল বরাদ্দ করা হয়। মক্কা ও মদিনা উভয় স্থানেই হেঁটে হারামে যাতায়াত করা যায়, এবং দূরবর্তী হোটেলের ক্ষেত্রে ২৪ ঘণ্টা নিজস্ব শাটল বাস সার্ভিস থাকে।',
    answerEn: 'Depending on your package, we provide quality 3-star to 5-star AC hotels located within 100 meters to 800 meters from Haram Sharif in Makkah and Madinah. Walking access is available, and dedicated 24/7 shuttle service is provided for hotels slightly further away.'
  },
  {
    id: 'faq-meals-qurbani',
    category: 'packages',
    isPopular: true,
    questionBn: 'সফরে খাবারের ব্যবস্থা কেমন থাকে এবং কি কি খাবার পরিবেশন করা হয়?',
    questionEn: 'What are the dining and meal arrangements during the trip?',
    answerBn: 'সফরে প্রতিদিন ৩ বেলা দেশীয় দক্ষ বাবুর্চি দ্বারা প্রস্তুতকৃত তাজা ও পুষ্টিকর বাংলাদেশী খাবার পরিবেশন করা হয় (সকালের নাস্তা, দুপুর ও রাতের খাবার)। এছাড়া মিনা, আরাফাত ও মুজদালিফায় বিশেষ ক্যাটারিং ও প্যাকেটজাত খাবার এবং সার্বক্ষণিক চা-পানীয়ের সুব্যবস্থা থাকে।',
    answerEn: 'We provide 3 fresh Bangladeshi meals daily prepared by native chefs (breakfast, lunch, and dinner). Special catering and packed meal services are ensured during the core Hajj days in Mina, Arafat, and Muzdalifah alongside 24/7 tea stations.'
  },
  {
    id: 'faq-mina-arafat-tents',
    category: 'packages',
    isPopular: false,
    questionBn: 'হজের দিনগুলোতে মিনা ও আরাফাতে কেমন তাবু ও সুবিধা দেওয়া হয়?',
    questionEn: 'What tent facilities are provided in Mina and Arafat during Hajj?',
    answerBn: 'মিনা ও আরাফাতে আমরা ফায়ারপ্রুফ, শীতাতপ নিয়ন্ত্রিত (AC) আধুনিক তাবু, ফোমের সোফা-কাম-বেড, মিনার জোন-১ এ অবস্থান (জামারাত থেকে কাছে), ২৪ ঘণ্টা গরম ও ঠাণ্ডা পানীয় এবং উন্নতমানের বুফে সার্ভিস নিশ্চিত করি।',
    answerEn: 'In Mina and Arafat, we provide AC fireproof tents equipped with sofa-cum-beds, Zone-1 placement close to Jamarat, 24/7 hot/cold beverages, and quality meal service.'
  },
  {
    id: 'faq-umrah-customization',
    category: 'packages',
    isPopular: false,
    questionBn: 'আমরা কি আমাদের পছন্দমতো ফ্যামিলি বা কাস্টমাইজড ওমরাহ প্যাকেজ নিতে পারব?',
    questionEn: 'Can we book a customized family Umrah package?',
    answerBn: 'হ্যাঁ! পরিবার বা নিজস্ব গ্রুপের সুবিধার্থে আমরা ৭, ১০, ১৪ বা ২১ দিনের সম্পূর্ণ কাস্টমাইজড ওমরাহ প্যাকেজ অফার করি। এতে পছন্দসই ৩-স্টার থেকে ৫-স্টার হোটেল, ক্লক টাওয়ার হোটেল এবং নিজস্ব প্রাইভেট মাইক্রোবাস (HiAce/GMC) সার্ভিস বাছাইয়ের সুযোগ রয়েছে।',
    answerEn: 'Yes! For families and corporate groups, we offer custom Umrah packages for 7, 10, 14, or 21 days with your choice of 3-star to 5-star or Clock Tower hotels and private VIP transport.'
  },

  // --- Category: Guidelines & Preparation (কাফেলার নীতিমালা ও প্রস্তুতি) ---
  {
    id: 'faq-scholar-guidance',
    category: 'guidelines',
    isPopular: true,
    questionBn: 'সফরে কি সার্বক্ষণিক আলেম ও অভিজ্ঞ গাইড সাথে থাকেন?',
    questionEn: 'Are Islamic scholars and experienced guides continuously available during the journey?',
    answerBn: 'অবশ্যই। আল মামুন হজ্ব কাফেলার প্রতিটি কাফেলা আলহাজ্ব হযরত মাওলানা মুফতী আমানুল্লাহ সাহেবের প্রত্যক্ষ দিকনির্দেশনায় এবং অভিজ্ঞ দ্বীনি আলেমদের পরিচালনায় সফর করে। ইহরাম বাঁধা, তাওয়াফ, সাঈ, মিনায় অবস্থানসহ হজের প্রতিটি রোকন সহীহ সুন্নাহ মোতাবেক পালনে আলেমগণ শুরু থেকে শেষ পর্যন্ত আপনার সাথেই থাকেন।',
    answerEn: 'Yes, absolutely. Every group of Al Mamun Hajj Kafela is directly guided by Alhajj Hazrat Mawlana Mufti Amanullah and experienced Islamic scholars. From binding Ihram, Tawaf, Sa\'i to Mina stay and Ziyarah, our scholars walk with you every step to ensure 100% Sunnah compliance.'
  },
  {
    id: 'faq-pre-departure-training',
    category: 'guidelines',
    isPopular: false,
    questionBn: 'হজ বা ওমরাহ সফরের পূর্বে কাফেলার পক্ষ থেকে কি কোনো প্রশিক্ষণ বা তালিমের ব্যবস্থা থাকে?',
    questionEn: 'Is pre-departure training provided by the agency before travel?',
    answerBn: 'হ্যাঁ, যাত্রার পূর্বে খুলনায় আমাদের নিজস্ব হলরুমে অভিজ্ঞ মুফতী ও আলেমদের পরিচালনায় বিশেষ "হজ ও ওমরাহ প্রশিক্ষণ কর্মশালা" আয়োজন করা হয়। সেখানে প্র্যাকটিক্যাল তাওয়াফ, ইহরামের নিয়ম ও সফরসংক্রান্ত মাসআলা শেখানো হয় এবং সচিত্র সহীহ গাইড বই প্রদান করা হয়।',
    answerEn: 'Yes, before departure we conduct comprehensive Hajj & Umrah training workshops in Khulna led by certified scholars. Practical demonstrations of Tawaf, Ihram rules, and Fiqh guidelines are taught along with complimentary guidebook kits.'
  },
  {
    id: 'faq-senior-citizens',
    category: 'guidelines',
    isPopular: false,
    questionBn: 'প্রবীণ হাজী ও মহিলা যাত্রীদের জন্য কাফেলায় কি বিশেষ সুবিধা রয়েছে?',
    questionEn: 'Are there special facilities for senior citizens and female pilgrims?',
    answerBn: 'জি, প্রবীণ ও শারীরিকভাবে দুর্বল হাজীদের জন্য হারাম শরীফে তাওয়াফ ও সাঈর সময় দক্ষ হুইলচেয়ার অ্যাসিস্ট্যান্টের ব্যবস্থা করা হয়। এছাড়া মহিলা হাজীদের মাসআলা-মাসায়েল আলোচনার জন্য নারী শিক্ষয়িত্রী ও অভিজ্ঞ আলেমদের আলাদা বয়ানের ব্যবস্থা এবং পরিবারভিত্তিক প্রাইভেট রুম বরাদ্দ রাখা হয়।',
    answerEn: 'Yes, dedicated wheelchair assistants are provided for elderly pilgrims. Female pilgrims receive dedicated guidance sessions for specific Fiqh rulings, family room options, and round-the-clock assistance.'
  },
  {
    id: 'faq-cancellation-refund',
    category: 'guidelines',
    isPopular: false,
    questionBn: 'কোনো কারণে বুকিং বাতিল বা মেডিকেল ইমার্জেন্সি হলে রিফান্ড নীতি কেমন?',
    questionEn: 'What is the cancellation and refund policy in case of medical emergencies?',
    answerBn: 'সরকারি হজ ও ওমরাহ নীতিমালা অনুযায়ী নিবন্ধিত কোনো হাজী জরুরি অসুস্থতার কারণে যেতে না পারলে তার ট্র্যাকিং নম্বর পরিবারের যোগ্য সদস্যের নামে হস্তান্তর অথবা বিধি অনুযায়ী সরকারি রিফান্ড প্রক্রিয়ার পূর্ণ সহযোগিতা প্রদান করা হয়।',
    answerEn: 'According to official government policies, if a registered pilgrim cannot travel due to certified medical reasons, the tracking ID can be transferred to an eligible family member or refunded per official guidelines.'
  }
];

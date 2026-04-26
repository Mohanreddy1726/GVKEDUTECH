"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GraduationCap, Stethoscope, TrendingUp, Sparkles, ArrowRight, CheckCircle2, Calculator, BookOpen } from "lucide-react";

// MBBS College Predictor Data - All 7 Countries
const mbbsCountries = [
  "Nepal", "Georgia", "Kyrgyzstan", "Russia", "Kazakhstan", "Uzbekistan", "Vietnam"
];

const categories = ["OC", "BC-A", "BC-B", "BC-C", "BC-D", "BC-E", "SC", "ST", "EWS"];

// Complete college database from all MBBS country pages
const collegeDatabase = [
  // NEPAL - 18 Universities
  { name: "Birat Medical College, Biratnagar", country: "Nepal", fee: "₹40-55 Lakh (Total)", neetRange: "150-300", recognition: "NMC, WHO" },
  { name: "B & C Medical College, Birtamod", country: "Nepal", fee: "₹38-52 Lakh (Total)", neetRange: "150-300", recognition: "NMC, WHO" },
  { name: "Chitwan Medical College, Bharatpur", country: "Nepal", fee: "₹40-55 Lakh (Total)", neetRange: "150-300", recognition: "NMC, WHO" },
  { name: "College of Medical Science, Bharatpur", country: "Nepal", fee: "₹42-58 Lakh (Total)", neetRange: "150-320", recognition: "NMC, WHO" },
  { name: "Devdaha Medical College, Butwal", country: "Nepal", fee: "₹38-50 Lakh (Total)", neetRange: "150-300", recognition: "NMC, WHO" },
  { name: "Gandaki Medical College, Pokhara", country: "Nepal", fee: "₹40-55 Lakh (Total)", neetRange: "150-300", recognition: "NMC, WHO" },
  { name: "Janaki Medical College, Janakpur", country: "Nepal", fee: "₹35-48 Lakh (Total)", neetRange: "140-280", recognition: "NMC, WHO" },
  { name: "Kathmandu Medical College, Kathmandu", country: "Nepal", fee: "₹45-60 Lakh (Total)", neetRange: "180-350", recognition: "NMC, WHO" },
  { name: "Kathmandu University (KUSMS), Dhulikhel", country: "Nepal", fee: "₹42-58 Lakh (Total)", neetRange: "170-320", recognition: "NMC, WHO" },
  { name: "Karnali Academy of Health Science", country: "Nepal", fee: "₹30-42 Lakh (Total)", neetRange: "130-250", recognition: "NMC, WHO" },
  { name: "KIST Medical College, Kathmandu", country: "Nepal", fee: "₹40-55 Lakh (Total)", neetRange: "150-300", recognition: "NMC, WHO" },
  { name: "Lumbini Medical College, Palpa", country: "Nepal", fee: "₹38-52 Lakh (Total)", neetRange: "150-300", recognition: "NMC, WHO" },
  { name: "Manipal College of Medical Science, Pokhara", country: "Nepal", fee: "₹48-65 Lakh (Total)", neetRange: "200-380", recognition: "NMC, WHO" },
  { name: "National Medical College, Birgunj", country: "Nepal", fee: "₹40-55 Lakh (Total)", neetRange: "150-300", recognition: "NMC, WHO" },
  { name: "Nepal Medical College, Kathmandu", country: "Nepal", fee: "₹42-58 Lakh (Total)", neetRange: "160-320", recognition: "NMC, WHO" },
  { name: "Nepalgunj Medical College, Nepalgunj", country: "Nepal", fee: "₹38-50 Lakh (Total)", neetRange: "140-280", recognition: "NMC, WHO" },
  { name: "Nobel Medical College, Biratnagar", country: "Nepal", fee: "₹40-55 Lakh (Total)", neetRange: "150-300", recognition: "NMC, WHO" },
  { name: "Universal Medical College, Bhairahawa", country: "Nepal", fee: "₹38-52 Lakh (Total)", neetRange: "150-300", recognition: "NMC, WHO" },

  // GEORGIA - 23 Universities
  { name: "Tbilisi State Medical University (TSMU)", country: "Georgia", fee: "₹20-25 Lakh (Total)", neetRange: "250-400", recognition: "WHO, NMC, WFME" },
  { name: "Batumi Shota Rustaveli State University", country: "Georgia", fee: "₹18-22 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "David Tvildiani Medical University (DTMU)", country: "Georgia", fee: "₹22-28 Lakh (Total)", neetRange: "250-400", recognition: "WHO, NMC" },
  { name: "European University (EU)", country: "Georgia", fee: "₹20-25 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Caucasus International University (CIU)", country: "Georgia", fee: "₹18-22 Lakh (Total)", neetRange: "180-300", recognition: "WHO, NMC" },
  { name: "Akaki Tsereteli State University", country: "Georgia", fee: "₹18-24 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Alte University School of Medicine", country: "Georgia", fee: "₹20-26 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Avicenna - Batumi Medical University", country: "Georgia", fee: "₹19-24 Lakh (Total)", neetRange: "190-330", recognition: "WHO, NMC" },
  { name: "BAU International University", country: "Georgia", fee: "₹20-25 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Caucasus University (CU)", country: "Georgia", fee: "₹18-23 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Central University of Europe, Kutaisi", country: "Georgia", fee: "₹17-22 Lakh (Total)", neetRange: "170-300", recognition: "WHO, NMC" },
  { name: "Central University of Europe, Tbilisi", country: "Georgia", fee: "₹18-24 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "East European University (EEU)", country: "Georgia", fee: "₹19-24 Lakh (Total)", neetRange: "190-330", recognition: "WHO, NMC" },
  { name: "East-West University (EWU)", country: "Georgia", fee: "₹18-23 Lakh (Total)", neetRange: "180-300", recognition: "WHO, NMC" },
  { name: "Geomedi University", country: "Georgia", fee: "₹17-22 Lakh (Total)", neetRange: "170-290", recognition: "WHO, NMC" },
  { name: "Georgian American University (GAU)", country: "Georgia", fee: "₹20-26 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Georgian National University (SEU)", country: "Georgia", fee: "₹19-24 Lakh (Total)", neetRange: "190-330", recognition: "WHO, NMC" },
  { name: "Grigol Robakidze University", country: "Georgia", fee: "₹18-23 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "International Black Sea University", country: "Georgia", fee: "₹19-24 Lakh (Total)", neetRange: "190-330", recognition: "WHO, NMC" },
  { name: "Ilia State University", country: "Georgia", fee: "₹20-26 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Ivane Javakhishvili Tbilisi State University", country: "Georgia", fee: "₹21-28 Lakh (Total)", neetRange: "220-380", recognition: "WHO, NMC" },
  { name: "New Vision University", country: "Georgia", fee: "₹18-24 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Petre Shotadze Tbilisi Medical Academy", country: "Georgia", fee: "₹19-25 Lakh (Total)", neetRange: "190-340", recognition: "WHO, NMC" },
  { name: "University of Georgia (UG)", country: "Georgia", fee: "₹20-26 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },

  // KYRGYZSTAN - 11 Universities
  { name: "Osh State University", country: "Kyrgyzstan", fee: "₹15-20 Lakh (Total)", neetRange: "180-300", recognition: "WHO, NMC" },
  { name: "Jalal-Abad State University", country: "Kyrgyzstan", fee: "₹14-18 Lakh (Total)", neetRange: "170-280", recognition: "WHO, NMC" },
  { name: "International School of Medicine (ISM)", country: "Kyrgyzstan", fee: "₹16-22 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Kyrgyz State Medical Academy", country: "Kyrgyzstan", fee: "₹15-20 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "IHSM Central Campus", country: "Kyrgyzstan", fee: "₹16-22 Lakh (Total)", neetRange: "190-340", recognition: "WHO, NMC" },
  { name: "IHSM Issyk-Kul Campus", country: "Kyrgyzstan", fee: "₹15-21 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "International Medical University", country: "Kyrgyzstan", fee: "₹16-22 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Kyrgyz National University", country: "Kyrgyzstan", fee: "₹14-19 Lakh (Total)", neetRange: "170-290", recognition: "WHO, NMC" },
  { name: "Kyrgyz-Russian Slavic University", country: "Kyrgyzstan", fee: "₹15-20 Lakh (Total)", neetRange: "180-310", recognition: "WHO, NMC" },
  { name: "Osh International Medical University", country: "Kyrgyzstan", fee: "₹16-21 Lakh (Total)", neetRange: "190-330", recognition: "WHO, NMC" },
  { name: "S. Tentishev Asian Medical Institute", country: "Kyrgyzstan", fee: "₹14-19 Lakh (Total)", neetRange: "170-290", recognition: "WHO, NMC" },
  { name: "University Of South Asia", country: "Kyrgyzstan", fee: "₹16-22 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },

  // RUSSIA - 68 Universities
  { name: "Bashkir State Medical University", country: "Russia", fee: "₹25-35 Lakh (Total)", neetRange: "250-400", recognition: "WHO, NMC, ECFMG" },
  { name: "Kazan Federal University (KFU)", country: "Russia", fee: "₹28-38 Lakh (Total)", neetRange: "280-450", recognition: "WHO, NMC, ECFMG" },
  { name: "Crimean Federal University (CFU)", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-380", recognition: "WHO, NMC" },
  { name: "Orenburg State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "230-380", recognition: "WHO, NMC" },
  { name: "Altai State Medical University", country: "Russia", fee: "₹24-32 Lakh (Total)", neetRange: "240-400", recognition: "WHO, NMC" },
  { name: "Amur State Medical Academy", country: "Russia", fee: "₹20-28 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Astrakhan State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Chita State Medical Academy", country: "Russia", fee: "₹18-26 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Chuvash State University", country: "Russia", fee: "₹20-28 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Dagestan State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Far Eastern Federal University (FEFU)", country: "Russia", fee: "₹26-35 Lakh (Total)", neetRange: "260-420", recognition: "WHO, NMC, ECFMG" },
  { name: "First Moscow State Medical University", country: "Russia", fee: "₹35-50 Lakh (Total)", neetRange: "350-550", recognition: "WHO, NMC, ECFMG" },
  { name: "Immanuel Kant Baltic Federal University", country: "Russia", fee: "₹24-32 Lakh (Total)", neetRange: "240-400", recognition: "WHO, NMC" },
  { name: "Ingush State University", country: "Russia", fee: "₹18-25 Lakh (Total)", neetRange: "170-300", recognition: "WHO, NMC" },
  { name: "Irkutsk State Medical University", country: "Russia", fee: "₹24-32 Lakh (Total)", neetRange: "240-400", recognition: "WHO, NMC" },
  { name: "Ivanovo State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Izhevsk State Medical Academy (ISMA)", country: "Russia", fee: "₹20-28 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Kabardino-Balkarian State University", country: "Russia", fee: "₹18-26 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Kadyrov Chechen State University", country: "Russia", fee: "₹18-25 Lakh (Total)", neetRange: "170-300", recognition: "WHO, NMC" },
  { name: "Kazan State Medical University", country: "Russia", fee: "₹26-36 Lakh (Total)", neetRange: "260-420", recognition: "WHO, NMC, ECFMG" },
  { name: "Kemerovo State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Kirov State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Krasnoyarsk State Medical University", country: "Russia", fee: "₹24-32 Lakh (Total)", neetRange: "240-400", recognition: "WHO, NMC" },
  { name: "Kuban State Medical University", country: "Russia", fee: "₹24-32 Lakh (Total)", neetRange: "240-400", recognition: "WHO, NMC" },
  { name: "Kursk State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Lobachevsky State University", country: "Russia", fee: "₹24-32 Lakh (Total)", neetRange: "240-400", recognition: "WHO, NMC" },
  { name: "Lomonosov Moscow State University", country: "Russia", fee: "₹40-55 Lakh (Total)", neetRange: "400-600", recognition: "WHO, NMC, ECFMG" },
  { name: "Mari State University", country: "Russia", fee: "₹18-26 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Maykop State University", country: "Russia", fee: "₹18-25 Lakh (Total)", neetRange: "170-300", recognition: "WHO, NMC" },
  { name: "Murmansk Arctic State University", country: "Russia", fee: "₹20-28 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "N.P. Ogarev Mordovia State University", country: "Russia", fee: "₹20-28 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "North Caucasian State Academy (NCSA)", country: "Russia", fee: "₹18-26 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "North Ossetian State Medical Academy", country: "Russia", fee: "₹20-28 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "North-Western State Medical University", country: "Russia", fee: "₹26-36 Lakh (Total)", neetRange: "260-420", recognition: "WHO, NMC, ECFMG" },
  { name: "Northern State Medical University", country: "Russia", fee: "₹24-32 Lakh (Total)", neetRange: "240-400", recognition: "WHO, NMC" },
  { name: "Novosibirsk State University", country: "Russia", fee: "₹28-38 Lakh (Total)", neetRange: "280-450", recognition: "WHO, NMC, ECFMG" },
  { name: "Omsk State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Orel State University", country: "Russia", fee: "₹18-26 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Pacific State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Penza State University", country: "Russia", fee: "₹20-28 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "People's Friendship University RUDN", country: "Russia", fee: "₹28-40 Lakh (Total)", neetRange: "300-480", recognition: "WHO, NMC, ECFMG" },
  { name: "Perm State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Petrozavodsk State University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Pirogov Russian National Research Medical University", country: "Russia", fee: "₹30-42 Lakh (Total)", neetRange: "320-500", recognition: "WHO, NMC, ECFMG" },
  { name: "Privolzhsky Research Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Pskov State University", country: "Russia", fee: "₹18-25 Lakh (Total)", neetRange: "170-300", recognition: "WHO, NMC" },
  { name: "Rostov State Medical University", country: "Russia", fee: "₹24-32 Lakh (Total)", neetRange: "240-400", recognition: "WHO, NMC" },
  { name: "Ryazan State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Samara State Medical University", country: "Russia", fee: "₹24-32 Lakh (Total)", neetRange: "240-400", recognition: "WHO, NMC" },
  { name: "Saratov State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Sevastopol State University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Siberian State Medical University", country: "Russia", fee: "₹24-32 Lakh (Total)", neetRange: "240-400", recognition: "WHO, NMC" },
  { name: "Smolensk State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "South-Ural State Medical University", country: "Russia", fee: "₹24-32 Lakh (Total)", neetRange: "240-400", recognition: "WHO, NMC" },
  { name: "Stavropol State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Surgut State University", country: "Russia", fee: "₹20-28 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Tambov State University", country: "Russia", fee: "₹18-26 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Tula State University", country: "Russia", fee: "₹20-28 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Tver State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Tyumen State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Ulyanovsk State University", country: "Russia", fee: "₹20-28 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Ural State Medical University", country: "Russia", fee: "₹24-32 Lakh (Total)", neetRange: "240-400", recognition: "WHO, NMC" },
  { name: "Volgograd State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Voronezh State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Yaroslav-the-Wise Novgorod State University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },
  { name: "Yaroslavl State Medical University", country: "Russia", fee: "₹22-30 Lakh (Total)", neetRange: "220-370", recognition: "WHO, NMC" },

  // KAZAKHSTAN - 10 Universities
  { name: "Al-Farabi Kazakh National University", country: "Kazakhstan", fee: "₹20-28 Lakh (Total)", neetRange: "250-400", recognition: "WHO, NMC" },
  { name: "Asfendiyarov Kazakh National University", country: "Kazakhstan", fee: "₹20-28 Lakh (Total)", neetRange: "250-400", recognition: "WHO, NMC" },
  { name: "Caspian International School of Medicine", country: "Kazakhstan", fee: "₹18-25 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Karaganda Medical University", country: "Kazakhstan", fee: "₹18-25 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Kazakh-Russian Medical University", country: "Kazakhstan", fee: "₹18-24 Lakh (Total)", neetRange: "190-330", recognition: "WHO, NMC" },
  { name: "Astana Medical University", country: "Kazakhstan", fee: "₹20-28 Lakh (Total)", neetRange: "220-380", recognition: "WHO, NMC" },
  { name: "Semey Medical University", country: "Kazakhstan", fee: "₹18-25 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Kokshetau State University", country: "Kazakhstan", fee: "₹16-22 Lakh (Total)", neetRange: "180-300", recognition: "WHO, NMC" },
  { name: "South Kazakhstan Medical Academy", country: "Kazakhstan", fee: "₹16-22 Lakh (Total)", neetRange: "180-300", recognition: "WHO, NMC" },
  { name: "West Kazakhstan Medical University", country: "Kazakhstan", fee: "₹18-24 Lakh (Total)", neetRange: "190-330", recognition: "WHO, NMC" },

  // UZBEKISTAN - 13 Universities
  { name: "Asia International University", country: "Uzbekistan", fee: "₹13-18 Lakh (Total)", neetRange: "160-280", recognition: "WHO, NMC" },
  { name: "Andijan State Medical Institute", country: "Uzbekistan", fee: "₹12-17 Lakh (Total)", neetRange: "150-260", recognition: "WHO, NMC" },
  { name: "Bukhara State Medical Institute", country: "Uzbekistan", fee: "₹13-18 Lakh (Total)", neetRange: "170-300", recognition: "WHO, NMC" },
  { name: "Fergana Medical Institute of Public Health", country: "Uzbekistan", fee: "₹12-17 Lakh (Total)", neetRange: "150-260", recognition: "WHO, NMC" },
  { name: "Karakalpakstan Medical Institute", country: "Uzbekistan", fee: "₹12-16 Lakh (Total)", neetRange: "140-250", recognition: "WHO, NMC" },
  { name: "Namangan State University", country: "Uzbekistan", fee: "₹12-17 Lakh (Total)", neetRange: "150-260", recognition: "WHO, NMC" },
  { name: "Samarkand State Medical University", country: "Uzbekistan", fee: "₹14-20 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Tashkent Medical Academy, Tashkent", country: "Uzbekistan", fee: "₹15-22 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Tashkent Medical Academy, Chirchiq", country: "Uzbekistan", fee: "₹14-20 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Tashkent Medical Academy, Termez", country: "Uzbekistan", fee: "₹14-20 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Tashkent Medical Academy, Urgench", country: "Uzbekistan", fee: "₹14-20 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Tashkent Pediatric Medical Institute", country: "Uzbekistan", fee: "₹14-20 Lakh (Total)", neetRange: "180-320", recognition: "WHO, NMC" },
  { name: "Tashkent State Dental Institute", country: "Uzbekistan", fee: "₹12-18 Lakh (Total)", neetRange: "150-280", recognition: "WHO, NMC" },

  // VIETNAM - 7 Universities
  { name: "Hanoi Medical University (HMU)", country: "Vietnam", fee: "₹20-28 Lakh (Total)", neetRange: "220-380", recognition: "WHO, NMC" },
  { name: "University of Medicine and Pharmacy at HCMC", country: "Vietnam", fee: "₹18-25 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Hue University of Medicine and Pharmacy", country: "Vietnam", fee: "₹18-25 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
  { name: "Can Tho University of Medicine and Pharmacy", country: "Vietnam", fee: "₹16-22 Lakh (Total)", neetRange: "180-300", recognition: "WHO, NMC" },
  { name: "Thai Nguyen University of Medicine and Pharmacy", country: "Vietnam", fee: "₹16-22 Lakh (Total)", neetRange: "180-300", recognition: "WHO, NMC" },
  { name: "Hai Phong University of Medicine and Pharmacy", country: "Vietnam", fee: "₹16-22 Lakh (Total)", neetRange: "180-300", recognition: "WHO, NMC" },
  { name: "Pham Ngoc Thach University of Medicine", country: "Vietnam", fee: "₹18-25 Lakh (Total)", neetRange: "200-350", recognition: "WHO, NMC" },
];

function parseRange(range) {
  const [min, max] = range.split("-").map(Number);
  return [min, max];
}

function predictColleges(neetScore, budget, country) {
  return collegeDatabase.filter((c) => {
    const [minNeet, maxNeet] = parseRange(c.neetRange);
    const feeMatch = c.fee.match(/(\d+)-(\d+)/);
    const maxFee = feeMatch ? parseInt(feeMatch[2]) : 50;
    const countryMatch = country === "all" || c.country === country;
    return neetScore >= minNeet && neetScore <= maxNeet + 50 && budget >= maxFee * 0.7 && countryMatch;
  });
}

// Budget Calculator Data - Countries for each program type
const budgetCountries = {
  MBBS: ["Nepal", "Georgia", "Kyrgyzstan", "Russia", "Kazakhstan", "Uzbekistan", "Vietnam"],
  MASTERS: ["USA", "Australia", "United Kingdom", "Germany", "Europe", "Canada", "Ireland"],
};

function calculateBudget(programType, country, livingPref) {
  const tuitionMap = {
    MBBS: { Nepal: 5, Georgia: 4.5, Kyrgyzstan: 3, Russia: 5.5, Kazakhstan: 4, Uzbekistan: 3.5, Vietnam: 4 },
    MASTERS: { USA: 25, UK: 18, Germany: 3, Australia: 20, Europe: 8, Ireland: 15, Canada: 18 },
  };

  const livingMap = {
    Shared: { Nepal: 2, Georgia: 2, Kyrgyzstan: 1.5, Russia: 2.5, Kazakhstan: 2, Uzbekistan: 1.5, Vietnam: 2, USA: 8, UK: 7, Germany: 5, Australia: 7, Europe: 5, Ireland: 6, Canada: 7 },
    Private: { Nepal: 3, Georgia: 3.5, Kyrgyzstan: 2.5, Russia: 4, Kazakhstan: 3.5, Uzbekistan: 2.5, Vietnam: 3, USA: 14, UK: 12, Germany: 8, Australia: 12, Europe: 8, Ireland: 10, Canada: 12 },
    "University Hostel": { Nepal: 1.5, Georgia: 1.5, Kyrgyzstan: 1, Russia: 2, Kazakhstan: 1.5, Uzbekistan: 1, Vietnam: 1.5, USA: 6, UK: 5, Germany: 4, Australia: 5, Europe: 4, Ireland: 5, Canada: 5 },
  };

  const durationMap = {
    MBBS: { Nepal: 5, Georgia: 6, Kyrgyzstan: 6, Russia: 6, Kazakhstan: 5, Uzbekistan: 5, Vietnam: 6 },
    MASTERS: { USA: 2, UK: 1, Germany: 2, Australia: 2, Europe: 2, Ireland: 1, Canada: 2 },
  };

  const tuition = tuitionMap[programType]?.[country] ?? 5;
  const living = livingMap[livingPref]?.[country] ?? 3;
  const years = durationMap[programType]?.[country] ?? 4;

  const totalTuition = tuition * years;
  const totalLiving = living * years;
  const total = totalTuition + totalLiving;

  return {
    tuitionFee: `₹${totalTuition.toFixed(1)} Lakh`,
    livingCost: `₹${totalLiving.toFixed(1)} Lakh`,
    totalEstimate: `₹${total.toFixed(1)} Lakh`,
    duration: `${years} Years`,
  };
}

// Main Component
export const CollegePredictor = () => {
  const [activeTab, setActiveTab] = useState("predictor");

  useEffect(() => {
    const handler = (e) => {
      setActiveTab(e.detail);
    };
    window.addEventListener("switch-predictor-tab", handler);
    return () => window.removeEventListener("switch-predictor-tab", handler);
  }, []);

  return (
    <section id="college-predictor" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/10" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/20 rounded-full animate-pulse">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-accent font-bold tracking-wide uppercase text-sm">Smart Tools</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Plan Your <span className="text-accent">Education Abroad</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Use our AI-powered tools to find the right college and estimate your total investment.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex rounded-2xl border-2 border-accent/20 bg-card overflow-hidden max-w-lg mx-auto">
            <button
              onClick={() => setActiveTab("predictor")}
              className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-bold text-sm transition-all duration-300 ${
                activeTab === "predictor"
                  ? "bg-accent text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Stethoscope className="w-5 h-5" />
              College Predictor
            </button>
            <button
              onClick={() => setActiveTab("budget")}
              className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 font-bold text-sm transition-all duration-300 ${
                activeTab === "budget"
                  ? "bg-accent text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Calculator className="w-5 h-5" />
              Budget Calculator
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <ScrollReveal animation="scale">
            {activeTab === "predictor" ? <PredictorForm /> : <BudgetForm />}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

// Predictor Tab
function PredictorForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    neetScore: "",
    budget: [25],
    country: "all",
    category: "",
  });
  const [results, setResults] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handlePredict = async (e) => {
    e.preventDefault();
    const score = parseInt(formData.neetScore);
    if (isNaN(score) || score < 0 || score > 720) return;
    const predicted = predictColleges(score, formData.budget[0], formData.country);
    setResults(predicted);
    setSubmitted(true);

    // Save to database
    try {
      await fetch("/api/college-predictor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          neetScore: score,
          category: formData.category,
          budget: formData.budget[0],
          country: formData.country,
          matchedColleges: predicted.length,
        }),
      });
    } catch (err) {
      console.error("Failed to save predictor data:", err);
    }
  };

  const handleWhatsApp = () => {
    const msg = `Hi, I'm ${formData.name}. My NEET score is ${formData.neetScore}, category: ${formData.category || "N/A"}, budget ₹${formData.budget[0]} Lakh, preferred: ${formData.country === "all" ? "any country" : formData.country}. Phone: ${formData.phone}. Please guide me for MBBS abroad.`;
    window.open(`https://api.whatsapp.com/send/?phone=919885852424&text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="bg-card border-2 border-accent/20 rounded-3xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-accent to-accent/80 px-8 py-5 flex items-center gap-3">
        <Stethoscope className="w-7 h-7 text-white" />
        <h3 className="text-xl font-bold text-white">MBBS College Predictor</h3>
      </div>

      <form onSubmit={handlePredict} className="p-8 space-y-8">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
            <Input required placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-12 border-border/50 focus:border-accent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
            <Input required type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="h-12 border-border/50 focus:border-accent" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                NEET Score (0-720) *
              </span>
            </label>
            <Input required type="number" min={0} max={720} placeholder="Enter NEET score" value={formData.neetScore} onChange={(e) => setFormData({ ...formData, neetScore: e.target.value })} className="h-12 border-border/50 focus:border-accent text-lg font-semibold" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent" />
                Preferred Country
              </span>
            </label>
            <Select value={formData.country} onValueChange={(v) => setFormData({ ...formData, country: v })}>
              <SelectTrigger className="h-12 border-border/50 bg-white">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                {mbbsCountries.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Category *</label>
            <Select value={formData.category} onValueChange={(v) => setFormData({ ...formData, category: v })}>
              <SelectTrigger className="h-12 border-border/50 bg-white">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-4">
            Total Budget: <span className="text-accent text-xl font-bold">₹{formData.budget[0]} Lakh</span>
          </label>
          <Slider value={formData.budget} onValueChange={(v) => setFormData({ ...formData, budget: v })} min={10} max={60} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>₹10 Lakh</span><span>₹60 Lakh</span>
          </div>
        </div>

        <Button type="submit" variant="accent" size="xl" className="w-full group text-lg">
          <Sparkles className="w-5 h-5 mr-2" />
          Predict My Colleges
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>

      {submitted && results !== null && (
        <div className="px-8 pb-8">
          <div className="border-t border-border pt-8">
            {results.length > 0 ? (
              <>
                <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  {results.length} Universities Match Your Profile
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {results.map((college, i) => (
                    <div key={i} className="p-4 rounded-xl border border-border bg-muted/30 hover:border-accent/50 transition-colors">
                      <h5 className="font-bold text-foreground text-sm mb-2">{college.name}</h5>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>📍 {college.country}</p>
                        <p>💰 {college.fee}</p>
                        <p>📋 NEET: {college.neetRange}</p>
                        <p>✅ {college.recognition}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-lg text-muted-foreground mb-4">No exact matches found. Our counselors can help you find the best options.</p>
              </div>
            )}
            <Button onClick={handleWhatsApp} variant="accent" size="lg" className="w-full group">
              Get Detailed Counseling on WhatsApp
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// Budget Calculator Tab
function BudgetForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    programType: "",
    country: "",
    university: "",
    livingPreference: "",
    courseType: "",
  });
  const [estimate, setEstimate] = useState(null);

  const availableCountries = formData.programType ? budgetCountries[formData.programType] || [] : [];

  const handleCalculate = async (e) => {
    e.preventDefault();
    if (!formData.programType || !formData.country || !formData.livingPreference) return;
    const result = calculateBudget(formData.programType, formData.country, formData.livingPreference);
    setEstimate(result);

    // Save to database
    try {
      await fetch("/api/budget-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          programType: formData.programType,
          country: formData.country,
          university: formData.university,
          livingPreference: formData.livingPreference,
          courseType: formData.courseType,
          estimatedBudget: result.totalEstimate,
        }),
      });
    } catch (err) {
      console.error("Failed to save budget calculator data:", err);
    }
  };

  const handleWhatsApp = () => {
    const msg = `Hi, I'm ${formData.name}. I'm interested in ${formData.programType} in ${formData.country}${formData.university ? ` at ${formData.university}` : ""}. Living: ${formData.livingPreference}. Course type: ${formData.courseType || "N/A"}. Phone: ${formData.phone}. Please help me with budget planning.`;
    window.open(`https://api.whatsapp.com/send/?phone=919885852424&text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="bg-card border-2 border-accent/20 rounded-3xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary/80 px-8 py-5 flex items-center gap-3">
        <Calculator className="w-7 h-7 text-primary-foreground" />
        <h3 className="text-xl font-bold text-primary-foreground">AI Budget Calculator</h3>
      </div>

      <form onSubmit={handleCalculate} className="p-8 space-y-8">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
            <Input required placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-12 border-border/50 focus:border-accent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
            <Input required type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="h-12 border-border/50 focus:border-accent" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent" />
                Program Type *
              </span>
            </label>
            <Select value={formData.programType} onValueChange={(v) => setFormData({ ...formData, programType: v, country: "", university: "" })}>
              <SelectTrigger className="h-12 border-border/50 bg-white">
                <SelectValue placeholder="MBBS or Masters" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MBBS">MBBS</SelectItem>
                <SelectItem value="MASTERS">Masters</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Country *</label>
            <Select value={formData.country} onValueChange={(v) => setFormData({ ...formData, country: v })} disabled={!formData.programType}>
              <SelectTrigger className="h-12 border-border/50 bg-white">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {availableCountries.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">University (Optional)</label>
            <Input placeholder="e.g. Tbilisi State Medical" value={formData.university} onChange={(e) => setFormData({ ...formData, university: e.target.value })} className="h-12 border-border/50 focus:border-accent" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Living Preference *</label>
            <Select value={formData.livingPreference} onValueChange={(v) => setFormData({ ...formData, livingPreference: v })}>
              <SelectTrigger className="h-12 border-border/50 bg-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="University Hostel">University Hostel</SelectItem>
                <SelectItem value="Shared">Shared Apartment</SelectItem>
                <SelectItem value="Private">Private Apartment</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Course Type</label>
            <Select value={formData.courseType} onValueChange={(v) => setFormData({ ...formData, courseType: v })}>
              <SelectTrigger className="h-12 border-border/50 bg-white">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English Medium">English Medium</SelectItem>
                <SelectItem value="Local Language">Local Language</SelectItem>
                <SelectItem value="Bilingual">Bilingual</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" variant="accent" size="xl" className="w-full group text-lg">
          <Calculator className="w-5 h-5 mr-2" />
          Calculate My Budget
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </form>

      {estimate && (
        <div className="px-8 pb-8">
          <div className="border-t border-border pt-8">
            <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              Your Estimated Budget
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Tuition Fee (Total)", value: estimate.tuitionFee, icon: "🎓" },
                { label: "Living Cost (Total)", value: estimate.livingCost, icon: "🏠" },
                { label: "Total Estimate", value: estimate.totalEstimate, icon: "💰" },
                { label: "Program Duration", value: estimate.duration, icon: "📅" },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-xl border border-border bg-muted/30 text-center hover:border-accent/50 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-xs text-muted-foreground mt-2">{item.label}</p>
                  <p className="text-lg font-bold text-foreground mt-1">{item.value}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mb-4 text-center">* Estimates are approximate and may vary based on university, exchange rates, and personal spending.</p>
            <Button onClick={handleWhatsApp} variant="accent" size="lg" className="w-full group">
              Get Detailed Budget Plan on WhatsApp
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
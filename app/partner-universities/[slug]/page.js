"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getUniversityLogo } from "@/data/universityLogos";

import "flag-icons/css/flag-icons.min.css";

// export function generateMetadata({ params }) {
//   const slug = params.slug;
//   const countryName = slug.charAt(0).toUpperCase() + slug.slice(1);
//   return {
//     title: `Study MBBS in ${countryName} | Partner Universities | GVK EduTech`,
//     description: `Explore top medical universities in ${countryName}. GVK EduTech partners with NMC-approved institutions for MBBS abroad with affordable fees.`,
//     keywords: [`MBBS in ${countryName}`, `medical universities ${countryName}`, `study MBBS ${countryName}`, `partner universities ${countryName}`],
//   };
// }

const universityData = {
  nepal: {
    name: "Nepal",
    flag: "np",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
    universities: [
      { name: "Birat Medical College (KU), Biratnagar", website: "https://biratmedicalcollege.edu.np" },
      { name: "B & C Medical College (KU), Birtamod", website: "https://bncmc.edu.np" },
      { name: "Chitwan Medical College (TU), Bharatpur", website: "https://cmc.edu.np" },
      { name: "College of Medical Science (KU), Bharatpur", website: "https://cmstu.edu.np" },
      { name: "Devdaha Medical College (KU), Butwal", website: "https://dmc.edu.np" },
      { name: "Gandaki Medical College (TU), Pokhara", website: "https://gmc.edu.np" },
      { name: "Janaki Medical College (TU), Janakpur", website: "https://jmc.edu.np" },
      { name: "Kathmandu Medical College (KU), Kathmandu", website: "https://kmc.edu.np" },
      { name: "Kathmandu University (KUSMS), Dhulikhel", website: "https://ku.edu.np" },
      { name: "Karnali Academy of Health Science, Karnali", website: "https://kahs.edu.np" },
      { name: "KIST Medical College (TU), Kathmandu", website: "https://kistmch.edu.np" },
      { name: "Lumbini Medical College (KU), Palpa", website: "https://lmc.edu.np" },
      { name: "Manipal College of Medical Science (KU), Pokhara", website: "https://manipal.edu.np" },
      { name: "National Medical College (TU), Birgunj", website: "https://nmcbirgunj.edu.np" },
      { name: "Nepal Medical College (KU), Kathmandu", website: "https://nmcth.edu.np" },
      { name: "Nepalgunj Medical College (KU), Nepalgunj", website: "https://ngmc.edu.np" },
      { name: "Nobel Medical College (KU), Biratnagar", website: "https://nobel.edu.np" },
      { name: "Universal Medical College (TU), Bhairahawa", website: "https://umc.edu.np" },
    ],
  },
  georgia: {
    name: "Georgia",
    flag: "ge",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&auto=format&fit=crop",
    universities: [
      { name: "Akaki Tsereteli State University", website: "https://atsu.edu.ge" },
      { name: "Alte University School of Medicine", website: "https://alte.edu.ge" },
      { name: "Avicenna - Batumi Medical University", website: "https://avicenna.edu.ge" },
      { name: "Batumi Shota Rustaveli State University", website: "https://bsu.edu.ge" },
      { name: "BAU International University", website: "https://bau.edu.ge" },
      { name: "Caucasus International University (CIU)", website: "https://ciu.edu.ge" },
      { name: "Caucasus University (CU)", website: "https://cu.edu.ge" },
      { name: "Central University of Europe, Kutaisi", website: "https://cue.edu.ge" },
      { name: "David Tvildiani Medical University (DTMU)", website: "https://dtmu.edu.ge" },
      { name: "East European University (EEU)", website: "https://eeu.edu.ge" },
      { name: "East-West University (EWU)", website: "https://ewu.edu.ge" },
      { name: "European University (EU)", website: "https://europeanuniversity.edu.ge" },
      { name: "Geomedi University", website: "https://geomedi.edu.ge" },
      { name: "Georgian American University (GAU)", website: "https://gau.edu.ge" },
      { name: "Georgian National University (SEU)", website: "https://seu.edu.ge" },
      { name: "Grigol Robakidze University", website: "https://gruni.edu.ge" },
      { name: "International Black Sea University", website: "https://ibsu.edu.ge" },
      { name: "Ilia State University", website: "https://iliauni.edu.ge" },
      { name: "Ivane Javakhishvili Tbilisi State University", website: "https://tsu.edu.ge" },
      { name: "New Vision University", website: "https://nvision.edu.ge" },
      { name: "Petre Shotadze Tbilisi Medical Academy", website: "https://psma.edu.ge" },
      { name: "Tbilisi State Medical University (TSMU)", website: "/partner-universities/tbilisi-state-medical-university" },
      { name: "University of Georgia (UG)", website: "https://ug.edu.ge" },
    ],
  },
  kyrgyzstan: {
    name: "Kyrgyzstan",
    flag: "kg",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&auto=format&fit=crop",
    universities: [
      { name: "IHSM Central Campus", website: "https://ihsm.edu.kg" },
      { name: "IHSM Issyk-Kul Campus", website: "https://ihsm.edu.kg" },
      { name: "International Medical University", website: "https://imu.edu.kg" },
      { name: "Jalal-Abad State University", website: "https://jaau.edu.kg" },
      { name: "Kyrgyz National University", website: "https://knu.kg" },
      { name: "Kyrgyz-Russian Slavic University", website: "https://krsmu.edu.kg" },
      { name: "Kyrgyz State Medical Academy", website: "/partner-universities/kyrgyz-state-medical-academy" },
      { name: "Osh International Medical University", website: "https://oshtmu.edu.kg" },
      { name: "Osh State University", website: "https://oshsu.kg" },
      { name: "S. Tentishev Asian Medical Institute", website: "https://ami.edu.kg" },
      { name: "University Of South Asia", website: "https://usake.edu.kg" },
    ],
  },
  russia: {
    name: "Russia",
    flag: "ru",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&auto=format&fit=crop",
    universities: [
      { name: "Altai State Medical University", website: "https://asmu.ru" },
      { name: "Amur State Medical Academy", website: "https://amursma.ru" },
      { name: "Astrakhan State Medical University", website: "https://astrahmsu.ru" },
      { name: "Bashkir State Medical University", website: "https://bashgmu.ru" },
      { name: "Chita State Medical Academy", website: "https://chitagsma.ru" },
      { name: "Chuvash State University", website: "https://chuvsu.ru" },
      { name: "Crimean Federal University (CFU)", website: "https://cfuv.ru" },
      { name: "Dagestan State Medical University", website: "https://dsmu.ru" },
      { name: "Far Eastern Federal University (FEFU)", website: "https://dvfu.ru" },
      { name: "First Moscow State Medical University", website: "https://mma.ru" },
      { name: "Immanuel Kant Baltic Federal University", website: "https://kantiana.ru" },
      { name: "Ingush State University", website: "https://inggu.ru" },
      { name: "Irkutsk State Medical University", website: "https://ismu.irk.ru" },
      { name: "Ivanovo State Medical University", website: "https://ismu.ru" },
      { name: "Izhevsk State Medical Academy (ISMA)", website: "https://isma-russia.com" },
      { name: "Kabardino-Balkarian State University", website: "https://kbsu.ru" },
      { name: "Kadyrov Chechen State University", website: "https://csu.ru" },
      { name: "Kazan Federal University (KFU)", website: "https://kpfu.ru" },
      { name: "Kazan State Medical University", website: "https://kazgmu.ru" },
      { name: "Kemerovo State Medical University", website: "https://kemsma.ru" },
      { name: "Kemerovo State University", website: "https://kemerovu.ru" },
      { name: "Kirov State Medical University", website: "https://kirim.ru" },
      { name: "Krasnoyarsk State Medical University", website: "https://krasgmu.ru" },
      { name: "Kuban State Medical University", website: "https://ksma.ru" },
      { name: "Kursk State Medical University", website: "https://kursksmu.ru" },
      { name: "Lobachevsky State University", website: "https://unn.ru" },
      { name: "Lomonosov Moscow State University", website: "https://msu.ru" },
      { name: "Mari State University", website: "https://marsu.ru" },
      { name: "Maykop State University", website: "https://maykop.ru" },
      { name: "Murmansk Arctic State University", website: "https://masu.ru" },
      { name: "National Nuclear Research University (MEPhI)", website: "https://mephi.ru" },
      { name: "N.P. Ogarev Mordovia State University", website: "https://mrsu.ru" },
      { name: "North Caucasian State Academy (NCSA)", website: "https://ncsa.ru" },
      { name: "North Ossetian State Medical Academy", website: "https://nosma.ru" },
      { name: "North-Western State Medical University", website: "https://nwgmu.ru" },
      { name: "Northern State Medical University", website: "https://nsmu.ru" },
      { name: "Novosibirsk State University", website: "https://nsu.ru" },
      { name: "Omsk State Medical University", website: "https://omskosma.ru" },
      { name: "Orel State University", website: "https://orelun.ru" },
      { name: "Orenburg State Medical University", website: "https://orgma.ru" },
      { name: "Pacific State Medical University", website: "https://psmu.ru" },
      { name: "Penza State University", website: "https://penzsu.ru" },
      { name: "People's Friendship University (RUDN)", website: "https://rudn.ru" },
      { name: "Perm State Medical University", website: "https://pmsma.ru" },
      { name: "Petrozavodsk State University", website: "https://petrsu.ru" },
      { name: "Pirogov Russian National Research Medical University", website: "https://rsmu.ru" },
      { name: "Privolzhsky Research Medical University", website: "https://pimu.ru" },
      { name: "Rostov State Medical University", website: "https://rostgmu.ru" },
      { name: "Ryazan State Medical University", website: "https://ryazgmu.ru" },
      { name: "Samara State Medical University", website: "https://ssmu.ru" },
      { name: "Saratov State Medical University", website: "https://saratovgmu.ru" },
      { name: "Siberian State Medical University", website: "https://sibgmu.ru" },
      { name: "Smolensk State Medical University", website: "https://smolgmu.ru" },
      { name: "South-Ural State Medical University", website: "https://chelgmu.ru" },
      { name: "Stavropol State Medical University", website: "https://stvgmu.ru" },
      { name: "Surgut State University", website: "https://surgu.ru" },
      { name: "Tambov State University", website: "https://tambovgmu.ru" },
      { name: "Tula State University", website: "https://tsu.tula.ru" },
      { name: "Tver State Medical University", website: "https://tvergma.ru" },
      { name: "Tyumen State Medical University", website: "https://tyumgma.ru" },
      { name: "Ural State Medical University", website: "https://usma.ru" },
      { name: "Volgograd State Medical University", website: "https://volgmed.ru" },
      { name: "Voronezh State Medical University", website: "https://vgmu.ru" },
      { name: "Yaroslav-the-Wise Novgorod State University", website: "https://novsu.ru" },
      { name: "Yaroslavl State Medical University", website: "https://ysma.ru" },
    ],
  },
  uzbekistan: {
    name: "Uzbekistan",
    flag: "uz",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&auto=format&fit=crop",
    universities: [
      { name: "Asia International University", website: "https://aiu.uz" },
      { name: "Andijan State Medical Institute", website: "https://andijon.uz" },
      { name: "Bukhara State Medical Institute", website: "https://bukhara.uz" },
      { name: "Fergana Medical Institute of Public Health", website: "https://fergana.uz" },
      { name: "Karakalpakstan Medical Institute", website: "https://karakalpakstan.uz" },
      { name: "Namangan State University", website: "https://namdu.uz" },
      { name: "Samarkand State Medical University", website: "https://samarkand.uz" },
      { name: "Tashkent Medical Academy", website: "https://tma.uz" },
      { name: "Tashkent Pediatric Medical Institute", website: "https://tashpmi.uz" },
      { name: "Tashkent State Dental Institute", website: "https://tashdental.uz" },
    ],
  },
  kazakhstan: {
    name: "Kazakhstan",
    flag: "kz",
    image: "https://images.unsplash.com/photo-1625657799852-3d2bd008a050?w=800&auto=format&fit=crop",
    universities: [
      { name: "Al-Farabi Kazakh National University", website: "https://kaznu.kz" },
      { name: "Asfendiyarov Kazakh National University", website: "https://kaznmu.kz" },
      { name: "Caspian International School of Medicine", website: "https://cism.edu.kz" },
      { name: "Karaganda Medical University", website: "https://kazmu.edu.kz" },
      { name: "Kazakh-Russian Medical University", website: "https://krmu.edu.kz" },
      { name: "Astana Medical University", website: "https://amu.edu.kz" },
      { name: "Semey Medical University", website: "https://semeymedicaluniversity.kz" },
      { name: "Kokshetau State University", website: "https://kokshetau.edu.kz" },
      { name: "South Kazakhstan Medical Academy", website: "https://skma.edu.kz" },
      { name: "West Kazakhstan Medical University", website: "https://wkmu.edu.kz" },
    ],
  },
  vietnam: {
    name: "Vietnam",
    flag: "vn",
    image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&auto=format&fit=crop",
    universities: [
      { name: "Hanoi Medical University (HMU)", website: "https://hmu.edu.vn" },
      { name: "University of Medicine and Pharmacy at HCMC", website: "https://ump.edu.vn" },
      { name: "Hue University of Medicine and Pharmacy", website: "https://hueuniversity.edu.vn" },
      { name: "Can Tho University of Medicine and Pharmacy", website: "https://ctump.edu.vn" },
      { name: "Thai Nguyen University of Medicine and Pharmacy", website: "https://tnump.edu.vn" },
      { name: "Hai Phong University of Medicine and Pharmacy", website: "https://hpmu.edu.vn" },
      { name: "Pham Ngoc Thach University of Medicine", website: "https://pnt.edu.vn" },
    ],
  },
  uk: {
    name: "United Kingdom",
    flag: "gb",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop",
    universities: [
      { name: "Bangor University", website: "https://bangor.ac.uk" },
      { name: "Coventry University", website: "https://coventry.ac.uk" },
      { name: "De Montfort University", website: "https://dmu.ac.uk" },
      { name: "University of Roehampton", website: "https://roehampton.ac.uk" },
      { name: "University of East London", website: "https://uel.ac.uk" },
      { name: "University of Greenwich", website: "/partner-universities/university-of-greenwich" },
      { name: "Hertfordshire University", website: "https://herts.ac.uk" },
      { name: "University of Gloucestershire", website: "https://glos.ac.uk" },
      { name: "Ravensbourne University London", website: "https://rave.ac.uk" },
      { name: "Solent University", website: "https://solent.ac.uk" },
      { name: "Teesside University", website: "https://tees.ac.uk" },
      { name: "University of East Anglia", website: "https://uea.ac.uk" },
      { name: "Cardiff Metropolitan University", website: "https://cardiffmet.ac.uk" },
      { name: "Heriot Watt University", website: "https://hw.ac.uk" },
      { name: "Nottingham Trent University", website: "https://ntu.ac.uk" },
      { name: "Swansea University", website: "https://swansea.ac.uk" },
      { name: "University of Wolverhampton", website: "https://wolverhampton.ac.uk" },
      { name: "University of Chester", website: "https://chester.ac.uk" },
      { name: "BPP University", website: "https://bpp.com" },
      { name: "Birmingham City University", website: "https://bcu.ac.uk" },
      { name: "University of Bradford", website: "https://bradford.ac.uk" },
      { name: "Northumbria University", website: "https://northumbria.ac.uk" },
      { name: "Manchester Metropolitan University", website: "https://mmu.ac.uk" },
      { name: "Wrexham Glyndwr University", website: "https://glyndeff.ac.uk" },
      { name: "Sheffield Hallam University", website: "https://shu.ac.uk" },
      { name: "Brunel University London", website: "https://brunel.ac.uk" },
      { name: "University of Westminster", website: "https://westminster.ac.uk" },
      { name: "University of Bristol", website: "https://bristol.ac.uk" },
      { name: "University of Leeds", website: "https://leeds.ac.uk" },
      { name: "University of Glasgow", website: "https://glasgow.ac.uk" },
      { name: "Durham University", website: "https://durham.ac.uk" },
      { name: "University of Southampton", website: "https://soton.ac.uk" },
      { name: "University of Birmingham", website: "https://birmingham.ac.uk" },
      { name: "University of Nottingham", website: "https://nottingham.ac.uk" },
      { name: "University of Sheffield", website: "https://sheffield.ac.uk" },
      { name: "Newcastle University", website: "https://newcastle.ac.uk" },
      { name: "Lancaster University", website: "https://lancaster.ac.uk" },
      { name: "Queen Mary University of London", website: "https://qmul.ac.uk" },
      { name: "University of Bath", website: "https://bath.ac.uk" },
      { name: "The University of Exeter", website: "https://exeter.ac.uk" },
      { name: "Cardiff University", website: "https://cardiff.ac.uk" },
      { name: "University of York", website: "https://york.ac.uk" },
      { name: "University of Liverpool", website: "https://liverpool.ac.uk" },
      { name: "Cranfield University", website: "https://cranfield.ac.uk" },
      { name: "Queens University Belfast", website: "https://qub.ac.uk" },
      { name: "University of Aberdeen", website: "https://abdn.ac.uk" },
      { name: "Loughborough University", website: "https://lboro.ac.uk" },
      { name: "University of Sussex", website: "https://sussex.ac.uk" },
      { name: "University of Surrey", website: "https://surrey.ac.uk" },
      { name: "University of Leicester", website: "https://le.ac.uk" },
      { name: "University of Strathclyde", website: "https://strath.ac.uk" },
    ],
  },
  usa: {
    name: "USA",
    flag: "us",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&auto=format&fit=crop",
    universities: [
      { name: "Saint Louis University", website: "https://slu.edu" },
      { name: "Webster University", website: "https://webster.edu" },
      { name: "Arkansas State University", website: "https://astate.edu" },
      { name: "University of Memphis", website: "https://memphis.edu" },
      { name: "University of Findlay", website: "https://findlay.edu" },
      { name: "Wichita State University", website: "https://wichita.edu" },
      { name: "University of Missouri St. Louis", website: "https://umsl.edu" },
      { name: "Southern New Hampshire University", website: "https://snhu.edu" },
      { name: "Sacred Heart University", website: "https://sacredheart.edu" },
      { name: "Southeast Missouri State University", website: "https://semo.edu" },
      { name: "SUNY Buffalo State College", website: "https://buffalostate.edu" },
      { name: "New Jersey Institute of Technology", website: "https://njit.edu" },
      { name: "San Jose State University", website: "https://sjsu.edu" },
      { name: "University of North Texas", website: "https://unt.edu" },
      { name: "University of New Haven", website: "https://newhaven.edu" },
      { name: "University of Albany SUNY", website: "https://albany.edu" },
      { name: "Baylor University", website: "https://baylor.edu" },
      { name: "Marquette University", website: "https://marquette.edu" },
      { name: "University of South Dakota", website: "https://usd.edu" },
      { name: "University of Cincinnati", website: "https://uc.edu" },
      { name: "Johns Hopkins University", website: "https://jhu.edu" },
      { name: "Arizona State University", website: "https://asu.edu" },
      { name: "University of California", website: "https://uc.edu" },
      { name: "University of South Florida", website: "https://usf.edu" },
      { name: "Drexel University", website: "https://drexel.edu" },
      { name: "University of Delaware", website: "https://udel.edu" },
      { name: "Miami University", website: "https://miamioh.edu" },
      { name: "University of Wisconsin", website: "https://wisc.edu" },
      { name: "George Mason University", website: "https://gmu.edu" },
      { name: "Montclair State University", website: "https://montclair.edu" },
      { name: "Colorado State University", website: "https://colostate.edu" },
      { name: "Oregon State University", website: "https://oregonstate.edu" },
      { name: "University of Illinois at Chicago", website: "https://uic.edu" },
      { name: "The University of Alabama", website: "https://ua.edu" },
      { name: "Claremont Graduate University", website: "https://cgu.edu" },
      { name: "Auburn University", website: "https://auburn.edu" },
      { name: "University of Utah", website: "https://utah.edu" },
      { name: "Ohio University", website: "https://ohio.edu" },
      { name: "University of Kansas", website: "https://ku.edu" },
      { name: "University of Oklahoma", website: "https://ou.edu" },
      { name: "University of Maryland", website: "https://umd.edu" },
      { name: "University of Tennessee", website: "https://tennessee.edu" },
    ],
  },
  australia: {
    name: "Australia",
    flag: "au",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop",
    universities: [
      { name: "The University of New South Wales", website: "https://unsw.edu.au" },
      { name: "Monash University", website: "https://monash.edu" },
      { name: "The University of Queensland", website: "https://uq.edu.au" },
      { name: "University of Western Australia", website: "https://uwa.edu.au" },
      { name: "The University of Adelaide", website: "https://adelaide.edu.au" },
      { name: "University of Technology Sydney", website: "https://uts.edu.au" },
      { name: "Macquarie University", website: "https://mq.edu.au" },
      { name: "RMIT University", website: "https://rmit.edu.au" },
      { name: "University of Wollongong", website: "https://uow.edu.au" },
      { name: "The University of Newcastle", website: "https://newcastle.edu.au" },
      { name: "Queensland University of Technology", website: "https://qut.edu.au" },
      { name: "Deakin University", website: "https://deakin.edu.au" },
      { name: "La Trobe University", website: "https://latrobe.edu.au" },
      { name: "Griffith University", website: "https://griffith.edu.au" },
      { name: "Swinburne University of Technology", website: "https://swinburne.edu.au" },
      { name: "Western Sydney University", website: "https://westernsydney.edu.au" },
      { name: "University of Tasmania", website: "https://utas.edu.au" },
      { name: "University of South Australia", website: "https://unisa.edu.au" },
      { name: "Flinders University", website: "https://flinders.edu.au" },
      { name: "Charles Darwin University", website: "https://cdu.edu.au" },
      { name: "James Cook University", website: "https://jcu.edu.au" },
      { name: "CQUniversity Australia", website: "https://cqu.edu.au" },
      { name: "Australian Catholic University", website: "https://acu.edu.au" },
      { name: "Torrens University", website: "https://torrens.edu.au" },
      { name: "Victoria University", website: "https://vu.edu.au" },
      { name: "University of Canberra", website: "https://canberra.edu.au" },
      { name: "University of the Sunshine Coast", website: "https://usc.edu.au" },
      { name: "Kaplan Business School", website: "https://kaplan.edu.au" },
      { name: "Le Cordon Bleu", website: "https://lcbs.edu.au" },
      { name: "International College of Management Sydney", website: "https://icms.edu.au" },
    ],
  },
  canada: {
    name: "Canada",
    flag: "ca",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&auto=format&fit=crop",
    universities: [
      { name: "York University", website: "https://yorku.ca" },
      { name: "Brock University", website: "https://brocku.ca" },
      { name: "Royal Roads University", website: "https://royalroads.ca" },
      { name: "University of Saskatchewan", website: "https://usask.ca" },
      { name: "Wilfrid Laurier University", website: "https://wlu.ca" },
      { name: "Fairleigh Dickinson University", website: "https://fdu.edu" },
      { name: "McGill University", website: "https://mcgill.ca" },
      { name: "University of Lethbridge", website: "https://uleth.ca" },
      { name: "Simon Fraser University", website: "https://sfu.ca" },
      { name: "University of Waterloo", website: "https://uwaterloo.ca" },
      { name: "Lakehead University", website: "https://lakeheadu.ca" },
      { name: "University of Calgary", website: "https://ucalgary.ca" },
      { name: "Queens University", website: "https://queensu.ca" },
      { name: "University of Winnipeg", website: "https://uwinnipeg.ca" },
      { name: "University of Manitoba", website: "https://umanitoba.ca" },
      { name: "Dalhousie University", website: "https://dal.ca" },
      { name: "University of Prince Edward Island", website: "https://upei.ca" },
      { name: "Toronto Metropolitan University", website: "https://torontomu.ca" },
      { name: "University of Victoria", website: "https://uvic.ca" },
      { name: "Acadia University", website: "https://acadiau.ca" },
      { name: "Vancouver Island University", website: "https://viu.ca" },
      { name: "St. Francis Xavier University", website: "https://stfx.ca" },
      { name: "St. Thomas University", website: "https://stu.ca" },
      { name: "University of Guelph", website: "https://uoguelph.ca" },
      { name: "University of Northern British Columbia", website: "https://unbc.ca" },
      { name: "University Canada West", website: "https://ucwest.ca" },
      { name: "University of Windsor", website: "https://uwindsor.ca" },
      { name: "Thompson Rivers University", website: "https://tru.ca" },
      { name: "New York Institute of Technology", website: "https://nyit.edu" },
      { name: "Memorial University of Newfoundland", website: "https://mun.ca" },
      { name: "Trent University", website: "https://trentu.ca" },
      { name: "Cape Breton University", website: "https://cbu.ca" },
      { name: "George Brown College", website: "https://georgebrown.ca" },
      { name: "Sheridan College", website: "https://sheridancollege.ca" },
      { name: "Seneca Polytechnic", website: "https://senecapolytechnic.ca" },
    ],
  },
  germany: {
    name: "Germany",
    flag: "de",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop",
    universities: [
      { name: "IU International University of Applied Sciences", website: "https://iu.org" },
      { name: "Berlin School of Business & Innovation", website: "https://berlinsbi.com" },
      { name: "University of Applied Sciences Europe", website: "https://ue-germany.com" },
      { name: "SRH Hochschule Heidelberg", website: "https://srh-hochschule-heidelberg.com" },
      { name: "SRH Hochschule Berlin", website: "https://srh-hochschule-berlin.com" },
      { name: "SRH Hochschule Hamburg", website: "https://srh-hochschule-hamburg.com" },
      { name: "SRH Hochschule Dresden", website: "https://srh-hochschule-dresden.com" },
      { name: "SRH Hochschule Nordrhein-Westfalen", website: "https://srh-hochschule-nrw.de" },
      { name: "ISM International School of Management", website: "https://ism.de" },
      { name: "Steinbeis University", website: "https://steinbeis-university.de" },
      { name: "Eurasia Institute", website: "https://eurasia-university.de" },
      { name: "Arden University", website: "https://arden.edu" },
      { name: "EU Business School", website: "https://euruni.edu" },
      { name: "GISMA Business School", website: "https://gisma.com" },
      { name: "New European College", website: "https://neuecolleg.de" },
    ],
  },
  europe: {
    name: "Rest of Europe",
    flag: "eu",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop",
    universities: [
      { name: "Domus Academy - Milan, Italy", website: "https://domusacademy.it" },
      { name: "Campus Spain - Madrid, Spain", website: "https://campus-spain.com" },
      { name: "Bella Vista - Zurich, Switzerland", website: "https://bellavistazurich.com" },
      { name: "Istituto Europeo di Design - Rome, Italy", website: "https://ied.edu" },
      { name: "Business and Hotel Management School - Lucerne, Switzerland", website: "https://bhms.ch" },
      { name: "Hochschule Fresenius University of Applied Science - Berlin, Germany", website: "https://fresenius.de" },
    ],
  },
};

// Function to get logo URL - uses real logos from universityLogos mapping
const getLogoUrl = (universityName, website) => {
  return getUniversityLogo(universityName, website);
};

const PartnerUniversityDetailPage = () => {
  const { slug } = useParams();
  const country = universityData[slug];

  if (!country) {
    return (
      <PageLayout>
        <PageHeader title="University Not Found" breadcrumb="Partner Universities" />
        <section className="py-16 section-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              University Not Found
            </h2>
            <p className="text-muted-foreground mb-8">
              The requested university country could not be found.
            </p>
            <Button asChild>
              <Link href="/partner-universities">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Partner Universities
              </Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHeader
        title={`Universities in ${country.name}`}
        subtitle={`${country.universities.length} Partner Universities`}
        breadcrumb={`Partner Universities`}
        backgroundImage={country.image}
      />

      {/* University List */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm" className="mb-4">
              <Link href="/partner-universities">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Countries
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {country.universities.map((uni, index) => {
              const isInternal = uni.website && uni.website.startsWith("/");
              return isInternal ? (
                <Link
                  key={index}
                  href={uni.website}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-lg hover:border-accent transition-all group"
                >
                  <img
                    src={getLogoUrl(uni.name, uni.website)}
                    alt={uni.name}
                    className="w-12 h-12 rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-foreground font-medium block truncate">
                      {uni.name}
                    </span>
                    <span className="text-xs text-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ) : (
                <a
                  key={index}
                  href={uni.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/50 transition-all group"
                >
                  <img
                    src={getLogoUrl(uni.name, uni.website)}
                    alt={uni.name}
                    className="w-12 h-12 rounded-xl flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-foreground font-medium block truncate">
                      {uni.name}
                    </span>
                    <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit Website <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Interested in Studying in {country.name}?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Our expert counselors can help you choose the right university and guide you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="xl" className="group">
              <Link href="/apply">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <a href={`https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+want+to+know+more+about+studying+in+${country.name}.`}>
                Get Free Counseling
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PartnerUniversityDetailPage;
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";
import Link from "next/link";

import "flag-icons/css/flag-icons.min.css";

export const metadata = {
  title: "Partner Universities - GVK EduTech | Global University Network",
  description: "Explore our network of 100+ partner universities worldwide for MBBS and Masters programs. Top-ranked institutions in Russia, Georgia, Kyrgyzstan, USA, UK, Australia and more.",
  keywords: ["partner universities", "MBBS universities abroad", "study abroad universities", "international universities network", "GVK EduTech university partners"],
  openGraph: {
    title: "Partner Universities | GVK EduTech",
    description: "100+ partner universities worldwide offering MBBS and Masters programs.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GVK EduTech Partner Universities" }],
  },
};

const universityData = {
  nepal: {
    name: "Nepal",
    flag: "np",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",
    universities: [
      "Birat Medical College (KU), Biratnagar",
      "B & C Medical College (KU), Birtamod",
      "Chitwan Medical College (TU), Bharatpur",
      "College of Medical Science (KU), Bharatpur",
      "Devdaha Medical College (KU), Butwal",
      "Gandaki Medical College (TU), Pokhara",
      "Janaki Medical College (TU), Janakpur",
      "Kathmandu Medical College (KU), Kathmandu",
      "Kathmandu University (KUSMS), Dhulikhel",
      "Karnali Academy of Health Science, Karnali",
      "KIST Medical College (TU), Kathmandu",
      "Lumbini Medical College (KU), Palpa",
      "Manipal College of Medical Science (KU), Pokhara",
      "National Medical College (TU), Birgunj",
      "Nepal Medical College (KU), Kathmandu",
      "Nepalgunj Medical College (KU), Nepalgunj",
      "Nobel Medical College (KU), Biratnagar",
      "Universal Medical College (TU), Bhairahawa",
    ],
  },
  georgia: {
    name: "Georgia",
    flag: "ge",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&auto=format&fit=crop",
    universities: [
      "Akaki Tsereteli State University",
      "Alte University School of Medicine",
      "Avicenna - Batumi Medical University",
      "Batumi Shota Rustaveli State University",
      "BAU International University",
      "Caucasus International University (CIU)",
      "Caucasus University (CU)",
      "Central University of Europe, Kutaisi",
      "Central University of Europe, Tbilisi",
      "David Tvildiani Medical University (DTMU)",
      "East European University (EEU)",
      "East-West University (EWU)",
      "European University (EU)",
      "Geomedi University",
      "Georgian American University (GAU)",
      "Georgian National University (SEU)",
      "Grigol Robakidze University",
      "International Black Sea University",
      "Ilia State University",
      "Ivane Javakhishvili Tbilisi State University",
      "New Vision University",
      "Petre Shotadze Tbilisi Medical Academy",
      "Tbilisi State Medical University (TSMU)",
      "University of Georgia (UG)",
    ],
  },
  kyrgyzstan: {
    name: "Kyrgyzstan",
    flag: "kg",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&auto=format&fit=crop",
    universities: [
      "IHSM Central Campus",
      "IHSM Issyk-Kul Campus",
      "International Medical University",
      "Jalal-Abad State University",
      "Kyrgyz National University",
      "Kyrgyz-Russian Slavic University",
      "Kyrgyz State Medical Academy",
      "Osh International Medical University",
      "Osh State University",
      "S. Tentishev Asian Medical Institute",
      "University Of South Asia",
    ],
  },
  russia: {
    name: "Russia",
    flag: "ru",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&auto=format&fit=crop",
    universities: [
      "Altai State Medical University",
      "Amur State Medical Academy",
      "Astrakhan State Medical University",
      "Bashkir State Medical University",
      "Chita State Medical Academy",
      "Chuvash State University",
      "Crimean Federal University (CFU)",
      "Dagestan State Medical University",
      "Far Eastern Federal University (FEFU)",
      "First Moscow State Medical University",
      "Immanuel Kant Baltic Federal University",
      "Ingush State University",
      "Irkutsk State Medical University",
      "Ivanovo State Medical University",
      "Izhevsk State Medical Academy (ISMA)",
      "Kabardino-Balkarian State University",
      "Kadyrov Chechen State University",
      "Kazan Federal University (KFU)",
      "Kazan State Medical University",
      "Kemerovo State Medical University",
      "Kemerovo State University",
      "Kirov State Medical University",
      "Krasnoyarsk State Medical University",
      "Kuban State Medical University",
      "Kursk State Medical University",
      "Lobachevsky State University",
      "Lomonosov Moscow State University",
      "Mari State University",
      "Maykop State University",
      "Murmansk Arctic State University",
      "National Nuclear Research University \"MEPhI\" (Moscow Branch)",
      "National Nuclear Research University \"MEPhI\" (Obninsk Branch)",
      "N.P. Ogarev Mordovia State University",
      "North Caucasian State Academy (NCSA)",
      "North Ossetian State Medical Academy",
      "North-Western State Medical University",
      "Northern State Medical University",
      "Novosibirsk State University",
      "Omsk State Medical University",
      "Orel State University",
      "Orenburg State Medical University",
      "Pacific State Medical University",
      "Penza State University",
      "People's Friendship University \"RUDN\"",
      "Perm State Medical University",
      "Petrozavodsk State University",
      "Pirogov Russian National Research Medical University",
      "Pitirim Sorokin Syktyvkar State University",
      "Privolzhsky Research Medical University",
      "Pskov State University",
      "Rostov State Medical University",
      "Ryazan State Medical University",
      "Saint Petersburg State University of Veterinary Medicine",
      "Samara State Medical University",
      "Saratov State Medical University",
      "Sevastopol State University",
      "Siberian State Medical University",
      "Smolensk State Medical University",
      "South-Ural State Medical University",
      "Stavropol State Medical University",
      "Surgut State University",
      "Synergy University",
      "Tambov State University",
      "Tula State University",
      "Tver State Medical University",
      "Tyumen State Medical University",
      "Ulyanovsk State University",
      "Ural State Medical University",
      "Volgograd State Medical University",
      "Voronezh State Medical University",
      "Yaroslav-the-Wise Novgorod State University",
      "Yaroslavl State Medical University",
    ],
  },
  uzbekistan: {
    name: "Uzbekistan",
    flag: "uz",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&auto=format&fit=crop",
    universities: [
      "Asia International University",
      "Andijan State Medical Institute",
      "Bukhara State Medical Institute",
      "Fergana Medical Institute of Public Health",
      "Karakalpakstan Medical Institute",
      "Namangan State University",
      "Samarkand State Medical University",
      "Tashkent Medical Academy, Tashkent",
      "Tashkent Medical Academy, Chirchiq",
      "Tashkent Medical Academy, Termez",
      "Tashkent Medical Academy, Urgench",
      "Tashkent Pediatric Medical Institute",
      "Tashkent State Dental Institute",
    ],
  },
  kazakhstan: {
    name: "Kazakhstan",
    flag: "kz",
    image: "https://images.unsplash.com/photo-1625657799852-3d2bd008a050?w=800&auto=format&fit=crop",
    universities: [
      "Al-Farabi Kazakh National University",
      "Asfendiyarov Kazakh National University",
      "Caspian International School of Medicine",
      "Karaganda Medical University",
      "Kazakh-Russian Medical University",
      "Astana Medical University",
      "Semey Medical University",
      "Kokshetau State University",
      "South Kazakhstan Medical Academy",
      "West Kazakhstan Medical University",
    ],
  },
  vietnam: {
    name: "Vietnam",
    flag: "vn",
    image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&auto=format&fit=crop",
    universities: [
      "Hanoi Medical University (HMU)",
      "University of Medicine and Pharmacy at HCMC",
      "Hue University of Medicine and Pharmacy",
      "Can Tho University of Medicine and Pharmacy",
      "Thai Nguyen University of Medicine and Pharmacy",
      "Hai Phong University of Medicine and Pharmacy",
      "Pham Ngoc Thach University of Medicine",
    ],
  },
  uk: {
    name: "United Kingdom",
    flag: "gb",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop",
    universities: [
      "Bangor University", "Coventry University", "De Montfort University",
      "University of Roehampton", "University of East London", "University of Greenwich",
      "Hertfordshire University", "University of Gloucestershire", "Ravensbourne University London",
      "Solent University", "Teesside University", "University of East Anglia",
      "Cardiff Metropolitan University", "Heriot Watt University", "Nottingham Trent University",
      "Swansea University", "University of Wolverhampton", "University of Chester",
      "BPP University", "Birmingham City University", "University of Bradford",
      "Northumbria University London", "Manchester Metropolitan University", "Wrexham Glyndwr University",
      "Sheffield Hallam University", "Brunel University London", "University of Westminster",
      "University of Bristol", "University of Leeds", "University of Glasgow",
      "Durham University", "University of Southampton", "University of Birmingham",
      "University of Nottingham", "University of Sheffield", "Newcastle University",
      "Lancaster University", "Queen Mary University of London", "University of Bath",
      "The University of Exeter", "Cardiff University", "University of York",
      "University of Liverpool", "Cranfield University", "Queens University Belfast",
      "University of Aberdeen", "Loughborough University", "University of Sussex",
      "University of Surrey", "University of Leicester", "University of Strathclyde",
    ],
  },
  usa: {
    name: "USA",
    flag: "us",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&auto=format&fit=crop",
    universities: [
      "Saint Louis University", "Webster University", "Arkansas State University",
      "University of Memphis", "University of Findlay", "Wichita State University",
      "University of Missouri St. Louis", "Southern New Hampshire", "Sacred Heart University",
      "South East Missouri University", "SUNY Buffalo State College", "New Jersey Institute of Technology",
      "San Jose State University", "University of North Texas", "University of New Haven",
      "University of Albany SUNY", "Baylor University", "Marquette University",
      "University of South Dakota", "University of Cincinnati", "Johns Hopkins University",
      "Arizona State University", "University of California", "University of South Florida",
      "Drexel University", "University of Delaware", "Miami University",
      "University of Wisconsin", "George Mason University", "Montclair State University",
      "Colorado State University", "Oregon State University", "University of Illinois at Chicago",
      "The University of Alabama", "Claremont Graduate University", "Auburn University",
      "University of Utah", "Ohio University", "University of Kansas",
      "University of Oklahoma", "University of Maryland", "University of Tennessee",
    ],
  },
  australia: {
    name: "Australia",
    flag: "au",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop",
    universities: [
      "The University of New South Wales", "Monash University", "The University of Queensland",
      "University of Western Australia", "The University of Adelaide", "University of Technology Sydney",
      "Macquarie University", "RMIT University", "University of Wollongong",
      "The University of Newcastle", "Queensland University of Technology", "Deakin University",
      "La Trobe University", "Griffith University", "Swinburne University of Technology",
      "Western Sydney University", "University of Tasmania", "University of South Australia",
      "Flinders University", "Charles Darwin University", "James Cook University",
      "CQUniversity Australia", "Australian Catholic University", "Torrens University",
      "Victoria University", "University of Canberra", "University of the Sunshine Coast",
      "Kaplan Business School", "Le Cordon Bleu", "International College of Management Sydney",
    ],
  },
  canada: {
    name: "Canada",
    flag: "ca",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&auto=format&fit=crop",
    universities: [
      "York College", "Brock University", "Royal Roads University",
      "Saskatchewan Colleges", "Wilfrid Laurier University", "Fairleigh Dickinson University",
      "McGill University's School of Continuing Studies", "University of Lethbridge", "Simon Fraser University",
      "University of Waterloo", "Lakehead University", "University of Calgary",
      "Queen's University", "University of Winnipeg", "University of Manitoba",
      "Dalhousie University", "University of Prince Edward Island", "Toronto Metropolitan University",
      "University of Victoria", "Acadia University", "Vancouver Island University",
      "York University", "St. Francis Xavier University", "St. Thomas University",
      "University of Guelph", "University of Northern British Columbia", "University Canada West",
      "University of Windsor", "Thompson Rivers University", "New York Institute of Technology",
      "Memorial University of Newfoundland", "Trent University", "Cape Breton University",
      "George Brown College", "Sheridan College", "Seneca Polytechnic",
    ],
  },
  germany: {
    name: "Germany",
    flag: "de",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop",
    universities: [
      "IU International University of Applied Sciences", "Berlin School of Business & Innovation (BSBI)",
      "University of Applied Sciences Europe (UE)", "SRH Hochschule Heidelberg",
      "SRH Hochschule Berlin", "SRH Hochschule Hamburg",
      "SRH Hochschule Dresden", "SRH Hochschule Nordrhein-Westfalen",
      "ISM International School of Management GmbH", "Steinbeis University",
      "Eurasia Institute", "Arden University",
      "EU Business School", "GISMA Business School",
      "New European College",
    ],
  },
  europe: {
    name: "Rest of Europe",
    flag: "eu",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop",
    universities: [
      "Domus Academy - Milan, Italy",
      "Campus Spain - Madrid, Spain",
      "Bella Vista - Zurich, Switzerland",
      "Istituto Europeo di Design - Rome, Italy",
      "Business and Hotel Management School – BHMS - Lucerne, Switzerland",
      "Hochschule Fresenius University of Applied Science - Berlin, Germany",
    ],
  },
};

const PartnerUniversitiesPage = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Partner Universities"
        subtitle="Explore Your Dream Universities Worldwide"
        breadcrumb="Partner Universities"
      />

      {/* Introduction */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">150+ Partner Universities</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Your Gateway to <span className="text-primary">Elite Universities</span> for Masters Abroad
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Selecting the right university for your postgraduate education is a pivotal decision
              that shapes your future. At GVK Edutech, we are dedicated to guiding you toward the
              optimal choice. Our carefully curated network encompasses prestigious universities
              across premier study destinations, each offering exceptional master's programs,
              groundbreaking research opportunities, and enriching campus experiences that foster
              both academic and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Universities by Country */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Our Network
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
              Universities by Country
            </h2>
          </div>

          <Accordion type="single" collapsible defaultValue="mbbs" className="space-y-4">
            {Object.entries(universityData).map(([key, country]) => (
              <AccordionItem
                key={key}
                value={key}
                className="border border-border rounded-2xl overflow-hidden bg-background"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        {key === "mbbs" ? (
                          <span className="text-2xl">🏥</span>
                        ) : (
                          <span className={`fi fi-${country.flag}`} style={{ fontSize: "2rem" }}></span>
                        )}
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        Universities in {country.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {country.universities.length} Partner Universities
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4 border-t border-border">
                    {country.universities.map((uni, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{uni}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Apply to Your Dream University?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Our experienced counselors will assist you in identifying the perfect university
            tailored to your academic profile, financial considerations, and career aspirations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="xl" className="group">
              <Link href="/apply">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <a href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+want+to+know+more+about+partner+universities.">
                Get Free Counseling
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PartnerUniversitiesPage;

"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, GraduationCap, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import "flag-icons/css/flag-icons.min.css";

const universityData = {
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
            {country.universities.map((uni, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/50 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-medium">{uni}</span>
              </div>
            ))}
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

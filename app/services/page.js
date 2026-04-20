import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Our Services - GVK EduTech | Complete Study Abroad Support",
  description: "GVK EduTech offers comprehensive services including career counselling, university selection, visa assistance, and pre-departure briefings for MBBS and Masters abroad.",
  keywords: ["education consultancy services", "study abroad services", "visa assistance", "university admission help", "pre-departure briefing"],
  openGraph: {
    title: "GVK EduTech Services",
    description: "Comprehensive support for your study abroad journey - from counselling to visa assistance.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GVK EduTech Services" }],
  },
};

const services = [
  {
    title: "Career Counselling",
    description: "Our expert career counsel panel will provide you with a wide range of options to choose from the most reputed universities all over the globe and explain the possibilities of options with pros and cons.",
    icon: "🎯"
  },
  {
    title: "University Selection",
    description: "Our well-trained counselors guide students in getting selected for the best university based on their academics and performance.",
    icon: "🏛️"
  },
  {
    title: "Application Process",
    description: "Starting from registration to the confirmation of admission in the selected university, everything is taken care of by our highly trained experts in the international affairs panel, easing the burden on students or parents.",
    icon: "📝"
  },
  {
    title: "Visa Assistance",
    description: "Our qualified assistant will foresee all the documents regarding visas and personally apply for the visa for the student with scrutiny and care. We will ensure smooth student transition in every step of admission.",
    icon: "🛂"
  },
  {
    title: "Pre Departure Briefings",
    description: "The student is briefed about the place, climatic conditions, people, language, basic rules for the traveling country, and academic procedures to help the student familiarize himself.",
    icon: "✈️"
  },
  {
    title: "Foreign Exchange",
    description: "GVK EDUTECH has tie-ups with reputed Forex dealers to ensure that our students get a competitive exchange.",
    icon: "💱"
  },
  {
    title: "Travel Assistance",
    description: "We provide the student with ideal travel dates, flight tickets with selected class and help the transition hassle-free to the student.",
    icon: "🌍"
  },
  {
    title: "Post Departure Assistance",
    description: "GVK EDUTECH overseas advisors located in various countries will be receiving you at airports and will make you settle down seamlessly.",
    icon: "🏠"
  },
  {
    title: "Accommodation",
    description: "We have an on-campus state of the art hostel facility completely maintained by Indian staff for students.",
    icon: "🏨"
  },
  {
    title: "Student Profile Analysis",
    description: "Once the student begins the course, our management will be in constant touch with the parents and students regarding academics, hostel, and mess facilities till the completion of their course.",
    icon: "📊"
  },
  {
    title: "Financial Assistance",
    description: "The complete financial structure is explained without any hidden obligations. Then our regional manager along with parents and students will sort out the best way of planning the comfortable payment.",
    icon: "💰"
  },
  {
    title: "Scholarship Guidance",
    description: "We assist our students in the Scholarship application and Education Loan process with the utmost details.",
    icon: "🎓"
  },
];

const ServicesPage = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services" }
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Support for Your Study Abroad Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At GVK Edutech, we guide students and parents in making informed decisions about higher education, helping them find the right university that aligns with their goals and academic profile. Our expert counselors offer end-to-end support—including career counseling, university selection, application assistance, visa guidance, and more. With our personalized approach and global expertise, we turn aspirations into achievements, one student at a time.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-smooth group">
                <CardContent className="p-8">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-smooth">{service.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-secondary rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert counselors today for a FREE consultation and take the first step toward your dream education abroad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://api.whatsapp.com/send/?phone=919885852424&text=Hi%2C+I+am+interested+in+studying+abroad." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Free Counseling
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="tel:+919010060000">
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 90100 60000
              </a>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
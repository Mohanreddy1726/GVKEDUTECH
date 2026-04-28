import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, MessageCircle, Phone } from "lucide-react";

export const metadata = {
  title: "About Us - GVK EduTech | Top Overseas Education Consultants",
  description: "Learn about GVK EduTech - India's trusted overseas education consultancy for MBBS abroad and Masters programs. 15+ years of experience guiding 5000+ students.",
  keywords: ["GVK EduTech about", "overseas education consultants", "MBBS abroad consultancy", "study abroad India", "education agents"],
  openGraph: {
    title: "About GVK EduTech - Our Story",
    description: "Learn about GVK EduTech's mission to guide Indian students toward global education opportunities.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GVK EduTech Team" }],
  },
};

const coreTeam = [
  { name: "Dr. G. VIDYA KUMAR", title: "DIRECTOR & VICE-DEAN", qualification: "MBBS (Russia), MPH (India)", image:"https://ik.imagekit.io/abhobz66j/GVK%20Images/GVK1.png?updatedAt=1776335771436" },
  { name: "Dr. G. VINOD KUMAR", title: "DIRECTOR & CEO", qualification: "MBA (UK), Ph.D (USA)", image:"https://ik.imagekit.io/abhobz66j/GVK%20Images/GVK2.png?updatedAt=1776335787244" },
  { name: "Mrs. Geetha", title: "CFO", qualification: "BSc, B.ED", image:"https://ik.imagekit.io/abhobz66j/GVK%20Images/geeta.png" },
];

const regionalDirectors = [
  { name: "Mrs. Reena", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Reena.png?updatedAt=1776335169935" },
  { name: "Mrs. Geetha", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/geeta.png?updatedAt=1776335170035" },
  { name: "Mr. Kiran", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/kiran.png?updatedAt=1776335169934" },
  { name: "Dr. Shiva", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/shiva.png?updatedAt=1776335169698" },
  { name: "Mr. Nandhu", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/nandu.png?updatedAt=1776335169859" },
  { name: "Mr. Athmaram", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/athmaram.png?updatedAt=1776335169869" },
  { name: "Mr. Yella Goud", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/yellagoud.png?updatedAt=1776335169197" },
  { name: "Mrs. Shoba Rani", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/shobarani.png?updatedAt=1776335169676" },
  { name: "Mr. Gangadhar", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/gangadhar.png?updatedAt=1776335169867" },
  { name: "Mr. Chandan", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/chandan.png?updatedAt=1776335169838" },
  { name: "Dr. Mohan", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/mohan.png?updatedAt=1776335169879" },
  { name: "Dr. Prakash", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/prakash.png?updatedAt=1776335169955" },
];

const operationalTeam = [
  { name: "Dr. Sadiq & Fathima", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/sadiqandfathima.png?updatedAt=1776335169709" },
  { name: "Mrs. Padma", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/padma.png?updatedAt=1776335169846" },
  { name: "Mr. Vasu", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/vasu.png?updatedAt=1776335169750" },
  { name: "Mr. Hari", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/hari.png?updatedAt=1776335169746" },
  { name: "Mr. Rakesh", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/rakesh.png?updatedAt=1776335169665" },
  { name: "Mr. Subbi Reddy", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/subbireddy.png?updatedAt=1776335169616" },
  { name: "Mrs. Vennela", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/vennala.png?updatedAt=1776335169665" },
];

const whyChooseUs = [
  "Expert Guidance for MBBS & Masters Abroad: We are recognized among the top overseas education consultants, offering end-to-end support for MBBS admissions, scholarships, and Master's programs.",
  "100+ Partner Universities & Accredited Programs: Our strong network with globally ranked medical and technical universities ensures students secure seats in NMC/WHO-approved colleges.",
  "Visa & Scholarship Assistance: From documentation to visa processing, our experts streamline the journey. We also help students secure education loans and scholarships.",
  "Post-Admission Support: Beyond admission, we assist with accommodation, travel, and career counseling, ensuring a smooth transition abroad.",
];

const coreValues = [
  { title: "Integrity", description: "Ethical counseling with zero hidden costs" },
  { title: "Excellence", description: "Partnerships with top global universities" },
  { title: "Support", description: "End-to-end assistance, even after landing abroad" },
  { title: "Innovation", description: "Leveraging technology for seamless admissions" },
];

const AboutPage = () => {
  return (
    <PageLayout>
      <PageHeader
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" }
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About GVK EduTech – Top Overseas Education Consultants
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Welcome to GVK EduTech – Your Trusted Partner for Global Education Opportunities. As one of the best study abroad consultants, we specialize in guiding students toward premier MBBS abroad programs and Masters degrees in top-ranked universities worldwide. With a commitment to excellence, transparency, and personalized mentorship, we turn academic dreams into reality.
          </p>
        </section>

        {/* Founder's Message */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <Card className="border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                      Founders Message
                    </h3>
                    <h4 className="text-xl text-primary-foreground/90 mb-6">
                      Empowering Dreams Through Global Education
                    </h4>
                  </div>
                  <div className="p-8 lg:p-12">
                    <blockquote className="text-muted-foreground italic leading-relaxed">
                      As a foreign medical graduate, I understand the challenges students face when pursuing MBBS abroad—adaptating to a new curriculum, cultural differences, and financial planning. My vision for GVK Edutech was to create a reliable platform that offers expert guidance, transparent counseling, and 24/7 support to help students succeed.
                      <br /><br />
                      Our mission is to make overseas education accessible by partnering with top medical universities worldwide, offering affordable fee structures, and ensuring every student receives personalized attention.
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Director's Message */}
        <section className="mb-20 max-w-6xl mx-auto section-muted rounded-2xl p-8 lg:p-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Directors Message</h3>
            <p className="text-muted-foreground leading-relaxed">
              As a doctor and foreign medical graduate, I was inspired by my brothers vision to create GVK EDUTECH—a platform guiding aspiring students through the challenges of studying medicine abroad. From adapting to new curricula to managing finances and lifestyle changes, we offer 24/7 expert counseling and support to students and parents. My goal is to turn their dreams into reality through personalized, professional assistance, making GVK EDUTECH a trusted partner in their journey.
            </p>
          </div>
        </section>

        {/* Core Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreTeam.map((member, index) => (
              <Card key={index} className="border-border text-center hover:shadow-lg transition-smooth">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-4xl overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-1">{member.name}</h3>
                  <p className="text-accent font-medium text-sm mb-2">{member.title}</p>
                  <p className="text-muted-foreground text-sm">{member.qualification}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Regional Directors */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Regional Directors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {regionalDirectors.map((director, index) => (
              <Card key={index} className="border-border text-center hover:shadow-md transition-smooth">
                <CardContent className="p-4">
                  <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center text-2xl overflow-hidden">
                    {director.image ? (
                      <img src={director.image} alt={director.name} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <span>👤</span>
                    )}
                  </div>
                  <p className="font-medium text-foreground text-sm">{director.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Operational Team */}
        <section className="mb-20 section-muted rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Operational Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {operationalTeam.map((member, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 mx-auto mb-3 flex items-center justify-center text-xl overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <span>👤</span>
                    )}
                  </div>
                  <p className="font-medium text-foreground text-xs">{member.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose GVK EduTech?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground">{reason}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-border bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  Empower students with ethical, affordable, and high-quality overseas education consulting.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  Become the most trusted study abroad advisor for Indian students pursuing global careers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <Card key={index} className="border-border text-center hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Stats */}
        <section className="mb-20 bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-center max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-foreground mb-8">
            Join Thousands of Successful Students
          </h2>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto mb-8">
            GVK EduTech has helped 5000+ students fulfill their dreams of studying in the USA, UK, Europe, and Asia. Whether you seek an affordable MBBS abroad or a specialized Masters program, we are your gateway to global education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://api.whatsapp.com/send/?phone=919885852424&text=Hi%2C+I+am+interested+in+studying+abroad." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                FREE Counseling Session
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

export default AboutPage;

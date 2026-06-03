"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { ColorfulHeading } from "@/components/ColorfulHeading";

export const metadata = {
  title: "Disclaimer | GVK EduTech",
  description: "GVK EduTech disclaimer - Important information about website content, university information, and service limitations.",
  keywords: ["disclaimer", "GVK EduTech disclaimer", "website disclaimer"],
};

const DisclaimerPage = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Disclaimer"
        subtitle="Important information about our services and website content."
        breadcrumb="Disclaimer"
      />

      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              This disclaimer governs your use of the GVK Edutech website and services. By accessing and using our website, you accept and agree to be bound by the terms and provisions of this disclaimer.
            </p>

            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. General Information Only</h2>
                <p className="text-muted-foreground mb-4">
                  The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the website.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Admission & University Information</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>University rankings, fee structures, and admission criteria are subject to change without prior notice</li>
                  <li>Students are advised to verify all information directly with the respective universities</li>
                  <li>We do not guarantee admission to any university or program</li>
                  <li>University websites should be considered the authoritative source for program details, fees, and eligibility criteria</li>
                  <li>Seat availability is subject to the university's discretion and may vary annually</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Visa Guidance</h2>
                <p className="text-muted-foreground mb-4">
                  Our visa guidance services are provided to assist students in the application process. However, please note:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Visa approvals are solely at the discretion of the respective country's embassy/consulate</li>
                  <li>We do not guarantee visa approval for any applicant</li>
                  <li>Visa requirements, processing times, and policies can change without notice</li>
                  <li>Applicants must meet all eligibility criteria set by the visa authorities</li>
                  <li>Rejection of visa application is at the sole discretion of the embassy</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Financial Information</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All fees mentioned on the website are subject to change without prior notice</li>
                  <li>University tuition fees are quoted in USD or local currency and may vary based on exchange rates</li>
                  <li>Living expenses are estimates and may vary based on individual lifestyle and location</li>
                  <li>Additional costs such as travel, accommodation, and personal expenses are not included unless specified</li>
                  <li>Payment schedules and refund policies are subject to university terms</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Testimonials & Success Stories</h2>
                <p className="text-muted-foreground mb-4">
                  The testimonials, success stories, and student experiences shared on our website are genuine and represent individual experiences. However:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Results may vary from student to student</li>
                  <li>Past success does not guarantee future results</li>
                  <li>Individual outcomes depend on various factors including academic performance, entrance scores, and personal circumstances</li>
                  <li>Testimonials are not a guarantee of admission or visa approval</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. External Links</h2>
                <p className="text-muted-foreground mb-4">
                  Our website may contain links to third-party websites, resources, and advertisements. We:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Do not endorse or assume responsibility for the content, privacy policies, or practices of these external sites</li>
                  <li>Are not responsible for any damages or losses arising from your use of external links</li>
                  <li>Recommend that you review the terms and privacy policies of any third-party websites before using them</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Professional Advice</h2>
                <p className="text-muted-foreground mb-4">
                  The information provided on this website does not constitute professional advice. Students are strongly advised to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Consult with qualified education counselors for personalized guidance</li>
                  <li>Verify all information with official university sources</li>
                  <li>Seek professional financial advice regarding education loans and fee payments</li>
                  <li>Obtain legal counsel for visa-related matters if needed</li>
                  <li>Conduct independent research before making any decisions</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  To the maximum extent permitted by law, GVK Edutech shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, data, or other intangible losses resulting from your use of our services</li>
                  <li>Any errors or omissions in the content of this website</li>
                  <li>Any decision made by students based on information from this website</li>
                  <li>Delays or failures in admission or visa processing beyond our control</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Medical & NMC Guidelines</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Information regarding NMC (National Medical Commission) guidelines is provided for reference only</li>
                  <li>Students pursuing medical education abroad must verify eligibility for practice in India</li>
                  <li>NMC regulations and recognition status of universities may change</li>
                  <li>Students should regularly check the official NMC website for updated guidelines</li>
                  <li>We do not guarantee that any course will lead to registration or practice rights in India</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Service Accuracy</h2>
                <p className="text-muted-foreground mb-4">
                  While we strive to provide accurate and comprehensive information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>We recommend verifying all details with official university sources</li>
                  <li>Information on our website is subject to change without notice</li>
                  <li>We are not responsible for any discrepancies between website information and official university communications</li>
                  <li>Students must confirm all important deadlines and requirements independently</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. No Professional Relationship</h2>
                <p className="text-muted-foreground">
                  Use of this website does not create a professional or contractual relationship between you and GVK Edutech. Our services are provided based on separate service agreements that outline the specific terms and conditions of our consultancy services.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to Disclaimer</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify this disclaimer at any time without prior notice. Your continued use of this website after any changes indicates your acceptance of the updated disclaimer.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact for Clarifications</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions or need clarification on any aspect of this disclaimer, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> info@gvkedutech.com</p>
                  <p><strong>Phone:</strong> +91 9010060000, +91 8886661877</p>
                  <p><strong>Address:</strong> 3rd Floor, Shiva sai Commercial Building, Shivam X Road, Vidya Nagar, Opp: Reliance Digital, Hyderabad, Telangana, Pin: 500044</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-sm mt-12">
              <strong>Last Updated:</strong> May 2026
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DisclaimerPage;
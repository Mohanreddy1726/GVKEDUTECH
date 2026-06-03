// "use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { ColorfulHeading } from "@/components/ColorfulHeading";

export const metadata = {
  title: "Terms & Conditions | GVK EduTech",
  description: "GVK EduTech terms and conditions - Read our service terms, refund policy, and usage guidelines for study abroad consultancy services.",
  keywords: ["terms and conditions", "GVK EduTech terms", "service terms"],
};

const TermsAndConditionsPage = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Terms and Conditions"
        subtitle="Please read these terms carefully before using our services."
        breadcrumb="Terms and Conditions"
      />

      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Welcome to GVK Edutech. By accessing and using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>

            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using the GVK Edutech website (www.gvkedutech.com), you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using GVK Edutech services, you shall be subject to any posted guidelines or rules applicable to such services.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground mb-4">
                  GVK Edutech provides the following services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Career counseling for students seeking education abroad</li>
                  <li>University selection and admission guidance</li>
                  <li>Application processing assistance</li>
                  <li>Visa guidance and documentation support</li>
                  <li>Pre-departure briefings and orientation</li>
                  <li>Information about MBBS and Masters programs worldwide</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. User Obligations</h2>
                <p className="text-muted-foreground mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate, complete, and current information during registration and inquiry</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Promptly update any changes to your personal information</li>
                  <li>Not use our services for any unlawful or unauthorized purpose</li>
                  <li>Not attempt to gain unauthorized access to any part of our website</li>
                  <li>Not interfere with or disrupt the integrity or performance of our services</li>
                  <li>Not copy, distribute, or modify any content without authorization</li>
                  <li>Be respectful in all communications with our staff and representatives</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Service Agreement</h2>
                <p className="text-muted-foreground mb-4">
                  Our consultancy services are provided under a separate service agreement. The terms of service include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Service fees and payment terms as agreed upon in writing</li>
                  <li>Scope of services and deliverables</li>
                  <li>Responsibilities of both parties</li>
                  <li>Cancellation and refund policies</li>
                  <li>Confidentiality provisions</li>
                  <li>Term and termination conditions</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>All content on this website, including text, graphics, logos, images, and software, is the property of GVK Edutech or its content suppliers</li>
                  <li>You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent</li>
                  <li>Our brand name, logo, and trademarks are protected and may not be used without authorization</li>
                  <li>University names and logos mentioned on this website are property of their respective owners</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Privacy & Data Usage</h2>
                <p className="text-muted-foreground mb-4">
                  Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>, which describes how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of information as described in the Privacy Policy.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Payment Terms</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Service fees must be paid according to the payment schedule specified in your service agreement</li>
                  <li>All fees are non-refundable unless specified otherwise in the service agreement</li>
                  <li>Payment methods include bank transfer, credit/debit cards, and other approved methods</li>
                  <li>Late payments may incur additional charges</li>
                  <li>University fees are paid directly to the university and are governed by their refund policies</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Cancellation & Refund Policy</h2>
                <p className="text-muted-foreground mb-4">
                  Our cancellation and refund terms are as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Cancellation requests must be submitted in writing</li>
                  <li>Refunds, if applicable, will be processed according to the service agreement terms</li>
                  <li>University application fees are non-refundable once submitted</li>
                  <li>Processing fees for visa applications are non-refundable regardless of outcome</li>
                  <li>Services partially completed will be charged on a pro-rata basis</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. User Content</h2>
                <p className="text-muted-foreground mb-4">
                  When you submit content to our website or services (such as reviews, testimonials, or inquiries):
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>You grant GVK Edutech a non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, and display such content</li>
                  <li>You represent and warrant that you own or have the right to use such content</li>
                  <li>You agree not to submit content that is illegal, defamatory, or violates any rights of third parties</li>
                  <li>We reserve the right to remove content at our sole discretion</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Third-Party Services</h2>
                <p className="text-muted-foreground mb-4">
                  Our services may involve referrals to or collaboration with third-party institutions. We:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Do not guarantee the quality or outcomes of third-party services</li>
                  <li>Are not responsible for any disputes with universities, embassies, or other third parties</li>
                  <li>Recommend that you review terms and conditions of third-party services independently</li>
                  <li>May receive commissions or referral fees from partner institutions</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground mb-4">
                  Our services are provided "as is" without any warranties, express or implied. We do not warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Our services will meet your requirements or expectations</li>
                  <li>Our services will be uninterrupted, timely, or error-free</li>
                  <li>Any information obtained from our services will be accurate or reliable</li>
                  <li>Any errors in our services will be corrected</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  To the maximum extent permitted by law, GVK Edutech shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Any direct, indirect, incidental, special, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Decisions made based on information provided by us</li>
                  <li>Actions or decisions of universities, embassies, or government authorities</li>
                  <li>Any delays or failures beyond our reasonable control</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to indemnify, defend, and hold harmless GVK Edutech and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of or related to your use of our services, your violation of these terms, or your violation of any third-party rights.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">14. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  We may terminate or suspend your access to our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Immediately, without notice, for any breach of these terms</li>
                  <li>At our sole discretion, for any reason whatsoever</li>
                  <li>Upon request by law enforcement or government agencies</li>
                </ul>
              <p className="text-muted-foreground mt-4">
                  Upon termination, your right to use our services immediately ceases.
              </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">15. Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">16. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms and Conditions at any time without prior notice. Your continued use of our services after any modifications indicates your acceptance of the updated terms. It is your responsibility to review these terms periodically.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">17. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
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

export default TermsAndConditionsPage;
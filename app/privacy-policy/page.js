"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { ColorfulHeading } from "@/components/ColorfulHeading";

const PrivacyPolicyPage = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Learn how we protect your data."
        breadcrumb="Privacy Policy"
      />

      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              At GVK Edutech, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services.
            </p>

            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Fill out inquiry forms on our website</li>
                  <li>Register for counseling sessions</li>
                  <li>Subscribe to our newsletters</li>
                  <li>Contact us via phone, email, or WhatsApp</li>
                  <li>Submit documents for admission processing</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Types of Information Collected</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Personal Details:</strong> Name, date of birth, gender, nationality</li>
                  <li><strong>Contact Information:</strong> Email address, phone number, residential address</li>
                  <li><strong>Educational Information:</strong> Academic records, entrance exam scores, qualifications</li>
                  <li><strong>Passport Information:</strong> Passport number, expiry date, visa details</li>
                  <li><strong>Financial Information:</strong> Bank details for fee payments (processed securely)</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Processing your admission applications to universities abroad</li>
                  <li>Providing personalized counseling and guidance</li>
                  <li>Communicating about program updates, deadlines, and requirements</li>
                  <li>Processing visa applications and documentation</li>
                  <li>Responding to your queries and providing customer support</li>
                  <li>Sending educational content and newsletters (with your consent)</li>
                  <li>Improving our services and website functionality</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing & Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Partner Universities:</strong> For admission processing and application submission</li>
                  <li><strong>Visa Authorities:</strong> As required for visa application processing</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations (with confidentiality agreements)</li>
                  <li><strong>Legal Authorities:</strong> When required by law or for legal proceedings</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We do <strong>not</strong> sell, trade, or rent your personal information to third parties for marketing purposes.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational measures to protect your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Secure socket layer (SSL) encryption for data transmission</li>
                  <li>Encrypted storage of sensitive information</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls limiting employee access to personal data</li>
                  <li>Secure data backups and disaster recovery procedures</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. After the retention period, your data will be securely deleted or anonymized.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
                  <li><strong>Objection:</strong> Object to processing of your personal data</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing at any time</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise these rights, please contact us at <strong>info@gvkedutech.com</strong> or call <strong>+91 9010060000</strong>.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies & Tracking Technologies</h2>
                <p className="text-muted-foreground mb-4">
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience. These include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant content and advertisements</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  You can manage cookie preferences through your browser settings.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of those websites before providing any personal information.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a minor without parental consent, we will take steps to delete such information.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically for any changes.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> info@gvkedutech.com</p>
                  <p><strong>Phone:</strong> +91 9010060000, +91 8886661877</p>
                  <p><strong>Address:</strong> 3rd Floor, Shiva sai Commercial Building, Shivam X Road, Vidya Nagar, Opp: Reliance Digital, Hyderabad, Telangana, Pin: 500044</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Governing Law</h2>
                <p className="text-muted-foreground">
                  This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes arising from this policy shall be subject to the jurisdiction of the courts in Hyderabad, Telangana.
                </p>
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

export default PrivacyPolicyPage;
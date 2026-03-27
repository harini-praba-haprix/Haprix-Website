import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-8">
          Privacy <span className="text-gradient-gold">Policy</span>
        </h1>

        <div className="space-y-6 text-sm text-secondary-foreground leading-relaxed">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">1. Information We Collect</h2>
            <p>We collect information you provide directly, such as your name, email address, phone number, and company name when you fill out our contact form or communicate with us. We may also collect usage data such as your IP address, browser type, and pages visited.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver and improve our services</li>
              <li>Send relevant communications about our services</li>
              <li>Analyze website usage to enhance user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">3. Information Sharing</h2>
            <p>We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our business, subject to confidentiality agreements.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">4. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">5. Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect site functionality.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at harini@haprixai.com.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">Email: harini@haprixai.com<br />Phone: +91 7358662199<br />Address: No.159/160, Viji Homes, Urappakkam, Chennai - 603210</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;

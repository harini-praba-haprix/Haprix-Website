import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-28 pb-20">
      <div className="container max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-8">
          Terms of <span className="text-gradient-gold">Service</span>
        </h1>

        <div className="space-y-6 text-sm text-secondary-foreground leading-relaxed">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>By accessing and using the services provided by HaPrix ("we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">2. Services</h2>
            <p>HaPrix provides intelligent automation, custom application development, Zoho implementation, AI-powered solutions, system integrations, and related technology consulting services. The scope of work for each engagement will be defined in a separate agreement or proposal.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">3. Client Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide accurate and complete information required for service delivery</li>
              <li>Cooperate with our team during project implementation</li>
              <li>Make timely payments as agreed upon in the engagement terms</li>
              <li>Ensure you have rights to any data or content you provide to us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">4. Intellectual Property</h2>
            <p>All custom solutions, code, and deliverables created specifically for you will be owned by you upon full payment. HaPrix retains the right to use general methodologies, tools, and frameworks developed during engagements for other projects.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">5. Payment Terms</h2>
            <p>Payment terms will be outlined in individual project proposals or agreements. Unless otherwise stated, invoices are due within 15 days of issuance. Late payments may incur additional charges.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">6. Confidentiality</h2>
            <p>Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This obligation survives the termination of the business relationship.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">7. Limitation of Liability</h2>
            <p>HaPrix shall not be liable for indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid for the specific service giving rise to the claim.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">8. Termination</h2>
            <p>Either party may terminate an engagement with 30 days written notice. Upon termination, the client is responsible for payment of all work completed up to the termination date.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">9. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-semibold mb-2">10. Contact Us</h2>
            <p>For questions about these terms, please contact us at:</p>
            <p className="mt-2">Email: harini@haprixai.com<br />Phone: +91 7358662199<br />Address: No.159/160, Viji Homes, Urappakkam, Chennai - 603210</p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;

import Link from "next/link";
import Footer from "../template/Footer";
import Logo from "../template/Logo";

export default function TermsOfService() {
    return (
        <div>
            <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
                {/* <div className="flex items-center">
                <Image src="/logo.png" alt="Logo" width={100} height={30} />
                </div> */}
                <Logo />
                {/* <ul className="hidden md:flex space-x-8">
                <li><a href="#features" className="text-gray-800 hover:text-blue-600">Features</a></li>
                <li><a href="#services" className="text-gray-800 hover:text-blue-600">Services</a></li>
                <li><a href="#about" className="text-gray-800 hover:text-blue-600">About</a></li>
                <li><a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a></li>
                </ul> */}
                <Link href={'/login'}>
                    <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</button>
                </Link>
            </nav>
            <div className="px-4 py-8 bg-gray-50 text-gray-800">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold text-blue-900 mb-4">Terms of Service</h1>
    <p className="text-gray-700 mb-6">
      Last updated: 18-11-2024
    </p>

    <p className="mb-6">
      Welcome to Acacia! These Terms of Service ("Terms") govern your use of our 
      trade finance platform and escrow services. By accessing or using our services, 
      you agree to comply with these Terms.
    </p>

    <div className="space-y-6">
      {/* Section 1 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          1. Introduction
        </h2>
        <p>
          Acacia provides trade finance solutions and escrow services to 
          small and medium-sized enterprises (SMEs). Our platform facilitates secure 
          transactions between buyers and sellers, ensuring trust and transparency in trade agreements.
        </p>
        <p>
          By using our services, you acknowledge that you have read, understood, and agree 
          to these Terms and our <Link href="/privacy" className="text-blue-900 underline">Privacy Policy</Link>.
        </p>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          2. Scope of Services
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            **Escrow Services**: We act as a neutral third party to hold funds during 
            transactions, releasing them only when agreed-upon conditions are met.
          </li>
          <li>
            **Trade Financing**: We provide financing solutions to SMEs, helping them 
            manage cash flow and execute trade deals with confidence.
          </li>
          <li>
            **Dispute Resolution**: In the event of a disagreement between parties, we 
            offer mediation services to facilitate a fair resolution.
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          3. User Responsibilities
        </h2>
        <p>
          As a user of our platform, you agree to:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Provide accurate and complete information during registration and when using our services.
          </li>
          <li>
            Comply with all applicable laws and regulations in your jurisdiction.
          </li>
          <li>
            Refrain from using our platform for fraudulent or unlawful purposes.
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          4. Payment and Fees
        </h2>
        <p>
          We charge fees for certain services, such as escrow transactions and trade financing. 
          These fees are outlined on our platform and are subject to change at our discretion. 
          By using our services, you agree to pay any applicable fees.
        </p>
      </section>

      {/* Section 5 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          5. Limitation of Liability
        </h2>
        <p>
          Acacia is not responsible for any losses, damages, or disputes arising from 
          the misuse of our platform or failure to comply with these Terms. Our role in escrow 
          transactions is limited to holding and releasing funds as per the agreed-upon terms.
        </p>
      </section>

      {/* Section 6 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          6. Termination of Services
        </h2>
        <p>
          We reserve the right to terminate or suspend access to our platform at any time, with 
          or without notice, for violations of these Terms or any other reasons deemed necessary.
        </p>
      </section>

      {/* Section 7 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          7. Changes to the Terms
        </h2>
        <p>
          We may update these Terms periodically. Continued use of our platform after changes 
          have been made constitutes acceptance of the revised Terms.
        </p>
      </section>

      {/* Section 8 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          8. Contact Us
        </h2>
        <p>
          If you have any questions about these Terms, please contact us at 
          <a href="mailto:info@acaciafinance.net" className="text-blue-900 underline">info@acaciafinance.net</a>.
        </p>
      </section>
    </div>
  </div>
</div>
            <Footer />

        </div>
    );
  }
  
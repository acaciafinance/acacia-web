import Link from "next/link";
import Logo from "../template/Logo";
import Footer from "../template/Footer";

export default function PrivacyPolicy() {
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
    <h1 className="text-3xl font-bold text-blue-900 mb-4">Privacy Policy</h1>
    <p className="text-gray-700 mb-6">
      Effective Date: 18-11-2024
    </p>
    <p className="mb-6">
      At Acacia, we are committed to safeguarding your privacy. This Privacy Policy explains 
      how we collect, use, and protect your personal information in connection with our trade finance platform 
      and escrow services. By using our services, you agree to the terms of this Privacy Policy.
    </p>

    <div className="space-y-6">
      {/* Section 1 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          1. Information We Collect
        </h2>
        <p>
          We collect and process the following types of information to provide and improve our services:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            **Personal Information**: Name, email address, phone number, and other contact details.
          </li>
          <li>
            **Financial Information**: Bank account details, transaction history, and other information 
            necessary for trade financing and escrow transactions.
          </li>
          <li>
            **Business Information**: Company name, registration details, and trade-related documents.
          </li>
          <li>
            **Usage Data**: Information about how you interact with our platform, including IP address, 
            browser type, and pages visited.
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          2. How We Use Your Information
        </h2>
        <p>
          The information we collect is used for the following purposes:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            **Facilitate Transactions**: To enable escrow services and trade financing.
          </li>
          <li>
            **Customer Support**: To address inquiries and resolve disputes.
          </li>
          <li>
            **Compliance**: To fulfill legal and regulatory requirements.
          </li>
          <li>
            **Platform Improvements**: To analyze usage patterns and enhance user experience.
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          3. Sharing Your Information
        </h2>
        <p>
          We may share your information with third parties in the following circumstances:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            **With Your Consent**: When you explicitly approve sharing your information.
          </li>
          <li>
            **Service Providers**: To trusted partners who assist in providing our services, such as 
            payment processors and verification agencies.
          </li>
          <li>
            **Legal Requirements**: To comply with legal obligations, enforce our terms, or protect 
            our rights and interests.
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          4. Data Security
        </h2>
        <p>
          We implement robust security measures to protect your information from unauthorized access, 
          alteration, disclosure, or destruction. These measures include encryption, firewalls, and 
          regular security audits.
        </p>
      </section>

      {/* Section 5 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          5. Your Rights
        </h2>
        <p>
          You have the following rights regarding your personal information:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            **Access**: Request access to the personal information we hold about you.
          </li>
          <li>
            **Correction**: Request corrections to any inaccuracies in your data.
          </li>
          <li>
            **Deletion**: Request deletion of your information, subject to legal obligations.
          </li>
          <li>
            **Opt-Out**: Opt out of marketing communications or data processing where applicable.
          </li>
        </ul>
      </section>

      {/* Section 6 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          6. Retention of Information
        </h2>
        <p>
          We retain your information only as long as necessary to provide our services or as required 
          by law. Once retention is no longer necessary, we securely delete or anonymize your data.
        </p>
      </section>

      {/* Section 7 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          7. Changes to this Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically. Any changes will be posted on this page 
          with a revised effective date.
        </p>
      </section>

      {/* Section 8 */}
      <section>
        <h2 className="text-xl font-semibold text-teal-500 mb-2">
          8. Contact Us
        </h2>
        <p>
          For questions or concerns about this Privacy Policy, please contact us at 
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
  
'use client'
import React, { useState } from 'react'
import Layout from '../template/Layout'
import Logo from '../template/Logo'
import Footer from '../template/Footer'
import Link from 'next/link'
import Image from 'next/image'
import FAQSection from './FaqSection'


const products = [
  {
    name: 'Funding Solutions',
    summary: 'Quick and scalable financing for SMEs and corporations.',
    image: '/assets/icons/financing.svg',
    details: `Our financing solution focuses on financing the export of goods and services and providing liquidity to SMEs. Key products include pre-export finance, export-backed working capital provision, forex provision for import of inputs, receivables financing, etc. We will work closely with our investment partners to provide quick and scalable financing for SMEs and larger corporations, usually in 24 hours or less.`,
  },
  {
    name: 'Risk Management Solutions',
    summary: 'robust credit insurance and other solutions for international trade.',
    image: '/assets/icons/risk.svg',
    details: `Acacia’s risk management solutions help SMEs mitigate trade risks in local and international transactions. Our platform enables trade credit insurance, cargo insurance, and exchange rate risk management for businesses engaging in cross-border trade in countries with appreciable levels of forex risk. We work closely with select liquidity providers to enable buyers and sellers to navigate currency risks in each transaction.`,
  },
  {
    name: 'Liquidity and Trading Solutions',
    summary: 'Securitized and tradable products backed by verifiable trade documents.',
    image: '/assets/icons/liquidity.svg',
    details: `Acacia’s liquidity and trading platform enables financial institutions and institutional investors to fund, securitize, and trade various trade finance products, including loans, working capital, credit insurance, and forex forwards. The platform creates profit opportunities for alternative investment firms and financial institutions while providing liquidity and investment inflows for Acacia’s other product lines.`,
  },
  {
    name: 'Trade Intelligence',
    summary: 'Real time Intelligence on trade opportunities and risks in key markets.',
    image: '/assets/icons/trade.svg',
    details: `The Trade Operations & Intelligence platform enables fast trade discovery, trade intelligence, negotiations, documentation, chartering, and other related services for export companies. SMEs can meet buyers, complete negotiations and due diligence, charter vessels, purchase cargo insurance, and other trade-related services. The Trade Operations & Intelligence platform combines seamlessly with, and complements, our financing and payment solutions to create a comprehensive international trading ecosystem for global SMEs.`,
  },
];

// Modal Component
const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
      <div className="bg-white rounded-lg max-w-lg w-full shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-teal-800">{product.name}</h2>
          <p className="text-gray-600 mb-6">{product.details}</p>
          <div className="flex justify-end">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdLhGhdfN-0cklK9HP9myWuHDPeMkhx1V6dC69DRunDIb0ktw/viewform">
              <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-2">
                Get Started
              </button>
            </Link>
            <button onClick={onClose} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);



  return (
    // <Layout>
    <div className="bg-white">
      {/* Nav Section */}
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

      {/* Hero Section */}
        <header
            className="bg-cover bg-center text-center py-20"
            style={{
                backgroundImage: "url('/assets/landing/hero.jpg')",
            }}
            >
            <div className="bg-gray-900 bg-opacity-50 py-20">
                <h1 className="text-4xl font-bold text-white">Secure Your Transactions with Escrow</h1>
                <p className="text-gray-200 mt-4 max-w-xl mx-auto">
                Experience reliable and transparent payment protection tailored for businesses and individuals.
                </p>
                <button className="mt-6 bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-blue-700">Start Now</button>
            </div>
        </header>

      



      {/* Section 1: Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Why Choose Our Escrow Services?</h2>
          <p className="text-gray-600 mt-4">Comprehensive protection, fast transactions, and trusted service.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800">Secure Payments</h3>
              <p className="text-gray-600 mt-2">Your funds are held securely until both parties are satisfied.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800">Fast & Transparent</h3>
              <p className="text-gray-600 mt-2">We ensure quick release of funds with full transparency.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 mt-2">Our team is here to support you at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How it Works */}
        <section
            id="how-it-works"
            className="py-20 bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/landing/how.jpg')",
            }}
            >
            <div className="bg-gray-900 bg-opacity-50 py-20">
                <div className="max-w-5xl mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-semibold">How It Works</h2>
                    <div className="flex flex-wrap justify-center mt-10">
                        <div className="w-full md:w-1/3 p-4">
                            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold text-gray-800">Step 1</h3>
                                <p className="text-gray-600 mt-2">
                                Create an account and choose your role as a buyer or seller.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-4">
                            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold text-gray-800">Step 2</h3>
                                <p className="text-gray-600 mt-2">
                                Describe the transaction details and invite the second party.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-4">
                            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold text-gray-800">Step 3</h3>
                                <p className="text-gray-600 mt-2">
                                Once both parties agree, funds are held securely until delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        {/* Products Section */}
      <section id="products" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Explore Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-auto h-20 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-teal-700 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}

      {/* Section 3: Testimonials */}
      {/* <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center mt-10">
            <div className="w-full md:w-1/3 p-4">
              <blockquote className="text-gray-600">"The best experience! My transaction was seamless and fully secure."</blockquote>
              <p className="mt-2 text-gray-800 font-bold">- John Doe</p>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <blockquote className="text-gray-600">"Highly recommend this escrow service for secure transactions."</blockquote>
              <p className="mt-2 text-gray-800 font-bold">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section> */}


      {/* Section 4: FAQs */}
      <FAQSection />

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-blue-900 text-white text-center">
        <h2 className="text-3xl font-semibold">Ready to Secure Your Transaction?</h2>
        <p className="mt-4">Get in touch with us to learn more about our escrow services.</p>
        <Link href={'/login'}>
            <button className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-gray-200">Get Started</button>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
      
    </div>
    // </Layout>
  )
}

export default LandingPage

import React, { useState } from 'react'
import Logo from '../template/Logo'
import Link from 'next/link'
import Footer from '../template/Footer'
import { faqF } from './data'

const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
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

      
      <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center text-blue-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqF.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 shadow-md rounded-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold text-blue-900 flex justify-between">
                {faq.question}
                <span className="text-teal-500">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </h3>
              {openIndex === index && (
                <p className="text-gray-700 mt-3 transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      

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
  )
}

export default Faq

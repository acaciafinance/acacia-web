'use client'
import Link from 'next/link'
import React from 'react'
import Logo from '../template/Logo'
import Footer from '../template/Footer'

const Contact = () => {
  return (
    <div className="bg-white">
    {/* Nav Section */}
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={100} height={30} />
      </div> */}
      <Logo />
      <ul className="hidden md:flex space-x-8">
        <li><a href="#features" className="text-gray-800 hover:text-blue-600">Features</a></li>
        <li><a href="#services" className="text-gray-800 hover:text-blue-600">Services</a></li>
        <li><a href="#about" className="text-gray-800 hover:text-blue-600">About</a></li>
        <li><a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a></li>
      </ul>
      <Link href={'/login'}>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700">Get Started</button>
      </Link>
    </nav>

      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-teal-500 mb-10">We’d love to hear from you! Reach out with any questions or comments.</p>

            {/* Contact Form */}
            <form className="bg-white rounded-lg p-8 shadow-lg text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                <label className="text-blue-900 font-semibold mb-2">Name</label>
                <input
                    type="text"
                    className="border border-teal-500 rounded-md p-3 focus:outline-none focus:border-blue-900"
                    placeholder="Your Name"
                />
                </div>
                <div className="flex flex-col">
                <label className="text-blue-900 font-semibold mb-2">Email</label>
                <input
                    type="email"
                    className="border border-teal-500 rounded-md p-3 focus:outline-none focus:border-blue-900"
                    placeholder="Your Email"
                />
                </div>
            </div>
            <div className="flex flex-col mt-6">
                <label className="text-blue-900 font-semibold mb-2">Subject</label>
                <input
                type="text"
                className="border border-teal-500 rounded-md p-3 focus:outline-none focus:border-blue-900"
                placeholder="Subject"
                />
            </div>
            <div className="flex flex-col mt-6">
                <label className="text-blue-900 font-semibold mb-2">Message</label>
                <textarea
                rows="5"
                className="border border-teal-500 rounded-md p-3 focus:outline-none focus:border-blue-900"
                placeholder="Your Message"
                />
            </div>
            <button
                type="submit"
                className="mt-8 bg-teal-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-teal-600 transition duration-300"
            >
                Send Message
            </button>
            </form>
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

export default Contact

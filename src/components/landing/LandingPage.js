'use client'
import React from 'react'
import Layout from '../template/Layout'
import Logo from '../template/Logo'
import Footer from '../template/Footer'
import Link from 'next/link'

const LandingPage = () => {
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
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p>&copy; 2024 Escrow Service. All rights reserved.</p>
          <nav className="mt-4">
            <a href="#privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
            <a href="#terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          </nav>
        </div>
      </footer> */}
    </div>
    // </Layout>
  )
}

export default LandingPage

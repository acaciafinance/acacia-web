'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../template/Logo'
import Footer from '../template/Footer'
import axios from 'axios'

const Contact = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simple validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setApiError(null);
    setSuccessMessage(null);

    try {
      const {name, email, subject, message} = formData;

      const response = await axios.post('/api/email', {
        name, email, subject, message
      });

      // if (!response.ok) {
      //   throw new Error('Failed to send the message. Please try again.');
      // }

      console.log(response)

      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setApiError(error.message);
    } finally {
      setIsSubmitting(false);
    }
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

      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-teal-500 mb-10">We’d love to hear from you! Reach out with any questions or comments.</p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg text-left text-neutral-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                <label className="text-blue-900 font-semibold mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-teal-500 rounded-md p-3 focus:outline-none focus:border-blue-900"
                    placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div className="flex flex-col">
                <label className="text-blue-900 font-semibold mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-teal-500 rounded-md p-3 focus:outline-none focus:border-blue-900"
                    placeholder="Your Email"
                />
                {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
                </div>
            </div>
            <div className="flex flex-col mt-6">
                <label className="text-blue-900 font-semibold mb-2">Subject</label>
                <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-teal-500 rounded-md p-3 focus:outline-none focus:border-blue-900"
                placeholder="Subject"
                />
                {errors.subject && <p className="text-red-500 mt-1">{errors.subject}</p>}
            </div>
            <div className="flex flex-col mt-6">
                <label className="text-blue-900 font-semibold mb-2">Message</label>
                <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-teal-500 rounded-md p-3 focus:outline-none focus:border-blue-900"
                placeholder="Your Message"
                />
                {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 bg-teal-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-teal-600 transition duration-300"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {apiError && <p className="text-red-500 mt-4">{apiError}</p>}
            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
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

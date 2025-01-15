import { useState } from "react";
import { faqs } from "./data";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="md:text-2xl text-xl font-bold text-center text-blue-900 mb-8">
            Frequently Asked Questions
          </h2>
  
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-md rounded-lg cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg text-blue-900 flex justify-between">
                  {faq.question}
                  <span className="text-teal-500">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </h3>
                {openIndex === index && (
                  <p className="text-gray-700 mt-2 transition-all duration-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
  
          <div className="text-center mt-8">
            <a
              href="/home/faq"
              className="text-teal-500 font-semibold hover:underline"
            >
              See More FAQs →
            </a>
          </div>
        </div>
      </section>
    );
  }
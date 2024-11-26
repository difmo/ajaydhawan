"use client";

import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-neutralGray py-4" id="faq">
      <button
        className="w-full flex items-center text-white justify-between text-left text-lg font-semibold text-neutralDark hover:text-[#92C7CF] focus:outline-none"
        onClick={onClick}
      >
        {question}
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <p className="mt-2 text-white">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What type of content do you share on YouTube?",
      answer:
        "We share thought-provoking videos, motivational talks, and actionable advice to inspire personal growth and success.",
    },
    {
      question: "How can I stay updated with your Instagram posts?",
      answer:
        "Follow us on Instagram to receive daily motivational quotes, uplifting visuals, and engaging content designed to keep you inspired every day",
    },
    {
      question: "Are your platforms free to access?",
      answer:
        "Yes! All our content on YouTube, Instagram, and WhatsApp is free. Just subscribe, follow, or join to start your journey toward positivity and growth.",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSilver">
      <div className="flex flex-col items-center justify-center lg:w-2/3 mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="w-full">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

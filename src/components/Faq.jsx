import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-neutralGray py-4">
      <button
        className="w-full flex items-center text-[#365486] justify-between text-left text-lg font-semibold text-neutralDark hover:text-[#92C7CF] focus:outline-none"
        onClick={onClick}
      >
        {question}
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
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
        <p className="mt-2 text-neutralGray">{answer}</p>
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
      question: "What is ZenzoAlpha Consultancy?",
      answer: "ZenzoAlpha Consultancy offers innovative solutions and strategic insights to help businesses achieve their goals and improve their performance.",
    },
    {
      question: "How can I get in touch with you?",
      answer: "You can contact us through the 'Get In Touch' button on our homepage or by email at contact@zenzoalpha.com.",
    },
    {
      question: "What services do you offer?",
      answer: "We offer a range of services including consulting, training, and support for membership organizations.",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSilver">
      <div className="flex flex-col items-center justify-center lg:w-2/3 mx-auto">
        <h2 className="text-3xl font-bold text-brandPrimary mb-8">Frequently Asked Questions</h2>
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

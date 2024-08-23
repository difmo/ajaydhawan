import React, { useState } from "react";

const NewsLetter = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSilver">
      <div className="flex items-center justify-center lg:w-2/3 mx-auto">
        <div className="text-center">
          <h2 className="mb-4 lg:text-5xl text-3xl font-semibold text-neutralDgrey lg:leading-snug">
            At GenzoAlpha Consultancy, we believe in transforming insights into actionable strategies, guiding businesses towards sustainable growth and unparalleled success.
          </h2>
          <div>
            <button className="btn-primary" onClick={handleOpenPopup}>
              More Info
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block ml-2 font-bold text-mybg hover:text-neutral-700"
              >
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-11/12 md:w-3/4 lg:w-1/2">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">More About Our Insights and Strategies</h2>
            <p>
              At GenzoAlpha Consultancy, our approach involves leveraging data-driven insights to craft customized strategies that drive sustainable growth. We focus on understanding your unique business needs and industry dynamics to provide actionable recommendations that align with your goals. Our expertise spans various domains, including market analysis, strategic planning, and operational optimization. By partnering with us, you gain access to a wealth of knowledge and experience designed to help you navigate challenges and seize opportunities for long-term success.
            </p>
            <p className="mt-4">
              To learn more about how our strategies can benefit your business, or to discuss your specific needs with one of our experts, please reach out to us. We are committed to helping you achieve your vision through tailored solutions and dedicated support.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsLetter;

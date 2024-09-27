"use client"; // Must be at the top for client-side component

import React from "react";
import Image from "next/image"; // Import Image from next/image
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
import header1 from "../assets/headerimg/img1.svg";
import header2 from "../assets/headerimg/img2.svg";
import header3 from "../assets/headerimg/img3.svg";
const HomePage = () => {
  const handleOnGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="border-b border-gray-700 mt-10 sm:mt-7" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Slider {...settings}>
          <div>
            <div className="my-16 sm:my-4 md:my-8 py-8 flex flex-col md:flex-row-reverse gap-8 sm:gap-4 items-center justify-center">
              <Image
                className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[600px]"
                src={header1}
                alt="Header 1"
                width={600}
                height={400}
              />
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                  Unleash Your Business Potential -
                  <span className="text-brandPrimary leading-snug">
                    {" "}
                    GenzoAlpha Consultancy
                  </span>
                </h1>
                <p className="text-neutralGray mb-8 text-base">
                  Transform your business with GenzoAlpha Consultancy. Our
                  expert team delivers innovative solutions and strategic
                  insights to drive your success. Elevate your performance and
                  achieve your goals with confidence.
                </p>
                <button
                  type="button"
                  onClick={handleOnGetInTouch}
                  className="btn-primary"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="my-16 sm:my-4 md:my-8 py-8 flex flex-col md:flex-row-reverse gap-8 sm:gap-4 items-center justify-center">
              <Image
                className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[600px]"
                src={header2}
                alt="Header 2"
                width={600}
                height={400}
              />
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                  Your Path to Business Excellence -
                  <span className="text-brandPrimary leading-snug">
                    {" "}
                    GenzoAlpha Consultancy
                  </span>
                </h1>
                <p className="text-neutralGray mb-8 text-base">
                  Unlock unparalleled success with GenzoAlpha Consultancy. We
                  specialize in crafting bespoke strategies that propel your
                  business forward. Experience growth and achieve your vision
                  with our expert guidance.
                </p>
                <button
                  type="button"
                  onClick={handleOnGetInTouch}
                  className="btn-primary"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="my-16 sm:my-4 md:my-8 py-8 flex flex-col md:flex-row-reverse gap-8 sm:gap-4 items-center justify-center">
              <Image
                className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[600px]"
                src={header3}
                alt="Header 3"
                width={600}
                height={400}
              />
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                  Innovate, Grow, Succeed -
                  <span className="text-brandPrimary leading-snug">
                    {" "}
                    GenzoAlpha Consultancy
                  </span>
                </h1>
                <p className="text-neutralGray mb-8 text-base">
                  Propel your business to new heights with GenzoAlpha
                  Consultancy. Our tailored strategies and innovative solutions
                  are designed to drive growth and ensure your success. Partner
                  with us for a future of limitless potential.
                </p>
                <button
                  type="button"
                  onClick={handleOnGetInTouch}
                  className="btn-primary"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomePage;

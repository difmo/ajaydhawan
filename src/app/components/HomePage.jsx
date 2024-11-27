"use client"; // Must be at the top for client-side component

import React from "react";
import Image from "next/image"; // Import Image from next/image
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
import header1 from "../assets/headerimg/think.jpg";
import header2 from "../assets/headerimg/motiv.jpg";
import header3 from "../assets/headerimg/rb_134998.png";

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true, 
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false, 
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          arrows: false, 
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="border-b border-gray-700 mt-10 sm:mt-7 bg-white" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen">
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
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug">
                Nurturing Dreams, Shaping the Future - 
                  <span className="text-brandPrimary leading-snug">
                    {" "}
                    Ajay Dhawan
                  </span>
                </h1>
                <p className="text-black mb-8 text-base">
                Each child’s mind is a seed to grow,
                A canvas where endless possibilities flow.
                Guide with love, inspire their way,
                For they are the leaders of tomorrow's day.
                </p>
                <button
                  type="button"
                  onClick={handleOnGetInTouch}
                  className="bg-[#FF4200] hover:bg-white text-white py-2 px-4 transition-all duration-300 rounded-2xl hover:text-mybg"
                >
                  Contact Ajay
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
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug">
                Embrace Understanding, Not Judgment - 
                  <span className="text-brandPrimary leading-snug">
                    {" "}
                    Ajay Dhawan
                  </span>
                </h1>
                <p className="text-black mb-8 text-base">
                Don’t judge a book by its cover, they say,
                Each soul has battles hidden away.
                Kindness blooms where judgment ends,
                Understanding heals and transcends.
                </p>
                <button
                  type="button"
                  onClick={handleOnGetInTouch}
                  className="bg-[#FF4200] hover:bg-white text-white py-2 px-4 transition-all duration-300 rounded-2xl hover:text-mybg"
                >
                  Contact Ajay
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
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug">
                Break Free from the Chains of Overthinking - 
                  <span className="text-brandPrimary leading-snug">
                    {" "}
                    Ajay Dhawan
                  </span>
                </h1>
                <p className="text-black mb-8 text-base">
                Overthinking ties the mind in knots,
                Dwelling on what’s not or what’s lost.
                Clarity comes when you let go,
                Peace awaits where calm waters flow.
                </p>
                <button
                  type="button"
                  onClick={handleOnGetInTouch}
                  className="bg-[#FF4200] hover:bg-white text-white py-2 px-4 transition-all duration-300 rounded-2xl hover:text-mybg"
                >
                 Contact Ajay
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

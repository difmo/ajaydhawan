
import React from "react";
import { Carousel } from "flowbite-react";
import header1 from "../assets/bgImages/1.png";
import header2 from "../assets/bgImages/2.png";
import header3 from "../assets/bgImages/3.png";

const Home = () => {
  const handleOnGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white border-b-[1px] lg:-mt-2 -mt-2 " id="home">
   <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel
          className="w-full mx-auto"
          onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          <div className="my-28 md:my-8  flex flex-col md:flex-row-reverse gap-12 items-center justify-center">
            <div>
              <img className="w-[270px] lg:w-[600px]" src={header1} alt="Header 1" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                Unleash Your Business Potential - 
                <span className="text-brandPrimary leading-snug">ZenzoAlpha Consultancy</span>
              </h1>
              <p className="text-neutralGray mb-8 text-base">
                Transform your business with ZenzoAlpha Consultancy. Our expert team delivers innovative solutions and strategic insights to drive your success. Elevate your performance and achieve your goals with confidence.
              </p>
              <button onClick={handleOnGetInTouch} className="btn-primary">Get In Touch</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse gap-12 items-center justify-center">
            <div>
              <img className="w-[270px] lg:w-[600px]" src={header2} alt="Header 2" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                Your Path to Business Excellence - 
                <span className="text-brandPrimary leading-snug">ZenzoAlpha Consultancy</span>
              </h1>
              <p className="text-neutralGray mb-8 text-base">
                Unlock unparalleled success with ZenzoAlpha Consultancy. We specialize in crafting bespoke strategies that propel your business forward. Experience growth and achieve your vision with our expert guidance.
              </p>
              <button onClick={handleOnGetInTouch} className="btn-primary">Get In Touch</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse gap-12 items-center justify-center">
            <div>
              <img className="w-[270px] lg:w-[600px]" src={header3} alt="Header 3" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                Innovate, Grow, Succeed - 
                <span className="text-brandPrimary leading-snug">ZenzoAlpha Consultancy</span>
              </h1>
              <p className="text-neutralGray mb-8 text-base">
                Propel your business to new heights with ZenzoAlpha Consultancy. Our tailored strategies and innovative solutions are designed to drive growth and ensure your success. Partner with us for a future of limitless potential.
              </p>
              <button onClick={handleOnGetInTouch} className="btn-primary">Get In Touch</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
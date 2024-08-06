import { Carousel } from "flowbite-react";
import headerimg from "../assets/bgImages/finalheader.jpg";

import React from "react";

const Home = () => {
  return (
    <div className="bg-white border-b-[1px]">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel
          className="w-full mx-auto"
          onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          <div className="my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse gap-12 items-center justify-center ">
            <div>
              <img className="w-[500px]" src={headerimg} />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                Lesson and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  From 8 Years
                </span>
              </h1>
              <p className="text-neutralGray mb-8 text-base">
                Where to grew your bussiness as a photographer: size or socila
                media?
              </p>
              <button className="btn-primary">Get In Touch</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse gap-12 items-center justify-center ">
            <div>
              <img className="w-[500px]" src={headerimg} />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                Lesson and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  From 8 Years
                </span>
              </h1>
              <p className="text-neutralGray mb-8 text-base">
                Where to grew your bussiness as a photographer: size or socila
                media?
              </p>
              <button className="btn-primary">Get In Touch</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse gap-12 items-center justify-center ">
            <div>
              <img className="w-[500px]" src={headerimg} />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 text-neutralGray md:w-3/4 leading-snug">
                Lesson and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  From 8 Years
                </span>
              </h1>
              <p className="text-neutralGray mb-8 text-base">
                Where to grew your bussiness as a photographer: size or socila
                media?
              </p>
              <button className="btn-primary">Get In Touch</button>
            </div>
          </div>
        
        </Carousel>
      </div>
    </div>
  );
};

export default Home;

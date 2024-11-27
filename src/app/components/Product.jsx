"use client";

import { useState } from "react";
import Image from "next/image";
import img from "../assets/aboutimg/purplebook.jpg";
import img2 from "../assets/aboutimg/bookblue.jpg";
import man1 from "../assets/bgImages/man1.png";
import man2 from "../assets/bgImages/man2.png";
import man3 from "../assets/bgImages/man3.png";
import man4 from "../assets/bgImages/man4.png";
import man5 from "../assets/bgImages/man5.png";
import man6 from "../assets/bgImages/man6.png";
import man7 from "../assets/bgImages/man7.png";

const Product = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto bg-white border border-gray-700 rounded-lg py-16 ">
      {/* About text */}
      <div className="px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl" id="product">
        <div className="flex flex-col items-center justify-between gap-12 mx-auto md:w-11/12 md:flex-row">
          <div>
            <Image className="w-[600px]" src={img} alt="Product" />
          </div>
          <div className="mx-auto md:w-3/5">
            <h2 className="mb-4 text-4xl font-semibold text-[#FF4200] md:w-4/5">
              Share Your Creativity
            </h2>
            <p className="mb-8 text-sm md:w-3/4 text-black">
              Unleash your imagination and showcase your unique voice! This
              section is dedicated to writers, poets, and storytellers who wish
              to share their handwritten works of art. Whether it’s a heartfelt
              poem, an inspiring story, or any creative expression, this is your
              platform to let the world see your talent. Upload your handwritten
              pieces, and let your creativity inspire and connect with others.
              Every story matters, every poem resonates, and every word has the
              power to make an impact. Join us in celebrating the beauty of
              handwritten expressions!
            </p>
            <button className="px-6 py-2 bg-white text-purple-500 border border-gray-500 font-semibold rounded-2xl shadow-md hover:bg-[#FF4200] hover:text-white transition duration-300" onClick={handleOpenPopup}>
              Get Your Copy
            </button>
          </div>
        </div>
      </div>


     
      <div className="px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl" id="product">
  <div className="flex flex-col items-center justify-between gap-12 mx-auto md:w-11/12 md:flex-row-reverse"> {/* Changed to flex-row-reverse */}
    <div>
      <Image className="w-[600px] max-w-full" src={img2} alt="Product" />
    </div>
    <div className="mx-auto md:w-3/5">
      <h2 className="mb-4 text-4xl font-semibold text-[#FF4200] md:w-4/5">
        Share Your Creativity
      </h2>
      <p className="mb-8 text-sm md:w-3/4 text-black">
        Unleash your imagination and showcase your unique voice! This
        section is dedicated to writers, poets, and storytellers who wish
        to share their handwritten works of art. Whether it’s a heartfelt
        poem, an inspiring story, or any creative expression, this is your
        platform to let the world see your talent. Upload your handwritten
        pieces, and let your creativity inspire and connect with others.
        Every story matters, every poem resonates, and every word has the
        power to make an impact. Join us in celebrating the beauty of
        handwritten expressions!
      </p>
      <button className="px-6 py-2 bg-white text-blue-500 border border-gray-500 font-semibold rounded-2xl shadow-md hover:bg-[#FF4200] hover:text-white transition duration-300" onClick={handleOpenPopup}>
        Get Your Copy
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
            <h2 className="text-xl font-semibold mb-4">More Information</h2>
            <p>
              GenzoAlpha Consultancy offers comprehensive 3rd Party Payroll
              services designed to simplify and streamline your payroll
              processes. Our services ensure that you can focus on your core
              business activities while we handle the complexities of payroll
              administration.
            </p>
          </div>
        </div>
      )}

      {/* Company states */}
      {/* <div className="px-4 max-w-screen-2xl lg:px-14 mx-auto bg-[#000000] py-16">
        <h1 className="text-white text-3xl border-b border-gray-700 mb-8 pb-4">
          Third Party Payroll
        </h1>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <Image src={img4} alt="Third Party Payroll" />
          </div> */}

              {/* <div>
                <p className="mb-8 text-sm leading-8 text-white">
                  Simplify and enhance your payroll processes with our 3rd Party
                  Payroll services. At GenzoAlpha Consultancy, we manage all facets
                  of payroll administration, allowing you to focus on strategic
                  growth. Our solutions are designed to ensure accuracy, compliance,
                  and efficiency in every payroll cycle. By leveraging our
                  expertise, you can minimize administrative burdens, reduce errors,
                  and stay up-to-date with changing regulations.
                </p>
                <h5 className="mb-3 text-xl font-semibold text-white">
                  Effortless Payroll Management with GenzoAlpha Consultancy
                </h5>
                <div>
                  <div className="flex flex-wrap items-center gap-8">
                    <Image
                      src={man1}
                      className="h-20 w-20 cursor-pointer"
                      alt="Customer 1"
                    />
                    <Image
                      src={man2}
                      className="h-20 w-20 cursor-pointer"
                      alt="Customer 2"
                    />
                    <Image
                      src={man3}
                      className="h-20 w-20 cursor-pointer"
                      alt="Customer 3"
                    />
                    <Image
                      src={man4}
                      className="h-20 w-20 cursor-pointer"
                      alt="Customer 4"
                    />
                    <Image
                      src={man5}
                      className="h-20 w-20 cursor-pointer"
                      alt="Customer 5"
                    />
                    <Image
                      src={man6}
                      className="h-20 w-20 cursor-pointer"
                      alt="Customer 6"
                    />
                    <Image
                      src={man7}
                      className="h-20 w-20 cursor-pointer"
                      alt="Customer 7"
                    />
                  </div>
                </div>
              </div> */}
        {/* </div>
      </div> */}
    </div>
  );
};

export default Product;

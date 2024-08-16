import React, { useState } from "react";
import icon1 from "../assets/bgImages/icon1.png";
import icon2 from "../assets/bgImages/icon2.png";
import icon3 from "../assets/bgImages/icon3.png";
import icon4 from "../assets/bgImages/icon4.png";
import img from "../assets/bgImages/finalheader.jpg";

const About = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img className="w-[600px]" src={img} alt="About" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDgrey font-semibold mb-4 md:w-4/5">
              Leading the Way in Talent Acquisition, Payroll Solutions, and IT Development
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGray mb-8">
              At ZenzoAlpha Consultancy, we are dedicated to driving your business forward with innovative solutions and expert guidance.
              Our mission is to turn challenges into opportunities through customized services in talent acquisition, 3rd party payroll, and IT development.
              With a commitment to excellence and a focus on results, we partner with you to achieve sustainable growth and success. Discover how our deep industry knowledge and tailored strategies can elevate your business to new heights.
            </p>
            <button className="btn-primary" onClick={handleOpenPopup}>Learn More</button>
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
            <h2 className="text-xl font-semibold mb-4">More About ZenzoAlpha Consultancy</h2>
            <p className="mb-4">
              At ZenzoAlpha Consultancy, our expertise spans across various sectors to provide end-to-end solutions tailored to meet the unique needs of our clients.
            </p>
            <h3 className="text-lg font-semibold mb-2">Talent Acquisition:</h3>
            <p className="mb-4">
              Our talent acquisition services are designed to help businesses find the right talent efficiently. We leverage a network of industry contacts and cutting-edge tools to source and recruit top candidates.
            </p>
            <h3 className="text-lg font-semibold mb-2">Payroll Solutions:</h3>
            <p className="mb-4">
              Our 3rd party payroll solutions ensure accurate and timely payroll processing, allowing your company to focus on growth while we handle compliance and administrative tasks.
            </p>
            <h3 className="text-lg font-semibold mb-2">IT Development:</h3>
            <p className="mb-4">
              We offer IT development services that include software solutions, systems integration, and IT consulting to enhance operational efficiency and support your business objectives.
            </p>
            <p>
              For a more detailed discussion about how we can assist your business, please do not hesitate to reach out to us.
            </p>
          </div>
        </div>
      )}

      {/* company states */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-mybg py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralGray font-semibold mb-4 md:w-4/5">
              Happy Clients: Success Stories from Our Partners<br />
              <span className="text-brandPrimary">
                Grow business with perfect strategy
              </span>
            </h2>
            <p className="md:m-3/4 text-sm text-neutralGray mb-8">
              Discover how ZenzoAlpha Consultancy has made a positive impact on our clients. Read brief success stories showcasing how we’ve helped businesses achieve their goals through expert talent acquisition, seamless payroll solutions, and skilled IT development. Our clients' satisfaction is our top priority, and their success is the ultimate testament to our commitment.
            </p>
          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-row sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img className="h-10" src={icon1} alt="Clients Icon" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralGray">101</h4>
                  <p className="text-white">Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img className="h-10" src={icon2} alt="Agencies Icon" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralGray">8</h4>
                  <p className="text-white">Agencies</p>
                </div>
              </div>
            </div>
            <div className="space-y-8 ">
              <div className="flex items-center gap-4">
                <img className="h-10" src={icon3} alt="Staff Icon" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralGray">32</h4>
                  <p className="text-white">Staff</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img className="h-10" src={icon4} alt="Job Seekers Icon" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralGray">46</h4>
                  <p className="text-white">Job Seekers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

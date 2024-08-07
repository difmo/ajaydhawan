import React from "react";
import icon1 from "../assets/bgImages/icon1.png";
import icon2 from "../assets/bgImages/icon2.png";
import icon3 from "../assets/bgImages/icon3.png";
import icon4 from "../assets/bgImages/icon4.png";
import img from "../assets/bgImages/finalheader.jpg";


const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 " id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img className="w-[600px]" src={img} />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDgrey font-semibold mb-4 md:w-4/5">
              Leading the Way in Talent Acquisition, Payroll Solutions, and IT
              Development
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGray mb-8">
              At ZenzoAlpha Consultancy, we are dedicated to driving your
              business forward with innovative solutions and expert guidance.
              Our mission is to turn challenges into opportunities through
              customized services in talent acquisition, 3rd party payroll, and
              IT development. With a commitment to excellence and a focus on
              results, we partner with you to achieve sustainable growth and
              success. Discover how our deep industry knowledge and tailored
              strategies can elevate your business to new heights.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company states */}
      {/* max-w-screen-2xl */}
      <div className="px-4 lg:px-14  max-w-screen-2xl  mx-auto bg-mybg py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralGray font-semibold mb-4 md:w-4/5">
              Happy Clients: Success Stories from Our Partners<br></br>
              <span className="text-brandPrimary">
               Grow business with perfect strategy
              </span>
            </h2>
            <p className="md:m-3/4  text-sm text-neutralGray mb-8">
              Discover how ZenzoAlpha Consultancy has made a positive impact on
              our clients. Read brief success stories showcasing how we’ve
              helped businesses achieve their goals through expert talent
              acquisition, seamless payroll solutions, and skilled IT
              development. Our clients' satisfaction is our top priority, and
              their success is the ultimate testament to our commitment.
            </p>
          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img className="h-10" src={icon1} />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralGray">
                   101
                  </h4>
                  <p className="text-white">Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img className="h-10" src={icon2} />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralGray">
                    8
                  </h4>
                  <p className="text-white">Agencies</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img className="h-10" src={icon3} />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralGray">
                  32
                  </h4>
                  <p className="text-white">Staff</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img className="h-10" src={icon4} />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralGray">
                 46
                  </h4>
                  <p className="text-white">Job seekers</p>
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

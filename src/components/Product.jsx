import React from "react";
import img from "../assets/bgImages/headerBg2.png";
import img4 from "../assets/bgImages/4.png";
import man1 from "../assets/bgImages/man1.png";
import man2 from "../assets/bgImages/man2.png";
import man3 from "../assets/bgImages/man3.png";
import man4 from "../assets/bgImages/man4.png";
import man5 from "../assets/bgImages/man5.png";
import man6 from "../assets/bgImages/man6.png";
import man7 from "../assets/bgImages/man7.png";

const Product = () => {
  return (
    <div>
      {/* about text */}
      <div
        className="px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl "
        id="product"
      >
        <div className="flex flex-col items-center justify-between gap-12 mx-auto md:w-11/12 md:flex-row">
          <div>
            <img className="w-[600px]" src={img} />
          </div>
          <div className="mx-auto md:w-3/5">
            <h2 className="mb-4 text-4xl font-semibold text-neutralDgrey md:w-4/5">
              Find Your Perfect Match with ZenzoAlpha Consultancy{" "}
            </h2>
            <p className="mb-8 text-sm md:w-3/4 text-neutralGray">
              Simplify and enhance your payroll processes with our 3rd Party
              Payroll services. At ZenzoAlpha Consultancy, we manage all facets
              of payroll administration, allowing you to focus on strategic
              growth. Our solutions are designed to ensure accuracy, compliance,
              and efficiency in every payroll cycle. By leveraging our
              expertise, you can minimize administrative burdens, reduce errors,
              and stay up-to-date with changing regulations.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company states */}
      {/* max-w-screen-2xl */}
      <div className="px-4 max-w-screen-2xl lg:px-14 mx-auto bg-[#000000] py-16">
        <h1 className="text-white text-3xl border-b-2 mb-8 pb-4">
          Third Party Payroll
        </h1>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="">
            <img src={img4} />
          </div>

          {/* <div className="mx-auto  md:2/3"></div> */}
          <div>
            <p className="mb-8 text-sm leading-8 text-white md:1/2">
              Simplify and enhance your payroll processes with our 3rd Party
              Payroll services. At ZenzoAlpha Consultancy, we manage all facets
              of payroll administration, allowing you to focus on strategic
              growth. Our solutions are designed to ensure accuracy, compliance,
              and efficiency in every payroll cycle. By leveraging our
              expertise, you can minimize administrative burdens, reduce errors,
              and stay up-to-date with changing regulations.
            </p>
            <h5 className="mb-3 text-xl font-semibold text-white">
            Effortless Payroll Management with ZenzoAlpha Consultancy
            </h5>
            {/* <p className="text-base text-white texnu">
              British dragon boat racing Association{" "} */}
            {/* </p> */}
            <div>
              <div className="flex flex-wrap items-center gap-8">
                <img src={man1} className="h-20 cursor-pointer " />
                <img src={man2} className="h-20 cursor-pointer " />
                <img src={man3} className="h-20 cursor-pointer " />
                <img src={man4} className="h-20 cursor-pointer " />
                <img src={man5} className="h-20 cursor-pointer " />
                <img src={man6} className="h-20 cursor-pointer " />
                <img src={man7} className="h-20 cursor-pointer " />
                <div>
                  <a
                    className="font-bold text-brandPrimary hover:text-neutral-700"
                    href="/"
                  >
                    Meet all coustomer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

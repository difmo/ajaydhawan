"use client"; // This must be the first line

import React from "react";
import Image from "next/image";
import comp1 from "../assets/trustedComp/img1.png";
import comp2 from "../assets/trustedComp/img2.png";
import comp3 from "../assets/trustedComp/img3.png";
import comp4 from "../assets/trustedComp/img4.png";
import comp5 from "../assets/trustedComp/img5.png";
import comp6 from "../assets/trustedComp/img6.png";
import comp7 from "../assets/trustedComp/img7.png";
import comp8 from "../assets/trustedComp/img8.png";
import comp9 from "../assets/trustedComp/img9.png";
import comp10 from "../assets/trustedComp/img-1.png";

import member from "../assets/logos/member.svg";
import service from "../assets/logos/services.svg";
import training from "../assets/logos/training.svg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organization",
      description:
        "We specialize in offering comprehensive support and resources to diverse membership organizations, ensuring they have the tools and guidance necessary to thrive. Our services include strategic planning, member engagement strategies, and resource development, all designed to drive the success of your organization in a competitive landscape.",
      image: member,
    },
    {
      id: 2,
      title: "Consulting Services",
      description:
        "Our expert consulting services are tailored to help organizations improve their overall performance and efficiency. We work closely with clients to analyze their current operations and develop customized strategies that address specific challenges and opportunities. From process optimization to change management, we provide actionable insights that lead to sustainable growth.",
      image: service,
    },
    {
      id: 3,
      title: "Training and Workshops",
      description:
        "We conduct a variety of training sessions and workshops designed to enhance skills and knowledge for professional growth. Our programs cover a wide range of topics, including leadership development, team collaboration, and industry-specific skills. Each session is interactive and tailored to meet the needs of participants, ensuring that they leave with practical tools and strategies they can apply in their roles.",
      image: training,
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto md:px-14 max-w-screen-2xl">
      <div className="my-8 text-center">
        <h1 className="mb-2 text-4xl py-3 font-semibold md:text-6xl text-neutralGray">
          Our Clients
        </h1>
        <p className="pb-4">
          We have been working with some fortune 500+ clients
        </p>

        {/* Our clients' company logos */}
        <div className="grid justify-center   bg-brandPrimary/20 md:py-20">
          <div className=" grid grid-cols-2 md:grid-cols-5 pt-4  gap-4 px-4 md:gap-4 lg:gap-28">
            <div>
              <a href="https://jtdr.ae/" target="blank">
                <Image
                  className="h-28 object-contain bg-white px-4 rounded-xl "
                  src={comp1}
                  alt="Component 1"
                  width={110} // Specify width for optimizat10n
                  height={100} // Specify height for optimization
                />
              </a>
              <p className="py-2 pr-6">JTDR Dubai</p>
            </div>
            <div>
              <a href="https://www.njgroup.in/" target="blank">
                <Image
                  className="h-28 object-contain bg-white rounded-xl"
                  src={comp2}
                  alt="Component 2"
                  width={110}
                  height={90}
                />{" "}
              </a>
              <p className="py-2  pr-6">NJ Group</p>
            </div>
            <div>
              <a href="https://www.ten.com/en " target="blank">
                <Image
                  className="h-28 object-contain bg-white rounded-xl px-4"
                  src={comp3}
                  alt="Component 3"
                  width={110}
                  height={100}
                />{" "}
              </a>
              <p className="py-2  pr-2"> Technip Energies</p>
            </div>
            <div>
              <a href=" https://datamotive.io/" target="blank">
                <Image
                  className="h-28 object-contain bg-blue-800 px-2 rounded-xl"
                  src={comp4}
                  alt="Component 4"
                  width={110}
                  height={100}
                />{" "}
              </a>
              <p className="py-2  pr-2"> Datamotive.io</p>
            </div>
            <div>
              <a href=" https://www.alepo.com/" target="blank">
                <Image
                  className="h-28 object-contain bg-white px-2 rounded-xl"
                  src={comp5}
                  alt="Component 5"
                  width={110}
                  height={100}
                />{" "}
              </a>
              <p className="py-2 pr-2  md:pr-8">AlepoTech</p>
            </div>

            <div className="">
              <a href="https://www.onactuate.com/ " target="blank">
                <Image
                  className="h-28 object-contain bg-white px-2 rounded-xl"
                  src={comp6}
                  alt="Component 6"
                  width={110}
                  height={100}
                />{" "}
                <p className="py-2  ">Interproductec Labs</p>
              </a>
            </div>
            <div className="">
              <a href="https://www.mandsconsulting.com/ " target="blank">
                <Image
                  className="h-28 object-contain bg-blue-800 px-2 rounded-xl"
                  src={comp7}
                  alt="Component 7"
                  width={110}
                  height={100}
                />{" "}
                <p className="py-2 ">M&S Consulting</p>
              </a>
            </div>
            <div className="">
              <a href=" https://emeraldpp.com/" target="blank">
                <Image
                  className="h-28 object-contain bg-white px-2 rounded-xl"
                  src={comp8}
                  alt="Component 8"
                  width={110}
                  height={100}
                />{" "}
                <p className="py-2 ">Emerald Paper Co.</p>
              </a>
            </div>
            <div className="">
              <a href="http://www.axumtechnologies.com/ " target="blank">
                <Image
                  className="h-28 object-contain bg-white px-2 rounded-xl"
                  src={comp9}
                  alt="Component 9"
                  width={110}
                  height={100}
                />{" "}
                <p className="py-2 pr-6 ">Aksum Tech</p>
              </a>
            </div>
            <div className="">
              <a href="https://www.primafelicitas.com/ " target="blank">
                <Image
                  className="h-28 object-contain bg-white px-2 rounded-xl"
                  src={comp10}
                  width={110}
                  height={100}
                />{" "}
                <p className="py-2 pr-4  md:pr-6 ">Primafelicitas</p>
              </a>
            </div>
          </div>
        </div>

        {/* Service card */}
        <div className="mx-auto mt-20 text-center md:w-1/2" id="service">
          <h1 className="mb-2 text-4xl font-semibold text-neutralGray">
            Manage your entire community in a simple system
          </h1>
          <p className="text-white">Who is Nexcent suitable for?</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-12 mx-auto mt-14 lg:grid-cols-3 md:grid-cols-2 md:w-11/12">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-center h-full px-4 py-8 text-center transition-all duration-300 bg-white rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-brandPrimary"
            >
              <div>
                <div className="mx-auto mb-10 h-14 w-14 rounded-tl-3xl rounded-br-3xl">
                  <Image
                    src={service.image}
                    alt={service.title} // Alt text for accessibility
                    width={56} // Specify width for optimization
                    height={56} // Specify height for optimization
                  />
                </div>
                <h4 className="px-2 mb-2 text-2xl font-bold text-brandPrimary">
                  {service.title}
                </h4>
                <p className="text-sm text-black">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

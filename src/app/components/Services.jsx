"use client"; // This must be the first line

import React from "react";
import Image from "next/image";
import comp1 from "../assets/trustedComp/img1.png";
import comp2 from "../assets/trustedComp/img2.png";
import comp3 from "../assets/trustedComp/img3.png";
import comp4 from "../assets/trustedComp/img4.png";
import comp5 from "../assets/trustedComp/img5.png";
import comp6 from "../assets/trustedComp/img6.png";

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
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h1 className="text-4xl md:text-6xl text-neutralGray font-semibold mb-2">
          Our Clients
        </h1>
        <p>We have been working with some fortune 500+ clients</p>

        {/* Our clients' company logos */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-4 lg:gap-20 mt-8 bg-brandPrimary/20 px-4 py-20 md:py-40">
          <Image
            className="h-28 object-contain bg-white rounded-[50%]"
            src={comp1}
            alt="Component 1"
            width={110} // Specify width for optimizat10n
            height={100} // Specify height for optimization
          />
          <Image
            className="h-28 object-contain bg-white rounded-[50%]"
            src={comp2}
            alt="Component 2"
            width={110}
            height={100}
          />
          <Image
            className="h-28 object-contain bg-white rounded-[50%]"
            src={comp3}
            alt="Component 3"
            width={110}
            height={100}
          />
          <Image
            className="h-28 object-contain bg-white rounded-[50%]"
            src={comp4}
            alt="Component 4"
            width={110}
            height={100}
          />
          <Image
            className="h-28 object-contain bg-white rounded-[50%]"
            src={comp5}
            alt="Component 5"
            width={110}
            height={100}
          />
          <Image
            className="h-28 object-contain bg-white rounded-[50%]"
            src={comp6}
            alt="Component 6"
            width={110}
            height={100}
          />
        </div>

        {/* Service card */}
        <div className="mt-20 md:w-1/2 mx-auto text-center">
          <h1 className="text-4xl text-neutralGray font-semibold mb-2">
            Manage your entire community in a simple system
          </h1>
          <p className="text-white">Who is Nexcent suitable for?</p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white px-4 py-8 text-center rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className="h-14 w-14 mx-auto rounded-tl-3xl mb-10 rounded-br-3xl">
                  <Image
                    src={service.image}
                    alt={service.title} // Alt text for accessibility
                    width={56} // Specify width for optimization
                    height={56} // Specify height for optimization
                  />
                </div>
                <h4 className="text-2xl font-bold text-brandPrimary mb-2 px-2">
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

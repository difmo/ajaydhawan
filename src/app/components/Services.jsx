"use client"; // This must be the first line

import React from "react";
import Image from "next/image";
import comp1 from "../assets/logos/yt.jpg";
import comp2 from "../assets/logos/insta.jpg";             
import comp3 from "../assets/trustedComp/spotify.jpg";
import comp4 from "../assets/trustedComp/apple.jpg";
import comp5 from "../assets/trustedComp/kuku.jpg";
import comp6 from "../assets/trustedComp/img6.png";
import comp7 from "../assets/trustedComp/img7.png";
import comp8 from "../assets/trustedComp/img8.png";
import comp9 from "../assets/trustedComp/img9.png";
import comp10 from "../assets/trustedComp/img-1.png";

import member from "../assets/logos/bubble.png";
import service from "../assets/logos/goal.png";
import training from "../assets/logos/businessman.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "The Power of Thought",
      description:
        "Thoughts shape our reality—they are the seeds from which our actions grow and our future unfolds. By embracing positivity and focusing on empowering ideas, we can overcome obstacles and achieve greatness. Let your thoughts be the guiding light that steers you toward a brighter, more fulfilling life.",
      image: member,
    },
    {
      id: 2,
      title: "The Fire Within",
      description:
        "Motivation is the spark that ignites extraordinary achievements. It’s the voice that whispers, “You can do this” even when the odds seem stacked against you. True motivation comes from within—a blend of passion, resilience, and the unshakable belief in your potential. Find that fire within and let it guide you to conquer every challenge.",
      image: service,
    },
    {
      id: 3,
      title: "The Power of Self-Discovery",
      description:
        "Personal development is the lifelong journey of becoming the best version of yourself. It begins with self-awareness—understanding your strengths, recognizing areas for improvement, and embracing the unique traits that make you, you. By committing to growth, you unlock your true potential and open doors to limitless opportunities.",
      image: training,
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto md:px-14 max-w-screen-2xl ">
      <div className="my-8 text-center">
        <h1 className="py-3 mb-2 text-4xl font-semibold md:text-6xl text-neutralGray">
        Inspire, Connect, Transform: Join Us Across Platforms
        </h1>
        <p className="pb-4">
        Discover life-changing insights and daily inspiration—join us on YouTube, Instagram, and Other Platform to fuel your journey!
        </p>

        {/* Our clients' company logos */}
        <div className="grid justify-center bg-white md:py-20">
          <div className="grid grid-cols-2 gap-4 px-4 pt-4 md:grid-cols-5 md:gap-4 lg:gap-28">
            <div>
              <a href="https://www.youtube.com/" target="blank">
                <Image
                  className="object-contain px-4 bg-white border border-gray-500 h-28 rounded-xl "
                  src={comp1}
                  alt="Component 1"
                  width={110} // Specify width for optimizat10n
                  height={100} // Specify height for optimization
                />
              </a>
              <p className="py-2 pr-6 text-black">YouTube</p>
            </div>
            <div>
              <a href="https://www.instagram.com/" target="blank">
                <Image
                  className="object-contain bg-white border border-gray-500 h-28 rounded-xl"
                  src={comp2}
                  alt="Component 2"
                  width={110}
                  height={90}
                />{" "}
              </a>
              <p className="py-2 pr-6 text-black">Instagram</p>
            </div>
            <div>
              <a href="https://open.spotify.com/ " target="blank">
                <Image
                  className="object-contain px-4 bg-white border border-gray-500 h-28 rounded-xl"
                  src={comp3}
                  alt="Component 3"
                  width={110}
                  height={100}
                />{" "}
                {/* dvcshdbcfhj */}
              </a>
              <p className="py-2 pr-2 text-black"> Spotify</p>
            </div>
            <div>
              <a href=" https://podcasts.apple.com/us/browse" target="blank">
                <Image
                  className="object-contain px-2 bg-white border border-gray-500 h-28 rounded-xl"
                  src={comp4}
                  alt="Component 4"
                  width={110}
                  height={100}
                />{" "}
              </a>
              <p className="py-2 pr-2 text-black"> Apple Podcasts</p>
            </div>
            <div>
              <a href=" https://kukufm.com/" target="blank">
                <Image
                  className="object-contain px-2 bg-white border border-gray-500 h-28 rounded-xl"
                  src={comp5}
                  alt="Component 5"
                  width={110}
                  height={100}
                />{" "}
              </a>
              <p className="py-2 pr-2 md:pr-8 text-black">KuKu FM</p>
            </div>

            {/* <div className="">
              <a href="https://www.onactuate.com/ " target="blank">
                <Image
                  className="object-contain px-2 bg-white h-28 rounded-xl"
                  src={comp6}
                  alt="Component 6"
                  width={110}
                  height={100}
                />{" "}
                <p className="py-2 ">Interproductec Labs</p>
              </a>
            </div> */}
            {/* <div className="">
              <a href="https://www.mandsconsulting.com/ " target="blank">
                <Image
                  className="object-contain px-2 bg-blue-800 h-28 rounded-xl"
                  src={comp7}
                  alt="Component 7"
                  width={110}
                  height={100}
                />{" "}
                <p className="py-2 ">M&S Consulting</p>
              </a>
            </div> */}
            {/* <div className="">
              <a href=" https://emeraldpp.com/" target="blank">
                <Image
                  className="object-contain px-2 bg-white h-28 rounded-xl"
                  src={comp8}
                  alt="Component 8"
                  width={110}
                  height={100}
                />{" "}
                <p className="py-2 ">Emerald Paper Co.</p>
              </a>
            </div> */}
            {/* <div className="">
              <a href="http://www.axumtechnologies.com/ " target="blank">
                <Image
                  className="object-contain px-2 bg-white h-28 rounded-xl"
                  src={comp9}
                  alt="Component 9"
                  width={110}
                  height={100}
                />{" "}
                <p className="py-2 pr-6 ">Aksum Tech</p>
              </a>
            </div> */}
            {/* <div className="">
              <a href="https://www.primafelicitas.com/ " target="blank">
                <Image
                  className="object-contain px-2 bg-white h-28 rounded-xl"
                  src={comp10}
                  width={110}
                  height={100}
                />{" "}
                <p className="py-2 pr-4 md:pr-6 ">Primafelicitas</p>
              </a>
            </div> */}
          </div>
        </div>

        {/* Service card */}
        <div className="mx-auto mt-20 text-center md:w-1/2" id="service">
          <h1 className="mb-2 text-4xl font-semibold text-neutralGray">
          Unlock Your Potential:
          </h1>
          <p className="text-white"> Inspiring Thoughts, Motivation, and Growth</p>
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
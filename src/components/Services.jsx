import React from "react";
import comp1 from "../assets/trustedComp/img1.png";
import comp2 from "../assets/trustedComp/img2.jpg";
import comp3 from "../assets/trustedComp/img3.png";
import comp4 from "../assets/trustedComp/img4.png";
import comp5 from "../assets/trustedComp/img5.jpg";
import comp6 from "../assets/trustedComp/img6.png";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organization",
      description:
        "Providing support and resources for members of various organizations.",
      image: comp1, // Placeholder image URL
    },
    {
      id: 2,
      title: "Consulting Services",
      description:
        "Offering expert advice and solutions to help businesses improve their performance.",
      image:comp2, // Placeholder image URL
    },
    {
      id: 3,
      title: "Training and Workshops",
      description:
        "Conducting training sessions and workshops to enhance skills and knowledge.",
      image: comp3, // Placeholder image URL
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16  max-w-screen-2xl mx-auto ">
      <div className="text-center my-8">
        <h1 className="text-4xl text-neutralGray font-semibold mb-2">
          Our Clients
        </h1>
        <p>We have been working with some fortune 500+ clients</p>

        {/* our clients company logo */}
        <div className="my-12 flex items-center  justify-between  ">
          <img className="h-28" src={comp1} alt="" />
          <img className="h-28" src={comp2} alt="" />
          <img className="h-28" src={comp3} alt="" />
          <img className="h-28" src={comp4} alt="" />
          <img className="h-28" src={comp5} alt="" />
          <img className="h-28" src={comp6} alt="" />
        </div>

        {/* service card */}
        <div className="mt-20 md:w-1/2 mx-auto text-center">
          <h1 className="text-4xl text-neutralGray font-semibold mb-2">
            Manage your entire comminity in simple system
          </h1>
          <p>who is nexcent suitable for </p>
        </div>

        {/* cards */}

        <div className=" mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 ">
          {services.map((service) => (
            <div
              key={service.id}
              className=" px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className="bg-white h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl ">
                  <img src={service.image} className="" />
                </div>
                <h4 className="text-2xl font-bold text-neutralGray mb-2 px-2">
                  {service.title}
                </h4>
                <p className="text-sm text-neutralGray">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

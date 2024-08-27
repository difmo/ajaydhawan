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
      "Offering comprehensive support and resources to diverse membership organizations to drive their success.",
    image: comp1, // Placeholder image URL
  },
  {
    id: 2,
    title: "Consulting Services",
    description:
      "Providing expert consulting to help organizations improve performance with tailored solutions and strategies.",
    image: comp2, // Placeholder image URL
  },
  {
    id: 3,
    title: "Training and Workshops",
    description:
      "Conducting effective training sessions and workshops to enhance skills and knowledge for professional growth.",
    image: comp3, // Placeholder image URL
  },
];
  
  return (
    <div
      className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto "
      id="service"
    >
      <div className="text-center my-8">
        <h1 className="text-4xl text-neutralGray font-semibold mb-2">
          Our Clients
        </h1>
        <p>We have been working with some fortune 500+ clients</p>

        {/* our clients company logo */}
        <div className="flex flex-wrap justify-center gap:4 md:gap-4 lg:gap-36 mt-8">
          <img className="h-28 object-contain" src={comp1} alt="Component 1" />
          <img className="h-28 object-contain" src={comp2} alt="Component 2" />
          <img className="h-28 object-contain" src={comp3} alt="Component 3" />
          <img className="h-28 object-contain" src={comp4} alt="Component 4" />
          <img className="h-28 object-contain" src={comp5} alt="Component 5" />
          <img className="h-28 object-contain" src={comp6} alt="Component 6" />
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
              className=" bg-white px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-y-5
               hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className=" h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl ">
                  <img src={service.image} className="" />
                </div>
                <h4 className="text-2xl font-bold text-brandPrimary mb-2 px-2">
                  {service.title}
                </h4>
                <p className="text-sm text-black">
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

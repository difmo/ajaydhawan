import React from "react";
import img from "../assets/bgImages/finalheader.jpg";

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 ">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img className="w-96" src={img} />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDgrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three year at Pixelgrades
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGray mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              quaerat. Fuga maiores, ea nostrum quos cum, placeat error
              consectetur veniam voluptatibus officiis culpa? Officiis, cumque
              hic? Maiores delectus nemo alias!
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company states */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-[#000000] py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralGray font-semibold mb-4 md:w-4/5">
              Helping a locals<br></br>
              <span className="text-brandPrimary">
                bussiness relevent itself
              </span>
            </h2>
            <p className="md:m-3/4  text-sm text-neutralGray mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, ea
              veniam. Error ad facere quasi voluptatum dicta iusto recusandae
              saepe ea, animi neque repellendus natus quis laborum sit eius
              ipsa!
            </p>
          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img className="h-10" src={img} />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralGray">
                    2,245,341
                  </h4>
                  <p className="text-white">Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img className="h-10" src={img} />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralGray">
                    2,245,341
                  </h4>
                  <p className="text-white">Members</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img className="h-10" src={img} />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralGray">
                    2,245,341
                  </h4>
                  <p className="text-white">Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img className="h-10" src={img} />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralGray">
                    2,245,341
                  </h4>
                  <p className="text-white">Members</p>
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

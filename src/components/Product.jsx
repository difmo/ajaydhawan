import React from "react";
import img from "../assets/bgImages/finalheader.jpg";

const Product = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 mx-auto my-8 lg:px-14 max-w-screen-2xl ">
        <div className="flex flex-col items-center justify-between gap-12 mx-auto md:w-11/12 md:flex-row">
          <div>
            <img className="w-96" src={img} />
          </div>
          <div className="mx-auto md:w-3/5">
            <h2 className="mb-4 text-4xl font-semibold text-neutralDgrey md:w-4/5">
              The unseen of spending three year at Pixelgrades
            </h2>
            <p className="mb-8 text-sm md:w-3/4 text-neutralGray">
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
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="md:w-1/2">
            <img src={img} />
          </div>

          {/* <div className="mx-auto  md:2/3"></div> */}
          <div>
            <p className="mb-8 text-sm leading-8 text-white md:1/2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              maiores molestias ea accusamus fuga in suscipit dolore nihil vel
              ipsum, asperiores commodi aperiam tenetur pariatur ullam iure nam
              maiores molestias ea accusamus fuga in suscipit dolore nihil vel
              ipsum, asperiores commodi aperiam tenetur pariatur ullam iure nam
              maiores molestias ea accusamus fuga in suscipit dolore nihil vel
              ipsum, asperiores commodi aperiam tenetur pariatur ullam iure nam
              maiores molestias ea accusamus fuga in suscipit dolore nihil vel
              ipsum, asperiores commodi aperiam tenetur pariatur ullam iure nam
              iste perferendis.
            </p>
            <h5 className="mb-32 text-xl font-semibold text-brandPrimary">
              {" "}
              Tim Smith
            </h5>
            <p className="text-base text-white texnu">
              British dragon boat racing Association{" "}
            </p>
            <div>
              <div className="flex flex-wrap items-center gap-8">
                <img src={img} className="h-20 cursor-pointer " />
                <img src={img} className="h-20 cursor-pointer " />
                <img src={img} className="h-20 cursor-pointer " />
                <img src={img} className="h-20 cursor-pointer " />
                <img src={img} className="h-20 cursor-pointer " />
                <img src={img} className="h-20 cursor-pointer " />
                <img src={img} className="h-20 cursor-pointer " />
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

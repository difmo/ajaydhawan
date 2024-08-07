import React from "react";

const NewsLetter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSilver ">
      <div className="flex items-center justify-center lg:w-2/3 mx-auto">
        <div className="text-center">
          <h2 className="mb-4 lg:text-5xl text-3xl font-semibold text-neutralDgrey lg:leading-snug">
            At ZenzoAlpha Consultancy, we believe in transforming insights into
            actionable strategies, guiding businesses towards sustainable growth
            and unparalleled success.
          </h2>
          <div>
            <button className="btn-primary">
              More Info
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" inline-block ml-2 font-bold text-mybg hover:text-neutral-700"
              >
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  sstrokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

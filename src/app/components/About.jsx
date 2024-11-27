"use client"; // If you're using a layout with server components

import React, { useState } from "react";
import Image from "next/image";
import icon1 from "../assets/logos/video.png";
import icon2 from "../assets/logos/viwe.png";
import icon3 from "../assets/logos/notebook.png";
import icon4 from "../assets/logos/story.png";
import img from "../assets/aboutimg/motiva.svg";

const About = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div>
      {/* about text */}
      <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto bg-white border border-gray-700 rounded-lg py-16" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <Image className="w-[600px]" src={img} alt="About" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-[#FF4200] font-semibold mb-4 md:w-4/5">
              From Impossible to Inevitable: Unlocking the Power to Transform
              Challenges into Triumph
            </h2>
            <p className="md:w-3/4 text-sm text-black mb-8">
              The idea of the "impossible" is merely a challenge waiting to be
              conquered. Every breakthrough in history, every great achievement,
              was once considered unattainable. But it is the relentless pursuit
              of solutions, the courage to try, and the belief that change is
              possible that turns the impossible into the possible. It's not
              about avoiding obstacles, but about finding ways to overcome them.
              Every small step, every effort, builds a bridge from doubt to
              success. If you can envision it, you can achieve it — because what
              was once impossible is only the beginning of what you can create..
            </p>
            <button
              className=" btn-primary  text-white"
              onClick={handleOpenPopup}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-11/12 md:w-3/4 lg:w-1/2">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              More About Dhawan's Thoughts
            </h2>
            <p className="mb-4">
              Motivation Motivation: 1- Intrinsic Motivation: Comes from within
              (e.g., pursuing hobbies or personal growth). 2- Extrinsic
              Motivation: Comes from external rewards (e.g., money,
              recognition).
            </p>
            <h3 className="text-lg font-semibold mb-2">Talent Acquisition:</h3>
            <p className="mb-4">
              Thought Processes: 1- Critical Thinking: Analyzing situations
              objectively to make better decisions. 2- Creative Thinking:
              Generating new ideas and innovative solutions. 3- Positive
              Thinking: Reframing challenges as opportunities.
            </p>
            <h3 className="text-lg font-semibold mb-2">Payroll Solutions:</h3>
            <p className="mb-4">
              Our 3rd party payroll solutions ensure accurate and timely payroll
              processing, allowing your company to focus on growth while we
              handle compliance and administrative tasks.
            </p>
            <h3 className="text-lg font-semibold mb-2">IT Development:</h3>
            <p className="mb-4">
              1- Self-Awareness: Understand your strengths, weaknesses, and
              emotions. 
              2- Communication Skills: Practice active listening and
              clear expression.
              3- Confidence Building: Set small goals and
              celebrate achievements. 
              4- Emotional Intelligence (EQ): Develop
              empathy, self-regulation, and social skills. 
              5- Time Management:Prioritize tasks to maximize productivity.
            </p>
            <p>
            "Success is not final, failure is not fatal: it is the courage to continue that counts." – Winston Churchill
            </p>
          </div>
        </div>
      )}

      {/* video reach and the viwes */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-white border border-gray-700 rounded-lg py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-brandPrimary font-semibold mb-4 md:w-4/5">
              Your Journey in Motion: All Videos & Stories at a Glance
              <br />
              <span className="text-black">
                Grow business with perfect strategy
              </span>
            </h2>
            <p className="md:m-3/4 text-sm text-black mb-8">
              Indicates that this section aggregates all user-uploaded content
              in one place.Whether short stories, long-form videos, or
              highlights, it covers all formats to ensure nothing is left
              out.Suggests a well-organized layout, making it easy for users to
              locate specific content.
            </p>
          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-row sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Image className="h-10 w-10" src={icon1} alt="Clients Icon" />
                <div>
                  <h4 className="text-2xl font-semibold text-black">101</h4>
                  <p className="text-black">Videos</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image className="h-10 w-10" src={icon2} alt="Agencies Icon" />
                <div>
                  <h4 className="text-2xl font-semibold text-black">8</h4>
                  <p className="text-black">Viwers</p>
                </div>
              </div>
            </div>
            <div className="space-y-8 ">
              <div className="flex items-center gap-4">
                <Image className="h-10 w-10" src={icon3} alt="Staff Icon" />
                <div>
                  <h4 className="text-2xl font-semibold text-black">32</h4>
                  <p className="text-black">Books</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  className="h-10 w-10"
                  src={icon4}
                  alt="Job Seekers Icon"
                />
                <div>
                  <h4 className="text-2xl font-semibold text-black">46</h4>
                  <p className="text-black">Story</p>
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

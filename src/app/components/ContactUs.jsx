"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!form.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!form.email) { 
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!form.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs
        .sendForm(
          "service_0g97v9p",
          "template_kq774f9",
          e.target,
          "HK4mIkZI01IBPf94S"
        )

        .then(
          (result) => {
            setStatus("Message sent successfully!");
            setForm({ name: "", email: "", message: "" });
          },
          (error) => {
            setStatus("Message failed to send.");
          }
        );
    } else {
      setStatus("");
    }
  };

  return (
    <div id="contact">
      <section className="relative text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-4 text-2xl font-medium sm:text-6xl title-font text-brandPrimary">
              Contact Us
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-neutralDgrey">
              Reach Out to Us Today to Explore How GenzoAlpha Consultancy Can
              Help You Achieve Your Business Goals and Unlock New Opportunities
              for Growth. We’re Here to Partner with You Every Step of the Way
            </p>
          </div>
          <div className="mx-auto lg:w-1/2 md:w-2/3">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -m-2">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="text-sm leading-7 text-neutralDgrey"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-3 py-1 text-base leading-8 text-white transition-colors duration-200 ease-in-out border border-gray-700 rounded outline-none bg-brandPrimary/20 focus:border-indigo-500"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-sm leading-7 text-neutralDgrey"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-3 py-1 text-base leading-8 text-white transition-colors duration-200 ease-in-out border border-gray-700 rounded outline-none bg-brandPrimary/20 focus:border-indigo-500"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full p-2">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="text-sm leading-7 text-neutralDgrey"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full h-32 px-3 py-1 text-base leading-6 text-white transition-colors duration-200 ease-in-out border border-gray-700 rounded outline-none resize-none bg-brandPrimary/20 focus:border-indigo-500"
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-full p-2">
                  <button
                    type="submit"
                    className="flex px-8 py-2 mx-auto border-0 btn-primary"
                  >
                    Send
                  </button>
                </div>
                {status && (
                  <div className="w-full p-2 text-center">
                    <p>{status}</p>
                  </div>
                )}
                <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
                  <a className="text-indigo-500">
                    hradmin@genzoalphaconsulting.com,
                    ta_team@genzoalphaconsulting.com{" "}
                  </a>
                  <p className="my-5 leading-normal text-neutralGray">
                    4/87 Viraj Khand
                    <br />
                    Gomti Nagar Lucknow 226010
                  </p>
                  <span className="inline-flex">
                    {/* Social media icons */}
                    {/* ... */}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

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
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-6xl text-2xl font-medium title-font mb-4 text-brandPrimary">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-neutralDgrey">
              Reach Out to Us Today to Explore How GenzoAlpha Consultancy Can
              Help You Achieve Your Business Goals and Unlock New Opportunities
              for Growth. We’re Here to Partner with You Every Step of the Way
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-neutralDgrey"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-brandPrimary/20 rounded border border-gray-700 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-neutralDgrey"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-brandPrimary/20 rounded border border-gray-700 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-neutralDgrey"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-brandPrimary/20 rounded border border-gray-700 focus:border-indigo-500 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto border-0 py-2 px-8 btn-primary"
                  >
                    Send
                  </button>
                </div>
                {status && (
                  <div className="p-2 w-full text-center">
                    <p>{status}</p>
                  </div>
                )}
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">
                    hradmin@genzoalphaconsulting.com,
                    ta_team@genzoalphaconsulting.com{" "}
                  </a>
                  <p className="leading-normal my-5 text-neutralGray">
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

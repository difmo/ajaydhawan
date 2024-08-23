import React from "react";
import it1 from "../assets/bgImages/headerBg.jpg";
import it2 from "../assets/bgImages/it1.png";
import it3 from "../assets/bgImages/it2.png";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Full-Stack Developer",
      image: it1,
      content:
        "Expert in both frontend and backend technologies, delivering seamless and scalable web solutions.",
    },
    {
      id: 2,
      title: "Software Engineer",
      image: it2,
      content:
        "Creates custom software solutions with proficiency in Python, Java, and C# to meet your business needs.",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      image: it3,
      content:
        "Optimizes development and operations with automation tools like Docker and Kubernetes for efficient software deployment.",
    },
  ];

  return (
    <div className="px-4 mx-auto my-28 lg:px-14 max-w-screen-2xl" id="">
      <h2 className="text-4xl text-neutralDgrey font-semibold mb-4 md:w-4/5">
        Empower Your Projects with GenzoAlpha Consultancy’s IT Developers
      </h2>
      <p className="md:w-3/4 text-sm text-neutralGray mb-8">
        Unlock the potential of your technology projects with our specialized IT
        Developer services. GenzoAlpha Consultancy connects you with highly
        skilled IT developers who excel in various programming languages and
        technologies. Whether you need developers for short-term projects or
        long-term engagements, our talent pool is equipped to deliver innovative
        solutions and drive your digital transformation initiatives.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative bg-white shadow-lg rounded-md overflow-hidden"
          >
            <img
              className="h-52 w-full object-cover transition-transform duration-300 hover:scale-95"
              src={blog.image}
              alt={blog.title}
            />
            <div className="px-4 py-8 text-center">
              <h3 className="mb-3 font-semibold text-neutralGray">
                {blog.title}
              </h3>
              <div className="flex items-center justify-center gap-4">
                <a
                  className="font-bold text-brandPrimary hover:text-neutral-700"
                  href="/"
                >
                 {blog.content}
                </a>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

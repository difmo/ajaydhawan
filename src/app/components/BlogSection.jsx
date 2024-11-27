"use client";

import React from "react";

const BlogGrid = () => {
  // Data for blog posts
  const blogPosts = [
    {
      title: "Are we alone? Or maybe not!",
      date: "November 25, 2024",
      content: "We are not alone. It’s a belief. It may be true. Someone may be going through the same emotions, same...",
    },
    {
      title: "Get rich quick",
      date: "November 24, 2024",
      content: "When we taste a little success of a product we built, we want to 10X it. Or 100X. And make a lot...",
    },
    {
      title: "The best thing about childhood",
      date: "November 23, 2024",
      content: "Of the entire childhood of waiting for summer vacations, having crushes, that little pocket money...",
    },
    // Duplicate posts to make up 10 total for demonstration
    ...Array(7).fill({
      title: "Sample Blog Title",
      date: "November 20, 2024",
      content: "This is a placeholder for blog content. Replace with actual blog descriptions for unique content...",
    }),
  ];

  return (
    <div className="bg-black text-white py-12 px-1">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-5xl font-bold">Read My Blog</h1>
        <p className="text-lg mt-2 text-[#FF4200] ">Read the latest articles from AjayDhawan.</p>
      </div>

      {/* Responsive Grid for Blog Posts */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="border border-white p-6 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Blog Headline */}
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              {/* Blog Date */}
              <p className="text-sm mb-4">{post.date}</p>
              {/* Blog Content */}
              <p className="text-sm">{post.content}</p>
            </div>
            {/* Read More Button */}
            <div className="mt-4">
              <button
                className="bg-[#FF4200] hover:bg-white text-white py-2 px-4 transition-all duration-300 rounded-2xl hover:text-mybg"
                onClick={() => alert(`You clicked on: ${post.title}`)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Read All Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-white text-blue-500 font-semibold rounded-2xl shadow-md hover:bg-[#FF4200] hover:text-white transition duration-300">
          See More...
        </button>
      </div>
    </div>
  );
};

export default BlogGrid;

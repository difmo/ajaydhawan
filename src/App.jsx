import React from "react";
import "./App.css"; // Import Tailwind CSS file if it's not imported elsewhere
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Product from "./components/Product";
import Blog from "./components/Blog";
import NewsLetter from "./components/NewsLetter";
import { Footer } from "flowbite-react";
import Myfooter from "./components/Myfooter";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/Faq";

function App() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Home />
        <Services />
        <About />
        <Product />
        <Blog />
        <NewsLetter />
        <FAQ />
        <ContactUs />
        <Myfooter />
      </div>
    </>
  );
}

export default App;

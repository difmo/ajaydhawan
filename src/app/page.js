import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import About from "./components/About";
import Product from "./components/Product";
import Blog from "./components/Blog";
import NewsLetter from "./components/BlogSection";
import FAQ from "./components/Faq";
import ContactUs from "./components/ContactUs";
import Myfooter from "./components/Myfooter";

export const metadata = {
  title:
    "GenzoAlpha Consulting Group | Business Consulting Services in Lucknow, India ",
  title: "GenzoAlpha Consulting ",
  title: "GenzoAlpha Consulting Group ",
  title: "GenzoAlpha ",
  description:
    "GenzoAlpha Consulting Group offers professional business consulting services in Lucknow, India. We provide strategic solutions to unlock business growth and success.",
  keywords: [
    "GenzoAlpha Consulting Group",
    "business consulting",
    "enterprise solutions",
    "business growth",
    "consulting services",
    "business transformation",
    "Lucknow business consulting",
    "India business solutions",
    "corporate consulting",
    "business advisory",
    "strategic consulting",
    "startup consulting",
    "business strategy",
    "business development",
    "management consulting",
    "financial consulting",
    "technology consulting",
    "digital transformation",
    "startup solutions",
    "business innovation",
    "business process optimization",
    "market research consulting",
    "business process consulting",
    "Lucknow consultants",
    "corporate strategy",
    "SME consulting services",
    "IT consulting services",
    "business analysis",
    "project management consulting",
    "business growth strategy",
    "market entry strategy",
    "India corporate consulting",
    "organizational consulting",
    "leadership consulting",
    "business coaching",
    "business solutions Lucknow",
    "operational consulting",
    "marketing consulting",
    "growth consulting",
    "business planning",
    "consultancy firm India",
  ],
  openGraph: {
    title:
      "GenzoAlpha Consulting Group | Business Consulting Services in Lucknow, India",
    description:
      "Transform your business with GenzoAlpha Consulting Group. We offer expert consulting services for businesses in Lucknow, India, to help you grow and succeed.",
    url: "https://www.genzoalphaconsulting.com/",
    images: [
      {
        url: "../app/assets/logo.png",
        width: 800,
        height: 600,
        alt: "GenzoAlpha Consulting Group",
      },
    ],
  },
  twitter: {
    card: "../app/assets/bgImages/1.png",
    title:
      "GenzoAlpha Consulting Group | Business Consulting Services in Lucknow, India",
    description:
      "GenzoAlpha Consulting Group helps businesses in Lucknow, India, achieve growth through strategic consulting services. Let us help you transform your business.",
    images: ["../app/assets/headerimg/img1.svg"],
  },
  meta: [
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "GenzoAlpha Consulting Group",
    },
    {
      name: "language",
      content: "English",
    },
    {
      name: "geo.region",
      content: "IN-UP",
    },
    {
      name: "geo.placename",
      content: "Lucknow",
    },
    {
      name: "geo.position",
      content: "26.8467;80.9462",
    },
    {
      name: "ICBM",
      content: "26.8467, 80.9462",
    },
  ],
};

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HomePage />
      <Services />
      <About />
      <Product />
      <Blog />
      <NewsLetter />
      <FAQ />
      <ContactUs />
      <Myfooter />
    </div>
  );
}

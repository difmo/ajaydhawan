import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../assets/logo.png";

export default function Myfooter() {
  return (
    <Footer  className="bg-brandPrimary/20 " container >
      <div className="w-full">
        <div className="grid w-full justify-between lg:px-40 sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="space-y-4 mb-8">
            <a
              href=""
              className="text-2xl font-bold   flex items-center space-x-3 "
            >
              <img className="w-10 inline-block items-center" src={logo} />
              <span className="text-gray-400">GenzoAlpha Consulting Group</span>
            </a>
            <div>
              <p className="text-gray-400">
              Unleash Your Business Potential -GenzoAlpha Consultancy</p>
            </div>  
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div>
              <Footer.Title title="Pages" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">Services</Footer.Link>
                <Footer.Link href="#">About</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Instagram</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                <Footer.Link href="#">FAQ</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-between border-t border-gray-700 mt-7  ">
          <Footer.Copyright href="https://codeservir.com/" className="mt-4" by="Design and Developed by Codeservir Technologies" year={2024}  />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

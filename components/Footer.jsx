import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import NavLogo from "../public/assets/nav.png";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { BsArrowUp, BsTelephone } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <>
      <div className="lg:max-w-[1320px] lg:max-h-[1173px] m-auto">
        <hr className="text-white" />
        <span className=" text-white text-center">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <BsArrowUp className="text-5xl p-2 rounded-full  border border-white m-auto  bg-black hover:bg-[#0E0E0E] -mt-6" />
          </Link>
          <span className="ml-[48.2%] text-xs font-extralight">Go to top</span>
        </span>
        <div className="py-5">
          <footer className="text-white body-font">
            <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex items-center md:justify-start justify-center text-white mr-8">
                <Image
                  src={NavLogo}
                  alt="/"
                  width="60"
                  height="60"
                  className="cursor-pointer  m-auto bg-white p-1 rounded-full"
                />
              </a>
              <p className="text-sm text-white lg:max-w-[774px] lg:h-[60]">
                Freshly welcomes all its customers to come and create special
                memories. Our vision <br /> is to make our customers experience
                our quality brew and create special memories.
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-2">
                <a className="text-white p-1 border border-white hover:bg-white hover:text-black">
                  <FiFacebook />
                </a>
                <a className="text-white p-1 border border-white hover:bg-white hover:text-black">
                  <FiInstagram />
                </a>
                <a className="text-white p-1 border border-white hover:bg-white hover:text-black">
                  <FiTwitter />
                </a>
                <a className="text-white p-1 border border-white hover:bg-white hover:text-black">
                  <ImPinterest2 />
                </a>
                <a className="text-white p-1 border border-white hover:bg-white hover:text-black">
                  <FiYoutube />
                </a>
              </span>
            </div>

            <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-evenly">
              <a className="flex items-center md:justify-start justify-center text-white space-x-4 mr-8">
                <BsTelephone className="text-xl" /> <span>+1234567890</span>
              </a>
              <p className="flex m-auto text-white space-x-4">
                <BiLocationPlus className="text-2xl" />{" "}
                <span>Bashundhara R/A, Dhaka</span>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
                <a className="text-white flex space-x-4" target={"_blank"}>
                  <HiOutlineMail className="text-2xl " />{" "}
                  <span>freshlycafe@support.com</span>
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;

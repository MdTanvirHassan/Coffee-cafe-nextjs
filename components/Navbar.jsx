import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLogo from "../public/assets/nav.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#000000");
  // const [position, setPosition] = useState('fixed')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 40) {
        setShadow(true);
        setNavBg("#1E1E1E");
        setLinkColor("#FFFFFF");
      } else {
        setShadow(false);
        setNavBg("transparent");
        setLinkColor("#FFFFFF");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 lg:h-[75px] shadow-lg shadow-gray-700 z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }>
      <div className="flex justify-evenly items-center w-full h-full lg:w-[1246px] lg:h-[50px] m-auto lg:mt-[22px]">
      <div>
          <ul style={{ color: `${linkColor}` }} className="hidden lg:flex border-b-2 border-white">
            <li className="ml-7 text-bold text-white hover:text-[#A35715] hover:border-b-4 hover:border-[#A35715] pb-2">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-7 text-bold text-white hover:text-[#A35715] hover:border-b-4 hover:border-[#A35715] pb-2">
              <Link href="/#about">About us</Link>
            </li>
            <li className="ml-7 text-bold text-white hover:text-[#A35715] hover:border-b-4 hover:border-[#A35715] pb-2">
              <Link href="/#product">Our Product</Link>
            </li>
            <li className="mx-7 text-bold text-white hover:text-[#A35715] hover:border-b-4 hover:border-[#A35715] pb-2">
              <Link href="/#menu">Menu</Link>
            </li>
          </ul>
          
        </div>
        <Link href="/">
          <div className="">
            <Image
              src={NavLogo}
              alt="/"
              width="60"
              height="60"
              className="cursor-pointer  m-auto bg-white p-1 rounded-full"
            />
          </div>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden lg:flex border-b-2 border-white pb-2">
            <li className="ml-7 text-bold text-white hover:text-[#A35715] hover:border-b-4 hover:border-[#A35715] pb-2">
              <Link href="/#blog">Blog News</Link>
            </li>
            <li className="ml-7 text-bold text-white hover:text-[#A35715] hover:border-b-4 hover:border-[#A35715] pb-2">
              <Link href="/#contact">Contact Us</Link>
            </li>
            <li className="ml-7 text-bold text-white hover:text-[#A35715] hover:border-b-4 hover:border-[#A35715] pb-2">
              <Link href="/#cart">Cart</Link>
            </li>
            <li className="mx-7 text-bold text-white hover:text-[#A35715] hover:border-b-4 hover:border-[#A35715] pb-2">
              <Link href="/#login">Log in</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="lg:hidden px-4">
            <AiOutlineMenu size={25} className="text-white" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-5 ease-in duration-500"
              : "fixed left-[-150%] top-0 p-5 ease-in duration-500"
          }>
          <div>
            <div className="flex flex-row w-full items-center justify-between">
              <Link href="/">
                <>
                  <Image
                    src={NavLogo}
                    width="60"
                    height="60"
                    alt="/"
                    className=""
                  />
                </>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
                <AiOutlineClose className="text-black" />
              </div>
            </div>
            <div className="border-b border-gray-300 my-2"></div>
          </div>
          <div className="py-2 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  About us
                </li>
              </Link>
              <Link href="/#product">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Product
                </li>
              </Link>
              <Link href="/#menu">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Menu
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Contact Us
                </li>
              </Link>
              <Link href="/#blog">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Blog
                </li>
              </Link>
              

              <Link href="/#login">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Log in
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

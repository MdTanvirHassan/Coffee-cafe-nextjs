import React from "react";
import Image from "next/image";
import img from "../public/assets/hero.png";
import bg from "../public/assets/group.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section id="home" className="container relative lg:max-w-[1452px] lg:max-h-[578px] m-auto">
        <div className=" mx-auto   py-28 items-center">
          <div className="grid md:grid-cols-3 bg-white gap-0 md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-full h-full">
            <div className="col-span-1 bg-white lg:max-w-[508] h-full z-10 m-auto">
              <div className="absolute left-0">
                <Link href='/'><Image
                  src={bg}
                  alt=""
                  width={145}
                  height={141}
                  className="object-cover object-center "
                />
                </Link>
              </div>
              <div className="relative p-10 md:p-0 lg:w-[384px] lg:h-[308px] m-auto md:left-[12px] md:top-[172px]">
                <h1 className=" sm:text-4xl lg:w-[384px] lg:h-[120px] text-[90px] leading-[75px] font-normal font-[Raleway]  text-gray-900">
                  Freshly Brewed
                  <br className="hidden lg:inline-block" />
                  Coffee
                </h1>
                <p className="mb-4 lg:max-w-[369px] lg:h-[75px] font-[Raleway] font-normal leading-5 text-base tracking-widest">
                  Everyday in Arabika is like the colourful seasons of
                  Bangladesh. Arabika welcomes all its customers to come and
                  create special memories.
                </p>

                <button className="inline-flex text-white bg-[#A35715] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Order Now
                </button>
              </div>
            </div>
            <div className="col-span-2 w-full lg:max-w-[932px] lg:max-h-[568px]">
              <Image
                className="object-cover object-center w-full h-full"
                alt="hero"
                src={img}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

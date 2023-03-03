import React from "react";
import Image from "next/image";
import frame from "../public/assets/frame.png";

const Unique = () => {
  return (
    <>
      <div className="container py-24 m-auto lg:max-w-[1139px] lg:max-h-[669px]">
        <h2 className="text-white text-center mb-8">
          Providing Unique Coffee Experiences
        </h2>
        <div className="py-5 grid md:grid-cols-3 gap-2 ">
          <div className="grid grid-rows-3 gap-14 lg:max-w-[217px] lg:max-h-[536px] m-auto text-start lg:text-end text-white">
            <div className="">
              <h3 className="py-2">Coffee Shop</h3>
              <p>
                Our cofffe are carefully select for qualities, flavor and social
                impact.
              </p>
            </div>
            <div className="">
              <h3 className="py-2">Coffee Machine</h3>
              <p>
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </p>
            </div>
            <div className="">
              <h3 className="py-2">High Quality</h3>
              <p>
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </p>
            </div>
          </div>
          <div className="max-w-[528px] max-h-[546px] m-auto ">
            <Image src={frame} className="" alt=".." />
          </div>
          <div className="grid grid-rows-3 gap-14 lg:max-w-[217px] lg:max-h-[536px] m-auto text-start text-white">
            <div className="">
              <h3 className="py-2">The Perfect Cup</h3>
              <p>
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </p>
            </div>
            <div className="">
              <h3 className="py-2">Barista Coffee</h3>
              <p>
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </p>
            </div>
            <div className="">
              <h3 className="py-2">Supreme Beans</h3>
              <p>
                Our Coffees are carefully selected for quality, flavor and
                social impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unique;

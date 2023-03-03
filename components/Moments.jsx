import React from "react";
import Image from "next/image";

import img from "../public/assets/m1.png";
import img2 from "../public/assets/m2.png";
import img3 from "../public/assets/m3.png";
import img4 from "../public/assets/m4.png";
import img5 from "../public/assets/m5.png";
import img6 from "../public/assets/m6.png";
import img7 from "../public/assets/m7.png";
import img8 from "../public/assets/m8.png";


const Moments = () => {
  return (
    <>
      <div className=" my-96 m-auto lg:max-w-[1320px] lg:max-h-[1173px] h-full text-white">
        <h2 className="text-center pt-24 mb-10">Coffee Moments</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Image
            src={img}
            alt=".."
            className="object-cover object-center w-[424px] h-[334px] "
          />
          <Image
            src={img2}
            alt=".."
            className="object-cover object-center w-[424px] h-[334px] "
          />
          <Image
            src={img3}
            alt=".."
            className="object-cover object-center w-[424px] h-[334px] "
          />
        </div>
        <div className="grid md:grid-cols-3 gap-4 py-5">
            <div className="md:col-span-2">
            <Image
            src={img4}
            alt=".."
            className=" object-cover object-center w-[872px] h-[334px] "
          />
            </div>
          
          <Image
            src={img5}
            alt=".."
            className="object-cover object-center w-[424px] h-[334px] "
          />
          
        </div>
        <div className="grid md:grid-cols-3 gap-0">
          <Image
            src={img6}
            alt=".."
            className="object-cover object-center w-[424px] h-[334px] "
          />
          <Image
            src={img7}
            alt=".."
            className="object-cover object-center w-[424px] h-[334px] "
          />
          <Image
            src={img8}
            alt=".."
            className="object-cover object-center w-[424px] h-[334px] "
          />
        </div>
      </div>
    </>
  );
};

export default Moments;

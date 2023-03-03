import React from "react";
import Image from "next/image";
import img from "../public/assets/fit.png";
import offer from "../public/assets/offer.png";
import time from "../public/assets/time.png";

const Hero2 = () => {
  return (
    <div>
      <section className="relative lg:max-w-[1440px] lg:max-h-[619px] m-auto h-full  py-96 md:py-64 ">
        <div className=" mx-auto  px-5 pt-96 items-center">
          <div className="grid lg:grid-cols-3 gap-0 md:items-start md:text-left mb-16 md:mb-0 ">
            <div className="col-span-1  lg:max-w-[484px] max-h-[618px] z-10 m-auto">
              <Image
                src={img}
                alt=".."
                className="object-cover object-center w-full h-full "
              />
            </div>
            <div className="lg:col-span-2  lg:max-w-[932px] lg:max-h-[568px] text-white">
             
                <div className="lg:max-w-[825px] lg:max-h-[211px] p-4">
                  <h2 className="py-4">Coffee Fit for Everyone</h2>
                  <p>
                    Our journey was inspired from the growing coffee culture in
                    Dhaka. We support the growth of coffee culture partnering
                    with other cafés and provide opportunities for working
                    students to gather valuable work experience. Our vision is
                    to make our customers experience our quality brew and create
                    special memories. We value our customers and want to make
                    sure that when you enter our cafés you become part of
                    Arabika.
                  </p>
                </div>
                <div className="grid lg:grid-cols-2  bottom-0 ">
                  <div className="bg-[#0E0E0E] lg:max-w-[448px] lg:max-h-[362px] p-12">
                    <Image
                      src={time}
                      alt=".."
                      className="object-cover object-center  lg:max-w-[314px] lg:max-h-[290px] "
                    />
                  </div>
                  <div className="bg-white lg:max-w-[508px] lg:max-h-[362px] p-8">
                    <Image
                      src={offer}
                      alt=".."
                      className="object-cover object-center lg:max-w-[386px] lg:max-h-[259px] p-4"
                    />
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero2;

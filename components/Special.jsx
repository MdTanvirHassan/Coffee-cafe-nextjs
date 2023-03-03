import React from "react";
import Image from "next/image";
import cup from "../public/assets/cup1.png";
import cup2 from "../public/assets/cup2.png";
import cup3 from "../public/assets/cup3.png";

const Special = () => {
  return (
    <div className="container py-24 m-auto lg:max-w-[1320px] lg:max-h-[829px] text-white">
      <h2 className="mb-10">We Are Open to Create Special Memories</h2>
      <div className="grid md:grid-cols-3 gap-4 m-auto">
        <div className="grid grid-rows-3 gap-0">
          <div className="row-span-1">
            <p className="lg:max-w-[424px] lg:h-[194px]">
              The morning is like a quiet winter day,ideal for alone time and
              for reading books. The noon is like Autumn, full of colours and
              banters. The evening is like a summer night bustling with people
              and ideal for hangouts. Arabika welcomes all its customers to come
              and create special memories.
            </p>
          </div>
          <div className="row-span-2 max-w-[424px] h-[487px]">
            <Image src={cup} alt=".." className="w-full" />
          </div>
        </div>

        <div className="grid grid-rows-3 gap-0">
          <div className="row-span-2 max-w-[536px] h-[522px]">
            <Image src={cup2} alt=".." className="w-full h-full" />
          </div>
          <div className="row-span-1">
            <p className="lg:max-w-[530px] lg:h-[159px]">
              Every cup is brewed with freshly roasted single origin beans. 100%
              premium Arabica blend is used to ensure the exquisite taste of
              coffee. These beans are ground and then the shots are timed to
              perfection; ready to serve fresh and hot. The house blend is well
              balanced for both strong and mild coffee drinks.
            </p>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-0 my-auto">
          <div className="row-span-2 max-w-[312px] h-[281px]">
            <Image src={cup3} alt=".." className="w-full h-full" />
          </div>
          <div className="row-span-1">
            <p className="lg:max-w-[283px] lg:h-[54px]">
              Ready Every morning. The experience creates memories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;

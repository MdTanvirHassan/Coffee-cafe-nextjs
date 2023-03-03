import React from "react";
import Card from "./Card";
// import Image from "next/image";
import card1 from "../public/assets/card1.png";
import card2 from "../public/assets/card2.png";
import card3 from "../public/assets/card3.png";
import card4 from "../public/assets/card4.png";

const Discover = () => {
  return (
    <div className=" relative h-full my-96 md:my-24 m-auto lg:max-w-[1320px] lg:max-h-[639px] text-white ">
      <h2 className="text-center pt-32 mb-8">
        To Discover More Look into Our Coffee Menu
      </h2>
      <div className="justify-center text-center">
        <button className="px-2.5 py-1 border border-white rounded-md hover:bg-white hover:text-black">
          See All
        </button>
      </div>

      <div className="card py-10 max-w-[1320px] max-h-[446px] grid md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        <Card img={card1} title={"Americano"} price={150.0} />
        <Card img={card2} title={"Babyccino"} price={100.0} />
        <Card img={card3} title={"Cost Rica"} price={1250.0} />
        <Card img={card4} title={"Ethophian"} price={320.0} />
      </div>
    </div>
  );
};

export default Discover;

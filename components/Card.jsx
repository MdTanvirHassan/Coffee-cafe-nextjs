import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const Card = ({ img, title, price }) => {
  return (
    <div className="">
      <div className="m-auto w-[312px] h-[446px] bg-[#0E0E0E] text-center justify-center items-center  py-12 rounded-md">
        <div className="text-center justify-center items-center m-auto px-24 pb-5">
        <Image src={img} alt=".." className="w-[130px] h-[149px] text-center" />
        </div>
        <div className="w-[154px] h-[184px] m-auto text-center space-y-4">
        <h3 className="text-white">{title}</h3>
        <p className="text-[#A35715]">{price}৳</p>
        <div className="text-[#A35715] flex space-x-1 justify-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <button className='px-2.5 py-1 border border-white rounded-md hover:bg-white hover:text-black'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

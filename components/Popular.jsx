import React from 'react'
import Product from './product'
import Product1 from "../public/assets/p1.png";
import Product2 from "../public/assets/p2.png";
import Product3 from "../public/assets/p3.png";


const Popular = () => {
  return (
    <>
    <div className='container relative mt-24 m-auto lg:max-w-[1320px] lg:max-h-[573px] text-white'>
        
        <div className="justify-evenly pt-24 mb-8">
        <h2 className=" inline-block md:mr-[851px]">
            Our Popular Products
        </h2>
        <button className="px-2.5 py-1 border border-white rounded-md hover:bg-white hover:text-black">
          See All
        </button>
      </div>

        <div className="Product py-10 max-w-[1320px] max-h-[446px] grid md:grid-cols-3 lg:grid-cols-3 gap-8 ">
          <Product img={Product1} title={'Italina Coffee Beans'} price={1085.00}/>
          <Product img={Product2} title={'Brazilian Coffee Beans'} price={1550.00}/>
          <Product img={Product3} title={'American Coffee Beans'} price={1085.00}/>
         
          
        </div>
    </div>
    </>
  )
}

export default Popular
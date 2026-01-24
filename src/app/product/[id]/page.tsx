import { singleProduct } from "@/app/data";
import Image from "next/image";
import React from "react";
import Price from "../../../../components/Price";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-gray-900 md:flex-row md:gap-8 md:items-center">
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            fill
          />
        </div>
      )}


      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center">
        <h1 className="text-2xl md:text-3xl font-bold mt-4 uppercase">{singleProduct.title}</h1>
        <p className="text-2xs md:text-lg">{singleProduct.desc}</p>
        <Price 
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;

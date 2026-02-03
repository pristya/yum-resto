import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row text-amber-600">
      
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 pt-10 flex flex-col justify-center overflow-y-auto lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4 border-b border-amber-100 pb-2 gap-4">
          <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-md">
            <Image src="/menu/main course/ikan bakar.jpg" alt="Ikan Bakar" fill className="object-cover"/>
          </div>
          <div className="flex flex-col flex-1 px-4">
            <h1 className="uppercase text-lg leading-tight font-bold">Ikan Bakar</h1>
            <span className="text-sm text-gray-500">Nasi Putih</span>
          </div>
          <h2 className="font-bold whitespace-nowrap">Rp 30.000</h2>
          <span className="cursor-pointer ml-4 font-bold text-red-500 hover:scale-110 transition-transform">✕</span>
        </div>

        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4 border-b border-amber-100 pb-2 gap-4">
          <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-md">
            <Image src="/menu/main course/ayam bakar.jpg" alt="Ayam Bakar" fill className="object-cover"/>
          </div>
          <div className="flex flex-col flex-1 px-4">
            <h1 className="uppercase text-lg leading-tight font-bold">Ayam Bakar</h1>
            <span className="text-sm text-gray-500">Nasi Putih</span>
          </div>
          <h2 className="font-bold whitespace-nowrap">Rp 30.000</h2>
          <span className="cursor-pointer ml-4 font-bold text-red-500 hover:scale-110 transition-transform">✕</span>
        </div>

        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4 border-b border-amber-100 pb-2 gap-4">
          <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-md">
            <Image src="/menu/main course/steak.jpg" alt="Steak" fill className="object-cover"/>
          </div>
          <div className="flex flex-col flex-1 px-4">
            <h1 className="uppercase text-lg leading-tight font-bold">Steak Wagyu</h1>
            <span className="text-sm text-gray-500">Nasi Putih</span>
          </div>
          <h2 className="font-bold">Rp 30.000</h2>
          <span className="cursor-pointer ml-4 font-bold text-red-500 hover:scale-110 transition-transform">✕</span>
        </div>
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-100 flex flex-col font-bold gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-10 xl:px-20 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>Rp 90.000</span>
        </div>
        <div className="flex justify-between">
          <span>Biaya Layanan</span>
          <span>Rp 3.000</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Diskon</span>
          <span>- Rp 5.000</span>
        </div>
        <hr className="my-2 border-amber-200" />
        <div className="flex justify-between text-xl uppercase">
          <span>Total</span>
          <span>Rp 88.000</span>
        </div>
        <button className="bg-amber-500 text-white p-4 rounded-md w-full hover:bg-amber-600 transition-all self-end shadow-lg">
          CHECKOUT NOW
        </button>
      </div>
    </div>
  );
};

export default CartPage;
import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] grid grid-cols-2 text-amber-500">
      
      {/* Grid */}
      <div className="h-1/2 p-4 flex flex-col gap-4 overflow-y-auto">
        {/* Single Item */}
        <div className="flex items-center justify-between gap-4">
          <Image src={"/menu/main course/ikan bakar.jpg"} alt="" width={100} height={100}/>
          <div className="uppercase flex text-xl font-bold w-20 h-20 shrink-0">
            <h1>Ikan Bakar</h1>
            <span>Nasi Putih</span>
          </div>
          <h2 className="font-bold">Rp. 30000</h2>
          <span className="cursor-pointer">X</span>
        </div>

        {/* Single Item */}
        <div className="flex items-center justify-between mb-4 ">
          <Image src={"/menu/main course/ayam bakar.jpg"} alt="" width={100} height={100}/>
          <div className="uppercase text-xl font-bold">
            <h1>Ikan Bakar</h1>
            <span>Nasi Putih</span>
          </div>
          <h2 className="font-bold">Rp. 30000</h2>
          <span className="cursor-pointer">X</span>
        </div>

        {/* Single Item */}
        <div className="flex items-center justify-between mb-4 ">
          <Image src={"/menu/main course/steak.jpg"} alt="" width={100} height={100}/>
          <div className="uppercase text-xl font-bold">
            <h1>Ikan Bakar</h1>
            <span>Nasi Putih</span>
          </div>
          <h2 className="font-bold">Rp. 30000</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>

      {/* Payment Container */}
      <div className="h-1/2 p-4 bg-fuchsia-100">
        <div className="">
          <div className="">Subtotal (3 items)</div>
          <div className="">Rp. 10000 </div>
        </div>
        <hr className=""/>
        <button className="bg-amber-500 text-white p-2 rounded-md w-1/2">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPage;

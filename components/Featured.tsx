"use client";
import featuredProducts from "@/app/data";
import Image from "next/image";
import React, { useState } from "react";

const Featured = () => {

    const favProducts = [1, 3, 5, 6, 8, 16];
    const displayProducts = featuredProducts.filter((item) => (
        favProducts.includes(item.id)
    ));

  return (
    <div className="container mx-auto my-14 px-6">
      <div className="text-3xl font-bold mb-8 text-gray-950 uppercase tracking-widest border-l-5 border-amber-400 pl-4">
        Menu Favorite
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {displayProducts.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative w-full h-64 md:h-72 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl">
              <Image
                src={item.img}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay price while hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <span className="text-gray-900 font-bold text-sm">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            </div>

            {/* Desciption */}
            <div className="mt-4 flex flex-col gap-1">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-500 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

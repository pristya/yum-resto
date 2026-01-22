"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { title } from "process";

const data = [
  {
    id: 1,
    img: "/img/bg.jpg",
  },
  {
    id: 2,
    img: "/img/bg1.jpg",
  },
  {
    id: 3,
    img: "/img/bg2.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlie] = useState(0);

  // Sliding Effect for bcakground
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlie((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative px-10 md:px-20 flex items-center justify-end w-full min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url('${data[currentSlide].img}')` }}
    >
      <div className="absolute inset-0 md:bg-linear-to-l bg-black/40 md:from-black/30 md:to-transparent"></div>

      <div className="relative z-10 max-w-2xl text-right flex flex-col items-end text-shadow-sm text-shadow-black bottom-8">
        <h1 className="text-5xl md:text-7xl loading-[1.1] text-white tracking-tight font-black">
          Rasakan <br /> <span className="text-amber-400">Kelezatan </span>
          Sejati
        </h1>

        <div className="w-24 h-1 bg-amber-400 mt-6"></div>

        <p className="text-lg md:text-2xl text-gray-200 font-medium max-w-lg leading-relaxed mb-8">
          Dibuat dengan bahan premium untuk setiap gigitannya.
        </p>

        <div className="flex gap-4">
          <Link
            href={"/menu"}
            className="bg-amber-400 hover:bg-gray-900 text-white font-bold py-4 px-10 rounded-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-400/20 text-shadow-xs text-shadow-gray-900"
          >
            Pesan Sekarang
          </Link>
        </div>

        {/* Slide Indicators */}
        <div>
          {data.map((_, index) => (
            <div
              key={index}
              className=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

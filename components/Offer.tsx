import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="bg-gray-950 h-auto md:h-screen flex flex-col md:flex-row items-center overflow-hidden">
      {/* Container */}
      <div className="flex flex-1 flex-col justify-center items-center text-center gap-5 p-10 md:p-20">
        <h1 className="text-amber-400 text-5xl font-extrabold md:text-6xl leading-tight">
          Limited Time Offer!
        </h1>
        <h1 className="text-white text-4xl md:text-5xl leading-tight">
          Rasakan Kelezatan <br />
          <span className="text-amber-400 font-bold"> Mahakarya Kuliner</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-lg">
          Manjakan lidah Anda dengan perpaduan bumbu autentik dan bahan-bahan
          segar pilihan dari koki terbaik kami. Khusus minggu ini, nikmati
          potongan eksklusif untuk menu spesial.
        </p>

        {/* Countdown UI */}
        <div className="flex gap-4 text-white">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-amber-400">03</span>
            <span className="text-xs uppercase">Hari</span>
          </div>
          <span className="text-3xl">:</span>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-amber-400">12</span>
            <span className="text-xs uppercase">jam</span>
          </div>
          <span className="text-3xl">:</span>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-amber-400">40</span>
            <span className="text-xs uppercase">Menit</span>
          </div>
        </div>

        <button className="bg-amber-400 hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-sm transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-400/20 text-shadow-xs text-shadow-gray-900">
          Pesan Sekarang
        </button>
      </div>

      {/* Image Container */}
      <div className="flex-1 w-full h-100 md:h-full relative">
        <Image
          src={"/img/bg3.jpg"}
          alt=""
          fill
          className="object-cover md:object-center"
        />

        {/* Overlay Gradation */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent md:bg-none"></div>
      </div>
    </div>
  );
};

export default Offer;

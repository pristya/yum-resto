import React from "react";

const Notification = () => {
  return (
    <div className="flex h-12 font-medium bg-gray-950 text-amber-300 text-shadow-xs text-shadow-amber-600 px-4 items-center justify-center text-center text-sm md:text-base cursor-pointer">
      <span className="text-red-600 px-1 [text-shadow:1px_0px_0px_#000,1px_1px_0px_#000]">Diskon Kilat!</span> Potongan hingga 50% untuk semua menu hari ini
      saja.
    </div>
  );
};

export default Notification;

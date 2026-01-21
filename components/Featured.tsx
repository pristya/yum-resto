import React, { useState } from "react";

const Featured = () => {

  const product = [
    {
        id: 1,
        img: "/",
        name: " ",
        desc: " ",
        qty: 0,
        price: 25000
    },
  ]

  return (
    <div className="container mx-auto my-14 p-6 m-10">
      <div className="text-3xl font-medium mb-6">Menu</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {product.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={product.img}
              alt=""
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

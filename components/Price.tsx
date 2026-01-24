"use client";
import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [qty, setQty] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      qty * (options ? price + options[selected].additionalPrice : price),
    );
  }, [qty, selected, options, price ]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2 gap-4 text-2xl font-bold">Rp. {total}</h2>

      {/* Option Container */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w[6rem] p-2 ring-1 ring-amber-500 rounded-md"
            style={{
              background:
                selected === index ? "var(--color-amber-500)" : "white",
              color: selected === index ? "white" : "orange",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* Quantity */}
      <div className="flex justify-between items-center mr-15 md:mr-5">
        <div className="flex justify-between w-full p-3 ring-1 font-bold ring-amber-500 rounded-l-2xl">
          <span>qty</span>
          <div className="flex gap-2 items-center">
            <button onClick={() => setQty((prev) => (prev > 1 ? prev - 1 : 1))} className="bg-gray-900 text-white px-2 rounded-full">
              {"<"}
            </button>
            <button className="text-2xs">{qty}</button>
            <button onClick={() => setQty((prev) => (prev < 9 ? prev + 1 : 9))} className="bg-gray-900 text-white px-2 rounded-full">
              {">"}
            </button>
          </div>
        </div>

        {/* Cart */}
        <button className="bg-amber-500 w-56 text-white p-3 ring-1 ring-amber-500 rounded-r-2xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;

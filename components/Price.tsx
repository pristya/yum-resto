import React from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  return (
    <div>
      <h2>Rp {price}</h2>
      
      {/* Option Container */}
      <div className="">
        {options?.map(option => (
            <button key={option.title}>{option.title}</button>
        ))}
      </div>

      {/* Quantity */}
      <div>
        <div>
            <span>qty</span>
            <div>
                <button>{'<'}</button>
                <button>1</button>
                <button>{'>'}</button>
            </div>
        </div>

        {/* Cart */}
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Price;

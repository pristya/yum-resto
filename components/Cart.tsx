"use client"
import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <Link href={"/cart"} className="flex items-center gap-4">
      <div className="flex">
        🛒Cart | 2
      </div>
    </Link>
  );
};

export default Cart;

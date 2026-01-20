"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/home",
  },
  {
    id: 2,
    title: "Menu",
    url: "/menu",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // SEMENTARA
  const user = false;
  return (
    <div>
      <div className="cursor-pointer z-50 relative w-6 h-6">
        {/* Tombol Icon */}
        <Image
          src={open ? "/logo/close.png" : "/logo/hb-menu.png"}
          alt=""
          fill
          className="object-contain"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Mobile Content */}
      {open && (
        <div className="bg-amber-950 mt-10 text-white absolute left-0 top-16 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-8 text-3xl z-50 ">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => setOpen(false)}
              className="hover:text-amber-500 border-b-2 transition-colors tracking-widest"
            >
              {link.title}
            </Link>
          ))}
          {!user ? (
            <Link href={"/login"} className="hover:text-amber-500 underline">
              {" "}
              Login
            </Link>
          ) : (
            <Link href={"/orders"} className="hover:text-amber-500 underline">
              {" "}
              Orders{" "}
            </Link>
          )}
          <Link href={"/cart"} className="hover:text-amber-500 underline">
            <Cart />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;

import { link } from "fs";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Cart from "./Cart";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Menu",
    url: "/menu",
  },
  {
    id: 3,
    title: "Orders",
    url: "/orders",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const user = false;

  return (
    <nav className="flex items-center justify-between p-2 bg-amber-200 shadow-md">
      <div className="font-bold text-amber-950 font-serif text-3xl mx-5">
        yum|
        <span className="text-amber-50 [text-shadow:1px_0px_0px_#000,1px_1px_0px_#000]">
          resto
        </span>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-6 font-semibold font-sans text-lg mx-4">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="hover:text-amber-500 transition-all"
          >
            {link.title} |
          </Link>
        ))}
        {!user ? (
          <Link href={"/login"} className="hover:text-amber-500">
            {" "}
            Login |
          </Link>
        ) : (
          <Link href={"/orders"} className="hover:text-amber-500">
            {" "}
            Orders{" "}
          </Link>
        )}
        <div className="hover:text-amber-500">
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

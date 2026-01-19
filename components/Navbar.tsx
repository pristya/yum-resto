import { link } from "fs";
import Link from "next/link";
import React from "react";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/home"
    },
    {
        id: 1,
        title: "orders",
        url: "/orders"
    },
    {
        id: 1,
        title: "🛒",
        url: "/cart"
    },
    {
        id: 1,
        title: "Login",
        url: "/login"
    }
]

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link href={"/"}>
                {}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
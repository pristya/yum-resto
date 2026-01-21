import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="flex h-12 font-medium bg-gray-950 text-amber-300 text-shadow-xs text-shadow-amber-600 px-4 items-center justify-center text-center text-sm md:text-base cursor-pointer ">
            <Link href={"/"} className="px-1">yum | resto </Link>
            <p className="font-light"> ©All rights reserved. </p>
        </div>
    );
};

export default Footer;
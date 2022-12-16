import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";

import Logo from "../public/logo.svg";
import Flag from "../public/flag.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(null);
  const [currentPage, SetCurrentPage] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-10 container mx-auto p-2 flex flex-row items-center justify-between ">
      <div className="">
        <Logo />
      </div>
      <ul className="hidden md:flex flex-row gap-10 items-center text-white text-sm">
        <li className={currentPage == "Home" ? "font-bold" : ""}>
          <Link href="/" onClick={() => SetCurrentPage("Home")}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#">Publicaties</Link>
        </li>
        <li>
          <Link href="gallery">{"Foto's"}</Link>
        </li>
        <li>
          <Link href="#">{"Video's"}</Link>
        </li>
        <li>
          <Link href="about">Over Mij</Link>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
        <li>
          <Link href="#">
            <Image
              src={Flag}
              alt="flag"
              width={25}
              height={25}
              className=" mt-2"
            />
          </Link>
        </li>
      </ul>
      <div className="block md:hidden text-white" onClick={toggleMenu}>
        <Bars3Icon className="h-10 w-10 text-white" />
      </div>
    </div>
  );
}

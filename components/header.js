import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

import { parseCookies, setCookie, destroyCookie } from "nookies";

import { Bars3Icon } from "@heroicons/react/24/solid";

import Logo from "../public/logo.svg";
import FlagNL from "../public/flag.png";
import FlagEN from "../public/flag-united-kingdom.png";

export default function Header() {
  /*
  useEffect(() => {
    const cookies = parseCookies();
  }, []);

*/
  const [menuOpen, setMenuOpen] = useState(null);
  const [currentPage, SetCurrentPage] = useState(null);
  const [language, SetLanguage] = useState(/*cookies.language || */ "nl");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLanguageChange = () => {
    if (language === "nl") {
      console.log("language is en");
      SetLanguage("en");
      setCookie(null, "language", "en", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } else {
      console.log("language is nl");
      SetLanguage("nl");
      setCookie(null, "language", "en", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    }
  };

  return (
    <div className="relative z-10 container mx-auto p-2 flex flex-row items-center justify-between ">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="hidden md:flex flex-row gap-10 items-center text-white text-sm">
        <li>
          <Link href="/">{language === "nl" ? <a>Home</a> : <a>Home</a>}</Link>
        </li>
        <li>
          <Link href="/publications">
            {language === "nl" ? <a>Publicaties</a> : <a>Publications</a>}
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            {language === "nl" ? <a>{"Foto's"}</a> : <a>Pictures</a>}
          </Link>
        </li>
        <li>
          <Link href="#">
            {language === "nl" ? <a>{"Video's"}</a> : <a>Videos</a>}
          </Link>
        </li>
        <li>
          <Link href="/about">
            {language === "nl" ? <a>Over mij</a> : <a>About</a>}
          </Link>
        </li>
        <li>
          <Link href="/contact" className="Hover:text-red">
            Contact
          </Link>
        </li>
        <li>
          {language == "nl" ? (
            <button onClick={() => handleLanguageChange()}>
              <Image
                src={FlagNL}
                alt="flag"
                width={25}
                height={25}
                className=" mt-2"
              />
            </button>
          ) : (
            <button onClick={() => handleLanguageChange()}>
              <Image
                src={FlagEN}
                alt="flag"
                width={25}
                height={25}
                className=" mt-2"
              />
            </button>
          )}
        </li>
      </ul>
      <div className="block md:hidden text-white" onClick={toggleMenu}>
        <Bars3Icon className="h-10 w-10 text-white" />
      </div>
    </div>
  );
}

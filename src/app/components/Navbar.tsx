"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./Navlink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";


export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const t = useTranslations('NavBar');
  
  
  const navLinks = [
    {
      title: t("about"),
      path: "/#about",
    },
    {
      title: t("technologies"),
      path: "/#technologies",
    },
    {
      title: t("projects"),
      path: "/#projects",
    },
    {
      title: t("contact"),
      path: "/#contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-80">
      <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-5 backdrop-blur-md">
        <Link href={"/#home"} className="text-2xl lg:text-3xl text-white font-semibold">
          GabLunaDev
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex items-center space-x-8">
            {navLinks.map((links, index) => (
              <li key={index}>
                <NavLink href={links.path} title={links.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};


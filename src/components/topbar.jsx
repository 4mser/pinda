"use client";
import Image from "next/image";
import React, { useState } from "react";
import HappyHour from "./happy-hour";
import LeftMenu from "./left-menu";
import Link from "next/link";

const Topbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [openHappy, setOpenHappy] = useState(false);
  const handleHappy = () => {
    setOpenHappy(!openHappy);
  };

  return (
    <section className="w-full">

      <div className="z-50  fixed w-full top-12 left-0 bg-white md:bg-white/0  md:bg-gradient-to-b from-transparent to-transparent flex justify-between px-4 py-2 md:px-10 md:gap-10 md:justify-start items-center border-b border-black/10 md:border-none md:py-10">
        <button onClick={handleMenu} className="group relative md:rounded-full md:bg-pindablack md:p-2 ">
          <div className="hidden md:block absolute w-0 h-0 group-hover:w-10 transition-all ease-in-out duration-300 group-hover:h-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-animate-color rounded-full" />
          <Image
            src={"/icons/menudoble.svg"}
            width={23}
            height={20}
            className="md:invert"
          />
        </button>
        <Link href={"/"} className="absolute md:relative left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0">
          <Image
            src={"/svg/pinda_logo.svg"}
            width={80}
            height={20}
            className="md:w-32"
          />
        </Link>
        <div className="flex flex-row gap-5 md:absolute right-10">
          <button>
            <Image src={"/svg/bag.svg"} width={30} height={30} className="md:w-12" />
          </button>
          <button onClick={handleHappy}>
            <Image src={"/svg/colibri_chico.svg"} width={25} height={25} className="md:w-9" />
          </button>
        </div>
      </div>

      <LeftMenu openMenu={openMenu} handleMenu={handleMenu} />

      <HappyHour openHappy={openHappy} handleHappy={handleHappy} />
    </section>
  );
};

export default Topbar;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./logo";
import HappyHour from "./happy-hour";
import LeftMenu from "./left-menu";

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

      <div className="z-50 w-full top-0 left-0 bg-white flex justify-between px-4 py-2 items-center border-b border-black/10">
        <button onClick={handleMenu}>
          <Image
            src={"/icons/menu3.svg"}
            width={28}
            height={20}
            className=""
          />
        </button>
        <Logo />
        <button onClick={handleHappy}>
          <Image src={"/svg/colibri_chico.svg"} width={23} height={23} className="" />
        </button>
      </div>

      <LeftMenu openMenu={openMenu} handleMenu={handleMenu} />

      <HappyHour openHappy={openHappy} handleHappy={handleHappy} />
    </section>
  );
};

export default Topbar;

"use client";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();
  return (
    <Link href={"/"}>
      <Image
        src={"/images/pinda-logo.png"}
        width={90}
        height={20}
        className={` ${
          pathname === "/tragos"
            ? "-hue-rotate-[170deg] saturate-150 brightness-150"
            : ""
        } ${
          pathname === "/carta"
            ? "hue-rotate-[63deg] brightness-[2] saturate-[3]"
            : ""
        }`}
      />
    </Link>
  );
};

export default Logo;

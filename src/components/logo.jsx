"use client";
import Link from "next/link";
import Image from "next/image";


const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/svg/pinda_logo.svg"}
        width={80}
        height={20}
      />
    </Link>
  );
};

export default Logo;

import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div className="text-white fixed left-0 top-0 h-full w-auto max-w-20 flex flex-col">
      <Image
        className="aspect-square cursor-pointer mx-auto"
        width={50}
        height={50}
        src="/assets/nav-logo-dark.png"
        alt="Picture of the author"
        loading="eager"
        fetchPriority="high"
        style={{ objectFit: "cover" }}
      />
      <div className="relative flex justify-between flex-row gap-10 -rotate-90 left-1/2 -translate-x-1/2 m-auto">
        <p>Contact</p>
        <p>About</p>
        <p>Experience</p>
        <p className="">Projects</p>
      </div>
    </div>
  );
};

export default Nav;

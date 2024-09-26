import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="z-0">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen fixed"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] fixed"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw] fixed"
          fill="blue"
        />
      </div>
    </div>
  );
};

export default Hero;

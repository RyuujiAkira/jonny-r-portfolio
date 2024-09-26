"use client"; // Mark this as a Client Component

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { heroGridItems1 } from "@/data";
import {
  SiAdobecreativecloud,
  SiGithub,
  SiGmail,
  SiGoogletagmanager,
  SiLinkedin,
} from "react-icons/si";
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FaHtml5, FaCss3 } from "react-icons/fa";

const Grid: React.FC = () => {
  return (
    <section
      id="about"
      className="h-fit flex justify-center align-middle flex-col gap-4 z-10"
    >
      <BentoGrid>
        {heroGridItems1.map(
          ({
            id,
            title,
            descriptionTop,
            descriptionBottom,
            className,
            img,
            imgClassName,
            imgStyle,
            titleClassName,
            pillTitle,
            pillClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              descriptionTop={descriptionTop}
              descriptionBottom={descriptionBottom}
              className={className}
              titleClassName={titleClassName}
              pillTitle={pillTitle}
              pillClassName={pillClassName}
              img={img}
              imgClassName={imgClassName}
              imgStyle={imgStyle}
            />
          ),
        )}
      </BentoGrid>

      <BentoGrid className="md:auto-rows-auto w-full">
        <BentoGridItem
          id={6}
          pillTitle="Contact"
          title="Reach Out!"
          titleClassName="justify-center text-center"
        >
          <div className="flex flex-row gap-10 justify-center pb-5 pt-3">
            <a
              href="https://www.linkedin.com/in/jrabaja/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="text-white text-4xl hover:scale-125 transition-all duration-300" />
            </a>
            <a
              href="https://github.com/RyuujiAkira"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="text-white text-4xl hover:scale-125 transition-all duration-300" />
            </a>
            <a href="mailto:jrabajac@gmail.com">
              <SiGmail className="text-white text-4xl hover:scale-125 transition-all duration-300" />
            </a>
          </div>
        </BentoGridItem>
        <BentoGridItem
          id={6}
          pillTitle="Tech"
          title="Skills"
          titleClassName="justify-center text-center"
        >
          <div className="flex flex-row gap-5 justify-center pb-5 pt-3">
            <RiNextjsFill className="text-white text-4xl" />
            <FaHtml5 className="text-white text-4xl" />
            <FaCss3 className="text-white text-4xl" />
            <RiJavascriptFill className="text-white text-4xl" />
            <RiTailwindCssFill className="text-white text-4xl" />
            <SiAdobecreativecloud className="text-white text-4xl" />
            <SiGoogletagmanager className="text-white text-4xl" />
          </div>
        </BentoGridItem>
        <BentoGridItem
          id={6}
          pillTitle="Music"
          title="Recently Played"
          titleClassName="justify-center text-center"
        ></BentoGridItem>
      </BentoGrid>
    </section>
  );
};

export default Grid;

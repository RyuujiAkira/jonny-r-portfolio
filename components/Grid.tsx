import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { heroGridItems1 } from "@/data";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const Grid = () => {
  return (
    <section
      id="about"
      className="h-fit flex justify-center align-middle flex-col gap-4"
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
            <SiLinkedin className="text-white text-4xl hover:scale-125 transition-all duration-300" />
            <SiGithub className="text-white text-4xl hover:scale-125 transition-all duration-300" />
            <SiGmail className="text-white text-4xl hover:scale-125 transition-all duration-300" />
          </div>
        </BentoGridItem>
        <BentoGridItem
          id={6}
          pillTitle="Music"
          title="Recently Played"
          titleClassName="justify-center text-center"
        ></BentoGridItem>
        <BentoGridItem
          id={6}
          pillTitle="Tech"
          title="Skills"
          titleClassName="justify-center text-center"
        >
          <div className="flex flex-row gap-10 justify-center pb-5 pt-3">
            <RiNextjsFill className="text-white text-4xl" />
          </div>
        </BentoGridItem>
      </BentoGrid>
    </section>
  );
};

export default Grid;

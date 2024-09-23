import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { heroGridItems1, heroGridItems2 } from "@/data";

const Grid = () => {
  return (
    <section
      id="about"
      className="h-fit flex justify-center align-middle flex-col gap-4 md:h-screen"
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
          <div className="text-white">test</div>
        </BentoGridItem>
        <BentoGridItem
          id={6}
          pillTitle="Music"
          title="Recently Played"
          titleClassName="justify-center text-center"
        >
          <div className="text-white">test</div>
        </BentoGridItem>
        <BentoGridItem
          id={6}
          pillTitle="Gaming"
          title="Achievements"
          titleClassName="justify-center text-center"
        >
          <div className="text-white">test</div>
        </BentoGridItem>
      </BentoGrid>
    </section>
  );
};

export default Grid;

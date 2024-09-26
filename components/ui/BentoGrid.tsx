import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  titleClassName,
  descriptionTop,
  header,
  id,
  img,
  imgClassName,
  imgStyle,
  pillTitle,
  pillClassName,
  hoverLink,
  children,
}: {
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  descriptionTop?: string | React.ReactNode;
  header?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  imgStyle?: React.CSSProperties;
  pillTitle?: string;
  pillClassName?: string;
  hoverLink?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-5 dark:border-white/[0.2] border border-transparent flex flex-col space-y-4 border-red-500 cursor-pointer",
        id === 1
          ? "md:dark:bg-black-100 bg-none dark:border-none cursor-default h-screen md:h-auto "
          : "dark:bg-black-100 bg-white dark:border-white/[0.2] justify-between",
        className,
      )}
    >
      {pillTitle ? (
        <div
          className={cn(
            "absolute max-w-fit w-full h-5 px-5 py-1 bg-black-100 rounded-full -top-2 left-7 text-white text-center leading-[10px] z-10",
            pillClassName,
          )}
        >
          {pillTitle}
        </div>
      ) : null}
      {hoverLink ? (
        <div className="h-full w-full bg-stone-700 absolute top-0 left-0 rounded-3xl !mt-0 opacity-0 transition duration-200 pointer-events-none group-hover/bento:opacity-60"></div>
      ) : null}

      {header}
      <div
        className={cn(
          "group-hover/bento:-translate-y-2 transition duration-200 h-full flex flex-col !mt-0",
          id === 1 ? "justify-center" : "",
        )}
      >
        {img ? (
          <div
            className={cn(
              "w-full min-h-20 md:h-full relative",
              id === 1 ? "min-h-40" : "",
            )}
          >
            <Image
              className={cn(imgClassName)}
              src={img}
              alt="Jonny R Logo"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={imgStyle}
            />
          </div>
        ) : null}
        <div
          className={cn(
            "font-saria font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-xl",
            id === 1
              ? "md:dark:bg-black-100 bg-none dark:border-none cursor-default text-center mt-0"
              : "dark:border-white/[0.2]",
            titleClassName,
          )}
        >
          {id === 1 ? (
            <h2 className="text-2xl">
              Hey I&apos;m
              <span className="text-4xl text-[#CAD4F4] pl-2">Jonny!</span>{" "}
              <br />
              <span className="text-3xl">A Front-End Web Developer</span>
            </h2>
          ) : (
            title
          )}
        </div>
        {descriptionTop ? (
          <div className="font-saria font-normal text-neutral-600 text-base dark:text-neutral-300">
            {descriptionTop}
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
};

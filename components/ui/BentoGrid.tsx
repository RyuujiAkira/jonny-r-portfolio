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
  descriptionBottom,
  header,
  icon,
  id,
  img,
  imgClassName,
  pillTitle,
  pillClassName,
  children,
}: {
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  descriptionTop?: string | React.ReactNode;
  descriptionBottom?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img: string;
  imgClassName: string;
  pillTitle?: string;
  pillClassName?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4 border-red-500 cursor-pointer",
        id === 1
          ? "md:dark:bg-black-100 bg-none dark:border-none cursor-default justify-center"
          : "dark:bg-black-100 bg-white dark:border-white/[0.2]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute max-w-fit w-full h-5 px-5 py-1 bg-black-100 rounded-full -top-2 left-7 text-white text-center leading-[10px]",
          pillClassName,
        )}
      >
        {pillTitle}
      </div>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        {img ? (
          <Image
            className={cn("block", imgClassName)}
            src={img}
            width={210}
            height={100}
            alt=""
            style={{ objectFit: "contain" }}
          />
        ) : null}
        <div
          className={cn(
            "font-saria font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-xl",
            id === 1
              ? "md:dark:bg-black-100 bg-none dark:border-none cursor-default text-center mt-0"
              : "dark:bg-black-100 bg-white dark:border-white/[0.2]",
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
          <div className="font-saria font-normal text-neutral-600 text-xl dark:text-neutral-300">
            {descriptionTop}
          </div>
        ) : null}
        {descriptionBottom ? (
          <div className="font-saria font-normal text-neutral-600 text-xl dark:text-neutral-300">
            {descriptionBottom}
          </div>
        ) : null}
      </div>
      {children}
    </div>
  );
};

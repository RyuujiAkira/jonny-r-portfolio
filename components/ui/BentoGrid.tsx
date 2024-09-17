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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  descriptionTop?: string | React.ReactNode;
  descriptionBottom?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img: string
  imgClassName: string;
  pillTitle?: string;
  pillClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 border-red-500",
        className
      )}
    >
      <div className={cn("absolute w-20 h-5 bg-black rounded-full -top-3 left-7 text-white text-center",pillClassName)}>{pillTitle}</div>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <Image
          className={cn("", imgClassName)}
          src={img}
          fill={true}
          alt=""
          objectFit="contain"
        />
        <div className={cn("font-saria font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2",titleClassName)}>
          {title}
        </div>
        <div className="font-saria font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {descriptionTop}
        </div>
        <div className="font-saria font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {descriptionBottom}
        </div>
      </div>
    </div>
  );
};

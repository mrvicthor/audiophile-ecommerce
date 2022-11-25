import Link from "next/link";
import { ReactNode } from "react";

type TitleProps = {
  title: string;
  description: string;
  children: ReactNode;
  isNew: boolean;
};

const Title = ({ title, children, description, isNew }: TitleProps) => {
  const strArr = title.split(" ");

  // // const heading = strArr.slice(-1);
  // const [...rest, last] = strArr;
  console.log(strArr);
  return (
    <div className="h-[45.25rem] grid gap-8 md:h-[44.125rem] md:gap-[3.25rem] lg:h-[35rem] lg:grid-cols-2 lg:gap-[7.8125rem]">
      <div
        className={`h-[22rem] w-full rounded md:h-[22rem] overflow-hidden relative lg:h-full image_wrapper`}
      >
        {children}
      </div>
      <article className="flex flex-col gap-[1.5rem] items-center md:px-[3.635rem] lg:items-start lg:justify-center title_wrapper">
        {isNew && (
          <h2 className="text-[#d87d4a] font-normal leading-[1.2rem] text-[0.875rem] tracking-[0.625rem] text-center uppercase lg:text-left">
            New Product
          </h2>
        )}
        <p className="font-bold text-[1.75rem] leading-[2.39rem] tracking-[1px] article_title text-center border border-red-400 text-[#000000] uppercase  lg:text-left lg:text-[2.5rem]">
          {title}
        </p>
        <p className="font-medium text-[0.9375rem] leading-[1.5625rem] text-center text-[#000000] opacity-50 lg:text-left">
          {description}
        </p>
        <Link
          href="#"
          className="h-[48px] text-white bg-[#d87d4a] w-[160px]  uppercase hover:bg-[#fbaf85] py-3 text-center"
        >
          See Product
        </Link>
      </article>
    </div>
  );
};
export default Title;

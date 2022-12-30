import { Button } from "../index";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

type TitleProps = {
  title: string;
  description: string;
  children: ReactNode;
  isNew: boolean;
  slug: string;
  category: string;
};

const Title = ({
  title,
  children,
  description,
  isNew,
  slug,
  category,
}: TitleProps) => {
  const strArr = title.split(" ");
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="h-[45.25rem] grid gap-8 md:h-[44.125rem] md:gap-[3.25rem] lg:h-[35rem] lg:grid-cols-2 lg:gap-[7.8125rem]"
    >
      <div
        style={{
          transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={`h-[22rem] w-full rounded md:h-[22rem] overflow-hidden relative lg:h-full image_wrapper`}
      >
        {children}
      </div>
      <article
        style={{
          transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="flex flex-col gap-[1.5rem] items-center md:px-[3.635rem] lg:items-start lg:justify-center title_wrapper"
      >
        {isNew && (
          <h2 className="text-[#d87d4a] font-normal leading-[1.2rem] text-[0.875rem] tracking-[0.625rem] text-center uppercase lg:text-left">
            New Product
          </h2>
        )}
        <p
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="font-bold text-[1.75rem] leading-[2.39rem] tracking-[1px] article_title text-center text-[#000000] uppercase  lg:text-left lg:text-[2.5rem]"
        >
          {strArr.length > 3
            ? `${strArr[0]} ${strArr[1]} ${strArr[2]}`
            : `${strArr[0]}`}{" "}
          <span className="block">{strArr.slice(-1)}</span>
        </p>
        <p
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="font-medium text-[0.9375rem] leading-[1.5625rem] text-center text-[#000000] opacity-50 lg:text-left"
        >
          {description}
        </p>
        <Button
          title="see product"
          style="h-[48px] text-white bg-[#d87d4a] w-[160px]  uppercase hover:bg-[#fbaf85] py-3 text-center"
          handleClick={() =>
            router.push({
              pathname: "/product/[slug]",
              query: { slug },
            })
          }
        />
      </article>
    </motion.div>
  );
};
export default Title;

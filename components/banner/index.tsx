import { Button } from "../index";
import { useRouter } from "next/router";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Banner = () => {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section ref={ref} className="h-[510px] md:h-[639px] lg:h-[632px]">
      <div className="px-6 banner bg-[url('/images/image-header.jpg')] bg-no-repeat bg-cover h-full md:bg-[url('/images/image-header-tablet.jpg')] lg:bg-[url('/images/image-hero.jpg')] ">
        <div className="max-w-[328px]  flex flex-col items-center mx-auto pt-[7.5rem] md:pt-36 md:max-w-[379px] lg:items-start lg:max-w-[69.364rem] lg:mx-auto">
          <h1
            style={{
              transform: isInView ? "none" : "translateY(20px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="tracking-[10px] text-lg uppercase text-white opacity-50 leading-[19px] font-[400]"
          >
            New product
          </h1>
          <p
            style={{
              transform: isInView ? "none" : "translateY(20px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="text-white tracking-wider uppercase mt-4 text-4xl h-[80px] md:h-[116px] md:font-bold md:text-[56px] md:leading-[58px] md:tracking-[2px]"
          >
            XX99 Mark II <br /> Headphones
          </p>
          <p
            style={{
              transform: isInView ? "none" : "translateY(20px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="mt-[24px] text-center font-[500] text-white opacity-[0.75] text-[15px] leading-[25px] md:w-[349px] lg:text-left"
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            title="See Product"
            handleClick={() =>
              router.push({
                pathname: "/product/[slug]",
                query: { slug: "xx99-mark-two-headphones" },
              })
            }
            style="h-[48px] text-white bg-[#d87d4a] w-[160px] mt-[28px] uppercase hover:bg-[#fbaf85]"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;

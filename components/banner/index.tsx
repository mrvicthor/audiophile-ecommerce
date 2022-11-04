import { Button } from "../index";

const Banner = () => {
  return (
    <section className="h-[510px] md:h-[639px]">
      <div className="px-6 banner bg-[url('/images/image-header.jpg')] bg-no-repeat bg-cover h-full md:bg-[url('/images/image-header-tablet.jpg')] lg:bg-[url('/images/image-hero.jpg')] ">
        <div className="max-w-[328px]  flex flex-col items-center mx-auto pt-[5rem] md:pt-36 md:max-w-[379px] lg:items-start lg:max-w-[69.364rem] lg:mx-auto">
          <h1 className="tracking-[10px] text-lg uppercase text-white opacity-50 leading-[19px] font-[400]">
            New product
          </h1>
          <p className="text-white tracking-wider uppercase mt-4 text-4xl h-[80px] md:h-[116px] md:font-bold md:text-[56px] md:leading-[58px] md:tracking-[2px]">
            XX99 Mark II <br /> Headphones
          </p>
          <p className="mt-[24px] text-center font-[500] text-white opacity-[0.75] text-[15px] leading-[25px] md:w-[349px] lg:text-left">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            title="See Product"
            handleClick={() => console.log("button clicked")}
            style="h-[48px] text-white bg-[#d87d4a] w-[160px] mt-[28px] uppercase hover:bg-[#fbaf85]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

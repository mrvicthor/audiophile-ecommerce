import { Button } from "../index";
const Speaker = () => {
  return (
    <section className="mb-[1.5rem] md:mb-[2rem] lg:mb-[3rem] px-6">
      <div className="bg-[#d87d4a] h-[600px] overflow-hidden relative rounded md:h-[720px] lg:h-[560px] lg:max-w-[69.364rem] lg:mx-auto">
        <div className="outer__circle h-[558px] w-[558px] border-[#d8d8d8] border-[0.5px] absolute bottom-[163px] left-[50%] -translate-x-[275px] md:h-[944px] md:w-[944px] md:bottom-[64px] md:-translate-x-[464px] lg:-translate-x-[697px] lg:-top-[36px]" />
        <div className="inner__circle border-[#d8d8d8] border-[0.5px] h-[20.4375rem] w-[20.4375rem] rounded-[50%] absolute left-[50%] -translate-x-[50%] md:h-[33.875rem] md:w-[33.875rem] md:bottom-[265px] lg:bottom-0 lg:top-[165px] lg:-translate-x-0 lg:left-[52px]" />
        <div className="inner__circle_child h-[279px] w-[279px] border-[#d8d8d8] border-[0.5px] absolute top-[21px] left-[50%] -translate-x-[50%] md:h-[29.5rem] md:w-[29.5rem] md:-top-[49px] lg:top-[200px] lg:-translate-x-0 lg:left-[87px]" />

        <div className="h-[207px] w-[172.25px] bg-[url('/images/image-speaker-mobile.png')] bg-no-repeat bg-cover md:bg-[url('/images/image-speaker-zx9-tablet.png')] lg:bg-[url('/images/image-speaker-zx9-desktop.png')] absolute top-[57px] left-[50%] -translate-x-[50%] md:w-[197.21px] md:h-[237px] lg:h-[30.8125rem] lg:w-[25.639rem] lg:-translate-x-0 lg:left-[117.49px] lg:top-[78px]" />

        <div className="speaker__content absolute top-[294px] left-[50%] -translate-x-[50%] w-[17.5rem] flex flex-col items-center z-10 gap-4 md:top-[353px] md:w-[21.8125rem] lg:-translate-x-0 lg:top-[133px] lg:left-[666px] lg:items-start">
          <h3 className="text-[#ffffff] uppercase font-bold text-[2.25rem] text-center leading-[40px] tracking-[1.28571px] md:text-[3.5rem] md:leading-[58px] lg:text-left">
            ZX9 <br /> speaker
          </h3>
          <p className="text-center text-[#ffffff] text-[0.9375rem] opacity-75 leading-[25px] md:mt-[0.5rem] md:font-medium lg:text-left">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            title="see product"
            handleClick={() => console.log("button clicked")}
            style="h-[48px] text-white bg-[#000000] w-[160px] mt-[0.5rem] font-bold uppercase hover:bg-[#4c4c4c] md:mt-[1.5rem]"
          />
        </div>
      </div>
    </section>
  );
};
export default Speaker;

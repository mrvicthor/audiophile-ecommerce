import Image from "next/image";
import { Button } from "../index";
const Speaker = () => {
  return (
    <section className="mt-[121px]  px-6">
      <div className="bg-[#d87d4a] h-[600px] overflow-hidden relative rounded md:h-[720px]">
        <div className="outer__circle h-[558px] w-[558px] border-[#d8d8d8] border-[0.5px] absolute bottom-[163px] left-[50%] -translate-x-[275px] md:h-[944px] md:w-[944px] md:bottom-[64px] md:-translate-x-[464px]" />
        <div className="inner__circle border-[#d8d8d8] border-[0.5px] h-[20.4375rem] w-[20.4375rem] rounded-[50%] absolute left-[50%] -translate-x-[50%] md:h-[33.875rem] md:w-[33.875rem] md:bottom-[265px]" />
        <div className="inner__circle_child h-[279px] w-[279px] border-[#d8d8d8] border-[0.5px] absolute top-[21px] left-[50%] -translate-x-[50%] md:h-[29.5rem] md:w-[29.5rem] md:-top-[49px]" />

        <div className="h-[207px] w-[172.25px] absolute top-[57px] left-[50%] -translate-x-[50%] md:w-[197.21px] md:h-[237px]">
          <Image
            src="/images/image-speaker-mobile.png"
            width={500}
            height={500}
            alt="speaker image"
          />
        </div>
        <div className="speaker__content absolute top-[294px] left-[50%] -translate-x-[50%] w-[17.5rem] flex flex-col items-center z-10 gap-4 md:top-[353px] md:w-[21.8125rem]">
          <h3 className="text-[#ffffff] uppercase font-bold text-[2.25rem] text-center leading-[40px] tracking-[1.28571px] md:text-[3.5rem] md:leading-[58px]">
            ZX9 <br /> speaker
          </h3>
          <p className="text-center text-[#ffffff] text-[0.9375rem] opacity-75 leading-[25px] md:mt-[0.5rem] md:font-medium">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            title="see product"
            handleClick={() => console.log("button clicked")}
            style="h-[48px] text-white bg-[#000000] w-[160px] mt-[0.5rem] uppercase hover:bg-[#fbaf85] md:mt-[1.5rem]"
          />
        </div>
      </div>
    </section>
  );
};
export default Speaker;

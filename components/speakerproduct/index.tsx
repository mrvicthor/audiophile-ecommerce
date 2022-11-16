import { Button } from "../index";

const SpeakerProduct = () => {
  return (
    <section className="px-6">
      <div className="h-[320px] bg-[url('/images/image-speaker-zx7.jpg')] bg-cover bg-no-repeat relative md:bg-[url('/images/image-speaker-zx7-tablet.jpg')] lg:bg-[url('/images/image-speaker-zx7-desktop.jpg')] lg:max-w-[69.364rem] lg:mx-auto rounded">
        <div className="w-[204px] h-[118px] flex flex-col gap-8 absolute top-[101px] left-[24px] md:left-[62px] lg:left-[95px]">
          <h3 className="font-bold uppercase text-[1.75rem] leading-[38px] tracking-[2px]">
            ZX7 speaker
          </h3>
          <Button
            title="see product"
            handleClick={() => console.log("button clicked")}
            style="h-[48px] text-[black] border border-[#000000] font-bold w-[160px] mt-[0.5rem] uppercase hover:bg-[black] hover:text-[white]"
          />
        </div>
      </div>
    </section>
  );
};

export default SpeakerProduct;

import { Button } from "../index";
const Earphone = () => {
  return (
    <section className="px-6 mt-[1.5rem] md:mt-[2rem] lg:mt-[3rem]">
      <div className="h-[26.5rem] flex flex-col gap-[1.5rem] md:h-[20rem] md:flex-row md:gap-[0.6875rem] lg:gap-[1.875rem] lg:max-w-[69.364rem] lg:mx-auto">
        <div className="bg-[url('/images/image-earphones-yx1.jpg')] bg-cover bg-no-repeat h-[12.5rem] w-full rounded md:h-full md:bg-[url('/images/image-earphones-yx1-tablet.jpg')] lg:md:bg-[url('/images/image-earphones-yx1-desktop.jpg')]" />
        <div className="h-[12.5rem] bg-[#f1f1f1] w-full rounded pl-[1.5rem] md:h-full md:pl-[2.5625rem] lg:pl-[5.9375rem]">
          <div className="mt-[2.5625rem] space-y-8 md:mt-[6.3125rem]">
            <h3 className="font-bold uppercase text-[1.75rem] leading-[38px] tracking-[2px]">
              YX1 earphones
            </h3>
            <Button
              title="see product"
              handleClick={() => console.log("button clicked")}
              style="h-[48px] text-[black] border border-[#000000] font-bold w-[160px] uppercase hover:bg-[black] hover:text-[white]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Earphone;

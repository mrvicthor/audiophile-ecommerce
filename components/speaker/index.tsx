import Image from "next/image";
const Speaker = () => {
  return (
    <section className="mt-[121px]  px-6">
      <div className="bg-[#d87d4a] h-[600px] overflow-hidden relative rounded">
        <div className="outer__circle h-[558px] w-[558px] border-[#d8d8d8] border absolute bottom-[163px] left-[50%] -translate-x-[275px]" />
        <div className="inner__circle border-[#d8d8d8] border h-[20.4375rem] w-[20.4375rem] rounded-[50%] absolute" />
        <div className="inner__circle_child h-[279px] w-[279px] border-[#d8d8d8] border-[0.5px] absolute top-[21px] left-[50%] -translate-x-[50%]" />

        <div className="h-[207px] w-[172.25px] absolute top-[57px] left-[50%] -translate-x-[50%]">
          <Image
            src="/images/image-speaker-mobile.png"
            width={500}
            height={500}
            alt="speaker image"
          />
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default Speaker;

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type ItemProps = {
  title: string;
  description: string;
  imgPath: string | StaticImageData;
  //   mdImgPath: string;
  //   lgImgPath: string;
};

const Item = ({
  title,

  description,
  imgPath,
}: //   mdImgPath,
//   lgImgPath,
ItemProps) => {
  return (
    <section className="px-6">
      <div className="h-[45.25rem] grid gap-8">
        <div className={`h-[22rem] w-full rounded`}>
          <div className="md:hidden">
            <Image src={imgPath} alt="category" height={500} width={500} />
          </div>
        </div>
        <article className="flex flex-col gap-[1.5rem]">
          <h2 className="text-[#d87d4a] font-normal leading-[1.2rem] text-[0.875rem] tracking-[0.625rem] text-center">
            New Product
          </h2>
          <p className="font-bold text-[1.75rem] leading-[2.39rem] tracking-[1px] text-center text-[#000000]">
            {title}
          </p>
          <p className="font-medium text-[0.9375rem] leading-[1.5625rem] text-center text-[#000000]">
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
    </section>
  );
};
export default Item;

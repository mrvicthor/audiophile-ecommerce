import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  imagePath: string;
  title: string;
  style?: string;
  content?: string;
};
const Product = ({ imagePath, title, style, content }: ProductProps) => {
  return (
    <div
      className={`${
        style ? style : "h-[10.3125rem]"
      } product md:h-[10.075rem] lg:h-[12.75rem] cursor-pointer`}
    >
      <div
        className={`bg-[#f1f1f1] ${
          content ? content : "h-[10.3125rem]"
        } md:h-[10.075rem] lg:h-[12.75rem] rounded-lg relative flex items-center justify-center`}
      >
        <div className="h-[104px] w-[79.92px] absolute z-10 top-[4%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
          <Image width={500} height={500} src={imagePath} alt="product-image" />
        </div>
        <div className="image_shadow -translate-y-[50%] left-[50%] -translate-x-[50%] top-[36%]" />
        <div className="flex flex-col items-center self-end gap-4 pb-4">
          <h3 className="uppercase font-bold tracking-wide-[1.1px] text-[#000000]">
            {title}
          </h3>
          <Link
            href={`/${title}`}
            className="flex items-center justify-center uppercase text-[#000] opacity-75 cursor-pointer"
          >
            shop{" "}
            <span className="pl-3">
              <FaChevronRight color="#d87d4a" size={13} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

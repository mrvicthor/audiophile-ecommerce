import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  imagePath: string;
  title: string;
};
const Product = ({ imagePath, title }: ProductProps) => {
  return (
    <div className="h-[217px] product cursor-pointer">
      <div className="bg-[#f1f1f1] h-[165px] rounded-lg relative flex items-center justify-center">
        <div className="h-[104px] w-[79.92px] absolute z-10 top-[4%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
          <Image width={500} height={500} src={imagePath} alt="product-image" />
        </div>
        <div className="image_shadow -translate-y-[50%] left-[50%] -translate-x-[50%] top-[36%]" />
        <div className="flex flex-col items-center self-end gap-4 pb-4">
          <h3 className="uppercase font-bold tracking-wide-[1.1px]">{title}</h3>
          <Link
            href={`/${title}`}
            className="flex items-center justify-center uppercase opacity-75 cursor-pointer"
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

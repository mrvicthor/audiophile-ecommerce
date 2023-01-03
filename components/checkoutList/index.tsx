import Image from "next/image";
import { Product } from "../../model";
import { convertCurrency } from "../../helpers/toUsDollar";
import { removeLastString } from "../../helpers/removeLastString";

interface CartProps {
  item: Product;
  style?: string;
  modalStyle?: string;
}

const CheckoutItem = ({ item, style, modalStyle }: CartProps) => {
  return (
    <div className={`flex ${style ? style : "gap-2"}`}>
      <div
        className={`${
          modalStyle ? modalStyle : "h-16 w-16"
        }  relative rounded-md`}
      >
        <Image
          src={item?.categoryImage.mobile}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={item?.name}
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <h4 className="font-bold leading-[1.5625rem] text-[#000000]">
          {removeLastString(item?.name)}
        </h4>
        <p className="text-sm font-bold text-[#000000] opacity-50">
          {convertCurrency(item?.price)}
        </p>
      </div>
      <div className="h-8  flex items-center justify-end px-2 max-w-[0.9375rem]">
        <p className="uppercase text-[#000] opacity-50 ">x{item?.quantity}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;

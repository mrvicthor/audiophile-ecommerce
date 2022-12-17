import { useCart } from "../../store";
import Image from "next/image";
import { Product } from "../../model";

interface CartProps {
  item: Product;
}

const CheckoutItem = ({ item }: CartProps) => {
  const { cart } = useCart();
  const removeLastString = (value: string) => {
    const strArr = value.split(" ");
    return strArr.length > 3
      ? `${strArr[0]} ${strArr[1]} ${strArr[2]}`
      : `${strArr[0]}`;
  };

  const toUSDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 4,
  });

  return (
    <div className="flex gap-2 justify-between items-center">
      <div className="h-16 w-16 relative rounded-md">
        <Image
          src={item.categoryImage.mobile}
          fill
          alt={item.name}
          className="object-cover rounded-md"
        />
      </div>
      <div className="w-[4.75rem] flex-1">
        <h4 className="text-bold leading-[1.5625rem] text-[#000000]">
          {removeLastString(item.name)}
        </h4>
        <p className="text-sm font-bold text-[#000000] opacity-50">
          {toUSDollar.format(item.price)}
        </p>
      </div>
      <div className="h-8 w-[6rem] flex items-center justify-end px-2">
        <span className="uppercase text-[#000] opacity-50 ">
          x{item.quantity}
        </span>
      </div>
    </div>
  );
};

export default CheckoutItem;

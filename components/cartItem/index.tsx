import {
  increaseQuantity,
  decreaseQuantity,
} from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import Image from "next/image";
import { Product } from "../../model";
import { convertCurrency } from "../../helpers/toUsDollar";
import { removeLastString } from "../../helpers/removeLastString";

interface CartProps {
  item: Product;
}

const CartItem = ({ item }: CartProps) => {
  const dispatch = useAppDispatch();

  // const removeLastString = (value: string) => {
  //   const strArr = value.split(" ");
  //   return strArr.length > 3
  //     ? `${strArr[0]} ${strArr[1]} ${strArr[2]}`
  //     : `${strArr[0]}`;
  // };

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
          {convertCurrency(item.price)}
        </p>
      </div>
      <div className="h-8 w-[6rem] bg-[#f1f1f1] flex justify-between items-center px-4 ">
        <button
          onClick={() => dispatch(decreaseQuantity(item.slug))}
          disabled={item.quantity <= 1 ? true : false}
          className="cursor-pointer hover:text-[#d87d4a]"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => dispatch(increaseQuantity(item.slug))}
          className="cursor-pointer hover:text-[#d87d4a]"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;

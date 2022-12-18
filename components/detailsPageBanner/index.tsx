import { Product } from "../../model";
import Image from "next/image";
import { Button } from "../";
import { useWindowSize } from "./../../hooks/use-Window-Size";
import { useCart } from "../../store";

interface IProps {
  product: Product;
}

const DetailsPageBanner = ({ product }: IProps) => {
  const { addOrder, cart } = useCart();
  const total = cart.items
    .map((c) => c.quantity * c.price)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  console.log(cart, total);
  const { width } = useWindowSize();
  const toUSDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 4,
  });
  const strArr = product.name.split(" ");
  return (
    <div className="mt-[1.5rem] grid gap-8 md:h-[30rem] md:grid-cols-2 rounded-md lg:mt-[3.5rem] lg:h-[35rem] lg:gap-[7.8125rem]">
      <div className="relative h-[20.4375rem] w-full md:h-[30rem] rounded-md md:w-[17.5625rem] lg:h-[35rem] lg:w-[33.75rem]">
        {width !== undefined && (
          <Image
            src={
              width <= 768
                ? product.image.mobile
                : width > 768 && width <= 1024
                ? product.image.tablet
                : product.image.desktop
            }
            fill
            alt={product.name}
            className="object-cover rounded-md"
          />
        )}
      </div>
      <article className="flex flex-col gap-[1.5rem] md:justify-center">
        {product.new && (
          <p className="font-normal text-[#d87d4a] text-[0.875rem] leading-[1.195rem] tracking-[0.625rem] uppercase">
            new product
          </p>
        )}
        <h1 className="uppercase text-[1.75rem] leading-[2.390rem] font-bold tracking-[1px] text-[#000000] lg:text-[2.5rem]">
          {strArr.length > 3
            ? `${strArr[0]} ${strArr[1]} ${strArr[2]}`
            : `${strArr[0]}`}{" "}
          <span className="block">{strArr.slice(-1)}</span>
        </h1>
        <p className="text-left text-[#000000] opacity-50">
          {product.description}
        </p>
        <p className="text-[1.125rem] leading-[1.5369rem] tracking-[1.29px] font-bold text-[#000000] uppercase">
          {toUSDollar.format(product.price)}
        </p>
        <div className="grid grid-cols-2 gap-4 mt-[0.4375rem] lg:w-[18.5rem]">
          <button className="bg-[#f1f1f1] h-[3rem]  text-[#000000] uppercase lg:w-[7.5rem]">
            {product.quantity}
          </button>
          <Button
            title="add to cart"
            style="bg-[#d87d4a] h-[3rem] text-white hover:bg-[#fbaf85] uppercase lg:w-[10rem]"
            handleClick={() => addOrder(product)}
          />
        </div>
      </article>
    </div>
  );
};
export default DetailsPageBanner;

import { Product } from "../../model";
import Image from "next/image";
import { Button } from "../";
import { useWindowSize } from "./../../hooks/use-Window-Size";
import { useAppDispatch } from "../../redux/hooks";
import { convertCurrency } from "../../helpers/toUsDollar";
import { addToCart } from "../../features/cart/cartSlice";
import { Id } from "react-toastify/dist/types";
import { useState } from "react";

export interface IProps {
  handleNotification: () => Id;
  product: Product;
}

const DetailsPageBanner = ({ handleNotification, product }: IProps) => {
  const dispatch = useAppDispatch();
  const [detailProduct, setDetailProduct] = useState(product);
  const { width } = useWindowSize();

  const strArr = product.name.split(" ");
  const increaseProductCount = () => {
    setDetailProduct((prevState) => ({
      ...prevState,
      quantity: prevState.quantity + 1,
    }));
  };

  const decreaseProductCount = () => {
    setDetailProduct((prevState) => ({
      ...prevState,
      quantity: prevState.quantity - 1,
    }));
  };

  return (
    <div className="mt-[1.5rem] grid gap-8 md:h-[30rem] md:grid-cols-2 rounded-md lg:mt-[3.5rem] lg:h-[35rem] lg:gap-[7.8125rem]">
      <div className="relative h-[20.4375rem] w-full md:h-[30rem] rounded-md md:w-[17.5625rem] lg:h-[35rem] lg:w-[33.75rem]">
        {width !== undefined && (
          <Image
            src={
              width <= 768
                ? detailProduct.image.mobile
                : width > 768 && width <= 1024
                ? detailProduct.image.tablet
                : detailProduct.image.desktop
            }
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            alt={detailProduct.name}
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
        <h2 className="uppercase text-[1.75rem] leading-[2.390rem] font-bold tracking-[1px] text-[#000000] lg:text-[2.5rem]">
          {strArr.length > 3
            ? `${strArr[0]} ${strArr[1]} ${strArr[2]}`
            : `${strArr[0]}`}{" "}
          <span className="block">{strArr.slice(-1)}</span>
        </h2>
        <p className="text-left text-[#000000] opacity-50">
          {detailProduct.description}
        </p>
        <p className="text-[1.125rem] leading-[1.5369rem] tracking-[1.29px] font-bold text-[#000000] uppercase">
          {convertCurrency(detailProduct.price)}
        </p>
        <div className="grid grid-cols-2 gap-4 mt-[0.4375rem] lg:w-[18.5rem]">
          <div className="w-[6rem] h-[3rem]  text-[#000000] uppercase bg-[#f1f1f1] flex justify-between items-center px-4 lg:w-[7.5rem]">
            <button
              onClick={() => decreaseProductCount()}
              disabled={detailProduct.quantity <= 1 ? true : false}
              className="cursor-pointer hover:text-[#d87d4a]"
            >
              -
            </button>
            <span>{detailProduct.quantity}</span>
            <button
              onClick={() => increaseProductCount()}
              className="cursor-pointer hover:text-[#d87d4a]"
            >
              +
            </button>
          </div>

          <Button
            title="add to cart"
            style="bg-[#d87d4a] h-[3rem] text-white hover:bg-[#fbaf85] uppercase lg:w-[10rem]"
            handleClick={() => {
              handleNotification();
              dispatch(addToCart(detailProduct));
            }}
          />
        </div>
      </article>
    </div>
  );
};
export default DetailsPageBanner;

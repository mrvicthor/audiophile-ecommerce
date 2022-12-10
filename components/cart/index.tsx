import { useCart } from "../../store";
import Image from "next/image";
import { Button } from "../index";
import { it } from "node:test";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, emptyCart } = useCart();
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

  const totalCost = cart.items
    .map((item) => item.quantity * item.price)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  const numberOfItemsInCart = cart.items
    .map((items) => items.quantity)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  return (
    <section className="px-6 fixed top-[7.125rem] z-50  left-0 right-0">
      <div className="max-h-[30.5rem] bg-[#ffffff]  rounded-md px-7 pb-8">
        {!cart.items.length ? (
          <p className="text-center pt-8 text-[#000000] font-bold leading-[1.5369rem]">
            Cart is empty
          </p>
        ) : (
          <>
            <div className="flex justify-between items-center pt-8 ">
              <h3 className="font-bold uppercase text-lg leading-[1.5369rem] tracking-[1.29px] text-[#000000]">
                cart <span>({numberOfItemsInCart})</span>
              </h3>
              <button
                className="font-medium text-[#000000] opacity-50 leading-[1.5625rem]"
                onClick={() => emptyCart()}
              >
                Remove all
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-6">
              {cart.items.map((item) => (
                <div
                  className="flex gap-2 justify-between items-center"
                  key={item.id}
                >
                  <div className="h-16 w-16 relative">
                    <Image
                      src={item.categoryImage.mobile}
                      fill
                      alt={item.name}
                      className="object-cover"
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
                  <div className="h-8 w-[6rem] bg-[#f1f1f1] flex justify-between items-center px-4">
                    <button
                      onClick={() => decreaseQuantity(item.slug)}
                      disabled={item.quantity <= 1 ? true : false}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.slug)}>
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
              <p className="text-[#000000] opacity-50 font-medium leading-[1.5625rem] uppercase">
                total
              </p>
              <p className="text-[#000000] text-lg uppercase font-bold">
                {toUSDollar.format(totalCost)}
              </p>
            </div>
            <Button
              style="mt-6 bg-[#d87d4a] text-[#ffffff] w-full h-12 uppercase hover:opacity-50"
              title="checkout"
              handleClick={() => console.log("checkout")}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;

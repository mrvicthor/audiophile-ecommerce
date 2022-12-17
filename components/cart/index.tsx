import { useCart } from "../../store";
import { Button, CartItem } from "../index";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Cart = () => {
  const router = useRouter();
  const { cart, emptyCart } = useCart();

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

  useEffect(() => {
    console.log("Cart is loaded successfully");
  }, []);

  return (
    <section className="px-6 fixed top-[7.125rem] z-50  left-0 right-0 ">
      <div className="lg:max-w-[69.364rem] lg:mx-auto">
        <div className="max-h-[30.5rem] bg-[#ffffff] rounded-md px-7 pb-8 md:max-w-[23.5625rem] md:ml-auto ">
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

              <div className="mt-8 flex flex-col gap-6 overflow-y-scroll max-h-[15rem] cart__wrapper">
                {cart.items.map((item) => (
                  <CartItem item={item} key={item.id} />
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
                handleClick={() => router.push("/checkout")}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;

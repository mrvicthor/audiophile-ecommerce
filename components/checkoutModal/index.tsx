import Image from "next/image";
import { Button, CheckoutItem } from "../index";
import { useRouter } from "next/router";
import { useCart } from "../../store";
import { Cart } from "../../model";

interface ModalProps {
  grandTotal: number;
  cart: Cart;
}

const CheckoutModal = ({ cart, grandTotal }: ModalProps) => {
  const router = useRouter();
  //   const { cart } = useCart();
  const [firstItem, ...rest] = cart.items;
  const toUSDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 4,
  });
  return (
    <div className="bg-white px-6 py-6 absolute top-[14rem] left-[50%] z-[10000] -translate-x-[50%] w-[90%] rounded-md min-h-[37.5rem] md:w-[33.75rem] ">
      <div className="relative h-16 w-16 mt-8">
        <Image
          src="/images/icon-order-confirmation.svg"
          fill
          alt="order confirmation"
          className="object-cover"
        />
      </div>
      <h1 className="mt-[1.4375rem] font-bold text-2xl uppercase tracking-[0.86px] text-[#000]">
        thank you <br />
        for your order
      </h1>
      <p className="mt-4 text-[0.9375rem] ">
        You will receive an email confirmation shortly.
      </p>
      <div className="h-[14.5rem] rounded-lg mt-8 md:flex w-[100%] md:h-[10.75rem] overflow-hidden">
        <div className="px-6 bg-[#f1f1f1] flex items-center flex-col gap-3 py-8 rounded-t-lg">
          <CheckoutItem item={firstItem} style="gap-4" />
          <div className="bg-[#000] opacity-[0.08] h-[2px] w-full" />
          <p className="font-bold text-[0.75rem] opacity-50">
            and {rest.length} {rest.length > 1 ? "items" : "item"}
          </p>
        </div>
        <div className="bg-[#000] px-6 pb-[1.1875rem] pt-[0.9375rem] md:w-[12.375rem] md:flex md:justify-center md:flex-col">
          <h4 className="font-medium text-[0.9375rem] text-[#fff] opacity-50 uppercase mt-[0.9375rem]">
            grand total
          </h4>
          <p className="text-[#fff] mt-2 font-bold text-lg uppercase">
            {toUSDollar.format(grandTotal)}
          </p>
        </div>
      </div>
      <Button
        style="uppercase bg-[#d87d4a] mt-[4rem] w-full h-12 hover:opacity-50 text-[#fff] md:mt-[3rem]"
        handleClick={() => router.push("/")}
        title="back to home"
      />
    </div>
  );
};

export default CheckoutModal;

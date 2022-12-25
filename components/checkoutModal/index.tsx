import Image from "next/image";
import { Button, CheckoutItem } from "../index";
import { useRouter } from "next/router";
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

  console.log("order confirmed...");

  return (
    <div className="bg-white px-8 py-6  rounded-md md:w-[33.75rem] md:px-12">
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
      <p className="mt-4 mb-8 text-[0.9375rem] ">
        You will receive an email confirmation shortly.
      </p>
      <div className="bg-[#f1f1f1] grid  rounded-md border md:gap-1 md:grid-cols-5 overflow-hidden">
        <div className="px-8 md:col-span-1">
          <div className="grid gap-3 py-8">
            <CheckoutItem
              item={firstItem}
              style="gap-2"
              modalStyle="h-[3.125rem] w-[3.125rem]"
            />
            <div className="bg-[#000] opacity-[0.08] h-[2px]" />
            <p className="font-bold text-[0.75rem] opacity-50 text-center">
              and {rest.length} {rest.length > 1 ? "items" : "item"}
            </p>
          </div>
        </div>
        <div className="bg-[#000] px-6 pb-[1.1875rem] pt-[0.9375rem] md:flex md:justify-center md:flex-col md:col-span-4 md:col-start-4">
          <h4 className="font-medium text-[0.9375rem] text-[#fff] opacity-50 uppercase mt-[0.9375rem]">
            grand total
          </h4>
          <p className="text-[#fff] mt-2 font-bold text-lg uppercase">
            {toUSDollar.format(grandTotal)}
          </p>
        </div>
      </div>
      <Button
        style="mt-6 mb-6 bg-[#d87d4a] text-[#ffffff] w-full h-12 uppercase hover:opacity-50"
        title="back to home"
        handleClick={() => {
          router.push("/");
        }}
      />
    </div>
  );
};

export default CheckoutModal;

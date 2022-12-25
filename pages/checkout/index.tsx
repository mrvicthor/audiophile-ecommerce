"use client";

import {
  Layout,
  Button,
  InputField,
  CheckoutItem,
  CheckoutModal,
} from "../../components";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "../../model";
import { useState, useEffect } from "react";
import { useCart } from "../../store";

const CheckoutPage = () => {
  const [ePayment, setEPayment] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();
  const { cart, emptyCart } = useCart();

  const toUSDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 4,
  });

  const total = cart.items
    .map((item) => item.quantity * item.price)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  const vat = total * 0.2;

  const grandTotal = total + vat + 50;

  useEffect(() => {
    setHasMounted(true);
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    if (Object.keys(errors).length === 0) {
      setShowModal(true);
      scrollUp();
      emptyCart();
    }
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  console.log(Object.keys(errors).length);

  if (!hasMounted) {
    return null;
  }
  return (
    <Layout>
      <section className="px-6 overflow-hidden bg-[#f2f2f2] relative">
        {showModal && (
          <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#979797] z-50 opacity-40" />
        )}

        {showModal && (
          <div className="absolute top-[2.5rem] left-[50%] z-[60] -translate-x-[50%]  w-[90%] md:w-[33.75rem]">
            <CheckoutModal cart={cart} grandTotal={grandTotal} />
          </div>
        )}
        <div className="pt-4 lg:pt-[4.9375rem] lg:max-w-[69.364rem] lg:mx-auto">
          <Button
            title="go back"
            handleClick={() => router.back()}
            style="capitalize text-[0.9375rem] font-medium text-[#000000] leading-[1.5625rem] opacity-50"
          />
          <form
            className="mt-6  mb-[6.0625rem] flex flex-col gap-8 lg:mt-[2.375rem] lg:max-w-[69.364rem] lg:mx-auto lg:flex-row"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className=" rounded-md py-6 px-6 bg-[#ffffff] flex-1">
              <h1 className="uppercase font-bold text-2xl leading-[2.39rem] tracking-[1px] text-[#000000]">
                checkout
              </h1>
              <p className="uppercase text-[#d87d4a] font-bold leading-[1.5625rem] tracking-[0.93px] text-[0.8125rem] mt-8">
                billing details
              </p>
              <div className="mt-4">
                <div className="flex flex-col gap-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <InputField label="Name" register={register} required />
                      {errors.Name && (
                        <p className="text-red-600" role="alert">
                          Name is required
                        </p>
                      )}
                    </div>
                    <div>
                      <InputField
                        label="Email Address"
                        register={register}
                        required
                      />

                      {errors["Email Address"] && (
                        <p className="text-red-600" role="alert">
                          Email Address is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col gap-[0.5625rem] w-[100%] h-[5.0625rem]">
                      <label
                        className="font-bold text-[#000000] text-[0.75rem]"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        {...register("Phone Number", {
                          required: true,
                          maxLength: 12,
                        })}
                        id="phoneNumber"
                        placeholder="Phone Number"
                        className="w-[100%] rounded-md py-2 px-6 h-[3.5rem] border border-[#cfcfcf]"
                      />
                      {errors["Phone Number"] && (
                        <p className="text-red-600" role="alert">
                          Phone Number is required
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="uppercase text-[#d87d4a] font-bold leading-[1.5625rem] tracking-[0.93px] text-[0.8125rem] mt-8">
                    shipping info
                  </p>
                  <div>
                    <InputField
                      label="Your Address"
                      register={register}
                      required
                    />
                    {errors["Your Address"] && (
                      <p className="text-red-600" role="alert">
                        Your address is required
                      </p>
                    )}
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <InputField
                        label="Zip Code"
                        register={register}
                        required
                      />
                      {errors["Zip Code"] && (
                        <p className="text-red-600" role="alert">
                          Zip Code is required
                        </p>
                      )}
                    </div>
                    <div>
                      <InputField label="City" register={register} required />
                      {errors["City"] && (
                        <p className="text-red-600" role="alert">
                          City Name is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <InputField
                        label="Country"
                        register={register}
                        required
                      />
                      {errors["Country"] && (
                        <p className="text-red-600" role="alert">
                          Country name is required
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="uppercase text-[#d87d4a] font-bold leading-[1.5625rem] tracking-[0.93px] text-[0.8125rem] mt-8">
                    payment details
                  </p>
                  <div className="grid gap-[0.5625rem] w-[100%] md:grid-cols-2">
                    <label className="font-bold text-[#000000] text-[0.75rem] capitalize">
                      payment method
                    </label>
                    <div>
                      <label className="radio__container w-[100%] font-bold  block rounded-md py-2 px-6 h-[3.5rem] border border-[#cfcfcf] relative pl-[4rem] pt-4 mb-4 cursor-pointer text-sm">
                        <input
                          type="radio"
                          checked={ePayment}
                          onChange={(e) => setEPayment(e.target.checked)}
                        />
                        e-Money
                        <span className="checkmark" />
                      </label>
                      <label className="radio__container w-[100%] font-bold block rounded-md py-2 px-6 h-[3.5rem] border border-[#cfcfcf] relative pl-[4rem] pt-4 mb-4 cursor-pointer text-sm">
                        <input
                          type="radio"
                          checked={ePayment === false ? true : false}
                          onChange={(e) => setEPayment(!e.target.checked)}
                        />
                        cash on delivery
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>

                  {ePayment == true && (
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <InputField
                          label="e-Money Number"
                          register={register}
                          required
                        />
                        <p className="text-red-600">
                          {errors["e-Money Number"]?.message}
                        </p>
                      </div>
                      <div>
                        <InputField
                          label="e-Money Pin"
                          register={register}
                          required
                        />
                        <p className="text-red-600">
                          {errors["e-Money Pin"]?.message}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <article className="bg-white py-6 px-6 rounded-md md:min-h-[38.25rem] lg:self-start">
              <h4 className="mt-2 uppercase text-lg font-bold leading-[1.5369rem] tracking-[1.29px]">
                summary
              </h4>
              <div className="mt-8 flex flex-col gap-6 overflow-y-scroll max-h-[15rem] cart__wrapper">
                {cart.items.map((item) => (
                  <CheckoutItem item={item} key={item.id} />
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <p className="text-[#000000] opacity-50 font-medium leading-[1.5625rem] uppercase">
                  total
                </p>
                <p className="text-[#000000] text-lg uppercase font-bold">
                  {toUSDollar.format(total)}
                </p>
              </div>
              <div className="mt-2 flex justify-between">
                <p className="text-[#000000] opacity-50 font-medium leading-[1.5625rem] uppercase">
                  shipping
                </p>
                <p className="text-[#000000] text-lg uppercase font-bold">
                  {toUSDollar.format(50)}
                </p>
              </div>
              <div className="mt-2 flex justify-between">
                <p className="text-[#000000] opacity-50 font-medium leading-[1.5625rem] uppercase">
                  vat (included)
                </p>
                <p className="text-[#000000] text-lg uppercase font-bold">
                  {toUSDollar.format(vat)}
                </p>
              </div>
              <div className="mt-8 flex justify-between">
                <p className="text-[#000000] opacity-50 font-medium leading-[1.5625rem] uppercase">
                  grand total
                </p>
                <p className="text-[#d87d4a] text-lg uppercase font-bold">
                  {toUSDollar.format(grandTotal)}
                </p>
              </div>

              <Button
                style="mt-6 bg-[#d87d4a] text-[#ffffff] w-full h-12 uppercase hover:opacity-50"
                title="continue & pay"
                handleClick={() => {
                  if (Object.keys(errors).length > 0) {
                    return;
                  }
                }}
              />
            </article>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;

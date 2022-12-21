"use client";

import { Layout, Button, InputField, CheckoutItem } from "../../components";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "../../model";
import { useState, useEffect } from "react";
import { useCart } from "../../store";

const CheckoutPage = () => {
  const [ePayment, setEPayment] = useState<boolean>(false);
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const router = useRouter();
  const { cart } = useCart();

  const toUSDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 4,
  });

  const vat = total * 0.2;

  const grandTotal = total + vat + 50;

  useEffect(() => {
    setTotal(
      (prevState) =>
        prevState +
        cart.items
          .map((item) => item.quantity * item.price)
          .reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0)
    );
  }, []);

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
  };

  if (!hasMounted) {
    return null;
  }
  return (
    <Layout>
      <section className="px-6 overflow-hidden bg-[#f2f2f2]">
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
                        <p className="text-red-600">Name is required</p>
                      )}
                    </div>
                    <div>
                      <InputField
                        label="Email Address"
                        register={register}
                        required
                      />

                      {errors["Email Address"] && (
                        <p className="text-red-600">
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
                          pattern: {
                            value:
                              /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
                            message: "Invalid phone number",
                          },
                        })}
                        id="phoneNumber"
                        placeholder="Phone Number"
                        className="w-[100%] rounded-md py-2 px-6 h-[3.5rem] border border-[#cfcfcf]"
                      />
                    </div>
                    <p className="text-red-600">
                      {errors["Phone Number"]?.message}
                    </p>
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
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <InputField
                        label="Zip Code"
                        register={register}
                        required
                      />
                      <p className="text-red-600">
                        {errors["Zip Code"]?.message}
                      </p>
                    </div>
                    <div>
                      <InputField label="City" register={register} required />
                      <p className="text-red-600">{errors["City"]?.message}</p>
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <InputField
                        label="Country"
                        register={register}
                        required
                      />
                      <p className="text-red-600">
                        {errors["Country"]?.message}
                      </p>
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

            <article className="bg-white py-6 px-6 rounded-md max-h-[38.25rem]">
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
                  if (!errors) {
                    router.push("/");
                  }
                  console.log("paid");
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

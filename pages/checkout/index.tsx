import { Layout, Button, InputField } from "../../components";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInput } from "../../model";
import { useState, useEffect } from "react";

const CheckoutPage = () => {
  const [ePayment, setEPayment] = useState<boolean>(false);
  const [cashPayment, setCashPayment] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    console.log(ePayment);
  }, [ePayment]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <section>
      <Layout>
        <section className="px-6 overflow-hidden bg-[#f2f2f2]">
          <div className="pt-4 lg:pt-[4.9375rem] lg:max-w-[69.364rem] lg:mx-auto">
            <Button
              title="go back"
              handleClick={() => router.back()}
              style="capitalize text-[0.9375rem] font-medium text-[#000000] leading-[1.5625rem] opacity-50"
            />
          </div>
          <div className="bg-[#ffffff] mt-6 rounded-md py-6 px-6 mb-[6.0625rem]">
            <h1 className="uppercase font-bold text-2xl leading-[2.39rem] tracking-[1px] text-[#000000]">
              checkout
            </h1>
            <p className="uppercase text-[#d87d4a] font-bold leading-[1.5625rem] tracking-[0.93px] text-[0.8125rem] mt-8">
              billing details
            </p>
            <div className="mt-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                <div>
                  <InputField label="Name" register={register} required />
                </div>
                <div>
                  <InputField
                    label="Email Address"
                    register={register}
                    required
                  />
                </div>
                <div>
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
                <div>
                  <InputField label="Zip Code" register={register} required />
                </div>
                <div>
                  <InputField label="City" register={register} required />
                </div>
                <div>
                  <InputField label="Country" register={register} required />
                </div>
                <p className="uppercase text-[#d87d4a] font-bold leading-[1.5625rem] tracking-[0.93px] text-[0.8125rem] mt-8">
                  payment details
                </p>
                <div className="flex flex-col gap-[0.5625rem] w-[100%]">
                  <label className="font-bold text-[#000000] text-[0.75rem] capitalize">
                    payment method
                  </label>

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

                {ePayment == true && (
                  <>
                    <div>
                      <InputField
                        label="e-Money Number"
                        register={register}
                        required
                      />
                    </div>
                    <div>
                      <InputField
                        label="e-Money Pin"
                        register={register}
                        required
                      />
                    </div>
                  </>
                )}
              </form>
            </div>
            <div></div>
          </div>
        </section>
      </Layout>
    </section>
  );
};

export default CheckoutPage;

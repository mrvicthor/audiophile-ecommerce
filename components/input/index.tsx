import { Path, UseFormRegister } from "react-hook-form";
import { FormInput } from "../../model";

type InputProps = {
  label: Path<FormInput>;
  register: UseFormRegister<FormInput>;
  required?: boolean;
};

export const InputField = ({ label, register, required }: InputProps) => {
  return (
    <div className="flex flex-col gap-[0.5625rem] w-[100%] h-[5.0625rem]">
      <label
        className="font-bold text-[#000000] text-[0.75rem]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        {...register(label, { required })}
        id={label}
        placeholder={label}
        className="w-[100%] rounded-md py-2 px-6 h-[3.5rem] border border-[#cfcfcf] hover:border-[#d87d4a] cursor-pointer"
      />
    </div>
  );
};

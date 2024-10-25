import { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface Props {
  name?: string;
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  value?: string;
  label?: string;
  onChange?: (e) => void;
  errorMessage?: string;
}

const Input = ({
  name,
  type,
  placeholder,
  register,
  value,
  onChange,
  label,
  errorMessage
}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {label && <label className="text-xl ">{label}</label>}
      <input
        value={value}
        onChange={onChange}
        name={name}
        {...register}
        placeholder={placeholder}
        className="focus:outline-none placeholder:text-lg px-5 py-4 border-2 border-borderLight rounded-lg w-full text-2xl "
        type={type}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default Input;

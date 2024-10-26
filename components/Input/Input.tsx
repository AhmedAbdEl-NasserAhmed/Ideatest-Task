import { InputProps } from "@/intefaces/interfaces";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Input = ({
  name,
  type,
  placeholder,
  register,
  value,
  onChange,
  label,
  errorMessage,
  defaultvalue,
  disabled
}: InputProps) => {
  return (
    <div className="flex flex-col gap-4">
      {label && <label className="text-xl ">{label}</label>}
      <input
        defaultValue={defaultvalue}
        disabled={disabled}
        value={value}
        onChange={onChange}
        name={name}
        {...register}
        placeholder={placeholder}
        className="focus:outline-none placeholder:text-lg px-5 py-4 border-2 border-borderLight rounded-lg w-full text-xl "
        type={type}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default Input;

import { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface Props {
  name?: string;
  register?: UseFormRegisterReturn;
  value?: string;
  onChange?: (e) => void;
  errorMessage?: string;
}

const SelectMenu = ({
  name,

  register,
  value,
  onChange,
  errorMessage
}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <select
        value={value}
        onChange={onChange}
        name={name}
        {...register}
        className="focus:outline-none placeholder:text-lg px-5 py-4 border-2 border-borderLight rounded-lg w-full text-xl "
      >
        <option value="">Please choose your role</option>
        <option value="employer">Employer</option>
        <option value="employee">Employee</option>
      </select>
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default SelectMenu;

import { SelectMenuProps } from "@/intefaces/interfaces";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const SelectMenu = ({
  name,
  register,
  value,
  onChange,
  errorMessage,
  disabled,
  options
}: SelectMenuProps) => {
  return (
    <div className="flex flex-col gap-4">
      <select
        disabled={disabled}
        value={value}
        onChange={onChange}
        name={name}
        {...register}
        className="focus:outline-none px-5 py-4 border-2 border-borderLight rounded-lg w-full text-xl "
      >
        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.content}
            </option>
          );
        })}
      </select>
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default SelectMenu;

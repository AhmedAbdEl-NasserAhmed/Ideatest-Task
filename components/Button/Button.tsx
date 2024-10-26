import { ButtonProps } from "@/intefaces/interfaces";

const Button = ({ onClick, type, children, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="rounded-xl text-xl p-6 bg-yellow-400"
    >
      {children}
    </button>
  );
};

export default Button;

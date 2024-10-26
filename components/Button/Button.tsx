const Button = ({ type, children, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="rounded-xl text-xl p-6 bg-yellow-400"
    >
      {children}
    </button>
  );
};

export default Button;

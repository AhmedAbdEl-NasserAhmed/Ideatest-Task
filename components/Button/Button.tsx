const Button = ({ type, children }) => {
  return (
    <button type={type} className="rounded-xl text-xl p-6 bg-yellow-400">
      {children}
    </button>
  );
};

export default Button;

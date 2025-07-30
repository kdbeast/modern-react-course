const Button = ({ children, className, onClick, disabled }) => {
  return (
    <div>
      <button disabled={disabled} onClick={onClick} className={className}>
        {children}
      </button>
    </div>
  );
};

export default Button;

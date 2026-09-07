const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        glass
        rounded-2xl
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;

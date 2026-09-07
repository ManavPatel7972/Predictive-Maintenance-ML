const Input = ({
  label,
  name,
  value,
  onChange,
  type = "number",
  placeholder,
  unit,
  error,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-300">{label}</label>

      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full rounded-xl
            border bg-[#0b0e18]
            px-4 py-3.5
            text-white
            outline-none
            transition
            placeholder:text-slate-600

            ${
              error
                ? "border-red-500/60"
                : "border-white/10 focus:border-violet-500/60"
            }
          `}
        />

        {unit && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500">
            {unit}
          </span>
        )}
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
};

export default Input;

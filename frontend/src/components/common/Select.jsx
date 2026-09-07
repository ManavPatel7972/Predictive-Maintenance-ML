const Select = ({ label, name, value, onChange, options, error }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-300">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`
          w-full rounded-xl
          border bg-[#0b0e18]
          px-4 py-3.5
          text-white
          outline-none
          transition

          ${
            error
              ? "border-red-500/60"
              : "border-white/10 focus:border-violet-500/60"
          }
        `}
      >
        <option value="">Select machine type</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
};

export default Select;

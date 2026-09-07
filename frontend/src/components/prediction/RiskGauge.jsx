const RiskGauge = ({ probability }) => {
  const percentage = Math.round(probability * 100);

  return (
    <div className="py-4">
      <div
        className="
        mb-3 flex
        items-center
        justify-between
      "
      >
        <span
          className="
          text-sm text-slate-500
        "
        >
          Failure Probability
        </span>

        <span
          className="
          text-lg font-bold
        "
        >
          {percentage}%
        </span>
      </div>

      <div
        className="
        h-3
        overflow-hidden
        rounded-full
        bg-white/5
      "
      >
        <div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-emerald-400
            via-yellow-400
            to-red-500
            transition-all
            duration-1000
          "
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
};

export default RiskGauge;

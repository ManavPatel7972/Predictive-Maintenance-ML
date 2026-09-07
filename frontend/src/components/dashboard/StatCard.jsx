const StatCard = ({ icon: Icon, value, label }) => {
  return (
    <div
      className="
      glass rounded-2xl p-5
      transition
      hover:-translate-y-1
    "
    >
      <div
        className="
        mb-5 flex h-10 w-10
        items-center justify-center
        rounded-xl
        bg-violet-500/10
        text-violet-400
      "
      >
        <Icon size={20} />
      </div>

      <p className="text-2xl font-bold">{value}</p>

      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
};

export default StatCard;

const StatCard = ({ icon: Icon, value, label, badge, badgeColor }) => {
  return (
    <div
      className="
        glass rounded-3xl p-6
        border border-white/10
        transition-all duration-300
        hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5
        flex flex-col justify-between
      "
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className="
            flex h-11 w-11
            items-center justify-center
            rounded-2xl
            bg-gradient-to-br from-violet-600/15 to-cyan-500/15
            text-violet-400 border border-violet-500/20
          "
        >
          <Icon size={20} />
        </div>

        {badge && (
          <span
            className={`
              text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border font-mono
              ${
                badgeColor === "emerald"
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : badgeColor === "violet"
                  ? "bg-violet-500/10 text-violet-400 border-violet-500/20"
                  : "bg-white/5 text-slate-400 border-white/10"
              }
            `}
          >
            {badge}
          </span>
        )}
      </div>

      <div>
        <p className="text-3xl font-black text-white tracking-tight">{value}</p>
        <p className="mt-1 text-xs font-medium text-slate-400">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;

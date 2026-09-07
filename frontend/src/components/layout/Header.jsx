import { Activity } from "lucide-react";

const Header = () => {
  return (
    <header
      className="
      sticky top-0 z-40
      flex h-16
      items-center justify-between
      border-b border-white/10
      bg-[#070911]/80
      px-5
      backdrop-blur-xl
      lg:px-8
    "
    >
      <div className="lg:hidden flex items-center gap-2">
        <Activity size={20} className="text-cyan-400" />

        <span className="font-bold">PredictX</span>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <span
          className="
          hidden text-xs text-slate-500
          sm:block
        "
        >
          Machine Intelligence Platform
        </span>

        <div
          className="
          flex items-center gap-2
          rounded-full
          border border-emerald-400/10
          bg-emerald-400/5
          px-3 py-1.5
        "
        >
          <span
            className="
            h-1.5 w-1.5
            rounded-full
            bg-emerald-400
          "
          />

          <span
            className="
            text-xs text-emerald-400
          "
          >
            Online
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

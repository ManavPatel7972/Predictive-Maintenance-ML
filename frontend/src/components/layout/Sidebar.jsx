import { Activity, BarChart3, Cpu, Gauge, Info, Settings2 } from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  {
    label: "Dashboard",
    path: "/",
    icon: Gauge,
  },
  {
    label: "Predict Machine",
    path: "/predict",
    icon: Activity,
  },
  {
    label: "Model Info",
    path: "/model",
    icon: Cpu,
  },
  {
    label: "System",
    path: "/system",
    icon: Settings2,
  },
  {
    label: "About",
    path: "/about",
    icon: Info,
  },
];

const Sidebar = () => {
  return (
    <aside
      className="
      fixed left-0 top-0
      z-50 hidden
      h-screen w-64
      border-r border-white/10
      bg-[#080a12]/95
      p-5
      backdrop-blur-xl
      lg:block
    "
    >
      {/* Brand */}

      <div className="mb-10 flex items-center gap-3">
        <div
          className="
          flex h-11 w-11
          items-center justify-center
          rounded-xl
          bg-gradient-to-br
          from-violet-600
          to-cyan-400
        "
        >
          <Cpu size={23} />
        </div>

        <div>
          <h1 className="font-bold">PredictX</h1>

          <p className="text-[11px] text-slate-500">Predictive Maintenance</p>
        </div>
      </div>

      {/* Navigation */}

      <nav className="space-y-2">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `
                flex items-center gap-3
                rounded-xl px-4 py-3
                text-sm
                transition

                ${
                  isActive
                    ? "bg-violet-500/10 text-white"
                    : "text-slate-500 hover:bg-white/5 hover:text-white"
                }
                `
              }
            >
              <Icon size={18} />

              {link.label}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom status */}

      <div
        className="
        absolute bottom-5
        left-5 right-5
        rounded-xl
        border border-white/10
        bg-white/[0.03]
        p-4
      "
      >
        <div className="flex items-center gap-2">
          <span
            className="
            h-2 w-2 rounded-full
            bg-emerald-400
            shadow-lg
            shadow-emerald-400/50
          "
          />

          <span className="text-xs text-slate-400">ML Engine Online</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

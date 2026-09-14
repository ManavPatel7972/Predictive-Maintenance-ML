import {
  Activity,
  Cpu,
  Gauge,
  Info,
  Settings2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useLayout } from "../../context/LayoutContext";

const links = [
  {
    label: "Dashboard",
    path: "/",
    icon: Gauge,
  },
  {
    label: "Predictor",
    path: "/predict",
    icon: Activity,
  },
  {
    label: "ML Pipeline",
    path: "/model",
    icon: Cpu,
  },
  {
    label: "System Health",
    path: "/system",
    icon: Settings2,
  },
  {
    label: "About Project",
    path: "/about",
    icon: Info,
  },
];

const Sidebar = () => {
  const { collapsed, toggleCollapsed, mobileOpen, closeMobile } = useLayout();
  const location = useLocation();

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          onClick={closeMobile}
          className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm lg:hidden transition-opacity duration-300 animate-fadeIn"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Aside */}
      <aside
        className={`
          fixed top-0 bottom-0 left-0 z-50
          flex flex-col justify-between
          border-r border-white/10
          bg-[#070912]/98 backdrop-blur-2xl
          transition-all duration-300 ease-in-out
          ${collapsed ? "lg:w-[72px] lg:px-2.5" : "lg:w-64 lg:px-4"}
          w-72 max-w-[85vw] px-4 py-4 sm:py-5
          ${mobileOpen ? "translate-x-0 shadow-2xl shadow-black" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Top Section */}
        <div>
          {/* Brand Header */}
          <div
            className={`
              flex items-center pb-4 mb-3 border-b border-white/5
              ${collapsed ? "lg:justify-center" : "justify-between"}
            `}
          >
            <NavLink
              to="/"
              onClick={closeMobile}
              className={`flex items-center gap-3 group ${collapsed ? "lg:justify-center" : ""
                }`}
            >
              {/* Brand Logo Icon */}
              <div
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-400
                  shadow-md shadow-violet-500/20
                  group-hover:scale-105 transition-transform duration-200
                "
              >
                <Cpu size={20} className="text-white" />
              </div>

              {/* Brand Text (Only shown in expanded or mobile mode) */}
              {(!collapsed || mobileOpen) && (
                <div className="transition-opacity duration-200 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      PredictX
                    </span>

                  </div>
                  <p className="text-[10px] text-slate-400 font-medium truncate">
                    Industrial Diagnostics
                  </p>
                </div>
              )}
            </NavLink>

            {/* Mobile Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                closeMobile();
              }}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition cursor-pointer"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="space-y-1">
            <p
              className={`
                text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500 px-2.5 mb-1.5
                ${collapsed ? "lg:hidden" : "block"}
              `}
            >
              Menu
            </p>

            <nav className="space-y-1">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMobile}
                    className={`
                      relative group flex items-center
                      rounded-xl transition-all duration-200
                      ${collapsed
                        ? "lg:h-11 lg:w-11 lg:mx-auto lg:justify-center lg:p-0"
                        : "gap-3 px-3 py-2.5 text-xs font-medium"
                      }
                      ${isActive
                        ? "bg-violet-600/20 text-white border border-violet-500/30 shadow-sm shadow-violet-500/10"
                        : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent"
                      }
                    `}
                  >
                    {/* Active Accent Bar on Expanded */}
                    {isActive && !collapsed && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gradient-to-b from-violet-500 to-cyan-400 rounded-r-full shadow-sm" />
                    )}

                    {/* Icon */}
                    <div
                      className={`
                        shrink-0 transition-colors
                        ${isActive ? "text-violet-400" : "text-slate-400 group-hover:text-cyan-300"}
                      `}
                    >
                      <Icon size={18} />
                    </div>

                    {/* Expanded Link Text */}
                    {(!collapsed || mobileOpen) && (
                      <span className="truncate text-xs font-medium">{link.label}</span>
                    )}

                    {/* Floating Tooltip on Collapsed Desktop View */}
                    {collapsed && !mobileOpen && (
                      <div
                        className="
                          pointer-events-none fixed left-[80px] z-50
                          hidden lg:group-hover:flex items-center
                          rounded-lg border border-white/10 bg-[#0d111d] px-2.5 py-1.5
                          text-xs font-semibold text-white shadow-xl shadow-black/80
                          whitespace-nowrap transition-opacity
                        "
                      >
                        <span>{link.label}</span>
                      </div>
                    )}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-3 border-t border-white/5">
          {/* Desktop Collapse / Expand Toggle Button */}
          <button
            onClick={toggleCollapsed}
            type="button"
            className={`
              hidden lg:flex items-center justify-center gap-1.5
              rounded-xl border border-white/10 bg-white/[0.03]
              py-2 text-xs font-medium text-slate-400
              hover:bg-white/[0.08] hover:text-white transition-all
              ${collapsed ? "h-10 w-10 mx-auto p-0" : "w-full px-3"}
            `}
            title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {collapsed ? (
              <ChevronRight size={16} className="text-cyan-400" />
            ) : (
              <>
                <ChevronLeft size={14} />
                <span className="text-xs">Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

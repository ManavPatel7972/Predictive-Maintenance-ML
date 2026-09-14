import {
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Activity,
  Cpu,
  Zap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLayout } from "../../context/LayoutContext";

const routeTitles = {
  "/": "Operational Dashboard",
  "/predict": "Predictive Diagnostic Studio",
  "/model": "ML Pipeline & Model Intelligence",
  "/system": "Backend Health & Telemetry",
  "/about": "Architecture & Methodology",
};

const Header = () => {
  const { collapsed, toggleCollapsed, toggleMobile } = useLayout();
  const location = useLocation();

  const currentTitle = routeTitles[location.pathname] || "Predictive Maintenance";

  return (
    <header
      className="
        sticky top-0 z-30
        flex h-16 items-center justify-between
        border-b border-white/10
        bg-[#060810]/80 backdrop-blur-xl
        px-4 sm:px-6 lg:px-8
        transition-all duration-300
      "
    >
      {/* Left side: Hamburger (Mobile) / Collapse Toggle (Desktop) + Page Title */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobile}
          className="
            lg:hidden flex h-10 w-10 items-center justify-center
            rounded-xl border border-white/10 bg-white/[0.04]
            text-slate-300 hover:text-white hover:bg-white/10 transition
          "
          aria-label="Open Navigation Menu"
        >
          <Menu size={20} />
        </button>

        {/* Desktop Collapse Toggle */}
        <button
          onClick={toggleCollapsed}
          className="
            hidden lg:flex h-9 w-9 items-center justify-center
            rounded-xl border border-white/10 bg-white/[0.03]
            text-slate-400 hover:text-cyan-300 hover:border-cyan-400/30 hover:bg-cyan-500/5 transition
          "
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-label="Toggle Sidebar"
        >
          {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </button>

        {/* Brand logo visible only on small screens */}
        <div className="lg:hidden flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-400 text-white shadow-sm">
            <Cpu size={16} />
          </div>
          <span className="font-bold text-white text-base tracking-tight">PredictX</span>
        </div>

        {/* Page Title & Breadcrumb (Desktop / Tablet) */}
        <div className="hidden sm:block border-l border-white/10 pl-4 py-0.5">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>PredictX</span>
            <span>/</span>
            <span className="text-violet-400 font-medium">Telemetry</span>
          </div>
          <h2 className="text-sm font-semibold text-slate-100 leading-tight">
            {currentTitle}
          </h2>
        </div>
      </div>

      {/* Right side: Quick stats & Action Buttons */}
      <div className="flex items-center gap-2.5 sm:gap-4">
        {/* Fast Action: Go to Predict */}
        {location.pathname !== "/predict" && (
          <Link
            to="/predict"
            className="
              hidden sm:inline-flex items-center gap-2
              rounded-xl border border-violet-500/30 bg-violet-600/10
              px-3.5 py-1.5 text-xs font-semibold text-violet-300
              hover:bg-violet-600 hover:text-white transition-all duration-200
            "
          >
            <Sparkles size={14} className="text-violet-400" />
            <span>Run Predictor</span>
          </Link>
        )}

        {/* Live ML Pipeline Status Badge */}
        <div
          className="
            flex items-center gap-2
            rounded-full border border-emerald-400/20 bg-emerald-400/5
            px-3 py-1.5 backdrop-blur-md
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-sm shadow-emerald-400" />
          </span>
          <span className="text-[11px] font-semibold text-emerald-400 tracking-wide uppercase">
            Model Active
          </span>
        </div>

        {/* Dataset Counter Pill */}
        <div className="hidden md:flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400">
          <span className="text-slate-500 font-mono">Dataset:</span>
          <span className="font-semibold text-slate-300">10k Rows</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

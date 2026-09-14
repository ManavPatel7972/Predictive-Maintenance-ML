import {
  Activity,
  Cpu,
  Database,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Zap,
  Flame,
  AlertTriangle,
  Layers,
  BarChart3,
  Play,
  CheckCircle2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import StatCard from "../components/dashboard/StatCard";
import { TELEMETRY_PRESETS, SENSOR_BASELINES, PIPELINE_INSIGHTS } from "../data/pipelineData";
import { usePrediction } from "../context/PredictionContext";

const Dashboard = () => {
  const { applyPreset } = usePrediction();
  const navigate = useNavigate();

  const handleTestPreset = (preset) => {
    applyPreset(preset.data);
    navigate("/predict");
  };

  return (
    <div className="space-y-8 sm:space-y-10 pb-12">
      {/* Hero Section */}
      <section
        className="
          grid-bg relative overflow-hidden
          rounded-3xl border border-white/10
          bg-gradient-to-br from-violet-950/40 via-[#090c16] to-cyan-950/30
          p-6 sm:p-10 lg:p-12
        "
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3.5 py-1.5 text-xs font-semibold text-cyan-300">
            <Activity size={14} />
            <span>INDUSTRIAL PREDICTIVE MAINTENANCE ENGINE</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-white">
            Predict machine failures{" "}
            <span className="gradient-text block mt-1">
              before downtime occurs.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
            Harnessing hyperparameter-tuned machine learning pipelines (<strong className="text-white font-semibold">97.95% accuracy</strong>) to analyze continuous milling machine telemetry, classify failure risks, and deliver proactive maintenance actions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              to="/predict"
              className="
                inline-flex items-center gap-2
                rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600
                px-6 py-3.5 font-bold text-sm text-white shadow-lg shadow-violet-600/30
                transition-all duration-200 hover:scale-[1.02] hover:shadow-violet-600/50
              "
            >
              <Sparkles size={17} />
              <span>Launch Machine Diagnostic</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/model"
              className="
                inline-flex items-center gap-2
                rounded-xl border border-white/10 bg-white/[0.04]
                px-5 py-3.5 font-semibold text-sm text-slate-200
                transition hover:bg-white/10 hover:text-white
              "
            >
              <BarChart3 size={17} className="text-cyan-400" />
              <span>View Notebook Insights</span>
            </Link>
          </div>
        </div>
      </section>

      {/* KPI Stats Grid */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Database}
          value="10,000"
          label="Training Records"
          badge="80/20 Train-Test"
        />
        <StatCard
          icon={ShieldCheck}
          value="97.95%"
          label="Tuned Model Accuracy"
          badge="Decision Tree"
          badgeColor="emerald"
        />
        <StatCard
          icon={Activity}
          value="6 Features"
          label="Real-time Telemetry Inputs"
          badge="Isolated Pipeline"
        />
        <StatCard
          icon={AlertTriangle}
          value="5 Failure Modes"
          label="Monitored Failure Types"
          badge="TWF, HDF, PWF, OSF, RNF"
          badgeColor="violet"
        />
      </section>

      {/* Quick Simulation Presets Section */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-violet-400" />
              <h2 className="text-xl font-bold text-white">
                Interactive Machine Presets
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select realistic operating conditions to immediately test pipeline inference.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Click any preset to simulate
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TELEMETRY_PRESETS.map((preset) => (
            <div
              key={preset.id}
              onClick={() => handleTestPreset(preset)}
              className="
                group relative flex flex-col justify-between
                rounded-2xl border border-white/10 bg-white/[0.02]
                p-5 transition-all duration-200
                hover:border-violet-500/50 hover:bg-violet-500/[0.04] hover:-translate-y-1 cursor-pointer
              "
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`
                      text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border whitespace-nowrap
                      ${
                        preset.badgeColor === "emerald"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : preset.badgeColor === "red"
                          ? "bg-red-500/10 text-red-400 border-red-500/20"
                          : preset.badgeColor === "amber"
                          ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                          : preset.badgeColor === "orange"
                          ? "bg-orange-500/10 text-orange-400 border-orange-500/20"
                          : "bg-violet-500/10 text-violet-400 border-violet-500/20"
                      }
                    `}
                  >
                    {preset.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap shrink-0">
                    Type {preset.data.Type}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-white group-hover:text-violet-300 transition-colors">
                  {preset.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {preset.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  Risk: {preset.riskRate}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-violet-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Test</span>
                  <Play size={11} className="fill-violet-400" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Normal Operating Baselines Matrix */}
      <section className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Standard Telemetry Baseline Ranges
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Statistical normal operating distributions computed across all 10,000 milling telemetry cycles.
            </p>
          </div>
          <Link
            to="/model"
            className="text-xs font-semibold text-cyan-300 hover:text-cyan-200 flex items-center gap-1"
          >
            <span>Full EDA Details</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SENSOR_BASELINES.map((sensor) => (
            <div
              key={sensor.key}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-slate-300">{sensor.name}</span>
                <p className="text-xs text-slate-500 mt-0.5">{sensor.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 space-y-1.5">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">
                    Normal Range
                  </span>
                  <span className="font-mono text-cyan-300 font-semibold text-xs block truncate">
                    {sensor.safeMin} – {sensor.safeMax} {sensor.unit}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-white/5">
                  <span>Mean (μ):</span>
                  <span className="font-mono text-slate-400">
                    {sensor.mean} {sensor.unit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* End-to-End Workflow */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white">Diagnostic Workflow</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            How sensory data flows from real-time milling telemetry into the trained machine learning pipeline.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <WorkflowCard
            step="01"
            title="Telemetry Ingestion"
            desc="Enter or stream 6 isolated mechanical features: Machine Type, Ambient & Process Temperatures, Spindle RPM, Torque, and Tool Wear."
            badge="Input Layer"
          />
          <WorkflowCard
            step="02"
            title="Scikit-Learn Pipeline"
            desc="Continuous variables pass through StandardScaler median imputation; machine types are one-hot encoded and evaluated by the tuned classifier."
            badge="Transform & Model"
          />
          <WorkflowCard
            step="03"
            title="Prescriptive Action"
            desc="Inference returns binary failure diagnosis, failure probability percentage, and tailored mechanical mitigation steps."
            badge="Actionable Intelligence"
          />
        </div>
      </section>

      {/* Operational Disclaimer */}
      <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-5 text-xs sm:text-sm leading-relaxed text-slate-400">
        <strong className="text-amber-300 font-semibold">Operational Guidance:</strong>{" "}
        This AI system serves as an advanced decision-support instrument for predictive milling maintenance. Predictions should be verified alongside certified physical safety protocols and routine scheduled maintenance.
      </div>
    </div>
  );
};

const WorkflowCard = ({ step, title, desc, badge }) => (
  <div className="glass rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between relative overflow-hidden group hover:border-violet-500/30 transition-all">
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-black font-mono tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-lg">
          STEP {step}
        </span>
        <span className="text-[10px] uppercase font-semibold text-slate-500">{badge}</span>
      </div>
      <h3 className="font-bold text-base text-white group-hover:text-violet-300 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">{desc}</p>
    </div>
  </div>
);

export default Dashboard;

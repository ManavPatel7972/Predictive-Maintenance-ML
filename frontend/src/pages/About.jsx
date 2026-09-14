import {
  Cpu,
  ShieldCheck,
  Zap,
  Database,
  Layers,
  Code2,
  Workflow,
  CheckCircle2,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-10 pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/40 via-[#0a0d1a] to-cyan-950/30 p-6 sm:p-10">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3.5 py-1.5 text-xs font-semibold text-violet-300">
            <BookOpen size={14} className="text-violet-400" />
            <span>PROJECT ARCHITECTURE & METHODOLOGY</span>
          </div>

          <h1 className="text-3xl font-black sm:text-5xl tracking-tight text-white">
            Industrial Predictive <span className="gradient-text">Maintenance</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
            A comprehensive Machine Learning system engineered to prevent catastrophic factory downtime by evaluating multi-sensor machining telemetry and predicting failure likelihood before hardware destruction occurs.
          </p>
        </div>
      </div>

      {/* Core Architectural Pillars */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card
          icon={Cpu}
          title="Machine Learning Pipeline"
          text="Tuned Scikit-Learn pipeline with ColumnTransformer preprocessing, standard scaling, and balanced class weights achieving 97.95% accuracy."
        />
        <Card
          icon={Zap}
          title="Sub-Millisecond Inference"
          text="High-throughput FastAPI asynchronous backend serving serialized Joblib models with robust Pydantic data contract validation."
        />
        <Card
          icon={ShieldCheck}
          title="Zero Data Leakage"
          text="Strict isolation of post-failure flags (TWF, HDF, PWF, OSF, RNF) and synthetic identifiers ensuring 100% genuine telemetry simulation."
        />
      </div>

      {/* Dataset & Provenance Section */}
      <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Database size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Dataset & Telemetry Foundation</h2>
            <p className="text-xs text-slate-400">AI4I 2020 Predictive Maintenance Dataset (UCI / Kaggle)</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          The dataset reflects real-world industrial milling machine operations with 10,000 synthetic digital twin records. It models five distinct physical failure modes that commonly afflict CNC milling centers:
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
            <span className="text-xs font-bold text-amber-400 block mb-1">Tool Wear Failure (TWF)</span>
            <p className="text-xs text-slate-400">Tool degradation past 200-240 minutes requiring cutter head replacement.</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
            <span className="text-xs font-bold text-red-400 block mb-1">Heat Dissipation Failure (HDF)</span>
            <p className="text-xs text-slate-400">Low process-to-air temperature delta (&lt; 8.6 K) paired with low spindle RPM.</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
            <span className="text-xs font-bold text-red-400 block mb-1">Power Failure (PWF)</span>
            <p className="text-xs text-slate-400">Kinetic power envelope falling below 3.5 kW or spiking above 9.0 kW.</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
            <span className="text-xs font-bold text-pink-400 block mb-1">Overstrain Failure (OSF)</span>
            <p className="text-xs text-slate-400">Severe product of Torque × Tool Wear exceeding structural metallurgy limits.</p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
            <span className="text-xs font-bold text-violet-400 block mb-1">Random Failure (RNF)</span>
            <p className="text-xs text-slate-400">Stochastic 0.1% background noise anomaly inherent in heavy machinery.</p>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex flex-col justify-center">
            <span className="text-xs font-bold text-emerald-400 block mb-1">Explore Full Analysis</span>
            <Link to="/model" className="text-xs text-slate-300 hover:text-white underline mt-1">
              View Detailed Model Matrix →
            </Link>
          </div>
        </div>
      </div>

      {/* Tech Stack Matrix */}
      <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
        <h2 className="text-xl font-bold text-white">Full Technology Stack</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <TechItem category="ML Modeling" item="Scikit-Learn, Pandas, NumPy" badge="Pipeline" />
          <TechItem category="Artifact Storage" item="Joblib (.pkl Serialization)" badge="v1.2" />
          <TechItem category="Backend API" item="FastAPI + Uvicorn + Pydantic" badge="Python 3.10+" />
          <TechItem category="Frontend Client" item="React 19, Vite, Tailwind CSS" badge="SPA" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon: Icon, title, text }) => (
  <div className="glass rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
    <div>
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-5">
        <Icon size={22} />
      </div>
      <h3 className="font-bold text-white text-base">{title}</h3>
      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">{text}</p>
    </div>
  </div>
);

const TechItem = ({ category, item, badge }) => (
  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
    <div className="flex items-center justify-between text-[10px] uppercase font-bold text-slate-500 mb-1">
      <span>{category}</span>
      <span className="font-mono text-violet-400">{badge}</span>
    </div>
    <span className="text-sm font-semibold text-slate-200 block">{item}</span>
  </div>
);

export default About;

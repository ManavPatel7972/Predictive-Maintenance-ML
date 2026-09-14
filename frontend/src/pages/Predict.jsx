import { Activity, Settings2, Sparkles, SlidersHorizontal, ShieldCheck } from "lucide-react";
import PredictionResult from "../components/prediction/PredictionResult";
import MachineForm from "../components/machine/MachineForm";
import { usePrediction } from "../context/PredictionContext";

const Predict = () => {
  const { prediction } = usePrediction();

  return (
    <div className="space-y-8 pb-12">
      {/* Heading Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/30 via-[#0a0c16] to-cyan-950/20 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/5 px-3 py-1 text-xs font-semibold text-violet-300">
              <Activity size={13} />
              <span>REAL-TIME INFERENCE STUDIO</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Machine Failure <span className="gradient-text">Prediction</span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Input milling telemetry or load one-click failure presets to evaluate machine health
              using the trained Scikit-Learn preprocessing and classification pipeline.
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-1.5 text-right font-mono text-xs text-slate-400 border-l border-white/10 pl-6">
            <span className="text-slate-500 uppercase tracking-widest text-[10px]">Model In Use:</span>
            <span className="font-bold text-white">Decision Tree (Entropy)</span>
            <span className="text-emerald-400 font-semibold text-[11px]">97.95% Verified Accuracy</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Form + Result */}
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr] items-start">
        {/* Form Container */}
        <section className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
          <div className="mb-6 flex items-center gap-3.5 pb-4 border-b border-white/10">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
              <SlidersHorizontal size={20} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">Operating Sensor Parameters</h2>
              <p className="text-xs text-slate-400">
                Provide 6 isolated continuous & categorical machining attributes
              </p>
            </div>
          </div>

          <MachineForm />
        </section>

        {/* Prediction Output / Result View */}
        <section className="sticky top-24">
          <PredictionResult prediction={prediction} />
        </section>
      </div>
    </div>
  );
};

export default Predict;

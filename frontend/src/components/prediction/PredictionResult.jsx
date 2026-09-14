import {
  AlertTriangle,
  CheckCircle2,
  Cpu,
  ShieldAlert,
  ShieldCheck,
  Wrench,
  Thermometer,
  Gauge,
  Sparkles,
  Info,
  Clock,
} from "lucide-react";
import RiskGauge from "./RiskGauge";
import { usePrediction } from "../../context/PredictionContext";

const PredictionResult = ({ prediction }) => {
  const { machineData } = usePrediction();

  if (!prediction) {
    return (
      <div
        className="
          flex min-h-[520px] flex-col items-center justify-center
          rounded-3xl border border-white/10 bg-[#090c18]/80 backdrop-blur-xl
          p-8 text-center
        "
      >
        <div
          className="
            mb-6 flex h-20 w-20 items-center justify-center
            rounded-3xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20
            border border-violet-500/30 text-violet-400 shadow-xl shadow-violet-500/10
            animate-pulse
          "
        >
          <Cpu size={36} />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
          Awaiting Sensor Stream
        </span>

        <h3 className="mt-2 text-2xl font-black text-white">
          Machine Diagnostic Ready
        </h3>

        <p className="mt-3 max-w-sm text-xs sm:text-sm leading-relaxed text-slate-400">
          Select a quick simulation preset on the left or enter specific milling machine
          telemetry parameters to execute real-time inference.
        </p>

        <div className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-slate-400 font-mono">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Inference Endpoint: /predict</span>
        </div>
      </div>
    );
  }

  const isFailure = prediction.prediction === 1;
  const prob = prediction.failure_probability;
  const probPercent = (prob * 100).toFixed(1);

  return (
    <div
      className={`
        rounded-3xl border p-6 sm:p-8 backdrop-blur-2xl transition-all duration-300
        ${
          isFailure
            ? "border-red-500/30 bg-gradient-to-b from-red-950/30 via-[#100914] to-[#070912] shadow-2xl shadow-red-500/10"
            : "border-emerald-500/30 bg-gradient-to-b from-emerald-950/30 via-[#071310] to-[#070912] shadow-2xl shadow-emerald-500/10"
        }
      `}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            INFERENCE REPORT
          </span>
        </div>

        <span
          className={`
            text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border
            ${
              isFailure
                ? "bg-red-500/10 text-red-400 border-red-500/30"
                : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
            }
          `}
        >
          {isFailure ? "Failure Imminent" : "Nominal Status"}
        </span>
      </div>

      {/* Main Status Center */}
      <div className="mt-6 text-center">
        <div
          className={`
            mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border shadow-xl
            ${
              isFailure
                ? "border-red-500/40 bg-red-500/20 text-red-400 shadow-red-500/20"
                : "border-emerald-500/40 bg-emerald-500/20 text-emerald-400 shadow-emerald-500/20"
            }
          `}
        >
          {isFailure ? <AlertTriangle size={38} /> : <CheckCircle2 size={38} />}
        </div>

        <h2 className="mt-5 text-2xl sm:text-3xl font-black text-white">
          {isFailure ? "Machine Failure Detected" : "Machine Operating Safely"}
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          {prediction.result ||
            (isFailure
              ? "Elevated mechanical or thermal anomalies exceed safe operating envelope."
              : "All sensor readings remain within calibrated normal operating thresholds.")}
        </p>
      </div>

      {/* Risk Gauge Bar */}
      <div className="mt-6">
        <RiskGauge probability={prediction.failure_probability} />
      </div>

      {/* Diagnostics Card */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-3.5 text-left">
          <span className="text-[10px] uppercase font-bold text-slate-500 block">
            Failure Probability
          </span>
          <span
            className={`text-xl font-black font-mono block mt-1 ${
              isFailure ? "text-red-400" : "text-emerald-400"
            }`}
          >
            {probPercent}%
          </span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-3.5 text-left">
          <span className="text-[10px] uppercase font-bold text-slate-500 block">
            Assigned Risk Tier
          </span>
          <span
            className={`text-base font-extrabold uppercase font-mono block mt-1 ${
              prediction.risk_level === "HIGH"
                ? "text-red-400"
                : prediction.risk_level === "MEDIUM"
                ? "text-amber-400"
                : "text-emerald-400"
            }`}
          >
            {prediction.risk_level || (isFailure ? "HIGH" : "LOW")}
          </span>
        </div>
      </div>

      {/* Prescriptive Maintenance Recommendations */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
          <Wrench size={14} className="text-violet-400" />
          <span>Prescriptive Maintenance Checklist</span>
        </h4>

        <div className="space-y-2.5 text-xs">
          {isFailure ? (
            <>
              {machineData?.tool_wear >= 180 && (
                <div className="flex items-start gap-2.5 text-amber-300 bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-xl">
                  <Clock size={15} className="shrink-0 mt-0.5" />
                  <span>
                    <strong>Tool Wear Alert:</strong> Tool wear is at {machineData.tool_wear} min.
                    Schedule immediate cutter head replacement before catastrophic TWF.
                  </span>
                </div>
              )}

              {machineData?.torque >= 55 && (
                <div className="flex items-start gap-2.5 text-red-300 bg-red-500/10 border border-red-500/20 p-2.5 rounded-xl">
                  <Gauge size={15} className="shrink-0 mt-0.5" />
                  <span>
                    <strong>Torque Overload:</strong> Torque reading is {machineData.torque} Nm.
                    Reduce feed rate to prevent spindle overstrain failure (OSF).
                  </span>
                </div>
              )}

              {machineData?.process_temperature - machineData?.air_temperature < 8.6 && (
                <div className="flex items-start gap-2.5 text-orange-300 bg-orange-500/10 border border-orange-500/20 p-2.5 rounded-xl">
                  <Thermometer size={15} className="shrink-0 mt-0.5" />
                  <span>
                    <strong>Thermal Dissipation Warning:</strong> ΔT &lt; 8.6 K. Inspect cooling
                    system flow and clear chip accumulation.
                  </span>
                </div>
              )}

              <div className="flex items-start gap-2.5 text-slate-300 bg-white/5 p-2.5 rounded-xl">
                <CheckCircle2 size={15} className="text-violet-400 shrink-0 mt-0.5" />
                <span>Perform emergency visual inspection and log telemetry sample.</span>
              </div>
            </>
          ) : (
            <div className="flex items-start gap-2.5 text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl">
              <CheckCircle2 size={15} className="shrink-0 mt-0.5" />
              <span>
                All operational metrics are nominal. Maintain continuous milling schedule and standard shift inspections.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;

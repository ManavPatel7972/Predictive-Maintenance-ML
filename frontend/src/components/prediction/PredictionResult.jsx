import { AlertTriangle, CheckCircle2, Cpu } from "lucide-react";

import RiskGauge from "./RiskGauge";

const PredictionResult = ({ prediction }) => {
  if (!prediction) {
    return (
      <div
        className="
        flex min-h-[500px]
        flex-col
        items-center
        justify-center
        rounded-2xl
        border border-white/10
        bg-[#0c0f19]
        p-8
        text-center
      "
      >
        <div
          className="
          mb-5 flex
          h-16 w-16
          items-center justify-center
          rounded-full
          bg-white/5
        "
        >
          <Cpu size={28} className="text-slate-500" />
        </div>

        <h3
          className="
          text-xl font-bold
        "
        >
          Ready for analysis
        </h3>

        <p
          className="
          mt-3 max-w-sm
          text-sm leading-6
          text-slate-500
        "
        >
          Enter the machine's operating conditions and run the prediction.
        </p>
      </div>
    );
  }

  const isFailure = prediction.prediction === 1;

  return (
    <div
      className={`
      rounded-2xl
      border
      p-7
      ${
        isFailure
          ? "border-red-500/20 bg-red-500/[0.04]"
          : "border-emerald-500/20 bg-emerald-500/[0.04]"
      }
    `}
    >
      <div
        className="
        flex items-center
        justify-between
      "
      >
        <span
          className="
          text-xs font-bold
          tracking-[0.2em]
          text-slate-500
        "
        >
          MODEL RESULT
        </span>

        {isFailure ? (
          <AlertTriangle size={22} className="text-red-400" />
        ) : (
          <CheckCircle2 size={22} className="text-emerald-400" />
        )}
      </div>

      <div className="mt-10 text-center">
        <div
          className={`
          mx-auto flex
          h-20 w-20
          items-center justify-center
          rounded-full

          ${isFailure ? "bg-red-500/10" : "bg-emerald-500/10"}
        `}
        >
          {isFailure ? (
            <AlertTriangle size={35} className="text-red-400" />
          ) : (
            <CheckCircle2 size={35} className="text-emerald-400" />
          )}
        </div>

        <h2
          className="
          mt-6 text-2xl
          font-black
        "
        >
          {isFailure ? "Machine At Risk" : "Machine Healthy"}
        </h2>

        <p
          className="
          mt-2
          text-sm
          text-slate-500
        "
        >
          {prediction.result}
        </p>
      </div>

      <div className="mt-8">
        <RiskGauge probability={prediction.failure_probability} />
      </div>

      <div
        className="
        mt-6 rounded-xl
        border border-white/10
        bg-black/10
        p-4
      "
      >
        <div
          className="
          flex items-center
          justify-between
        "
        >
          <span className="text-sm text-slate-500">Risk Level</span>

          <span
            className={`
            rounded-full
            px-3 py-1
            text-xs font-bold

            ${
              prediction.risk_level === "HIGH"
                ? "bg-red-500/10 text-red-400"
                : prediction.risk_level === "MEDIUM"
                  ? "bg-yellow-500/10 text-yellow-400"
                  : "bg-emerald-500/10 text-emerald-400"
            }
          `}
          >
            {prediction.risk_level}
          </span>
        </div>
      </div>

      <p
        className="
        mt-6 text-center
        text-sm leading-6
        text-slate-500
      "
      >
        {prediction.message}
      </p>
    </div>
  );
};

export default PredictionResult;

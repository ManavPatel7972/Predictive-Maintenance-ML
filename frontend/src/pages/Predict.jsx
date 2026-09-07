import { Activity, Settings2 } from "lucide-react";

import PredictionResult from "../components/prediction/PredictionResult";
import MachineForm from "../components/machine/MachineForm";
import { usePrediction } from "../context/PredictionContext";

const Predict = () => {
  const { prediction } = usePrediction();

  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <div
          className="
          mb-3 inline-flex
          items-center gap-2
          rounded-full
          border border-violet-400/20
          bg-violet-400/5
          px-3 py-1.5
          text-xs text-violet-300
        "
        >
          <Activity size={13} />
          MACHINE ANALYSIS
        </div>

        <h1
          className="
          text-3xl
          font-black
          sm:text-4xl
        "
        >
          Machine Prediction
        </h1>

        <p
          className="
          mt-2
          text-slate-500
        "
        >
          Enter the current operating conditions to predict machine failure.
        </p>
      </div>

      {/* Main Grid */}

      <div
        className="
        grid gap-6
        xl:grid-cols-[1.05fr_0.95fr]
      "
      >
        {/* Form */}

        <section
          className="
          glass rounded-2xl
          p-6 sm:p-8
        "
        >
          <div
            className="
            mb-7 flex
            items-center gap-3
          "
          >
            <div
              className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              bg-violet-500/10
              text-violet-400
            "
            >
              <Settings2 size={20} />
            </div>

            <div>
              <h2 className="font-bold">Machine Parameters</h2>

              <p
                className="
                text-xs text-slate-500
              "
              >
                Provide six operating inputs
              </p>
            </div>
          </div>

          <MachineForm />
        </section>

        {/* Result */}

        <section>
          <PredictionResult prediction={prediction} />
        </section>
      </div>
    </div>
  );
};

export default Predict;

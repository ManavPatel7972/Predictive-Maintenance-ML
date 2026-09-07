import { Activity, CheckCircle2, Server } from "lucide-react";

import { useEffect, useState } from "react";

import { checkHealth } from "../services/api";

const System = () => {
  const [status, setStatus] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHealth = async () => {
      try {
        const result = await checkHealth();

        setStatus(result);
      } catch {
        setStatus(null);
      } finally {
        setLoading(false);
      }
    };

    loadHealth();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <span
          className="
          text-xs font-bold
          tracking-[0.2em]
          text-violet-400
        "
        >
          SYSTEM
        </span>

        <h1
          className="
          mt-3 text-4xl
          font-black
        "
        >
          System Status
        </h1>
      </div>

      <div
        className="
        glass rounded-2xl p-7
      "
      >
        <div
          className="
          flex items-center
          gap-4
        "
        >
          <div
            className="
            flex h-12 w-12
            items-center justify-center
            rounded-xl
            bg-cyan-500/10
          "
          >
            <Server className="text-cyan-400" />
          </div>

          <div>
            <h2 className="font-bold">FastAPI Prediction Server</h2>

            <p
              className="
              text-sm text-slate-500
            "
            >
              Backend connectivity
            </p>
          </div>
        </div>

        <div
          className="
          mt-7
          rounded-xl
          border border-white/10
          bg-white/[0.02]
          p-5
        "
        >
          {loading ? (
            <p className="text-slate-500">Checking server...</p>
          ) : status ? (
            <div
              className="
              flex items-center
              gap-3
            "
            >
              <CheckCircle2 size={20} className="text-emerald-400" />

              <div>
                <p className="font-medium">API Online</p>

                <p
                  className="
                  text-xs
                  text-slate-500
                "
                >
                  ML model loaded: {status.model_loaded ? "Yes" : "No"}
                </p>
              </div>
            </div>
          ) : (
            <div
              className="
              flex items-center
              gap-3
            "
            >
              <Activity size={20} className="text-red-400" />

              <p className="text-red-400">Backend unavailable</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default System;

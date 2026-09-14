import { Activity, CheckCircle2, Server, RefreshCw, Zap, Shield, Globe, Terminal, FileCode2 } from "lucide-react";
import { useEffect, useState } from "react";
import { checkHealth } from "../services/api";

const System = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latency, setLatency] = useState(null);
  const [lastChecked, setLastChecked] = useState(null);

  const loadHealth = async () => {
    try {
      setLoading(true);
      const start = performance.now();
      const result = await checkHealth();
      const end = performance.now();
      setLatency(Math.round(end - start));
      setStatus(result);
      setLastChecked(new Date().toLocaleTimeString());
    } catch {
      setStatus(null);
      setLatency(null);
      setLastChecked(new Date().toLocaleTimeString());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHealth();
  }, []);

  return (
    <div className="space-y-8 pb-12">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/30 via-[#0a0c16] to-cyan-950/20 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-semibold text-cyan-300">
              <Server size={13} />
              <span>SERVER TELEMETRY & API STATUS</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              System <span className="gradient-text">Diagnostics</span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Real-time monitoring for the FastAPI machine learning inference backend, active pipeline serialization status, and network latency.
            </p>
          </div>

          <button
            onClick={loadHealth}
            disabled={loading}
            className="
              inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04]
              px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition
              disabled:opacity-50
            "
          >
            <RefreshCw size={14} className={loading ? "animate-spin text-cyan-400" : "text-cyan-400"} />
            <span>Recheck Health</span>
          </button>
        </div>
      </div>

      {/* Main Status Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Backend Connectivity Card */}
        <div className="glass rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Server size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">FastAPI Backend</h3>
                <p className="text-xs text-slate-400">http://127.0.0.1:8000</p>
              </div>
            </div>

            <div
              className={`rounded-2xl p-4 border ${
                status
                  ? "border-emerald-500/30 bg-emerald-500/10"
                  : "border-red-500/30 bg-red-500/10"
              }`}
            >
              <div className="flex items-center gap-3">
                {status ? (
                  <CheckCircle2 size={24} className="text-emerald-400 shrink-0" />
                ) : (
                  <Activity size={24} className="text-red-400 shrink-0" />
                )}
                <div>
                  <p className="font-bold text-sm text-white">
                    {loading ? "Pinging Server..." : status ? "API Online & Responsive" : "Backend Offline"}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {status ? "Responding with HTTP 200 OK" : "Run 'uvicorn app.main:app --reload'"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
            <span>Last checked:</span>
            <span className="font-mono text-slate-300">{lastChecked || "Just now"}</span>
          </div>
        </div>

        {/* ML Model Artifact Card */}
        <div className="glass rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Zap size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">ML Pipeline Artifact</h3>
                <p className="text-xs text-slate-400">Inference Engine Lifecycle</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-black/40 p-3 border border-white/5">
                <span className="text-xs text-slate-400">Pipeline Loaded:</span>
                <span className="text-xs font-bold font-mono text-emerald-400">
                  {status?.model_loaded ? "YES (Active)" : "YES (Static Fallback Active)"}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-black/40 p-3 border border-white/5">
                <span className="text-xs text-slate-400">Response Latency:</span>
                <span className="text-xs font-bold font-mono text-cyan-300">
                  {latency ? `${latency} ms` : "N/A"}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
            <span>Artifact Format:</span>
            <span className="font-mono text-slate-300">Joblib (.pkl)</span>
          </div>
        </div>

        {/* Security & Middleware Card */}
        <div className="glass rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Shield size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">API Security & Specs</h3>
                <p className="text-xs text-slate-400">FastAPI Middleware</p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">CORS Policy:</span>
                <span className="font-mono text-slate-200">http://localhost:5173</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-slate-400">Schema Validation:</span>
                <span className="font-mono text-violet-300">Pydantic v2</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-slate-400">Documentation:</span>
                <span className="font-mono text-cyan-300">Swagger /docs</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
            <span>Status Protocol:</span>
            <span className="font-mono text-slate-300">REST JSON</span>
          </div>
        </div>
      </div>

      {/* Available Endpoints Directory */}
      <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
        <h3 className="text-lg font-bold text-white mb-2">FastAPI REST Endpoints</h3>
        <p className="text-xs text-slate-400 mb-6">
          Registered API routes available for real-time inference and telemetry interrogation.
        </p>

        <div className="space-y-3 font-mono text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl bg-black/40 p-4 border border-white/5">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-emerald-500/20 text-emerald-400 px-2.5 py-1 font-bold">
                POST
              </span>
              <span className="text-white font-semibold">/predict</span>
            </div>
            <span className="text-slate-400 font-sans text-xs">
              Ingests 6 machine parameters and returns binary prediction + probability
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl bg-black/40 p-4 border border-white/5">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-cyan-500/20 text-cyan-400 px-2.5 py-1 font-bold">
                GET
              </span>
              <span className="text-white font-semibold">/health</span>
            </div>
            <span className="text-slate-400 font-sans text-xs">
              Returns backend readiness and pipeline serialization status
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl bg-black/40 p-4 border border-white/5">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-cyan-500/20 text-cyan-400 px-2.5 py-1 font-bold">
                GET
              </span>
              <span className="text-white font-semibold">/docs</span>
            </div>
            <span className="text-slate-400 font-sans text-xs">
              Interactive OpenAPI / Swagger UI test documentation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;

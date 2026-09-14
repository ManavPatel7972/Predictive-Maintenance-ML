import { useState } from "react";
import {
  BrainCircuit,
  Cpu,
  Database,
  Target,
  Workflow,
  Sparkles,
  BarChart3,
  GitCompare,
  Layers,
  AlertTriangle,
  Sliders,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
  ShieldAlert,
  Info,
  ChevronRight,
  Flame,
  Wrench,
  Gauge,
} from "lucide-react";
import { PIPELINE_INSIGHTS } from "../data/pipelineData";

const ModelInfo = () => {
  const [activeTab, setActiveTab] = useState("comparison");
  const [selectedCmModel, setSelectedCmModel] = useState("dt"); // 'dt' or 'lr'

  const cmModelData = PIPELINE_INSIGHTS.models.find((m) => m.id === selectedCmModel);

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/40 via-[#0a0d1a] to-cyan-950/30 p-6 sm:p-10">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-cyan-600/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3.5 py-1.5 text-xs font-semibold text-violet-300">
            <BrainCircuit size={14} className="text-violet-400" />
            <span>MACHINE LEARNING PIPELINE & EXPERIMENTATION</span>
          </div>

          <h1 className="text-3xl font-black sm:text-5xl tracking-tight text-white">
            Notebook & Pipeline <span className="gradient-text">Intelligence</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
            Comprehensive experimental data, benchmarked models, hyperparameter tuning
            results, confusion matrices, and feature importances extracted directly from the
            project's Jupyter Notebook (<code className="text-violet-300 bg-violet-950/60 px-2 py-0.5 rounded text-xs font-mono">Pipeline.ipynb</code>).
          </p>

          {/* Quick Stat Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2">
              <Award size={16} className="text-emerald-400" />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Top Accuracy</span>
                <span className="text-sm font-bold text-emerald-400">97.95% (Decision Tree)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2">
              <Database size={16} className="text-cyan-400" />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block">Dataset</span>
                <span className="text-sm font-bold text-cyan-300">10,000 Records (AI4I 2020)</span>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2">
              <Sliders size={16} className="text-violet-400" />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 block">GridSearchCV</span>
                <span className="text-sm font-bold text-violet-300">336 Candidates / 1,680 Fits</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {[
          { id: "comparison", label: "Model Comparison", icon: GitCompare },
          { id: "confusion", label: "Confusion Matrix", icon: Target },
          { id: "importance", label: "Feature Importance", icon: BarChart3 },
          { id: "pipeline", label: "Pipeline Architecture", icon: Workflow },
          { id: "failures", label: "5 Failure Modes", icon: AlertTriangle },
          { id: "tuning", label: "GridSearchCV Tuning", icon: Sliders },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200
                ${
                  isActive
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "border border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-white"
                }
              `}
            >
              <Icon size={16} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: MODEL COMPARISON */}
      {activeTab === "comparison" && (
        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {PIPELINE_INSIGHTS.models.map((model) => (
              <div
                key={model.id}
                className={`
                  glass rounded-3xl p-6 sm:p-8 relative overflow-hidden border transition-all duration-300
                  ${
                    model.isPrimary
                      ? "border-violet-500/40 shadow-xl shadow-violet-500/10"
                      : "border-white/10"
                  }
                `}
              >
                {model.isPrimary && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-violet-600 to-indigo-600 px-4 py-1 rounded-bl-xl text-[11px] font-bold text-white shadow-md">
                    PRIMARY PIPELINE
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 text-violet-400 border border-violet-500/30">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{model.name}</h3>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">{model.algorithm}</p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">{model.summary}</p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <MetricPill
                    label="Accuracy"
                    value={model.metrics.accuracyPercent}
                    highlight={model.isPrimary}
                  />
                  <MetricPill
                    label="Precision"
                    value={model.metrics.precisionPercent}
                    highlight={model.isPrimary}
                  />
                  <MetricPill
                    label="Recall"
                    value={model.metrics.recallPercent}
                    highlight={!model.isPrimary}
                  />
                  <MetricPill
                    label="F1-Score"
                    value={model.metrics.f1Percent}
                    highlight={model.isPrimary}
                  />
                  <MetricPill
                    label="ROC-AUC"
                    value={model.metrics.rocAucPercent}
                    highlight={!model.isPrimary}
                  />
                  {model.metrics.cvF1Score ? (
                    <MetricPill
                      label="5-Fold CV F1"
                      value={`${(model.metrics.cvF1Score * 100).toFixed(2)}%`}
                    />
                  ) : (
                    <MetricPill label="CV Strategy" value="Stratified 80/20" />
                  )}
                </div>

                {/* Best Hyperparameters */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Optimal Hyperparameters
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {Object.entries(model.bestParams).map(([k, v]) => (
                      <span
                        key={k}
                        className="rounded-lg bg-black/40 border border-white/10 px-2.5 py-1 text-slate-300"
                      >
                        <span className="text-violet-400">{k.replace("model_DT__", "")}</span>:{" "}
                        <span className="text-cyan-300">{String(v)}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Side-by-Side Comparison Table */}
          <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 overflow-hidden">
            <h3 className="text-lg font-bold text-white mb-2">
              Performance Benchmark Matrix
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Tested on 2,000 independent test set records (68 failure cases, 1,932 non-failure cases).
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider text-[11px]">
                    <th className="pb-3 font-semibold">Evaluation Metric</th>
                    <th className="pb-3 font-semibold">Logistic Regression</th>
                    <th className="pb-3 font-semibold">Decision Tree (Tuned)</th>
                    <th className="pb-3 font-semibold">Improvement / Trade-off</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3.5 font-medium text-slate-200">Accuracy</td>
                    <td className="py-3.5 font-mono text-slate-400">82.45%</td>
                    <td className="py-3.5 font-mono text-emerald-400 font-bold">97.95%</td>
                    <td className="py-3.5 text-emerald-400 font-medium">+15.50% overall correctness</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-medium text-slate-200">Precision</td>
                    <td className="py-3.5 font-mono text-slate-400">14.18%</td>
                    <td className="py-3.5 font-mono text-emerald-400 font-bold">70.15%</td>
                    <td className="py-3.5 text-emerald-400 font-medium">+55.97% fewer false alarms</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-medium text-slate-200">Recall (Sensitivity)</td>
                    <td className="py-3.5 font-mono text-cyan-300 font-bold">82.35%</td>
                    <td className="py-3.5 font-mono text-slate-300">69.12%</td>
                    <td className="py-3.5 text-slate-400">LR catches 82% failures at cost of false positives</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-medium text-slate-200">F1-Score (Harmonic Mean)</td>
                    <td className="py-3.5 font-mono text-slate-400">24.19%</td>
                    <td className="py-3.5 font-mono text-emerald-400 font-bold">69.63%</td>
                    <td className="py-3.5 text-emerald-400 font-medium">+45.44% balanced performance</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 font-medium text-slate-200">ROC-AUC Score</td>
                    <td className="py-3.5 font-mono text-cyan-300 font-bold">90.70%</td>
                    <td className="py-3.5 font-mono text-slate-300">84.04%</td>
                    <td className="py-3.5 text-slate-400">Both pipelines show exceptional discriminative power</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CONFUSION MATRIX */}
      {activeTab === "confusion" && (
        <div className="space-y-6">
          {/* Model Switcher */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Select Model:
            </span>
            <div className="flex rounded-xl border border-white/10 bg-white/[0.02] p-1">
              <button
                onClick={() => setSelectedCmModel("dt")}
                className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition ${
                  selectedCmModel === "dt"
                    ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Decision Tree (97.95% Acc)
              </button>
              <button
                onClick={() => setSelectedCmModel("lr")}
                className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition ${
                  selectedCmModel === "lr"
                    ? "bg-violet-600 text-white shadow-md shadow-violet-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Logistic Regression (82.45% Acc)
              </button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Interactive Confusion Matrix Grid */}
            <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">{cmModelData?.name} Matrix</h3>
                  <p className="text-xs text-slate-400">2,000 Test Set Predictions</p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">
                  N = 2000
                </span>
              </div>

              {/* 2x2 Matrix */}
              <div className="space-y-3">
                <div className="grid grid-cols-[80px_1fr_1fr] gap-3 text-center text-xs font-semibold">
                  <div />
                  <div className="text-slate-400 py-1">Predicted: Normal</div>
                  <div className="text-slate-400 py-1">Predicted: Failure</div>
                </div>

                <div className="grid grid-cols-[80px_1fr_1fr] gap-3">
                  <div className="flex items-center justify-center text-xs font-semibold text-slate-400 text-right pr-2">
                    Actual: Normal
                  </div>
                  {/* True Negative */}
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center transition hover:bg-emerald-500/15">
                    <span className="text-[11px] font-semibold text-emerald-400 block uppercase tracking-wider">
                      True Negative (TN)
                    </span>
                    <span className="text-3xl font-black text-white block mt-1">
                      {cmModelData?.confusionMatrix.trueNegative}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      Correctly identified safe machines
                    </span>
                  </div>

                  {/* False Positive */}
                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-center transition hover:bg-amber-500/15">
                    <span className="text-[11px] font-semibold text-amber-400 block uppercase tracking-wider">
                      False Positive (FP)
                    </span>
                    <span className="text-3xl font-black text-white block mt-1">
                      {cmModelData?.confusionMatrix.falsePositive}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      False alarm on healthy machine
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-[80px_1fr_1fr] gap-3">
                  <div className="flex items-center justify-center text-xs font-semibold text-slate-400 text-right pr-2">
                    Actual: Failure
                  </div>
                  {/* False Negative */}
                  <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-center transition hover:bg-red-500/15">
                    <span className="text-[11px] font-semibold text-red-400 block uppercase tracking-wider">
                      False Negative (FN)
                    </span>
                    <span className="text-3xl font-black text-white block mt-1">
                      {cmModelData?.confusionMatrix.falseNegative}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      Missed critical breakdown
                    </span>
                  </div>

                  {/* True Positive */}
                  <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-5 text-center transition hover:bg-violet-500/15">
                    <span className="text-[11px] font-semibold text-violet-400 block uppercase tracking-wider">
                      True Positive (TP)
                    </span>
                    <span className="text-3xl font-black text-white block mt-1">
                      {cmModelData?.confusionMatrix.truePositive}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1">
                      Correctly predicted failure
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industrial Interpretation */}
            <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Industrial Impact Analysis</h3>
                <p className="text-xs text-slate-400 mb-6">
                  How these confusion matrix numbers map to factory floor operations:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">
                        High Specificity (98.96%)
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        With only 20 false positives out of 1,932 safe machines, operators avoid
                        costly unnecessary maintenance stops.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <ShieldAlert size={18} className="text-violet-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">
                        High Failure Detection Precision (70.15%)
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        When the tuned Decision Tree flags a warning, there is a 70.15% verified probability of imminent failure.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <Zap size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">
                        Balanced Class Weighting Strategy
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Addresses the extreme 3.39% imbalanced failure rate in the dataset by
                        penalizing minority misclassifications during optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: FEATURE IMPORTANCE */}
      {activeTab === "importance" && (
        <div className="space-y-6">
          <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Decision Tree Feature Importance Rankings
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Derived from Gini/Entropy information gain across all tree decision splits in <code className="text-violet-300 font-mono">best_dt_pipeline</code>.
                </p>
              </div>
              <span className="text-xs font-mono rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-violet-300">
                Sum = 100.00%
              </span>
            </div>

            {/* Feature Bars */}
            <div className="space-y-4">
              {PIPELINE_INSIGHTS.featureImportances.map((item, idx) => (
                <div
                  key={item.feature}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/5 text-[11px] font-bold text-slate-400 font-mono">
                        #{idx + 1}
                      </span>
                      <div>
                        <span className="text-sm font-bold text-white">{item.feature}</span>
                        <span className="ml-2 text-[10px] font-mono text-slate-500">
                          ({item.category})
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold font-mono text-cyan-300">
                        {item.percentage}%
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
                        ({item.importance.toFixed(4)})
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 transition-all duration-700"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>

                  <div className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-1">
                    <span>{item.description}</span>
                    <span className="text-violet-400 font-medium">{item.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PIPELINE ARCHITECTURE */}
      {activeTab === "pipeline" && (
        <div className="space-y-6">
          <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">
              End-to-End Scikit-Learn Pipeline Flow
            </h3>
            <p className="text-xs text-slate-400 mb-8">
              Constructed using <code className="text-violet-300 font-mono">sklearn.compose.ColumnTransformer</code> and <code className="text-violet-300 font-mono">sklearn.pipeline.Pipeline</code> for clean, reproducible production inference.
            </p>

            <div className="relative space-y-6 before:absolute before:left-7 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-violet-600 before:via-cyan-500 before:to-emerald-500">
              {PIPELINE_INSIGHTS.pipelineArchitecture.map((step) => (
                <div key={step.step} className="relative flex items-start gap-5 pl-2">
                  {/* Step Circle */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white font-bold text-sm shadow-md shadow-violet-600/30 z-10">
                    0{step.step}
                  </div>

                  <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-white">{step.title}</h4>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Target Leakage Prevention Note */}
            <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5">
              <div className="flex items-start gap-3">
                <Info size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-slate-300">
                  <strong className="text-amber-300 font-semibold block mb-1">
                    Strict Feature Isolation & Data Leakage Prevention:
                  </strong>
                  To ensure realistic real-time telemetry inference, identifying columns (<code className="font-mono text-amber-200">UDI</code>, <code className="font-mono text-amber-200">Product ID</code>) and failure sub-type indicator flags (<code className="font-mono text-amber-200">TWF, HDF, PWF, OSF, RNF</code>) are strictly excluded from the training and inference pipelines.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: 5 FAILURE MODES */}
      {activeTab === "failures" && (
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PIPELINE_INSIGHTS.failureModes.map((failure) => (
              <div
                key={failure.code}
                className="glass rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-extrabold px-3 py-1 rounded-xl font-mono"
                      style={{
                        backgroundColor: `${failure.color}20`,
                        color: failure.color,
                        border: `1px solid ${failure.color}40`,
                      }}
                    >
                      {failure.code}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      Severity: <span className="text-red-400">{failure.severity}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{failure.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {failure.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="rounded-xl bg-black/40 p-3 border border-white/5">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                      Trigger Criterion
                    </span>
                    <code className="text-xs font-mono text-cyan-300 block">
                      {failure.indicator}
                    </code>
                  </div>

                  <div className="rounded-xl bg-emerald-500/5 p-3 border border-emerald-500/20">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block mb-1">
                      Preventative Action
                    </span>
                    <p className="text-xs text-slate-300">{failure.prevention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 6: GRIDSEARCHCV TUNING */}
      {activeTab === "tuning" && (
        <div className="space-y-6">
          <div className="glass rounded-3xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">
              Hyperparameter Optimization Details
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Exhaustive search across all hyperparameter candidate combinations performed in <code className="text-violet-300 font-mono">Pipeline.ipynb</code> cell 58.
            </p>

            {/* Grid Search Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <span className="text-[10px] uppercase tracking-wider text-slate-500">Cross Validation</span>
                <p className="text-2xl font-bold text-white mt-1">5-Fold CV</p>
                <span className="text-[11px] text-slate-400">Stratified splitting</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <span className="text-[10px] uppercase tracking-wider text-slate-500">Candidates Evaluated</span>
                <p className="text-2xl font-bold text-cyan-300 mt-1">336 Models</p>
                <span className="text-[11px] text-slate-400">Parameter permutations</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <span className="text-[10px] uppercase tracking-wider text-slate-500">Total Fits</span>
                <p className="text-2xl font-bold text-violet-400 mt-1">1,680 Fits</p>
                <span className="text-[11px] text-slate-400">336 × 5 folds</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <span className="text-[10px] uppercase tracking-wider text-slate-500">Best CV F1-Score</span>
                <p className="text-2xl font-bold text-emerald-400 mt-1">67.73%</p>
                <span className="text-[11px] text-slate-400">Balanced class weighting</span>
              </div>
            </div>

            {/* Parameter Search Space */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h4 className="text-sm font-bold text-white mb-4">
                Grid Search Hyperparameter Space
              </h4>

              <div className="space-y-3 font-mono text-xs">
                {Object.entries(PIPELINE_INSIGHTS.gridSearchParams.parameterGrid).map(
                  ([param, values]) => (
                    <div
                      key={param}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl bg-black/40 p-3 border border-white/5"
                    >
                      <span className="text-violet-400">{param}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {values.map((v) => (
                          <span
                            key={String(v)}
                            className="rounded bg-white/10 px-2 py-0.5 text-cyan-300 text-[11px]"
                          >
                            {String(v)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MetricPill = ({ label, value, highlight }) => (
  <div
    className={`rounded-2xl p-4 border text-center transition ${
      highlight
        ? "border-emerald-500/30 bg-emerald-500/10 shadow-sm shadow-emerald-500/10"
        : "border-white/10 bg-white/[0.02]"
    }`}
  >
    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block truncate">
      {label}
    </span>
    <span
      className={`text-xl font-black block mt-1 ${
        highlight ? "text-emerald-400" : "text-white"
      }`}
    >
      {value}
    </span>
  </div>
);

export default ModelInfo;

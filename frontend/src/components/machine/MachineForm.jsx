import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { DEFAULT_MACHINE, MACHINE_TYPES } from "../../utils/constants";
import { TELEMETRY_PRESETS, SENSOR_BASELINES } from "../../data/pipelineData";
import { validateMachine } from "../../utils/validators";
import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";
import { predictMachine } from "../../services/api";
import { usePrediction } from "../../context/PredictionContext";
import { Sparkles, RotateCcw, Zap, HelpCircle } from "lucide-react";

const MachineForm = () => {
  const { currentFormValues, setCurrentFormValues, savePrediction } = usePrediction();
  const [form, setForm] = useState(currentFormValues || DEFAULT_MACHINE);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Sync form when currentFormValues changes (e.g. from preset click)
  useEffect(() => {
    if (currentFormValues) {
      setForm(currentFormValues);
    }
  }, [currentFormValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    setCurrentFormValues(updated);

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectPreset = (preset) => {
    setForm(preset.data);
    setCurrentFormValues(preset.data);
    setErrors({});
    toast.success(`Loaded preset: ${preset.title}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateMachine(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please correct the highlighted input fields.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        Type: form.Type,
        air_temperature: Number(form.air_temperature),
        process_temperature: Number(form.process_temperature),
        rotational_speed: Number(form.rotational_speed),
        torque: Number(form.torque),
        tool_wear: Number(form.tool_wear),
      };

      const result = await predictMachine(payload);
      savePrediction(payload, result);

      if (result.prediction === 1) {
        toast.error("Machine failure risk detected!", {
          style: { background: "#2a1015", color: "#fca5a5", border: "1px solid #ef4444" },
        });
      } else {
        toast.success("Machine is operating within safe parameters.", {
          style: { background: "#062217", color: "#6ee7b7", border: "1px solid #10b981" },
        });
      }
    } catch (error) {
      console.error(error);
      if (error.response?.status === 422) {
        toast.error("Invalid machine telemetry parameters.");
      } else if (error.response?.status === 503) {
        toast.error("Prediction pipeline artifact is not loaded on backend.");
      } else if (error.code === "ECONNABORTED") {
        toast.error("Prediction request timed out.");
      } else if (!error.response) {
        toast.error("Unable to connect to FastAPI backend server (http://127.0.0.1:8000).");
      } else {
        toast.error("Prediction request failed. Please verify inputs.");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm(DEFAULT_MACHINE);
    setCurrentFormValues(DEFAULT_MACHINE);
    setErrors({});
    toast.success("Telemetry inputs reset to defaults.");
  };

  return (
    <div className="space-y-6">
      {/* Quick Simulation Presets */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Zap size={14} className="text-cyan-400" />
            <span>Load Quick Simulation Presets:</span>
          </label>
        </div>

        <div className="flex flex-wrap gap-2">
          {TELEMETRY_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => handleSelectPreset(preset)}
              className="
                group rounded-xl border border-white/10 bg-white/[0.03]
                px-3 py-1.5 text-xs font-medium text-slate-300
                hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white
                active:scale-95 transition-all duration-150 flex items-center gap-1.5 cursor-pointer
              "
            >
              <span
                className={`h-2 w-2 shrink-0 rounded-full transition-transform group-hover:scale-125 ${
                  preset.badgeColor === "emerald"
                    ? "bg-emerald-400 shadow-sm shadow-emerald-400/50"
                    : preset.badgeColor === "red"
                    ? "bg-red-400 shadow-sm shadow-red-400/50"
                    : preset.badgeColor === "amber"
                    ? "bg-amber-400 shadow-sm shadow-amber-400/50"
                    : preset.badgeColor === "orange"
                    ? "bg-orange-400 shadow-sm shadow-orange-400/50"
                    : "bg-violet-400 shadow-sm shadow-violet-400/50"
                }`}
              />
              <span className="font-semibold">{preset.shortName || preset.title}</span>
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Select
          label="Product Quality Grade (Type)"
          name="Type"
          value={form.Type}
          onChange={handleChange}
          options={MACHINE_TYPES}
          error={errors.Type}
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <Input
              label="Air Temperature"
              name="air_temperature"
              value={form.air_temperature}
              onChange={handleChange}
              placeholder="e.g. 298.1"
              unit="K"
              error={errors.air_temperature}
            />
            <p className="text-[11px] text-slate-500 mt-1 pl-1">
              Normal range: 295.0 – 304.5 K (~25°C)
            </p>
          </div>

          <div>
            <Input
              label="Process Temperature"
              name="process_temperature"
              value={form.process_temperature}
              onChange={handleChange}
              placeholder="e.g. 308.6"
              unit="K"
              error={errors.process_temperature}
            />
            <p className="text-[11px] text-slate-500 mt-1 pl-1">
              Normal range: 305.0 – 313.8 K (~35°C)
            </p>
          </div>

          <div>
            <Input
              label="Rotational Speed"
              name="rotational_speed"
              value={form.rotational_speed}
              onChange={handleChange}
              placeholder="e.g. 1551"
              unit="rpm"
              error={errors.rotational_speed}
            />
            <p className="text-[11px] text-slate-500 mt-1 pl-1">
              Normal range: 1,300 – 2,000 rpm
            </p>
          </div>

          <div>
            <Input
              label="Torque"
              name="torque"
              value={form.torque}
              onChange={handleChange}
              placeholder="e.g. 42.8"
              unit="Nm"
              error={errors.torque}
            />
            <p className="text-[11px] text-slate-500 mt-1 pl-1">
              Normal range: 20.0 – 60.0 Nm
            </p>
          </div>

          <div className="md:col-span-2">
            <Input
              label="Tool Wear (Cumulative)"
              name="tool_wear"
              value={form.tool_wear}
              onChange={handleChange}
              placeholder="e.g. 0"
              unit="min"
              error={errors.tool_wear}
            />
            <p className="text-[11px] text-slate-500 mt-1 pl-1">
              Critical wear warning threshold: &gt; 200 minutes (Max: 250 min)
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-3">
          <Button type="submit" loading={loading} className="flex-1">
            <Sparkles size={16} />
            <span>{loading ? "Analyzing Machine Telemetry..." : "Run Diagnostic Inference"}</span>
          </Button>

          <button
            type="button"
            onClick={resetForm}
            className="
              flex items-center justify-center gap-2
              rounded-xl border border-white/10 bg-white/[0.03]
              px-5 py-3 text-sm font-medium text-slate-300
              hover:bg-white/[0.08] hover:text-white transition
            "
          >
            <RotateCcw size={15} />
            <span>Reset</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MachineForm;
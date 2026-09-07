import { BrainCircuit, Database, Target, Workflow } from "lucide-react";

const ModelInfo = () => {
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
          MODEL INFORMATION
        </span>

        <h1
          className="
          mt-3 text-4xl
          font-black
        "
        >
          Behind the prediction
        </h1>

        <p
          className="
          mt-3 max-w-2xl
          text-slate-500
        "
        >
          The application uses your trained machine learning pipeline to
          classify whether a machine is likely to fail.
        </p>
      </div>

      <div
        className="
        grid gap-5
        md:grid-cols-2
        xl:grid-cols-4
      "
      >
        <InfoCard
          icon={BrainCircuit}
          title="ML Pipeline"
          value="Saved Pipeline"
        />

        <InfoCard icon={Database} title="Dataset" value="10,000 Records" />

        <InfoCard icon={Target} title="Target" value="Machine Failure" />

        <InfoCard icon={Workflow} title="Output" value="Binary" />
      </div>

      <div
        className="
        glass rounded-2xl p-7
      "
      >
        <h2 className="text-xl font-bold">Prediction Inputs</h2>

        <div
          className="
          mt-6 grid
          gap-3
          sm:grid-cols-2
          lg:grid-cols-3
        "
        >
          <Feature name="Machine Type" />

          <Feature name="Air Temperature" />

          <Feature name="Process Temperature" />

          <Feature name="Rotational Speed" />

          <Feature name="Torque" />

          <Feature name="Tool Wear" />
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon: Icon, title, value }) => (
  <div
    className="
    glass rounded-2xl p-6
  "
  >
    <Icon size={22} className="text-cyan-400" />

    <p
      className="
      mt-5 text-xs
      uppercase tracking-wider
      text-slate-500
    "
    >
      {title}
    </p>

    <p
      className="
      mt-2 font-bold
    "
    >
      {value}
    </p>
  </div>
);

const Feature = ({ name }) => (
  <div
    className="
    rounded-xl
    border border-white/10
    bg-white/[0.02]
    px-4 py-4
    text-sm text-slate-300
  "
  >
    {name}
  </div>
);

export default ModelInfo;

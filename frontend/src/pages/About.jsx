import { Cpu, ShieldCheck, Zap } from "lucide-react";

const About = () => {
  return (
    <div
      className="
      mx-auto max-w-4xl
      space-y-8
    "
    >
      <div>
        <span
          className="
          text-xs font-bold
          tracking-[0.2em]
          text-violet-400
        "
        >
          ABOUT
        </span>

        <h1
          className="
          mt-3 text-4xl
          font-black
        "
        >
          Predictive Maintenance
        </h1>

        <p
          className="
          mt-4 leading-7
          text-slate-500
        "
        >
          A machine learning application designed to predict potential machine
          failures from operating and sensor conditions.
        </p>
      </div>

      <div
        className="
        grid gap-5
        md:grid-cols-3
      "
      >
        <Card
          icon={Cpu}
          title="Machine Learning"
          text="Uses a trained classification pipeline."
        />

        <Card
          icon={Zap}
          title="Fast Prediction"
          text="React communicates with FastAPI for real-time prediction."
        />

        <Card
          icon={ShieldCheck}
          title="Predictive Support"
          text="Provides a failure-risk estimate from machine conditions."
        />
      </div>
    </div>
  );
};

const Card = ({ icon: Icon, title, text }) => (
  <div
    className="
    glass rounded-2xl p-6
  "
  >
    <Icon size={23} className="text-violet-400" />

    <h3
      className="
      mt-5 font-bold
    "
    >
      {title}
    </h3>

    <p
      className="
      mt-2 text-sm
      leading-6
      text-slate-500
    "
    >
      {text}
    </p>
  </div>
);

export default About;

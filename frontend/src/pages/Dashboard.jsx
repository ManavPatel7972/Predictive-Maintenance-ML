import { Activity, Cpu, Database, ShieldCheck, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

import StatCard from "../components/dashboard/StatCard";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Hero */}

      <section
        className="
        grid-bg relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-gradient-to-br
        from-violet-950/30
        via-[#0b0e18]
        to-cyan-950/20
        p-8
        sm:p-12
      "
      >
        <div
          className="
          absolute -right-32
          -top-32
          h-96 w-96
          rounded-full
          bg-violet-600/10
          blur-3xl
        "
        />

        <div className="relative max-w-3xl">
          <div
            className="
            mb-5 inline-flex
            items-center gap-2
            rounded-full
            border border-cyan-400/20
            bg-cyan-400/5
            px-4 py-2
            text-xs
            text-cyan-300
          "
          >
            <Activity size={14} />
            PREDICTIVE MAINTENANCE
          </div>

          <h1
            className="
            text-4xl
            font-black
            tracking-tight
            sm:text-6xl
          "
          >
            Predict machine
            <span className="gradient-text block">
              failures before they happen.
            </span>
          </h1>

          <p
            className="
            mt-5 max-w-2xl
            leading-7
            text-slate-400
          "
          >
            Analyze machine operating conditions using a trained machine
            learning pipeline and determine whether a machine is likely to fail.
          </p>

          <Link
            to="/predict"
            className="
              mt-7 inline-flex
              items-center gap-2
              rounded-xl
              bg-white
              px-6 py-3.5
              font-semibold
              text-slate-950
              transition
              hover:scale-[1.02]
            "
          >
            Analyze Machine
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Stats */}

      <section
        className="
        grid gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      "
      >
        <StatCard icon={Database} value="10,000" label="Training Records" />

        <StatCard icon={Activity} value="6" label="Machine Inputs" />

        <StatCard icon={Cpu} value="ML Pipeline" label="Prediction Engine" />

        <StatCard
          icon={ShieldCheck}
          value="Binary"
          label="Failure Classification"
        />
      </section>

      {/* Workflow */}

      <section>
        <h2 className="text-xl font-bold">Prediction Workflow</h2>

        <p className="mt-2 text-sm text-slate-500">
          From machine sensor values to failure prediction.
        </p>

        <div
          className="
          mt-5 grid gap-4
          md:grid-cols-3
        "
        >
          <Workflow
            number="01"
            title="Enter Sensor Data"
            text="Provide the machine type and current operating conditions."
          />

          <Workflow
            number="02"
            title="Run ML Pipeline"
            text="The saved preprocessing and classification pipeline analyzes the machine."
          />

          <Workflow
            number="03"
            title="Get Failure Result"
            text="View failure status, probability and risk level."
          />
        </div>
      </section>

      {/* Disclaimer */}

      <div
        className="
        rounded-xl
        border border-amber-400/10
        bg-amber-400/[0.03]
        p-5
        text-sm leading-6
        text-slate-500
      "
      >
        <strong className="text-slate-300">Note:</strong> This application
        provides a machine-learning prediction based on the trained dataset and
        should be used as a predictive-support tool, not as the sole basis for
        maintenance decisions.
      </div>
    </div>
  );
};

const Workflow = ({ number, title, text }) => {
  return (
    <div
      className="
      glass rounded-2xl p-6
    "
    >
      <span
        className="
        text-xs font-bold
        tracking-[0.2em]
        text-violet-400
      "
      >
        {number}
      </span>

      <h3 className="mt-4 font-bold">{title}</h3>

      <p
        className="
        mt-2
        text-sm
        leading-6
        text-slate-500
      "
      >
        {text}
      </p>
    </div>
  );
};

export default Dashboard;

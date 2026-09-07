import { useState } from "react";
import toast from "react-hot-toast";

import {
  DEFAULT_MACHINE,
  MACHINE_TYPES,
} from "../../utils/constants";

import {
  validateMachine,
} from "../../utils/validators";

import Input from "../common/Input";
import Select from "../common/Select";
import Button from "../common/Button";

import {
  predictMachine,
} from "../../services/api";

import {
  usePrediction,
} from "../../context/PredictionContext";


const MachineForm = () => {

  const [form, setForm] =
    useState(DEFAULT_MACHINE);

  const [errors, setErrors] =
    useState({});

  const [loading, setLoading] =
    useState(false);

  const {
    savePrediction,
  } = usePrediction();


  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {

      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));

    }
  };


  const handleSubmit = async (event) => {

    event.preventDefault();

    const validationErrors =
      validateMachine(form);

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors).length > 0
    ) {

      toast.error(
        "Please correct the highlighted fields."
      );

      return;
    }


    try {

      setLoading(true);

      const payload = {
        Type: form.Type,

        air_temperature:
          Number(form.air_temperature),

        process_temperature:
          Number(form.process_temperature),

        rotational_speed:
          Number(form.rotational_speed),

        torque:
          Number(form.torque),

        tool_wear:
          Number(form.tool_wear),
      };


      const result =
        await predictMachine(payload);


      savePrediction(
        payload,
        result
      );


      if (result.prediction === 1) {

        toast.error(
          "Machine failure risk detected."
        );

      } else {

        toast.success(
          "Machine analysis completed."
        );

      }

    } catch (error) {

      console.error(error);

      if (
        error.response?.status === 422
      ) {

        toast.error(
          "Invalid machine data."
        );

      } else if (
        error.response?.status === 503
      ) {

        toast.error(
          "Prediction model is unavailable."
        );

      } else if (
        error.code === "ECONNABORTED"
      ) {

        toast.error(
          "Prediction request timed out."
        );

      } else if (
        !error.response
      ) {

        toast.error(
          "Unable to connect to FastAPI server."
        );

      } else {

        toast.error(
          "Prediction failed. Please try again."
        );
      }

    } finally {

      setLoading(false);

    }
  };


  const resetForm = () => {

    setForm(DEFAULT_MACHINE);

    setErrors({});

    toast.success(
      "Machine form reset."
    );
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <Select
        label="Machine Type"
        name="Type"
        value={form.Type}
        onChange={handleChange}
        options={MACHINE_TYPES}
        error={errors.Type}
      />


      <div className="
        grid gap-5
        md:grid-cols-2
      ">

        <Input
          label="Air Temperature"
          name="air_temperature"
          value={form.air_temperature}
          onChange={handleChange}
          placeholder="e.g. 300.1"
          unit="K"
          error={errors.air_temperature}
        />


        <Input
          label="Process Temperature"
          name="process_temperature"
          value={form.process_temperature}
          onChange={handleChange}
          placeholder="e.g. 310.2"
          unit="K"
          error={errors.process_temperature}
        />


        <Input
          label="Rotational Speed"
          name="rotational_speed"
          value={form.rotational_speed}
          onChange={handleChange}
          placeholder="e.g. 1500"
          unit="rpm"
          error={errors.rotational_speed}
        />


        <Input
          label="Torque"
          name="torque"
          value={form.torque}
          onChange={handleChange}
          placeholder="e.g. 40"
          unit="Nm"
          error={errors.torque}
        />


        <div className="md:col-span-2">

          <Input
            label="Tool Wear"
            name="tool_wear"
            value={form.tool_wear}
            onChange={handleChange}
            placeholder="e.g. 100"
            unit="min"
            error={errors.tool_wear}
          />

        </div>

      </div>


      <div className="
        flex flex-col gap-3
        sm:flex-row
      ">

        <Button
          type="submit"
          loading={loading}
        >
          {loading
            ? "Analyzing..."
            : "Predict Machine Failure"}
        </Button>


        <button
          type="button"
          onClick={resetForm}
          className="
            rounded-xl
            border border-white/10
            px-5 py-3
            text-sm font-medium
            text-slate-400
            transition
            hover:bg-white/5
            hover:text-white
          "
        >
          Reset
        </button>

      </div>

    </form>
  );
};


export default MachineForm;
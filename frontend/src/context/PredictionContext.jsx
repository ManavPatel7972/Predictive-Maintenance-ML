import { createContext, useContext, useState } from "react";
import { DEFAULT_MACHINE } from "../utils/constants";

const PredictionContext = createContext(null);

export const PredictionProvider = ({ children }) => {
  const [prediction, setPrediction] = useState(null);
  const [machineData, setMachineData] = useState(null);
  const [currentFormValues, setCurrentFormValues] = useState(DEFAULT_MACHINE);
  const [history, setHistory] = useState([]);

  const savePrediction = (data, result) => {
    setMachineData(data);
    setPrediction(result);
    setHistory((prev) => [
      {
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString(),
        data,
        result,
      },
      ...prev.slice(0, 9), // keep last 10
    ]);
  };

  const applyPreset = (presetData) => {
    setCurrentFormValues(presetData);
  };

  const clearPrediction = () => {
    setPrediction(null);
    setMachineData(null);
  };

  return (
    <PredictionContext.Provider
      value={{
        prediction,
        machineData,
        currentFormValues,
        setCurrentFormValues,
        applyPreset,
        history,
        savePrediction,
        clearPrediction,
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
};

export const usePrediction = () => {
  const context = useContext(PredictionContext);
  if (!context) {
    throw new Error("usePrediction must be used inside PredictionProvider");
  }
  return context;
};

import { createContext, useContext, useState } from "react";

const PredictionContext = createContext(null);

export const PredictionProvider = ({ children }) => {
  const [prediction, setPrediction] = useState(null);

  const [machineData, setMachineData] = useState(null);

  const savePrediction = (data, result) => {
    setMachineData(data);

    setPrediction(result);
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

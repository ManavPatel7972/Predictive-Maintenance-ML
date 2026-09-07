import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",

  timeout: 15000,

  headers: {
    "Content-Type": "application/json",
  },
});

export const checkHealth = async () => {
  const response = await api.get("/health");

  return response.data;
};

export const predictMachine = async (machineData) => {
  const response = await api.post("/api/predict", machineData);

  return response.data;
};

export default api;

# Predictive Maintenance Web App

A full-stack predictive maintenance application for milling machines. This app uses a pre-trained machine learning model to predict whether a machine is likely to fail based on real-time sensor telemetry.

**Important Note:** This codebase does NOT contain any training code or logic. It is strictly an inference server and a frontend dashboard.

## Project Structure

- `backend/` - FastAPI backend server
- `frontend/` - ReactJS (Vite) frontend application
- `data/` - Dataset (raw and processed)
- `notebooks/` - Original ML experimentation notebooks

## Getting Started

### 1. Generating Model Artifacts

Since this is an inference-only server, you must first generate the `.pkl` artifact files. A helper script is provided to export these from your existing dataset exactly as it was done in your notebooks.

1. Ensure you have the required data files in `data/raw/` and `data/processed/`
2. Run the export script from the backend directory:
   ```bash
   cd backend
   python export_model.py
   ```
3. This will create a `models/` directory inside `backend/` containing:
   - `model.pkl` (Logistic Regression Classifier)
   - `scaler.pkl` (StandardScaler)
   - `type_encoder.pkl` (OrdinalEncoder)
   - `model_metadata.json`

### 2. Running the Backend

The backend is a FastAPI application that serves the model and handles inference requests.

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies (if not already installed):
   ```bash
   pip install -r requirements.txt
   ```
3. Start the FastAPI server:
   ```bash
   uvicorn app.main:app --reload
   ```
4. The API will be available at `http://localhost:8000`. You can view the interactive API documentation at `http://localhost:8000/docs`.

### 3. Running the Frontend

The frontend is a modern React application built with Vite and Tailwind CSS.

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173` (or the URL provided in the terminal).

## Testing

### Backend Unit Tests

Run the test suite using pytest:
```bash
cd backend
python -m pytest tests/ -v
```

## Features Used for Prediction

The model uses only the following 6 features:
- `Type` (L, M, H)
- `Air temperature [K]`
- `Process temperature [K]`
- `Rotational speed [rpm]`
- `Torque [Nm]`
- `Tool wear [min]`

Columns such as `TWF`, `HDF`, `PWF`, `OSF`, `RNF`, `UDI`, and `Product ID` are strictly excluded from the inference pipeline.

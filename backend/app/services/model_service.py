from pathlib import Path

import joblib

from app.core.config import settings
from app.core.exceptions import ModelNotLoadedError


class ModelService:

    def __init__(self):
        self.model = None
        self.model_path = Path(settings.MODEL_PATH)

    def load(self):
        if not self.model_path.exists():
            raise ModelNotLoadedError(f"Model not found at " f"{self.model_path}")

        try:
            self.model = joblib.load(self.model_path)

        except Exception as exc:
            raise ModelNotLoadedError(f"Unable to load model: {exc}")

    def is_loaded(self):
        return self.model is not None

    def predict(self, data):

        if not self.is_loaded():
            raise ModelNotLoadedError("Model is not loaded.")

        try:
            return self.model.predict(data)

        except Exception as exc:
            raise RuntimeError(f"Model prediction failed: {exc}")

    def predict_probability(self, data):

        if not self.is_loaded():
            raise ModelNotLoadedError("Model is not loaded.")

        if not hasattr(self.model, "predict_proba"):
            raise RuntimeError(
                "The loaded model does not " "support probability prediction."
            )

        try:
            probabilities = self.model.predict_proba(data)

            return probabilities[:, 1]

        except Exception as exc:
            raise RuntimeError(f"Probability prediction failed: {exc}")


model_service = ModelService()

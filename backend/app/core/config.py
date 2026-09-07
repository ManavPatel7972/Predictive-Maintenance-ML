from pathlib import Path

from pydantic_settings import BaseSettings

BASE_DIR = Path(__file__).resolve().parents[2]


class Settings(BaseSettings):
    APP_NAME: str = "Predictive Maintenance API"
    APP_VERSION: str = "1.0.0"

    FRONTEND_URL: str = "http://localhost:5173"

    MODEL_PATH: str = str(BASE_DIR / "model" / "machine_failure_pipeline_DT.pkl")


settings = Settings()

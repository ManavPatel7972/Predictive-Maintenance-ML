from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings

from app.core.exceptions import (
    ModelNotLoadedError,
    PredictionError,
    model_not_loaded_handler,
    prediction_error_handler,
    general_exception_handler,
)

from app.routes.health import router as health_router
from app.routes.prediction import (
    router as prediction_router,
)

from app.services.model_service import (
    model_service,
)


@asynccontextmanager
async def lifespan(app: FastAPI):

    print("Loading ML Pipeline...")

    model_service.load()

    print("ML Pipeline loaded successfully.")

    yield

    print("Shutting down API...")


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description=("Machine Failure Prediction API " "using a trained ML Pipeline."),
    lifespan=lifespan,
)


# ----------------------------------------
# CORS
# ----------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ----------------------------------------
# Exception handlers
# ----------------------------------------

app.add_exception_handler(
    ModelNotLoadedError,
    model_not_loaded_handler,
)

app.add_exception_handler(
    PredictionError,
    prediction_error_handler,
)

app.add_exception_handler(
    Exception,
    general_exception_handler,
)


# ----------------------------------------
# Routes
# ----------------------------------------

app.include_router(health_router)

app.include_router(prediction_router)


# ----------------------------------------
# Root
# ----------------------------------------


@app.get("/")
def root():

    return {
        "success": True,
        "application": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "message": ("Predictive Maintenance API " "is running."),
    }

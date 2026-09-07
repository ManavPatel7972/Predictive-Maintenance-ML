from fastapi import APIRouter

from app.schemas.prediction import (
    MachinePredictionRequest,
    MachinePredictionResponse,
)

from app.services.prediction_service import (
    predict_machine_failure,
)

router = APIRouter(
    prefix="/api",
    tags=["Prediction"],
)


@router.post(
    "/predict",
    response_model=MachinePredictionResponse,
)
def predict(
    data: MachinePredictionRequest,
):

    return predict_machine_failure(data.model_dump())

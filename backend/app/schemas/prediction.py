from typing import Literal

from pydantic import BaseModel, Field


class MachinePredictionRequest(BaseModel):

    Type: Literal["L", "M", "H"]

    air_temperature: float = Field(..., ge=295.0, le=305.0)

    process_temperature: float = Field(..., ge=305.0, le=315.0)

    rotational_speed: float = Field(..., ge=1000.0, le=3000.0)

    torque: float = Field(..., ge=0.0, le=80.0)

    tool_wear: float = Field(..., ge=0.0, le=300.0)


class MachinePredictionResponse(BaseModel):

    success: bool

    prediction: int

    result: str

    failure_probability: float

    risk_level: str

    message: str

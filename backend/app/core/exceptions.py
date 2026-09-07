from fastapi import Request
from fastapi.responses import JSONResponse


class ModelNotLoadedError(Exception):
    pass


class PredictionError(Exception):
    pass


async def model_not_loaded_handler(
    request: Request,
    exc: ModelNotLoadedError,
):
    return JSONResponse(
        status_code=503,
        content={
            "success": False,
            "message": "Prediction model is unavailable.",
        },
    )


async def prediction_error_handler(
    request: Request,
    exc: PredictionError,
):
    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "message": "Prediction failed.",
            "detail": str(exc),
        },
    )


async def general_exception_handler(
    request: Request,
    exc: Exception,
):
    print(f"ERROR: {request.method} " f"{request.url} -> {exc}")

    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "message": "Internal server error.",
        },
    )

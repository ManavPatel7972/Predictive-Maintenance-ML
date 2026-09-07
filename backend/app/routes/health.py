from fastapi import APIRouter

from app.services.model_service import model_service

router = APIRouter(tags=["System"])


@router.get("/health")
def health_check():

    return {
        "success": True,
        "status": "healthy",
        "model_loaded": model_service.is_loaded(),
    }

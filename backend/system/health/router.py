"""System tab — service health (home page backing endpoint)."""
from datetime import datetime, timezone

from fastapi import APIRouter

from backend.core import config

router = APIRouter()


@router.get("/api/health")
def health():
    return {
        "status": "ok",
        "service": "travora-backend",
        "geminiConfigured": config.gemini_configured(),
        "model": config.GEMINI_MODEL,
        "time": datetime.now(timezone.utc).isoformat(),
    }

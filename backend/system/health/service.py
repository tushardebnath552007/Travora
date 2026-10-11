"""System/health feature service."""
from datetime import datetime, timezone

from backend.core import config


def status() -> dict:
    return {
        "status": "ok",
        "service": "travora-backend",
        "geminiConfigured": config.gemini_configured(),
        "model": config.GEMINI_MODEL,
        "time": datetime.now(timezone.utc).isoformat(),
    }

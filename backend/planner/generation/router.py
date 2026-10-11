"""Planner tab — AI itinerary generation (trip-planner / itinerary pages)."""
import json

from fastapi import APIRouter, HTTPException

from backend.core import config
from backend.planner.generation import schemas, service

router = APIRouter()


@router.post("/api/generate-itinerary", response_model=schemas.GeneratedItinerary)
def generate_itinerary(body: schemas.GenerateItineraryBody):
    if not config.gemini_configured():
        raise HTTPException(
            status_code=503,
            detail="Gemini API is not configured. Set GEMINI_API_KEY in .env.local and restart the server.",
        )
    try:
        parsed = service.generate_via_gemini(service.build_prompt(body))
    except RuntimeError as exc:
        message = str(exc)
        if message == "empty-response":
            raise HTTPException(status_code=502, detail="Gemini returned an empty response.")
        raise HTTPException(status_code=500, detail=f"Failed to generate itinerary. {message}")
    except (json.JSONDecodeError, ValueError) as exc:
        raise HTTPException(status_code=500, detail=f"Failed to generate itinerary. {exc}")
    return service.build_itinerary(body, parsed)

"""Planner tab service — prompt building + Gemini REST call."""
import json
import time
import urllib.error
import urllib.request

from backend.core import config
from backend.planner.generation import schemas

SYSTEM_INSTRUCTION = (
    "You are an expert travel planner. Always respond with valid JSON matching "
    "the provided schema. Keep descriptions vivid but concise."
)

RESPONSE_SCHEMA = {
    "type": "OBJECT",
    "properties": {
        "days": {
            "type": "ARRAY",
            "items": {
                "type": "OBJECT",
                "properties": {
                    "day": {"type": "INTEGER"},
                    "title": {"type": "STRING"},
                    "slots": {
                        "type": "ARRAY",
                        "items": {
                            "type": "OBJECT",
                            "properties": {
                                "time": {
                                    "type": "STRING",
                                    "enum": ["Morning", "Afternoon", "Sunset", "Evening"],
                                },
                                "title": {"type": "STRING"},
                                "location": {"type": "STRING"},
                                "activity": {"type": "STRING"},
                                "estimatedCost": {"type": "INTEGER"},
                            },
                            "required": ["time", "title", "location", "activity", "estimatedCost"],
                        },
                    },
                },
                "required": ["day", "title", "slots"],
            },
        },
        "notes": {"type": "STRING"},
    },
    "required": ["days", "notes"],
}


def build_prompt(body: schemas.GenerateItineraryBody) -> str:
    lines = [
        f"Create a detailed {body.durationDays}-day travel itinerary for {body.destinationName}.",
        f"Travel type: {body.travelType}. Total budget: {body.budget} (in INR).",
    ]
    if body.interests:
        lines.append(f"Focus on these interests: {', '.join(body.interests)}.")
    lines.append("For each day provide four time slots: Morning, Afternoon, Sunset, and Evening.")
    lines.append(
        "Distribute the total budget sensibly across all activity slots "
        "so the sum roughly equals the total budget."
    )
    return "\n".join(lines)


def generate_via_gemini(prompt: str) -> dict:
    """Call Gemini over plain HTTPS (stdlib only). Raises RuntimeError on failure."""
    url = (
        "https://generativelanguage.googleapis.com/v1beta/models/"
        f"{config.GEMINI_MODEL}:generateContent?key={config.GEMINI_API_KEY}"
    )
    payload = {
        "contents": prompt,
        "systemInstruction": {"parts": [{"text": SYSTEM_INSTRUCTION}]},
        "generationConfig": {
            "responseMimeType": "application/json",
            "responseSchema": RESPONSE_SCHEMA,
        },
    }
    req = urllib.request.Request(
        url, data=json.dumps(payload).encode("utf-8"), headers={"Content-Type": "application/json"}
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = json.loads(resp.read().decode("utf-8"))
    except urllib.error.URLError as exc:
        raise RuntimeError(str(exc))
    try:
        parts = data["candidates"][0]["content"]["parts"]
        raw = "".join(p.get("text", "") for p in parts).strip()
    except (KeyError, IndexError, TypeError):
        raw = ""
    if not raw:
        raise RuntimeError("empty-response")
    return json.loads(raw)


def build_itinerary(body: schemas.GenerateItineraryBody, parsed: dict) -> dict:
    return {
        "id": f"itin-{int(time.time() * 1000)}",
        "destinationId": body.destinationId,
        "destinationName": body.destinationName,
        "durationDays": body.durationDays,
        "totalBudget": body.budget,
        "travelType": body.travelType,
        "interests": body.interests,
        "days": parsed.get("days", []),
        "createdAt": time.strftime("%Y-%m-%d", time.gmtime()),
        "notes": parsed.get("notes", f"Custom {body.travelType} itinerary for {body.destinationName}."),
    }

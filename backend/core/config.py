"""Shared configuration. Prefers .env.local, falls back to .env (never overwrites)."""
import os
from pathlib import Path

from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent.parent.parent
BACKEND_DIR = Path(__file__).resolve().parent.parent

load_dotenv(BACKEND_DIR / ".env.local")
load_dotenv(BACKEND_DIR / ".env")

PORT = int(os.getenv("PORT", "3000"))
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")
DIST_DIR = ROOT / "frontend" / "dist"
FRONTEND_DIR = ROOT / "frontend"

PLACEHOLDER_KEY = "MY_GEMINI_API_KEY"


def gemini_configured() -> bool:
    return bool(GEMINI_API_KEY) and GEMINI_API_KEY != PLACEHOLDER_KEY

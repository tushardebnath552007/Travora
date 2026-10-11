"""Travora backend (FastAPI) — tab routers + static site + SPA fallback.

Tabs mirror the site pages:
  system/   -> home + health
  auth/     -> login + signup pages
  planner/  -> trip-planner + itinerary pages (AI generation)
  contact/  -> contact page (message desk)
Static pages (destinations, experiences, budget, map, wisdom) need no API.
"""
from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles

from backend.auth.profile.router import router as auth_profile_router
from backend.auth.recovery.router import router as auth_recovery_router
from backend.auth.session.router import router as auth_session_router
from backend.contact.inbox.router import router as contact_router
from backend.core import config
from backend.planner.generation.router import router as planner_router
from backend.system.health.router import router as system_router

app = FastAPI(title="Travora Backend (FastAPI)")

# Vanilla site assets (shared stylesheet + app script).
app.mount("/frontend", StaticFiles(directory=str(config.FRONTEND_DIR)), name="frontend")

# ---- Tab routers -----------------------------------------------------------
app.include_router(system_router)
app.include_router(auth_session_router)
app.include_router(auth_recovery_router)
app.include_router(auth_profile_router)
app.include_router(planner_router)
app.include_router(contact_router)


# ---- Retired pages ----------------------------------------------------------
@app.get("/gallery.html", include_in_schema=False)
def gallery_retired():
    return RedirectResponse(url="/html/destinations.html", status_code=301)


@app.get("/account.html", include_in_schema=False)
def account_retired():
    return RedirectResponse(url="/html/login.html", status_code=301)


# ---- Static build + SPA fallback (non-API GET only) --------------------------
@app.get("/{path:path}", include_in_schema=False)
def serve_frontend(path: str):
    target: Path = config.DIST_DIR / path if path else config.DIST_DIR / "html" / "index.html"
    if path and target.is_file():
        return FileResponse(str(target))
    return FileResponse(str(config.DIST_DIR / "html" / "index.html"))


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("backend.main:app", host="0.0.0.0", port=config.PORT)
    print(f"TRAVORA backend (FastAPI) on http://localhost:{config.PORT}")

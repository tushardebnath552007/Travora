"""Auth/recovery feature router (forgot + reset)."""
from fastapi import APIRouter

from backend.auth.recovery import schemas, service
from backend.core import errors

router = APIRouter()


@router.post("/api/auth/forgot")
def forgot(body: schemas.ForgotBody):
    token = service.issue_reset(body.email)
    if token:
        # Demo mode: the code is returned directly (a live site would email it).
        return {
            "ok": True,
            "demoToken": token,
            "demoHint": "Demo mode: paste the code below (a live site would email it).",
        }
    return {"ok": True}


@router.post("/api/auth/reset")
def reset(body: schemas.ResetBody):
    try:
        service.reset_password(body.token, body.newPassword)
    except errors.ApiError as exc:
        raise errors.to_http(exc)
    return {"ok": True}

"""Auth/profile feature router (details + password change)."""
from typing import Optional

from fastapi import APIRouter, Header

from backend.auth.profile import schemas, service
from backend.core import errors, store

router = APIRouter()


@router.put("/api/auth/profile")
def update_profile(
    body: schemas.ProfileBody,
    authorization: Optional[str] = Header(default=None, alias="Authorization"),
):
    try:
        user = service.update_profile(authorization, body.name, body.email)
    except errors.ApiError as exc:
        raise errors.to_http(exc)
    return {"user": store.public_user(user)}


@router.put("/api/auth/password")
def change_password(
    body: schemas.PasswordBody,
    authorization: Optional[str] = Header(default=None, alias="Authorization"),
):
    try:
        service.change_password(authorization, body.currentPassword, body.newPassword)
    except errors.ApiError as exc:
        raise errors.to_http(exc)
    return {"ok": True}

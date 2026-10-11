"""Auth/session feature router (signup, login, me, logout)."""
from typing import Optional

from fastapi import APIRouter, Header

from backend.auth.session import schemas, service
from backend.core import errors, store

router = APIRouter()


@router.post("/api/auth/signup", status_code=201)
def signup(body: schemas.SignupBody):
    try:
        user, token = service.signup_user(body.name, body.email, body.password)
    except errors.ApiError as exc:
        raise errors.to_http(exc)
    return {"user": store.public_user(user), "token": token}


@router.post("/api/auth/login")
def login(body: schemas.LoginBody):
    try:
        user, token = service.login_user(body.email, body.password)
    except errors.ApiError as exc:
        raise errors.to_http(exc)
    return {"user": store.public_user(user), "token": token}


@router.get("/api/auth/me")
def me(authorization: Optional[str] = Header(default=None, alias="Authorization")):
    try:
        user = service.current_user(authorization)
    except errors.ApiError as exc:
        raise errors.to_http(exc)
    return {"user": store.public_user(user)}


@router.post("/api/auth/logout")
def logout(authorization: Optional[str] = Header(default=None, alias="Authorization")):
    service.logout(authorization)
    return {"ok": True}

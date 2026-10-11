"""Auth/session feature schemas (signup + login)."""
from pydantic import BaseModel


class SignupBody(BaseModel):
    name: str = ""
    email: str = ""
    password: str = ""

    class Config:
        extra = "ignore"


class LoginBody(BaseModel):
    email: str = ""
    password: str = ""

    class Config:
        extra = "ignore"


class PublicUser(BaseModel):
    id: str
    name: str
    email: str


class AuthResponse(BaseModel):
    user: PublicUser
    token: str

"""Auth/recovery feature schemas (forgot + reset)."""
from pydantic import BaseModel


class ForgotBody(BaseModel):
    email: str = ""

    class Config:
        extra = "ignore"


class ResetBody(BaseModel):
    token: str = ""
    newPassword: str = ""

    class Config:
        extra = "ignore"

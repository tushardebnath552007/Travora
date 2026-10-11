"""Auth/profile feature schemas (details + password change)."""
from pydantic import BaseModel


class ProfileBody(BaseModel):
    name: str = ""
    email: str = ""

    class Config:
        extra = "ignore"


class PasswordBody(BaseModel):
    currentPassword: str = ""
    newPassword: str = ""

    class Config:
        extra = "ignore"

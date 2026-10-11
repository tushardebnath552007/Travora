"""Password hashing (SHA-256 + salt) and opaque session tokens."""
import hashlib
import re
import secrets

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


def hash_password(password: str, salt: str) -> str:
    return hashlib.sha256(f"{salt}:{password}".encode("utf-8")).hexdigest()


def new_salt() -> str:
    return secrets.token_hex(16)


def new_token() -> str:
    return secrets.token_hex(32)


def bearer_email(authorization, tokens_to_email) -> str | None:
    if not authorization or not authorization.startswith("Bearer "):
        return None
    return tokens_to_email.get(authorization[7:])

"""Auth/session feature service (account creation + session handling)."""
import time

from backend.core import errors, security, store


def signup_user(name: str, email: str, password: str):
    name = (name or "").strip()
    email = (email or "").strip().lower()
    if not name or not email or not password:
        raise errors.ApiError(400, "Name, email, and password are all required.")
    if not security.EMAIL_RE.match(email):
        raise errors.ApiError(400, "Please enter a valid email address.")
    if len(password) < 6:
        raise errors.ApiError(400, "Password must be at least 6 characters.")
    if email in store.users_by_email:
        raise errors.ApiError(409, "An account with this email already exists. Try logging in.")
    salt = security.new_salt()
    user = {
        "id": f"u-{int(time.time() * 1000)}",
        "name": name,
        "email": email,
        "salt": salt,
        "hash": security.hash_password(password, salt),
        "createdAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
    }
    store.users_by_email[email] = user
    token = security.new_token()
    store.tokens_to_email[token] = email
    return user, token


def login_user(email: str, password: str):
    email = (email or "").strip().lower()
    user = store.users_by_email.get(email)
    if not user or user["hash"] != security.hash_password(password or "", user["salt"]):
        raise errors.ApiError(401, "Invalid email or password.")
    token = security.new_token()
    store.tokens_to_email[token] = email
    return user, token


def current_user(authorization):
    email = security.bearer_email(authorization, store.tokens_to_email)
    user = store.users_by_email.get(email) if email else None
    if not user:
        raise errors.ApiError(401, "Not authenticated.")
    return user


def logout(authorization) -> None:
    if authorization and authorization.startswith("Bearer "):
        store.tokens_to_email.pop(authorization[7:], None)

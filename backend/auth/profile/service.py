"""Auth/profile feature service (details + password change)."""
from backend.auth.session.service import current_user
from backend.core import errors, security, store


def update_profile(authorization, name: str, email: str):
    user = current_user(authorization)
    name = (name or "").strip()
    email = (email or "").strip().lower()
    if not name:
        raise errors.ApiError(400, "Name cannot be empty.")
    if not security.EMAIL_RE.match(email):
        raise errors.ApiError(400, "Please enter a valid email address.")
    if email != user["email"] and email in store.users_by_email:
        raise errors.ApiError(409, "That email is already used by another account.")
    if email != user["email"]:
        store.users_by_email.pop(user["email"], None)
        for tok, em in list(store.tokens_to_email.items()):
            if em == user["email"]:
                store.tokens_to_email[tok] = email
        user["email"] = email
        store.users_by_email[email] = user
    user["name"] = name
    return user


def change_password(authorization, current_password: str, new_password: str) -> None:
    user = current_user(authorization)
    if user["hash"] != security.hash_password(current_password or "", user["salt"]):
        raise errors.ApiError(401, "Current password is incorrect.")
    if not new_password or len(new_password) < 6:
        raise errors.ApiError(400, "New password must be at least 6 characters.")
    user["salt"] = security.new_salt()
    user["hash"] = security.hash_password(new_password, user["salt"])
    current_token = (
        authorization[7:]
        if authorization and authorization.startswith("Bearer ")
        else ""
    )
    # Keep this session, drop all others.
    for tok, em in list(store.tokens_to_email.items()):
        if em == user["email"] and tok != current_token:
            store.tokens_to_email.pop(tok, None)

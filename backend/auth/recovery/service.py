"""Auth/recovery feature service (reset codes + password replacement)."""
import time

from backend.core import errors, security, store

RESET_TTL_SECONDS = 15 * 60


def issue_reset(email: str):
    """Always succeeds (no address enumeration); returns a demo token or None."""
    email = (email or "").strip().lower()
    if email in store.users_by_email:
        token = security.new_token()
        store.reset_tokens[token] = {"email": email, "expires": time.time() + RESET_TTL_SECONDS}
        return token
    return None


def reset_password(token: str, new_password: str) -> None:
    rec = store.reset_tokens.get(token or "")
    if not rec or rec["expires"] < time.time():
        raise errors.ApiError(400, "This reset code is invalid or expired. Request a new one.")
    if not new_password or len(new_password) < 6:
        raise errors.ApiError(400, "New password must be at least 6 characters.")
    user = store.users_by_email.get(rec["email"])
    if not user:
        raise errors.ApiError(400, "Account not found.")
    user["salt"] = security.new_salt()
    user["hash"] = security.hash_password(new_password, user["salt"])
    for tok, r in [x for x in store.reset_tokens.items() if x[1]["email"] == rec["email"]]:
        store.reset_tokens.pop(tok, None)
    for tok, em in [x for x in store.tokens_to_email.items() if x[1] == rec["email"]]:
        store.tokens_to_email.pop(tok, None)

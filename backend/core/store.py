"""In-memory demo stores (same semantics as the previous Express backend)."""
from typing import Any, Dict

# email -> {id, name, email, salt, hash, createdAt}
users_by_email: Dict[str, Dict[str, Any]] = {}
# token -> email
tokens_to_email: Dict[str, str] = {}
# reset token -> {email, expires}
reset_tokens: Dict[str, Dict[str, Any]] = {}
# saved contact messages
contact_inbox: list = []


def public_user(user: Dict[str, Any]) -> Dict[str, Any]:
    return {"id": user["id"], "name": user["name"], "email": user["email"]}

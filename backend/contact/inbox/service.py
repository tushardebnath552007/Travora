"""Contact/inbox feature service (validation + storage)."""
import re
import time

from backend.core import errors, store

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


def save_message(name: str, email: str, subject, message: str) -> None:
    name = (name or "").strip()
    email = (email or "").strip()
    message = (message or "").strip()
    if not name or not email or not message:
        raise errors.ApiError(400, "Name, email, and message are all required.")
    if not EMAIL_RE.match(email):
        raise errors.ApiError(400, "Please enter a valid email address.")
    store.contact_inbox.append(
        {
            "id": f"msg-{int(time.time() * 1000)}",
            "name": name,
            "email": email.lower(),
            "subject": str(subject or "General enquiry")[:120],
            "message": message[:2000],
            "createdAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        }
    )

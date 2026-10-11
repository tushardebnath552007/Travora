"""Contact/inbox feature router (contact page)."""
from fastapi import APIRouter

from backend.contact.inbox import schemas, service
from backend.core import errors

router = APIRouter()


@router.post("/api/contact", status_code=201)
def submit_contact(body: schemas.ContactBody):
    try:
        service.save_message(body.name, body.email, body.subject, body.message)
    except errors.ApiError as exc:
        raise errors.to_http(exc)
    return {"ok": True}

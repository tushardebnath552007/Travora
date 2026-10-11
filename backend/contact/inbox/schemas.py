"""Contact tab schemas — backing the contact page message desk."""
from pydantic import BaseModel


class ContactBody(BaseModel):
    name: str = ""
    email: str = ""
    subject: str = "General enquiry"
    message: str = ""

    class Config:
        extra = "ignore"

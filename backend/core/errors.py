"""Shared API error carrying an HTTP status."""
from fastapi import HTTPException


class ApiError(Exception):
    def __init__(self, status: int, detail: str):
        super().__init__(detail)
        self.status = status
        self.detail = detail


def to_http(exc: ApiError) -> HTTPException:
    return HTTPException(status_code=exc.status, detail=exc.detail)

"""Planner tab schemas — backing the trip-planner / itinerary pages."""
from typing import List, Optional

from pydantic import BaseModel


class Lenient(BaseModel):
    class Config:
        extra = "ignore"


class GenerateItineraryBody(Lenient):
    destinationName: str = "the destination"
    destinationId: str = "custom"
    durationDays: int = 5
    budget: int = 50000
    travelType: str = "Solo"
    interests: List[str] = []


class ItinerarySlot(BaseModel):
    time: str
    title: str
    location: str
    activity: str
    estimatedCost: int


class ItineraryDay(BaseModel):
    day: int
    title: str
    slots: List[ItinerarySlot]


class GeneratedItinerary(BaseModel):
    id: str
    destinationId: str
    destinationName: str
    durationDays: int
    totalBudget: int
    travelType: str
    interests: List[str]
    days: List[ItineraryDay]
    createdAt: str
    notes: str

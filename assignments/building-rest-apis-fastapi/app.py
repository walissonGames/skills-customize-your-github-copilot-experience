from typing import List

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(title="Task API")


tasks = [
    {
        "id": 1,
        "title": "Learn FastAPI",
        "description": "Build a simple REST API",
        "completed": False,
    },
    {
        "id": 2,
        "title": "Write tests",
        "description": "Check the endpoints in Swagger UI",
        "completed": True,
    },
]


class TaskBase(BaseModel):
    title: str = Field(..., min_length=1)
    description: str = Field(default="")
    completed: bool = False


class TaskCreate(TaskBase):
    pass


class Task(TaskBase):
    id: int


@app.get("/")
def read_root():
    return {"message": "Welcome to the Task API"}


@app.get("/tasks", response_model=List[Task])
def list_tasks():
    return tasks


# TODO: implement POST /tasks
# TODO: implement GET /tasks/{task_id}
# TODO: implement PUT /tasks/{task_id}
# TODO: implement DELETE /tasks/{task_id}

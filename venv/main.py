from fastapi import FastAPI
from typing import List

app = FastAPI()

inputs_list = []

@app.get("/")
async def root():
    return {"message": "This api holds a list of various things..."}


# New route to add inputs to the array
@app.post("/add-input")
async def add_input(input_value: str):
    inputs_list.append(input_value)
    return {"message": "Input added successfully", "input": input_value}

# Route to retrieve all inputs from the array
@app.get("/get-inputs", response_model=List[str])
async def get_inputs():
    return inputs_list

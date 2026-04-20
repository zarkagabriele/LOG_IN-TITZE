from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
def home():
    return FileResponse("static/index.html")


class Login(BaseModel):
    username: str
    password: str


@app.post("/login")
def controlla(dati: Login):
    if dati.username == "admin" and dati.password == "xxx123##":
        return {"messaggio": "le credenziali sono corrette"}

    return {"messaggio": "le credenziali sono sbagliate"}
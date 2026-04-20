from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
def home():
    return FileResponse("static/index.html")


@app.get("/login")
def controlla(username: str, password: str):
    if username == "admin" and password == "xxx123":
        return {"messaggio": "le credenziali sono corrette"}

    return {"messaggio": "le credenziali sono sbagliate"}
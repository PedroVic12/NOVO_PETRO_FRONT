from fastapi import FastAPI, UploadFile, File, Depends
from fastapi.middleware.cors import CORSMiddleware


class FileAPI:

    def __init__(self):
        self.app = FastAPI()
        self.configure_routes()
        self.add_middleware()

    def configure_routes(self):
        self.app.post("/upload/")(self.upload_file)

    def add_middleware(self):
        self.app.add_middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_methods=["*"],
            allow_headers=["*"],
        )

    async def upload_file(self, file: UploadFile = File(...)):
        contents = await file.read()
        with open("received_file.csv", "wb") as f:
            f.write(contents)
        return {"filename": file.filename}


file_api = FileAPI()
app = file_api.app

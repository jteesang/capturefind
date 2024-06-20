import json
import requests 
import time

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    'http://localhost',
    'http://localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

class Record:
    def __init__(self, timestamp, content):
        self.timestamp = timestamp
        self.content = content


@app.get('/')
def root():
    return {"hello world"}
    
@app.get('/logs')
def get_logs():
    # display log from most recent to oldest
    with open('requests/data.json') as file:
        data = json.load(file)
        return data

@app.post('/author/insert')
async def insert(req: Request):
    # validate data
    try:
        request_body = await req.json()
        
        # read log
        with open('requests/data.json', 'r') as read_file:
            existing_data = json.load(read_file)

        # append data
        with open('requests/new.json','w') as file:
            existing_data['data'].append(request_body)
            # return existing_data
            json.dump(existing_data, file, indent=4, separators=(',',': '))

    except ValueError as error:
        return False
    

    
    
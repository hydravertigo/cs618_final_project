#!/bin/bash

docker build --platform linux/amd64 --build-arg "VITE_BACKEND_URL=https://blog-backend-417104563114.us-east1.run.app/api/v1" -t blog-frontend .

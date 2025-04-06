#!/bin/bash

# filepath: /path/to/update_and_restart.sh

# Állítsd le a futó konténereket
echo "Stopping running containers..."
docker-compose down

# Frissítsd a Git repót
echo "Updating Git repository..."
git pull origin main

# Építsd újra a Docker image-t és indítsd el a konténereket
echo "Building and starting Docker containers..."
docker-compose up --build -d

# Ellenőrizd a konténerek állapotát
echo "Checking container status..."
docker ps

echo "Update and restart completed successfully!"
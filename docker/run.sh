#!/bin/bash

# Navigate to the docker directory
cd "$(dirname "$0")"

# Run the docker-compose command
docker-compose up --build "$@" 
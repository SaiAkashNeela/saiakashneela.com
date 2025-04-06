# Docker Setup for Portfolio Site

This directory contains the Docker configuration for running the portfolio site in a containerized environment.

## Files

- `Dockerfile`: Multi-stage build that compiles the React app and serves it using Nginx
- `nginx.conf`: Nginx configuration file to serve the React app on port 3333
- `docker-compose.yml`: Configuration for orchestrating the Docker containers
- `run.sh`: Convenience script to run the application

## Usage

To run the application:

```bash
# From the project root directory
./docker/run.sh

# Or to run in detached mode
./docker/run.sh -d
```

The application will be available at http://localhost:3333

## Logs

Nginx logs are stored in the `docker/nginx_logs` directory:
- `access.log`: HTTP access logs
- `error.log`: Nginx error logs 
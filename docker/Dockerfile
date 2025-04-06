# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine

# Copy built app from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3333
EXPOSE 3333

# Start Nginx
CMD ["nginx", "-g", "daemon off;"] 
# Use a lightweight Node.js image for the production environment
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the build output from your local machine into the container
COPY /out ./public

# Expose port 80
EXPOSE 80

# Run a simple HTTP server to serve the static files
CMD ["npx", "http-server", "-p", "80", "./public"]

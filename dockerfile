# Use the official Bun image
FROM oven/bun:debian

# Set the working directory
WORKDIR /app

# Copy all the application code
COPY . .

# Install dependencies
RUN bun install

# Build the application
RUN bun run build

# Delete useless files for production
RUN rm -rf src

# Set environment variables - PORT 8080 is necessary for Google App Engine
ENV PORT=8080 
ENV MONGO_URI=

# Command to run your app
CMD ["bun", "start"]
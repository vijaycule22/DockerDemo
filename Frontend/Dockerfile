# Use an official node image as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the application
RUN npm run build

# Expose the port Vite will run on
EXPOSE 5173

# Serve the app using Vite
CMD ["npm", "run", "dev", "--", "--host"]

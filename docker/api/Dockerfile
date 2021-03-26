
FROM node:14-slim
# FROM node:14-alpine

# Workaround npm limitation with running as non-root
RUN mkdir "/.npm"
RUN chown -R 1001:0 "/.npm"

# Run as non-root user.
USER 1001

# Create and change to the app directory.
WORKDIR /opt/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install dependencies.
# If you add a package-lock.json speed your build by switching to 'npm ci'.
RUN npm ci

# Copy local code to the container image.
COPY . .

# Expose API port
EXPOSE 3333

# Run the web service on container startup.
CMD [ "npm", "start" ]

# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

RUN npm install

# Copy local code to the container image.
COPY . ./

RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "start" ]


## gcloud builds submit --tag gcr.io/projetos-nairuz-2/site-nairuz --project=projetos-nairuz-2 --account=desenvolvimento@nairuz.com.br
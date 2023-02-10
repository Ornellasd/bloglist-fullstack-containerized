# build and test stage
FROM node:16 as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

# test parameters go here

RUN npm run build-localhost

# assemble runtime image state
FROM nginx:1.20-alpine

# COPY the directory build from build-stage to /usr/share/nginx/html
# The target location here was found from the docker hub page
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
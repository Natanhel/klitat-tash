# build stage
FROM node:lts-alpine as build-stage
RUN mkdir -p /app
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .

ARG VUE_APP_CLIENT_ID
ARG VUE_APP_REDIRECT_URI
ARG VUE_APP_BACKEND_URL
ARG VUE_APP_ANALYTICS_ID
# production env variables
# ENV VUE_APP_AUTHORITY=https://login.microsoftonline.com/78820852-55fa-450b-908d-45c0d911e76b/
ENV VUE_APP_CLIENT_ID=$VUE_APP_CLIENT_ID
ENV VUE_APP_REDIRECT_URI=$VUE_APP_REDIRECT_URI
ENV VUE_APP_BACKEND_URL=$VUE_APP_BACKEND_URL
ENV VUE_APP_ANALYTICS_ID=$VUE_APP_ANALYTICS_ID

# build for production
ENV NODE_ENV=production
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# copy from the dist folder of the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# remove default nginx config and insert out own
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

LABEL maintainer="Raz Korteran" \
      buildDate="29/12/2020"

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

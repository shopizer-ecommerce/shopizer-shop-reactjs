# build env
FROM node:13.12.0-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
#remove internal .env file
RUN npm ci --silent
#must match package.json react-scripts
COPY . ./
RUN npm run build



# production env
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN ls -al /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]    
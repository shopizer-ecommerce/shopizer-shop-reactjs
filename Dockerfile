# build env
FROM node:13.12.0-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
COPY .env ./
COPY env.sh ./
COPY conf ./
#remove internal .env file
RUN npm ci --silent
#must match package.json react-scripts
COPY . .
RUN npm run build


# production env
FROM nginx:stable-alpine

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

RUN ls -al

COPY --from=builder /app/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .

RUN ls -al /usr/share/nginx/html

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]    

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
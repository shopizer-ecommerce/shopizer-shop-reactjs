This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run the commands below

Configure shopizer backend in public/env-config.js

## Tested with node  v16.13.0

### USING NPM

### `npm i`

If it fails run the following

### `npm install --legacy-peer-deps`

### `npm run dev`

http://localhost:3000

### docker files ###

docker build . -t shopizerecomm/shopizer-shop:latest

docker run \
-e "APP_MERCHANT=DEFAULT" \
-e "APP_BASE_URL=http://localhost:8080" \
-it --rm -p 80:80 shopizerecomm/shopizer-shop-reactjs

http://localhost

## Change theme color

env should have
APP_THEME_COLOR=#D1D1D1

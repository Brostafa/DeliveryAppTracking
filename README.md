# Delivery App Tracking

This is a demo server which we can use to stream GPS data to know where the delivery is.

## Server installation on Ubuntu

```bash
# install node.js
sudo apt-get install curl python-software-properties
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs

# check if node was installated
node -v #v12.1.0
npm -v #6.9.0

# install pm2
pm2 i pm2 -g

# install yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
mark

# Clone repo and install packages
git clone https://github.com/Brostafa/DeliveryAppTracking.git
cd DeliveryAppTracking
yarn install

# Start the app
pm2 start index.js

# check if the app was running
pm2 logs

# [Server] Listening on PORT 8080
```

## APIs

- `GET /logs` you will get GPS logs
- `GET /clear-logs` if you want to clear server logs from `/logs` endpoint
  - Note: on server restart, logs will also be cleared for `/logs` endpoint but will persist on the server and can be accessed through `pm2 logs`
- `POST /gps` endpoint we use to POST new GPS data
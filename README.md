# samapp
express usage


# How to setup server
Install node:
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y npm

Install Git:
sudo apt-get update
sudo apt-get install pm2

Install PM2
npm install pm2@latest -g

Clone repo
git clone https://github.com/raspsam/samapp

Start server
pm2 start app.js
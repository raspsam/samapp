# samapp
express usage


# How to setup server
Install curl:
```sudo apt-get update```
```sudo apt-get install curl -y```

Install node
```curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -```
```sudo apt-get install -y nodejs```

Make sure node/NPM installed:
```node -v```
```npm -v```

Install Git:
```sudo apt-get install git -y```

Install PM2
```sudo npm install pm2@latest -g```

Clone repo OR sync directory
```git clone https://github.com/raspsam/samapp```

Install NPM packages (after changing to working directory)
```npm install```

Start server
```pm2 start ./bin/www```

OR FOR VAGRANT:
Start vagrant (from folder with Vagrantfile):
```vagrant up```
SSH into it:
```vagrant ssh```
Start the script:
```sudo su```
```pm2 start /vagrant_data/bin/www --watch```
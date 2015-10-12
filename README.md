Basic Express.js scafolded directory structure industry ready
========================================================

Basic folder-structure for a large-scale Node.js project. Clone and start development quickly


### Install an app

Run the following command in root directory of an app in command prompt.

###### *Install node packages*

server/ node install

###### *Install bower components*

client/src/ bower install

### Run an app

###### *Run Server*

Run the following command in root directory of an app in command prompt.

server/ node server.js

You can see the port number in command prompt after sucessfull run

You can change the settings in server/config/config.js file

### API

###### *Get request*

    http://localhost:8000/test?id=87&name=gaurav

###### *POST request*

    http://localhost:8000/test?id=87&name=gaurav

    Body:

    	{
			"email":"gaurav_bng@hotmail.com"
		}
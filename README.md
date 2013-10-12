node-Sockect-chat is a chat application built using socket.io, express, jade and jquery.
Websockets is revolutionary techology introduced in HTML5 which enables full duplex communication with the browsser and the server . Socket.io is the abstraction layer for Websockets in Node.Js
Socket.io is built in such a way that both the client(browser) and the server can send messages and listen to the incoming messages
The event triggered at the server will be handled by the corresponding event handler at the client and vice-versa , socket.io facilitates this communication
The message type send by the server is labelled 'serverMessage' and those of clients are labelled 'userMessage' and 'myMessage'
## Installation

Get a local copy of the current code using git:

    $ git clone https://github.com/Karthic-Hackintosh/node-Socket-chat.git
    $ cd node-Socket-chat

Run the following to install the dependencies:

	$ npm install

Run the app's webserver:

    $ node app.js

Observe the port number and use the following as your url with the correct port number.

	http://localhost:<port number>/



NOTES:
	*Client/Server should send the messages as strings , so the JSON.stringify() is used on the javascript object to be sent , on the other side the string has to be converted into a javascript object by using JSON.parse() . 
	*The syntax for sending messages on both client and the server are the same . 
var io = require('socket.io');

exports.initialize = function(server) { 
	io = io.listen(server);
	io.sockets.on("connection",function(socket) { 
		socket.send(JSON.stringify({type:'serverMessage',message:'Welcome to Karthic and Sanjnas Education system for rural masses'}));
	socket.on('message',function(message)  {
		message=JSON.parse(message);
		if(message.type="userMessage"){
			socket.get("name",function(err,name){
				message.username=name;
				socket.broadcast.send(JSON.stringify(message));	
				message.type="myMessage";
				socket.send(JSON.stringify(message));

			});
			
		}
	});
	socket.on("set_name",function(data){
		socket.set('name',data.name,function(){
			socket.emit('name_set',data);
		});


	});
  });
};


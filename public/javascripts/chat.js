var socket = io.connect('/');//get connected to the server 

socket.on("message",function(data){ //associate an event handler for the messages from the server 
	data=JSON.parse(data);
	var msg = document.getElementById('messages');
	msg.innerHTML+=data.message;
});

$(function(){
	$('#send').click(function(){
		var data = {
			type:'userMessage',
			message:$('#message').val() 
		};
		socket.send(JSON.stringify(data));
		$('#message').val('');
	});
});

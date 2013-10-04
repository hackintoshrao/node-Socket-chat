var socket = io.connect('/');//get connected to the server 

socket.on("message",function(data){ //associate an event handler for the messages from the server 
	data=JSON.parse(data);
	$('#messages').append('<div class="'+data.type'">' + data.message + '</div>' ); //append the messages to div messages space on the page .

});

$(function(){
	$('#send').click(function(data){
		var data = {
			type:'userMessage',
			message:$('#message').val() 
		};
		socket.send(JSON.stringify(data));
		$('#message').val('');
	});
});
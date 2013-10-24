var socket = io.connect('/');//get connected to the server 

socket.on("message",function(data){ //associate an event handler for the messages from the server 
	data=JSON.parse(data);
//	var msg = document.getElementById('messages');
//	msg.innerHTML+=data.message;
	if(data.username && data.type=="userMessage"){
		$('#messages').append('<div id="'+data.type+'" class="alert alert-danger"><span style="color:blue;">'+data.username+":</span>"+data.message + '</div>');

	}
	else if(data.username && data.type=="serverMessage"){
		$('#messages').append('<div id="'+data.type+'" class="alert alert-success"><span style="color:blue;">'+data.username+":</span>"+data.message + '</div>');

	}
	else if(data.username && data.type=="myMessage"){
		$('#messages').append('<div id="'+data.type+'" class="alert alert-info"><span style="color:blue;">'+data.username+":</span>"+data.message + '</div>');

	}
	else{
		$('#messages').append('<div id="'+data.type+'" class="alert alert-warning">'+data.message + '</div>');
	}
});
socket.on('name_set',function(data){
	$('#messages').append('<div id="systemMessage" class="alert-danger">'+'Hello '+data.name+'</div>');
	$('#send').click(function(){
		var data = {
			type:'userMessage',
			message:$('#message').val() 
		};
		socket.send(JSON.stringify(data));
		$('#message').val('');
	});
})

$(function(){
	$('.hide').hide();//hiding the main content 
	$('#nameform').modal("show");//displaying the modal 
	$('#setname').click(function(){ //handler for the modal setname 
		
		$('#chatRoom').toggle(); //displaying the main content 
		socket.emit("set_name",{name:$('#nickname').val()});
		$('#nameform').modal("hide"); //hiding the modal 
		console.log("control reached" + $('#nickname').val());
		
	});
	
});

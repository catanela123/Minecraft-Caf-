
var canvas = new fabric.Canvas('myCanvas');

player_x = 175;
player_y = 175;

block_image_width = 150;
block_image_height = 150;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("personaje.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(430);
	player_object.scaleToHeight(430);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Se presiona p y shift al mismo tiempo");
	block_image_width = block_image_width + 150;
	block_image_height = block_image_height + 150;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("Se presiona m y shift al mismo tiempo");
	block_image_width = block_image_width - 150;
	block_image_height = block_image_height - 150;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '49')
	{
		new_image('cake.png'); 
		console.log("1");
	}
	if(keyPressed == '50')
	{
		new_image('cementorosa.jpg'); 
		console.log("2");
	}
	if(keyPressed == '51')
	{
		new_image('comidita.png'); 
		console.log("3");
	}
	if(keyPressed == '52')
	{
		new_image('cute.png'); 
		console.log("4");
	}
	if(keyPressed == '53')
	{
		new_image('lol.png'); 
		console.log("5");
	}
	if(keyPressed == '54')
	{
		new_image('materialrosita.jpg'); 
		console.log("6");
	}
	if(keyPressed == '55')
	{
		new_image('me.png'); 
		console.log("7");
	}
	if(keyPressed == '56')
	{
		new_image('mm.png'); 
		console.log("8");
	}
	if(keyPressed == '57')
	{
		new_image('rebanadadecake.png'); 
		console.log("9");
	}
	
}
function up()
{
	if(player_y >=50)
	{
		player_y = player_y - block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia arriba, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=520)
	{
		player_y = player_y + block_image_height;
		console.log("altura del bloque = " + block_image_height);
		console.log("Cuando se presiona la flecha hacia abajo, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >50)
	{
		player_x = player_x - block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha izquierda, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=1100)
	{
		player_x = player_x + block_image_width;
		console.log("ancho del bloque = " + block_image_width);
		console.log("Cuando se presiona la flecha derecha, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

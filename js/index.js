import CrearMapa from './map.js';
let canvas = document.getElementById("MyCanvas");
let ctx = canvas.getContext("2d");
let DivJuego = document.getElementById("juego");
ctx.imageSmoothingEnabled = false;

function loop(){
	resize();
	CrearMapa(canvas, ctx);
	window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);


function resize(){
	canvas.width = parseInt(getComputedStyle(document.getElementById('MyCanvas')).getPropertyValue('width'));
	canvas.height = parseInt(getComputedStyle(document.getElementById('MyCanvas')).getPropertyValue('height'));
}

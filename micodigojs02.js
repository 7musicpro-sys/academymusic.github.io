function hacerclic(){
	document.querySelector("#columna blockquote:first-child").onclick=mostraralerta;
		
}
function mostraralerta(){
	
	alert('Bienvenido!!!');
}
window.onload=hacerclic;
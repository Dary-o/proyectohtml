/*    var nombre = prompt ('Ingrese su nombre')
    	alert ("Bienvenid@ "+nombre+" a nuestro sitio")

    	var consola = prompt ('¿Qué consola jugas?')
    	var juego = prompt ('¿Qué juego jugas?')
    	var puntuacion = prompt ('Puntaje del 1 al 10')
    	var tipos = prompt ('¿Qué tipo de juegos jugas?')
*/

function adivinanza() {
	var letras = ['t','r','w','i','g','m','y','f','p','d','x','b','n','j','z','s','q','v','h','l','c','k','e','a','o']

	var numero = prompt('Ingresa un número entre 0 y 25')

	if(numero<0 || numero>25) {
		alert("El número ingresado no es válido, debe ser entre 0 y 25")
	} else {
		var letra_elegida = prompt("Ingrese la letra: Q,O,Y,V,S,A,W,C,X,P,D,K,E,Z,J,G,T,I,h,l,F,B,N,M,R")
		
		if(letras[numero]==letra_elegida) {
			alert("Correcto! Adivinaste!")
		} else {
			alert("Intentalo nuevamente")
		}
	}

}

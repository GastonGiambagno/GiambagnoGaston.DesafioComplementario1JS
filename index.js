alert(
	'Ingrese un numero entre 0 y 9 y se mostrarán los resultados de su tabla de multiplicaciones'
);
let numero = parseInt(prompt('Ingrese un numero'));

while (numero < 0 || numero >= 10) {
	alert('Error. Ingrese un numero entre 0 y 9');
	numero = parseInt(prompt('Ingrese un numero'));
}

for (i = 0; i <= 10; i++) {
	let resultado = numero * i;
	let mensaje = `${numero} * ${i} = ${resultado}`;
	alert(mensaje);
	// console.log(mensaje);
}

alert('Muchas Gracias');

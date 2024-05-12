/**
 * 
 */

var BDDProductos = [];

function verificarContrasenia() {
	let contrasena1 = document.getElementById("exampleInputPassword1").value;
	let contrasena2 = document.getElementById("exampleInputPassword2").value;
	if (contrasena1 === contrasena2) {
		return true;
	} else {
		alert("Las contraseñas no son iguales, por favor intentelo de nuevo");
		document.getElementById("exampleInputPassword2").focus();
		return false;
	}
}

function verificarContrasenia1() {
	let contrasena3 = document.getElementById("exampleInputPassword3").value;
	let contrasena4 = document.getElementById("exampleInputPassword4").value;
	if (contrasena3 === contrasena4) {
		return true;
	} else {
		alert("Las contraseñas no son iguales, por favor intentelo de nuevo");
		document.getElementById("exampleInputPassword4").focus();
		return false;
	}
}

const todosLosComplementos = [
	{ id: 1, precio: 300, nombre: "Baul pequeño", cantidad: 0 },
	{ id: 2, precio: 40, nombre: "Candado duro", cantidad: 0 },
	{ id: 3, precio: 25, nombre: "Lona cubre motos", cantidad: 0 },
	{ id: 4, precio: 120, nombre: "Baul grande", cantidad: 0 },
	{ id: 5, precio: 50, nombre: "Candado largo", cantidad: 0 },
	{ id: 6, precio: 150, nombre: "Casco motocross", cantidad: 0 },
	{ id: 7, precio: 330, nombre: "Chupa de cuero", cantidad: 0 },
	{ id: 8, precio: 76, nombre: "Guantes de motos", cantidad: 0 },
	{ id: 9, precio: 420, nombre: "Cascos de moto", cantidad: 0 },
	{ id: 10, precio: 400, nombre: "Pantalon protector de moto", cantidad: 0 }
];
const todasLasMotos = [
	{ id: 1, precio: 4500, nombre: "KTM Duke 125", cantidad: 0 },
	{ id: 2, precio: 7000, nombre: "Aprilia RS 475", cantidad: 0 },
	{ id: 3, precio: 30000, nombre: "Yamaha YZF-R1", cantidad: 0 },
	{ id: 4, precio: 13200, nombre: "Yamaha R6 Race", cantidad: 0 },
	{ id: 5, precio: 15500, nombre: "Honda VT 1300 CX FURY", cantidad: 0 },
	{ id: 6, precio: 10500, nombre: "Honda CRF450R", cantidad: 0 },
	{ id: 7, precio: 4000, nombre: "Kymco Super Dink", cantidad: 0 },
	{ id: 8, precio: 4700, nombre: "Primavera 125 Euro 5", cantidad: 0 }
];

let productos = [];

function aniadirProductoMoto(idMoto, cantidad) {
	const motos = todasLasMotos.find(m => m.id === idMoto);
	if (motos) {
		const siExisteObjeto = productos.find(objeto => objeto.id === idMoto);
		if (siExisteObjeto) {
			siExisteObjeto.cantidad += cantidad;
			console.log("Se ha añadido correctamente");
			console.log(productos);
		} else {
			motos.cantidad = cantidad;
			productos.push(motos);
			console.log("Se ha añadido correctamente");
			console.log(productos);
		}
	} else {
		console.log("No se ha encontrado ninguna moto asi");
	}
}

//Eliminar producto
function eliminarProductoMoto(idMoto, cantidad) {
	const motos = todasLasMotos.find(m => m.id === idMoto);
	if (motos) {
		const siExisteObjeto = productos.find(objeto => objeto.id === idMoto);
		if (siExisteObjeto) {
			if (siExisteObjeto.cantidad >= 2) {
				siExisteObjeto.cantidad -= cantidad;
				console.log("Se ha eliminado correctamente");
				console.log(productos);
			} else if(siExisteObjeto.cantidad ===1){
				motos.cantidad = cantidad;
				//Aqui tendria que poner la funcion de eliminar el producto
				console.log("Se ha eliminado correctamente");
				console.log(productos);
			}

		} else {
			console.log("No se ha encontrado ninguna moto asi");
		}
	} else {
		console.log("No se ha encontrado ninguna moto asi");
	}
}


function aniadirProductoComplemento(idProducto, cantidad) {
	const productosComplementos = todosLosComplementos.find(t => t.id === idProducto);
	if (productosComplementos) {
		const siExisteObjeto1 = productos.find(objetoP => objetoP.id === idProducto);
		if (siExisteObjeto1) {
			siExisteObjeto1.cantidad += cantidad;
			console.log("Se ha añadido correctamente");
			console.log(productos);
		} else {
			productosComplementos.cantidad = cantidad;
			productos.push(productosComplementos);
			console.log("Se ha añadido correctamente");
			console.log(productos);
		}
	} else {
		console.log("No se ha encontrado ninguna moto asi");
	}
}


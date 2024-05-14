/**
 * 
 */
var BDDProductos = JSON.parse(localStorage.getItem("nuevoProducto"));
var productos = [{ id: 0, precio: 0, nombre: "Nada", cantidad: 0 }];

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

const todosProductos = [
	{ id: 11, precio: 4500, nombre: "KTM Duke 125", cantidad: 0 },
	{ id: 12, precio: 7000, nombre: "Aprilia RS 475", cantidad: 0 },
	{ id: 13, precio: 30000, nombre: "Yamaha YZF-R1", cantidad: 0 },
	{ id: 14, precio: 13200, nombre: "Yamaha R6 Race", cantidad: 0 },
	{ id: 15, precio: 15500, nombre: "Honda VT 1300 CX FURY", cantidad: 0 },
	{ id: 16, precio: 10500, nombre: "Honda CRF450R", cantidad: 0 },
	{ id: 17, precio: 4000, nombre: "Kymco Super Dink", cantidad: 0 },
	{ id: 18, precio: 4700, nombre: "Primavera 125 Euro 5", cantidad: 0 },
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

if (BDDProductos) {
	productos = BDDProductos;
	const indice = productos.findIndex(objeto => objeto.id === 0);
	if (indice !== -1) {
		productos.splice(indice, 1);
		localStorage.setItem("nuevoProducto", JSON.stringify(productos));
	}
}


function aniadirProducto(idProducto, cantidad) {
	const producto = todosProductos.find(p => p.id === idProducto);
	if (producto) {
		const siExisteObjeto = productos.find(objeto => objeto.id === idProducto);
		if (siExisteObjeto) {
			siExisteObjeto.cantidad += cantidad;
		} else {
			producto.cantidad = cantidad;
			productos.push(producto);
		}
		localStorage.setItem("nuevoProducto", JSON.stringify(productos));
		console.log("Se ha añadido correctamente");
		console.log(productos);
	} else {
		console.log("No se ha encontrado ningún producto con ese ID");
	}
}

//Eliminar producto cantidad
function eliminarProductoCantidad(idProducto) {
	const producto = todosProductos.find(p => p.id === idProducto);
	if (producto) {
		const siExisteObjeto = productos.find(objeto => objeto.id === idProducto);
		if (siExisteObjeto) {
			if (siExisteObjeto.cantidad > 1) {
				siExisteObjeto.cantidad -= 1;
				localStorage.setItem("nuevoProducto", JSON.stringify(productos));
				console.log("Se ha eliminado correctamente");
				console.log(productos);
				mostrar();
			} else if (siExisteObjeto.cantidad === 1) {
				// Eliminar el producto
				const indice = productos.indexOf(siExisteObjeto);
				if (indice > -1) {
					productos.splice(indice, 1);
					localStorage.setItem("nuevoProducto", JSON.stringify(productos));
					console.log("Se ha eliminado correctamente");
					console.log(productos);
					mostrar();
				}
			}
		} else {
			console.log("No se ha encontrado ningún producto con ese ID");
		}
	} else {
		console.log("No se ha encontrado ningún producto con ese ID");
	}
}

//Eliminar todos los productos
function eliminarProductoPorId(idProducto) {
	const indice = productos.findIndex(objeto => objeto.id === idProducto);
	if (indice !== -1) {
		productos.splice(indice, 1);
		localStorage.setItem("nuevoProducto", JSON.stringify(productos));
		console.log("Se ha eliminado correctamente");
		console.log(productos);
		mostrar();
	} else {
		console.log("No se ha encontrado ningún producto con ese ID");
	}
}

function mostrar() {
	let txt = "";
	let resultado = document.getElementById("tbody");
	let resultado1 = document.getElementById("tbody1");
	resultado.innerHTML = "";
	console.log(productos)
	for (let i = 0; i < productos.length; i++) {
		txt = "<tr>";
		txt += '<td class="columnas" >' + productos[i].nombre + "</td>";
		txt += '<td class="columnas" >' + productos[i].precio + "</td>";
		txt += '<td class="columnas">' + productos[i].cantidad + "</td>";
		txt += '<td class="columnas"><button class="btn btn-outline-primary" onclick="eliminarProductoCantidad(' + productos[i].id + ',' + productos[i].cantidad + ')">Quitar 1</button> <button class="btn btn-outline-primary" onclick="eliminarProductoPorId(' + productos[i].id + ')">Eliminar producto</button></td>'
		txt += "</tr>";
		resultado.innerHTML += txt;
		resultado1.innerHTML += txt;
	}

}






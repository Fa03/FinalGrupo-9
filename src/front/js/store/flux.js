const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			producto: [],
			ordenes: [],
			users: [],
			carrito: [] // para probar agregar carritos >>ORDENES???<<<
		},
		actions: {
			// Use getActions to call a function within a fuction
			getProducto: async () => {
				const URL = "https://proyectosweetsbyfray.herokuapp.com/api/productos";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				console.log("DATA >>>", json);

				setStore({ producto: json });
			},

			// getUsers: async () => {
			// 	const URL = "https://proyectosweetsbyfray.herokuapp.com/api/users";
			// 	const CONFIG = {
			// 		method: "GET",
			// 		headers: {
			// 			"Content-type": "application/json"
			// 		}
			// 	};
			// 	const response = await fetch(URL, CONFIG);
			// 	const json = await response.json();
			// 	// console.log("DATA >>>", json);

			// 	setStore({ users: json });
			// },

			setCarrito: (producto, cantidad) => {
				const store = getStore();
				setStore({ carrito: [...store.carrito, [producto, cantidad]] });
				console.log(store.carrito);
			},

			quitarProducto: quitar => {
				const carrito = getStore().carrito;
				let indice = -1;
				carrito.map((item, index) => {
					if (item[0] == quitar) indice = index;
				});
				// console.log(quitar);
				// console.log(indice);
				setStore({ carrito: [...carrito.slice(0, indice), ...carrito.slice(indice + 1)] });
				// console.log(carrito);
			},

			actualizarCantidad: (producto, cantidad) => {
				console.log(cantidad);
				const carritoCantidad = getStore().carrito;
				console.log(producto);
				let indice = carritoCantidad.indexOf(producto.producto);
				// let indice = -1;

				// carritoCantidad.map((item, index) => {
				// 	if (item[0].id == producto.producto) indice = index;
				// });
				console.log(indice);
				console.log(carritoCantidad[indice]);
				carritoCantidad[indice][1] = cantidad;
				setStore({ carrito: carritoCantidad });

				// console.log(carritoCantidad);
				console.log(getStore().carrito);
			}
		}
	};
};

export default getState;

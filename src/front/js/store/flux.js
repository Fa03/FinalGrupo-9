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
				// console.log("DATA >>>", json);

				setStore({ producto: json });
			},

			getUsers: async () => {
				const URL = "https://proyectosweetsbyfray.herokuapp.com/api/users";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				// console.log("DATA >>>", json);

				setStore({ users: json });
			},

			setCarrito: producto => {
				const store = getStore();
				setStore({ carrito: [...store.carrito, producto] });
				// console.log(store.carrito);
			},

			quitarProducto: quitar => {
				const carrito = getStore().carrito;
				const indice = carrito.indexOf(quitar);
				setStore({ carrito: [...carrito.slice(0, indice), ...carrito.slice(indice + 1)] });
				// console.log(carrito);
			}
		}
	};
};

export default getState;

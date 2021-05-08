const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			producto: [],
			ordenes: [],
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

			// registerUser() {
			// 	let myHeaders = new Headers();
			// 	myHeaders.append("Content-Type", "application/json");

			// 	var raw = JSON.stringify(store.user);

			// 	fetch("https://3001-blue-mink-6mmkh4gt.ws-us03.gitpod.io/api/register", {
			// 		method: "POST",
			// 		headers: myHeaders,
			// 		body: raw,
			// 		redirect: "follow"
			// 	})
			// 		.then(response => response.json())
			// 		.then(result => console.log(result))
			// 		.catch(error => console.log("error", error));
			// }

			// >>>>>> de aque en adelante agregue FABIAN para crear orden

			setCarrito: producto => {
				const store = getStore();
				setStore({ carrito: [...store.carrito, producto] });
				console.log(store.carrito);
			},

			quitarProducto: quitar => {
				const carrito = getStore().carrito;
				const indice = carrito.indexOf(quitar);
				setStore({ carrito: [...carrito.slice(0, indice), ...carrito.slice(indice + 1)] });
				console.log(carrito);
			}
		}
	};
};

export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			producto: [],
			ordenes: []
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
			}
		}
	};
};

export default getState;

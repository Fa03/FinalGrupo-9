import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const PrecioCompra = () => {
	const { store, actions } = useContext(Context);

	let precioPagar = 0;

	store.carrito.map((item, index) => {
		precioPagar = precioPagar + item[0].precio * item[1];
	});
	// console.log(precioPagar);
	return precioPagar;
};

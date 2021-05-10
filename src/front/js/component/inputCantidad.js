import React, { Component, useState, useContext } from "react";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";

export const InputCantidad = producto => {
	const { store, actions } = useContext(Context);

	const [valor, setValor] = useState(1);
	const disminuir = () => {
		if (valor > 1) {
			setValor(valor - 1);
			actions.actualizarCantidad(producto, valor - 1);
		}
	};
	const incrementar = () => {
		setValor(valor + 1);
		actions.actualizarCantidad(producto, valor + 1);
	};

	return (
		<div className="def-number-input number-input">
			<button onClick={disminuir} className="minus" />
			<input
				className="quantity"
				name="quantity"
				value={producto.producto[1]}
				onChange={() => console.log("change")}
				type="number"
			/>
			<button onClick={incrementar} className="plus" />
		</div>
	);
};

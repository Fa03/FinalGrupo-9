import React, { Component, useState, useContext } from "react";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";

export const InputCantidad = () => {
	const { store, actions } = useContext(Context);

	const [valor, setValor] = useState(1);
	const disminuir = () => (valor == 1 ? null : setValor(valor - 1));
	const incrementar = () => setValor(valor + 1);

	return (
		<div className="def-number-input number-input">
			<button onClick={disminuir} className="minus" />
			<input
				className="quantity"
				name="quantity"
				value={valor}
				onChange={() => console.log("change")}
				type="number"
			/>
			<button onClick={incrementar} className="plus" />
		</div>
	);
};

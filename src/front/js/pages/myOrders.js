import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const MyOrders = () => {
	const { store, actions } = useContext(Context);
	const [myUser, setMyUser] = useState("");

	const ordenes = email => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			email: email
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch("https://3001-blue-koi-rys0mz5q.ws-us03.gitpod.io/api/myOrders", requestOptions)
			.then(response => response.json())
			.then(data => console.log("<<DATA>> ", data))
			.catch(error => console.log("error", error));
	};

	useEffect(() => {
		const userData = JSON.parse(sessionStorage.getItem("user"));

		setMyUser(userData.nombre);

		ordenes(userData.email);
	}, []);

	// let userToken = sessionStorage.getItem("token");

	// let filterUser = store.users.filter(({ email: userEmail }, i) => {
	// 	return store.users[i];
	// });
	// // console.log(filterUser);
	// const myUser = filterUser[0].nombre;
	// console.log(myUser);

	return (
		<Container className="my-5 pt-5">
			<Row className="d-flex align-items-center justify-content-around">
				<Col xs={4}>{"Hola " + myUser}</Col>

				<Col xs={3}>Y esto otro</Col>
			</Row>
		</Container>
	);
};

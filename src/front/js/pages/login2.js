import React, { useState, useEffect, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, useParams, Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default function SignIn() {
	const classes = useStyles();
	const [datos, setDatos] = useState({
		email: "",
		password: ""
	});

	const [confLog, setConfLog] = useState(false);

	const handleInputChange = event => {
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (datos.password == null || datos.email == null) {
			alert("Ingrese su correo y su contraseña");
		} else {
			// console.log(datos);

			// FETCH LOGIN
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			var raw = JSON.stringify(datos);

			var requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};

			fetch("https://3001-rose-raccoon-vvret31o.ws-us04.gitpod.io/api/login", requestOptions)
				.then(response => {
					if (!response.ok) {
						throw Error(response.json());
					}
					response.status === 200
						? setTimeout(() => {
								setConfLog(true);
						  }, 2000)
						: null;
					return response.json();
				})
				.then(data => {
					if (typeof Storage !== "undefined") {
						sessionStorage.setItem(
							"user",
							JSON.stringify({
								token: data.token,
								email: data.email,
								nombre: data.nombre,
								apellidos: data.apellidos,
								nacimiento: data.nacimiento,
								sexo: data.sexo,
								telefono: data.telefono
							})
						);
					}
				})
				.catch(error =>
					console.log("error", alert("La contraseña o el correo es incorrecto, favor intente de nuevo"))
				);
		}
	};

	return (
		<Container component="main" maxWidth="xs" className="pt-3 mt-3">
			<br />
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5" style={{ color: "#c3777b" }}>
					Inicio de sesión
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<TextField
						type="email"
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Correo electrónico"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={handleInputChange}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Contraseña"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleInputChange}
					/>
					<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordarme" />
					<Button
						type="submit"
						fullWidth
						variant="contained"
						className={classes.submit}
						style={{ background: "#c3777b", border: "none", color: "white", textTransform: "capitalize" }}>
						Iniciar sesión
					</Button>
					<Grid container>
						<Grid item xs>
							<Link to="/retrivePass">Olvido su contraseña?</Link>
						</Grid>
						<Grid item>
							<Link to="/register">{"No tienes una cuenta? Registrese"}</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			{confLog ? <Redirect to="/" /> : null}
		</Container>
	);
}

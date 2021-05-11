import React, { useState, useEffect, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, useParams, Redirect } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ModalTerms } from "../component/modalTerms";
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
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	formControl: {
		minWidth: 120
	}
}));

export default function SignUp() {
	const classes = useStyles();
	const [sex, setSex] = React.useState("");
	const [confReg, setConfReg] = useState(false);
	const [datos, setDatos] = useState({
		nombre: "",
		apellidos: "",
		nacimiento: "",
		sexo: "",
		telefono: "",
		email: "",
		password: "",
		confPassword: ""
	});

	const handleChangeSex = event => {
		setSex(event.target.value);
		if (event.target.value == 10) {
			setDatos({
				...datos,
				[event.target.name]: "Masculino"
			});
		} else if (event.target.value == 20) {
			setDatos({
				...datos,
				[event.target.name]: "Femenino"
			});
		}
	};

	const handleInputChange = event => {
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (datos.password !== datos.confPassword) {
			// console.log(datos.password, datos.confPassword);
			alert("Las contraseñas deben coincidir.");
		} else {
			// console.log(datos);

			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			var raw = JSON.stringify(datos);

			fetch("https://3001-blue-koi-rys0mz5q.ws-us04.gitpod.io/api/register", {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			})
				.then(response => {
					response.status === 200
						? setTimeout(() => {
								setConfReg(true);
						  }, 2000)
						: null;
					return response.json();
				})
				// .then(data => console.log(data))
				.catch(error => {
					console.log("error", error);
					alert("No se completó el registro, favor contactarnos directamente");
				});
		}
	};
	return (
		<Container component="main" maxWidth="sm" style={{ background: "#d8d1d8" }}>
			<br />
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Registrarse
				</Typography>
				<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={5}>
							<TextField
								autoComplete="fname"
								name="nombre"
								variant="outlined"
								required
								fullWidth
								id="nombre"
								label="Nombre"
								autoFocus
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={7}>
							<TextField
								autoComplete="lname"
								name="apellidos"
								variant="outlined"
								required
								fullWidth
								id="apellidos"
								label="Apellidos"
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<form className={classes.container} noValidate>
								<TextField
									id="date"
									name="nacimiento"
									onChange={handleInputChange}
									label="Fecha de nacimiento"
									type="date"
									className={classes.textField}
									InputLabelProps={{
										shrink: true
									}}
								/>
							</form>
						</Grid>
						<Grid item xs={12} sm={4}>
							<FormControl className={classes.formControl}>
								<InputLabel id="demo-simple-select-label">Sexo</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={sex}
									onChange={handleChangeSex}
									name="sexo">
									<MenuItem value={10}>Masculino</MenuItem>
									<MenuItem value={20}>Femenino</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={4}>
							<TextField
								autoComplete="ftelefono"
								name="telefono"
								variant="outlined"
								fullWidth
								id="telefono"
								label="Telefono"
								onChange={handleInputChange}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Correo"
								name="email"
								autoComplete="email"
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Contraseña"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={handleInputChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="confPassword"
								label="Confirmar contraseña"
								type="password"
								id="password1"
								autoComplete="current-password"
								onChange={handleInputChange}
							/>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<ModalTerms />
					</Grid>
					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						Registrarse
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="#" variant="body2" to="/login">
								Ya tienes una cuenta? Ingrese
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			{confReg ? <Redirect to="/login" /> : null}
		</Container>
	);
}

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, useParams } from "react-router-dom";
import { Card, Form, Col } from "react-bootstrap";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

	const handleChangeSex = event => {
		setSex(event.target.value);
	};
	return (
		<Container component="main" maxWidth="sm">
			<br />
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Registrarse
				</Typography>
				<form className={classes.form} noValidate>
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
								label="apellidos"
							/>
						</Grid>
						<Grid item xs={12} sm={4}>
							<form className={classes.container} noValidate>
								<TextField
									id="date"
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
									onChange={handleChangeSex}>
									<MenuItem value={10}>Hombre</MenuItem>
									<MenuItem value={20}>Mujer</MenuItem>
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
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password1"
								label="Confirmar contraseña"
								type="password1"
								id="password1"
								autoComplete="current-password"
							/>
						</Grid>
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
		</Container>
	);
}

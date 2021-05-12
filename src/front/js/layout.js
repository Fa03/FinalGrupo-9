import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "bootswatch/dist/litera/bootstrap.min.css";
import { Home } from "./pages/home";

import { RetrivePass } from "./pages/retrivePass";

import { Order } from "./pages/order";
import { MyOrders } from "./pages/myOrders";
import { Products } from "./pages/products";

import SignIn from "./pages/login2";
import SignUp from "./pages/register2";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SocialMedia } from "./component/socialMedia";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100" style={{ background: "#d8d1d8" }}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/retrivePass">
							<RetrivePass />
						</Route>
						<Route exact path="/login">
							<SignIn />
						</Route>
						<Route exact path="/register">
							<SignUp />
						</Route>
						<Route exact path="/order">
							<Order />
						</Route>
						<Route exact path="/myOrders">
							<MyOrders />
						</Route>
						<Route exact path="/products">
							<Products />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

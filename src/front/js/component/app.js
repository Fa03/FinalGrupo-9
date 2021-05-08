import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm";
//import "../../styles/app.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe(
	"pk_test_51ImpXnCIKWo2E2PyXAT9Eho5Pf4kOo7VUIDhDbCUPc80Ls5Yl2Je76Zv20TAeSGQabogfr30vafBwrY7Y9qmRrei00wEOlIgNG"
);

export default function App() {
	return (
		<div className="app">
			<Elements stripe={promise}>
				<CheckoutForm />
			</Elements>
		</div>
	);
}

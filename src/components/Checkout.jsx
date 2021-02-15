import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./Checkout.css";
import '../index.css';
import { HotdogImages } from './Shipping';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const API_KEY = process.env.REACT_APP_STRIPE_CLIENT_API_KEY
const promise = loadStripe(API_KEY);

export default function Checkout(props) {
	let selectedHotdogs = [];
	let amt = 404;
	let info = [];

	if (props.location.state != null) {
		selectedHotdogs = props.location.state.selectedHotdogs
		amt = props.location.state.amt
		info = props.location.state.shippingInfo
	} 
  return (
  	<div className="panel" id="shipping">
            <div className="panel-header">
              <div className="panel-title">
                <h4>Your <span>🌭</span> Pins</h4>
                <h6>Subtotal: &#36;{amt}</h6>
              </div>
            </div>
            <div className="panel-body">
				<div id="shippingImg">
					<HotdogImages dogs = {selectedHotdogs}/>
				</div>
			</div>
        <div className="hero column col-auto col-mx-auto">
        	 <div className="Checkout row">
            <div className="column" id="leftCheckout">
              <h5>Personal Info</h5>
                  <div> {info["firstName"]} {info["lastName"]} </div>
                  <div> {info["addr1"]}, {info["city"]}, {info["state"]}, {info["zip"]} </div>
                  <div> {info["email"]}, {info["phone"]} </div>
            </div>
            <div className="column" id="rightCheckout">
              <h5>Payment Info</h5>
      			<Elements stripe={promise}>
      			  <CheckoutForm items={selectedHotdogs} amt = {amt}/>
     			</Elements>
          </div>
    		</div>
        </div>
      </div>
  );
}
import React, { Component } from 'react';
import ReactDOM, { Render } from 'react-dom';
import '../index.css'; // Maybe add shipping CSS
// import App from './App';
// import { useLocation } from "react-router-dom";
import history from '../history';
import { useFormik } from "formik";


export default function Shipping(props) {
	console.log(props.location)
	const selectedHotdogs = props.location.state.selectedHotdogs
	console.log(JSON.stringify(selectedHotdogs))
	const amt = selectedHotdogs.length * 12;
	const cardholderFields = [('firstName', 'Haute'),
						 ('lastName', 'Doug'),
                         ('addr1', '1 Bratwurst St'),
                         ('city', 'Frankfurt'),
                         ('state', 'CA'),
                         ('zip', '94101'),
                         ('email', 'holdthemustard@hotdog.com'),
                         ('phone', '4645553633')];
    const cardholderData = []

	return (
		<div className="columns" id="shipping">
            <div className="panel-header">
              <div className="panel-title">
                <h4>Your <span class="text-error">🌭</span> Pins</h4>
                <h6>Subtotal: &#36;{amt}.00</h6>
              </div>
			<div id="shippingImg">
				<HotdogImages dogs = {selectedHotdogs}/>
			</div>
          </div>
        <div className="hero column col-auto col-mx-auto">
          <div className="panel" id="shippingInfoForm">
            <div className="panel-header">
              <div className="panel-title">
                <h4>Shipping &amp; Billing Info</h4>
              </div>
            </div>
            	<ShippingInfoForm items= {selectedHotdogs} />
          </div>
        </div>
      </div>


	)
}


const HotdogImages = props => {
	const imgs = props.dogs.map(({ hotdog, availableHotdogsIndex }, i) => {
		return (
			<img
				style={{ margin: "auto", maxWidth: 150 }}
	            src={process.env.PUBLIC_URL + '../previews/' + hotdog + ".png"}
	        />
		);
	});
	return imgs;
}

const ShippingInfoForm = props => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			addr1: '',
			state: '',
			zip: '',
			phone: ''
		},
		onSubmit: values => {
			//DO SOMETHING HERE... Likely push to history and update path.
		}
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="firstName"> First Name</label>
			<input
				id="firstName"
		        name="firstName"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.firstName}
       		/>

			<label htmlFor="lastName"> Last Name</label>
			<input
				id="lastName"
		        name="lastName"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.lastName}
       		/>

			<label htmlFor="addr1"> Address</label>
			<input
				id="addr1"
		        name="addr1"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.addr1}
       		/>

			<label htmlFor="state"> State</label>
			<input
				id="state"
		        name="state"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.state}
       		/>

			<label htmlFor="zip"> Zip</label>
			<input
				id="zip"
		        name="zip"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.zip}
       		/>

			<label htmlFor="email"> email</label>
			<input
				id="email"
		        name="email"
		        type="email"
		        onChange={formik.handleChange}
		        value={formik.values.email}
       		/>

			<label htmlFor="phone"> phone</label>
			<input
				id="phone"
		        name="phone"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.firstName}
       		/>

       		<button type="submit" id="submit"> Next → </button>
       		
       	</form>
	);
};
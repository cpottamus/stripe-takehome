import React from 'react';
import '../index.css';
import history from '../history';
import { useFormik } from "formik";


export default function Shipping(props) {
	let selectedHotdogs = [];
	let amt = 404;

	if (props.location.state != null) {
		selectedHotdogs = props.location.state.selectedHotdogs
		amt = selectedHotdogs.length * 12;
	} 
	const cardholderFields = [('firstName', 'Haute'),
						 ('lastName', 'Doug'),
                         ('addr1', '1 Bratwurst St'),
                         ('city', 'Frankfurt'),
                         ('state', 'CA'),
                         ('zip', '94101'),
                         ('email', 'holdthemustard@hotdog.com'),
                         ('phone', '4645553633')];

	return (
		<div className="panel" id="shipping">
            <div className="panel-header">
              <div className="panel-title">
                <h4>Your <span>🌭</span> Pins</h4>
                <h6>Subtotal: &#36;{amt}.00</h6>
              </div>
            </div>
            <div className="panel-body">
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
            	<ShippingInfoForm items= {selectedHotdogs} cardholderFields = {cardholderFields} amt = {amt}/>
          </div>
        </div>
      </div>


	)
}

export const HotdogImages = props => {
	const imgs = props.dogs.map(({ hotdog, availableHotdogsIndex }, i) => {
		return (
			<img
				style={{ margin: "auto", maxWidth: 150 }}
	            src={process.env.PUBLIC_URL + '../previews/' + hotdog + ".png"}
	            alt="hot diggity dogs"
	            key= {i}
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
			city: '',
			state: '',
			zip: '',
			phone: ''
		},
		onSubmit: values => {
			history.push({ pathname: '/checkout', state:{
				selectedHotdogs: props.items,
				amt: props.amt,
				shippingInfo: values
			}});
			
		}
	});
	return (
		<form className="form-horizontal" onSubmit={formik.handleSubmit}>
		 <div className="panel-body">
		  <div className="form-group">
		   <div className="col-3 col-sm-12">
			<label htmlFor="firstName"> First Name</label>
			</div>
		   <div className="col-9 col-sm-12">
			<input
				id="firstName"
		        name="firstName"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.firstName}
		        placeholder= {props.cardholderFields[0]}
		        required
       		/>
       	   </div>
       	   <div className="col-3 col-sm-12">
			<label htmlFor="lastName"> Last Name</label>
			</div>
			<div className="col-9 col-sm-12">
			<input
				id="lastName"
		        name="lastName"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.lastName}
		        placeholder= {props.cardholderFields[1]}
		        required
       		/>
       		</div>
       		<div className="col-3 col-sm-12">
			<label htmlFor="addr1"> Address</label>
			</div>
			<div className="col-9 col-sm-12">
			<input
				id="addr1"
		        name="addr1"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.addr1}
		        placeholder= {props.cardholderFields[2]}
		        required
       		/>
       		</div>
       		<div className="col-3 col-sm-12">
			<label htmlFor="addr1"> City</label>
			</div>
			<div className="col-9 col-sm-12">
			<input
				id="city"
		        name="city"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.city}
		        placeholder= {props.cardholderFields[3]}
		        required
       		/>
       		</div>
       		<div className="col-3 col-sm-12">
			<label htmlFor="state"> State</label>
			</div>
			<div className="col-9 col-sm-12">
			<input
				id="state"
		        name="state"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.state}
		        placeholder= {props.cardholderFields[4]}
		        required
       		/>
       		</div>
       		<div className="col-3 col-sm-12">
			<label htmlFor="zip"> Zip</label>
			</div>
			<div className="col-9 col-sm-12">
			<input
				id="zip"
		        name="zip"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.zip}
		        placeholder= {props.cardholderFields[5]}
		        required
       		/>
       		</div>
       		<div className="col-3 col-sm-12">
			<label htmlFor="email"> email</label>
			</div>
			<div className="col-9 col-sm-12">
			<input
				id="email"
		        name="email"
		        type="email"
		        onChange={formik.handleChange}
		        value={formik.values.email}
		        placeholder= {props.cardholderFields[6]}
		        required
       		/>
       		</div>
       		<div className="col-3 col-sm-12">
			<label htmlFor="phone"> phone</label>
			</div>
			<div className="col-9 col-sm-12">
			<input
				id="phone"
		        name="phone"
		        type="text"
		        onChange={formik.handleChange}
		        value={formik.values.phone}
		        placeholder= {props.cardholderFields[7]}
		        required
       		/>
       		</div>
   		   </div>
   		 </div>
   		<div className="panel-footer">
       		<button type="submit" id="submit"> Next → </button>
   		</div>
       		
       	</form>
	);
};
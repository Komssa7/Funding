import React, { useState, useEffect, useContext } from 'react';

import { v4 as uuidv4 } from 'uuid';
// import { BookContext } from "../context/books";
import { processOrder } from 'src/mygraphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';
// import { CartContext } from "../context/cart";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from 'src/pages/publicpages/Homepage';
import Layout from 'src/template/layout/Layout';
import { default as Adminhomepage } from 'src/pages/adminpages/Homepage';
import Adminlayout from 'src/template/adminlayout/Adminlayout';

const CARD_ELEMENT_OPTIONS = {
	style: {
		base: {
			color: '#32325d',
			fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
			fontSmoothing: 'antialiased',
			fontSize: '16px',
			'::placeholder': {
				color: '#aab7c4',
			},
		},
		invalid: {
			color: '#fa755a',
			iconColor: '#fa755a',
		},
	},
};

const CheckoutForm = (props: any) => {
	const navigate = useNavigate();
	const checkout = async (orderDetails: any) => {
		const payload = {
			id: uuidv4(),
			...orderDetails,
		};
		try {
			// navigate('../admin/campaigns/');
			await API.graphql(graphqlOperation(processOrder, { input: payload }));

			console.log('Order is successful');
			navigate('../donationComplete');
			// <Route path='admin/' element={<Adminlayout />}>
			// 	<Route path='homepage' element={<Adminhomepage />} />
			// </Route>
		} catch (err) {
			console.log(err);
		}
	};
	//   const { cart, total, clearCart } = useContext(CartContext);
	//   const { checkout } = useContext(BookContext);
	const [orderDetails, setOrderDetails] = useState({
		campaignID: props.childdata.campainID,
		rewardcategoryID: props.childdata.rewardcategoryID,
		total: props.childdata.total,
		address: '',
		token: '',
	});
	const [error, setError] = useState(null);
	const stripe = useStripe();
	const elements = useElements();

	// console.log(orderDetails);

	useEffect(() => {
		if (orderDetails.token != '') {
			checkout(orderDetails);
			//clearCart();
			//history.push("/");
		}
	}, [orderDetails]);

	//   // Handle real-time validation errors from the card Element.
	const handleChange = (event: any) => {
		if (event.error) {
			setError(event.error.message);
		} else {
			setError(null);
		}
	};

	//   // Handle form submission.
	const handleSubmit = async (event: any) => {
		event.preventDefault();
		const card = elements!.getElement(CardElement);
		if (card !== null) {
			const result = await stripe!.createToken(card);
			if (result.error) {
				console.log('Error');
			} else {
				setError(null);
				//       // Send the token to your server.
				const token = result.token;
				console.log('token' + token);
				setOrderDetails({ ...orderDetails, token: token.id });
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='checkout-form'>
				{/* <label htmlFor='checkout-address'>Shipping Address</label> */}
				Shipping Address
				<Grid container spacing={2}>
					<Grid item xs={12} sm={9}>
						<TextField autoComplete='address' name='street' required id='street' label='Street' autoFocus />
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField required id='city' label='city' name='city' autoComplete='address-level2' />
						<TextField required id='zip' label='zip' name='zip' autoComplete='postal-code' />
					</Grid>
					<Grid item xs={12}>
						<TextField required id='state' label='State/Province' name='state' autoComplete='address-level3' />
						<TextField required id='country' label='Country' name='country' autoComplete='Country' />
					</Grid>
				</Grid>
				{/* <input id='checkout-address' type='text' onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })} /> */}
				<div className='stripe-section'>
					<label htmlFor='stripe-element'> Credit or debit card </label>
					<CardElement id='stripe-element' options={CARD_ELEMENT_OPTIONS} onChange={handleChange} />
				</div>
				<div className='card-errors' role='alert'>
					{error}
				</div>
			</div>
			<button type='submit' className='btn'>
				Submit Payment
			</button>
		</form>
	);
};

export default CheckoutForm;

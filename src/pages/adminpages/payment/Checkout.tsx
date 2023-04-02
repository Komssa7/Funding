import React from 'react';
// import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from 'src/component/privatecomponent/CheckoutForm';
import { useParams } from 'react-router';

const Checkout = () => {
	const stripePromise = loadStripe(
		'pk_test_51LKQnKDfciEvoute7OkpC9UcxLpqM2Zc61CE3GIPZbUzZ7uzDFvJOFlwyhdkHbbnhotdcoU0bNRdSjbkqaVYHuu100QTSvLUNk'
	);
	let paramdata = useParams();
	const campainID = paramdata.campaignID;
	const rewardcategoryID = paramdata.rewardcategoryID;
	const total = paramdata.total;
	const alldata = { campainID, rewardcategoryID, total };
	return (
		<section className='checkout-wrapper'>
			<Elements stripe={stripePromise}>
				<section>
					<h2>Time to Checkout</h2>
					<CheckoutForm childdata={alldata} />
				</section>
			</Elements>
		</section>
	);
};

export default Checkout;

/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51MvWVWBBufmt57HMpU7Bh5gVFG84lydsV5JFGoCIiWzEQyv91h1ZBYF1p2yspJRulwBsKVIuxwikr3VZ4Aj90Iso00i3lUUJ1V'
);

export const bookTour = async tourId => {
  console.log(1221);
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    let a = await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
    console.log(a);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

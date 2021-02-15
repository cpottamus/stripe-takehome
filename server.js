const express = require("express");
const app = express();
const cors = require('cors');
require('dotenv').config();
// This is your real test secret API key.
const API_KEY = process.env.REACT_APP_STRIPE_SECRET_API_KEY
const stripe = require("stripe")(API_KEY);
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(express.static("."));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());




const calculateOrderAmount = items => {
  if (items === undefined){
    numItems = 1 //Stripe library fails $0 amount payments, which causes the request to hang. Out of scope to make this more robust server-side.
  } else {
    var numItems = items.length
  }

  return 1200 * numItems
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    //verification
    metadata: {integration_check: 'accept_a_payment'},
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

//Listening in on Webhook.

// Match the raw body to content type application/json
app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
  let event;

  try {
    event = request.body;
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful!');
      fs.appendFile('paymentHistory.log', JSON.stringify(paymentIntent), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      break;
    case 'payment_method.attached':
      const paymentMethod = event.data.object;
      console.log('PaymentMethod was attached to a Customer!');
      fs.appendFile('paymentHistory.log', JSON.stringify(paymentMethod), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.json({received: true});

  //WRITE OUR REGISTRY HERE
});

app.listen(4242, () => console.log('Node server listening on port 4242!'));
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KKlRiSBvCVcsa1IeKnlWZgGKgqy0LxdKmj1pLtwWoJ6L01nhTmI8O1Gb3aUI2KKdmRkciyr7lUTXnLFFMNLBSbf00TmxcuzHL"
);

// const router = express.Router()


// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) =>
  response.status(200).send("hello world!!!")
);

app.post("/payments/create", async (request, response) => {
//   response.set(
//     "Content-Security-Policy",
//     `script-src 'self' https://js.stripe.com https://checkout.stripe.com; style-src 'self' checkout.stripe.com; frame-src 'self' *.stripe.com *.stripe.network; img-src data: 'self' https://*.stripe.com; connect-src 'self' *.stripe.com;`
//   );

  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
    payment_method_types: ['card'],
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/project-50331/us-central1/api

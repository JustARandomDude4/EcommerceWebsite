/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51OkS7VSBYhXA4TUcGeozJFY8zpJ1JTrOgf4AwQl2IaLmGsfBoOZbJMzPTh9iqJLfZOnS0M1njXWMzOesHipIhavk00AjwLRg9V");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());
const corsOption = {
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOption));
// - API routes
app.get("/hi", (request, response) => response.status(200).send("hello world"));

app.get("/", (req, res, next) => {
  res.json({msg: "This is CORS-enabled for all origins!"});
});
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api


const PORT = 3456;

app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});

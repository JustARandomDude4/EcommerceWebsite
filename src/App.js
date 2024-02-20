import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header"
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { auth } from "./Components/firebase";
import { useStateValue } from "./Components/StateProvider";
import Payment from "./Components/Payment";
import Orders from "./Components/Orders";
import Footer from "./Components/Footer";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51OkS7VSBYhXA4TUc2C648QPwcGfejBuk0sNOFnCWH5yJeLNnXvRgDjF38pVVKYqWBOUUt1fIHB6Qscjz4gN6eDlK003yMegc1h"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    

    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/orders" element={<><Header/><Orders/></>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={<><Header/><Checkout/></>} />
          <Route path="/payment" element={<><Header/> <Elements stripe={promise}><Payment/></Elements>  </>} />
          <Route path="/orders" element={<><Header/><Orders/></>} />
          <Route path="/" element={<><Header/><Home/></>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
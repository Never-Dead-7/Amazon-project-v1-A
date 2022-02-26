import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkbox from "./Checkbox.js";
import Login from "./Login.js";
import Payment from "./Payment.js";
import { StateValue } from "./Stateprovider";
import { auth } from "./dbfirebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Order";

const promise = loadStripe("pk_test_51KKlRiSBvCVcsa1IJXNzXydHpfRED4MSzmjZjwY2hFFWRfco8e9HPG6JJTATTBZpiA2vdCchL5OTjlLUEnzOz7oh00vDjgCS0j");

function App() {
  const [{ user }, dispatch] = StateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user just logged in / user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Checkbox">
            <Header />
            <Checkbox />
          </Route>
          <Route path="/Payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

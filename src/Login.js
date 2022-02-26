import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "./dbfirebase.js";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <section className="login_head">
        <Link to="/">
          <img
            src="https://i2.wp.com/www.jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
            alt="amazon"
          />
        </Link>
      </section>
      <section className="login_form">
        <div className="sign_in">
          <span className="sign_in_header">Sign-In</span>
          <form action="" className="form">
            <div className="email">
              <span>Email or mobile phone number</span>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="on"
                />
            </div>
            <div className="password">
              <span>Enter your password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="on"
              />
            </div>
            <button type="submit" onClick={signIn} className="btn_sign">
              Sign in
            </button>
          </form>
          <span className="Notice">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </span>
          <button type="submit" onClick={signUp} className="btn_sign">
            create amazon account
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;

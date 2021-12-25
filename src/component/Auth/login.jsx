import React from "react";
import { useState } from "react";
import { auth } from "./../../firebase-confic";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div class="wrapper">
        <div class="title-text">
          <div class="title login">Login Form</div>
          <div class="title signup">Signup Form</div>
        </div>
        <div class="form-container">
          <div class="slide-controls">
            <input type="radio" name="slide" id="login" checked />
            <input type="radio" name="slide" id="signup" />
            <label for="login" class="slide login">
              Login
            </label>
            <label for="signup" class="slide signup">
              Signup
            </label>
            <div class="slider-tab"></div>
          </div>
          <div class="form-inner">
            <form action="#" class="login">
              <div class="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div class="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div class="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div class="signup-link">
                Not a member? <a href="">Signup now</a>
              </div>
            </form>
            <form action="#" class="signup">
              <div class="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                  required
                />
              </div>
              <div class="field">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                  required
                />
              </div>
           
              <div class="field btn">
                <div class="btn-layer"></div>
                <input type="submit" onClick={register} value="Signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

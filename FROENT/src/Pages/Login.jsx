import React from "react";
import axios from "axios";

import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { auth, provider } from "../firebase";
import { Box, Input } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
//  import { ActionTypes } from './Reducer';
import { actionTypes } from "../Reducer";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
export const Login = () => {
  // const nav = useNavigate();
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        // console.log(result.user)
      })
      .catch((error) => alert(error.message));
  };

  //auth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    let payload = {
      email,
      password,
    };

    axios
      .post("https://trackime.herokuapp.com/auth/login", payload)
      .then((response) => {
        // console.log("toke", response.data.token);
        localStorage.setItem("token", response.data.token);
        nav("/dashboard", { replace: true });
      })
      .catch((err) => alert("Plese Try Again. Some Field Missing"));
    // try {
    //   e.preventDefault();
    //   // console.log(formData)
    //   axios.post("http://localhost:5000/auth/login", payload);
    //   const user = data[0];
    //   console.log(user);
    //   localStorage.setItem("userid", user["_id"]);
    //   // console.log(data[0]);

    //   nav("/");
    // } catch (err) {
    //   if (err.response.status === 401) {
    //     alert("invaild user ");
    //   }
    // }
  };

  return (
    <div>
      <div className={styles.prmaindiv}>
        <div className={styles.prleftdiv}>
          <img
            alt="trackinhtime_logo"
            style={{ maxHeight: "100%", maxWidth: "96%" }}
            src="https://pro.trackingtime.co/img/login/1.svg"
          ></img>
        </div>
        <div className={styles.prrightdiv}>
          <span style={{ fontSize: "3vh" }}>
            <span style={{ fontWeight: "300" }}>TRACKING</span>TIME
          </span>
          <Box className={styles.prbuttondiv}>
            <Button width={[]} onClick={signIn}>
              <img
                alt="google_logo"
                src="https://pro.trackingtime.co/img/login/google-logo.png"
              ></img>
              <span>Sign in with Google</span>
            </Button>
            <Button w="28rem">
              <img
                alt="microsoft_logo"
                src="https://pro.trackingtime.co/img/login/microsoft-logo.png"
              ></img>
              <span>Sign in with Microsoft</span>
            </Button>
            <Button
              width={{
                sm: "20rem",
                md: "20rem",
                lg: "20rem",
                xl: "20rem",
              }}
            >
              <img
                alt="apple_logo"
                src="https://pro.trackingtime.co/img/login/apple-logo.png"
              ></img>
              <span>Sign in with Apple</span>
            </Button>
          </Box>
          <span className={styles.signuporlogin}>Sign up with your email</span>
          <Box>
            <form className={styles.rightlogin}>
              <Input
                width={{
                  sm: "12rem",
                  md: "12rem",
                  lg: "15rem",
                  xl: "18rem",
                }}
                type="email"
                w="16rem"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <Input
                width={{
                  sm: "12rem",
                  md: "12rem",
                  lg: "15rem",
                  xl: "18rem",
                }}
                type="password"
                w="16rem"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <Input placeholder='Basic usage' /> */}

              <br />

              <button className={styles.loginbtn} onClick={handlelogin}>
                Login{" "}
              </button>
              <div className="signup">
                <span
                  style={{
                    marginTop: "2vh",
                    color: "gray",
                    marginBottom: "2vh",
                  }}
                >
                  Dont have an account?{" "}
                  <Link to="/signup">
                    <span className={styles.newsignup}>sign up</span>
                  </Link>
                </span>
              </div>

              <span className={styles.term}>
                Terms of service / Privacy Policy
              </span>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};

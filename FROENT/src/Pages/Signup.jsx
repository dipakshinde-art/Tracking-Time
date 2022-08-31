import { React, useState } from "react";
import { Link as RLink } from "react-router-dom";
import styles from "./Login.module.css";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
//  import { ActionTypes } from './Reducer';
import { actionTypes } from "../Reducer";
import axios from "axios";
import { useStateValue } from "../StateProvider";
import { useDispatch } from "react-redux";
export const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [state, dispatch] = useStateValue();

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

  // Auth
  const [email, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleuserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };

    console.log(payload)
    axios
      .post("https://trackime.herokuapp.com/auth/signup", payload)
      .then((response) => {
        console.log(response);
        alert("Signup successfully");
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        alert("please sigup");
      });
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
          <div className={styles.prbuttondiv}>
            <Button onClick={signIn}>
              <img
                alt="google_logo"
                src="https://pro.trackingtime.co/img/login/google-logo.png"
              ></img>
              <span>Sign in with Google</span>
            </Button>
            <Button>
              <img
                alt="microsoft_logo"
                src="https://pro.trackingtime.co/img/login/microsoft-logo.png"
              ></img>
              <span>Sign in with Microsoft</span>
            </Button>
            <Button>
              <img
                alt="apple_logo"
                src="https://pro.trackingtime.co/img/login/apple-logo.png"
              ></img>
              <span>Sign in with Apple</span>
            </Button>
          </div>
          <span className={styles.signuporlogin}>Sign up with your email</span>
          <form className={styles.rightlogin}>
            <Input
              pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
              w="16rem"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleuserChange}
              required
            />
            <br />
            <br />
            <Input
              w="16rem"
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              required
              // pattern="[a-zA-Z0-9-@]{8,}"
            />
            <br />

            <button className={styles.loginbtn} onClick={handleSubmit}>
              Signup
            </button>
            <br />
            <RLink to="/login">
              <span className={styles.term}>Back to login</span>
            </RLink>
            <div className="signup">
              {/* <span style={{marginTop:"2vh",color:"gray",marginBottom:"2vh"}}>Dont have an account? <span style={{cursor:'pointer',textDecoration:"underline",marginTop:"2vh",color:"black",marginBottom:"2vh"}} >sign up</span></span> */}
            </div>

            <span className={styles.term}>
              Terms of service / Privacy Policy
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

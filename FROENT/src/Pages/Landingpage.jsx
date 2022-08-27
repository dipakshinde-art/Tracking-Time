import React from "react";
import css from "./Landing.module.css";
import { Button, Input } from "@chakra-ui/react";
const Landingpage = () => {
  return (
    <div className={css.main}>
      <div className={css.head}>
        <div>
          <h1>TRACKINGTIME TIME TRACKER SOFTWARE</h1>
        </div>
        <div>
          <h2>SET AND FORGET TIME TRACKING</h2>
        </div>
        <div>
          <h4>Bring your productivity to the next level.</h4>
        </div>
      </div>
      <div className={css.btn}>
        <Input
          w="265px"
          h="40px"
          textColor="black"
          textAlign="center"
          borderColor="black"
          color="black"
          placeholder="Your work Email"
        />
        <Button
          bgColor="#00AD95"
          color="white"
          w="210px"
          h="40px"
          _hover={{ bgColor: "#00AD95" }}
        >
          START FOR FREE!
        </Button>
      </div>
      <div className={css.tt_logo}>
        <div>
          <img
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png"
            alt=""
          />
          <a href="">
            <h3>Sign in with Google</h3>
          </a>
        </div>
        <img
          src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/ilus-header-2.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Landingpage;

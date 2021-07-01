import React, { useState } from "react";
import { Grid, Paper, TextField, InputAdornment } from "@material-ui/core";
import { Link } from "react-router-dom";
// import "fontsource-roboto";
import EmailField from "../../login_signup/EmailField";
import "./ForgotPassword.css";
import IllustrationSvg from "../../resources/login.svg";
function ForgotPassword() {
  const [otpFieldVisible, otpFieldVisibilityToggle] = useState(false);
  const [buttonLabel, changeButtonLabel] = useState("Send OTP");
  const sendOTP = () => {
    otpFieldVisibilityToggle(true);
    changeButtonLabel("Verify");
  };
  return (
    <Grid className="background">
      <Paper elevation={20} className="mainContainer">
        <div className="illustration-box">
          <Link to="/">
            <img src={IllustrationSvg} alt="login" />
          </Link>
        </div>
        <div className="form-box">
          <div className="formItem"></div>
          <div className="headingTextContainer">
            <span className="headingTextItem headingText">Reset Password</span>
          </div>
          <form className="formContainer" action="/home">
            <EmailField
              label="Email / Phone Number"
              type="text"
              className="formItem"
            />
            <div className="formItem"></div>
            <div className={otpFieldVisible ? "formItem" : "hidden"}>
              <TextField
                id="OTP"
                type="number"
                label="Enter OTP"
                className="formItem"
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <div></div>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <button
              className="formItem signinButton"
              onClick={sendOTP}
              type="button"
            >
              {buttonLabel}
            </button>
            <div className="formItem"></div>
            <span className="smallText">
              Don't have an account?{" "}
              <Link to="/signup" className="getStarted">
                Get Started
              </Link>
            </span>
          </form>
        </div>
      </Paper>
    </Grid>
  );
}
export default ForgotPassword;

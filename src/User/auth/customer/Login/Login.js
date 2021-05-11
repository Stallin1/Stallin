import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
// import "fontsource-roboto";
import EmailField from "../../login_signup/EmailField";
import PasswordField from "../../login_signup/PasswordField";

import "./Login.css";
import IllustrationSvg from "../../resources/login.svg";
function Login() {
  return (
    <Grid className="background">
      <Paper elevation={20} className="mainContainer">
        <div className="illustration-box">
          <Link to="/">
            <img src={IllustrationSvg} alt="login" />
          </Link>
        </div>
        <div className="form-box">
          <div className="headingTextContainer">
            <span className="headingTextItem headingText">
              Sign In to Continue
            </span>
            <span className="headingTextItem regularText">
              Experience the Ease Of Shopping
            </span>
          </div>
          <form className="formContainer" action="/home">
            <div className="formItem"></div>
            <EmailField
              label="Email / Phone Number"
              type="text"
              className="formItem"
            />
            <div className="formItem"></div>
            <PasswordField label="Password" type="password" />
            <Link to="/forgot_password" className="forgot-password">
              Forgot Password?
            </Link>
            <div className="formItem"></div>
            <button className="formItem signinButton" type="button">
              Sign In
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
export default Login;

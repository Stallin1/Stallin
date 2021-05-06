import React from "react";
import { Grid} from "@material-ui/core";
import { Link } from "react-router-dom";

import EmailField from "../../login_signup/EmailField";
import PasswordField from "../../login_signup/PasswordField";

import "fontsource-roboto";
import "./Login.css";
import IllustrationSvg from "../../resources/login.svg";
function Login() {
  return (
    <Grid>
      <div elevation={10} className="mainContainer">
        <div className="illustration-box">
          <img src={IllustrationSvg} alt="login" />
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
            <div className="formItem"></div>
            <button className="formItem signinButton" type="submit">
              Sign In
            </button>
            <div className="formItem"></div>
            <span className="smallText">
              Don't have an account?{" "}
              <Link to="/register" className="getStarted">
                Get Started
              </Link>
            </span>
          </form>
        </div>
      </div>
    </Grid>
  );
}
export default Login;

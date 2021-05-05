import React, { Component,useState } from "react";
import { Grid} from "@material-ui/core";
import { Link } from "react-router-dom";
import "fontsource-roboto";
import "./Register.css";
import IllustrationSvg from "../../resources/login.svg";
import EmailField from '../../login_signup/EmailField';
import PasswordField from '../../login_signup/PasswordField';
import SimpleField from '../../login_signup/SimpleField';
import ArrowButton from '../../login_signup/ArrowButton';
function ShopRegister() {
    const [isForm1Active, setForm1Active] = useState(true);
    const [isForm2Active, setForm2Active] = useState(false);
    const onNextClicked = () => {
        setForm1Active(!isForm1Active);
        setForm2Active(!isForm2Active);
    }
    const onSignUpClicked = () => {
        alert("Sign Up Successfull");
    }
  return (
    <Grid>
      <div elevation={10} className="mainContainer">
        <div className="illustration-box">
          <img src={IllustrationSvg} alt="login" />
        </div>
        <div className="form-box">
          <div className="headingTextContainer">
            <span className="headingTextItem headingText">Create Account</span>
            <span className="headingTextItem regularText">
              Make the World your Market
            </span>
          </div>
          <form className={isForm1Active ? "formContainer" : "hidden"}>
            <div className="formItem"></div>
            <EmailField label="Email" type="text" className="formItem" />
            <div className="formItem"></div>
            <div className="rowContainer">
              <SimpleField
                label="Phone Number"
                type="phone"
                className="rowItem"
              />
              <div className="separator"></div>
              <SimpleField label="Name" type="text" className="rowItem" />
            </div>
            <div className="formItem"></div>
            <div className="rowContainer">
              <PasswordField
                label="Password"
                type="password"
                className="rowItem"
              />
              <div className="separator"></div>
              <PasswordField
                label="Confirm Password"
                type="password"
                className="rowItem"
              />
            </div>
            <div className="formItem"></div>
            <ArrowButton
              onClick={onNextClicked}
              className="formItem signinButton"
            ></ArrowButton>
            <div className="formItem"></div>
            <span className="smallText">
              Already have an account?{" "}
              <a href="/login" className="getStarted">
                Sign In
              </a>
            </span>
          </form>
          <form className={isForm2Active ? "formContainer" : "hidden"}>
            <div className="formItem"></div>
            <SimpleField label="Address" type="text" className="rowItem" />
            <div className="formItem"></div>
            <div className="rowContainer">
              <SimpleField label="Pin Code" type="phone" className="rowItem" />
              <div className="separator"></div>
              <SimpleField label="State" type="text" className="rowItem" />
            </div>
            <div className="formItem"></div>
            <SimpleField label="Shop Type" type="text" className="rowItem" />
            <div className="formItem"></div>
            <div className="rowContainer">
              <input
                type="checkbox"
                id="tandccheckbox"
                name="tandccheckbox"
                className="rowitem TandCCheckbox"
              ></input>
              <label className="TandCText" htmlFor="tandccheckbox">
                I agree to Stallin's{" "}
                <a href="/" className="getStarted">
                  terms and Conditions
                </a>
              </label>
            </div>
            <div className="separator"></div>
            <div className="separator"></div>
            <button type="button" className="formItem signinButton">
              Sign Up
            </button>
            <div className="separator"></div>
            <span className="smallText">
              Already have an account?{" "}
              <a href="/login" className="getStarted">
                Sign In
              </a>
            </span>
          </form>
        </div>
      </div>
    </Grid>
  );
}
export default ShopRegister;

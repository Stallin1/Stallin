import React from 'react';
import {Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import 'fontsource-roboto';
import './Register.css';
import IllustrationSvg from '../../resources/login.svg';

import EmailField from "../../login_signup/EmailField";
import PasswordField from "../../login_signup/PasswordField";
import SimpleField from "../../login_signup/SimpleField";
function Register(){
return (
<Grid>
<div elevation={10} className="mainContainer">
<div className="illustration-box">
<img src={IllustrationSvg} alt="login"/>
</div>
<div className="form-box">
<div className="headingTextContainer">
<span className="headingTextItem headingText">Create Account</span>
<span className="headingTextItem regularText">Experience the Ease Of Shopping</span>
</div>
<form className="formContainer" action="/home">
<div className="formItem"></div>
<EmailField label="Email" type="text" className="formItem"/>
<div className="formItem"></div>
<div className="rowContainer">
<SimpleField label="Phone Number" type="phone" className="rowItem"/>
<div className="separator"></div>
<SimpleField label="Name" type="text" className="rowItem"/>
</div>
<div className="formItem"></div>
<div className="rowContainer">
<PasswordField label="Password" type="password" className="rowItem"/>
<div className="separator"></div>
<PasswordField label="Confirm Password" type="password" className="rowItem"/>
</div>
<div className="formItem"></div>
<button className="formItem signinButton" type="submit">Sign Up</button>
<div className="formItem"></div>
<span className="smallText">Already have an account? <Link to="/login" className="getStarted">Sign In</Link></span>
</form>
</div>
</div>
</Grid>
);
}
export default Register;
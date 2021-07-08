import React, {useState}from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link , useHistory} from "react-router-dom";
import "./Register.css";
import IllustrationSvg from "../../resources/login.svg";
// import "fontsource-roboto";
import EmailField from "../../login_signup/EmailField";
import PasswordField from "../../login_signup/PasswordField";
import SimpleField from "../../login_signup/SimpleField";
function Register() {
  const history = useHistory();
  const [user, setUser] = useState({
    email:"", phone:"", name:"", password:"", cpassword:""
  });
  let name, value;

  const handleInputs=(e, user, setUser)=>{
   name = e.target.name;
   value = e.target.value;
   setUser({ ...user, [name]:value});
   console.log(user);

  }
  const PostData = async (e)=>{
    e.preventDefault();
    const {email, phone, name, password, cpassword} = user;
     console.log(user);
    const res = await fetch("/register" , {
      method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body:JSON.stringify({
       email, phone, name, password, cpassword
      })
    });
     const data = await res.json();
     console.log(data);
  }
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
            <span className="headingTextItem headingText">Create Account</span>
            <span className="headingTextItem regularText">
              Experience the Ease Of Shopping
            </span>
          </div>
          <form className="formContainer" method="POST">
            <div className="formItem"></div>
            <EmailField label="Email" type="text" className="formItem" name='email' user={user} setUser={setUser} handleInputs={handleInputs}
                value={user.email}/>
            <div className="formItem"></div>
            <div className="rowContainer">
              <SimpleField
                label="Phone Number"
                type="phone"
                className="rowItem"
                name='phone'
                user={user} setUser={setUser}
                handleInputs={handleInputs}
                value={user.phone}
              />
              <div className="separator"></div>
              <SimpleField label="Name" user={user} setUser={setUser} type="text" className="rowItem" name='name'  handleInputs={handleInputs}
                value={user.name}/>
            </div>
            <div className="formItem"></div>
            <div className="rowContainer">
              <PasswordField
                label="Password"
                type="password"
                className="rowItem"
                user={user} setUser={setUser}
                name='password'
                handleInputs={handleInputs}
                value={user.password}
              />
              <div className="separator"></div>
              <PasswordField
                label="Confirm Password"
                type="password"
                user={user} setUser={setUser}
                className="rowItem"
                name="cpassword"
                handleInputs={handleInputs}
                value={user.cpassword}
              />
            </div>
            <div className="formItem"></div>
            <input type="submit" className="formItem signinButton" onClick={(e)=>PostData(e)} value="Sign Up"/>
            <div className="formItem"></div>
            <span className="smallText">
              Already have an account?{" "}
              <Link to="/login" className="getStarted">
                Sign In
              </Link>
            </span>
            <div className="formItem"></div>
          </form>
        </div>
      </Paper>
    </Grid>
  );
}
export default Register;

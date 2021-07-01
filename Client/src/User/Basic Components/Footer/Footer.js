import React, { useState } from "react";
import {Avatar,makeStyles,TextField} from '@material-ui/core';
import "./Footer.css";
import profileImg from './profile.jpg';
const useStyles = makeStyles((theme) => ({
    large: {
        width: '100px',
        height: '100px',
        scale:'crop',
    }
}));
const Footer = (props) => {
  var interval = null;
  const [aboutSelected, aboutSelectedToggle] = useState(false);
  const [contactSelected, contactSelectedToggle] = useState(false);
    const onAboutClickedHandler = () => {
        aboutSelectedToggle(!aboutSelected);
      if (contactSelected) contactSelectedToggle(!contactSelected);
      interval = setInterval(scrollToBottom, 100);
  };
    const onContactClickedHandler = () => {
      contactSelectedToggle(!contactSelected);
      if (aboutSelected) aboutSelectedToggle(!aboutSelected);
      interval = setInterval(scrollToBottom, 100);
  };
  const scrollToBottom = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
    clearInterval(interval);
  }
  return (
    <div className="footerContainer">
      <div className="footer-bar">
        <div className="empty-element"></div>
        <FooterLink
          onClick={onAboutClickedHandler}
          label="About"
          className={
            aboutSelected ? "footer-link-selected" : "footer-link-not-selected"
          }
        />
        <FooterLink
          onClick={onContactClickedHandler}
          label="Contact"
          className={
            contactSelected
              ? "footer-link-selected"
              : "footer-link-not-selected"
          }
        />
      </div>
      <About className={aboutSelected ? "about" : "hidden"} />
      <Contact className={contactSelected ? "about" : "hidden"} />
      <MadeBy />
    </div>
  );
};
const FooterLink = (props) => {
  return (
    <span onClick={props.onClick} className={props.className}>
      {props.label}
    </span>
  );
};
const About = (props) => {
    const classes = useStyles();
    return (
      <div className={props.className}>
        <div className="about-inner-container">
          <span className="about-text">
            Lorem nulla adipisicing aliqua aliqua anim culpa ullamco eiusmod
            magna Lorem nostrud consequat. Labore est laborum ullamco id laboris
            laboris est dolor et do culpa. Incididunt consequat Lorem ullamco
            culpa esse.Et cillum sunt aliqua cupidatat incididunt veniam. Nisi
            proident occaecat deserunt fugiat esse quis voluptate exercitation
            sint dolor dolor do consectetur dolore. Magna ex nostrud qui amet
            velit velit ea nostrud. Amet labore cillum ex qui ullamco aliquip.
            Occaecat proident mollit excepteur veniam do consequat ut aliqua
            sint anim voluptate. Sunt dolore ex labore duis deserunt. Cupidatat
            velit officia adipisicing eiusmod sint non.
          </span>
          <div className="avatars">
            <div className="avatar">
              <Avatar src={profileImg} className={classes.large} />
              <span>Jayesh Sharma</span>
            </div>
            <div className="avatar">
              <Avatar className={classes.large} src={profileImg} />
              <span>Jayesh Sharma</span>
            </div>
            <div className="avatar">
              <Avatar className={classes.large} src={profileImg} />
              <span className="">Jayesh Sharma</span>
            </div>
            <div className="avatar">
              <Avatar className={classes.large} src={profileImg} />
              <span>Jayesh Sharma</span>
            </div>
            <div className="avatar">
              <Avatar className={classes.large} src={profileImg}/>
              <span>Jayesh Sharma</span>  
            </div>
          </div>
        </div>
      </div>
    );
}
const Contact = (props) => {
    return (
      <div className={props.className}>
        <div className={"about-inner-container"}>
          <div className="separator"></div>
          <TextField label="Email" variant="outlined" />
          <div className="separator"></div>
          <TextField label="Message" multiline rows={6} variant="outlined" />
          <div className="separator"></div>
          <button className="sendMessageButton">Send Message</button>
          <div className="separator"></div>
        </div>
      </div>
    );
};
const MadeBy = (props) => {
  return (
    <div className="madeBy">Made By IIITIANS with &#x1F496;</div>
  );
}
export default Footer;

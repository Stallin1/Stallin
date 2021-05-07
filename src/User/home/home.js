<<<<<<< HEAD
import Footer from '../Basic Components/Footer/Footer.js'
const Home = () => {
  return (
    <div>
    <h1>Main Content</h1>
    <Footer />
    </div>
=======
import React from "react";
import Landing from "./components/Landing.jsx";
import Main from "./components/main";

const Home = () => {
  return (
    <>
      <Landing />
      <Main />
    </>
>>>>>>> 64113a2510e0682b11bd1b5126962a2959fbf995
  );
};
export default Home;
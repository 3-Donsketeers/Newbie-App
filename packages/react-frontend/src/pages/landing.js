import React from "react";
import Navigation from "../components/navbar.js";
import "../styles/styles.css";

export default function Landing() {
  return (
    <>
      <Navigation />
      <div className="page public-sans">
        <div className="centered-wrapper">
            <h1>Welcome the USDA Newbie App</h1>
        </div>
        <div className="centered-wrapper">
            <h4>Here you can find all the information you need to get started at the USDA - all in one convenient location.</h4>
        </div>
      </div>
    </>
  );
}

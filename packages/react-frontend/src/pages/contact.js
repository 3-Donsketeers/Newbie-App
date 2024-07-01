import React from "react";
import Navigation from "../components/navbar.js";
import "../styles/styles.css";

export default function Contact() {
  return (
    <>
      <Navigation />
      <div className="page public-sans">
        <h1>Contact</h1>
        <p> For assistance, please contact us at (888)888-8888
        </p>
        <p>OR contact us at our email at example@usda.gov</p>
        
        {/* Add more content here */}
      </div>
    </>
  );
}

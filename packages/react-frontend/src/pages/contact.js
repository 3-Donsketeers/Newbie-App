import React from "react";
import Navigation from "../components/navbar.js";
import "../styles/styles.css";

export default function Contact() {
  return (
    <>
      <Navigation />
      <div className="page public-sans center-text">
        <h1>Contact</h1>
        <h4>Customer Service Representatives are available via phone or live chat Monday to Friday from 8 AM – 5 PM EST</h4>
        <p><b>Closed on Federal Holidays.</b></p>
        <br />


        <h4>Call Us</h4>
        <p>Call us to speak with one of our Customer Service Representatives</p>

        <b>CALL (833) ONE-USDA</b>
        <b>(202) 720-2791</b>
        <br />
        <h4>Email Us</h4>
        <p>Send your questions via email and receive a response within 1-2 business days.</p>
        
        <p><b>askusda@usda.gov</b></p>

        {/* Add more content here */}
      </div>
    </>
  );
}

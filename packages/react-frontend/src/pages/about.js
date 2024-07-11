import React from "react";
import Navigation from "../components/navbar.js";
import "../styles/styles.css";

export default function About() {
  return (
    <>
      <Navigation />
      <div className="page public-sans">
        <h1>About</h1>
        <p> 
            <ul>
                <li>Introducing Newbie Hub, the software designed to help you navigate the U.S. Department of Agriculture (USDA)! Our objective is to offer a comprehensive and user-friendly website that provides novices with all the necessary knowledge they require to succeed in their USDA-related pursuits.</li>
                <li>Newbie Hub is available to streamline your journey, whether you are a novice farmer, a food safety enthusiast, or someone who is investigating USDA programs for the first time. Our comprehensive range of materials includes detailed instructions, interactive utilities, and specialized guidance designed to meet your individual requirements. Our application encompasses a wide range of topics, including comprehending USDA laws, obtaining grants and loans, using sustainable agricultural methods, and participating in nutrition programs.</li>
                <li>At Newbie Hub, we hold the belief that every individual should have access to dependable and comprehensible knowledge. Our diligent team consistently enhances the app with the most recent knowledge and optimal methods, guaranteeing that you have the most up-to-date and precise information readily available.</li>
                <li>Enroll in our network of individuals who are new to the USDA and begin your journey with assurance. Through Newbie Hub, you will not only receive information, but also have a supporting partner who is dedicated to ensuring your success. Discover a multitude of opportunities offered by the USDA, made accessible to you with the assistance of Newbie Hub.</li>
            </ul>
        </p>
        {/* Add more content here */}
      </div>
    </>
  );
}
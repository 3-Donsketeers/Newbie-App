import React from "react";
import Navigation from "../components/navbar.js";
import "../styles/styles.css";

export default function Quick() {
  return (
    <>
      <Navigation />
      <div className="page public-sans">
        <h1>Quick Access</h1>
        <p> 
            <ul>
                <li><a href="https://www.usda.gov/">USDA Site</a></li>
                <li><a href="https://make.gov.powerapps.us/">Microsoft PowerApps</a></li>
            </ul>
        </p>
        {/* Add more content here */}
      </div>
    </>
  );
}
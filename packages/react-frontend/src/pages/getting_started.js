import React from "react";
import Navigation from "../components/navbar.js";
import "../styles/styles.css";

export default function Started() {
  return (
    <>
      <Navigation />
      <div className="page public-sans">
        <h1>Getting Started</h1>
        <p> 
            <ul>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>
        </p>
        {/* Add more content here */}
      </div>
    </>
  );
}

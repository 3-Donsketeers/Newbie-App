import React from "react";
import Navigation from "../components/navbar.js";
import "../styles/styles.css";

export default function Agencies() {
  return (
    <>
      <Navigation />
      <div className="page public-sans">
        <h1>USDA Agencies & Mission Areas</h1>
        <p> 
            <ul>
              <li><b>Food Safety and Inspection Service (FSIS)</b>
              FSIS enhances public health and well-being by protecting the public from foodborne illness and ensuring that the nation's meat, poultry and egg products are safe, wholesome, and correctly packaged.
              </li>

              <li><b>National Agricultural Statistics Service (NASS)</b>
              NASS serves the basic agricultural and rural data needs of the country by providing objective, important and accurate statistical information and services to farmers, ranchers, agribusinesses and public officials. This data is vital to monitoring the ever-changing agricultural sector and carrying out farm policy.
              </li>
              
              <li><b>National Institute of Food and Agriculture (NIFA) </b>
              NIFA’s mission is to invest in and advance agricultural research, education, and extension to solve societal challenges. NIFA’s investments in transformative science directly support the long-term prosperity and global preeminence of U.S. agriculture.
              </li>
              
              <li><b>Rural Development (RD)</b>
              RD helps rural areas to develop and grow by offering Federal assistance that improves quality of life. RD targets communities in need and then empowers them with financial and technical resources.
              </li>
              
              <li><b>Rural Housing Service (RHS)</b>
              RHS offers a variety of programs to build or improve housing and essential community facilities in rural areas. RHS offers loans, grants and loan guarantees for single- and multi-family housing, child care centers, fire and police stations, hospitals, libraries, nursing homes, schools, first responder vehicles and equipment, housing for farm laborers and much more. 
              </li>
            </ul>
        </p>
        {/* Add more content here */}
      </div>
    </>
  );
}

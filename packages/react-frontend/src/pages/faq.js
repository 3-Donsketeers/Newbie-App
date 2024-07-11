import React from "react";
import Navigation from "../components/navbar.js";
import "../styles/styles.css";

export default function FAQ() {
  return (
    <>
      <Navigation />
      <div className="page public-sans">
        <h1>FAQ</h1>
        <p> 
            
            <ul>
            <li>How do I set up my PIV Card?</li>
                <ul>
                  <li>You will receive an email with instructions to make an appointment at your local office to get your picture taken and later eceive your PIV card. This process may take time, so please be sure to renew your LinkPass exemption until you have your PIV Card.</li>
                </ul>

                <li>Where can I find my mandatory training courses?</li>
                <ul>
                  <li>Mandatory training courses may be found in AgLearn at the bottom of the page.</li>
                </ul>

                <li>How do I fill out my timesheets?</li>
                  <ul>
                    <li> log into WebTA through your preferred method and click the Timesheets button.</li>
                  </ul>

                <li>Where can I find my SF-50?</li>
                  <ul>
                    <li>Your SF-50 can be found in your HR Portal.</li>
                  </ul>
                
            <li>How do I request time off or report sick leave?</li>
                <ul>
                  <li>Leave requests can be submitted through the "Leave Requests" button in WebTA. Be sure to have all Leave Requests approved by your supervisor.</li>
                </ul>

                <li>Who do I contact for IT support?</li>
                <ul>
                  <li>You can easily contact the CEC help desk through the "Help" icon on your desktop.</li>
                </ul>
            </ul>
        </p>
        {/* Add more content here */}
      </div>
    </>
  );
}

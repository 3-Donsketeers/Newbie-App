import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./styles/styles.css"
//import { HelmetProvider } from 'react-helmet-async';


/**
* Root of react site 
*
* Imports Helmet provider for the page head
* And App which defines the content and navigation
*/

// Render the site https://reactjs.org/docs/react-dom.html#render
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);

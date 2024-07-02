import * as React from "react";
import { Switch, Route, Router } from "wouter";
import About from "../pages/about";
import Test from "../pages/test";
import Contact from "../pages/contact.js";
import FAQ from "../pages/faq.js";
import Started from "../pages/getting_started.js";
import Agencies from "../pages/agencies.js";
import Landing from "../pages/landing.js"

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route path="/" component={Test} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={FAQ} />
      <Route path="/agencies" component={Agencies} />
      <Route path="/getting_started" component={Started} />
      <Route path="/landing" component={Landing} />
    </Switch>
);

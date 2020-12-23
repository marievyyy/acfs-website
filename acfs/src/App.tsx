import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.scss";

// components
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Apply from "./components/Apply/Apply";
import ApplyForm from "./containers/ApplyForm/ApplyForm";
import Store from "./containers/Store/Store";
import PayUs from "./containers/PayUs/PayUs";
import Announcement from "./containers/Announcement/Announcement";
import Testimonials from "./containers/Testimonials/Testimonials";
import About from "./components/About/About";

import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/apply" component={Apply} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/pay-us" component={PayUs} />
          <Route exact path="/apply-form" component={ApplyForm} />
          <Route exact path="/announcement" component={Announcement} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/about-us" component={About} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;

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
        </Switch>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}

export default App;

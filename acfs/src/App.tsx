import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/custom.scss";
import Navigation from "./components/Navigation/Navigation";
import AlertNotice from "./components/AlertNotice/AlertNotice";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <AlertNotice />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
